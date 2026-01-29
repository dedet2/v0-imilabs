import type { Metadata } from "next"
import TEDxPromotionHub from "@/components/manus-imports/tedx-promotion-hub"

export const metadata: Metadata = {
  title: "TEDx Promotion Hub | Manus Imports",
  description: "TEDx talk promotion dashboard with YouTube integration and social sharing.",
  alternates: {
    canonical: "https://dr-dede.com/manus-imports/tedx-promotion",
  },
}

export default function TEDxPromotionPage() {
  return <TEDxPromotionHub />
}
