import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Building2, Users, TrendingUp, Heart, Sparkles } from "lucide-react"
import Image from "next/image"

export default function CorporatePartnershipsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Standard Branding #1 */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1600)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(147,51,234,0.95) 0%, rgba(168,85,247,0.95) 50%, rgba(34,211,238,0.95) 100%)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl text-white font-light mb-6">Custom Corporate Retreats</h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto mb-8 leading-relaxed">
            Design bespoke wellness experiences for your executive team. Private retreats in Japan's most sacred spaces,
            tailored to your organization's unique needs.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-semibold">
              Request Proposal
            </Button>
          </Link>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Transform Your Leadership Through Rest</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Our corporate partnerships create bespoke wellness retreats designed specifically for your executive
                  team. Unlike off-the-shelf programs, we craft each experience around your organization's culture,
                  goals, and challenges.
                </p>
                <p>
                  Led by Dr. Dédé Tetsubayashi, our retreats combine evidence-based wellness practices with
                  culturally-informed rest, creating transformative experiences that reduce burnout and enhance
                  strategic thinking.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
                alt="Executive Retreat Experience"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
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
                featured: false,
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
                featured: false,
              },
            ].map((tier, i) => (
              <Card
                key={i}
                className={`border-none shadow-xl relative overflow-hidden ${
                  tier.featured ? "ring-2 ring-purple-500 scale-105" : ""
                }`}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ background: "linear-gradient(to right, #9333EA 0%, #22D3EE 100%)" }}
                />
                {tier.featured && (
                  <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    {tier.title}
                  </CardTitle>
                  <CardDescription className="text-base">{tier.subtitle}</CardDescription>
                  <div className="text-3xl font-bold mt-4 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    {tier.price}
                  </div>
                  <p className="text-gray-600 text-sm mt-2">{tier.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-600 to-cyan-600">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:opacity-90 rounded-md">
                      Request Proposal
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">What's Included</h2>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Every corporate partnership includes comprehensive support before, during, and after your retreat.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: "Pre-Retreat Planning",
                items: [
                  "Needs assessment",
                  "Custom itinerary design",
                  "Accommodations selection",
                  "Travel coordination",
                ],
              },
              {
                icon: Users,
                title: "During Retreat",
                items: [
                  "On-site facilitation",
                  "Wellness programming",
                  "Cultural experiences",
                  "24/7 concierge support",
                ],
              },
              {
                icon: Sparkles,
                title: "Wellness Services",
                items: [
                  "Onsen healing",
                  "Meditation sessions",
                  "Nature immersion",
                  "Restorative practices",
                ],
              },
              {
                icon: TrendingUp,
                title: "Post-Retreat",
                items: [
                  "Integration support",
                  "Follow-up sessions",
                  "Impact assessment",
                  "Ongoing resources",
                ],
              },
            ].map((section, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center mb-4">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The ROI of Executive Wellness */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-16 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            The ROI of Executive Wellness
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                stat: "23%",
                title: "Increased Performance",
                description: "Average productivity increase after wellness retreat participation",
              },
              {
                icon: Heart,
                stat: "67%",
                title: "Reduced Burnout",
                description: "Reduction in burnout symptoms among retreat participants",
              },
              {
                icon: Users,
                stat: "4x",
                title: "Better Retention",
                description: "Improved retention of high-performing leaders",
              },
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-lg text-center p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center bg-gradient-to-r from-purple-600 to-cyan-600">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  {item.stat}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Discovery Call",
                description:
                  "We begin with a comprehensive consultation to understand your organization's culture, challenges, and wellness goals.",
              },
              {
                step: "2",
                title: "Custom Proposal",
                description:
                  "Based on your needs, we design a tailored retreat experience with detailed itinerary, pricing, and expected outcomes.",
              },
              {
                step: "3",
                title: "Planning & Coordination",
                description:
                  "Our team handles all logistics—from accommodations and transportation to dietary preferences and accessibility needs.",
              },
              {
                step: "4",
                title: "Retreat Experience",
                description:
                  "Your team experiences transformative wellness programming in Japan's most sacred and healing spaces.",
              },
              {
                step: "5",
                title: "Integration Support",
                description:
                  "Post-retreat follow-up ensures lasting impact with integration sessions and ongoing wellness resources.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center text-white font-bold text-lg">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Organizations Say</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "The corporate retreat transformed our leadership team. We returned with renewed energy, clarity, and a shared commitment to sustainable excellence.",
                author: "Sarah Chen",
                role: "CEO, Tech Startup",
              },
              {
                quote:
                  "Investing in this wellness retreat was one of the best decisions we've made. Our executives are more focused, collaborative, and resilient.",
                author: "Marcus Williams",
                role: "CHRO, Healthcare Company",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="p-8 hover:shadow-lg transition-shadow">
                <p className="text-gray-800 italic mb-6 leading-relaxed text-lg">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-light mb-6">Ready to Design Your Retreat?</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Contact us to discuss your organization's unique needs and goals.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-semibold shadow-xl">
              Request Proposal
            </Button>
          </Link>
        </div>
      </section>

      {/* NO FOOTER - Handled by live site */}
    </div>
  )
}
