# ✅ Deployment Checklist

## Pre-Deployment

- [x] Code is working locally (`npm run dev`)
- [x] Build passes (`npm run build`)
- [x] No critical errors (warnings are OK)
- [x] All features tested (language switching, forms, etc.)
- [x] Git repository initialized and committed

## GitHub Setup

- [ ] Create GitHub repository
- [ ] Push code to GitHub:
  ```bash
  git remote add origin https://github.com/YOUR_USERNAME/candellar-website.git
  git push -u origin main
  ```

## Vercel Deployment

- [ ] Go to [vercel.com](https://vercel.com)
- [ ] Sign in with GitHub
- [ ] Click "New Project"
- [ ] Import `candellar-website` repository
- [ ] Deploy (Vercel auto-detects Next.js)
- [ ] Test deployed site

## Environment Variables (Vercel)

- [ ] Add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` (get from Formspree)
- [ ] Add `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` (your domain)
- [ ] Optional: Add database/email variables if needed

## CI/CD Setup (Optional but Recommended)

- [ ] Get Vercel tokens:
  - VERCEL_TOKEN (Settings → Tokens)
  - ORG_ID (Project Settings → General)
  - PROJECT_ID (Project Settings → General)
- [ ] Add secrets to GitHub repository:
  - Settings → Secrets and variables → Actions
  - Add the three tokens above
- [ ] Test CI/CD by creating a pull request

## Post-Deployment

- [ ] Test all functionality on live site
- [ ] Test language switching
- [ ] Test registration form
- [ ] Test mobile responsiveness
- [ ] Set up custom domain (optional)
- [ ] Configure analytics (Plausible)
- [ ] Set up form handling (Formspree)

## Monitoring

- [ ] Check Vercel dashboard for deployment status
- [ ] Monitor GitHub Actions for CI/CD
- [ ] Set up error monitoring (optional)
- [ ] Test form submissions work

## Next Steps

- [ ] Add real images (replace placeholders)
- [ ] Configure Formspree for form handling
- [ ] Set up analytics tracking
- [ ] Add more content/translations
- [ ] Set up email notifications
- [ ] Add database for lead management
