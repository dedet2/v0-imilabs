import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowLeft, Sparkles, Droplets, Trees, Coffee, UtensilsCrossed, Heart } from "lucide-react"

export const metadata = {
  title: "Cherry Blossom Edition 2026 | Rest as Resistance",
  description:
    "10-day wellness retreat in Japan during peak cherry blossom season (April 8-18, 2026). Kamakura, Tokyo, Premium Ryokan.",
}

export default function CherryBlossom2026Page() {
  return (
    <div className="min-h-screen bg-white">
      <link rel="canonical" href="https://dr-dede.com/retreats-advocacy/cherry-blossom-2026" />

      {/* Hero Section */}
      <section
        className="relative min-h-[95vh] flex items-center justify-center pt-20 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(255,179,217,0.9) 0%, rgba(255,105,180,0.85) 50%, rgba(255,182,193,0.9) 100%)`,
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-40 h-40 bg-white/30 rounded-full blur-3xl top-20 left-20 animate-pulse" />
          <div className="absolute w-60 h-60 bg-pink-300/30 rounded-full blur-3xl bottom-20 right-20 animate-pulse" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <Link
            href="/retreats-advocacy"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Retreats
          </Link>
          <div className="inline-block px-6 py-3 bg-white/25 border-2 border-white/40 rounded-full text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
            REST AS RESISTANCE · SPRING 2026
          </div>
          <h1
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
            style={{ textShadow: "0 4px 20px rgba(255,105,180,0.3), 0 2px 8px rgba(0,0,0,0.1)" }}
          >
            Cherry Blossom Edition 2026
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-4 tracking-wide">Bloom Into Rest</p>
          <p className="text-xl mb-4 opacity-95 max-w-2xl mx-auto leading-relaxed">
            April 8–18, 2026 · Kamakura · Tokyo · Premium Ryokan
          </p>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            A once-in-a-lifetime wellness retreat at peak sakura season. Join 10 women leaders for 7–10 days of radical
            rest, cultural immersion, and connection in Japan's breathtaking spring landscapes.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-6 text-lg font-bold rounded-lg shadow-lg hover:opacity-90 transition-all uppercase tracking-wide"
            >
              Reserve Your Spot
            </Button>
          </Link>
          <p className="text-sm mt-4 opacity-90">Limited to 10 women · Early Bird ends December 31</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-600 leading-relaxed">
            Cherry blossoms bloom for only two weeks each year—a gentle reminder that flourishing requires rest. This
            carefully curated itinerary honors that sacred timing, inviting you to witness nature's most spectacular
            transformation while experiencing your own renewal.
          </p>
        </div>
      </section>

      {/* Experiences with Photos */}
      <section
        className="py-20 px-4"
        style={{ background: "linear-gradient(135deg, #ffe4f1 0%, rgba(255,228,241,0.5) 100%)" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-16"
            style={{
              background: "linear-gradient(135deg, #ff69b4 0%, #ff1493 50%, #ffb3d9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Curated Spring Experiences
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&q=80",
                icon: Sparkles,
                title: "Cherry Blossom Viewing",
                description:
                  "Experience peak sakura season at historic temples, tranquil parks, and private ryokan gardens. Witness Japan's most celebrated natural spectacle in full bloom.",
              },
              {
                image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80",
                icon: Droplets,
                title: "Daily Onsen Rituals",
                description:
                  "Traditional Japanese hot springs with private bathing options. Healing volcanic mineral waters restore your body and spirit in serene mountain settings.",
              },
              {
                image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&q=80",
                icon: Trees,
                title: "Forest Bathing",
                description:
                  "Guided shinrin-yoku walks through ancient cedar groves. Breathwork and meditation beneath cherry blossom canopies connect you to nature's healing rhythm.",
              },
              {
                image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80",
                icon: Coffee,
                title: "Tea Ceremonies",
                description:
                  "Learn traditional Japanese tea preparation from local masters. Mindfulness through ritual, seasonal wagashi sweets, and moments of pure presence.",
              },
              {
                image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
                icon: UtensilsCrossed,
                title: "Kaiseki Cuisine",
                description:
                  "Multi-course seasonal Japanese dining that honors spring's bounty. Each plate is edible art, featuring fresh, local ingredients prepared with centuries of tradition.",
              },
              {
                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
                icon: Heart,
                title: "Rest as Resistance",
                description:
                  "Facilitated workshops on rest as liberation. Integration circles, embodied practices, and permission to reclaim joy as your birthright.",
              },
            ].map((experience, i) => (
              <Card
                key={i}
                className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-60">
                  <Image
                    src={experience.image || "/placeholder.svg"}
                    alt={experience.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <experience.icon className="w-6 h-6 text-pink-600" />
                    <h3 className="text-xl font-bold text-pink-600">{experience.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{experience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-4xl font-extrabold text-center mb-6"
            style={{
              background: "linear-gradient(135deg, #ff69b4 0%, #ff1493 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Investing in Your Rest
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Choose between our 7-day Kamakura & Tokyo experience or extend to 10 days with luxury onsen immersion.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 to-rose-400" />
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-pink-600 mb-2">Whispering Pines</h3>
                <p className="text-gray-600 mb-4">7-Day Experience</p>
                <div
                  className="text-4xl font-black mb-6"
                  style={{
                    background: "linear-gradient(135deg, #ff69b4 0%, #ff1493 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  $11,500
                </div>
                <ul className="text-left space-y-2 mb-6 text-sm">
                  {[
                    "7 days / 6 nights in Kamakura",
                    "All meals & cultural activities",
                    "Daily onsen access",
                    "Group circles & workshops",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-pink-500" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
                    Select 7-Day
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-500 shadow-xl relative overflow-hidden scale-105">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 to-rose-400" />
              <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-pink-600 mb-2">Golden Crane</h3>
                <p className="text-gray-600 mb-4">10-Day Extended</p>
                <div
                  className="text-4xl font-black mb-6"
                  style={{
                    background: "linear-gradient(135deg, #ff69b4 0%, #ff1493 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  $13,000
                </div>
                <ul className="text-left space-y-2 mb-6 text-sm">
                  {[
                    "Everything in 7-Day Experience",
                    "PLUS 3 additional nights",
                    "Premium onsen ryokan stay",
                    "Enhanced closing ceremony",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-pink-500" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
                    Select 10-Day
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 to-rose-400" />
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-pink-600 mb-2">Eternal Blossom</h3>
                <p className="text-gray-600 mb-4">10-Day Luxury</p>
                <div
                  className="text-4xl font-black mb-6"
                  style={{
                    background: "linear-gradient(135deg, #ff69b4 0%, #ff1493 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  $15,500
                </div>
                <ul className="text-left space-y-2 mb-6 text-sm">
                  {[
                    "Everything in Golden Crane",
                    "Best-available rooms",
                    "Professional kimono photoshoot",
                    "Private life design session",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-pink-500" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
                    Select Luxury
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Bloom Into Rest?</h2>
          <p className="text-xl mb-8 opacity-90">Limited to 10 participants. Early Bird pricing ends December 31.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold">
                Reserve Your Spot
              </Button>
            </Link>
            <Link href="/retreats-advocacy/luxury-wellness">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-bold bg-transparent"
              >
                View All Retreats
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-pink-400 font-bold mb-4">Cherry Blossom Edition 2026</h4>
            <p>April 8-18, 2026</p>
            <p>Kamakura · Tokyo · Premium Ryokan</p>
            <p className="text-sm mt-4 italic opacity-80">
              With gratitude to Tricia Hersey, the Nap Bishop, whose work on rest as resistance inspires this movement.
            </p>
          </div>
          <div>
            <h4 className="text-pink-400 font-bold mb-4">Contact</h4>
            <Link href="/contact" className="block hover:text-pink-400 transition-colors">
              Inquire About This Retreat
            </Link>
            <Link
              href="/retreats-advocacy/luxury-wellness"
              className="block hover:text-pink-400 transition-colors mt-2"
            >
              View All Retreats
            </Link>
          </div>
          <div>
            <h4 className="text-pink-400 font-bold mb-4">Quick Links</h4>
            <Link href="/retreats-advocacy" className="block hover:text-pink-400 transition-colors">
              All Retreats
            </Link>
            <Link
              href="/retreats-advocacy/luxury-wellness/rar-brand"
              className="block hover:text-pink-400 transition-colors mt-2"
            >
              Rest as Resistance
            </Link>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-pink-400/20 text-center text-sm">
          <p>© 2026 Dr. Dédé Tetsubayashi · All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}
