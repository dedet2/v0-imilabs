import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Droplets, Mountain, Heart, Users, Utensils } from "lucide-react"

export const metadata = {
  title: "Cherry Blossom Edition 2027 | Rest as Resistance",
  description: "Join us for Cherry Blossom retreat in Japan (April 6-16, 2027). Enhanced experiences for 2027 season.",
  openGraph: {
    title: "Cherry Blossom Edition 2027 | Rest as Resistance",
    description: "Join us for Cherry Blossom retreat in Japan (April 6-16, 2027). Enhanced experiences for 2027 season.",
    url: "https://dr-dede.com/retreats-advocacy/cherry-blossom-2027",
    siteName: "Dr. Dédé Tetsubayashi",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://dr-dede.com/retreats-advocacy/cherry-blossom-2027",
  },
}

export default function CherryBlossom2027Page() {
  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        :root {
          --magenta-bright: #ff1493;
          --fuchsia-deep: #c71585;
          --rose-soft: #fff0f5;
          --bloom-gold: #ffd700;
          --sakura-white: #fffaf0;
        }

        @keyframes shimmer {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        .hero-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 40%, rgba(255,215,0,0.15), transparent 50%),
                      radial-gradient(circle at 70% 60%, rgba(255,255,255,0.25), transparent 55%);
          animation: shimmer 30s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section
        className="hero-bg relative min-h-screen flex items-center justify-center text-white px-4 py-32 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(255,20,147,0.92) 0%, rgba(199,21,133,0.88) 50%, rgba(255,105,180,0.92) 100%),
                      url('https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1600') center/cover`,
        }}
      >
        <div className="relative z-10 max-w-5xl text-center">
          <span
            className="inline-block px-10 py-4 rounded-lg text-sm font-extrabold tracking-[4px] uppercase mb-12 backdrop-blur-xl"
            style={{
              background: "rgba(255,215,0,0.25)",
              border: "3px solid rgba(255,215,0,0.5)",
              boxShadow: "0 6px 25px rgba(255,215,0,0.3)",
              color: "var(--bloom-gold)",
            }}
          >
            EARLY BIRD OPEN · 2027 EDITION
          </span>
          <h1
            className="font-black mb-8 leading-none"
            style={{
              fontSize: "clamp(4rem, 13vw, 7.5rem)",
              textShadow: "0 8px 30px rgba(199,21,133,0.5), 0 4px 12px rgba(0,0,0,0.2)",
              letterSpacing: "-3px",
            }}
          >
            Cherry Blossom
          </h1>
          <div
            className="mb-8 font-extralight tracking-widest"
            style={{
              fontSize: "clamp(2rem, 7vw, 3.25rem)",
              textShadow: "0 3px 12px rgba(0,0,0,0.15)",
              letterSpacing: "3px",
            }}
          >
            2027 Edition
          </div>
          <p
            className="mb-14 leading-relaxed max-w-4xl mx-auto font-light"
            style={{
              fontSize: "1.4rem",
              textShadow: "0 2px 10px rgba(0,0,0,0.12)",
            }}
          >
            We return to Japan&apos;s sakura season with deeper experiences, enhanced amenities, and even more transformative programming. April 6–16, 2027.
          </p>
          <a
            href="#reserve"
            className="inline-block px-16 py-7 rounded-lg text-xl font-extrabold uppercase tracking-wider transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "linear-gradient(to right, #ff1493 0%, #c71585 100%)",
              boxShadow: "0 10px 30px rgba(255,20,147,0.4), 0 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            Reserve Your Spot Now
          </a>
          <div
            className="mt-8 text-sm tracking-wide"
            style={{ color: "var(--sakura-white)", opacity: 0.95 }}
          >
            Limited to 12 Guests
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Cherry Blossom 2027 represents the evolution of our signature spring retreat. Drawing on years of experience facilitating transformative wellness journeys in Japan, we&apos;ve designed extended temple stays, elevated dining experiences, private onsen time, and deepened our Rest as Resistance programming.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed font-medium">
            This is Japan&apos;s sakura season at its finest: ten days of pink-petaled splendor, ancient wellness wisdom, and community.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you choose our 7-day core experience or the full 10-day journey, you&apos;ll return home transformed, rested, and connected to a global sisterhood committed to liberation through rest.
          </p>
        </div>
      </section>

      {/* The Experience */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-6"
            style={{
              background: "linear-gradient(135deg, #ff1493 0%, #c71585 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            2027 Experiences
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            Ten days of pink-petaled splendor, ancient wellness wisdom, and community with women who understand that rest is not indulgence—it&apos;s revolution.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/02-ekYLf16--NMAgcW86O.jpg",
                icon: Sparkles,
                title: "Private Sakura Viewings",
                description: "Exclusive early-morning access to Kyoto's most iconic cherry blossom spots—before crowds arrive. Guided meditation under centuries-old trees.",
              },
              {
                image: "/hot-spring-mountain.jpg",
                icon: Droplets,
                title: "Extended Onsen Rituals",
                description: "Private onsen reservations daily. Hot springs surrounded by spring blossoms become your sanctuary for deep nervous system reset.",
              },
              {
                image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
                icon: Mountain,
                title: "Sacred Temple Immersions",
                description: "Extended temple stays with morning meditation sessions. Connect with resident monks and learn ancient practices of mindfulness and contemplation.",
              },
              {
                image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80",
                icon: Mountain,
                title: "Mt. Fuji Sakura Viewing",
                description: "Exclusive access to premium viewing spots where cherry blossoms frame Japan's sacred mountain. Photography guidance included.",
              },
              {
                image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80",
                icon: Heart,
                title: "Kimono Experience Day",
                description: "Professional kimono dressing and styled photography session. Walk through historic districts in traditional spring attire.",
              },
              {
                image: "https://images.unsplash.com/photo-1549096222-7d8d15c87d88?w=800&q=80",
                icon: Sparkles,
                title: "Bamboo Grove Meditation",
                description: "Guided meditation walks through Kyoto's iconic bamboo forests. Sound healing sessions amidst nature's cathedral.",
              },
              {
                image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
                icon: Heart,
                title: "Luxury Spa Treatments",
                description: "Enhanced spa program featuring Japanese healing modalities. Hot stone therapy, facial treatments, and body work tailored to your needs.",
              },
              {
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
                icon: Users,
                title: "Rest as Resistance Intensives",
                description: "Workshop series on liberation through rest. Integration practices, embodied movement, and facilitated circles.",
              },
              {
                image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
                icon: Utensils,
                title: "Elevated Kaiseki Dining",
                description: "Michelin-quality seasonal cuisine at every dinner. Spring ingredients at their peak, presented with artistry.",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-60">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="w-6 h-6" style={{ color: "var(--fuchsia-deep)" }} />
                    <h3 className="text-xl font-bold" style={{ color: "var(--fuchsia-deep)" }}>{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-extrabold text-center mb-16"
            style={{
              background: "linear-gradient(135deg, #ff1493 0%, #c71585 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Investment
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Whispering Pines - 7 Day */}
            <Card className="border-none shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 to-rose-400" />
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--fuchsia-deep)" }}>Whispering Pines</h3>
                <p className="text-gray-600 mb-4">7-Day Core Experience</p>
                <div
                  className="text-5xl font-black mb-2"
                  style={{
                    background: "linear-gradient(135deg, #ff1493 0%, #c71585 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  $13,500
                </div>
                <p className="text-gray-500 mb-6">Shared occupancy</p>

                <ul className="text-left space-y-3 mb-8">
                  {[
                    "7 days / 6 nights Kamakura base",
                    "Enhanced meal program (all included)",
                    "Daily onsen & spa access",
                    "All cultural excursions",
                    "Group integration circles",
                    "Complete transportation",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <Button className="w-full text-white py-4 text-lg font-bold" style={{ background: "linear-gradient(to right, #ff1493 0%, #c71585 100%)" }}>
                    Choose 7-Day
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Golden Crane - 10 Day (Recommended) */}
            <Card className="border-none shadow-xl relative overflow-hidden ring-2 ring-pink-500">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 to-rose-400" />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-rose-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                HIGHLY RECOMMENDED
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--fuchsia-deep)" }}>Golden Crane</h3>
                <p className="text-gray-600 mb-4">10-Day Complete Journey</p>
                <div
                  className="text-5xl font-black mb-2"
                  style={{
                    background: "linear-gradient(135deg, #ff1493 0%, #c71585 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  $15,000
                </div>
                <p className="text-gray-500 mb-6">Shared occupancy</p>

                <ul className="text-left space-y-3 mb-8">
                  {[
                    "All 7-Day features included",
                    "PLUS 3 additional nights",
                    "Premium ryokan upgrade",
                    "Private onsen experiences",
                    "Michelin kaiseki dinners",
                    "Extended integration time",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <Button className="w-full text-white py-4 text-lg font-bold" style={{ background: "linear-gradient(to right, #ff1493 0%, #c71585 100%)" }}>
                    Choose 10-Day
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Eternal Blossom - Ultra Luxury */}
            <Card className="border-none shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 to-rose-400" />
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--fuchsia-deep)" }}>Eternal Blossom</h3>
                <p className="text-gray-600 mb-4">10-Day Ultra Luxury</p>
                <div
                  className="text-5xl font-black mb-2"
                  style={{
                    background: "linear-gradient(135deg, #ff1493 0%, #c71585 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  $18,000
                </div>
                <p className="text-gray-500 mb-6">Shared occupancy</p>

                <ul className="text-left space-y-3 mb-8">
                  {[
                    "All Golden Crane benefits",
                    "Best-in-class accommodations",
                    "Private spa treatment series",
                    "Professional kimono photoshoot",
                    "90-min life design session",
                    "VIP concierge throughout",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <Button className="w-full text-white py-4 text-lg font-bold" style={{ background: "linear-gradient(to right, #ff1493 0%, #c71585 100%)" }}>
                    Choose Luxury
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Early Bird Special */}
          <div className="mt-12 text-center">
            <Card className="border-none shadow-lg max-w-xl mx-auto">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2" style={{ color: "var(--fuchsia-deep)" }}>Early Bird Special</h4>
                <p className="text-gray-600">
                  Book before June 1, 2026 and save $500 on any package. Payment plans available with 3-installment option.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reserve */}
      <section id="reserve" className="py-20 px-4 bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready for Cherry Blossom 2027?</h2>
          <p className="text-xl mb-8 opacity-90">Limited to 12 participants. Early bird pricing ends June 1, 2026.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:rar@dr-dede.com">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold">
                Begin Your Reservation
              </Button>
            </a>
            <Link href="/retreats-advocacy">
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
    </div>
  )
}
