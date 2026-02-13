# Customization Guide

This guide will help you personalize your portfolio to match your brand and showcase your work.

## Quick Start Checklist

- [ ] Update personal information in `src/data/portfolio.ts`
- [ ] Replace placeholder images in `public/`
- [ ] Add your resume PDF to `public/resume.pdf`
- [ ] Customize colors in `src/styles/_variables.scss`
- [ ] Update meta tags in `index.html`
- [ ] Configure contact form API endpoint
- [ ] Add your projects and skills
- [ ] Update social media links

## Personal Information

Edit `src/data/portfolio.ts`:

\`\`\`typescript
export const aboutMe = {
  name: 'Your Name',
  title: 'Your Title | Your Specialties',
  bio: \`Your compelling bio that highlights your unique value...\`,
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile',
  resumeUrl: '/resume.pdf',
};
\`\`\`

## Adding Projects

In `src/data/portfolio.ts`, add to the projects array:

\`\`\`typescript
{
  id: 'unique-id',
  title: 'Project Name',
  description: 'Short description for card',
  longDescription: 'Detailed description with impact',
  image: '/projects/your-image.jpg',
  tags: ['Frontend', 'Backend'], // Used for filtering
  technologies: ['React', 'Node.js', 'AWS'],
  liveUrl: 'https://your-project.com', // Optional
  githubUrl: 'https://github.com/you/project', // Optional
  featured: true, // Show on homepage
}
\`\`\`

### Project Images

Add project images to `public/projects/`:
- Recommended size: 1200x630px
- Format: JPG or PNG
- Optimize images before adding (use TinyPNG or similar)

## Customizing Skills

Edit the skills array in `src/data/portfolio.ts`:

\`\`\`typescript
{
  name: 'Skill Name',
  category: 'frontend' | 'backend' | 'cloud' | 'data' | 'tools',
  level: 1-5, // 1 = beginner, 5 = expert
  icon: 'IconName' // From react-icons
}
\`\`\`

### Skill Categories

- `frontend`: React, Vue, Angular, HTML, CSS, etc.
- `backend`: Node.js, Python, Java, databases, etc.
- `cloud`: AWS, Azure, GCP, serverless, etc.
- `data`: Data science, ML, analytics tools
- `tools`: Docker, Git, CI/CD, etc.

## Theme Customization

### Colors

Edit `src/styles/_variables.scss`:

\`\`\`scss
// Light theme
:root[data-theme='light'] {
  --accent-primary: #0066ff;      // Your brand color
  --accent-secondary: #00d4ff;    // Complementary color
  --bg-primary: #ffffff;
  --text-primary: #212529;
}

// Dark theme
:root[data-theme='dark'] {
  --accent-primary: #00d4ff;
  --accent-secondary: #0066ff;
  --bg-primary: #0a0e27;
  --text-primary: #f8f9fa;
}
\`\`\`

### Typography

Change fonts in `src/styles/_variables.scss`:

\`\`\`scss
$font-primary: 'Your Font', -apple-system, sans-serif;
\`\`\`

Add font imports to `index.html`:

\`\`\`html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
\`\`\`

### Spacing & Layout

Adjust spacing variables:

\`\`\`scss
$spacing-xs: 0.5rem;
$spacing-sm: 1rem;
$spacing-md: 2rem;
$spacing-lg: 4rem;
$spacing-xl: 6rem;
\`\`\`

## SEO Optimization

### Meta Tags

Edit `index.html`:

\`\`\`html
<title>Your Name - Portfolio</title>
<meta name="description" content="Your compelling description" />
<meta name="keywords" content="your, relevant, keywords" />

<!-- Open Graph -->
<meta property="og:title" content="Your Name - Portfolio" />
<meta property="og:description" content="Your description" />
<meta property="og:image" content="https://your-domain.com/og-image.jpg" />
<meta property="og:url" content="https://your-domain.com" />
\`\`\`

### Open Graph Image

Create an OG image (1200x630px) and add to `public/og-image.jpg`

## Adding New Sections

### 1. Create Section Component

Create `src/sections/NewSection/NewSection.tsx`:

\`\`\`typescript
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './NewSection.scss';

const NewSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="new-section section" id="new-section" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Section Title
        </motion.h2>
        {/* Your content */}
      </div>
    </section>
  );
};

export default NewSection;
\`\`\`

### 2. Create Styles

Create `src/sections/NewSection/NewSection.scss`:

\`\`\`scss
@import '../../styles/variables';

.new-section {
  // Your styles
}
\`\`\`

### 3. Add to App

Import and add to `src/App.tsx`:

\`\`\`typescript
import NewSection from './sections/NewSection/NewSection';

// In the return statement:
<NewSection />
\`\`\`

## Contact Form Setup

### Option 1: EmailJS (Easiest)

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create email service and template
3. Install: `npm install @emailjs/browser`
4. Update `src/sections/Contact/Contact.tsx`:

\`\`\`typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setStatus('loading');

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    );
    setStatus('success');
  } catch (error) {
    setStatus('error');
  }
};
\`\`\`

### Option 2: AWS Lambda (Current Setup)

Follow the deployment guide in `DEPLOYMENT.md`

### Option 3: Formspree

1. Sign up at [formspree.io](https://formspree.io/)
2. Create a form and get endpoint
3. Update fetch URL in Contact component

## Analytics Setup

### Google Analytics

1. Create GA4 property
2. Add to `index.html`:

\`\`\`html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
\`\`\`

### Privacy-Focused Alternative: Plausible

1. Sign up at [plausible.io](https://plausible.io/)
2. Add script to `index.html`:

\`\`\`html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
\`\`\`

## Adding Blog Section

### 1. Create Blog Data Type

Add to `src/types/index.ts`:

\`\`\`typescript
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  image: string;
}
\`\`\`

### 2. Create Blog Data

Create `src/data/blog.ts`:

\`\`\`typescript
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Your First Post',
    excerpt: 'Short description...',
    content: 'Full content...',
    date: '2024-01-01',
    tags: ['React', 'TypeScript'],
    image: '/blog/post-1.jpg',
  },
];
\`\`\`

### 3. Create Blog Components

Create blog section and individual post components following the pattern in existing sections.

## Performance Optimization

### Image Optimization

1. Use WebP format when possible
2. Compress images (TinyPNG, Squoosh)
3. Use appropriate sizes
4. Add lazy loading: `loading="lazy"`

### Code Splitting

Already configured in `vite.config.ts`. Add more chunks if needed:

\`\`\`typescript
manualChunks: {
  'react-vendor': ['react', 'react-dom'],
  'animation-vendor': ['framer-motion'],
  'icons-vendor': ['react-icons'],
}
\`\`\`

## Accessibility Checklist

- [ ] All images have alt text
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] ARIA labels on interactive elements
- [ ] Keyboard navigation works
- [ ] Color contrast meets WCAG AA
- [ ] Focus indicators visible
- [ ] Screen reader tested

## Testing Your Changes

\`\`\`bash
# Run development server
npm run dev

# Check for type errors
npm run type-check

# Run linter
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
\`\`\`

## Common Customizations

### Change Animation Speed

Edit transition durations in component files:

\`\`\`typescript
transition={{ duration: 0.5 }} // Adjust this value
\`\`\`

### Modify Breakpoints

Edit `src/styles/_variables.scss`:

\`\`\`scss
$mobile: 480px;
$tablet: 768px;
$desktop: 1024px;
\`\`\`

### Add More Social Links

Edit `src/sections/Hero/Hero.tsx` and `src/sections/Footer/Footer.tsx`:

\`\`\`typescript
import { FaTwitter } from 'react-icons/fa';

<a href="https://twitter.com/yourhandle">
  <FaTwitter />
</a>
\`\`\`

## Need Help?

- Check existing components for patterns
- Review React and TypeScript documentation
- Test changes in development before deploying
- Use browser DevTools for debugging
- Check console for errors

## Best Practices

1. Keep components small and focused
2. Use TypeScript types for all data
3. Test on multiple devices and browsers
4. Optimize images before adding
5. Keep dependencies updated
6. Write semantic HTML
7. Follow accessibility guidelines
8. Comment complex logic
9. Use meaningful variable names
10. Test before deploying
