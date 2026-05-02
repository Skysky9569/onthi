#!/bin/bash

# Design System Automation Setup Script
# This script installs dependencies and sets up the environment

echo "🚀 Setting up Design System Automation..."
echo "=========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js >= 18.0.0"
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""

# Create necessary directories
echo "📁 Creating directories..."
mkdir -p screenshots output

echo "✅ Directories created"
echo ""

# Install Playwright browsers
echo "🌐 Installing Playwright browsers..."
npx playwright install chromium

if [ $? -eq 0 ]; then
    echo "✅ Playwright browsers installed"
else
    echo "❌ Failed to install Playwright browsers"
    exit 1
fi

echo ""
echo "=========================================="
echo "✅ Setup complete!"
echo ""
echo "📚 Next steps:"
echo "   1. Test the system: node compare.js test.html"
echo "   2. Read the documentation: README.md"
echo "   3. Review design system: design.md"
echo ""
echo "🎨 Happy designing!"
