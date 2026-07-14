import ContentIndex from '@/app/components/ContentIndex'
import { content } from '@/lib/content'
export default async function InsightsPage(){ return <ContentIndex title="Insights for families" intro="Helpful perspectives on learning, admissions, and education pathways." items={await content.posts()} base="/insights"/> }
