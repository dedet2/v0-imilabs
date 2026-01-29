import type { Metadata } from "next"
import DrDedeBusinessPlatform from "@/components/manus-imports/dr-dede-business-platform"

export const metadata: Metadata = {
  title: "Business Platform | Manus Imports",
  description: "Main business platform landing page with services overview.",
  alternates: {
    canonical: "https://dr-dede.com/manus-imports/business-platform",
  },
}

export default function BusinessPlatformPage() {
  return <DrDedeBusinessPlatform />
}
