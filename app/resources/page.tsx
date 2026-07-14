import ContentIndex from '@/app/components/ContentIndex'
import { content } from '@/lib/content'
export default async function ResourcesPage(){ return <ContentIndex title="Free resources" intro="Practical guides and materials for families planning the next education step." items={await content.resources()} base="/resources"/> }
