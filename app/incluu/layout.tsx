import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  icons: {
    icon: [{ url: "/incluu-logo.png" }],
    apple: [{ url: "/incluu-logo.png" }],
  },
}

export default function IncluuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
