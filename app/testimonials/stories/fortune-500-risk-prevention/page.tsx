import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "@/components/icons"
import { ResourceGateModal } from "@/components/resource-gate-modal"

export const metadata: Metadata = {
  title: "Fortune 500 AI Risk Prevention - $500M Savings | Dr. Dédé Tetsubayashi",
  description:
    "Complete case study of how Dr. Dédé Tetsubayashi helped a Fortune 500 financial services company prevent $500M in regulatory penalties through AI governance.",
}

export default function Fortune500RiskPreventionPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section - PDF Style Header */}
      <section className="relative py-16 bg-gradient-to-br from-[#7209b7] via-[#6366f1] to-[#06b6d4]">
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
                  <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-2 bg-purple-100 text-purple-700 border-purple-200" variant="outline">
                      Case Study
                    </Badge>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2 text-balance">
                      Fortune 500 AI Risk Prevention: $500M in Regulatory Penalties Avoided
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
                  <h2 className="text-2xl font-bold text-purple-700 mb-4">Executive Summary</h2>
                  <div className="h-px bg-gradient-to-r from-purple-200 to-transparent mb-4" />
                  <p className="text-muted-foreground leading-relaxed">
                    A Fortune 500 financial services company faced massive AI system vulnerabilities across
                    international operations that threatened regulatory compliance and exposed the organization to
                    potential $500M+ in penalties, lawsuits, and operational losses. Dr. Tetsubayashi implemented a
                    comprehensive AI governance framework that delivered measurable results within 18 months.
                  </p>
                </div>

                {/* Key Insights */}
                <div>
                  <h2 className="text-2xl font-bold text-purple-700 mb-4">Key Insights</h2>
                  <div className="h-px bg-gradient-to-r from-purple-200 to-transparent mb-4" />
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        Legacy AI models showed severe bias in lending decisions affecting 2.3M customers across 47
                        countries
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        Risk of regulatory action from multiple jurisdictions and potential class-action lawsuits
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        Comprehensive audit and bias detection protocols implemented across all systems
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Implementation Framework */}
                <div>
                  <h2 className="text-2xl font-bold text-purple-700 mb-4">Implementation Framework</h2>
                  <div className="h-px bg-gradient-to-r from-purple-200 to-transparent mb-4" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-purple-50 border border-purple-100">
                      <div className="font-semibold text-purple-900 mb-2">Phase 1: Audit</div>
                      <p className="text-sm text-purple-700">Complete system assessment across 47 countries</p>
                    </div>
                    <div className="p-4 rounded-lg bg-cyan-50 border border-cyan-100">
                      <div className="font-semibold text-cyan-900 mb-2">Phase 2: Implementation</div>
                      <p className="text-sm text-cyan-700">Bias detection and mitigation protocols</p>
                    </div>
                    <div className="p-4 rounded-lg bg-purple-50 border border-purple-100">
                      <div className="font-semibold text-purple-900 mb-2">Phase 3: Monitoring</div>
                      <p className="text-sm text-purple-700">Ongoing compliance and reporting systems</p>
                    </div>
                  </div>
                </div>

                {/* Challenge / Solution / Result */}
                <div className="space-y-6">
                  <div className="p-6 rounded-lg bg-red-50 border border-red-100">
                    <h3 className="text-lg font-bold text-red-900 mb-2">Challenge</h3>
                    <p className="text-red-700 leading-relaxed">
                      Legacy AI models showed severe bias in lending decisions affecting 2.3M customers across 47
                      countries. The company was at risk of regulatory action from multiple jurisdictions and faced
                      potential class-action lawsuits from affected customers.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg bg-blue-50 border border-blue-100">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Solution</h3>
                    <p className="text-blue-700 leading-relaxed mb-3">
                      Dr. Tetsubayashi implemented a comprehensive AI governance framework that included:
                    </p>
                    <ul className="space-y-2 text-blue-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500">•</span>
                        <span>Complete audit of all AI systems across 47 countries</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500">•</span>
                        <span>Bias detection and mitigation protocols for lending algorithms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500">•</span>
                        <span>Regulatory compliance framework aligned with international standards</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500">•</span>
                        <span>Staff training programs on ethical AI practices</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-lg bg-green-50 border border-green-100">
                    <h3 className="text-lg font-bold text-green-900 mb-2">Result</h3>
                    <p className="text-green-700 leading-relaxed mb-3">
                      The implementation delivered measurable results within 18 months:
                    </p>
                    <ul className="space-y-2 text-green-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>$500M in regulatory penalties avoided</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Zero discrimination complaints filed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>2.3M customers protected from biased lending decisions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>100% compliance across all 47 countries</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Financial Services</Badge>
                    <Badge variant="secondary">AI Governance</Badge>
                    <Badge variant="secondary">Risk Prevention</Badge>
                    <Badge variant="secondary">Global Compliance</Badge>
                    <Badge variant="secondary">Bias Detection</Badge>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">$500M</div>
                    <div className="text-sm text-muted-foreground">Penalties Avoided</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">47</div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">2.3M</div>
                    <div className="text-sm text-muted-foreground">Customers Protected</div>
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
                  <span>18-page comprehensive case study</span>
                  <span className="ml-auto">PDF Format • 2.4 MB</span>
                </div>
              </CardContent>
            </Card>

            {/* Download CTA */}
            <div className="mt-8 text-center">
              <ResourceGateModal
                resourceType="case-study"
                resourceDescription="Download the complete 18-page case study with detailed analysis, implementation insights, and ROI breakdown"
                resourceTitle="Fortune 500 AI Risk Prevention Case Study"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
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
