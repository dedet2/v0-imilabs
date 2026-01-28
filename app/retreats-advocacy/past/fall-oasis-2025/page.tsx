import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Bath, Landmark, Utensils, Camera, Heart, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fall Restorative Oasis 2025 | Past Retreat Archive",
  description: "Autumn colors and ancient temples in Kyoto - November 2025 in Kyoto & Nara.",
  alternates: {
    canonical: "https://dr-dede.com/retreats-advocacy/past/fall-oasis-2025",
  },
}

export default function PastFallOasis2025Page() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(234,88,12,0.85) 0%, rgba(245,158,11,0.85) 100%), url('https://images.unsplash.com/photo-1528164344705-47542687000d?w=1600&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span className="inline-block px-6 py-2 rounded-full text-sm font-semibold tracking-wider uppercase text-white mb-6 bg-white/20 border border-white/30 backdrop-blur-sm">
          Past Retreat Archive
        </span>
        <h1 className="text-4xl md:text-6xl font-light mb-4 text-white">
          Fall Restorative Oasis
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-2 max-w-2xl">
          Autumn colors and ancient temples in Kyoto
        </p>
        <p className="text-white/80 font-medium mb-8">November 2025 | Kyoto & Nara</p>
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
            background: "linear-gradient(135deg, #ea580c 0%, #f59e0b 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          A Season of Reflection
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
          Our Fall Restorative Oasis retreat immersed participants in Japan&apos;s spectacular autumn foliage season.
          The fiery reds and golden yellows of momiji (maple viewing) provided the perfect backdrop for deep reflection,
          cultural exploration, and restoration of mind, body, and spirit.
        </p>
      </section>

      {/* Highlights Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-white">
        <h2
          className="text-3xl font-light text-center mb-12"
          style={{
            background: "linear-gradient(135deg, #ea580c 0%, #f59e0b 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Retreat Highlights
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Leaf,
              title: "Autumn Foliage",
              description: "Private viewings of Kyoto's most stunning momiji spots",
            },
            {
              icon: Bath,
              title: "Forest Onsens",
              description: "Hot springs surrounded by crimson and gold maple trees",
            },
            {
              icon: Landmark,
              title: "Ancient Temples",
              description: "Guided meditation at Kyoto's most sacred Buddhist temples",
            },
            {
              icon: Utensils,
              title: "Harvest Cuisine",
              description: "Seasonal kaiseki featuring autumn mushrooms and chestnuts",
            },
            {
              icon: Camera,
              title: "Nara Deer Park",
              description: "Peaceful encounters with the sacred deer among fall colors",
            },
            {
              icon: Heart,
              title: "Community",
              description: "Evening circles and healing conversations with fellow travelers",
            },
          ].map((item, i) => (
            <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(234,88,12,0.1) 0%, rgba(245,158,11,0.1) 100%)",
                  }}
                >
                  <item.icon className="w-8 h-8 text-orange-600" />
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
        style={{ background: "linear-gradient(135deg, #ea580c 0%, #f59e0b 50%, #fbbf24 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-2xl md:text-3xl font-light italic mb-6">
            &quot;Walking through Kyoto&apos;s temples surrounded by autumn colors, I finally understood what it means
            to truly rest. This wasn&apos;t just a vacation—it was a transformation.&quot;
          </p>
          <p className="text-lg opacity-90">— Fall Oasis 2025 Participant</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-3xl font-light mb-6"
            style={{
              background: "linear-gradient(135deg, #ea580c 0%, #f59e0b 50%, #fbbf24 100%)",
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
                background: "linear-gradient(135deg, #ea580c 0%, #f59e0b 50%, #fbbf24 100%)",
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
