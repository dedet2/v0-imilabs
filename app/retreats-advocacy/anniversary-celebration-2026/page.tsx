import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Utensils, Camera, Check } from "lucide-react"

export default function AnniversaryCelebration2026Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Gold/Purple/Lavender theme matching HTML */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=1600&width=2400&query=elegant+older+Black+couple+celebrating+anniversary+Japanese+garden+romantic)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(212,175,55,0.85) 0%, rgba(147,51,234,0.75) 50%, rgba(233,213,255,0.8) 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-block px-6 py-3 rounded-full bg-white/30 border-2 border-white/50 text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
            Private Luxury Retreat
          </div>
          <h1
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
            style={{ textShadow: "0 4px 20px rgba(212,175,55,0.5)" }}
          >
            45 Years of Love
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-4 opacity-95">Anniversary Celebration in Japan</p>
          <p className="text-xl mb-4 opacity-95">April 5-25, 2026 · Tokyo · Kyoto · Hakone · Kamakura</p>
          <p className="text-lg max-w-3xl mx-auto mb-10 opacity-95 leading-relaxed">
            Celebrate 45 years of love with a bespoke three-week journey through Japan's most romantic destinations.
            Private experiences, Michelin dining, and renewal of vows ceremony curated exclusively for you.
          </p>
          <a href="mailto:info@dr-dede.com?subject=45th%20Anniversary%20Celebration%20Inquiry">
            <Button
              className="px-8 py-4 text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              style={{ background: "linear-gradient(to right, #9333ea 0%, #0891b2 100%)" }}
            >
              Schedule Consultation
            </Button>
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-purple-900 leading-relaxed font-light">
            Forty-five years of partnership deserves a celebration as remarkable as your love story. This exclusive
            three-week journey honors your legacy with experiences designed for two hearts that have grown together
            across decades.
          </p>
        </div>
      </section>

      <section
        className="py-20 px-4"
        style={{ background: "linear-gradient(135deg, #e9d5ff 0%, rgba(233,213,255,0.3) 100%)" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-16"
            style={{
              background: "linear-gradient(135deg, #d4af37 0%, #9333ea 50%, #fbbf24 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Exclusive Romance Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Renewal of Vows */}
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-0 rounded-2xl bg-white">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(/placeholder.svg?height=600&width=600&query=older+Black+couple+renewal+of+vows+ceremony+Kyoto+temple+romantic+elegant)",
                }}
              />
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #d4af37 0%, #9333ea 100%)" }}
                  >
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-700">Renewal of Vows</h3>
                </div>
                <p className="text-purple-900 leading-relaxed">
                  Private ceremony at historic Kyoto temple with traditional elements and professional photography.
                </p>
              </CardContent>
            </Card>

            {/* Michelin Dining */}
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-0 rounded-2xl bg-white">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(/placeholder.svg?height=600&width=600&query=sophisticated+older+Black+couple+Michelin+star+restaurant+kaiseki+dinner+Tokyo)",
                }}
              />
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #d4af37 0%, #9333ea 100%)" }}
                  >
                    <Utensils className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-700">Michelin Dining</h3>
                </div>
                <p className="text-purple-900 leading-relaxed">
                  Private anniversary dinner at Tokyo's finest Michelin-starred restaurant plus premium kaiseki
                  throughout.
                </p>
              </CardContent>
            </Card>

            {/* Professional Photography */}
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-0 rounded-2xl bg-white">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(/placeholder.svg?height=600&width=600&query=older+Black+couple+professional+photo+shoot+cherry+blossoms+Japan+elegant)",
                }}
              />
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #d4af37 0%, #9333ea 100%)" }}
                  >
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-700">Professional Photography</h3>
                </div>
                <p className="text-purple-900 leading-relaxed">
                  Two full days with photographer capturing your journey at iconic locations throughout Japan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-16"
            style={{
              background: "linear-gradient(135deg, #d4af37 0%, #9333ea 50%, #fbbf24 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Investment
          </h2>
          <Card className="relative overflow-hidden shadow-xl rounded-3xl border-0 p-8 hover:border-amber-500 border-2 border-transparent transition-all bg-white">
            <div
              className="absolute top-0 left-0 right-0 h-1.5"
              style={{ background: "linear-gradient(to right, #d4af37, #9333ea, #fbbf24)" }}
            />
            <CardContent className="p-4 text-center">
              <h3 className="text-2xl font-semibold text-purple-700 mb-2">Complete Anniversary Package</h3>
              <p
                className="text-5xl font-black my-6"
                style={{
                  background: "linear-gradient(to right, #d4af37 0%, #9333ea 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                $45,000
              </p>
              <p className="text-indigo-500 text-lg mb-8">For 2 people · 21 days / 20 nights</p>
              <ul className="text-left space-y-3 mb-8 text-gray-700">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-amber-500" /> 20 nights luxury accommodations
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-amber-500" /> All meals at premium restaurants
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-amber-500" /> Private car & driver throughout
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-amber-500" /> Michelin-star anniversary dinner
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-amber-500" /> Renewal of vows ceremony
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-amber-500" /> Professional photographer (2 days)
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-amber-500" /> 24/7 concierge services
                </li>
              </ul>
              <a href="mailto:info@dr-dede.com?subject=45th%20Anniversary%20Celebration%20Inquiry" className="block">
                <Button
                  className="w-full py-4 text-lg font-bold rounded-lg"
                  style={{ background: "linear-gradient(to right, #9333ea 0%, #0891b2 100%)" }}
                >
                  Schedule Consultation
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        className="py-20 px-4 text-center text-white"
        style={{ background: "linear-gradient(135deg, #d4af37 0%, #9333ea 50%, #e9d5ff 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Begin Planning Your Celebration</h2>
          <p className="text-xl mb-4">
            Email:{" "}
            <a href="mailto:info@dr-dede.com" className="underline">
              info@dr-dede.com
            </a>
          </p>
          <Link href="/retreats-advocacy">
            <Button
              variant="outline"
              className="mt-4 border-2 border-white text-white hover:bg-white/10 bg-transparent"
            >
              View All Retreats
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
