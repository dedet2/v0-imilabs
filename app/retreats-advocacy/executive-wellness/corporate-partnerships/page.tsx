import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Corporate Partnerships | Dr. Dédé Tetsubayashi",
  description:
    "Custom corporate wellness retreats for executive teams. Private retreats in Japan's most sacred spaces, tailored to your organization's unique needs.",
  alternates: {
    canonical: "https://dr-dede.com/retreats-advocacy/executive-wellness/corporate-partnerships",
  },
}

export default function CorporatePartnershipsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=1600&width=2400&query=diverse+corporate+team+Black+women+wheelchair+user+executives+Japanese+onsen+resort)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(102,126,234,0.95) 0%, rgba(118,75,162,0.95) 50%, rgba(240,147,251,0.95) 100%)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl text-white font-light mb-6">Custom Corporate Retreats</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Design bespoke wellness experiences for your executive team. Private retreats in Japan's most sacred spaces,
            tailored to your organization's unique needs.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg">
              Request Proposal
            </Button>
          </Link>
        </div>
      </section>

      {/* Partnership Options */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-4xl font-light text-center mb-4"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Partnership Options
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Three flexible partnership models designed to meet your organization's goals and budget.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Executive Escape",
                subtitle: "5-7 Days",
                price: "From $75,000",
                description: "Intimate retreat for 4-6 executives",
                features: [
                  "5-7 nights luxury ryokan",
                  "Private onsen experiences",
                  "Executive wellness sessions",
                  "Cultural immersion activities",
                  "All meals and transportation",
                ],
              },
              {
                title: "Leadership Summit",
                subtitle: "7-10 Days",
                price: "From $150,000",
                description: "Team retreat for 8-12 leaders",
                features: [
                  "7-10 nights premium accommodations",
                  "Custom programming",
                  "Team building experiences",
                  "Individual coaching sessions",
                  "Full concierge service",
                ],
                featured: true,
              },
              {
                title: "Enterprise Experience",
                subtitle: "10+ Days",
                price: "Custom Pricing",
                description: "Comprehensive program for 15+ participants",
                features: [
                  "Fully customized itinerary",
                  "Multiple location options",
                  "Executive + emerging leaders",
                  "Long-term wellness integration",
                  "Annual partnership options",
                ],
              },
            ].map((tier, i) => (
              <Card
                key={i}
                className={`border-none shadow-xl relative overflow-hidden ${tier.featured ? "border-2 border-purple-500 scale-105" : ""}`}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ background: "linear-gradient(to right, #667eea 0%, #764ba2 50%, #f093fb 100%)" }}
                />
                {tier.featured && (
                  <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle
                    className="text-2xl"
                    style={{
                      background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {tier.title}
                  </CardTitle>
                  <CardDescription>{tier.subtitle}</CardDescription>
                  <div
                    className="text-3xl font-bold mt-4"
                    style={{
                      background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {tier.price}
                  </div>
                  <p className="text-gray-600 text-sm">{tier.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ background: "linear-gradient(135deg, #06b6d4 0%, #667eea 100%)" }}
                        >
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
                      Request Proposal
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-light mb-6">Ready to Design Your Retreat?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us to discuss your organization's unique needs and goals.</p>
          <Link href="/contact">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
