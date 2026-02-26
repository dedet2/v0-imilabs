"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowLeft, Sparkles, Mountain, Users, Droplets, Heart } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function WinterSolstice2026Page() {
  const [showStripePayment, setShowStripePayment] = useState(false)
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Winter Blue/Cyan Theme */}
      <section
        className="relative min-h-[95vh] flex items-center justify-center pt-20"
        style={{
          background:
            `linear-gradient(135deg, rgba(59,130,246,0.85) 0%, rgba(6,182,212,0.8) 50%, rgba(147,197,253,0.85) 100%), url('/niseko.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <Link
            href="/retreats-advocacy"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Retreats
          </Link>
          <div className="inline-block px-4 py-2 bg-white/25 border-2 border-white/40 rounded-full text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
            REST AS RESISTANCE
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Winter Solstice Edition
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-4 tracking-wide">Rest Into Stillness</p>
          <p className="text-xl mb-4 opacity-95 max-w-2xl mx-auto leading-relaxed">
            Our 9-day flagship winter healing journey. Experience snow-covered temples, mountain onsen, winter
            illuminations, and culminate with Japan's sacred winter solstice ceremony—the turning point when darkness
            transforms to light.
          </p>
          <p className="text-lg font-medium mb-4">December 14–22, 2026 | Tokyo · Snow Country · Kyoto</p>
          <p className="text-sm mb-8 opacity-80">
            Limited to 10–12 participants · Return home December 23 for Christmas with family
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-6 text-lg font-bold rounded-lg shadow-lg hover:opacity-90 transition-all uppercase tracking-wide">
                Reserve Your Spot - From $15,500
              </Button>
            </Link>
            <Button
              onClick={() => setShowStripePayment(true)}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-6 text-lg font-bold rounded-lg shadow-lg hover:opacity-90 transition-all uppercase tracking-wide"
            >
              Secure My Spot!
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            This 9-day journey culminates on the actual winter solstice (December 22)—the turning point when darkness
            transforms to light. We've intentionally designed this as an intensive rather than extended experience,
            honoring both the depth of rest you deserve and the reality that you have lives, families, and
            responsibilities waiting.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed font-medium">
            Every day builds toward solstice ceremony. No filler. Just medicine.
          </p>
          <p className="text-gray-600 leading-relaxed">
            December 22 is <em>Tōji</em>—Japan's winter solstice, when the sun reaches its lowest point and begins its
            return. You'll participate in traditional yuzu baths (citrus-infused hot springs), eat kabocha pumpkin for
            good fortune, and receive <em>Ichiyo Raifuku</em> charms symbolizing "turning darkness to light." After the
            solstice ceremony, you depart Japan on December 23, arriving home the same day to be with family for
            Christmas Eve and Christmas Day.
          </p>
        </div>
      </section>

      {/* The Experience */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-6"
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #93c5fd 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The Experience
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            Honor the winter solstice—the longest night and return of the light—by embracing stillness, reflection, and
            the promise of renewal.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/_RvbnBLRcjXDCa8z8XAhh.jpg",
                icon: Droplets,
                title: "Snow Onsen",
                description:
                  "Soak in outdoor hot springs surrounded by pristine snow, experiencing the magical contrast of heat and cold.",
              },
              {
                image: "/cQIAyMvMmvn_U7F9hodBd.jpg",
                icon: Sparkles,
                title: "Solstice Ceremony",
                description:
                  "Celebrate the return of the light with a special winter solstice ritual honoring rest, darkness, and renewal.",
              },
              {
                image: "/snow-village.jpg",
                icon: Mountain,
                title: "Snow Country",
                description:
                  "Experience the landscapes that inspired Kawabata's Nobel Prize-winning novel in Japan's legendary snow country.",
              },
              {
                image: "/-L01k1x5hFfHSLvFgxeag.jpg",
                icon: Heart,
                title: "Yuzu Bath Ritual",
                description:
                  "Traditional winter solstice bathing with citrus, believed to prevent colds and bring good fortune.",
              },
              {
                image: "/temple-snow.jpg",
                icon: Sparkles,
                title: "Deep Reflection",
                description:
                  "Use winter's natural stillness for profound inner work and intention-setting for the year ahead.",
              },
              {
                image: "/lCGDyyabxAa6b72Hxpi-h.jpg",
                icon: Users,
                title: "Ryokan Luxury",
                description:
                  "Stay in historic ryokans known for exceptional hospitality, cuisine, and private hot spring baths.",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-60">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-blue-600">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-extrabold text-center mb-6"
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Your Winter Healing Journey
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Nine intentional days building toward the winter solstice—the moment when light returns.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                day: "Day 1",
                title: "Tokyo Arrival & Recovery",
                date: "December 14",
                description:
                  "Land, rest, let go. Private transfer to boutique hotel. Gentle welcome dinner. Sleep deeply.",
              },
              {
                day: "Day 2",
                title: "Tokyo Intention Setting",
                date: "December 15",
                description:
                  "Morning orientation and rest philosophy workshop. Afternoon exploring Tokyo's winter neighborhoods. Evening onsen experience.",
              },
              {
                day: "Days 3-5",
                title: "Snow Country Deep Rest",
                date: "December 16-18",
                description:
                  "Three nights in Nagano mountain onsen town. Daily hot spring rituals. Forest walks in snow. Silence. Stillness. The core of the retreat.",
              },
              {
                day: "Day 6",
                title: "Snow Monkeys & Transition",
                date: "December 19",
                description:
                  "Visit Jigokudani snow monkeys bathing in natural hot springs. Afternoon travel to Kyoto. Evening arrival and temple visit.",
              },
              {
                day: "Day 7",
                title: "Kyoto Winter Temples",
                date: "December 20",
                description:
                  "Snow-dusted gardens. Temple meditation. Traditional tea ceremony. Winter kaiseki with seasonal ingredients.",
              },
              {
                day: "Day 8",
                title: "Winter Illuminations",
                date: "December 21",
                description:
                  "Morning at Fushimi Inari shrine. Afternoon preparation for solstice. Evening winter light displays. Integration circle.",
              },
              {
                day: "Day 9",
                title: "Tōji Ceremony & Completion",
                date: "December 22 - Winter Solstice",
                description:
                  "The turning point. Yuzu bath ritual. Traditional solstice foods. Receive Ichiyo Raifuku charm. Closing ceremony celebrating the return of light.",
              },
              {
                day: "Departure",
                title: "Journey Home",
                date: "December 23",
                description:
                  "Morning departure to airport. Arrive US same day (crossing International Date Line). Home for Christmas Eve with family.",
              },
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">{item.day}</div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{item.date}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - 9-day only */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-4xl font-extrabold text-center mb-16"
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Investment
          </h2>

          <Card className="border-none shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400" />
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">Winter Solstice Intensive</h3>
              <p className="text-gray-600 mb-4">9 days · December 14-22, 2026</p>
              <div
                className="text-5xl font-black mb-2"
                style={{
                  background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                $15,500
              </div>
              <p className="text-gray-500 mb-6">Shared occupancy · Single room +$2,000</p>

              <ul className="text-left space-y-3 mb-8 max-w-md mx-auto">
                {[
                  "8 nights premium accommodations",
                  "All gourmet meals",
                  "Private & shared onsen access",
                  "All excursions & activities",
                  "Wellness sessions",
                  "Winter solstice ceremony",
                  "Snow monkey visit",
                  "All ground transportation",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
                <h4 className="font-bold text-gray-800 mb-3">Payment Plans Available</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <strong>Pay in Full:</strong> Save $500 (Total: $15,000)
                  </li>
                  <li>
                    <strong>Two-Payment Plan:</strong> $8,000 deposit + $7,500 final payment
                  </li>
                  <li>
                    <strong>Three-Payment Plan:</strong> $5,500 deposit + two payments of $5,000
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mt-4">
                  <strong>Important Dates:</strong> Booking Opens August 1, 2026 · Final Payment Due November 1, 2026
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-4 text-lg font-bold">
                    Reserve Your Spot
                  </Button>
                </Link>
                <Button
                  onClick={() => setShowStripePayment(true)}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 text-lg font-bold"
                >
                  Secure My Spot!
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready for Winter Solstice?</h2>
          <p className="text-xl mb-4 opacity-90">Limited to 10-12 participants. Applications open August 1, 2026.</p>
          <p className="mb-8 opacity-80">Return home December 23 to be with family for Christmas</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold">
                Reserve Your Seat
              </Button>
            </Link>
            <Link href="/retreats-advocacy">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-bold bg-transparent"
              >
                View All Retreats
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Dialog open={showStripePayment} onOpenChange={setShowStripePayment}>
        <DialogContent className="max-w-[95vw] sm:max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-serif text-blue-600">Secure Your Spot</DialogTitle>
          </DialogHeader>
          <div className="mt-3 sm:mt-4">
            {/* TODO: Create Stripe pricing table for Winter Solstice 2026 and replace this ID */}
            <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
            <stripe-pricing-table
              pricing-table-id="TODO_WINTER_SOLSTICE_PRICING_TABLE"
              publishable-key="pk_live_51HBq4LEVSHLlpak65gbm9X4cCKW6tyG6IL2F60eLf4W0cpozlg9gTSCxXsUVHSboSOMj79ZaTnAqQBTzA5e8avTo0055WBIeUn"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
