# 🚀 Deployment Guide

## Quick Deploy to Vercel

1. **Push to GitHub** (if not done already):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/candellar-website.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

## Environment Variables

Add these to your Vercel project settings:

### Required
- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` - Your Formspree form endpoint
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` - Your domain for analytics

### Optional
- `DATABASE_URL` - If using a database
- `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` - For email notifications

## CI/CD Setup

### GitHub Secrets (for automated deployment)

1. Go to your GitHub repository
2. Settings → Secrets and variables → Actions
3. Add these secrets:

```
VERCEL_TOKEN=your_vercel_token
ORG_ID=your_org_id  
PROJECT_ID=your_project_id
```

### How to get Vercel tokens:

1. **VERCEL_TOKEN**: 
   - Go to Vercel Dashboard → Settings → Tokens
   - Create new token

2. **ORG_ID & PROJECT_ID**:
   - Go to your project in Vercel
   - Settings → General
   - Copy Organization ID and Project ID

## Workflows

- **Main branch**: Auto-deploys to production
- **Pull requests**: Creates preview deployments
- **All pushes**: Runs tests and builds

## Custom Domain

1. In Vercel dashboard, go to your project
2. Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed

## Monitoring

- **Vercel Analytics**: Built-in performance monitoring
- **Plausible**: Add your domain for privacy-focused analytics
- **GitHub Actions**: Monitor CI/CD pipeline status
