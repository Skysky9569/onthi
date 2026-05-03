/**
 * Visual Comparison System
 * Uses Playwright and pixelmatch to compare HTML files
 */

require('dotenv').config();
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const pixelmatch = require('pixelmatch');
const telegramNotifier = require('./telegramNotifier');

// Configuration
const CONFIG = {
  viewport: { width: 1280, height: 800 },
  screenshotDir: './screenshots',
  threshold: 0.1, // 10% difference threshold
  maxDiffPercent: 5, // Maximum allowed difference percentage
  originalFile: 'toanck2.html',
  outputDir: './output'
};

// Ensure directories exist
function ensureDirectories() {
  [CONFIG.screenshotDir, CONFIG.outputDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

// Take screenshot of HTML file
async function takeScreenshot(htmlFile, outputPath) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.setViewportSize(CONFIG.viewport);
    await page.goto(`file://${path.resolve(htmlFile)}`);

    // Wait for page to fully load
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000); // Additional wait for animations

    await page.screenshot({ path: outputPath, fullPage: true });
    console.log(`✓ Screenshot saved: ${outputPath}`);
  } catch (error) {
    console.error(`✗ Error taking screenshot of ${htmlFile}:`, error.message);
    throw error;
  } finally {
    await browser.close();
  }
}

// Compare two images using pixelmatch
function compareImages(img1Path, img2Path, diffPath) {
  const img1 = fs.readFileSync(img1Path);
  const img2 = fs.readFileSync(img2Path);

  const { PNG } = require('pngjs');
  const png1 = PNG.sync.read(img1);
  const png2 = PNG.sync.read(img2);

  const width = Math.max(png1.width, png2.width);
  const height = Math.max(png1.height, png2.height);

  const diff = new PNG({ width, height });

  const numDiffPixels = pixelmatch(
    png1.data,
    png2.data,
    diff.data,
    width,
    height,
    { threshold: CONFIG.threshold }
  );

  // Create difference image
  fs.writeFileSync(diffPath, PNG.sync.write(diff));

  const totalPixels = width * height;
  const diffPercent = (numDiffPixels / totalPixels) * 100;

  return {
    numDiffPixels,
    totalPixels,
    diffPercent: diffPercent.toFixed(2),
    passed: diffPercent <= CONFIG.maxDiffPercent
  };
}

// Analyze differences and provide suggestions
function analyzeDifferences(diffPercent, htmlFile) {
  const analysis = {
    passed: diffPercent <= CONFIG.maxDiffPercent,
    diffPercent: diffPercent,
    issues: [],
    suggestions: []
  };

  if (!analysis.passed) {
    if (diffPercent > 20) {
      analysis.issues.push('Major layout differences detected');
      analysis.suggestions.push('Check container widths and margins');
      analysis.suggestions.push('Verify font sizes and families');
      analysis.suggestions.push('Review color scheme consistency');
    } else if (diffPercent > 10) {
      analysis.issues.push('Moderate styling differences');
      analysis.suggestions.push('Check padding and spacing');
      analysis.suggestions.push('Verify border radius and shadows');
    } else {
      analysis.issues.push('Minor visual differences');
      analysis.suggestions.push('Check text alignment and line heights');
      analysis.suggestions.push('Verify hover states and transitions');
    }
  }

  return analysis;
}

// Generate comparison report
function generateReport(results) {
  const reportPath = path.join(CONFIG.outputDir, 'comparison-report.md');
  let report = '# Visual Comparison Report\n\n';
  report += `Generated: ${new Date().toISOString()}\n\n`;
  report += `## Configuration\n\n`;
  report += `- Viewport: ${CONFIG.viewport.width}x${CONFIG.viewport.height}\n`;
  report += `- Threshold: ${CONFIG.threshold * 100}%\n`;
  report += `- Max Difference: ${CONFIG.maxDiffPercent}%\n\n`;

  report += `## Results\n\n`;

  results.forEach((result, index) => {
    report += `### ${index + 1}. ${result.file}\n\n`;
    report += `- **Status**: ${result.analysis.passed ? '✅ PASSED' : '❌ FAILED'}\n`;
    report += `- **Difference**: ${result.analysis.diffPercent}%\n`;
    report += `- **Different Pixels**: ${result.result.numDiffPixels.toLocaleString()}\n`;
    report += `- **Total Pixels**: ${result.result.totalPixels.toLocaleString()}\n\n`;

    if (result.analysis.issues.length > 0) {
      report += `**Issues Detected:**\n`;
      result.analysis.issues.forEach(issue => {
        report += `- ${issue}\n`;
      });
      report += '\n';
    }

    if (result.analysis.suggestions.length > 0) {
      report += `**Suggestions:**\n`;
      result.analysis.suggestions.forEach(suggestion => {
        report += `- ${suggestion}\n`;
      });
      report += '\n';
    }

    report += `**Screenshots:**\n`;
    report += `- Original: ${result.originalPath}\n`;
    report += `- Comparison: ${result.comparisonPath}\n`;
    report += `- Difference: ${result.diffPath}\n\n`;
  });

  // Summary
  const passed = results.filter(r => r.analysis.passed).length;
  const total = results.length;
  report += `## Summary\n\n`;
  report += `- **Total Comparisons**: ${total}\n`;
  report += `- **Passed**: ${passed}\n`;
  report += `- **Failed**: ${total - passed}\n`;
  report += `- **Success Rate**: ${((passed / total) * 100).toFixed(1)}%\n\n`;

  fs.writeFileSync(reportPath, report);
  console.log(`✓ Report saved: ${reportPath}`);

  return reportPath;
}

