import { Card } from './content'
import { getContent } from './sanity'
export function getDetail(type:string, slug:string) {
  return getContent<Card | undefined>(`*[_type == $type && slug.current == $slug][0]{_id,title,'slug':slug.current,summary,description,excerpt,role,attribution,'image':coalesce(coverImage,thumbnail,media,portrait),'url':coalesce(file.asset->url,externalUrl,videoUrl)}`, undefined, { type, slug })
}
