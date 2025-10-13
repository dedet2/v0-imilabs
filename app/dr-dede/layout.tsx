import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  icons: {
    icon: [{ url: "/DrDede47.jpg", type: "image/jpeg" }],
    apple: [{ url: "/DrDede47.jpg" }],
    shortcut: ["/DrDede47.jpg"],
  },
}

export default function DrDedeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
