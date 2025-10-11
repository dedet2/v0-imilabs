import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "@/components/icons"

export const metadata: Metadata = {
  title: "Fortune 500 CTO Testimonial | Dr. Dédé Tetsubayashi",
  description:
    "How Dr. Tetsubayashi helped a Fortune 500 financial services company avoid $500M in regulatory fines through AI governance transformation.",
}

export default function Fortune500CTOTestimonialPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#7209b7] via-[#6366f1] to-[#06b6d4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="text-white hover:bg-white/10 mb-8">
              <Link href="/testimonials">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Testimonials
              </Link>
            </Button>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              "Dr. Tetsubayashi Saved Us From a $500M Regulatory Disaster"
            </h1>
            <p className="text-xl text-white/90 mb-4 drop-shadow">Sarah Chen, Chief Technology Officer</p>
            <p className="text-lg text-white/80 drop-shadow">Fortune 500 Financial Services Company</p>
          </div>
        </div>
      </section>

      {/* Full Testimonial */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-purple-700 mb-4">The Crisis</h2>
                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    "When I joined as CTO, I inherited a ticking time bomb. Our AI-powered lending system, deployed
                    across 47 countries and serving 2.3 million customers, had a fatal flaw: systematic bias against
                    protected classes. We were facing potential regulatory fines exceeding $500 million, class-action
                    lawsuits, and complete loss of customer trust."
                  </p>
                  <p>
                    "The board gave me six months to fix it or shut down our AI operations entirely. That would have
                    meant laying off 300 engineers and abandoning our digital transformation strategy. The pressure was
                    immense."
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-purple-700 mb-4">Finding Dr. Tetsubayashi</h2>
                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    "I'd heard Dr. Tetsubayashi speak at a conference about AI governance, and her approach resonated
                    immediately. She didn't just talk about ethics in abstract terms—she provided concrete, actionable
                    frameworks that could be implemented in real-world systems."
                  </p>
                  <p>
                    "Within 48 hours of our first call, she had assembled a team and was on-site conducting a
                    comprehensive audit of our AI systems. Her technical depth was impressive, but what really stood out
                    was her ability to communicate complex ethical principles to our engineering teams in ways they
                    could immediately apply."
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-purple-700 mb-4">The Transformation</h2>
                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    "Dr. Tetsubayashi's approach was methodical and comprehensive. She didn't just patch our existing
                    systems—she helped us build a sustainable AI governance framework from the ground up. We implemented
                    bias detection protocols, explainability requirements, and continuous monitoring systems."
                  </p>
                  <p>
                    "But the technical fixes were only part of the solution. She also trained our entire
                    organization—from the board to individual contributors—on responsible AI practices. She helped us
                    understand that AI governance wasn't a compliance burden; it was a competitive advantage."
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-purple-700 mb-4">The Results</h2>
                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    "Within six months, we had completely transformed our AI operations. We eliminated bias, achieved
                    full regulatory compliance across all jurisdictions, and actually improved our approval rates by
                    40%. The ROI was immediate and substantial."
                  </p>
                  <p>
                    "But the long-term impact has been even more significant. Today, our AI governance framework is a
                    key differentiator in sales conversations. Enterprise clients specifically choose us because they
                    trust our responsible AI practices. We're winning deals we would have lost before."
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-purple-700 mb-4">The Lasting Impact</h2>
                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    "Dr. Tetsubayashi didn't just save us from a $500M disaster—she helped us build a sustainable,
                    ethical foundation for our AI future. Our AI governance committee, which she helped establish, now
                    reviews every AI project before deployment. We've prevented dozens of potential issues before they
                    became problems."
                  </p>
                  <p>
                    "If you're facing AI governance challenges, don't wait until you're in crisis mode. Dr.
                    Tetsubayashi's expertise can help you build responsible AI systems from the start. The investment
                    pays for itself many times over."
                  </p>
                </div>
              </div>
            </div>

            <Card className="mt-12 p-8 bg-purple-50 border-purple-200">
              <h3 className="text-2xl font-bold mb-6">Key Results</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">$500M+</div>
                  <div className="text-sm text-muted-foreground">Regulatory Penalties Avoided</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">47</div>
                  <div className="text-sm text-muted-foreground">Countries Achieved Compliance</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
                  <div className="text-sm text-muted-foreground">Improvement in Approval Rates</div>
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
