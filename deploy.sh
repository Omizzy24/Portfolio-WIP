#!/bin/bash

# Portfolio Deployment Script
# This script builds and deploys your portfolio to GitHub Pages

set -e  # Exit on error

echo "🚀 Portfolio Deployment Script"
echo "================================"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
    echo ""
fi

# Build the project
echo "🔨 Building portfolio..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "❌ dist folder not found. Build may have failed."
    exit 1
fi

echo "📊 Build Statistics:"
echo "-------------------"
du -sh dist
echo ""

# Ask user if they want to deploy
read -p "🌐 Deploy to GitHub Pages? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🚀 Deploying to GitHub Pages..."
    npm run deploy
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Deployment successful!"
        echo ""
        echo "🎉 Your portfolio is live at:"
        echo "   https://omizzy24.github.io/Portfolio/"
        echo ""
        echo "📝 Note: It may take 1-2 minutes for changes to appear."
        echo ""
    else
        echo "❌ Deployment failed. Please check the errors above."
        exit 1
    fi
else
    echo "⏸️  Deployment cancelled."
    echo "💡 You can deploy later with: npm run deploy"
fi

echo ""
echo "✨ Done!"
