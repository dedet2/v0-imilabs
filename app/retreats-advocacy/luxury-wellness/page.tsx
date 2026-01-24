import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accessibility, Heart, Mountain, Check, Sparkles } from "lucide-react"
import Image from "next/image"

export default function LuxuryWellnessHubPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Standard Branding #1 */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1600)",
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
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto mb-8 leading-relaxed">
            Where accessibility meets elegance in transformative wellness journeys designed for complete comfort and
            cultural immersion.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/retreats-advocacy/luxury-wellness/rar-brand">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold">
                Explore RaR Brand
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="border-2 border-white text-white px-8 py-3 rounded-md bg-transparent hover:bg-white/10">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Redefining Luxury */}
      <section className="py-20 bg-white max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-light text-center mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
          Redefining Luxury
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          True luxury is inclusive, accessible, and transformative. Our retreats embody this philosophy in every detail.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center bg-gradient-to-r from-purple-600 to-cyan-600">
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
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center bg-gradient-to-r from-purple-600 to-cyan-600">
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
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center bg-gradient-to-r from-purple-600 to-cyan-600">
              <Mountain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Global Wellness Traditions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Sacred spaces around the world become part of the healing journey—ancient forests, natural hot springs, contemplative environments.
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
          <Card className="border-none shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-96">
                <Image
                  src="https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800"
                  alt="Cherry Blossom Experience"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 rounded-md bg-gradient-to-r from-pink-500 to-rose-400 text-white text-sm mb-4 w-fit font-medium">
                  Spring 2026
                </div>
                <CardTitle className="text-3xl font-semibold mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Bloom Into Rest — Cherry Blossom 2026
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 mb-4">
                  April 8-18, 2026 | Kamakura & Hakone
                </CardDescription>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Experience Japan's most sacred season of renewal in luxury accommodations designed for accessibility
                  and comfort.
                </p>
                <div className="text-2xl font-bold text-gray-900 mb-6">From $12,500</div>
                <Link href="/retreats-advocacy/cherry-blossom-2026">
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:opacity-90 px-8 py-3 rounded-md">
                    Reserve Your Spot
                  </Button>
                </Link>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* All Retreats Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            All Luxury Wellness Retreats
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose from our seasonal offerings, each designed to honor the rhythms of nature and your body's need for rest.
          </p>
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
                    className={`inline-block px-3 py-1 rounded-md bg-gradient-to-r ${retreat.badgeColor} text-white text-xs font-medium mb-2 w-fit`}
                  >
                    {retreat.badge}
                  </div>
                  <CardTitle className="text-lg">{retreat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Link href={retreat.link}>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:opacity-90 rounded-md">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Our Retreats Luxury */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            What Makes Our Retreats Luxury
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Every detail is thoughtfully designed to create transformative experiences that honor your comfort, dignity, and wellbeing.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Accessibility,
                title: "Premium Accommodations",
                items: [
                  "Luxury ryokans with accessibility",
                  "Private onsen experiences",
                  "Spacious, comfortable rooms",
                  "Beautiful natural settings",
                ],
              },
              {
                icon: Heart,
                title: "Gourmet Dining",
                items: [
                  "Traditional kaiseki cuisine",
                  "Dietary accommodations",
                  "Farm-to-table ingredients",
                  "Cultural dining experiences",
                ],
              },
              {
                icon: Sparkles,
                title: "Wellness Programming",
                items: ["Onsen healing sessions", "Meditation & mindfulness", "Forest bathing", "Restorative practices"],
              },
              {
                icon: Mountain,
                title: "Cultural Immersion",
                items: ["Tea ceremony", "Temple visits", "Local artisan experiences", "Seasonal celebrations"],
              },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations Features - Accessibility Details */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-12 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Accessibility & Comfort
          </h2>
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
                    <div className="w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-cyan-600">
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
                    <div className="w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-cyan-600">
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

      {/* Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="border-none shadow-xl p-8">
            <p className="text-xl italic text-gray-800 mb-6 leading-relaxed text-center">
              "The luxury wasn't just the beautiful accommodations—it was feeling truly seen and cared for. Every detail
              was designed with accessibility in mind, allowing me to fully participate and experience deep rest."
            </p>
            <div className="text-center">
              <div className="font-semibold">Dr. Michelle Johnson</div>
              <div className="text-sm text-gray-600">Executive Leader, 2025 Retreat Participant</div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-light text-white mb-6">Find Your Perfect Retreat</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Experience transformative luxury wellness in Japan's most sacred spaces.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/retreats-advocacy">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-semibold">
                Explore All Retreats
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="border-2 border-white text-white px-8 py-3 rounded-md bg-transparent hover:bg-white/10 text-lg font-semibold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* NO FOOTER - Handled by live site */}
    </div>
  )
}
