import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Leaf, Mountain, Sparkles, Users, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Autumn Equinox 2026 - Crimson & Gold | Rest as Resistance",
  description:
    "11-day wellness retreat celebrating autumn equinox in Japan (Sept 22 - Oct 2, 2026). Fall foliage, balance, restoration.",
  alternates: {
    canonical: "https://dr-dede.com/retreats-advocacy/autumn-equinox-2026",
  },
  openGraph: {
    title: "Autumn Equinox 2026 - Crimson & Gold | Rest as Resistance",
    description:
      "11-day wellness retreat celebrating autumn equinox in Japan (Sept 22 - Oct 2, 2026). Fall foliage, balance, restoration.",
    url: "https://dr-dede.com/retreats-advocacy/autumn-equinox-2026",
    siteName: "Dr. Dédé Tetsubayashi",
    images: [
      {
        url: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Autumn Equinox 2026 - Crimson & Gold",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autumn Equinox 2026 - Crimson & Gold | Rest as Resistance",
    description: "11-day wellness retreat celebrating autumn equinox in Japan with spectacular fall foliage.",
    images: ["https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=1200&q=80"],
  },
}

export default function AutumnEquinox2026Page() {
  return (
    <div className="min-h-screen bg-white">
      <section
        className="relative min-h-[95vh] flex items-center justify-center pt-20"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(220,38,38,0.85) 0%, rgba(245,158,11,0.8) 50%, rgba(217,119,6,0.85) 100%), url('/02-ekYLf16--NMAgcW86O.jpg')`,
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
          <div className="inline-block px-6 py-3 bg-white/25 border-2 border-white/40 rounded-full text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
            AUTUMN EQUINOX · BALANCE
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">Crimson & Gold</h1>
          <p className="text-2xl md:text-3xl font-light mb-4 tracking-wide">Autumn Equinox Celebration</p>
          <p className="text-xl mb-4 opacity-95 max-w-2xl mx-auto leading-relaxed">
            September 22 – October 2, 2026 · Tokyo · Nikko · Kyoto · Hakone
          </p>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Celebrate the autumn equinox—perfect balance of light and dark—with 11 days of spectacular fall foliage,
            sacred temple rituals, and mountain onsen. Experience Japan's most breathtaking season while honoring the
            wisdom of release and transformation.
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-6 text-lg font-bold rounded-lg shadow-lg hover:opacity-90 transition-all uppercase tracking-wide">
              Reserve Your Spot
            </Button>
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-600 leading-relaxed">
            The autumn equinox marks perfect equilibrium: equal day and night, light and dark, action and rest. In
            Japan, this sacred threshold is honored through nature's spectacular display—crimson maples and golden
            ginkgo painting ancient temple gardens in fire and gold. Join us for 11 days of deep restoration as we
            witness this transformation.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-16"
            style={{
              background: "linear-gradient(135deg, #dc2626 0%, #f59e0b 50%, #d97706 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Autumn Healing Experiences
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1507371341162-763b5e419408?w=600&q=80",
                icon: Leaf,
                title: "Peak Fall Foliage",
                description:
                  "Experience Japan's most spectacular autumn colors at their peak. Crimson Japanese maples, golden ginkgo trees, and sacred temple gardens painted in nature's masterpiece.",
              },
              {
                image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&q=80",
                icon: Sparkles,
                title: "Sacred Temple Visits",
                description:
                  "UNESCO World Heritage sites in Nikko surrounded by autumn glory. Kyoto's ancient temples framed by fall colors. Morning meditation in nature's cathedral.",
              },
              {
                image: "/02-ekYLf16--NMAgcW86O.jpg",
                icon: Mountain,
                title: "Kyoto in Crimson",
                description:
                  "Explore iconic fall foliage sites: Tofuku-ji Temple's sea of red, Philosopher's Path lined with maples, Kiyomizu-dera's panoramic autumn views.",
              },
              {
                image: "/eSJeV4qEeaL_JYc6PEc_3.jpg",
                icon: Sparkles,
                title: "Mountain Onsen Retreat",
                description:
                  "Hakone luxury onsen with Mt. Fuji views and autumn foliage. Multiple daily hot spring experiences. Private baths surrounded by crimson leaves.",
              },
              {
                image: "/HoE5VBM9_L6HbYK0FJEqR.jpg",
                icon: Mountain,
                title: "Nikko's Sacred Mountains",
                description:
                  "Lake Chuzenji reflection walks with fall colors mirrored in crystal waters. Forest bathing through ancient cedar groves and autumn-painted hillsides.",
              },
              {
                image: "/ON02fw2x-e_k-A6Px5078.jpg",
                icon: Users,
                title: "Equinox Ceremony",
                description:
                  "Guided autumn equinox ritual honoring balance and release. Rest as Resistance workshops on the wisdom of letting go. Integration circles.",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-64">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="w-6 h-6 text-orange-600" />
                    <h3 className="text-xl font-bold text-orange-600">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-lg mx-auto">
          <h2
            className="text-4xl font-extrabold text-center mb-8"
            style={{
              background: "linear-gradient(135deg, #dc2626 0%, #f59e0b 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Investment
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            11-day immersive journey celebrating autumn equinox across Japan's most spectacular fall destinations.
          </p>

          <Card className="border-none shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 via-orange-500 to-amber-500" />
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-orange-600 mb-2">Autumn Equinox Experience</h3>
              <div
                className="text-5xl font-black my-6"
                style={{
                  background: "linear-gradient(to right, #dc2626 0%, #f59e0b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                $14,500
              </div>
              <p className="text-gray-600 font-semibold mb-8">11 Days · Shared Occupancy</p>

              <div className="text-left mb-8">
                <h4 className="font-bold mb-4 text-gray-800 text-lg">Includes:</h4>
                <ul className="space-y-3">
                  {[
                    "10 nights premium accommodations",
                    "All meals (breakfast, lunch, dinner)",
                    "All transportation between cities",
                    "Daily onsen access at mountain ryokans",
                    "All temple entries & cultural experiences",
                    "Autumn equinox ceremony",
                    "Rest as Resistance workshops",
                    "Tea ceremonies & kaiseki dinners",
                    "Integration circles & guidance",
                    "Pre-trip prep & post-retreat support",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-orange-600 mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 p-4 bg-amber-50 rounded-lg text-sm">
                  <p className="mb-2">
                    <strong>Single Occupancy:</strong> +$2,200
                  </p>
                  <p>
                    <strong>Payment Plans:</strong> Pay in full (save $500!) or 3-payment plan
                  </p>
                </div>
              </div>

              <Link href="/contact" className="block">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-6 text-lg font-bold">
                  Reserve Your Spot
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready for Autumn Equinox?</h2>
          <p className="text-xl mb-8 opacity-90">Limited to 12 participants. Applications close July 31, 2026.</p>
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

      {/* NO FOOTER - Site handles it */}
    </div>
  )
}
