#!/bin/bash

# GitHub Push Script for H. K. Chemicals Industries Website
# This script helps push the code to GitHub repository

set -e

echo "🚀 H. K. Chemicals Industries - GitHub Deployment Script"
echo "========================================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Error: Git repository not initialized"
    exit 1
fi

echo "📦 Current Status:"
git status --short
echo ""

# Ask for confirmation
read -p "🤔 Do you want to push to GitHub? (y/n): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Push cancelled"
    exit 0
fi

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Adding GitHub remote..."
    git remote add origin https://github.com/workkevanshinaik-ui/hkchemicals-website.git
fi

# Rename branch to main if needed
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "🔄 Renaming branch to 'main'..."
    git branch -M main
fi

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Successfully pushed to GitHub!"
echo ""
echo "🌐 Next Steps:"
echo "1. Go to https://vercel.com"
echo "2. Click 'Add New' → 'Project'"
echo "3. Import 'workkevanshinaik-ui/hkchemicals-website'"
echo "4. Click 'Deploy'"
echo ""
echo "📖 For detailed instructions, see DEPLOYMENT.md"
