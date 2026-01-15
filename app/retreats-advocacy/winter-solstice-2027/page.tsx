import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Snowflake, Sun, Users, Waves, ArrowLeft, Star, Calendar } from "lucide-react"

export default function WinterSolstice2027Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Winter Blue/Cyan Theme */}
      <section
        className="relative min-h-[95vh] flex items-center justify-center pt-20"
        style={{
          background:
            "linear-gradient(135deg, rgba(59,130,246,0.85) 0%, rgba(6,182,212,0.8) 50%, rgba(147,197,253,0.85) 100%)",
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
            REST AS RESISTANCE · EXTENDED JOURNEY
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Winter Solstice 2027
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-4 tracking-wide">Snow Country Extended Retreat</p>
          <p className="text-xl mb-4 opacity-95 max-w-2xl mx-auto leading-relaxed">
            16 transformative days embracing winter's stillness. Experience snow-covered hot springs, traditional New
            Year celebrations, and the deepest rest of the season.
          </p>
          <p className="text-lg font-medium mb-4">December 14–29, 2027 | Niigata · Nagano · Kyoto</p>
          <p className="text-sm mb-8 opacity-80">
            Limited to 10–12 participants · Includes Japanese New Year celebration
          </p>
          <Link href="https://forms.gle/your-application-form">
            <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 text-lg font-bold rounded-lg shadow-lg hover:opacity-90 transition-all uppercase tracking-wide">
              Join Waitlist - From $27,500
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Extended Journey */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl font-extrabold mb-6"
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The Extended Winter Journey
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            For those who want to fully surrender to winter's medicine, our 16-day extended journey takes you through
            the winter solstice AND into Japanese New Year—one of the most sacred times in Japan.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Experience <em>Ōmisoka</em> (New Year's Eve) with temple bells ringing 108 times, <em>Hatsumode</em> (first
            shrine visit), and traditional <em>osechi</em> cuisine. This is deep immersion into Japanese winter culture.
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
            What Makes This Journey Special
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            Everything from the 9-day journey, plus extended time in snow country and authentic Japanese New Year
            traditions.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Snowflake,
                title: "Extended Snow Country",
                description:
                  "Five additional nights in Japan's legendary snow country, with daily hot spring rituals and forest walks.",
              },
              {
                icon: Sun,
                title: "Solstice + New Year",
                description:
                  "Two profound celebrations: Winter solstice ceremony AND traditional Japanese New Year traditions.",
              },
              {
                icon: Calendar,
                title: "Temple Bell Ceremony",
                description:
                  "Experience Joya no Kane—108 temple bells ringing at midnight to cleanse the 108 worldly desires.",
              },
              {
                icon: Star,
                title: "Hatsumode",
                description:
                  "Join millions in the first shrine visit of the new year, setting intentions in sacred space.",
              },
              {
                icon: Users,
                title: "Deeper Community",
                description:
                  "Extended time builds deeper bonds. Return home with lifelong connections and transformation.",
              },
              {
                icon: Waves,
                title: "Premium Ryokans",
                description:
                  "Stay in Japan's finest traditional inns with private onsen, kaiseki cuisine, and impeccable service.",
              },
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-blue-600">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
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

          <Card className="border-2 border-blue-500 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400" />
            <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              NEW YEAR EDITION
            </div>
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">16-Day Extended Journey</h3>
              <p className="text-gray-600 mb-4">December 14–29, 2027 · Includes New Year</p>
              <div
                className="text-5xl font-black mb-2"
                style={{
                  background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                $27,500
              </div>
              <p className="text-gray-500 mb-6">Shared occupancy · Single room +$3,500</p>

              <ul className="text-left space-y-3 mb-8 max-w-md mx-auto">
                {[
                  "15 nights premium ryokan",
                  "All gourmet meals including osechi",
                  "Private & shared onsen access",
                  "Extended excursions & activities",
                  "Daily wellness sessions",
                  "Winter solstice ceremony",
                  "New Year temple bell ceremony",
                  "Hatsumode shrine visit",
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
                    <strong>Pay in Full:</strong> Save $1,000 (Total: $26,500)
                  </li>
                  <li>
                    <strong>Two-Payment Plan:</strong> $14,000 deposit + $13,500 final payment
                  </li>
                  <li>
                    <strong>Three-Payment Plan:</strong> $10,000 deposit + two payments of $8,750
                  </li>
                </ul>
              </div>

              <Link href="https://forms.gle/your-application-form">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-4 text-lg font-bold">
                  Join the 2027 Waitlist
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">The Ultimate Winter Journey</h2>
          <p className="text-xl mb-4 opacity-90">Limited to 10-12 participants. Waitlist now open for 2027.</p>
          <p className="mb-8 opacity-80">Experience both winter solstice AND Japanese New Year traditions</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://forms.gle/your-application-form">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold">
                Join Waitlist
              </Button>
            </Link>
            <Link href="/retreats-advocacy/winter-solstice-2026">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-bold bg-transparent"
              >
                View 2026 (9-Day)
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
