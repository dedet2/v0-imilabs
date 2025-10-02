import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Heart, Sparkles, Mountain, Waves, Sun, Moon } from "lucide-react"

export const metadata: Metadata = {
  title: "Luxury Wellness Retreats | Dr. Dédé Tetsubayashi",
  description:
    "Holistic wellness retreats combining mindfulness, accessibility, and personal transformation in luxury settings designed for all abilities.",
}

export default function WellnessRetreatsPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-5xl mx-auto">
          <Badge className="mb-4 bg-cyan-100 text-cyan-700 border-cyan-200" variant="outline">
            Holistic Wellness & Rejuvenation
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Luxury Wellness Retreats</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed max-w-3xl">
            Transformative wellness experiences that honor your whole self—mind, body, and spirit—in luxury settings
            designed for complete accessibility and comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:opacity-90">
              <Link href="/contact">
                Book Your Retreat
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#offerings">Explore Offerings</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-cyan-50/50 to-purple-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/serene-wellness-retreat-with-accessible-spa-facilities.jpg"
                alt="Luxury Wellness Retreat"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Wellness Designed for Everyone</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our wellness retreats are founded on the principle that true luxury means accessibility for all. Every
                aspect of the experience—from the physical spaces to the wellness practices—is designed to be fully
                inclusive and deeply restorative.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Led by Dr. Dédé Tetsubayashi and a team of wellness experts, these retreats combine evidence-based
                practices with personalized care, creating transformative experiences that honor your unique needs and
                goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Retreat */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-purple-600 to-cyan-600 text-white border-0">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <Badge className="mb-4 bg-white/20 text-white border-white/30" variant="outline">
                    Featured Retreat
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Rest as Resistance</h2>
                  <p className="text-lg mb-6 opacity-90 leading-relaxed">
                    A transformative wellness experience that reframes rest as a radical act of self-care and social
                    justice. Join us for a journey that honors your need for restoration while challenging systems that
                    demand constant productivity.
                  </p>
                  <Button asChild size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                    <a href="https://restasresistance.manus.space/" rel="noopener noreferrer">
                      Learn More About Rest as Resistance
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
                <div className="relative w-full md:w-64 h-64 rounded-lg overflow-hidden shadow-2xl flex-shrink-0">
                  <Image
                    src="/serene-wellness-retreat-with-accessible-spa-facilities.jpg"
                    alt="Rest as Resistance Retreat"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Offerings */}
      <section id="offerings" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance">Retreat Offerings</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle>Mindfulness & Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Guided meditation practices adapted for all abilities, including seated, lying down, and
                  movement-based options.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Sun className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Daily guided meditation sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Moon className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Evening relaxation practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Personalized mindfulness coaching</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Waves className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Adaptive Movement & Yoga</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Gentle movement practices designed to meet you where you are, with modifications for all body types
                  and abilities.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Adaptive yoga sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Gentle stretching and mobility work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Nature walks at your own pace</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle>Spa & Bodywork</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Therapeutic treatments in fully accessible spa facilities, with practitioners trained in adaptive
                  techniques.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Therapeutic massage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Hydrotherapy sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Energy healing practices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Mountain className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Nutrition & Nourishment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Gourmet plant-forward cuisine that nourishes body and soul, with accommodations for all dietary needs.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Personalized meal planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Nutrition education workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Mindful eating practices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-cyan-50/50 to-purple-50/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance">
            Luxury Accessible Accommodations
          </h2>

          <Card className="bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Thoughtfully Designed Spaces</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span>Private suites with roll-in showers and adjustable features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0-5">
                        ✓
                      </div>
                      <span>Sensory-friendly quiet spaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span>Accessible outdoor spaces and gardens</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span>State-of-the-art assistive technology</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Personalized Support</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span>24/7 accessibility support staff</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span>Personal care assistance available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span>Customized activity scheduling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span>Medical support coordination</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Begin Your Wellness Journey</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
            Experience true luxury wellness designed for all abilities. Contact us to learn about upcoming retreat dates
            and create your personalized wellness experience.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:opacity-90">
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
