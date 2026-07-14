import ContentIndex from '@/app/components/ContentIndex'
import { content } from '@/lib/content'
import { pageMetadata } from '@/lib/seo'
export const metadata = pageMetadata('Education videos', 'Watch Candellar guidance, learning tips, and community stories.', '/videos')
export default async function VideosPage(){ return <ContentIndex title="Videos" intro="Watch Candellar’s guidance, learning tips, and community stories." items={await content.videos()} base="/videos"/> }
