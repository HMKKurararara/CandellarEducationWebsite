import type { MetadataRoute } from 'next'
import { getContent } from '@/lib/sanity'
import { absoluteUrl } from '@/lib/site'

type SitemapDocument = { _type: 'resource' | 'post' | 'video' | 'studentWork' | 'teamMember'; slug?: string; _updatedAt?: string }

const paths: Record<SitemapDocument['_type'], string> = {
  resource: '/resources',
  post: '/insights',
  video: '/videos',
  studentWork: '/student-work',
  teamMember: '/team',
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  const core: MetadataRoute.Sitemap = [
    ['/', 1],
    ['/resources', 0.9],
    ['/insights', 0.8],
    ['/videos', 0.8],
    ['/student-work', 0.7],
    ['/team', 0.7],
  ].map(([path, priority]) => ({ url: absoluteUrl(path as string), lastModified: now, changeFrequency: 'weekly', priority: priority as number }))

  const documents = await getContent<SitemapDocument[]>(
    "*[_type in ['resource','post','video','studentWork','teamMember'] && defined(slug.current) && (_type != 'studentWork' || guardianConsent == true)]{_type,'slug':slug.current,_updatedAt}",
    [],
  )

  return [...core, ...documents.map((document) => ({
    url: absoluteUrl(`${paths[document._type]}/${encodeURIComponent(document.slug!)}`),
    lastModified: document._updatedAt ? new Date(document._updatedAt) : now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))]
}
