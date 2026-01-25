import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Utensils, Camera, Check } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "45th Anniversary Celebration | Private Luxury Retreat",
  description: "Celebrate 45 years of love with a bespoke three-week journey through Japan's most romantic destinations.",
  alternates: {
    canonical: "https://dr-dede.com/retreats-advocacy/anniversary-celebration-2026",
  },
}

export default function AnniversaryCelebration2026Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Gold/Purple/Lavender theme */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/love-celebration-japan.jpg')",
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
          <p className="text-xl mb-4 opacity-95">April 5-25, 2026 | Tokyo, Kyoto, Hakone, Kamakura</p>
          <p className="text-lg max-w-3xl mx-auto mb-10 opacity-95 leading-relaxed">
            Celebrate 45 years of love with a bespoke three-week journey through Japan's most romantic destinations.
            Private experiences, Michelin dining, and renewal of vows ceremony curated exclusively for you.
          </p>
          <Link href="/contact">
            <Button
              className="px-8 py-4 text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              style={{ background: "linear-gradient(to right, #9333ea 0%, #0891b2 100%)" }}
            >
              Schedule Consultation
            </Button>
          </Link>
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
            {[
              {
                icon: Heart,
                title: "Renewal of Vows",
                description: "Private ceremony at historic Kyoto temple with traditional elements and professional photography.",
                image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&q=80",
              },
              {
                icon: Utensils,
                title: "Michelin Dining",
                description: "Private anniversary dinner at Tokyo's finest Michelin-starred restaurant plus premium kaiseki throughout.",
                image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
              },
              {
                icon: Camera,
                title: "Professional Photography",
                description: "Two full days with photographer capturing your journey at iconic locations throughout Japan.",
                image: "/02-ekYLf16--NMAgcW86O.jpg",
              },
            ].map((item, i) => (
              <Card key={i} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-0 rounded-2xl bg-white">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #d4af37 0%, #9333ea 100%)" }}
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-purple-700">{item.title}</h3>
                  </div>
                  <p className="text-purple-900 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
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
              <p className="text-indigo-500 text-lg mb-8">For 2 people | 21 days / 20 nights</p>
              <ul className="text-left space-y-3 mb-8 text-gray-700">
                {[
                  "20 nights luxury accommodations",
                  "All meals at premium restaurants",
                  "Private car & driver throughout",
                  "Michelin-star anniversary dinner",
                  "Renewal of vows ceremony",
                  "Professional photographer (2 days)",
                  "24/7 concierge services",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-amber-500" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button
                  className="w-full py-4 text-lg font-bold rounded-lg"
                  style={{ background: "linear-gradient(to right, #9333ea 0%, #0891b2 100%)" }}
                >
                  Schedule Consultation
                </Button>
              </Link>
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
          <Link href="/contact">
            <Button className="px-8 py-4 text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white text-purple-600">
              Contact Us
            </Button>
          </Link>
          <div className="mt-4">
            <Link href="/retreats-advocacy">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 bg-transparent"
              >
                View All Retreats
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
