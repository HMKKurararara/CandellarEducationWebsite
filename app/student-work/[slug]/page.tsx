import DetailPage from '@/app/components/DetailPage'
import { getDetail } from '@/lib/detail'
import { pageMetadata } from '@/lib/seo'
import type { Metadata } from 'next'
export async function generateMetadata({params}:{params:Promise<{slug:string}>}): Promise<Metadata> { const {slug}=await params; const item=await getDetail('studentWork',slug); return pageMetadata(item?.seoTitle || item?.title || 'Student work', item?.seoDescription || item?.description || 'Student work from Candellar Education.', `/student-work/${slug}`) }
export default async function Page({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; return <DetailPage item={await getDetail('studentWork',slug)} back="/student-work"/> }
