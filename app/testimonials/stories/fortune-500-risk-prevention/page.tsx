import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download } from "@/components/icons"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Fortune 500 AI Risk Prevention - $500M Savings | Dr. Dédé Tetsubayashi",
  description:
    "Complete case study of how Dr. Dédé Tetsubayashi helped a Fortune 500 financial services company prevent $500M in regulatory penalties through AI governance.",
}

export default function Fortune500RiskPreventionPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#7209b7] via-[#6366f1] to-[#06b6d4] text-white">
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
              <Badge className="bg-white/20 text-white border-white/30">Risk Prevention</Badge>
              <Badge className="bg-white/20 text-white border-white/30">$500M Savings</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
              Fortune 500 AI Risk Prevention - $500M Savings
            </h1>
            <p className="text-xl text-white/90">Financial Services</p>
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
                  <div className="text-4xl font-bold text-purple-600 mb-2">$500M</div>
                  <div className="text-sm text-muted-foreground">Savings</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">47</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">2.3M</div>
                  <div className="text-sm text-muted-foreground">Customers Protected</div>
                </CardContent>
              </Card>
            </div>

            {/* Image */}
            <div className="relative h-96 w-full mb-12 rounded-xl overflow-hidden">
              <Image
                src="/professional-business-meeting-discussing-ai-govern.jpg"
                alt="Fortune 500 AI Risk Prevention"
                fill
                className="object-cover"
              />
            </div>

            {/* Challenge */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                A Fortune 500 financial services company faced massive AI system vulnerabilities across international
                operations that threatened regulatory compliance and exposed the organization to potential $500M+ in
                penalties, lawsuits, and operational losses.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Legacy AI models showed severe bias in lending decisions affecting 2.3M customers across 47 countries.
                The company was at risk of regulatory action from multiple jurisdictions and faced potential
                class-action lawsuits from affected customers.
              </p>
            </div>

            {/* Solution */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">The Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Dr. Tetsubayashi implemented a comprehensive AI governance framework that included:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground ml-4">
                <li>Complete audit of all AI systems across 47 countries</li>
                <li>Bias detection and mitigation protocols for lending algorithms</li>
                <li>Regulatory compliance framework aligned with international standards</li>
                <li>Staff training programs on ethical AI practices</li>
                <li>Ongoing monitoring and reporting systems</li>
              </ul>
            </div>

            {/* Results */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">The Results</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The implementation delivered measurable results within 18 months:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground ml-4">
                <li>$500M in regulatory penalties avoided</li>
                <li>Zero discrimination complaints filed</li>
                <li>2.3M customers protected from biased lending decisions</li>
                <li>100% compliance across all 47 countries</li>
                <li>Industry recognition for ethical AI leadership</li>
              </ul>
            </div>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-purple-50 to-cyan-50 border-purple-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your AI Strategy?</h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a consultation to discuss how Dr. Tetsubayashi can help your organization achieve similar
                  results.
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
