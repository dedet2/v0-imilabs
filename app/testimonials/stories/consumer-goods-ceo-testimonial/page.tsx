import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "@/components/icons"

export const metadata: Metadata = {
  title: "Consumer Goods CEO Testimonial | Dr. Dédé Tetsubayashi",
  description:
    "How Dr. Tetsubayashi helped a global consumer goods company discover $300M in untapped markets through inclusive AI design.",
}

export default function ConsumerGoodsCEOTestimonialPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#06b6d4] via-[#6366f1] to-[#7209b7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="text-white hover:bg-white/10 mb-8">
              <Link href="/testimonials">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Testimonials
              </Link>
            </Button>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              "She Helped Us Discover $300M in Untapped Markets"
            </h1>
            <p className="text-xl text-white/90 mb-4 drop-shadow">Marcus Rodriguez, Chief Executive Officer</p>
            <p className="text-lg text-white/80 drop-shadow">Global Consumer Goods Corporation</p>
          </div>
        </div>
      </section>

      {/* Full Testimonial */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-cyan-700 mb-4">The Blind Spot</h2>
                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    "We thought we were data-driven. We had sophisticated AI systems analyzing consumer behavior,
                    predicting trends, and optimizing our product recommendations. But we were completely missing 15% of
                    the global market—the disability community, representing $300M in annual revenue we were leaving on
                    the table."
                  </p>
                  <p>
                    "Our AI wasn't just ignoring this market; it was actively excluding it. Product recommendations,
                    marketing campaigns, even our e-commerce platform—all optimized for a narrow definition of 'typical'
                    consumers. We were literally turning away customers who wanted to buy from us."
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-700 mb-4">The Wake-Up Call</h2>
                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    "Dr. Tetsubayashi's presentation at our annual strategy retreat was a wake-up call. She showed us
                    data we'd never seen: the disability market's $13 trillion in global purchasing power, the 1.3
                    billion people we were excluding, and most importantly, how our competitors were starting to capture
                    this opportunity."
                  </p>
                  <p>
                    "What started as a compliance discussion became a growth strategy conversation. She reframed
                    inclusive AI not as a cost center but as a market expansion opportunity. The board was immediately
                    interested."
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-700 mb-4">The Transformation</h2>
                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    "Dr. Tetsubayashi led a comprehensive redesign of our AI systems with accessibility at the core. We
                    retrained our recommendation algorithms, rebuilt our customer segmentation models, and redesigned
                    our entire digital experience with universal design principles."
                  </p>
                  <p>
                    "But the technical changes were only part of the story. She also helped us understand the disability
                    market as real people with real needs and preferences—not just a compliance checkbox. We hired
                    consultants with disabilities, conducted extensive user research, and built inclusive design into
                    our product development process."
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-700 mb-4">The Results</h2>
                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    "The results exceeded every expectation. Within 18 months, we were reaching 45 million consumers
                    across 23 markets we'd previously ignored. Revenue from these segments grew to $300M annually—pure
                    incremental growth we would have missed without Dr. Tetsubayashi's guidance."
                  </p>
                  <p>
                    "But the impact went beyond revenue. Our brand reputation soared. We won multiple awards for
                    inclusive innovation. Our employee engagement scores improved as our teams felt proud of building
                    products that served everyone. And our stock price reflected the market's confidence in our growth
                    strategy."
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-cyan-700 mb-4">The Competitive Advantage</h2>
                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    "Today, inclusive AI is a core part of our competitive strategy. While our competitors are still
                    treating accessibility as a compliance burden, we're using it to win market share. Dr. Tetsubayashi
                    helped us see that doing the right thing and doing the profitable thing aren't mutually
                    exclusive—they're the same thing."
                  </p>
                  <p>
                    "If you're leaving money on the table by ignoring the disability market, you can't afford to wait.
                    Dr. Tetsubayashi's expertise can help you turn inclusive AI from a cost center into a growth
                    engine."
                  </p>
                </div>
              </div>
            </div>

            <Card className="mt-12 p-8 bg-cyan-50 border-cyan-200">
              <h3 className="text-2xl font-bold mb-6">Key Results</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-cyan-600 mb-2">$300M</div>
                  <div className="text-sm text-muted-foreground">New Annual Revenue</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-600 mb-2">23</div>
                  <div className="text-sm text-muted-foreground">New Markets Entered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-600 mb-2">45M</div>
                  <div className="text-sm text-muted-foreground">New Consumers Reached</div>
                </div>
              </div>
            </Card>

            <div className="mt-12 flex gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Schedule Your Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/case-studies">View Related Case Study</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
