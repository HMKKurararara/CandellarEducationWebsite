import type { Metadata } from 'next'
import { Inter, Noto_Sans_Myanmar } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSansMyanmar = Noto_Sans_Myanmar({ 
  subsets: ['myanmar'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-myanmar',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Candellar - Your Gateway to Singapore Education Success',
  description: 'Affordable, high-quality tuition and exam preparation for AEIS, iPSLE, CEQ, and Cambridge pathways.',
  keywords: 'Singapore education, AEIS, iPSLE, Cambridge English, tuition, Myanmar students',
  authors: [{ name: 'Candellar' }],
  icons: {
    icon: '/favicon.ico',
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
    <html lang="en" className={`${inter.variable} ${notoSansMyanmar.variable}`}>
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  )
}
