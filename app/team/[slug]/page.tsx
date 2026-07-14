import DetailPage from '@/app/components/DetailPage'
import { getDetail } from '@/lib/detail'
import { pageMetadata } from '@/lib/seo'
import type { Metadata } from 'next'
export async function generateMetadata({params}:{params:Promise<{slug:string}>}): Promise<Metadata> { const {slug}=await params; const item=await getDetail('teamMember',slug); return pageMetadata(item?.title || 'Candellar team member', item?.role || 'Meet a member of the Candellar Education team.', `/team/${slug}`) }
export default async function Page({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; return <DetailPage item={await getDetail('teamMember',slug)} back="/team"/> }
