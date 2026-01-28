import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Snowflake, Bath, Mountain, Utensils, Camera, Heart, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Last Winter Snow 2025 | Past Retreat Archive",
  description: "A journey through Japan's legendary snow country - March 2025 in Niigata & Nagano.",
  alternates: {
    canonical: "https://dr-dede.com/retreats-advocacy/past/winter-snow-2025",
  },
}

export default function PastWinterSnow2025Page() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(102,126,234,0.85) 0%, rgba(6,182,212,0.85) 100%), url('/japan-winter.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span className="inline-block px-6 py-2 rounded-full text-sm font-semibold tracking-wider uppercase text-white mb-6 bg-white/20 border border-white/30 backdrop-blur-sm">
          Past Retreat Archive
        </span>
        <h1 className="text-4xl md:text-6xl font-light mb-4 text-white">
          Last Winter Snow
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-2 max-w-2xl">
          A journey through Japan&apos;s legendary snow country
        </p>
        <p className="text-white/80 font-medium mb-8">March 2025 | Niigata & Nagano</p>
        <Link href="/retreats-advocacy">
          <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Retreats
          </Button>
        </Link>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2
          className="text-3xl md:text-4xl font-light text-center mb-8"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Journey Through Snow Country
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
          Our Last Winter Snow retreat took participants deep into Japan&apos;s legendary Yukiguni (snow country), where
          towering snow walls, steaming outdoor onsens, and cozy mountain ryokans created the perfect setting for deep
          rest and renewal. This transformative journey celebrated the final weeks of winter before spring&apos;s
          arrival.
        </p>
      </section>

      {/* Highlights Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-white">
        <h2
          className="text-3xl font-light text-center mb-12"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Retreat Highlights
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Snowflake,
              title: "Snow Onsens",
              description: "Soaking in natural hot springs surrounded by pristine snow landscapes",
            },
            {
              icon: Bath,
              title: "Traditional Ryokans",
              description: "Staying in authentic Japanese inns with tatami rooms and kaiseki cuisine",
            },
            {
              icon: Mountain,
              title: "Snowshoe Meditation",
              description: "Peaceful walks through snow-covered forests with mindfulness practices",
            },
            {
              icon: Utensils,
              title: "Winter Cuisine",
              description: "Seasonal hot pot dinners and warming sake tastings",
            },
            {
              icon: Camera,
              title: "Snow Monkeys",
              description: "Visiting the famous Jigokudani snow monkeys in their natural habitat",
            },
            {
              icon: Heart,
              title: "Community",
              description: "Deep connections formed around kotatsu tables and fireside conversations",
            },
          ].map((item, i) => (
            <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(6,182,212,0.1) 100%)",
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
      <section className="py-16" style={{ background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-2xl md:text-3xl font-light italic mb-6">
            &quot;Watching the snow fall while soaking in an outdoor onsen was one of the most peaceful moments of my
            life. This retreat reminded me that rest is not a luxury—it&apos;s essential.&quot;
          </p>
          <p className="text-lg opacity-90">— Winter Snow 2025 Participant</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-3xl font-light mb-6"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
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
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
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
