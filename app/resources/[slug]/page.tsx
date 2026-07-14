import DetailPage from '@/app/components/DetailPage'
import { getDetail } from '@/lib/detail'
import { pageMetadata } from '@/lib/seo'
import type { Metadata } from 'next'
export async function generateMetadata({params}:{params:Promise<{slug:string}>}): Promise<Metadata> { const {slug}=await params; const item=await getDetail('resource',slug); return pageMetadata(item?.seoTitle || item?.title || 'Free resource', item?.seoDescription || item?.description || 'A free Candellar Education resource for families.', `/resources/${slug}`) }
export default async function Page({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; return <DetailPage item={await getDetail('resource',slug)} back="/resources" actionLabel="Download resource"/> }
