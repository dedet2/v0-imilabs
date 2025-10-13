import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  icons: {
    icon: [{ url: "/dr-dede-incluu-headshot.jpg", type: "image/jpeg" }],
    apple: [{ url: "/dr-dede-incluu-headshot.jpg" }],
    shortcut: ["/dr-dede-incluu-headshot.jpg"],
  },
}

export default function DrDedeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
