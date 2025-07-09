// middleware.js
import { NextResponse } from "next/server"

export const config = {
  matcher: "/",    // run on your homepage (and any other path you like)
}

export function middleware(request) {
  const response = NextResponse.next()
  const geo = request.geo || {}

  if (geo.city) {
    response.cookies.set("visitor-city", geo.city, { path: "/" })
  }
  if (geo.country_name) {
    response.cookies.set("visitor-country", geo.country_name, { path: "/" })
  }

  return response
}