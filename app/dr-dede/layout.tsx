import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  icons: {
    icon: [{ url: "/dr-dede-favicon.png" }],
    apple: [{ url: "/dr-dede-favicon.png" }],
  },
}

export default function DrDedeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
