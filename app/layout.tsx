import type { Metadata } from 'next'
import { Inter, Playfair_Display, Noto_Sans_Myanmar } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
})

const notoSansMyanmar = Noto_Sans_Myanmar({ 
  subsets: ['myanmar'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-myanmar',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Candellar - Your Gateway to Singapore Education Success',
  description: 'Affordable, high-quality tuition and exam preparation for AEIS, iPSLE, CEQ, and Cambridge pathways.',
  keywords: 'Singapore education, AEIS, iPSLE, Cambridge English, tuition, Myanmar students',
  authors: [{ name: 'Candellar' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/transparent.png',
  },
  openGraph: {
    title: 'Candellar - Your Gateway to Singapore Education Success',
    description: 'Affordable, high-quality tuition and exam preparation for AEIS, iPSLE, CEQ, and Cambridge pathways.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${notoSansMyanmar.variable}`}>
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  )
}
