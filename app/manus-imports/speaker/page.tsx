import type { Metadata } from "next"
import DrDedeSpeaker from "@/components/manus-imports/dr-dede-speaker"

export const metadata: Metadata = {
  title: "Dr. Dédé Speaker | Manus Imports",
  description: "Speaker profile and TEDx talk page with booking capabilities.",
  alternates: {
    canonical: "https://dr-dede.com/manus-imports/speaker",
  },
}

export default function SpeakerPage() {
  return <DrDedeSpeaker />
}
