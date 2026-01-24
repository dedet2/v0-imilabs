import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Snowflake, MapPin, Calendar, DollarSign, Users, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Winter Solstice 2027 Extended Journey - 16 Days in Japan | Dr. Dédé Tetsubayashi",
  description:
    "Experience the ultimate 16-day winter journey through Japan, December 14-29, 2027. From winter solstice ceremonies to Japanese New Year traditions.",
  alternates: {
    canonical: "https://dr-dede.com/retreats-advocacy/winter-solstice-2027",
  },
}

export default function WinterSolstice2027() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-[url('/snow-covered-japanese-temple-winter-mountains.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full border border-cyan-400/30 mb-6">
            <span className="text-cyan-100 font-medium">16-Day Extended Journey • December 14-29, 2027</span>
          </div>
          <h1 className="text-5xl md:text-6xl text-white font-light mb-6">
            Winter Solstice 2027
            <br />
            <span className="text-4xl md:text-5xl">Extended Journey</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Experience both winter solstice ceremonies and Japanese New Year traditions in this extraordinary 16-day
            journey through snow-covered Japan.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <div className="flex items-center gap-2 text-white/90">
              <Calendar className="w-5 h-5" />
              <span>December 14-29, 2027</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-5 h-5" />
              <span>Tokyo, Snow Country, Kyoto</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <DollarSign className="w-5 h-5" />
              <span>From $27,500</span>
            </div>
          </div>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-cyan-50">
              Reserve Your Seat
            </Button>
          </Link>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-20 bg-gradient-to-b from-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-12 text-gray-900">Extended Journey Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Snowflake className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-2xl font-medium mb-3 text-gray-900">Winter Solstice Ceremony</h3>
              <p className="text-gray-600">
                Experience traditional tōji winter solstice rituals and hot spring purification ceremonies.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Sparkles className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-medium mb-3 text-gray-900">New Year's Eve</h3>
              <p className="text-gray-600">
                Ring in 2028 with Joya no Kane bell ceremony and traditional osechi ryori feast.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-medium mb-3 text-gray-900">Hatsumode</h3>
              <p className="text-gray-600">
                First shrine visit of the new year with traditional prayers and blessings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-light mb-12 text-gray-900">Investment</h2>
          <div className="bg-gradient-to-br from-cyan-50 to-purple-50 p-12 rounded-2xl shadow-lg">
            <p className="text-6xl font-light text-gray-900 mb-4">$27,500</p>
            <p className="text-xl text-gray-600 mb-2">16-Day Extended Journey</p>
            <p className="text-gray-500 mb-8">Single occupancy supplement: +$3,500</p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white">
                Submit Inquiry
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-light text-white mb-6">Begin Your Extended Winter Journey</h2>
          <p className="text-xl text-white/90 mb-8">
            Limited to 12 participants. Early registration recommended for this extraordinary 16-day experience.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-cyan-50">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
