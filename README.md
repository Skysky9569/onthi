# Design System Automation

🎨 Automated design system based on `toanck2.html` with visual comparison and auto-fix capabilities.

## 🚀 Features

- ✅ **Single Source of Truth**: `toanck2.html` as the design system reference
- 🎨 **Component Library**: Reusable components with consistent styling
- 📊 **Visual Testing**: Automated screenshot comparison using Playwright
- 🔍 **Pixel Analysis**: Detailed difference analysis with pixelmatch
- 📝 **Auto-fix Suggestions**: Intelligent recommendations for fixing issues
- 🌙 **Dark Mode Support**: Built-in theme switching
- 📱 **Responsive Design**: Mobile-first approach with fluid typography

## 📋 Prerequisites

- Node.js >= 18.0.0
- npm or yarn

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Or use the setup script
npm run setup
```

## 📁 Project Structure

```
project/
├── toanck2.html           # Design system source (SINGLE SOURCE OF TRUTH)
├── styles.css             # Global design system
├── components.css         # Component-specific styles
├── design.md              # Design system documentation
├── compare.js             # Visual comparison system
├── package.json           # Dependencies and scripts
├── README.md              # This file
├── screenshots/           # Generated screenshots
│   ├── original.png       # Reference screenshot
│   ├── comparison.png     # File being compared
│   └── diff.png           # Difference visualization
├── output/                # Generated reports
│   └── comparison-report.md
└── index.html             # Other pages to compare
```

## 🎯 Usage

### 1. Visual Comparison

Compare any HTML file against the design system:

```bash
# Compare a single file
node compare.js output.html

# Compare multiple files
node compare.js page1.html page2.html page3.html

# Use npm script
npm run compare -- output.html
```

### 2. Understanding Results

The comparison system generates:

- **Screenshots**: Visual representation of each file
- **Diff Image**: Highlighted differences between files
- **Report**: Detailed analysis with suggestions

#### Example Output:

```
📊 Difference: 2.34%
   Status: ✅ PASSED
```

```
📊 Difference: 15.67%
   Status: ❌ FAILED

Issues Detected:
- Major layout differences detected

Suggestions:
- Check container widths and margins
- Verify font sizes and families
- Review color scheme consistency
```

### 3. Reading the Report

After comparison, a detailed report is generated in `output/comparison-report.md`:

```markdown
# Visual Comparison Report

## Results

### 1. output.html
- **Status**: ❌ FAILED
- **Difference**: 15.67%
- **Different Pixels**: 1,234,567
- **Total Pixels**: 7,876,543

**Issues Detected:**
- Major layout differences detected

**Suggestions:**
- Check container widths and margins
- Verify font sizes and families
```

## 🎨 Design System Components

### Available Components

1. **Header Component**
   ```html
   <header>
     <div class="badge">Category</div>
     <h1>Title</h1>
     <p class="subtitle">Subtitle text</p>
   </header>
   ```

2. **Navigation Tabs**
   ```html
   <nav class="tabs-nav" role="tablist">
     <button class="tab-btn active">Tab 1</button>
     <button class="tab-btn">Tab 2</button>
   </nav>
   ```

3. **Section Component**
   ```html
   <div class="section">
     <div class="section-title">
       <span class="icon icon-yellow">📊</span>
       Section Title
     </div>
     <div class="subsection">
       <div class="subsection-title">Subsection Title</div>
       <p>Content here</p>
     </div>
   </div>
   ```

4. **Formula Box**
   ```html
   <div class="formula-box yellow">
     \[E = mc^2\]
   </div>
   ```

5. **Table Component**
   ```html
   <div class="table-wrap">
     <table>
       <thead>
         <tr>
           <th>Header 1</th>
           <th>Header 2</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>Data 1</td>
           <td>Data 2</td>
         </tr>
       </tbody>
     </table>
   </div>
   ```

6. **Note Box**
   ```html
   <div class="note">
     <strong>⚠ Note:</strong> Important information here.
   </div>

   <div class="note-red">
     <strong>⚠ Error:</strong> Critical information here.
   </div>
   ```

7. **Card Small**
   ```html
   <div class="card-small">
     <div class="card-small-title">Title</div>
     <div class="formula-box">\[Formula\]</div>
     <p>Description</p>
   </div>
   ```

### Color System

```css
/* Primary Colors */
--bg-primary: #F8F9FA
--bg-surface: #ffffff
--text-primary: #212529

