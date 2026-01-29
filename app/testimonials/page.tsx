import type { Metadata } from "next"
import { TestimonialsClientPage } from "./testimonials-client"

export const metadata: Metadata = {
  title: "Client Testimonials | What Our Clients Say",
  description:
    "Read testimonials from Fortune 500 companies and organizations that have transformed their AI governance with Dr. Dédé Tetsubayashi.",
  alternates: {
    canonical: "https://dr-dede.com/testimonials",
  },
}

export default function TestimonialsPage() {
  return <TestimonialsClientPage />
}
