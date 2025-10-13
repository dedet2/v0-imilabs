import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { headers } from "next/headers"

// Domain-based metadata generation for multi-domain support
export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const domain = headersList.get("x-domain") || "incluu"

  const isDrDede = domain === "dr-dede"

  return {
    title: isDrDede
      ? "Dr. Dédé Tetsubayashi | AI Governance Expert & Disability Advocate"
      : "incluu | Expert AI Governance & Tech Equity Solutions",
    description: "Expert AI Governance & Tech Equity Solutions",
    generator: "v0.app",
    icons: {
      icon: isDrDede
        ? [{ url: "/dr-dede-favicon.png", type: "image/png" }]
        : [{ url: "/incluu-favicon.png", type: "image/png" }],
      apple: isDrDede ? [{ url: "/dr-dede-favicon.png" }] : [{ url: "/incluu-favicon.png" }],
      shortcut: isDrDede ? ["/dr-dede-favicon.png"] : ["/incluu-favicon.png"],
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">
        <ScrollToTop />
        <Navigation />
        <main id="main-content" className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
