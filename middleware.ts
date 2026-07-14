import { NextResponse } from 'next/server'

// The public site is English-first. Locale-aware fields are retained in Sanity
// so additional languages can be introduced without changing routes later.
export function middleware() {
  return NextResponse.next()
}

export const config = { matcher: ['/((?!_next|favicon.ico).*)'] }
