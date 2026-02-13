# GitHub Deployment Guide

## Quick Deploy to GitHub Pages (5 Minutes)

Your portfolio is ready to deploy! Follow these steps:

### Step 1: Install gh-pages

```bash
npm install
```

### Step 2: Build Your Portfolio

```bash
npm run build
```

This creates a `dist/` folder with your production-ready website.

### Step 3: Initialize Git (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

### Step 4: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `Portfolio` (or your preferred name)
3. Make it Public
4. Don't initialize with README (you already have files)
5. Click "Create repository"

### Step 5: Push to GitHub

```bash
git remote add origin https://github.com/Omizzy24/Portfolio.git
git branch -M main
git push -u origin main
```

### Step 6: Deploy to GitHub Pages

```bash
npm run deploy
```

This command:
- Builds your project
- Creates a `gh-pages` branch
- Pushes the built files to that branch

### Step 7: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll to "Pages" in the left sidebar
4. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click "Save"

### Step 8: Visit Your Site!

Your portfolio will be live at:
```
https://omizzy24.github.io/Portfolio/
```

It may take 1-2 minutes for the first deployment.

## Updating Your Portfolio

Whenever you make changes:

```bash
# Make your changes to the code
git add .
git commit -m "Update portfolio"
git push origin main

# Deploy the changes
npm run deploy
```

## Using a Custom Domain

### Step 1: Add CNAME file

Create `public/CNAME` with your domain:
```
yourdomain.com
```

### Step 2: Configure DNS

Add these DNS records at your domain provider:

For apex domain (yourdomain.com):
```
A     185.199.108.153
A     185.199.109.153
A     185.199.110.153
A     185.199.111.153
```

For www subdomain:
```
CNAME www.yourdomain.com -> omizzy24.github.io
```

### Step 3: Update GitHub Settings

1. Go to repository Settings → Pages
2. Enter your custom domain
3. Check "Enforce HTTPS"
4. Save

Wait 24-48 hours for DNS propagation.

## Alternative: GitHub Actions (Automatic Deployment)

For automatic deployment on every push:

### Step 1: Create Workflow File

Create `.github/workflows/deploy-gh-pages.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 2: Configure GitHub Pages

1. Settings → Pages
2. Source: "GitHub Actions"
3. Save

Now every push to `main` automatically deploys!

## Troubleshooting

### Site Shows 404

- Wait 2-3 minutes after first deployment
- Check that `base` in `vite.config.ts` matches your repo name
- Verify GitHub Pages is enabled in Settings

### Images Not Loading

- Images should be in `public/` folder
- Reference as `/image.jpg` not `./image.jpg`
- Check browser console for errors

### CSS Not Applied

- Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)
- Check that build completed successfully
- Verify `dist/assets/` contains CSS files

### Changes Not Showing

```bash
# Clear cache and rebuild
rm -rf dist node_modules/.vite
npm run build
npm run deploy
```

Then hard refresh your browser (Cmd+Shift+R)

## Verification Checklist

Before deploying, verify:

- [ ] `npm run build` completes without errors
- [ ] `dist/` folder is created
- [ ] `vite.config.ts` has correct `base` path
- [ ] All images are in `public/` folder
- [ ] Personal info updated in `src/data/portfolio.ts`
- [ ] Meta tags updated in `index.html`

## Quick Commands Reference

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Test locally
npm run preview

# Update and deploy
git add .
git commit -m "Update"
git push
npm run deploy
```

## Next Steps After Deployment

1. **Add Custom Domain** (optional)
2. **Set up Google Analytics** (see CUSTOMIZATION.md)
3. **Add Real Projects** with screenshots
4. **Update Resume** PDF in `public/`
5. **Share Your Portfolio** on LinkedIn, Twitter, etc.

## Support

If you encounter issues:

1. Check `TROUBLESHOOTING.md`
2. Verify build works: `npm run build`
3. Test locally: `npm run preview`
4. Check GitHub Actions logs (if using)
5. Open an issue on GitHub

## Success!

Once deployed, your portfolio will be live at:
```
https://omizzy24.github.io/Portfolio/
```

Share it with the world! 🚀
