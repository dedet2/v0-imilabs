import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mountain, Heart, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rest as Resistance | Dr. Dédé Tetsubayashi",
  description:
    "Wellness retreats for Black women leaders. Rest as Resistance honors the movement founded by Tricia Hersey, creating sacred space for transformative healing.",
  alternates: {
    canonical: "https://dr-dede.com/retreats-advocacy/luxury-wellness/rar-brand",
  },
}

export default function RaRBrandPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-light mb-8 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Rest as Resistance
          </h1>
          <blockquote className="text-2xl md:text-3xl italic text-gray-700 mb-4 font-light">
            "Rest is not a luxury. It is resistance."
          </blockquote>
          <p className="text-sm text-gray-600 mb-12">— Tricia Hersey, The Nap Ministry</p>
          <Link href="/retreats-advocacy/cherry-blossom-2026">
            <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-md">
              Explore 2026 Retreats
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
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
      <section className="py-20 bg-gray-50">
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
                    className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${retreat.gradient} text-white text-sm mb-3 w-fit`}
                  >
                    {retreat.season}
                  </div>
                  <CardTitle className="text-xl font-semibold mb-2">{retreat.title}</CardTitle>
                  <CardDescription className="text-gray-600 mb-1">{retreat.dates}</CardDescription>
                  <CardDescription className="text-sm text-gray-500 mb-3">{retreat.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-3">
                    {retreat.price}
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{retreat.description}</p>
                  <Link href={retreat.link}>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Private Family Retreats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Private Family Retreats
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Intimate, customized experiences for families and private groups.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                badge: "Private Family",
                title: "45-Year Anniversary Celebration",
                dates: "April 5-25, 2026",
                price: "$45,000",
                description: "Celebrate your milestone with an intimate 3-week luxury journey through Japan.",
                gradient: "from-amber-500 to-purple-400",
                link: "/retreats-advocacy/anniversary-celebration-2026",
              },
              {
                badge: "Private Family",
                title: "Multi-Generational Family Adventure",
                dates: "June 8-28, 2026",
                price: "From $32,000",
                description:
                  "A 3-week multi-generational journey through Japan for families seeking meaningful connection.",
                gradient: "from-green-500 to-blue-400",
                link: "/retreats-advocacy/family-retreat-june-2026",
              },
            ].map((retreat, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <CardHeader>
                  <div
                    className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${retreat.gradient} text-white text-sm mb-3 w-fit`}
                  >
                    {retreat.badge}
                  </div>
                  <CardTitle className="text-xl font-semibold mb-2">{retreat.title}</CardTitle>
                  <CardDescription className="text-gray-600 mb-1">{retreat.dates}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{retreat.description}</p>
                  <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                    {retreat.price}
                  </div>
                  <Link href={retreat.link}>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
                      Inquire Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 2027 Calendar Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            2027 Seasonal Calendar
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Early bird pricing now available for our 2027 retreats. Reserve your spot before prices increase.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                season: "Spring",
                title: "Cherry Blossom 2027",
                dates: "April 6-16, 2027",
                duration: "7 or 10 days",
                price: "From $13,000",
                description: "Second annual with enhanced programming based on 2026 feedback.",
                gradient: "from-pink-500 to-rose-400",
                link: "/retreats-advocacy/cherry-blossom-2027",
                earlyBird: true,
              },
              {
                season: "Summer",
                title: "Summer Solstice 2027",
                dates: "June 19-26, 2027",
                duration: "7 days",
                price: "$14,000",
                description: "Hokkaido's lavender fields and midnight sun experience.",
                gradient: "from-yellow-500 to-green-400",
                link: "/retreats-advocacy/summer-solstice-2026",
                earlyBird: true,
              },
              {
                season: "Fall",
                title: "Autumn Equinox 2027",
                dates: "Sept 21 - Oct 1, 2027",
                duration: "11 days",
                price: "$15,000",
                description: "Kyoto's temples ablaze with autumn colors.",
                gradient: "from-orange-500 to-red-400",
                link: "/retreats-advocacy/autumn-equinox-2026",
                earlyBird: true,
              },
              {
                season: "Winter",
                title: "Winter Solstice 2027",
                dates: "December 14-29, 2027",
                duration: "16 days",
                price: "From $27,500",
                description: "Extended journey: Winter Solstice through Japanese New Year.",
                gradient: "from-blue-500 to-cyan-400",
                link: "/retreats-advocacy/winter-solstice-2027",
                earlyBird: true,
              },
            ].map((retreat, i) => (
              <Card key={i} className={`border-none shadow-lg ${retreat.earlyBird ? "ring-2 ring-purple-600" : ""}`}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${retreat.gradient} text-white text-sm w-fit`}
                    >
                      {retreat.season}
                    </div>
                    {retreat.earlyBird && (
                      <div className="inline-block px-2 py-0.5 rounded-full bg-purple-100 text-purple-600 text-xs font-semibold">
                        Early Bird
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-xl font-semibold mb-2">{retreat.title}</CardTitle>
                  <CardDescription className="text-gray-600 mb-1">{retreat.dates}</CardDescription>
                  <CardDescription className="text-sm text-gray-500 mb-3">{retreat.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-3">
                    {retreat.price}
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{retreat.description}</p>
                  {retreat.link !== "#" ? (
                    <Link href={retreat.link}>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
                        Reserve Now
                      </Button>
                    </Link>
                  ) : (
                    <Button disabled className="w-full">
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Retreats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-light mb-6 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Past Retreats
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore our transformational retreats from 2025 and see the impact of Rest as Resistance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-1">{retreat.title}</h3>
                    <p className="text-gray-600 text-sm">{retreat.dates}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <Link href="/retreats-advocacy/past-retreats">
            <Button variant="outline" className="bg-transparent">
              View All Past Retreats
            </Button>
          </Link>
        </div>
      </section>

      {/* Philosophy Deep Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-12 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            The Three Pillars
          </h2>
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
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)" }}
                >
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

      {/* Meet Your Host */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-12 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Meet Your Host
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="h-96 rounded-2xl bg-cover bg-center bg-gray-200"
              style={{
                backgroundImage:
                  "url(/placeholder.svg?height=400&width=400&query=professional+Black+woman+PhD+smiling+portrait+natural+hair)",
              }}
            />
            <div>
              <h3 className="text-3xl font-semibold mb-4">Dr. Dédé Tetsubayashi, PhD</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                With a PhD from Cornell University and over 15 years of experience living in and studying Japan, Dr.
                Dédé brings deep cultural expertise to every retreat.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Fluent in Japanese and seven languages total, she creates seamless cultural immersion experiences while
                holding space for Black women's unique healing journeys.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Former leadership roles at Meta, Salesforce, and WeWork inform her understanding of executive burnout
                and the transformative power of intentional rest.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>PhD from Cornell University</li>
                <li>15+ years Japan cultural expertise</li>
                <li>Fluent in 7 languages including Japanese</li>
                <li>Former Meta, Salesforce, WeWork</li>
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
              <Card key={i} className="bg-gray-50 border-l-4 border-purple-600">
                <CardContent className="p-8">
                  <p className="text-xl italic text-gray-700 mb-4">"{testimonial.quote}"</p>
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
          <p className="text-lg text-gray-600 mb-8">
            Organizations can sponsor employees to attend Rest as Resistance retreats as part of DEI and wellness
            initiatives. Tax-deductible sponsorship options available.
          </p>
          <Link href="/retreats-advocacy/executive-wellness/corporate-sponsorships">
            <Button
              variant="outline"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-md bg-transparent"
            >
              Learn About Sponsorships
            </Button>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-light text-white mb-6">Join the Movement</h2>
          <p className="text-xl text-white/90 mb-8">Choose rest. Choose resistance. Choose yourself.</p>
          <Link href="/retreats-advocacy/cherry-blossom-2026">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-semibold">
              Choose Your Retreat
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
