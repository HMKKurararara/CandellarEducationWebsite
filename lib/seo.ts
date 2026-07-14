import type { Metadata } from 'next'
import { absoluteUrl } from '@/lib/site'

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: absoluteUrl(path), type: 'website' },
    twitter: { title, description },
  }
}
