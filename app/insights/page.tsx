import ContentIndex from '@/app/components/ContentIndex'
import { content } from '@/lib/content'
import { pageMetadata } from '@/lib/seo'
export const metadata = pageMetadata('Insights for families', 'Helpful perspectives on learning, admissions, and education pathways.', '/insights')
export default async function InsightsPage(){ return <ContentIndex title="Insights for families" intro="Helpful perspectives on learning, admissions, and education pathways." items={await content.posts()} base="/insights"/> }
