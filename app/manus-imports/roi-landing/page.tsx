import type { Metadata } from "next"
import ROICalculatorLanding from "@/components/manus-imports/roi-calculator-landing"

export const metadata: Metadata = {
  title: "ROI Calculator Landing | Manus Imports",
  description: "Lead capture landing page for ROI Calculator with email gating.",
  alternates: {
    canonical: "https://dr-dede.com/manus-imports/roi-landing",
  },
}

export default function ROILandingPage() {
  return <ROICalculatorLanding />
}
