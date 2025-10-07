import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download } from "@/components/icons"
import Image from "next/image"
import { ResourceGateModal } from "@/components/resource-gate-modal"

export const metadata: Metadata = {
  title: "From Exclusion to Innovation: How Disability Drives Design Excellence",
  description:
    "When a Fortune 500 company discovered their AI product excluded 15% of potential users, they transformed their entire approach to innovation.",
}

export default function DisabilityDrivesDesignStory() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/resources/stories" className="inline-flex items-center text-white/90 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Stories
            </Link>
            <Badge className="mb-4 bg-white/20 text-white border-white/30" variant="outline">
              Innovation
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              From Exclusion to Innovation: How Disability Drives Design Excellence
            </h1>
            <div className="flex flex-wrap gap-4 text-white/90">
              <span>March 2024</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 mb-12 rounded-lg overflow-hidden">
              <Image
                src="/diverse-team-celebrating-inclusive-product-launch.jpg"
                alt="Diverse team celebrating"
                fill
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>The Discovery</h2>
              <p>
                When Sarah Chen joined as VP of Product at a Fortune 500 technology company, she inherited what appeared
                to be a successful AI-powered customer service platform. The product had strong adoption rates, positive
                reviews, and was generating significant revenue. But during her first month, she noticed something
                troubling in the user analytics.
              </p>
              <p>
                "We had a 15% drop-off rate that we couldn't explain," Sarah recalls. "Users would start the onboarding
                process but never complete it. We assumed it was a UX issue, but when we dug deeper, we discovered
                something far more significant."
              </p>

              <h2>The Problem</h2>
              <p>
                The platform's AI-powered voice interface and visual dashboard were completely inaccessible to users
                with disabilities. Screen readers couldn't parse the interface. Voice commands didn't work for users
                with speech differences. The color scheme was unusable for people with color blindness. The company was
                inadvertently excluding millions of potential users.
              </p>
              <p>
                "We weren't just losing 15% of our potential market," Sarah explains. "We were also exposing ourselves
                to significant legal liability. Several competitors had recently faced multi-million dollar lawsuits for
                accessibility violations."
              </p>

              <h2>The Transformation</h2>
              <p>
                Rather than treating accessibility as a compliance checkbox, Sarah's team decided to rebuild their
                entire product philosophy around inclusive design. They brought in Dr. Dédé Tetsubayashi to lead a
                comprehensive accessibility audit and transformation program.
              </p>
              <p>
                "Dr. Tetsubayashi didn't just identify problems," Sarah says. "She helped us understand that
                accessibility isn't a constraint—it's a catalyst for innovation. When you design for the edges, you
                improve the experience for everyone."
              </p>

              <h2>The Implementation</h2>
              <p>The transformation involved three key phases:</p>
              <ul>
                <li>
                  <strong>Comprehensive Audit:</strong> A full accessibility assessment across all product touchpoints,
                  identifying 127 specific issues ranging from critical to minor
                </li>
                <li>
                  <strong>Inclusive Redesign:</strong> Complete product overhaul with accessibility built into every
                  design decision, not added as an afterthought
                </li>
                <li>
                  <strong>Cultural Shift:</strong> Training programs for all product teams, establishing accessibility
                  as a core value rather than a compliance requirement
                </li>
              </ul>

              <h2>The Results</h2>
              <p>The impact exceeded all expectations:</p>
              <ul>
                <li>
                  <strong>40% increase in market reach:</strong> The accessible product attracted not just users with
                  disabilities, but also older adults, non-native speakers, and users in challenging environments
                </li>
                <li>
                  <strong>$75M in new revenue:</strong> Within 18 months, the expanded user base generated significant
                  new revenue streams
                </li>
                <li>
                  <strong>Industry recognition:</strong> The company won multiple awards for inclusive design and became
                  a case study in accessibility best practices
                </li>
                <li>
                  <strong>Competitive advantage:</strong> Accessibility became a key differentiator in sales
                  conversations, particularly with enterprise clients
                </li>
              </ul>

              <h2>The Lasting Impact</h2>
              <p>
                "What started as fixing a problem became our greatest competitive advantage," Sarah reflects. "We now
                lead our industry in accessibility, and it's opened doors we never imagined. Enterprise clients
                specifically choose us because they trust our commitment to inclusion."
              </p>
              <p>
                The company has since established an accessibility center of excellence, hired a Chief Accessibility
                Officer, and made inclusive design a core part of their brand identity. They've also open-sourced many
                of their accessibility tools, contributing back to the broader tech community.
              </p>

              <h2>Key Takeaways</h2>
              <ul>
                <li>Accessibility is not a constraint—it's a catalyst for innovation and market expansion</li>
                <li>Inclusive design improves the experience for all users, not just those with disabilities</li>
                <li>Early investment in accessibility prevents costly retrofits and legal liability</li>
                <li>Accessibility can become a powerful competitive differentiator and brand value</li>
              </ul>
            </div>

            <Card className="mt-12 p-8 bg-gradient-to-br from-purple-50 to-cyan-50">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Want to Learn More?</h3>
                <p className="text-muted-foreground mb-6">
                  Download our comprehensive guide on building accessible AI products that expand your market reach.
                </p>
                <ResourceGateModal
                  resourceTitle="Accessibility-First AI Product Development Guide"
                  resourceType="whitepaper"
                  trigger={
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                      <Download className="mr-2 h-5 w-5" />
                      Download Free Guide
                    </Button>
                  }
                />
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
