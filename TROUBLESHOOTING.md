# Troubleshooting Guide

## Dev Server Won't Start

If `npm run dev` hangs or doesn't start:

### Solution 1: Try a different port
```bash
npx vite --port 3000 --host
```

### Solution 2: Clear cache and reinstall
```bash
rm -rf node_modules dist .vite
npm install
npm run build
npm run preview
```

### Solution 3: Use the built version
```bash
npm run build
npx serve dist
```

## Build Works But Nothing Loads

The build is working correctly. To verify:

```bash
npm run build
cd dist
python3 -m http.server 8000
```

Then visit `http://localhost:8000`

## Quick Deploy to GitHub Pages

Since the build works, you can deploy directly:

### Step 1: Update vite.config.ts

Add base path for GitHub Pages:

```typescript
export default defineConfig({
  base: '/Portfolio/',  // Your repo name
  // ... rest of config
});
```

### Step 2: Build
```bash
npm run build
```

### Step 3: Deploy to GitHub Pages

#### Option A: Using gh-pages package
```bash
npm install --save-dev gh-pages
```

Add to package.json scripts:
```json
"deploy": "npm run build && gh-pages -d dist"
```

Then run:
```bash
npm run deploy
```

#### Option B: Manual deployment
```bash
# Build the project
npm run build

# Go to dist folder
cd dist

# Initialize git
git init
git add -A
git commit -m 'deploy'

# Push to gh-pages branch
git push -f git@github.com:Omizzy24/Portfolio.git main:gh-pages

cd ..
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: gh-pages / (root)
5. Save

Your site will be live at: `https://omizzy24.github.io/Portfolio/`

## Alternative: Deploy to Vercel (Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel auto-detects Vite
6. Click "Deploy"

Done! No configuration needed.

## Alternative: Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. "Add new site" → "Import an existing project"
4. Connect to GitHub
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy

## Common Issues

### Images Not Loading

Make sure images are in `public/` folder and referenced as `/image.jpg` not `./image.jpg`

### CSS Not Loading

This is already working in your build. If you see issues, clear browser cache.

### Contact Form Not Working

The contact form needs a backend. Options:

1. **Formspree** (easiest):
   ```typescript
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **EmailJS** (free tier available)
3. **AWS Lambda** (see DEPLOYMENT.md)

### Build Errors

```bash
# Clear everything and start fresh
rm -rf node_modules package-lock.json dist .vite
npm install
npm run build
```

## Verification Checklist

- [ ] `npm run build` completes successfully
- [ ] `dist/` folder contains files
- [ ] `dist/index.html` exists
- [ ] Can serve dist folder locally
- [ ] GitHub repository is up to date
- [ ] GitHub Pages is enabled

## Need More Help?

1. Check the build output: `npm run build`
2. Test the built version: `npx serve dist`
3. If that works, the issue is deployment-specific
4. Check GitHub Actions logs if using CI/CD
5. Verify GitHub Pages settings

## Quick Test

Run this to verify everything works:

```bash
# Clean build
npm run build

# Serve locally
cd dist && python3 -m http.server 8000
```

Visit `http://localhost:8000` - if it works, your build is fine and you just need to deploy it.
