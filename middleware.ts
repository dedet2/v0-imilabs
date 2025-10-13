import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || ""

  // Create response
  const response = NextResponse.next()

  // Set a custom header to identify which domain is being accessed
  // This will be used by the layout to determine which favicon to show
  if (hostname.includes("dr-dede.com")) {
    response.headers.set("x-domain", "dr-dede")
  } else if (hostname.includes("incluu.us")) {
    response.headers.set("x-domain", "incluu")
  } else {
    // Default to incluu for localhost and other domains
    response.headers.set("x-domain", "incluu")
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg).*)",
  ],
}
