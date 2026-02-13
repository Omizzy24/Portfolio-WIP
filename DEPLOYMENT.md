# Deployment Guide

This guide covers multiple deployment options for your portfolio.

## Quick Deploy (Vercel - Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

Done! Your site will be live in minutes.

## Quick Deploy (Netlify)

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

## AWS Deployment (Full Stack)

### Prerequisites
- AWS CLI installed and configured
- Terraform installed
- SES verified email address

### Step 1: Verify SES Email

\`\`\`bash
aws ses verify-email-identity --email-address your-email@example.com
\`\`\`

Check your email and click the verification link.

### Step 2: Package Lambda Function

\`\`\`bash
cd lambda
npm install
zip -r contact-handler.zip .
mv contact-handler.zip ../infrastructure/
cd ../infrastructure
\`\`\`

### Step 3: Configure Terraform

\`\`\`bash
cp terraform.tfvars.example terraform.tfvars
\`\`\`

Edit `terraform.tfvars`:
\`\`\`hcl
aws_region       = "us-east-1"
bucket_name      = "your-unique-bucket-name"
sender_email     = "your-verified-email@example.com"
recipient_email  = "omar.alshammary@proton.me"
\`\`\`

### Step 4: Deploy Infrastructure

\`\`\`bash
terraform init
terraform plan
terraform apply
\`\`\`

Note the outputs:
- `website_url`: Your S3 website URL
- `api_endpoint`: Your API Gateway endpoint

### Step 5: Update Frontend API Endpoint

Edit `src/sections/Contact/Contact.tsx`:
\`\`\`typescript
const response = await fetch('YOUR_API_ENDPOINT/contact', {
  // ... rest of the code
});
\`\`\`

### Step 6: Build and Deploy Frontend

\`\`\`bash
npm run build
aws s3 sync dist/ s3://your-bucket-name --delete
\`\`\`

### Step 7: (Optional) Add CloudFront CDN

Create CloudFront distribution:
\`\`\`bash
aws cloudfront create-distribution \\
  --origin-domain-name your-bucket-name.s3-website-us-east-1.amazonaws.com \\
  --default-root-object index.html
\`\`\`

## GitHub Actions Setup

### Add Repository Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions

Add these secrets:
- `AWS_ACCESS_KEY_ID`: Your AWS access key
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret key
- `S3_BUCKET_NAME`: Your S3 bucket name
- `CLOUDFRONT_DISTRIBUTION_ID`: (Optional) Your CloudFront distribution ID

### Automatic Deployment

Once secrets are configured, every push to `main` will:
1. Run tests and linting
2. Build the project
3. Deploy to S3
4. Invalidate CloudFront cache (if configured)

## Docker Deployment

### Build Docker Image

\`\`\`bash
docker build -t portfolio .
\`\`\`

### Run Locally

\`\`\`bash
docker run -p 8080:80 portfolio
\`\`\`

Visit `http://localhost:8080`

### Deploy to AWS ECS/Fargate

1. Push to ECR:
\`\`\`bash
aws ecr create-repository --repository-name portfolio
docker tag portfolio:latest YOUR_ECR_URL/portfolio:latest
docker push YOUR_ECR_URL/portfolio:latest
\`\`\`

2. Create ECS task definition and service (use AWS Console or Terraform)

## Custom Domain Setup

### Vercel/Netlify
1. Go to domain settings in your dashboard
2. Add your custom domain
3. Update DNS records as instructed

### AWS S3 + CloudFront
1. Request SSL certificate in ACM
2. Add custom domain to CloudFront distribution
3. Update DNS records:
   - CNAME: www → CloudFront domain
   - A record: @ → CloudFront (using alias)

## Environment Variables

For production, set these environment variables:

- `VITE_API_ENDPOINT`: Your API Gateway endpoint
- `VITE_GA_TRACKING_ID`: Google Analytics ID (optional)

## Monitoring

### AWS CloudWatch
- Lambda logs: `/aws/lambda/portfolio-contact-handler`
- Set up alarms for errors

### Vercel/Netlify
- Built-in analytics available in dashboard
- Real-time deployment logs

## Troubleshooting

### Contact Form Not Working
1. Check API endpoint is correct
2. Verify SES email is verified
3. Check Lambda logs in CloudWatch
4. Verify CORS settings

### Build Failures
1. Clear node_modules: `rm -rf node_modules && npm install`
2. Check Node version: `node -v` (should be 18+)
3. Review build logs for specific errors

### S3 Access Denied
1. Verify bucket policy allows public read
2. Check public access block settings
3. Ensure files have correct permissions

## Cost Optimization

- S3: ~$0.50/month for typical traffic
- Lambda: Free tier covers most usage
- API Gateway: ~$1/month for moderate traffic
- CloudFront: Optional, adds ~$1-5/month

Total estimated cost: $2-10/month depending on traffic

## Security Best Practices

1. Enable CloudFront with HTTPS only
2. Use IAM roles with minimal permissions
3. Enable S3 bucket versioning
4. Set up AWS CloudTrail for audit logs
5. Regularly update dependencies
6. Use environment variables for sensitive data
7. Enable rate limiting on API Gateway

## Backup Strategy

1. Enable S3 versioning
2. Regular Terraform state backups
3. Keep infrastructure code in version control
4. Document all manual AWS console changes
