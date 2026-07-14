import DetailPage from '@/app/components/DetailPage'
import { getDetail } from '@/lib/detail'
import { pageMetadata } from '@/lib/seo'
import type { Metadata } from 'next'
export async function generateMetadata({params}:{params:Promise<{slug:string}>}): Promise<Metadata> { const {slug}=await params; const item=await getDetail('post',slug); return pageMetadata(item?.seoTitle || item?.title || 'Family insight', item?.seoDescription || item?.excerpt || 'A Candellar Education insight for families.', `/insights/${slug}`) }
export default async function Page({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; return <DetailPage item={await getDetail('post',slug)} back="/insights"/> }
