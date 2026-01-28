import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mountain, Heart, Users, Check } from "lucide-react"
import Image from "next/image"

export default function RaRBrandHubPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Standard Branding #1 with softer background */}
      <section className="py-20 bg-gradient-to-br from-purple-100 via-purple-50 to-cyan-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-8 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Rest as Resistance
          </h1>
          <blockquote className="text-2xl md:text-3xl italic text-gray-700 mb-4 font-light leading-relaxed">
            "Rest is not a luxury. It is resistance."
          </blockquote>
          <p className="text-sm text-gray-600 mb-12">— Tricia Hersey, The Nap Ministry</p>
          <Link href="/retreats-advocacy/cherry-blossom-2026">
            <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:opacity-90 px-8 py-3 rounded-md text-lg font-semibold">
              Explore 2026 Retreats
            </Button>
          </Link>
        </div>
      </section>

      {/* The Three Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            The Three Pillars
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our retreats are built on three foundational principles that honor the unique experiences of Black women leaders.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Users,
                title: "Rest as Revolutionary",
                description:
                  "In a culture built on the exploitation of Black bodies through labor, choosing rest is radical resistance. Our retreats create protected space for Black women to reclaim rest as a birthright.",
              },
              {
                icon: Heart,
                title: "Culturally-Specific Care",
                description:
                  "Healing happens in context. Our retreats are designed by and for Black women, honoring the unique intersections of race, gender, and lived experience.",
              },
              {
                icon: Mountain,
                title: "Japan as Medicine",
                description:
                  "Japan's ancient wellness traditions—onsen hot springs, forest bathing, kaiseki cuisine, tea ceremony—become tools for deep restoration.",
              },
            ].map((pillar, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center bg-gradient-to-r from-purple-600 to-cyan-600">
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-4 text-center">
          {[
            { number: "10+", label: "Retreats Completed" },
            { number: "25+", label: "Black Women Leaders Served" },
            { number: "100%", label: "Would Return" },
            { number: "4", label: "Seasonal Offerings Annually" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 2026 Retreat Calendar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            2026 Seasonal Calendar
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Four seasonal offerings designed to honor the rhythms of nature and the body's need for rest.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                season: "Spring",
                title: "Cherry Blossom 2026",
                dates: "April 8-18, 2026",
                duration: "7 or 10 days",
                price: "From $12,500",
                description: "Bloom into rest during Japan's most sacred season of renewal.",
                gradient: "from-pink-500 to-rose-400",
                link: "/retreats-advocacy/cherry-blossom-2026",
              },
              {
                season: "Summer",
                title: "Summer Solstice 2026",
                dates: "June 20-27, 2026",
                duration: "7 days",
                price: "$13,500",
                description: "Experience Hokkaido's lavender fields and midnight sun.",
                gradient: "from-yellow-500 to-green-400",
                link: "/retreats-advocacy/summer-solstice-2026",
              },
              {
                season: "Fall",
                title: "Autumn Equinox 2026",
                dates: "Sept 22 - Oct 2, 2026",
                duration: "11 days",
                price: "$14,500",
                description: "Witness Kyoto's temples ablaze with autumn colors.",
                gradient: "from-orange-500 to-red-400",
                link: "/retreats-advocacy/autumn-equinox-2026",
              },
              {
                season: "Winter",
                title: "Winter Solstice 2026 (9-Day)",
                dates: "December 14-22, 2026",
                duration: "9 days",
                price: "From $15,500",
                description: "Find stillness in snow-covered hot springs. Home by Christmas.",
                gradient: "from-blue-500 to-cyan-400",
                link: "/retreats-advocacy/winter-solstice-2026",
              },
            ].map((retreat, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <CardHeader>
                  <div
                    className={`inline-block px-3 py-1 rounded-md bg-gradient-to-r ${retreat.gradient} text-white text-sm mb-3 w-fit font-medium`}
                  >
                    {retreat.season}
                  </div>
                  <CardTitle className="text-xl font-semibold mb-2">{retreat.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">{retreat.dates}</CardDescription>
                  <div className="text-sm text-gray-500 mt-1">{retreat.duration}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{retreat.description}</p>
                  <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    {retreat.price}
                  </div>
                  <Link href={retreat.link}>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:opacity-90 rounded-md">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-12 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            What to Expect
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Inclusive Luxury</h3>
              <ul className="space-y-4">
                {[
                  "Wheelchair-accessible accommodations",
                  "Premium ryokans with modern amenities",
                  "Private onsen experiences",
                  "Gourmet kaiseki dining with dietary accommodations",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-cyan-600">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Culturally-Centered Programming</h3>
              <ul className="space-y-4">
                {[
                  "Facilitators who understand Black women's experiences",
                  "Space for authentic rest without code-switching",
                  "Community building with other Black women leaders",
                  "Trauma-informed, culturally-responsive practices",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-cyan-600">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Past Retreats */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Past Retreats
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our transformational retreats from 2025 and see the impact of Rest as Resistance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Fall Restorative Oasis",
                dates: "November 2025",
                link: "/retreats-advocacy/past-fall-oasis-2025",
              },
              { title: "New Year's Renewal", dates: "January 2025", link: "/retreats-advocacy/past-new-years-2025" },
              { title: "Spring Soaks", dates: "April 2025", link: "/retreats-advocacy/past-spring-soaks-2025" },
              { title: "Winter Snow", dates: "February 2025", link: "/retreats-advocacy/past-winter-snow-2025" },
            ].map((retreat, i) => (
              <Link href={retreat.link} key={i}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="inline-block px-2 py-1 rounded-md bg-gray-200 text-gray-700 text-xs mb-3 font-medium">
                      Past Retreat
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{retreat.title}</h3>
                    <p className="text-gray-600 text-sm">{retreat.dates}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Your Host */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-12 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Meet Your Host
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden bg-gray-200">
              <Image
                src="/wadi-rum-valley-of-sand-jordan.jpg"
                alt="Dr. Dédé Tetsubayashi"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-gray-900">Dr. Dédé Tetsubayashi, PhD</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                As a queer, disabled Black woman with a PhD from Cornell University, Dr. Dédé brings lived experience to
                creating truly inclusive wellness spaces. Her 15+ years living in Japan and fluency in seven languages
                allow her to navigate cultural complexities while centering the needs of marginalized communities.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Former leadership roles at Meta, Salesforce, and WeWork inform her deep understanding of executive
                burnout and the transformative power of intentional rest. She has facilitated wellness experiences for
                25+ Black women leaders, creating spaces where rest is honored as resistance.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Dr. Dédé's approach to wellness is grounded in disability justice, anti-racism, and the belief that
                luxury must be accessible. Every retreat is designed with multiple access points—physical, cultural,
                linguistic—ensuring that all participants can fully engage and experience deep restoration.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "PhD from Cornell University",
                  "15+ years Japan cultural expertise",
                  "Fluent in 7 languages including Japanese",
                  "Former Meta, Salesforce, WeWork leadership",
                  "25+ Black women leaders served",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-12 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Voices from Past Retreats
          </h2>
          <div className="space-y-8">
            {[
              {
                quote:
                  "For the first time in years, I felt permission to just be. No performance, no code-switching, no Strong Black Woman armor. Just rest, healing, and sisterhood.",
                attribution: "— 2025 Retreat Participant",
              },
              {
                quote:
                  "Dr. Dédé created a space where I could finally exhale. The combination of Japan's healing traditions and culturally-specific care was transformative. I returned home with tools I still use daily.",
                attribution: "— Executive Leader, 2025 Retreat",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="bg-gray-50 border-l-4 border-purple-600 shadow-md">
                <CardContent className="p-8">
                  <p className="text-xl italic text-gray-700 mb-4 leading-relaxed">"{testimonial.quote}"</p>
                  <p className="text-sm text-gray-600">{testimonial.attribution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Partnerships CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6">Corporate Partnerships Available</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Organizations can sponsor employees to attend Rest as Resistance retreats as part of DEI and wellness
            initiatives. Tax-deductible sponsorship options available.
          </p>
          <Link href="/retreats-advocacy/executive-wellness/corporate-sponsorships">
            <Button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-md bg-transparent">
              Learn About Sponsorships
            </Button>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-light text-white mb-6">Join the Movement</h2>
          <p className="text-xl text-white/95 mb-8 leading-relaxed">
            Choose rest. Choose resistance. Choose yourself.
          </p>
          <Link href="/retreats-advocacy/cherry-blossom-2026">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-semibold shadow-xl">
              Choose Your Retreat
            </Button>
          </Link>
        </div>
      </section>

      {/* NO FOOTER - Handled by live site */}
    </div>
  )
}
