import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { apiVersion, dataset, projectId } from '@/sanity/env'

export const sanityEnabled = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
// Staff publishing should be visible as soon as a visitor refreshes the site.
// Use the live API rather than a CDN copy for public CMS queries.
export const client = createClient({ projectId, dataset, apiVersion, useCdn: false, perspective: 'published' })
const builder = imageUrlBuilder(client)
export const urlFor = (source: unknown): string | undefined => source ? builder.image(source as never).width(1200).auto('format').url() : undefined

export async function getContent<T>(query: string, fallback: T, params: Record<string, unknown> = {}): Promise<T> {
  if (!sanityEnabled) return fallback
  try { return await client.fetch<T>(query, params, { cache: 'no-store' }) } catch { return fallback }
}
