import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download } from "@/components/icons"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Emerging Markets AI Discovery - $300M Opportunity | Dr. Dédé Tetsubayashi",
  description:
    "Complete case study of how Dr. Dédé Tetsubayashi helped a consumer goods company discover $300M in untapped market opportunities through inclusive AI design.",
}

export default function EmergingMarketsDiscoveryPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-cyan-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/testimonials">
              <Button variant="ghost" className="text-white hover:bg-white/10 mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Testimonials
              </Button>
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-white/20 text-white border-white/30">Featured</Badge>
              <Badge className="bg-white/20 text-white border-white/30">Market Discovery</Badge>
              <Badge className="bg-white/20 text-white border-white/30">$300M Revenue</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
              Emerging Markets AI Discovery - $300M Opportunity
            </h1>
            <p className="text-xl text-white/90">Consumer Goods</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Metrics */}
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-cyan-600 mb-2">$300M</div>
                  <div className="text-sm text-muted-foreground">Opportunity</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-cyan-600 mb-2">23</div>
                  <div className="text-sm text-muted-foreground">Markets</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-cyan-600 mb-2">45M</div>
                  <div className="text-sm text-muted-foreground">Consumers</div>
                </CardContent>
              </Card>
            </div>

            {/* Image */}
            <div className="relative h-96 w-full mb-12 rounded-xl overflow-hidden">
              <Image
                src="/diverse-team-analyzing-market-data-on-screens-in-m.jpg"
                alt="Emerging Markets AI Discovery"
                fill
                className="object-cover"
              />
            </div>

            {/* Challenge */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Traditional market analysis missed accessibility needs in emerging markets, leaving $300M+ in revenue
                untapped. AI-powered market research tools excluded disabled consumers, representing 15% of global
                purchasing power.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The company's AI systems were trained on data that didn't account for the diverse needs of 45M consumers
                with disabilities across 23 emerging markets, resulting in missed opportunities and ineffective product
                launches.
              </p>
            </div>

            {/* Solution */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">The Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Dr. Tetsubayashi implemented an inclusive AI market research framework that included:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground ml-4">
                <li>Comprehensive data collection from disabled consumers across 23 markets</li>
                <li>AI model retraining to recognize accessibility needs and preferences</li>
                <li>Product development guidelines for inclusive design</li>
                <li>Market segmentation strategies for disability-inclusive products</li>
                <li>Partnership programs with disability advocacy organizations</li>
              </ul>
            </div>

            {/* Results */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">The Results</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The implementation delivered exceptional results within 24 months:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground ml-4">
                <li>$300M in new market opportunities identified and captured</li>
                <li>45M consumers reached with inclusive products</li>
                <li>35% increase in market share across emerging markets</li>
                <li>Industry awards for inclusive innovation</li>
                <li>Positive brand reputation and customer loyalty</li>
              </ul>
            </div>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-cyan-50 to-purple-50 border-cyan-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Discover New Market Opportunities?</h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a consultation to discuss how Dr. Tetsubayashi can help your organization unlock untapped
                  markets.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/contact">Schedule Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/testimonials">
                      <Download className="mr-2 h-4 w-4" />
                      Download Full Case Study
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
