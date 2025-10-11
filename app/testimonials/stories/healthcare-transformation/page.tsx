import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download } from "@/components/icons"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Healthcare System Transformation - $100M Cost Reduction | Dr. Dédé Tetsubayashi",
  description:
    "Complete case study of how Dr. Tetsubayashi helped a healthcare system reduce costs by $100M through accessible AI diagnostic systems.",
}

export default function HealthcareTransformationPage() {
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
              <Badge className="bg-white/20 text-white border-white/30">Healthcare Transformation</Badge>
              <Badge className="bg-white/20 text-white border-white/30">$100M Savings</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
              Healthcare System Transformation - $100M Cost Reduction
            </h1>
            <p className="text-xl text-white/90">Healthcare</p>
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
                  <div className="text-4xl font-bold text-purple-600 mb-2">$100M</div>
                  <div className="text-sm text-muted-foreground">Savings</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Improvement</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">847</div>
                  <div className="text-sm text-muted-foreground">Facilities</div>
                </CardContent>
              </Card>
            </div>

            {/* Image */}
            <div className="relative h-96 w-full mb-12 rounded-xl overflow-hidden">
              <Image
                src="/healthcare-professionals-using-accessible-medical-.jpg"
                alt="Healthcare System Transformation"
                fill
                className="object-cover"
              />
            </div>

            {/* Challenge */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                AI diagnostic systems showed persistent bias against disabled patients, resulting in $100M+ annual costs
                from misdiagnoses, extended treatments, and malpractice claims. Patient outcomes disparities reached
                crisis levels across 847 facilities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The healthcare system faced mounting pressure from regulators, advocacy groups, and patients as
                AI-powered diagnostic tools consistently failed to account for disability-related factors, leading to
                incorrect diagnoses and inappropriate treatment plans.
              </p>
            </div>

            {/* Solution */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">The Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Dr. Tetsubayashi implemented a comprehensive healthcare AI transformation that included:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground ml-4">
                <li>Complete audit of AI diagnostic systems across all 847 facilities</li>
                <li>Bias detection and correction in medical imaging algorithms</li>
                <li>Training data enhancement with disability-inclusive medical records</li>
                <li>Clinical staff education on accessible AI diagnostics</li>
                <li>Patient feedback integration and continuous improvement protocols</li>
              </ul>
            </div>

            {/* Results */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">The Results</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The transformation delivered significant improvements within 20 months:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground ml-4">
                <li>$100M in annual cost savings from reduced misdiagnoses and malpractice claims</li>
                <li>95% improvement in diagnostic accuracy for disabled patients</li>
                <li>Zero patient discrimination complaints filed</li>
                <li>Industry recognition for healthcare equity leadership</li>
                <li>Improved patient satisfaction scores across all facilities</li>
              </ul>
            </div>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-purple-50 to-cyan-50 border-purple-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Healthcare AI?</h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a consultation to discuss how Dr. Tetsubayashi can help your organization improve patient
                  outcomes and reduce costs.
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