// Main comparison function
async function compareFiles(inputFiles) {
  const startTime = Date.now();

  // Notify start
  await telegramNotifier.notifyStart('node compare.js', inputFiles);

  ensureDirectories();

  console.log('🚀 Starting visual comparison...\n');

  // Take screenshot of original file
  const originalPath = path.join(CONFIG.screenshotDir, 'original.png');
  console.log(`📸 Taking screenshot of ${CONFIG.originalFile}...`);
  await takeScreenshot(CONFIG.originalFile, originalPath);

  const results = [];

  // Compare each input file
  for (const inputFile of inputFiles) {
    console.log(`\n📸 Processing ${inputFile}...`);

    const fileName = path.basename(inputFile, '.html');
    const comparisonPath = path.join(CONFIG.screenshotDir, `${fileName}-comparison.png`);
    const diffPath = path.join(CONFIG.screenshotDir, `${fileName}-diff.png`);

    try {
      // Take screenshot of comparison file
      await takeScreenshot(inputFile, comparisonPath);

      // Compare images
      console.log(`🔍 Comparing images...`);
      const result = compareImages(originalPath, comparisonPath, diffPath);

      // Analyze differences
      const analysis = analyzeDifferences(parseFloat(result.diffPercent), inputFile);

      results.push({
        file: inputFile,
        originalPath,
        comparisonPath,
        diffPath,
        result,
        analysis
      });

      console.log(`📊 Difference: ${result.diffPercent}%`);
      console.log(`   Status: ${analysis.passed ? '✅ PASSED' : '❌ FAILED'}`);

    } catch (error) {
      console.error(`✗ Error processing ${inputFile}:`, error.message);
    }
  }

  // Generate report
  console.log('\n📝 Generating report...');
  const reportPath = generateReport(results);

  console.log('\n✅ Comparison complete!');
  console.log(`📄 Report: ${reportPath}`);
  console.log(`📁 Screenshots: ${CONFIG.screenshotDir}/`);

  // Send Telegram notification with results
  await telegramNotifier.notifyComparisonResults(results);

  const duration = Date.now() - startTime;
  console.log(`⏱️  Total duration: ${duration}ms`);

  return results;
}

// Auto-fix function (placeholder for future implementation)
function autoFix(results) {
  console.log('\n🔧 Auto-fix analysis...\n');

  results.forEach((result, index) => {
    if (!result.analysis.passed) {
      console.log(`${index + 1}. ${result.file} needs fixes:`);

      // Check for common issues
      if (result.analysis.diffPercent > 20) {
        console.log('   - Major layout issues detected');
        console.log('   - Suggestion: Review container and spacing settings');
      }

      if (result.analysis.diffPercent > 10 && result.analysis.diffPercent <= 20) {
        console.log('   - Moderate styling issues');
        console.log('   - Suggestion: Check font and color consistency');
      }

      if (result.analysis.diffPercent > 5 && result.analysis.diffPercent <= 10) {
        console.log('   - Minor visual differences');
        console.log('   - Suggestion: Verify hover states and transitions');
      }
    }
  });

  console.log('\n⚠️  Auto-fix is not fully implemented yet.');
  console.log('   Please manually review the suggestions in the report.');
}

// CLI interface
function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('Usage: node compare.js <input-file1.html> [input-file2.html] ...');
    console.log('Example: node compare.js output.html');
    console.log('         node compare.js page1.html page2.html page3.html');
    process.exit(1);
  }

  console.log('🎨 Visual Comparison System');
  console.log('============================\n');

  compareFiles(args)
    .then(results => {
      // Check if any files failed
      const failed = results.filter(r => !r.analysis.passed);
      if (failed.length > 0) {
        console.log('\n⚠️  Some comparisons failed. Running auto-fix analysis...');
        autoFix(results);
        process.exit(1);
      } else {
        console.log('\n🎉 All comparisons passed!');
        process.exit(0);
      }
    })
    .catch(error => {
      console.error('\n❌ Error during comparison:', error);
      telegramNotifier.notifyError(error, 'Visual comparison process');
      process.exit(1);
    });
}

// Export functions for testing
module.exports = {
  compareFiles,
  takeScreenshot,
  compareImages,
  analyzeDifferences,
  generateReport,
  autoFix
};

// Run if called directly
if (require.main === module) {
  main();
}