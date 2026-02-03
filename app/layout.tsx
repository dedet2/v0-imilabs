import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { headers } from "next/headers"

console.log("[v0] Layout module loaded")

export async function generateMetadata(): Promise<Metadata> {
  console.log("[v0] generateMetadata called")
  const headersList = await headers()
  const domain = headersList.get("x-domain") || "incluu"
  const isDrDede = domain === "dr-dede"

  const baseUrl = isDrDede ? "https://dr-dede.com" : "https://incluu.com"

  return {
    title: {
      default: isDrDede
        ? "Dr. Dédé Tetsubayashi | AI Governance Expert & Disability Advocate"
        : "incluu | Expert AI Governance & Tech Equity Solutions",
      template: isDrDede ? "%s | Dr. Dédé Tetsubayashi" : "%s | incluu",
    },
    description: isDrDede
      ? "Dr. Dédé Tetsubayashi is an AI governance expert, TEDx speaker, and disability advocate helping Fortune 500 companies build ethical, inclusive AI systems."
      : "incluu provides expert AI governance, risk & compliance (GRC) consulting and tech equity solutions for enterprise organizations.",
    generator: "v0.app",
    metadataBase: new URL(baseUrl),
    keywords: isDrDede
      ? ["AI governance", "disability advocacy", "tech equity", "inclusive innovation", "TEDx speaker", "AI ethics", "Dr. Dédé Tetsubayashi"]
      : ["AI governance", "tech equity", "GRC consulting", "AI compliance", "inclusive technology", "AI risk management"],
    authors: [{ name: "Dr. Dédé Tetsubayashi" }],
    creator: "Dr. Dédé Tetsubayashi",
    publisher: isDrDede ? "Dr. Dédé Tetsubayashi" : "incluu",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: baseUrl,
      siteName: isDrDede ? "Dr. Dédé Tetsubayashi" : "incluu",
      title: isDrDede
        ? "Dr. Dédé Tetsubayashi | AI Governance Expert & Disability Advocate"
        : "incluu | Expert AI Governance & Tech Equity Solutions",
      description: isDrDede
        ? "AI governance expert, TEDx speaker, and disability advocate helping organizations build ethical, inclusive AI systems."
        : "Expert AI governance, risk & compliance consulting and tech equity solutions for enterprise organizations.",
      images: [
        {
          url: isDrDede ? "/dr-dede-headshot.jpg" : "/incluu-logo-with-text.png",
          width: 1200,
          height: 630,
          alt: isDrDede ? "Dr. Dédé Tetsubayashi" : "incluu",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isDrDede
        ? "Dr. Dédé Tetsubayashi | AI Governance Expert"
        : "incluu | AI Governance & Tech Equity",
      description: isDrDede
        ? "AI governance expert, TEDx speaker, and disability advocate."
        : "Expert AI governance and tech equity solutions.",
      images: [isDrDede ? "/dr-dede-headshot.jpg" : "/incluu-logo-with-text.png"],
      creator: "@drdede",
    },
    icons: {
      icon: [
        {
          url: isDrDede ? "/dr-dede-headshot.jpg" : "/incluu-logo-with-text.png",
          type: isDrDede ? "image/jpeg" : "image/png",
        },
      ],
      apple: [
        {
          url: isDrDede ? "/dr-dede-headshot.jpg" : "/incluu-logo-with-text.png",
        },
      ],
      shortcut: [isDrDede ? "/dr-dede-headshot.jpg" : "/incluu-logo-with-text.png"],
    },
    verification: {
      google: "your-google-verification-code",
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
