import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accessibility, Heart, Mountain, Check } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Luxury Wellness Retreats | Dr. Dédé Tetsubayashi",
  description:
    "Premium wellness retreats in Japan combining traditional healing practices with modern luxury. Experience transformative rest in culturally-rich environments.",
  alternates: {
    canonical: "https://dr-dede.com/retreats-advocacy/luxury-wellness",
  },
}

export default function LuxuryWellnessPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=1600&width=2400&query=diverse+women+various+ethnicities+wheelchair+user+enjoying+accessible+luxury+Japanese+onsen+spa)",
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
          <h1 className="text-5xl md:text-6xl text-white font-light mb-6">Luxury Wellness Experiences</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Where accessibility meets elegance in transformative wellness journeys designed for complete comfort and
            cultural immersion.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/retreats-advocacy/luxury-wellness/rar-brand">
              <Button className="bg-white text-purple-600 px-8 py-3 rounded-md">Explore RaR Brand</Button>
            </Link>
            <Link href="/retreats-advocacy">
              <Button variant="outline" className="border-white text-white px-8 py-3 rounded-md bg-transparent">
                View All Retreats
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-light text-center mb-12 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
          Redefining Luxury
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div
              className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)" }}
            >
              <Accessibility className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Accessibility IS Luxury
            </h3>
            <p className="text-gray-600 leading-relaxed">
              True luxury means everyone can participate. Every aspect of our retreats is designed for complete
              accessibility and comfort.
            </p>
          </div>
          <div className="text-center">
            <div
              className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)" }}
            >
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Culturally-Specific Care
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Healing rooted in deep cultural understanding, honoring the unique experiences of Black women leaders.
            </p>
          </div>
          <div className="text-center">
            <div
              className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)" }}
            >
              <Mountain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Japan as Medicine
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The land itself becomes part of the healing journey—ancient forests, sacred hot springs, contemplative
              spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Retreat */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-12 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Featured Retreat
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/diverse-women-various-ethnicities-enjoying-cherry-.jpg"
              alt="Cherry Blossom Experience"
              className="w-full h-64 object-cover"
            />
            <CardContent className="p-8 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-white text-sm mb-4 w-fit">
                Spring 2026
              </div>
              <CardTitle className="text-3xl font-semibold mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Bloom Into Rest — Cherry Blossom 2026
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 mb-4">
                April 8-18, 2026 | Kamakura & Hakone
              </CardDescription>
              <p className="text-gray-600 mb-6">
                Experience Japan's most sacred season of renewal in luxury accommodations designed for accessibility and
                comfort.
              </p>
              <div className="text-2xl font-bold text-gray-900 mb-6">From $12,500</div>
              <Link href="/retreats-advocacy/cherry-blossom-2026">
                <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-md">
                  Reserve Your Spot
                </Button>
              </Link>
            </CardContent>
          </div>
        </div>
      </section>

      {/* All Retreats Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-12 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            All Luxury Wellness Retreats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Cherry Blossom 2026",
                badge: "Public • Spring",
                badgeColor: "from-pink-500 to-rose-400",
                link: "/retreats-advocacy/cherry-blossom-2026",
              },
              {
                title: "Summer Solstice 2026",
                badge: "Public • Summer",
                badgeColor: "from-yellow-500 to-green-400",
                link: "/retreats-advocacy/summer-solstice-2026",
              },
              {
                title: "Autumn Equinox 2026",
                badge: "Public • Fall",
                badgeColor: "from-orange-500 to-red-400",
                link: "/retreats-advocacy/autumn-equinox-2026",
              },
              {
                title: "Winter Solstice 2026 (9-Day)",
                badge: "Public • Winter",
                badgeColor: "from-blue-500 to-cyan-400",
                link: "/retreats-advocacy/winter-solstice-2026",
              },
              {
                title: "Cherry Blossom 2027",
                badge: "2027 • Early Bird",
                badgeColor: "from-pink-500 to-purple-500",
                link: "/retreats-advocacy/cherry-blossom-2027",
              },
              {
                title: "Winter Solstice 2027 (16-Day Extended)",
                badge: "2027 • Early Bird",
                badgeColor: "from-blue-500 to-purple-500",
                link: "/retreats-advocacy/winter-solstice-2027",
              },
              {
                title: "Anniversary Celebration",
                badge: "Private Family",
                badgeColor: "from-purple-500 to-indigo-500",
                link: "/retreats-advocacy/anniversary-celebration-2026",
              },
              {
                title: "Family Retreat June 2026",
                badge: "Private Family",
                badgeColor: "from-purple-500 to-indigo-500",
                link: "/retreats-advocacy/family-retreat-june-2026",
              },
            ].map((retreat, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <CardHeader>
                  <div
                    className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${retreat.badgeColor} text-white text-xs font-medium mb-2 w-fit`}
                  >
                    {retreat.badge}
                  </div>
                  <CardTitle className="text-lg">{retreat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Link href={retreat.link}>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Thoughtfully Designed Spaces
              </h3>
              <ul className="space-y-4">
                {[
                  "Wheelchair-accessible luxury ryokans",
                  "Roll-in showers and accessible onsen",
                  "Elevator access throughout",
                  "Adjustable beds and furniture",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #06b6d4 0%, #667eea 100%)" }}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Personalized Support
              </h3>
              <ul className="space-y-4">
                {[
                  "English-speaking accessibility specialists",
                  "Customizable activity schedules",
                  "Dietary accommodations",
                  "Medical support coordination",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #06b6d4 0%, #667eea 100%)" }}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Updated CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-light text-white mb-6">Find Your Perfect Retreat</h2>
          <Link href="/contact">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg">
              Contact Us About Retreats
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
