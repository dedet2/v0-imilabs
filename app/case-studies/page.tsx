import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, TrendingUp, Shield, Users } from "@/components/icons"
import { ResourceGateModal } from "@/components/resource-gate-modal"

export const metadata: Metadata = {
  title: "Case Studies | incluu - Real-World AI Governance Impact",
  description:
    "Discover how incluu has helped organizations save $200M+ in compliance costs and unlock $500M+ in new markets through AI governance and tech equity.",
  alternates: {
    canonical: "https://dr-dede.com/case-studies",
  },
}

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-[#7209b7] via-[#6366f1] to-[#06b6d4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
              <Shield className="h-4 w-4" />
              Proven Results
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 text-white drop-shadow-lg">
              Enhanced Case Study Showcase
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 text-balance mb-8 drop-shadow">
              Deep dive into real-world AI governance transformations with detailed ROI analysis, implementation
              timelines, and video testimonials from satisfied clients
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="p-6 text-center bg-gradient-to-br from-purple-500 to-purple-300 border-purple-400 text-white shadow-lg">
                <div className="text-4xl font-bold mb-2 drop-shadow">$1.5B+</div>
                <div className="text-sm font-semibold mb-1 drop-shadow">Total Client Value Delivered</div>
                <div className="text-xs text-white/90">Across all engagements</div>
              </Card>

              <Card className="p-6 text-center bg-gradient-to-br from-cyan-500 to-cyan-300 border-cyan-400 text-white shadow-lg">
                <div className="text-4xl font-bold mb-2 drop-shadow">100%</div>
                <div className="text-sm font-semibold mb-1 drop-shadow">Project Success Rate</div>
                <div className="text-xs text-white/90">Every engagement delivered</div>
              </Card>

              <Card className="p-6 text-center bg-gradient-to-br from-purple-500 to-purple-300 border-purple-400 text-white shadow-lg">
                <div className="text-4xl font-bold mb-2 drop-shadow">47</div>
                <div className="text-sm font-semibold mb-1 drop-shadow">Countries Served</div>
                <div className="text-xs text-white/90">Global impact</div>
              </Card>

              <Card className="p-6 text-center bg-gradient-to-br from-cyan-500 to-cyan-300 border-cyan-400 text-white shadow-lg">
                <div className="text-4xl font-bold mb-2 drop-shadow">18 Mo</div>
                <div className="text-sm font-semibold mb-1 drop-shadow">Average ROI Timeline</div>
                <div className="text-xs text-white/90">Rapid value delivery</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies with Images */}
      <section className="py-20 bg-gradient-to-br from-purple-500/30 via-white to-cyan-400/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Success Stories</h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Real-world transformations with measurable business impact
              </p>
            </div>

            <div className="space-y-12">
              {/* Fortune 500 Case Study */}
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative aspect-video lg:aspect-auto">
                    <img
                      src="/professional-business-meeting-discussing-ai-govern.jpg"
                      alt="Fortune 500 AI Governance Transformation"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
                        AI Governance
                      </span>
                      <span className="px-3 py-1 bg-cyan-600 text-white text-xs font-semibold rounded-full">
                        Global Scale
                      </span>
                      <span className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
                        Regulatory Compliance
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-purple-600">Technology</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">Fortune 500 AI Governance Transformation</h3>
                    <p className="text-foreground/70 leading-relaxed mb-6">
                      Implemented comprehensive AI governance framework across 50+ countries, preventing $50M+ in
                      regulatory fines while accelerating product deployment by 40%.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-3xl font-bold text-purple-600 mb-1">$500M+</div>
                        <div className="text-sm text-foreground/70">Penalties Avoided</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-cyan-600 mb-1">47</div>
                        <div className="text-sm text-foreground/70">Countries Compliant</div>
                      </div>
                    </div>
                    <ResourceGateModal
                      resourceTitle="Fortune 500 AI Governance Transformation - Full Analysis"
                      resourceType="case-study"
                      resourceDescription="Complete case study with implementation details, ROI analysis, and lessons learned"
                    >
                      <Button
                        className="min-w-[200px] bg-purple-600 hover:bg-purple-700 flex items-center justify-center gap-2 flex-nowrap"
                        asChild
                      >
                        <Link
                          href="/testimonials/stories/fortune-500-cto-testimonial"
                          className="flex items-center gap-2 flex-nowrap"
                        >
                          <span className="whitespace-nowrap min-w-[140px]">View Full Analysis</span>
                          <ArrowRight className="h-4 w-4 flex-shrink-0" />
                        </Link>
                      </Button>
                    </ResourceGateModal>
                  </div>
                </div>
              </Card>

              {/* Healthcare Case Study */}
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative aspect-video lg:aspect-auto order-2 lg:order-1">
                    <div className="p-8 lg:p-12 h-full flex flex-col justify-center">
                      <div className="mb-4">
                        <span className="text-sm font-semibold text-cyan-600">Healthcare</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-4">Equitable AI for Healthcare Accessibility</h3>
                      <p className="text-foreground/70 leading-relaxed mb-6">
                        Redesigned diagnostic AI system with accessibility-first principles, expanding market reach by
                        $120M annually while improving diagnostic accuracy for underserved populations.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <div className="text-3xl font-bold text-cyan-600 mb-1">$100M</div>
                          <div className="text-sm text-foreground/70">Annual Savings</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-purple-600 mb-1">95%</div>
                          <div className="text-sm text-foreground/70">Diagnostic Accuracy</div>
                        </div>
                      </div>
                      <ResourceGateModal
                        resourceTitle="Healthcare AI Accessibility - Full Analysis"
                        resourceType="case-study"
                        resourceDescription="Detailed case study with accessibility improvements and market expansion results"
                      >
                        <Button
                          className="min-w-[200px] bg-cyan-600 hover:bg-cyan-700 flex items-center justify-center gap-2 flex-nowrap"
                          asChild
                        >
                          <Link
                            href="/testimonials/stories/healthcare-cmo-testimonial"
                            className="flex items-center gap-2 flex-nowrap"
                          >
                            <span className="whitespace-nowrap min-w-[140px]">View Full Analysis</span>
                            <ArrowRight className="h-4 w-4 flex-shrink-0" />
                          </Link>
                        </Button>
                      </ResourceGateModal>
                    </div>
                  </div>
                  <div className="relative aspect-video lg:aspect-auto order-1 lg:order-2">
                    <img
                      src="/diverse-healthcare-professionals-using-accessible-.jpg"
                      alt="Healthcare AI Accessibility"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
                      <span className="px-3 py-1 bg-cyan-600 text-white text-xs font-semibold rounded-full">
                        Healthcare AI
                      </span>
                      <span className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
                        Accessibility
                      </span>
                      <span className="px-3 py-1 bg-cyan-600 text-white text-xs font-semibold rounded-full">
                        Bias Mitigation
                      </span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Startup Case Study */}
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative aspect-video lg:aspect-auto">
                    <img
                      src="/startup-team-celebrating-funding-success-with-ethi.jpg"
                      alt="Startup AI Ethics Framework"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
                        Startup
                      </span>
                      <span className="px-3 py-1 bg-cyan-600 text-white text-xs font-semibold rounded-full">
                        EdTech
                      </span>
                      <span className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
                        Ethics Framework
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-purple-600">Education Technology</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">Startup AI Ethics Framework</h3>
                    <p className="text-foreground/70 leading-relaxed mb-6">
                      Built ethical AI foundation from day one, helping EdTech startup secure $50M Series B funding with
                      responsible AI practices as key differentiator.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-3xl font-bold text-purple-600 mb-1">$300M</div>
                        <div className="text-sm text-foreground/70">New Revenue</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-cyan-600 mb-1">23</div>
                        <div className="text-sm text-foreground/70">New Markets</div>
                      </div>
                    </div>
                    <ResourceGateModal
                      resourceTitle="Startup AI Ethics Framework - Full Analysis"
                      resourceType="case-study"
                      resourceDescription="Complete case study showing how ethical AI practices secured Series B funding"
                    >
                      <Button
                        className="min-w-[200px] bg-purple-600 hover:bg-purple-700 flex items-center justify-center gap-2 flex-nowrap"
                        asChild
                      >
                        <Link
                          href="/testimonials/stories/consumer-goods-ceo-testimonial"
                          className="flex items-center gap-2 flex-nowrap"
                        >
                          <span className="whitespace-nowrap min-w-[140px]">View Full Analysis</span>
                          <ArrowRight className="h-4 w-4 flex-shrink-0" />
                        </Link>
                      </Button>
                    </ResourceGateModal>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Organizations Choose Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Organizations Choose incluu</h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Measurable results that drive competitive advantage and sustainable growth
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="p-6 text-center border-purple-200">
                <div className="text-4xl font-bold text-purple-600 mb-2">$50M+</div>
                <div className="text-sm font-semibold mb-3">Funding Secured</div>
                <p className="text-xs text-foreground/70">
                  In funding secured by clients citing responsible AI practices
                </p>
              </Card>

              <Card className="p-6 text-center border-cyan-200">
                <div className="text-4xl font-bold text-cyan-600 mb-2">85%</div>
                <div className="text-sm font-semibold mb-3">Reduction in Review Time</div>
                <p className="text-xs text-foreground/70">
                  Reduction in compliance review time for regulated industries
                </p>
              </Card>

              <Card className="p-6 text-center border-purple-200">
                <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-sm font-semibold mb-3">Compliance Success</div>
                <p className="text-xs text-foreground/70">
                  Regulatory compliance success rate across all jurisdictions
                </p>
              </Card>

              <Card className="p-6 text-center border-cyan-200">
                <div className="text-4xl font-bold text-cyan-600 mb-2">40%</div>
                <div className="text-sm font-semibold mb-3">Faster Approvals</div>
                <p className="text-xs text-foreground/70">
                  Faster AI project approval times with comprehensive governance
                </p>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 border-purple-200">
                <Shield className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Risk Mitigation</h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                  Proactive identification and mitigation of AI-related risks before they impact your business. Our
                  frameworks have helped organizations avoid costly regulatory penalties and reputational damage.
                </p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Comprehensive risk assessment methodologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Regulatory compliance strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Crisis prevention and response planning</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-cyan-200">
                <TrendingUp className="h-12 w-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Competitive Advantage</h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                  Transform ethical AI from a compliance burden into a strategic differentiator. Organizations with
                  mature AI governance attract top talent, secure funding, and win more business.
                </p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Market differentiation through ethical leadership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Enhanced brand reputation and trust</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Access to ESG-conscious investment capital</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-purple-200">
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Market Expansion</h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                  Inclusive AI design opens new markets and customer segments. The disability market alone represents
                  over $13 trillion in annual disposable income globally.
                </p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Access to underserved market segments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Improved product usability for all users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Innovation opportunities through inclusive design</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Case Studies */}
      <section className="py-20 bg-gradient-to-br from-purple-500/30 via-white to-cyan-400/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Detailed Case Studies</h2>
              <p className="text-lg text-foreground/70">In-depth analysis of transformation journeys</p>
            </div>

            <div className="space-y-16">
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
                  image: "/financial-services-team-reviewing-ai-compliance-da.jpg",
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
                  image: "/healthcare-professionals-using-accessible-medical-.jpg",
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
                  image: "/enterprise-software-team-implementing-ai-governanc.jpg",
                },
              ].map((study, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="grid lg:grid-cols-5 gap-0">
                    <div className="lg:col-span-2 relative aspect-video lg:aspect-auto">
                      <img
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="lg:col-span-3 p-8 lg:p-12">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                            <study.icon className="h-6 w-6 text-white" />
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
                          <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
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
                          <ul className="grid gap-3">
                            {study.results.map((result, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-foreground/80">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-6">
                <Users className="h-4 w-4" />
                Client Testimonials
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">What People Are Saying</h2>
              <p className="text-lg text-foreground/70">Feedback from speaking engagements and consulting clients</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-purple-200 hover:shadow-lg transition-shadow">
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                      <img
                        src="/female-cto-headshot.png"
                        alt="Sarah Chen"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">Sarah Chen</div>
                      <div className="text-sm text-foreground/70">CTO, TechForward Inc.</div>
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed italic">
                    "incluu's keynote completely transformed how our engineering team approaches AI ethics. Their
                    frameworks are practical, actionable, and deeply rooted in real-world impact."
                  </p>
                </div>
              </Card>

              <Card className="p-8 border-cyan-200 hover:shadow-lg transition-shadow">
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                      <img
                        src="/male-director-headshot.png"
                        alt="Marcus Rodriguez"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">Marcus Rodriguez</div>
                      <div className="text-sm text-foreground/70">Director of Product, InnovateLabs</div>
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed italic">
                    "The accessibility workshop was eye-opening. We implemented incluu's recommendations and saw
                    immediate improvements in our product's inclusive design."
                  </p>
                </div>
              </Card>

              <Card className="p-8 border-purple-200 hover:shadow-lg transition-shadow">
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                      <img
                        src="/professional-headshot-of-female-conference-chair.jpg"
                        alt="Dr. Amelia Foster"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">Dr. Amelia Foster</div>
                      <div className="text-sm text-foreground/70">Conference Chair, AI Ethics Summit 2024</div>
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed italic">
                    "Brilliant, insightful, and incredibly engaging. incluu's presentation on AI governance received the
                    highest evaluation scores in our conference's history."
                  </p>
                </div>
              </Card>

              <Card className="p-8 border-cyan-200 hover:shadow-lg transition-shadow">
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                      <img
                        src="/male-vp-headshot.png"
                        alt="James Park"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">James Park</div>
                      <div className="text-sm text-foreground/70">VP of Legal & Compliance, DataStream Corp</div>
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed italic">
                    "Working with incluu on our AI governance strategy was transformative. Their interdisciplinary
                    approach helped us navigate complex regulatory requirements while staying true to our values."
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#7209b7] via-[#6366f1] to-[#06b6d4] shadow-2xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 drop-shadow-lg">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl mb-8 text-white/95 drop-shadow">
              Schedule a consultation to discuss how we can help you achieve similar results.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-gray-100 shadow-xl"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
