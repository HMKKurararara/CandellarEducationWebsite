import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'Candellar Education', template: '%s | Candellar Education' },
  description: 'Clear education pathways, confident learners, and family-first guidance across Singapore and beyond.',
  openGraph: { type: 'website', siteName: 'Candellar Education' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
