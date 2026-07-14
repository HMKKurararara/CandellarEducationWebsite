import ContentIndex from '@/app/components/ContentIndex'
import { content } from '@/lib/content'
import { pageMetadata } from '@/lib/seo'
export const metadata = pageMetadata('Student work showcase', 'Explore Candellar student work published with guardian consent.', '/student-work')
export default async function StudentWorkPage(){ return <ContentIndex title="Student work showcase" intro="We celebrate learners’ effort and thinking, with guardian consent recorded for every published work." items={await content.work()} base="/student-work"/> }
