import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GradientBackground } from "@/components/gradient-background"
import { AccessibilityToolbar } from "@/components/accessibility-toolbar"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://drdsuite.vercel.app"),
  title: {
    default: "Dr. Dédé Tetsubayashi | AI Governance Expert & Disability Advocate",
    template: "%s | Dr. Dédé Tetsubayashi",
  },
  description:
    "Expert AI Governance & Tech Equity Solutions. AI GRC consulting, disability advocacy, luxury retreats, and TEDx speaking by Dr. Dédé Tetsubayashi.",
  keywords: [
    "AI Governance",
    "Tech Equity",
    "Disability Advocacy",
    "TEDx Speaker",
    "AI Consulting",
    "incluu",
    "Dr. Dédé",
    "Algorithmic Bias",
    "Digital Accessibility",
    "Technology Ethics",
    "Regulatory Compliance",
    "EU AI Act",
    "WCAG",
    "ADA Compliance",
  ],
  authors: [{ name: "Dr. Dédé Tetsubayashi", url: "https://drdsuite.vercel.app" }],
  creator: "Dr. Dédé Tetsubayashi",
  publisher: "Dr. Dédé Tetsubayashi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drdsuite.vercel.app",
    title: "Dr. Dédé Tetsubayashi | AI Governance Expert & Disability Advocate",
    description: "Expert AI Governance & Tech Equity Solutions",
    siteName: "Dr. Dédé Suite",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Dédé Tetsubayashi - AI Governance Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Dédé Tetsubayashi | AI Governance Expert",
    description: "Expert AI Governance & Tech Equity Solutions",
    images: ["/og-image.jpg"],
    creator: "@drdede",
  },
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://drdsuite.vercel.app",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
        >
          Skip to main content
        </a>
        <Suspense fallback={null}>
          <GradientBackground />
          <Navigation />
          <main id="main-content" className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
          <AccessibilityToolbar />
          <Toaster />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
