import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free ROI Calculator | Discover Your Business's Hidden ROI Potential | Dr. Dédé",
  description:
    "Calculate exactly how much AI automation could save your business in time, costs, and revenue. Get your personalized ROI report in under 3 minutes.",
  keywords: [
    "ROI calculator",
    "AI automation",
    "business savings",
    "cost reduction",
    "revenue growth",
    "AI governance",
    "compliance ROI",
  ],
  openGraph: {
    title: "Free ROI Calculator | Discover Your Business's Hidden ROI Potential",
    description:
      "Calculate exactly how much AI automation could save your business. Save 20+ hours/week, reduce costs by 40%, and boost revenue by 25%.",
    type: "website",
    url: "https://dr-dede.com/resources/roi-calculator/landing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free ROI Calculator | Dr. Dédé",
    description: "Calculate your AI automation ROI - get your personalized savings report in under 3 minutes.",
  },
  alternates: {
    canonical: "https://dr-dede.com/resources/roi-calculator/landing",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ROICalculatorLandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
