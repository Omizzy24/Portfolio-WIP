# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## Step 1: Install Dependencies (1 min)

\`\`\`bash
npm install
\`\`\`

## Step 2: Customize Your Info (2 min)

Edit `src/data/portfolio.ts`:

1. Change name, title, and bio
2. Update email and social links
3. Add your projects (or use placeholders for now)
4. Update skills to match yours

## Step 3: Update Meta Tags (1 min)

Edit `index.html`:
- Change title
- Update description
- Add your name

## Step 4: Start Development Server (30 sec)

\`\`\`bash
npm run dev
\`\`\`

Visit `http://localhost:5173` to see your portfolio!

## Step 5: Deploy (30 sec)

### Easiest: Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

Done! Your portfolio is live.

## Next Steps

- [ ] Add your actual projects with images
- [ ] Replace placeholder resume PDF
- [ ] Customize colors to match your brand
- [ ] Add project screenshots to `public/projects/`
- [ ] Set up contact form (see DEPLOYMENT.md)
- [ ] Add Google Analytics (optional)
- [ ] Connect custom domain

## Need More Help?

- **Customization**: See `CUSTOMIZATION.md`
- **Deployment**: See `DEPLOYMENT.md`
- **Issues**: Check GitHub issues or create one

## Common First-Time Tasks

### Change Theme Colors

Edit `src/styles/_variables.scss`:
\`\`\`scss
--accent-primary: #YOUR_COLOR;
\`\`\`

### Add Your Photo

1. Add image to `public/profile.jpg`
2. Update About section to display it

### Update Social Links

Edit `src/data/portfolio.ts`:
\`\`\`typescript
github: 'https://github.com/yourusername',
linkedin: 'https://linkedin.com/in/yourprofile',
\`\`\`

## Tips

- Start with placeholder content, refine later
- Test on mobile devices
- Use high-quality project images
- Keep descriptions concise
- Update regularly with new projects

Happy building! 🚀
