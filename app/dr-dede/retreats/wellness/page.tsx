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
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-purple-600/95 via-purple-500/95 to-cyan-400/95 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm" variant="outline">
              Holistic Wellness & Rejuvenation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white drop-shadow-lg">
              Luxury Wellness Retreats
            </h1>
            <p className="text-xl text-white/95 mb-8 text-pretty leading-relaxed max-w-3xl drop-shadow">
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
          <Card className="bg-gradient-to-br from-purple-600 to-cyan-600 text-white border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <Badge className="mb-4 bg-white/20 text-white border-white/30 w-fit" variant="outline">
                    Featured Retreat
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Bloom Into Rest — Japan 2026</h2>
                  <p className="text-lg mb-4 opacity-90 leading-relaxed">
                    A transformative spring retreat during Japan's legendary cherry blossom season. Experience renewal
                    and liberation through onsen healing, forest bathing, and mindful restoration in peak sakura bloom.
                  </p>
                  <p className="text-base mb-6 opacity-90 leading-relaxed">
                    Journey through Tokyo, Kyoto, Hakone, and the Japanese Alps during April's magical hanami
                    season—thoughtfully designed for women executives reclaiming rest as a sacred right.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="bg-white text-purple-600 hover:bg-gray-100 w-fit"
                  >
                    <a href="https://rar.dr-dede.com" target="_blank" rel="noopener noreferrer">
                      Learn More About Rest as Resistance
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
                <div className="relative h-64 md:h-auto min-h-[400px]">
                  <Image
                    src="/japanese-temple-pagoda-surrounded-by-pink-cherry-b.jpg"
                    alt="Bloom Into Rest - Japan Cherry Blossom Retreat 2026"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Japanese retreat imagery grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/japanese-hot-spring-onsen-with-cherry-blossoms-sak.jpg"
                alt="Onsen with Cherry Blossoms"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/traditional-japanese-ryokan-garden-with-pink-cherr.jpg"
                alt="Ryokan Garden in Spring"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/mount-fuji-with-pink-cherry-blossoms-sakura-foregr.jpg"
                alt="Mount Fuji with Cherry Blossoms"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section id="offerings" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-balance">Retreat Offerings</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            From intimate Japanese wellness journeys to personalized luxury experiences, our retreats are designed to
            restore, rejuvenate, and transform.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center mb-4">
                  <Mountain className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Rest as Resistance — Japan Retreats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* First retreat */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Japan 2025</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      A 10-day luxury healing experience in Japan for women executives. Experience Tokyo, Kamakura,
                      Beppu hot springs, and Miyajima's sacred island.
                    </p>
                    <Badge variant="secondary" className="text-xs mb-3">
                      December 8-18, 2025
                    </Badge>
                  </div>

                  {/* Upcoming retreat */}
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-sm mb-2">Japan April 2026: Bloom Into Rest</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      Experience the magic of cherry blossom season. A transformative spring retreat during sakura
                      season, combining rest practices with the beauty of Japan's most celebrated time of year.
                    </p>
                    <Badge variant="secondary" className="text-xs mb-3">
                      April 2026 (Dates TBA)
                    </Badge>
                  </div>
                </div>

                <ul className="space-y-2 text-sm mt-4 pt-4 border-t">
                  <li className="flex items-start gap-2">
                    <Sun className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Private onsen rituals & forest bathing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Moon className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Traditional ryokan accommodations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Slow mornings & intentional rest practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Limited to 8-10 guests for intimate care</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-white" />
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
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <Waves className="h-6 w-6 text-white" />
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
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-white" />
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
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center mb-4">
                  <Mountain className="h-6 w-6 text-white" />
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
                      <div className="h-5 w-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
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
