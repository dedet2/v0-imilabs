import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || ""
  const { pathname } = request.nextUrl

  // If visiting incluu.us root, rewrite to /incluu
  if (hostname.includes("incluu.us") && pathname === "/") {
    return NextResponse.rewrite(new URL("/incluu", request.url))
  }

  // If visiting dr-dede.com root, rewrite to /dr-dede
  if (hostname.includes("dr-dede.com") && pathname === "/") {
    return NextResponse.rewrite(new URL("/dr-dede", request.url))
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
