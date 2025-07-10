// middleware.js
import { NextResponse } from "next/server"

export const config = {
  matcher: "/", // run only on home
}

export function middleware(request) {
  const geo = request.geo || {}
  const currentVisitor = geo.city && geo.country
    ? `${geo.city}, ${geo.country}`
    : null

  const response = NextResponse.next()

  // Get current cookie (last visitor info)
  const lastVisitor = request.cookies.get("last-visitor")?.value

  // Set the new visitor's location for the next visitor
  if (currentVisitor) {
    response.cookies.set("last-visitor", currentVisitor, {
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    })
  }

  return response
}
