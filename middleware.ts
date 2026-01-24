import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || ""

  const requestHeaders = new Headers(request.headers)

  if (hostname.includes("dr-dede.com")) {
    requestHeaders.set("x-domain", "dr-dede")
  } else if (hostname.includes("incluu.us")) {
    requestHeaders.set("x-domain", "incluu")
  } else {
    requestHeaders.set("x-domain", "incluu")
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg).*)",
  ],
}
