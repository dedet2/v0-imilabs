import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PastRetreatsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=1600&width=2400&query=group+of+diverse+Black+women+smiling+together+at+wellness+retreat+Japan)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(102,126,234,0.95) 0%, rgba(118,75,162,0.95) 50%, rgba(240,147,251,0.95) 100%)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl text-white font-light mb-6">Past Retreats</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            A celebration of transformative journeys and the community of women who have chosen rest as resistance.
          </p>
        </div>
      </section>

      {/* 2025 Retreats */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-4xl font-light text-center mb-4"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            2025 Retreats
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our inaugural year of Rest as Resistance retreats brought transformative experiences to Black women leaders.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Winter Snow 2025",
                dates: "January 2025",
                location: "Niigata Snow Country",
                description:
                  "Our first winter retreat featured snow-covered onsens and New Year celebrations in Japan's legendary snow country.",
                link: "/retreats-advocacy/past-winter-snow-2025",
              },
              {
                title: "Spring Soaks 2025",
                dates: "April 2025",
                location: "Kamakura & Hakone",
                description:
                  "Cherry blossoms and hot springs created the perfect backdrop for our inaugural spring wellness experience.",
                link: "/retreats-advocacy/past-spring-soaks-2025",
              },
              {
                title: "Fall Oasis 2025",
                dates: "October 2025",
                location: "Kyoto & Nara",
                description:
                  "Autumn colors and ancient temples provided the setting for deep reflection and cultural immersion.",
                link: "/retreats-advocacy/past-fall-oasis-2025",
              },
              {
                title: "New Years 2025",
                dates: "December 2025",
                location: "Nagano & Tokyo",
                description:
                  "Ring in the new year with traditional Japanese celebrations and winter wellness practices.",
                link: "/retreats-advocacy/past-new-years-2025",
              },
            ].map((retreat, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle
                    className="text-2xl"
                    style={{
                      background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {retreat.title}
                  </CardTitle>
                  <CardDescription>
                    {retreat.dates} | {retreat.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{retreat.description}</p>
                  <Link href={retreat.link}>
                    <Button
                      variant="outline"
                      className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                    >
                      View Gallery
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-light mb-6">Join Our Next Retreat</h2>
          <p className="text-xl mb-8 opacity-90">Be part of our growing community of women choosing rest.</p>
          <Link href="/retreats-advocacy">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              View 2026 Retreats
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
