import ContentIndex from '@/app/components/ContentIndex'
import { content } from '@/lib/content'
import { pageMetadata } from '@/lib/seo'
export const metadata = pageMetadata('Our education team', 'Meet the Candellar educators and advisors supporting confident families.', '/team')
export default async function TeamPage(){ return <ContentIndex title="Our team" intro="Educators and advisors focused on clear guidance, academic progress, and confident families." items={await content.team()} base="/team"/> }
