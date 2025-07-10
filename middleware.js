// middleware.js
import { NextResponse } from 'next/server'

export const config = {
  matcher: '/', // apply only on homepage
}

export function middleware(request) {
  const geo = request.geo
  const city = geo?.city || ''
  const country = geo?.country || ''

  // Build a label like "Delhi, India"
  const visitorLocation = city && country ? `${city}, ${country}` : null

  const response = NextResponse.next()

  // Step 1: Read the current last-visitor cookie
  const previousVisitor = request.cookies.get('last-visitor')?.value

  // Step 2: Set the new visitor's location into the cookie
  if (visitorLocation) {
    response.cookies.set('last-visitor', visitorLocation, {
      path: '/',
    })
  }

  // Step 3: Store the previous visitor's location as a header
  if (previousVisitor) {
    response.headers.set('x-last-visitor', previousVisitor)
  }

  return response
}