const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.candellarsg.com'

/** The public origin used for canonical URLs, Open Graph, and the sitemap. */
export const siteUrl = new URL(
  rawSiteUrl.startsWith('http') ? rawSiteUrl : `https://${rawSiteUrl}`,
).origin

export const absoluteUrl = (path = '/') => new URL(path, siteUrl).toString()
