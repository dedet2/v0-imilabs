import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Gift, Heart, TrendingUp, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Executive Wellness Programs | Dr. Dédé Tetsubayashi",
  description:
    "Transform your leadership through rest. Custom corporate wellness programs and executive retreat sponsorships designed for organizational impact.",
  alternates: {
    canonical: "https://dr-dede.com/retreats-advocacy/executive-wellness",
  },
}

export default function ExecutiveWellnessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=1600&width=2400&query=diverse+Black+women+executives+team+retreat+Japan+mountain+view+professional)",
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
          <h1 className="text-5xl md:text-6xl text-white font-light mb-6">Executive Wellness Programs</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Transform your leadership through rest. Custom corporate wellness programs and executive retreat
            sponsorships designed for organizational impact.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/retreats-advocacy/executive-wellness/corporate-partnerships">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-md">
                Corporate Partnerships
              </Button>
            </Link>
            <Link href="/retreats-advocacy/executive-wellness/corporate-sponsorships">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-md bg-transparent"
              >
                Sponsorships
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Two Main Offerings */}
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
            Two Pathways to Partner
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Whether you're looking to send employees to existing retreats or create custom experiences for your
            organization, we have a partnership model for you.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)" }}
                >
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <CardTitle
                  className="text-2xl"
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Corporate Sponsorships
                </CardTitle>
                <CardDescription className="text-lg">Sponsor employees to attend existing retreats</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-center">
                  Send high-potential leaders to our Rest as Resistance public retreats as an investment in their
                  wellbeing and development. Tax-deductible sponsorship options available.
                </p>
                <ul className="space-y-2">
                  {[
                    "Individual or group sponsorships",
                    "Tax-deductible options",
                    "DEI initiative alignment",
                    "Leadership development ROI",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: "linear-gradient(135deg, #06b6d4 0%, #667eea 100%)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/retreats-advocacy/executive-wellness/corporate-sponsorships" className="block">
                  <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
                    Learn About Sponsorships
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)" }}
                >
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <CardTitle
                  className="text-2xl"
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Corporate Partnerships
                </CardTitle>
                <CardDescription className="text-lg">Custom executive retreat programs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-center">
                  Design bespoke wellness retreats for your executive team or organization. Custom programming, private
                  accommodations, and tailored experiences.
                </p>
                <ul className="space-y-2">
                  {[
                    "Custom retreat design",
                    "Private group experiences",
                    "Executive team building",
                    "Leadership wellness programs",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: "linear-gradient(135deg, #06b6d4 0%, #667eea 100%)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/retreats-advocacy/executive-wellness/corporate-partnerships" className="block">
                  <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
                    Explore Partnerships
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-4xl font-light text-center mb-16"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The ROI of Executive Wellness
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Increased Performance",
                stat: "23%",
                description: "Average productivity increase after wellness retreat participation",
              },
              {
                icon: Heart,
                title: "Reduced Burnout",
                stat: "67%",
                description: "Reduction in burnout symptoms among retreat participants",
              },
              {
                icon: Users,
                title: "Better Retention",
                stat: "4x",
                description: "Improved retention of high-performing leaders",
              },
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-lg text-center">
                <CardContent className="pt-8">
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)" }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div
                    className="text-4xl font-bold mb-2"
                    style={{
                      background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.stat}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-light mb-6">Ready to Partner?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how wellness retreats can transform your organization.
          </p>
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
