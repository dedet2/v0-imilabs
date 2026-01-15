import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

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
        {/* Content for the hero section */}
      </section>

      {/* Philosophy - with global design */}
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
                    <a
                      href="https://v0-rest-as-resistance-kt19hdfbk-dedet2s-projects.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">{/* Content for the imagery grid */}</div>
        </div>
      </section>

      {/* Rest as Resistance Content with updated dates and pricing */}
      {/* Content for Rest as Resistance */}
    </div>
  )
}
