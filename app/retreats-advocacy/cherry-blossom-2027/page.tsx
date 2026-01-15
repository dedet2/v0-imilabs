import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Cherry, Sparkles, Users } from "lucide-react"

export default function CherryBlossom2027Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Spring Pink Theme */}
      <section
        className="relative min-h-[95vh] flex items-center justify-center pt-20"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,179,217,0.9) 0%, rgba(255,105,180,0.85) 50%, rgba(255,182,193,0.9) 100%)",
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-block px-4 py-2 bg-white/25 border-2 border-white/40 rounded-full text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
            Spring 2027 - Early Bird Available
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">Bloom Into Rest</h1>
          <p className="text-2xl md:text-3xl font-light mb-4 tracking-wide">Cherry Blossom 2027</p>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto leading-relaxed">
            Our second annual spring retreat with enhanced programming based on 2026 participant feedback. Limited to 12
            participants for an intimate, transformative experience.
          </p>
          <p className="text-lg font-medium mb-8">April 6-16, 2027 | Kamakura & Hakone</p>
          <link rel="canonical" href="https://dr-dede.com/retreats-advocacy/cherry-blossom-2027" />
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-6 text-lg font-bold rounded-lg shadow-lg hover:opacity-90 transition-all uppercase tracking-wide">
              Reserve Early Bird - From $11,500
            </Button>
          </Link>
        </div>
      </section>

      {/* What's New */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-6"
            style={{
              background: "linear-gradient(135deg, #ff69b4 0%, #ff1493 50%, #ffb3d9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Enhanced for 2027
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            Based on feedback from our inaugural 2026 retreat, we've refined and expanded the experience.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Cherry,
                title: "Extended Hanami",
                description:
                  "More time for cherry blossom viewing with additional private garden access and photography sessions.",
              },
              {
                icon: Sparkles,
                title: "Enhanced Wellness",
                description:
                  "Additional spa treatments, personalized wellness consultations, and integration coaching sessions.",
              },
              {
                icon: Users,
                title: "Deeper Community",
                description:
                  "Alumni reunion opportunity and enhanced sisterhood circles with longer facilitated sessions.",
              },
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-pink-600">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Early Bird Pricing */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-lg mx-auto">
          <h2
            className="text-4xl font-extrabold text-center mb-16"
            style={{
              background: "linear-gradient(135deg, #ff69b4 0%, #ff1493 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Early Bird Pricing
          </h2>

          <Card className="border-2 border-pink-500 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 to-rose-400" />
            <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              SAVE $1,000
            </div>
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-pink-600 mb-2">10-Day Journey</h3>
              <p className="text-gray-600 mb-4">Book by December 31, 2026</p>
              <div
                className="text-5xl font-black mb-2"
                style={{
                  background: "linear-gradient(135deg, #ff69b4 0%, #ff1493 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                $11,500
              </div>
              <p className="text-gray-500 line-through mb-6">Regular price: $12,500</p>
              <ul className="text-left space-y-3 mb-8">
                {[
                  "10 nights luxury ryokan",
                  "All meals included",
                  "Private onsen access",
                  "Enhanced wellness programming",
                  "Alumni reunion events",
                  "Priority booking for 2028",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3">
                  Reserve Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Secure Your 2027 Spot</h2>
          <p className="text-xl mb-8 opacity-90">
            Limited to 12 participants. Early bird pricing ends December 31, 2026.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold">
              Apply Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
