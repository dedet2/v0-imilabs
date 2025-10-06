import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play } from "@/components/icons"
import Image from "next/image"
import { ResourceGateModal } from "@/components/resource-gate-modal"

export const metadata: Metadata = {
  title: "Client Testimonials | What Our Clients Say",
  description:
    "Read testimonials from Fortune 500 companies and organizations that have transformed their AI governance with Dr. Dédé Tetsubayashi.",
}

export default function TestimonialsPage() {
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
              <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">Featured</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Featured Transformations</h2>
            </div>

            <div className="space-y-8">
              {/* Fortune 500 AI Risk Prevention */}
              <Card className="overflow-hidden border-2 border-purple-200 hover:shadow-2xl transition-all">
                <div className="relative h-64 w-full">
                  <Image
                    src="/professional-business-meeting-discussing-ai-govern.jpg"
                    alt="Fortune 500 AI Risk Prevention"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-purple-500 text-white p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-white/20 text-white border-white/30">Featured</Badge>
                    <Badge className="bg-white/20 text-white border-white/30">Risk Prevention</Badge>
                    <Badge className="bg-white/20 text-white border-white/30">$500M Savings</Badge>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                    Fortune 500 AI Risk Prevention - $500M Savings
                  </h3>
                  <p className="text-white/90">Financial Services</p>
                </div>
                <CardContent className="p-8">
                  <div className="grid sm:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 mb-1">$500M</div>
                      <div className="text-sm text-muted-foreground">Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 mb-1">47</div>
                      <div className="text-sm text-muted-foreground">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 mb-1">2.3M</div>
                      <div className="text-sm text-muted-foreground">Customers Protected</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Massive AI system vulnerabilities across international operations threatened regulatory compliance
                    and exposed the organization to potential $500M+ in penalties, lawsuits, and operational losses.
                    Legacy AI models showed severe bias in lending decisions affecting 2.3M customers.
                  </p>
                  <ResourceGateModal
                    resourceTitle="Fortune 500 AI Risk Prevention - Full Case Study"
                    resourceType="case-study"
                    resourceDescription="Complete analysis of $500M savings through AI risk prevention strategies"
                  >
                    <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                      View Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </ResourceGateModal>
                </CardContent>
              </Card>

              {/* Emerging Markets AI Discovery */}
              <Card className="overflow-hidden border-2 border-cyan-200 hover:shadow-2xl transition-all">
                <div className="relative h-64 w-full">
                  <Image
                    src="/diverse-team-analyzing-market-data-on-screens-in-m.jpg"
                    alt="Emerging Markets AI Discovery"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-gradient-to-br from-cyan-600 to-cyan-500 text-white p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-white/20 text-white border-white/30">Featured</Badge>
                    <Badge className="bg-white/20 text-white border-white/30">Market Discovery</Badge>
                    <Badge className="bg-white/20 text-white border-white/30">$300M Revenue</Badge>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                    Emerging Markets AI Discovery - $300M Opportunity
                  </h3>
                  <p className="text-white/90">Consumer Goods</p>
                </div>
                <CardContent className="p-8">
                  <div className="grid sm:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-cyan-600 mb-1">$300M</div>
                      <div className="text-sm text-muted-foreground">Opportunity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-cyan-600 mb-1">23</div>
                      <div className="text-sm text-muted-foreground">Markets</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-cyan-600 mb-1">45M</div>
                      <div className="text-sm text-muted-foreground">Consumers</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Traditional market analysis missed accessibility needs in emerging markets, leaving $300M+ in
                    revenue untapped. AI-powered market research tools excluded disabled consumers, representing 15% of
                    global purchasing power.
                  </p>
                  <ResourceGateModal
                    resourceTitle="Emerging Markets AI Discovery - Full Case Study"
                    resourceType="case-study"
                    resourceDescription="Detailed analysis of $300M market opportunity through inclusive AI design"
                  >
                    <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                      View Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </ResourceGateModal>
                </CardContent>
              </Card>

              {/* Healthcare System Transformation */}
              <Card className="overflow-hidden border-2 border-purple-200 hover:shadow-2xl transition-all">
                <div className="relative h-64 w-full">
                  <Image
                    src="/healthcare-professionals-using-accessible-medical-.jpg"
                    alt="Healthcare System Transformation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-purple-500 text-white p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-white/20 text-white border-white/30">Featured</Badge>
                    <Badge className="bg-white/20 text-white border-white/30">Healthcare Transformation</Badge>
                    <Badge className="bg-white/20 text-white border-white/30">$100M Savings</Badge>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                    Healthcare System Transformation - $100M Cost Reduction
                  </h3>
                  <p className="text-white/90">Healthcare</p>
                </div>
                <CardContent className="p-8">
                  <div className="grid sm:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 mb-1">$100M</div>
                      <div className="text-sm text-muted-foreground">Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 mb-1">95%</div>
                      <div className="text-sm text-muted-foreground">Improvement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 mb-1">847</div>
                      <div className="text-sm text-muted-foreground">Facilities</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    AI diagnostic systems showed persistent bias against disabled patients, resulting in $100M+ annual
                    costs from misdiagnoses, extended treatments, and malpractice claims. Patient outcomes disparities
                    reached crisis levels.
                  </p>
                  <ResourceGateModal
                    resourceTitle="Healthcare System Transformation - Full Case Study"
                    resourceType="case-study"
                    resourceDescription="Complete case study of $100M cost reduction through accessible AI systems"
                  >
                    <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                      View Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </ResourceGateModal>
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
              {/* Global Supply Chain */}
              <Card className="hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      Supply Chain
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      ESG Leadership
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Global Supply Chain AI Ethics Integration</h3>
                  <p className="text-sm text-muted-foreground mb-3">Manufacturing</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    AI-powered supply chain optimization inadvertently excluded suppliers owned by disabled
                    entrepreneurs, creating ethical risks and missing cost-saving opportunities worth $75M annually.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-purple-600">
                    Learn More <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>

              {/* EdTech Accessibility */}
              <Card className="hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      EdTech
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Universal Design
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold mb-2">EdTech Accessibility Revolution</h3>
                  <p className="text-sm text-muted-foreground mb-3">Education Technology</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    AI-powered learning systems excluded 12M disabled students globally, creating accessibility lawsuits
                    and missing $180M market opportunity while facing regulatory pressure in 34 countries.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-purple-600">
                    Learn More <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>

              {/* Banking AI Bias */}
              <Card className="hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      Banking
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Credit Scoring
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Banking AI Bias Elimination Initiative</h3>
                  <p className="text-sm text-muted-foreground mb-3">Investment Banking</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Credit scoring AI systems showed systematic bias against disabled borrowers, threatening $350M in
                    regulatory penalties and damaging relationships with institutional investors focused on ESG
                    criteria.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-purple-600">
                    Learn More <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>

              {/* Retail AI Personalization */}
              <Card className="hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      E-commerce
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Personalization
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Retail AI Personalization Equity Transformation</h3>
                  <p className="text-sm text-muted-foreground mb-3">E-commerce/Retail</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    AI recommendation engines systematically excluded products for disabled customers, missing $95M in
                    annual revenue and facing discrimination lawsuits in multiple jurisdictions.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-purple-600">
                    Learn More <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>

              {/* Pharmaceutical AI */}
              <Card className="hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      Pharmaceuticals
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Drug Discovery
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Pharmaceutical AI Drug Discovery Inclusion</h3>
                  <p className="text-sm text-muted-foreground mb-3">Pharmaceuticals</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    AI-powered drug discovery models excluded disability-related conditions from research priorities,
                    missing breakthrough treatments and $420M in market opportunities while facing advocacy group
                    pressure.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-purple-600">
                    Learn More <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>

              {/* Transportation AI */}
              <Card className="hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      Autonomous Vehicles
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Safety
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Transportation AI Safety & Accessibility Integration</h3>
                  <p className="text-sm text-muted-foreground mb-3">Transportation/Automotive</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Autonomous vehicle AI systems failed to recognize and accommodate disabled pedestrians and
                    passengers, creating safety risks and regulatory barriers worth $250M in delayed market entry.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-purple-600">
                    Learn More <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

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
                  <div className="relative aspect-video bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center cursor-pointer">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <Play className="h-16 w-16 text-white relative z-10 group-hover:scale-110 transition-transform" />
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-white/90 text-purple-700 text-xs">Watch Testimonial</Badge>
                    </div>
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
