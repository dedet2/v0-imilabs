import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Corporate Wellness Sponsorships | Dr. Dédé Tetsubayashi",
  description:
    "Support your team's well-being through transformative wellness experiences in Japan. Sponsor employees for Rest as Resistance retreats.",
  alternates: {
    canonical: "https://dr-dede.com/retreats-advocacy/executive-wellness/corporate-sponsorships",
  },
  openGraph: {
    title: "Corporate Wellness Sponsorships | Dr. Dédé Tetsubayashi",
    description:
      "Support your team's well-being through transformative wellness experiences in Japan. Sponsor employees for Rest as Resistance retreats.",
    url: "https://dr-dede.com/retreats-advocacy/executive-wellness/corporate-sponsorships",
    siteName: "Dr. Dédé Tetsubayashi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Wellness Sponsorships | Dr. Dédé Tetsubayashi",
    description: "Support your team's well-being through transformative wellness experiences in Japan.",
  },
}

export default function CorporateSponsorshipsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl text-white font-light mb-6">Corporate Wellness Sponsorships</h1>
          <p className="text-xl text-white/90 mb-8">
            Support your team's well-being through transformative wellness experiences in Japan
          </p>
          <Link href="/contact">
            <Button className="bg-white text-purple-600 px-8 py-3 rounded-md">Contact Us</Button>
          </Link>
        </div>
      </section>

      {/* Partnership Options */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-12 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Partnership Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Individual Sponsorships",
                description: "Sponsor employees to attend public Rest as Resistance retreats",
                features: [
                  "Tax-deductible contribution",
                  "DEI wellness initiative",
                  "Flexible scheduling",
                  "Per-person investment",
                ],
              },
              {
                title: "Group Retreats",
                description: "Custom wellness experiences for leadership teams",
                features: ["Tailored programming", "Team building focus", "Flexible dates", "Group pricing available"],
              },
              {
                title: "Annual Partnerships",
                description: "Ongoing wellness support for your organization",
                features: [
                  "Multiple retreat sponsorships",
                  "Priority scheduling",
                  "Custom reporting",
                  "Long-term wellness strategy",
                ],
              },
            ].map((option, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{option.title}</CardTitle>
                  <p className="text-gray-600">{option.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {option.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6">Ready to Partner?</h2>
          <p className="text-lg text-gray-600 mb-8">Contact us to discuss custom corporate wellness solutions</p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-md">
              Contact Us About Sponsorships
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
