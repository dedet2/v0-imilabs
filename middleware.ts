import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || ""
  const { pathname } = request.nextUrl

  // Only rewrite domain-specific paths when explicitly navigating to /incluu or /dr-dede sections

  if (hostname.includes("incluu.us") || hostname.includes("dr-dede.com")) {
    // Allow access to domain-specific sections when explicitly requested
    if (pathname.startsWith("/incluu") || pathname.startsWith("/dr-dede")) {
      return NextResponse.next()
    }

    // For all other paths (including root), show the unified home page
    // This keeps the clean URL visible while serving the correct content
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
