import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || ""
  const { pathname } = request.nextUrl

  // Handle favicon requests based on domain
  if (pathname === "/favicon.ico" || pathname.includes("/icon")) {
    const isDrDede = hostname.includes("dr-dede.com") || hostname.includes("www.dr-dede.com")
    const isIncluu = hostname.includes("incluu.us") || hostname.includes("www.incluu.us")

    if (isDrDede) {
      // Serve Dr. Dédé favicon for dr-dede.com
      return NextResponse.rewrite(new URL("/dr-dede-favicon.png", request.url))
    } else if (isIncluu) {
      // Serve incluu logo for incluu.us
      return NextResponse.rewrite(new URL("/incluu-logo.png", request.url))
    }
  }

  // For all other requests, continue normally (both domains show home page)
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - images (public images)
     */
    "/((?!api|_next/static|_next/image|images).*)",
  ],
}
