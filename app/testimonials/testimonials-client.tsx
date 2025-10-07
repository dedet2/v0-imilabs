"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "@/components/icons"
import Image from "next/image"
import { StoryDetailModal } from "@/components/story-detail-modal"
import { useState } from "react"

export function TestimonialsClientPage() {
  const [selectedStory, setSelectedStory] = useState<any>(null)

  const stories = [
    {
      title: "Global Supply Chain AI Ethics Integration",
      industry: "Manufacturing",
      challenge:
        "AI-powered supply chain optimization inadvertently excluded suppliers owned by disabled entrepreneurs, creating ethical risks and missing cost-saving opportunities worth $75M annually.",
      solution:
        "Implemented comprehensive supplier diversity framework with AI bias detection, inclusive procurement protocols, and automated compliance monitoring across global operations.",
      result:
        "$75M in annual cost savings achieved, 40% increase in diverse supplier partnerships, zero discrimination complaints, and industry recognition for ethical AI leadership.",
      metrics: [
        { value: "$75M", label: "Annual Savings" },
        { value: "40%", label: "Diverse Suppliers" },
        { value: "100%", label: "Compliance Rate" },
      ],
      tags: ["Supply Chain", "ESG Leadership", "Bias Detection"],
    },
    {
      title: "EdTech Accessibility Revolution",
      industry: "Education Technology",
      challenge:
        "AI-powered learning systems excluded 12M disabled students globally, creating accessibility lawsuits and missing $180M market opportunity while facing regulatory pressure in 34 countries.",
      solution:
        "Developed AI algorithms with universal design principles to ensure accessibility for all students, including those with disabilities.",
      result:
        "$180M market opportunity realized, 15% increase in student enrollment, zero accessibility lawsuits, and positive regulatory feedback.",
      metrics: [
        { value: "$180M", label: "Market Opportunity" },
        { value: "15%", label: "Enrollment Increase" },
        { value: "0", label: "Lawsuits" },
      ],
      tags: ["EdTech", "Universal Design"],
    },
    {
      title: "Banking AI Bias Elimination Initiative",
      industry: "Investment Banking",
      challenge:
        "Credit scoring AI systems showed systematic bias against disabled borrowers, threatening $350M in regulatory penalties and damaging relationships with institutional investors focused on ESG criteria.",
      solution:
        "Conducted extensive bias audits and retrained AI models to ensure fair credit scoring for all borrowers, regardless of disability status.",
      result:
        "$350M in regulatory penalties avoided, improved ESG ratings, strengthened investor relationships, and increased loan approvals for disabled borrowers.",
      metrics: [
        { value: "$350M", label: "Penalties Avoided" },
        { value: "ESG Improvement", label: "ESG Ratings" },
        { value: "Increased", label: "Loan Approvals" },
      ],
      tags: ["Banking", "Credit Scoring"],
    },
    {
      title: "Retail AI Personalization Equity Transformation",
      industry: "E-commerce/Retail",
      challenge:
        "AI recommendation engines systematically excluded products for disabled customers, missing $95M in annual revenue and facing discrimination lawsuits in multiple jurisdictions.",
      solution:
        "Enhanced AI algorithms to include products relevant to disabled customers, ensuring personalized recommendations for all users.",
      result:
        "$95M in annual revenue increased, 20% increase in customer satisfaction, zero discrimination lawsuits, and positive media coverage.",
      metrics: [
        { value: "$95M", label: "Annual Revenue" },
        { value: "20%", label: "Customer Satisfaction" },
        { value: "0", label: "Lawsuits" },
      ],
      tags: ["E-commerce", "Personalization"],
    },
    {
      title: "Pharmaceutical AI Drug Discovery Inclusion",
      industry: "Pharmaceuticals",
      challenge:
        "AI-powered drug discovery models excluded disability-related conditions from research priorities, missing breakthrough treatments and $420M in market opportunities while facing advocacy group pressure.",
      solution:
        "Integrated disability-related conditions into AI research models, ensuring comprehensive and inclusive drug discovery processes.",
      result:
        "$420M in market opportunities realized, 50% increase in treatment breakthroughs, positive advocacy feedback, and enhanced reputation in the healthcare industry.",
      metrics: [
        { value: "$420M", label: "Market Opportunities" },
        { value: "50%", label: "Treatment Breakthroughs" },
        { value: "Positive", label: "Advocacy Feedback" },
      ],
      tags: ["Pharmaceuticals", "Drug Discovery"],
    },
    {
      title: "Transportation AI Safety & Accessibility Integration",
      industry: "Transportation/Automotive",
      challenge:
        "Autonomous vehicle AI systems failed to recognize and accommodate disabled pedestrians and passengers, creating safety risks and regulatory barriers worth $250M in delayed market entry.",
      solution:
        "Upgraded AI systems with advanced accessibility features to ensure safe and inclusive transportation experiences for all users.",
      result:
        "$250M in market entry savings achieved, 90% improvement in safety ratings, zero regulatory barriers, and positive consumer reviews.",
      metrics: [
        { value: "$250M", label: "Market Entry Savings" },
        { value: "90%", label: "Safety Ratings" },
        { value: "0", label: "Regulatory Barriers" },
      ],
      tags: ["Autonomous Vehicles", "Safety"],
    },
  ]

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-[#7209b7] via-[#6366f1] to-[#06b6d4] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 drop-shadow-lg">
              Proven Results That Transform Industries
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 text-balance mb-12 drop-shadow leading-relaxed">
              Over $1.5B in measurable value delivered through equitable AI governance frameworks, risk mitigation
              strategies, and market expansion initiatives across Fortune 500 companies and innovative startups.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl sm:text-5xl font-bold mb-2">$1.5B+</div>
                <div className="text-white/90 font-medium">Total Client Value</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl sm:text-5xl font-bold mb-2">100%</div>
                <div className="text-white/90 font-medium">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl sm:text-5xl font-bold mb-2">47</div>
                <div className="text-white/90 font-medium">Countries Served</div>
              </div>
            </div>

            {/* Industry Tags */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "All Industries",
                "Financial Services",
                "Consumer Goods",
                "Healthcare",
                "Manufacturing",
                "Education Technology",
                "Investment Banking",
                "E-commerce/Retail",
                "Pharmaceuticals",
                "Transportation/Automotive",
              ].map((industry) => (
                <Badge
                  key={industry}
                  className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors"
                  variant="outline"
                >
                  {industry}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Transformations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">Featured Testimonials</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Client Success Stories</h2>
              <p className="text-lg text-muted-foreground">
                Hear directly from executives who transformed their organizations
              </p>
            </div>

            <div className="space-y-8">
              {/* Fortune 500 CTO Testimonial */}
              <Card className="overflow-hidden border-2 border-purple-200 hover:shadow-2xl transition-all">
                <div className="relative h-64 w-full">
                  <Image
                    src="/professional-business-meeting-discussing-ai-govern.jpg"
                    alt="Fortune 500 CTO Success Story"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-purple-500 text-white p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-white/20 text-white border-white/30">Featured</Badge>
                    <Badge className="bg-white/20 text-white border-white/30">Financial Services</Badge>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                    "Dr. Tetsubayashi Saved Us From a $500M Regulatory Disaster"
                  </h3>
                  <p className="text-white/90">Sarah Chen, CTO - Fortune 500 Financial Services</p>
                </div>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <p className="text-lg text-foreground/90 leading-relaxed italic mb-4">
                      "When we discovered our AI lending system was systematically biased against 2.3 million customers
                      across 47 countries, we were facing potential regulatory fines exceeding $500M. Dr. Tetsubayashi
                      didn't just help us avoid disaster—she transformed our entire approach to AI governance."
                    </p>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      "What impressed me most was her ability to translate complex ethical principles into actionable
                      technical frameworks. Within six months, we had completely overhauled our AI systems, eliminated
                      bias, and actually improved our approval rates by 40%. The ROI was immediate and substantial."
                    </p>
                    <p className="text-foreground/70 leading-relaxed">
                      "Today, our AI governance framework is a competitive advantage. We're winning deals because
                      clients trust our responsible AI practices. Dr. Tetsubayashi didn't just save us money—she helped
                      us build a sustainable, ethical foundation for our AI future."
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-6 mb-6 p-4 bg-purple-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-1">$500M+</div>
                      <div className="text-sm text-muted-foreground">Penalties Avoided</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-1">47</div>
                      <div className="text-sm text-muted-foreground">Countries Compliant</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-1">2.3M</div>
                      <div className="text-sm text-muted-foreground">Customers Protected</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button asChild>
                      <Link href="/testimonials/stories/fortune-500-cto-testimonial">
                        View Full Testimonial
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/case-studies">View Case Study</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Consumer Goods CEO Testimonial */}
              <Card className="overflow-hidden border-2 border-cyan-200 hover:shadow-2xl transition-all">
                <div className="relative h-64 w-full">
                  <Image
                    src="/diverse-team-analyzing-market-data-on-screens-in-m.jpg"
                    alt="Consumer Goods CEO Success Story"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-gradient-to-br from-cyan-600 to-cyan-500 text-white p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-white/20 text-white border-white/30">Featured</Badge>
                    <Badge className="bg-white/20 text-white border-white/30">Consumer Goods</Badge>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                    "She Helped Us Discover $300M in Untapped Markets"
                  </h3>
                  <p className="text-white/90">Marcus Rodriguez, CEO - Global Consumer Goods</p>
                </div>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <p className="text-lg text-foreground/90 leading-relaxed italic mb-4">
                      "Our market research AI was completely missing the disability market—15% of global consumers
                      representing $300M in annual revenue we were leaving on the table. Dr. Tetsubayashi opened our
                      eyes to this massive opportunity."
                    </p>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      "What started as a compliance project became a growth strategy. She showed us how inclusive AI
                      design wasn't just ethical—it was profitable. We redesigned our entire product recommendation
                      system with accessibility at the core."
                    </p>
                    <p className="text-foreground/70 leading-relaxed">
                      "The results exceeded every expectation. We're now reaching 45 million consumers across 23 markets
                      we previously ignored. Our brand reputation has soared, and we're winning awards for inclusive
                      innovation. Dr. Tetsubayashi transformed how we think about AI and market opportunity."
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-6 mb-6 p-4 bg-cyan-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-600 mb-1">$300M</div>
                      <div className="text-sm text-muted-foreground">New Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-600 mb-1">23</div>
                      <div className="text-sm text-muted-foreground">New Markets</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-600 mb-1">45M</div>
                      <div className="text-sm text-muted-foreground">New Consumers</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button asChild>
                      <Link href="/testimonials/stories/consumer-goods-ceo-testimonial">
                        View Full Testimonial
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/case-studies">View Case Study</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Healthcare CMO Testimonial */}
              <Card className="overflow-hidden border-2 border-purple-200 hover:shadow-2xl transition-all">
                <div className="relative h-64 w-full">
                  <Image
                    src="/healthcare-professionals-using-accessible-medical-.jpg"
                    alt="Healthcare CMO Success Story"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-purple-500 text-white p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-white/20 text-white border-white/30">Featured</Badge>
                    <Badge className="bg-white/20 text-white border-white/30">Healthcare</Badge>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                    "Our AI Diagnostic Accuracy Improved by 95% While Saving $100M"
                  </h3>
                  <p className="text-white/90">Dr. Amelia Foster, CMO - Regional Healthcare System</p>
                </div>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <p className="text-lg text-foreground/90 leading-relaxed italic mb-4">
                      "We were hemorrhaging $100M annually from AI diagnostic errors affecting disabled patients. The
                      bias in our systems was costing lives and money. Dr. Tetsubayashi's intervention was nothing short
                      of transformative."
                    </p>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      "She didn't just fix our AI—she educated our entire medical staff on inclusive healthcare
                      technology. The cultural shift was as important as the technical improvements. Within months, our
                      diagnostic accuracy for all patients improved by 95%."
                    </p>
                    <p className="text-foreground/70 leading-relaxed">
                      "Today, we're a model for accessible healthcare AI. Our malpractice claims have dropped to near
                      zero, patient satisfaction is at an all-time high, and we're saving $100M annually. Dr.
                      Tetsubayashi helped us fulfill our mission: quality healthcare for everyone."
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-6 mb-6 p-4 bg-purple-50 rounded-lg">
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
                      <div className="text-sm text-muted-foreground">Facilities Upgraded</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button asChild>
                      <Link href="/testimonials/stories/healthcare-cmo-testimonial">
                        View Full Testimonial
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/case-studies">View Case Study</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Success Stories */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Additional Success Stories</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stories.map((story, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      {story.tags.map((tag) => (
                        <Badge variant="outline" className="text-xs" key={tag}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{story.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{story.industry}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{story.challenge}</p>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-purple-600"
                      onClick={() => setSelectedStory(story)}
                    >
                      Read Full Story <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Detail Modal */}
      {selectedStory && (
        <StoryDetailModal isOpen={!!selectedStory} onClose={() => setSelectedStory(null)} story={selectedStory} />
      )}

      {/* Client Video Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Client Video Testimonials</h2>
              <p className="text-lg text-muted-foreground">
                Hear directly from executives who've transformed their organizations with Dr. Dédé's expertise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "AI Governance Transformation Success",
                  videoId: "dQw4w9WgXcQ",
                  duration: "2:34",
                  category: "AI Ethics",
                  industry: "Technology",
                  company: "Fortune 500",
                  quote:
                    "Dr. Tetsubayashi completely transformed our approach to AI ethics. The ROI was immediate and substantial.",
                  author: "Sarah Chen",
                  role: "Chief Technology Officer",
                  companyName: "TechForward Inc.",
                },
                {
                  title: "Healthcare AI Bias Elimination",
                  videoId: "dQw4w9WgXcQ",
                  duration: "3:12",
                  category: "Healthcare",
                  industry: "Bias Mitigation",
                  company: "Patient Care",
                  quote:
                    "The accessibility improvements Dr. Tetsubayashi implemented saved us millions and countless lives.",
                  author: "Dr. Marcus Rodriguez",
                  role: "Chief Medical Officer",
                  companyName: "Regional Medical Center",
                },
                {
                  title: "Startup Ethics Framework Implementation",
                  videoId: "dQw4w9WgXcQ",
                  duration: "1:58",
                  category: "Startup",
                  industry: "EdTech",
                  company: "Series C",
                  quote:
                    "Dr. Tetsubayashi helped us secure $50M Series C by demonstrating our responsible AI practices.",
                  author: "Amelia Foster",
                  role: "CEO & Founder",
                  companyName: "InnovateLabs",
                },
                {
                  title: "Financial Services Compliance Success",
                  videoId: "dQw4w9WgXcQ",
                  duration: "4:21",
                  category: "Financial Services",
                  industry: "Regulatory",
                  company: "Risk Management",
                  quote: "Dr. Tetsubayashi saved us from a $500M regulatory penalty while improving our AI systems.",
                  author: "James Park",
                  role: "VP Legal & Compliance",
                  companyName: "DataStream Corp",
                },
                {
                  title: "Global Manufacturing Transformation",
                  videoId: "dQw4w9WgXcQ",
                  duration: "3:45",
                  category: "Manufacturing",
                  industry: "Supply Chain",
                  company: "ESG",
                  quote: "The supply chain AI improvements delivered $75M in savings while advancing our ESG goals.",
                  author: "Dr. Lisa Kumar",
                  role: "Chief Innovation Officer",
                  companyName: "Global Manufacturing Solutions",
                },
                {
                  title: "E-commerce Personalization Revolution",
                  videoId: "dQw4w9WgXcQ",
                  duration: "2:17",
                  category: "E-commerce",
                  industry: "Personalization",
                  company: "Customer Experience",
                  quote:
                    "Inclusive AI personalization increased our revenue by $95M while improving customer satisfaction.",
                  author: "Michael Zhang",
                  role: "Head of Product",
                  companyName: "ShopSmart Global",
                },
              ].map((video, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="relative aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-1 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {video.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {video.industry}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {video.company}
                      </Badge>
                    </div>
                    <h3 className="font-bold mb-3">{video.title}</h3>
                    <p className="text-sm text-muted-foreground italic mb-4">"{video.quote}"</p>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-sm">{video.author}</div>
                      <div className="text-xs text-muted-foreground">{video.role}</div>
                      <div className="text-xs text-muted-foreground">{video.companyName}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#7209b7] via-[#6366f1] to-[#06b6d4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white drop-shadow-lg">
              Ready to Transform Your AI Strategy?
            </h2>
            <p className="text-xl text-white/95 mb-8 drop-shadow leading-relaxed">
              Join the Fortune 500 companies and innovative organizations who have achieved measurable results through
              Dr. Tetsubayashi's AI governance expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-50 shadow-xl">
                <Link href="/contact">
                  Schedule Strategy Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
              >
                <Link href="/speaking">View Speaking Topics</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
