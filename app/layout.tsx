import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { DynamicFavicon } from "@/components/dynamic-favicon"

export const metadata: Metadata = {
  title: "incluu | Expert AI Governance & Tech Equity Solutions",
  description: "Expert AI Governance & Tech Equity Solutions",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">
        <DynamicFavicon />
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
