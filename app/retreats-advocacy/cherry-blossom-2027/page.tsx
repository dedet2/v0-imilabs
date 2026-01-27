import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

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

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold" style={{ background: "linear-gradient(to right, #ff1493, #c71585)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Dr. Dédé Tetsubayashi
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/retreats-advocacy" className="text-gray-700 hover:text-pink-600">Retreats</Link>
              <Link href="/about" className="text-gray-700 hover:text-pink-600">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-pink-600">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

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

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2
            className="text-center font-light mb-12"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              background: "linear-gradient(135deg, #ff1493 0%, #c71585 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            2027: Elevated Experiences
          </h2>
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p className="text-center">
              Cherry Blossom 2027 represents the evolution of our signature spring retreat. Drawing on years of experience facilitating transformative wellness journeys in Japan, we&apos;ve designed extended temple stays, elevated dining experiences, private onsen time, and deepened our Rest as Resistance programming.
            </p>
            <p className="text-center">
              This is Japan&apos;s sakura season at its finest: ten days of pink-petaled splendor, ancient wellness wisdom, and community with women who understand that rest is not indulgence—it&apos;s revolution.
            </p>
            <p className="text-center">
              Whether you choose our 7-day core experience or the full 10-day journey, you&apos;ll return home transformed, rested, and connected to a global sisterhood committed to liberation through rest.
            </p>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-24" style={{ background: "var(--rose-soft)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-center font-light mb-20"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              background: "linear-gradient(135deg, #ff1493 0%, #c71585 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            2027 Experiences
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/02-ekYLf16--NMAgcW86O.jpg",
                title: "Private Sakura Viewings",
                description: "Exclusive early-morning access to Kyoto's most iconic cherry blossom spots—before crowds arrive. Guided meditation under centuries-old trees.",
              },
              {
                image: "/hot-spring-mountain.jpg",
                title: "Extended Onsen Rituals",
                description: "Private onsen reservations daily. Hot springs surrounded by spring blossoms become your sanctuary for deep nervous system reset.",
              },
              {
                image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
                title: "Sacred Temple Immersions",
                description: "Extended temple stays with morning meditation sessions. Connect with resident monks and learn ancient practices of mindfulness and contemplation.",
              },
              {
                image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80",
                title: "Mt. Fuji Sakura Viewing",
                description: "Exclusive access to premium viewing spots where cherry blossoms frame Japan's sacred mountain. Photography guidance included.",
              },
              {
                image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80",
                title: "Kimono Experience Day",
                description: "Professional kimono dressing and styled photography session. Walk through historic districts in traditional spring attire.",
              },
              {
                image: "https://images.unsplash.com/photo-1549096222-7d8d15c87d88?w=800&q=80",
                title: "Bamboo Grove Meditation",
                description: "Guided meditation walks through Kyoto's iconic bamboo forests. Sound healing sessions amidst nature's cathedral.",
              },
              {
                image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
                title: "Luxury Spa Treatments",
                description: "Enhanced spa program featuring Japanese healing modalities. Hot stone therapy, facial treatments, and body work tailored to your needs.",
              },
              {
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
                title: "Rest as Resistance Intensives",
                description: "Workshop series on liberation through rest. Integration practices, embodied movement, and facilitated circles.",
              },
              {
                image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
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
                  <h3 className="text-xl font-bold mb-3" style={{ color: "var(--fuchsia-deep)" }}>{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="investment" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-center font-light mb-8"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              background: "linear-gradient(135deg, #ff1493 0%, #c71585 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Your 2027 Investment
          </h2>
          <p className="text-center text-xl text-gray-600 mb-20 max-w-4xl mx-auto">
            Early bird pricing available. Payment plans accepted. Pricing reflects peak season demand and enhanced programming.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Whispering Pines */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100">
              <h3 className="text-3xl font-bold mb-4" style={{ color: "var(--fuchsia-deep)" }}>
                Whispering Pines
              </h3>
              <div className="text-5xl font-bold mb-2">$13,500</div>
              <p className="text-xl text-gray-600 mb-8 font-semibold">7-Day Core Experience</p>
              <ul className="space-y-4 text-lg mb-10">
                <li>✓ 7 days / 6 nights Kamakura base</li>
                <li>✓ Enhanced meal program (all included)</li>
                <li>✓ Daily onsen & spa access</li>
                <li>✓ All cultural excursions</li>
                <li>✓ Group integration circles</li>
                <li>✓ Complete transportation</li>
              </ul>
              <a
                href="#reserve"
                className="block w-full text-center px-6 py-4 rounded-lg font-bold text-white transition-all"
                style={{ background: "linear-gradient(to right, #ff1493 0%, #c71585 100%)" }}
              >
                Choose 7-Day
              </a>
            </div>

            {/* Golden Crane - Featured */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl border-4" style={{ borderColor: "var(--fuchsia-deep)" }}>
              <div
                className="inline-block px-6 py-2 rounded-lg text-sm font-bold mb-6 text-white"
                style={{ background: "var(--fuchsia-deep)" }}
              >
                HIGHLY RECOMMENDED
              </div>
              <h3 className="text-3xl font-bold mb-4" style={{ color: "var(--fuchsia-deep)" }}>
                Golden Crane
              </h3>
              <div className="text-5xl font-bold mb-2">$15,000</div>
              <p className="text-xl text-gray-600 mb-8 font-semibold">10-Day Complete Journey</p>
              <ul className="space-y-4 text-lg mb-10">
                <li>✓ All 7-Day features included</li>
                <li>✓ PLUS 3 additional nights</li>
                <li>✓ Premium ryokan upgrade</li>
                <li>✓ Private onsen experiences</li>
                <li>✓ Michelin kaiseki dinners</li>
                <li>✓ Extended integration time</li>
              </ul>
              <a
                href="#reserve"
                className="block w-full text-center px-6 py-4 rounded-lg font-bold text-white transition-all"
                style={{ background: "linear-gradient(to right, #ff1493 0%, #c71585 100%)" }}
              >
                Choose 10-Day
              </a>
            </div>

            {/* Eternal Blossom */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100">
              <h3 className="text-3xl font-bold mb-4" style={{ color: "var(--fuchsia-deep)" }}>
                Eternal Blossom
              </h3>
              <div className="text-5xl font-bold mb-2">$18,000</div>
              <p className="text-xl text-gray-600 mb-8 font-semibold">10-Day Ultra Luxury</p>
              <ul className="space-y-4 text-lg mb-10">
                <li>✓ All Golden Crane benefits</li>
                <li>✓ Best-in-class accommodations</li>
                <li>✓ Private spa treatment series</li>
                <li>✓ Professional kimono photoshoot</li>
                <li>✓ 90-min life design session</li>
                <li>✓ VIP concierge throughout</li>
              </ul>
              <a
                href="#reserve"
                className="block w-full text-center px-6 py-4 rounded-lg font-bold text-white transition-all"
                style={{ background: "linear-gradient(to right, #ff1493 0%, #c71585 100%)" }}
              >
                Choose Luxury
              </a>
            </div>
          </div>

          {/* Early Bird */}
          <div
            className="max-w-3xl mx-auto rounded-3xl p-10 text-center border-2"
            style={{ background: "var(--rose-soft)", borderColor: "var(--fuchsia-deep)" }}
          >
            <h3 className="text-3xl font-bold mb-4" style={{ color: "var(--fuchsia-deep)" }}>
              Early Bird Special
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              Book before June 1, 2026 and save $500 on any package. Payment plans available with 3-installment option.
            </p>
          </div>
        </div>
      </section>

      {/* Reserve */}
      <section
        id="reserve"
        className="py-24"
        style={{
          background: `linear-gradient(135deg, rgba(255,20,147,0.92) 0%, rgba(199,21,133,0.88) 50%, rgba(255,105,180,0.92) 100%)`,
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className="mb-8 font-light text-white"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
            }}
          >
            Secure Your Place
          </h2>
          <p className="text-xl text-white mb-12 leading-relaxed">
            Email us to begin your reservation and receive the full retreat prospectus with detailed itinerary, accommodation details, and payment options.
          </p>
          <a
            href="mailto:rar@dr-dede.com"
            className="inline-block px-16 py-7 rounded-lg text-xl font-extrabold uppercase tracking-wider transition-all hover:-translate-y-1 text-white"
            style={{
              background: "rgba(255,255,255,0.25)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              border: "2px solid rgba(255,255,255,0.5)",
            }}
          >
            Begin Your Reservation
          </a>
        </div>
      </section>
    </div>
  )
}
