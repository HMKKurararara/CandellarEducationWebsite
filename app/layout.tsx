import type { Metadata } from 'next'
import './globals.css'
import { absoluteUrl, siteUrl } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Candellar Education | Clearer learning pathways', template: '%s | Candellar Education' },
  description: 'Education guidance, learning support, and practical resources for families exploring Singapore and international pathways.',
  applicationName: 'Candellar Education',
  keywords: ['Candellar Education', 'Singapore education', 'AEIS preparation', 'Singapore Math', 'Cambridge English', 'education consultancy'],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  openGraph: {
    type: 'website',
    siteName: 'Candellar Education',
    title: 'Candellar Education | Clearer learning pathways',
    description: 'Education guidance, learning support, and practical resources for families exploring Singapore and international pathways.',
    url: absoluteUrl('/'),
    images: [{ url: '/brand/logo-primary.png', width: 1200, height: 630, alt: 'Candellar Education' }],
  },
  twitter: { card: 'summary_large_image', title: 'Candellar Education | Clearer learning pathways', description: 'Education guidance and learning support for families.', images: ['/brand/logo-primary.png'] },
  icons: { icon: [{ url: '/favicon.ico' }, { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }] },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
