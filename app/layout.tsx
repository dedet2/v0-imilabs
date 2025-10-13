import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { headers } from "next/headers"

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
      icon: isDrDede ? "/dr-dede-incluu-headshot.jpg" : "/incluu-logo.png",
      apple: isDrDede ? "/dr-dede-incluu-headshot.jpg" : "/incluu-logo.png",
      shortcut: isDrDede ? "/dr-dede-incluu-headshot.jpg" : "/incluu-logo.png",
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

export const metadata = {
      generator: 'v0.app'
    };
