import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Bath, Landmark, Utensils, Bell, Heart, ArrowLeft } from "lucide-react"

export default function PastNewYears2025Page() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <link rel="canonical" href="https://dr-dede.com/retreats-advocacy/past-new-years-2025" />

      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16"
        style={{
          background: "linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(139,92,246,0.1) 100%)",
        }}
      >
        <span
          className="inline-block px-6 py-2 rounded-full text-sm font-semibold tracking-wider uppercase text-white mb-6"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
          }}
        >
          Past Retreat Archive
        </span>
        <h1
          className="text-4xl md:text-6xl font-light mb-4"
          style={{
            background: "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 50%, #a78bfa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          New Year&apos;s Rest
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-2 max-w-2xl">
          Ringing in the new year with intention and restoration
        </p>
        <p className="text-gray-500 font-medium mb-8">December 2025 | Nagano & Tokyo</p>
        <Link href="/retreats-advocacy/past-retreats">
          <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Past Retreats
          </Button>
        </Link>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2
          className="text-3xl md:text-4xl font-light text-center mb-8"
          style={{
            background: "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          A New Beginning
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
          Our New Year&apos;s Rest retreat offered participants a transformative way to close out the year and welcome
          the new one. Traditional Japanese New Year celebrations, combined with mountain onsen retreats and Tokyo city
          exploration, created a perfect balance of reflection and renewal.
        </p>
      </section>

      {/* Highlights Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-white">
        <h2
          className="text-3xl font-light text-center mb-12"
          style={{
            background: "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Retreat Highlights
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Sparkles,
              title: "New Year Celebrations",
              description: "Traditional hatsumode visits to Shinto shrines at midnight",
            },
            {
              icon: Bath,
              title: "Mountain Onsens",
              description: "Healing hot springs in the Japanese Alps with snow views",
            },
            {
              icon: Landmark,
              title: "Temple Ceremonies",
              description: "Joya no Kane bell ringing to release the old year",
            },
            {
              icon: Utensils,
              title: "Osechi Cuisine",
              description: "Traditional New Year's feast with symbolic dishes",
            },
            {
              icon: Bell,
              title: "Intention Setting",
              description: "Guided workshops for setting purposeful new year intentions",
            },
            {
              icon: Heart,
              title: "Sisterhood",
              description: "Celebrating new beginnings with a supportive community",
            },
          ].map((item, i) => (
            <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(139,92,246,0.1) 100%)",
                  }}
                >
                  <item.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 50%, #a78bfa 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-2xl md:text-3xl font-light italic mb-6">
            &quot;Starting the new year in Japan, surrounded by women who understand the need for intentional rest,
            changed how I approach everything. I returned home renewed and ready.&quot;
          </p>
          <p className="text-lg opacity-90">— New Year&apos;s Rest 2025 Participant</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-3xl font-light mb-6"
            style={{
              background: "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 50%, #a78bfa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Experience Your Own Journey
          </h2>
          <p className="text-gray-600 mb-8">Join us for our upcoming 2026 retreats and create your own memories.</p>
          <Link href="/retreats-advocacy/luxury-wellness">
            <Button
              className="px-8 py-3 text-white font-semibold"
              style={{
                background: "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 50%, #a78bfa 100%)",
              }}
            >
              View 2026 Retreats
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
