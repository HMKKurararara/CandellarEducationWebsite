import { content } from '@/lib/content'
import LandingTabs from './components/LandingTabs'

export default async function HomePage() {
  const [settings, programmes, resources, posts, videos, work, team, facebook] = await Promise.all([content.settings(), content.programmes(), content.resources(), content.posts(), content.videos(), content.work(), content.team(), content.facebook()])
  return <LandingTabs settings={settings} programmes={programmes} resources={resources} posts={posts} videos={videos} work={work} team={team} facebook={facebook}/>
}
