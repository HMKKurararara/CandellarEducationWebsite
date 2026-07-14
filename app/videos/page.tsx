import ContentIndex from '@/app/components/ContentIndex'
import { content } from '@/lib/content'
export default async function VideosPage(){ return <ContentIndex title="Videos" intro="Watch Candellar’s guidance, learning tips, and community stories." items={await content.videos()} base="/videos"/> }
