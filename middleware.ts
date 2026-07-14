import { NextRequest, NextResponse } from 'next/server'

// The public site is English-first. Locale-aware fields are retained in Sanity
// so additional languages can be introduced without changing routes later.
export function middleware(request: NextRequest) {
  // Google still has URLs from the retired bilingual site indexed. Send both
  // legacy home URLs permanently to the new English-first home page.
  if (request.nextUrl.pathname === '/en' || request.nextUrl.pathname === '/en/' || request.nextUrl.pathname === '/my' || request.nextUrl.pathname === '/my/') {
    const url = request.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = { matcher: ['/((?!_next|favicon.ico).*)'] }
