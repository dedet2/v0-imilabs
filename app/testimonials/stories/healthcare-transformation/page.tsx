import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "@/components/icons"
import Image from "next/image"
import { ResourceGateModal } from "@/components/resource-gate-modal"

export const metadata: Metadata = {
  title: "Healthcare System Transformation - $100M Cost Reduction | Dr. Dédé Tetsubayashi",
  description:
    "Complete case study of how Dr. Tetsubayashi helped a healthcare system reduce costs by $100M through accessible AI diagnostic systems.",
}

export default function HealthcareTransformationPage() {
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
                    <Image src="/incluu-logo.png" alt="incluu" width={40} height={40} className="object-contain" />
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-2 bg-purple-100 text-purple-700 border-purple-200" variant="outline">
                      Case Study
                    </Badge>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2 text-balance">
                      Healthcare System Transformation: $100M Cost Reduction Through Accessible AI
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
                    AI diagnostic systems showed persistent bias against disabled patients, resulting in $100M+ annual
                    costs from misdiagnoses, extended treatments, and malpractice claims. Patient outcomes disparities
                    reached crisis levels across 847 facilities. Dr. Tetsubayashi implemented a comprehensive healthcare
                    AI transformation that delivered significant improvements within 20 months.
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
                        AI-powered diagnostic tools consistently failed to account for disability-related factors
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        Mounting pressure from regulators, advocacy groups, and patients
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        Complete audit and bias correction in medical imaging algorithms
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
                      <div className="font-semibold text-purple-900 mb-2">Phase 1: Assessment</div>
                      <p className="text-sm text-purple-700">Audit of AI diagnostic systems across 847 facilities</p>
                    </div>
                    <div className="p-4 rounded-lg bg-cyan-50 border border-cyan-100">
                      <div className="font-semibold text-cyan-900 mb-2">Phase 2: Correction</div>
                      <p className="text-sm text-cyan-700">Bias detection and training data enhancement</p>
                    </div>
                    <div className="p-4 rounded-lg bg-purple-50 border border-purple-100">
                      <div className="font-semibold text-purple-900 mb-2">Phase 3: Integration</div>
                      <p className="text-sm text-purple-700">Clinical staff education and patient feedback</p>
                    </div>
                  </div>
                </div>

                {/* Challenge / Solution / Result */}
                <div className="space-y-6">
                  <div className="p-6 rounded-lg bg-red-50 border border-red-100">
                    <h3 className="text-lg font-bold text-red-900 mb-2">Challenge</h3>
                    <p className="text-red-700 leading-relaxed">
                      The healthcare system faced mounting pressure from regulators, advocacy groups, and patients as
                      AI-powered diagnostic tools consistently failed to account for disability-related factors, leading
                      to incorrect diagnoses and inappropriate treatment plans.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg bg-blue-50 border border-blue-100">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Solution</h3>
                    <p className="text-blue-700 leading-relaxed mb-3">
                      Dr. Tetsubayashi implemented a comprehensive healthcare AI transformation that included:
                    </p>
                    <ul className="space-y-2 text-blue-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500">•</span>
                        <span>Complete audit of AI diagnostic systems across all 847 facilities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500">•</span>
                        <span>Bias detection and correction in medical imaging algorithms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500">•</span>
                        <span>Training data enhancement with disability-inclusive medical records</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500">•</span>
                        <span>Clinical staff education on accessible AI diagnostics</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-lg bg-green-50 border border-green-100">
                    <h3 className="text-lg font-bold text-green-900 mb-2">Result</h3>
                    <p className="text-green-700 leading-relaxed mb-3">
                      The transformation delivered significant improvements within 20 months:
                    </p>
                    <ul className="space-y-2 text-green-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>$100M in annual cost savings from reduced misdiagnoses and malpractice claims</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>95% improvement in diagnostic accuracy for disabled patients</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Zero patient discrimination complaints filed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Industry recognition for healthcare equity leadership</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Healthcare</Badge>
                    <Badge variant="secondary">AI Diagnostics</Badge>
                    <Badge variant="secondary">Cost Reduction</Badge>
                    <Badge variant="secondary">Patient Outcomes</Badge>
                    <Badge variant="secondary">Bias Correction</Badge>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">$100M</div>
                    <div className="text-sm text-muted-foreground">Annual Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">95%</div>
                    <div className="text-sm text-muted-foreground">Accuracy Improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">847</div>
                    <div className="text-sm text-muted-foreground">Facilities</div>
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
                  <span>20-page comprehensive case study</span>
                  <span className="ml-auto">PDF Format • 2.6 MB</span>
                </div>
              </CardContent>
            </Card>

            {/* Download CTA */}
            <div className="mt-8 text-center">
              <ResourceGateModal
                resourceType="case-study"
                resourceDescription="Download the complete 20-page case study with detailed healthcare transformation insights, implementation timeline, and cost analysis"
                resourceTitle="Healthcare System Transformation Case Study"
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
