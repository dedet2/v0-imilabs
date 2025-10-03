import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Case Studies | incluu - Real-World AI Governance Impact",
  description:
    "Discover how incluu has helped organizations save $200M+ in compliance costs and unlock $500M+ in new markets through AI governance and tech equity.",
}

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">Real-World Impact</h1>
            <p className="text-xl sm:text-2xl text-foreground/70 text-balance mb-8">
              See how organizations have transformed their AI governance and unlocked new markets
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { value: "$200M+", label: "Compliance Costs Saved" },
                { value: "$500M+", label: "New Markets Unlocked" },
                { value: "$1.5B+", label: "Total Value Created" },
              ].map((stat, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-foreground/70">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-16">
            {[
              {
                icon: Shield,
                title: "Fortune 500 Financial Services",
                challenge:
                  "Facing potential $50M+ in GDPR fines due to non-compliant AI credit scoring system affecting 2M+ customers.",
                solution:
                  "Implemented comprehensive AI governance framework with bias detection, explainability protocols, and regulatory compliance monitoring.",
                results: [
                  "Avoided $50M+ in regulatory fines",
                  "Reduced bias in credit decisions by 73%",
                  "Expanded market reach by 18% through inclusive design",
                  "Achieved full GDPR and EU AI Act compliance",
                ],
                industry: "Financial Services",
                timeline: "6 months",
              },
              {
                icon: Users,
                title: "Global Healthcare Technology Company",
                challenge:
                  "AI diagnostic tool excluded 15% of potential users due to accessibility barriers, limiting market penetration.",
                solution:
                  "Redesigned AI interface with accessibility-first principles, implemented inclusive testing protocols, and trained development teams.",
                results: [
                  "Expanded addressable market by $120M annually",
                  "Increased user satisfaction scores by 42%",
                  "Achieved WCAG 2.2 AAA compliance",
                  "Reduced support costs by 28%",
                ],
                industry: "Healthcare Technology",
                timeline: "4 months",
              },
              {
                icon: TrendingUp,
                title: "Enterprise SaaS Platform",
                challenge:
                  "Rapid AI feature deployment without governance framework created compliance risks and customer trust issues.",
                solution:
                  "Established AI governance committee, implemented risk assessment protocols, and created compliance-by-design development process.",
                results: [
                  "Reduced compliance review time by 65%",
                  "Prevented 12 potential regulatory violations",
                  "Increased customer trust scores by 38%",
                  "Accelerated AI feature deployment by 40%",
                ],
                industry: "Enterprise SaaS",
                timeline: "8 months",
              },
            ].map((study, index) => (
              <Card key={index} className="p-8 lg:p-12 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                      <study.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {study.industry}
                      </span>
                      <span className="text-xs font-semibold px-3 py-1 bg-muted text-foreground/70 rounded-full">
                        {study.timeline}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">{study.title}</h3>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-foreground/90">The Challenge</h4>
                    <p className="text-foreground/70 leading-relaxed">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-foreground/90">Our Solution</h4>
                    <p className="text-foreground/70 leading-relaxed">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-foreground/90">Results</h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/80">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Organization?</h2>
            <p className="text-xl text-foreground/70 mb-8">
              Schedule a consultation to discuss how we can help you achieve similar results.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
