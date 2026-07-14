import DetailPage from '@/app/components/DetailPage'
import { getDetail } from '@/lib/detail'
export default async function Page({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; return <DetailPage item={await getDetail('teamMember',slug)} back="/team"/> }
