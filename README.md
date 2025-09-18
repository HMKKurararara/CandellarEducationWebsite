# Candellar Website

A bilingual (English & Burmese) landing page for Candellar education services, built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🌐 Bilingual support (English & Burmese)
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 🎨 Modern UI with Tailwind CSS
- 📝 Contact form with server actions
- 🚀 Optimized for performance and SEO

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **i18n**: next-intl
- **Icons**: Lucide React
- **Fonts**: Inter (English), Noto Sans Myanmar (Burmese)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is ready for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## Configuration

### Formspree Integration

To enable form submissions, update the Formspree endpoint in the register form component:

```typescript
const formspreeResponse = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  // ... rest of the configuration
})
```

### Analytics

Add your Plausible domain to track website analytics:

```typescript
// In your layout or analytics component
const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
```

## Project Structure

```
app/
├── [locale]/
│   ├── (site)/
│   │   ├── components/     # Reusable components
│   │   ├── page.tsx       # Home page
│   │   └── layout.tsx     # Site layout
│   ├── register/          # Registration page
│   └── messages/          # Translation files
├── api/                   # API routes
├── globals.css           # Global styles
└── layout.tsx            # Root layout

lib/
├── animations.ts         # Framer Motion variants
├── i18n.ts              # i18n configuration
└── utils.ts             # Utility functions
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#1e3a8a',    // Indigo
      accent: '#047857',     // Emerald
    }
  }
}
```

### Fonts

Fonts are configured in the root layout and can be changed by updating the Google Fonts imports.

### Content

All text content is managed through translation files in `app/[locale]/messages/`.

## License

© 2024 Candellar. All rights reserved.
