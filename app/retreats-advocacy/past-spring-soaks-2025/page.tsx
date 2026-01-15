import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Flower2, Bath, TreeDeciduous, Utensils, Camera, Heart, ArrowLeft } from "lucide-react"

export default function PastSpringSoaks2025Page() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <link rel="canonical" href="https://dr-dede.com/retreats-advocacy/past-spring-soaks-2025" />

      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16"
        style={{
          background: "linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(240,147,251,0.1) 100%)",
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
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Late Spring Soaks
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-2 max-w-2xl">
          Cherry blossoms and hot springs in the heart of Japan
        </p>
        <p className="text-gray-500 font-medium mb-8">May 2025 | Kamakura & Hakone</p>
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
            background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          A Season of Renewal
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
          Our Late Spring Soaks retreat captured the magic of Japan&apos;s late sakura season, with cherry blossom
          petals gently falling into steaming outdoor onsens. Participants experienced the profound beauty of hanami
          (flower viewing) combined with deep relaxation in Hakone&apos;s legendary hot spring resorts.
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
              icon: Flower2,
              title: "Cherry Blossoms",
              description: "Private hanami picnics under late-blooming sakura trees",
            },
            {
              icon: Bath,
              title: "Hakone Onsens",
              description: "Natural hot springs with views of Mount Fuji",
            },
            {
              icon: TreeDeciduous,
              title: "Kamakura Temples",
              description: "Meditative walks through ancient Buddhist temples and gardens",
            },
            {
              icon: Utensils,
              title: "Spring Cuisine",
              description: "Seasonal kaiseki featuring fresh bamboo shoots and sakura mochi",
            },
            {
              icon: Camera,
              title: "Cultural Immersion",
              description: "Tea ceremony and ikebana workshops with local artisans",
            },
            {
              icon: Heart,
              title: "Sisterhood",
              description: "Deep bonds formed over shared experiences and reflection",
            },
          ].map((item, i) => (
            <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(240,147,251,0.1) 100%)",
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
        style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-2xl md:text-3xl font-light italic mb-6">
            &quot;Watching cherry blossom petals float down while soaking in an onsen overlooking Mount Fuji—that moment
            will stay with me forever.&quot;
          </p>
          <p className="text-lg opacity-90">— Spring Soaks 2025 Participant</p>
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
