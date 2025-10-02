import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Target, Lightbulb, TrendingUp, Calendar, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Executive Retreats | Dr. Dédé Tetsubayashi",
  description:
    "Transformative executive leadership retreats combining AI governance strategy, inclusive innovation, and personal development in luxury accessible settings.",
}

export default function ExecutiveRetreatsPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-5xl mx-auto">
          <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200" variant="outline">
            Executive Leadership Development
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Executive Retreats</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed max-w-3xl">
            Immersive leadership experiences that combine strategic AI governance, inclusive innovation frameworks, and
            personal transformation in luxury accessible settings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90">
              <Link href="/contact">
                Inquire About Retreats
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#details">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section
        id="details"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-purple-50/50 to-cyan-50/50"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Transform Your Leadership Through Inclusive Innovation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our executive retreats are designed for C-suite leaders, senior executives, and board members who
                recognize that the future of technology leadership requires both strategic governance expertise and a
                deep commitment to equity and inclusion.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Led by Dr. Dédé Tetsubayashi, these intimate retreats combine rigorous strategic planning with personal
                development, all within luxury settings that prioritize accessibility and comfort.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/luxury-retreat-venue-with-modern-accessible-design.jpg"
                alt="Executive Retreat Venue"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Strategic AI Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Deep-dive sessions on building governance frameworks that ensure compliance, reduce risk, and unlock
                  new market opportunities through inclusive design.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle>Inclusive Leadership Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Transform your leadership approach with frameworks that embed equity and accessibility into every
                  business decision and technology strategy.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Peer Networking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Connect with fellow executives facing similar challenges, share insights, and build lasting
                  relationships in an intimate, confidential setting.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle>Actionable Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Leave with concrete implementation plans, governance frameworks, and strategic roadmaps tailored to
                  your organization's specific needs and challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Retreat Details */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance">Retreat Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/90 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Duration</h3>
                <p className="text-sm text-muted-foreground">3-5 day immersive experiences</p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Group Size</h3>
                <p className="text-sm text-muted-foreground">Limited to 8-12 executives</p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Locations</h3>
                <p className="text-sm text-muted-foreground">Luxury accessible venues worldwide</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-purple-600 to-cyan-600 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">What's Included</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>Personalized pre-retreat assessment and goal setting</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>Daily strategic sessions with Dr. Dédé Tetsubayashi</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>Luxury accommodations in fully accessible venues</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>Gourmet meals accommodating all dietary needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>Wellness activities and mindfulness practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>90-day post-retreat implementation support</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-purple-50/50 to-cyan-50/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Transform Your Leadership?</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
            Spaces are limited to ensure an intimate, transformative experience. Contact us to learn about upcoming
            retreat dates and availability.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90">
            <Link href="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