/* Accent Colors */
--accent-blue: #03A9F4
--accent-purple: #7c6af7
--accent-yellow: #e8c547
--accent-red: #f76a6a
--accent-green: #4CAF50
```

### Typography

```css
/* Font Families */
--font-primary: 'Inter', sans-serif
--font-display: 'Playfair Display', serif
--font-content: 'Source Serif 4', serif
--font-mono: 'Fira Code', monospace

/* Font Sizes */
h1: clamp(28px, 5vw, 42px)
h2: clamp(24px, 4vw, 32px)
h3: clamp(20px, 3vw, 24px)
```

## 🔧 Configuration

Edit `compare.js` to customize:

```javascript
const CONFIG = {
  viewport: { width: 1280, height: 800 },  // Screenshot size
  threshold: 0.1,                          // Pixel difference threshold
  maxDiffPercent: 5,                       // Max allowed difference %
  originalFile: 'toanck2.html',            // Reference file
  outputDir: './output'                    // Report directory
};
```

## 🧪 Testing

### Manual Testing

1. Create a test HTML file using design system components
2. Run comparison against `toanck2.html`
3. Review the generated report and screenshots
4. Make adjustments based on suggestions
5. Re-run comparison until passing

### Automated Testing

```bash
# Run comparison on test file
npm test

# Check results
cat output/comparison-report.md
```

## 📊 Success Criteria

A comparison is considered **PASSED** when:

- ✅ Difference ≤ 5%
- ✅ No major layout issues
- ✅ Consistent styling with design system
- ✅ Proper responsive behavior

## 🐛 Troubleshooting

### Common Issues

**Issue**: "Cannot find module 'pixelmatch'"
```bash
# Solution: Install dependencies
npm install
```

**Issue**: Screenshots look different but comparison passes
```bash
# Solution: Lower the threshold in CONFIG
threshold: 0.05  // More strict
```

**Issue**: Comparison fails with high difference percentage
```bash
# Solution: Check the following:
# 1. Container widths and margins
# 2. Font sizes and families
# 3. Color scheme consistency
# 4. Padding and spacing
```

## 🔄 Workflow

### Creating New Pages

1. **Start with template**
   ```html
   <!DOCTYPE html>
   <html lang="vi">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Page Title</title>
     <link rel="stylesheet" href="styles.css">
     <link rel="stylesheet" href="components.css">
   </head>
   <body>
     <!-- Your content here -->
   </body>
   </html>
   ```

2. **Use design system components**
   - Copy component examples from this README
   - Apply appropriate classes
   - Follow spacing and color guidelines

3. **Test against design system**
   ```bash
   node compare.js your-page.html
   ```

4. **Review and fix**
   - Check the generated report
   - Review screenshots and diff
   - Apply suggested fixes

5. **Iterate until passing**
   - Re-run comparison
   - Make adjustments
   - Achieve ≥95% similarity

### Updating Design System

1. **Modify `toanck2.html`** (single source of truth)
2. **Update documentation** in `design.md`
3. **Test existing pages** against new design
4. **Apply changes** to other pages as needed

## 📚 Documentation

- **Design System**: `design.md` - Complete design system documentation
- **Components**: `components.css` - Component-specific styles
- **Global Styles**: `styles.css` - Global design tokens

## 🤝 Contributing

When contributing to this project:

1. Always test changes against `toanck2.html`
2. Ensure visual comparison passes
3. Update documentation as needed
4. Follow the established design patterns
5. Test on multiple screen sizes

## 📝 License

MIT License - See LICENSE file for details

## 🎯 Best Practices

### DO ✅

- Use `toanck2.html` as the single source of truth
- Apply design system classes consistently
- Test visual changes with comparison tool
- Follow responsive design principles
- Use semantic HTML elements

### DON'T ❌

- Hardcode styles in HTML
- Skip visual testing
- Ignore comparison failures
- Create custom components without testing
- Break the single source of truth principle

## 🔮 Future Enhancements

- [ ] Full auto-fix implementation
- [ ] CI/CD integration
- [ ] Multiple viewport testing
- [ ] Performance metrics
- [ ] Accessibility testing
- [ ] Component library documentation site

## 📞 Support

For issues or questions:

1. Check this README first
2. Review `design.md` for design system details
3. Examine comparison reports for specific issues
4. Test changes locally before committing

---

**Remember**: `toanck2.html` is the single source of truth. All design decisions should be made there first, then propagated to other files.

🎨 **Happy Designing!**