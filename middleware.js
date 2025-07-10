// middleware.js
import { NextResponse } from 'next/server'

export const config = {
  matcher: '/', // Only run on homepage
}

export function middleware(request) {
  const response = NextResponse.next()

  const city = request.geo?.city || null
  const country = request.geo?.country || null

  const currentVisitor = city && country ? `${city}, ${country}` : null

  // 1. Set last-visitor = previous current-visitor (only if present)
  const prevVisitor = request.cookies.get('current-visitor')?.value
  if (prevVisitor) {
    response.cookies.set('last-visitor', prevVisitor, { path: '/' })
  }

  // 2. Set current-visitor = this user's location
  if (currentVisitor) {
    response.cookies.set('current-visitor', currentVisitor, { path: '/' })
  }

  return response
}
