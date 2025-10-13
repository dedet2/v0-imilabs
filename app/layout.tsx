import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "Dr. Dédé Tetsubayashi | AI Governance Expert & Disability Advocate",
  description: "Expert AI Governance & Tech Equity Solutions",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/dr-dede-favicon.png", type: "image/png" },
      { url: "/incluu-logo.png", type: "image/png" },
    ],
    apple: [{ url: "/dr-dede-favicon.png" }],
    shortcut: ["/dr-dede-favicon.png"],
  },
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
