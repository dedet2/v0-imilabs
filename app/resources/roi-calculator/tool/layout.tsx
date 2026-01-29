import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ROI Calculator Tool | Calculate Your AI Governance ROI",
  description: "Interactive ROI calculator to discover the financial impact of proactive AI compliance and inclusive design for your organization.",
  alternates: {
    canonical: "https://dr-dede.com/resources/roi-calculator/tool",
  },
  robots: {
    index: false, // Don't index the gated content
    follow: true,
  },
}

export default function ROICalculatorToolLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
