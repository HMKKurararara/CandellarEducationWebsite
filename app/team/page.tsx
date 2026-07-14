import ContentIndex from '@/app/components/ContentIndex'
import { content } from '@/lib/content'
export default async function TeamPage(){ return <ContentIndex title="Our team" intro="Educators and advisors focused on clear guidance, academic progress, and confident families." items={await content.team()} base="/team"/> }
