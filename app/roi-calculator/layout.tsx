import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ROI Calculator | Dr. Dédé & incluu",
  description: "Calculate your AI governance ROI - discover the financial impact of proactive AI compliance and inclusive design.",
  openGraph: {
    title: "AI Governance ROI Calculator",
    description: "Calculate the financial impact of proactive AI compliance and inclusive design.",
  },
  alternates: {
    canonical: "https://dr-dede.com/roi-calculator",
  },
}

export default function ROICalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
