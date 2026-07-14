import { NextResponse } from 'next/server'
export const revalidate = 3600
export async function GET() {
  const id = process.env.FACEBOOK_PAGE_ID, token = process.env.FACEBOOK_PAGE_ACCESS_TOKEN
  const version = process.env.FACEBOOK_GRAPH_API_VERSION || 'v20.0'
  if (!id || !token) return NextResponse.json([], { headers:{'Cache-Control':'public, s-maxage=3600'} })
  try {
    const response = await fetch(`https://graph.facebook.com/${version}/${id}/posts?fields=id,message,permalink_url,created_time&limit=3&access_token=${token}`, { next:{revalidate:3600} })
    if (!response.ok) throw new Error()
    const data = await response.json()
    return NextResponse.json(data.data || [], { headers:{'Cache-Control':'public, s-maxage=3600'} })
  } catch { return NextResponse.json([], { headers:{'Cache-Control':'public, s-maxage=3600'} }) }
}
