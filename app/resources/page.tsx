import ContentIndex from '@/app/components/ContentIndex'
import { content } from '@/lib/content'
import { pageMetadata } from '@/lib/seo'
export const metadata = pageMetadata('Free education resources', 'Practical, free resources to help families plan their next education step.', '/resources')
export default async function ResourcesPage(){ return <ContentIndex title="Free resources" intro="Practical guides and materials for families planning the next education step." items={await content.resources()} base="/resources"/> }
