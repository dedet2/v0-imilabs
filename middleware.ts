import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || ""
  const { pathname } = request.nextUrl

  // If visiting incluu.us root, redirect to /incluu
  if (hostname.includes("incluu.us") && pathname === "/") {
    return NextResponse.redirect(new URL("/incluu", request.url))
  }

  // If visiting dr-dede.com root, redirect to /dr-dede
  if (hostname.includes("dr-dede.com") && pathname === "/") {
    return NextResponse.redirect(new URL("/dr-dede", request.url))
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
