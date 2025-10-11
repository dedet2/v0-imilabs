import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "@/components/icons"
import Image from "next/image"
import { ResourceGateModal } from "@/components/resource-gate-modal"

export const metadata: Metadata = {
  title: "Emerging Markets AI Discovery - $300M Opportunity | Dr. Dédé Tetsubayashi",
  description:
    "Complete case study of how Dr. Dédé Tetsubayashi helped a consumer goods company discover $300M in untapped market opportunities through inclusive AI design.",
}

export default function EmergingMarketsDiscoveryPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section - PDF Style Header */}
      <section className="relative py-16 bg-gradient-to-br from-cyan-600 via-cyan-500 to-cyan-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/testimonials">
              <Button variant="ghost" className="text-white hover:bg-white/10 mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Testimonials
              </Button>
            </Link>

            {/* PDF-style header card */}
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-400 flex items-center justify-center flex-shrink-0">
                    <Image src="/incluu-logo.png" alt="incluu" width={40} height={40} className="object-contain" />
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-2 bg-cyan-100 text-cyan-700 border-cyan-200" variant="outline">
                      Case Study
                    </Badge>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2 text-balance">
                      Emerging Markets AI Discovery: $300M in Untapped Opportunities
                    </h1>
                    <p className="text-lg text-muted-foreground">
                      Expert insights from Dr. Dédé Tetsubayashi • AI Governance & Tech Equity Pioneer
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content - PDF Style Layout */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border-border shadow-lg">
              <CardContent className="p-8 md:p-12 space-y-8">
                {/* Executive Summary */}
                <div>
                  <h2 className="text-2xl font-bold text-cyan-700 mb-4">Executive Summary</h2>
                  <div className="h-px bg-gradient-to-r from-cyan-200 to-transparent mb-4" />
                  <p className="text-muted-foreground leading-relaxed">
                    Traditional market analysis missed accessibility needs in emerging markets, leaving $300M+ in
                    revenue untapped. AI-powered market research tools excluded disabled consumers, representing 15% of
                    global purchasing power. Dr. Tetsubayashi implemented an inclusive AI market research framework that
                    delivered exceptional results within 24 months.
                  </p>
                </div>

                {/* Key Insights */}
                <div>
                  <h2 className="text-2xl font-bold text-cyan-700 mb-4">Key Insights</h2>
                  <div className="h-px bg-gradient-to-r from-cyan-200 to-transparent mb-4" />
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-cyan-600 mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        AI systems trained on data that didn't account for diverse needs of 45M consumers with
                        disabilities
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-cyan-600 mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        Missed opportunities and ineffective product launches across 23 emerging markets
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-cyan-600 mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        Comprehensive data collection and AI model retraining for inclusive design
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Implementation Framework */}
                <div>
                  <h2 className="text-2xl font-bold text-cyan-700 mb-4">Implementation Framework</h2>
                  <div className="h-px bg-gradient-to-r from-cyan-200 to-transparent mb-4" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-cyan-50 border border-cyan-100">
                      <div className="font-semibold text-cyan-900 mb-2">Phase 1: Research</div>
                      <p className="text-sm text-cyan-700">Data collection from disabled consumers across 23 markets</p>
                    </div>
                    <div className="p-4 rounded-lg bg-purple-50 border border-purple-100">
                      <div className="font-semibold text-purple-900 mb-2">Phase 2: Redesign</div>
                      <p className="text-sm text-purple-700">AI model retraining and product development guidelines</p>
                    </div>
                    <div className="p-4 rounded-lg bg-cyan-50 border border-cyan-100">
                      <div className="font-semibold text-cyan-900 mb-2">Phase 3: Launch</div>
                      <p className="text-sm text-cyan-700">Market segmentation and partnership programs</p>
                    </div>
                  </div>
                </div>

                {/* Challenge / Solution / Result */}
                <div className="space-y-6">
                  <div className="p-6 rounded-lg bg-red-50 border border-red-100">
                    <h3 className="text-lg font-bold text-red-900 mb-2">Challenge</h3>
                    <p className="text-red-700 leading-relaxed">
                      The company's AI systems were trained on data that didn't account for the diverse needs of 45M
                      consumers with disabilities across 23 emerging markets, resulting in missed opportunities and
                      ineffective product launches.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg bg-blue-50 border border-blue-100">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Solution</h3>
                    <p className="text-blue-700 leading-relaxed mb-3">
                      Dr. Tetsubayashi implemented an inclusive AI market research framework that included:
                    </p>
                    <ul className="space-y-2 text-blue-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500">•</span>
                        <span>Comprehensive data collection from disabled consumers across 23 markets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500">•</span>
                        <span>AI model retraining to recognize accessibility needs and preferences</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500">•</span>
                        <span>Product development guidelines for inclusive design</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500">•</span>
                        <span>Market segmentation strategies for disability-inclusive products</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-lg bg-green-50 border border-green-100">
                    <h3 className="text-lg font-bold text-green-900 mb-2">Result</h3>
                    <p className="text-green-700 leading-relaxed mb-3">
                      The implementation delivered exceptional results within 24 months:
                    </p>
                    <ul className="space-y-2 text-green-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>$300M in new market opportunities identified and captured</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>45M consumers reached with inclusive products</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>35% increase in market share across emerging markets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Industry awards for inclusive innovation</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Consumer Goods</Badge>
                    <Badge variant="secondary">Market Discovery</Badge>
                    <Badge variant="secondary">Inclusive Design</Badge>
                    <Badge variant="secondary">Emerging Markets</Badge>
                    <Badge variant="secondary">Revenue Growth</Badge>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 mb-1">$300M</div>
                    <div className="text-sm text-muted-foreground">New Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 mb-1">23</div>
                    <div className="text-sm text-muted-foreground">Markets</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 mb-1">45M</div>
                    <div className="text-sm text-muted-foreground">Consumers Reached</div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t">
                  <div>
                    <div className="font-semibold">Dr. Dédé Tetsubayashi</div>
                    <div className="text-sm text-muted-foreground">AI Governance Expert • Tech Equity Pioneer</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">incluu</div>
                    <div className="text-sm text-muted-foreground">www.imilabs.com/incluu</div>
                  </div>
                </div>

                {/* Page indicator */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-6 w-6 rounded bg-muted flex items-center justify-center text-xs">📄</div>
                  <span>16-page comprehensive case study</span>
                  <span className="ml-auto">PDF Format • 2.1 MB</span>
                </div>
              </CardContent>
            </Card>

            {/* Download CTA */}
            <div className="mt-8 text-center">
              <ResourceGateModal
                resourceType="case-study"
                resourceDescription="Download the complete 16-page case study with detailed market analysis, implementation insights, and revenue impact"
                resourceTitle="Emerging Markets AI Discovery Case Study"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700"
                >
                  Download Full Case Study (PDF)
                </Button>
              </ResourceGateModal>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
