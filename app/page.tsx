import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Heart, Mic, CheckCircle2, TrendingUp, Users, Award } from "@/components/icons"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20">
                <Image
                  src="/professional-portrait-of-african-american-woman-te.jpg"
                  alt="Dr. Dédé Tetsubayashi - AI Governance Expert"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <Badge
                  className="mb-6 bg-white/20 text-white hover:bg-white/30 border-white/30 backdrop-blur-sm"
                  variant="outline"
                >
                  Founder & Principal Consultant
                </Badge>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance text-white">
                  Ethical AI Governance for Inclusive Innovation
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-4 text-balance">
                  Transforming tech equity into competitive advantage through strategic AI governance and disability
                  advocacy
                </p>
                <p className="text-lg text-white/80 mb-8 text-pretty leading-relaxed">
                  Delivering transformational tech equity and AI governance consulting, generating proven results:{" "}
                  <span className="font-semibold text-white">$200M+ in cost savings</span> and{" "}
                  <span className="font-semibold text-white">$500M+ in market expansion</span> for enterprise clients.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-gray-100 shadow-2xl animate-pulse hover:animate-none transition-all hover:scale-105"
                  >
                    <Link href="/contact">
                      Get Started Today
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent backdrop-blur-sm"
                  >
                    <Link href="/dr-dede">Explore Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <p className="text-lg text-muted-foreground font-semibold">
            Trusted by Fortune 500 and 100 companies and leading healthcare organizations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <Card className="text-center bg-white/80 backdrop-blur-sm border-purple-100">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-purple-600">$1B+</CardTitle>
              <CardDescription>Total Cost Savings</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center bg-white/80 backdrop-blur-sm border-cyan-100">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-cyan-600">$500M+</CardTitle>
              <CardDescription>Market Access Unlocked</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center bg-white/80 backdrop-blur-sm border-purple-100">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-purple-600">25+</CardTitle>
              <CardDescription>Years of Expertise</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center bg-white/80 backdrop-blur-sm border-cyan-100">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-cyan-600">95%</CardTitle>
              <CardDescription>Client Success Rate</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Strategic Solutions for Inclusive Innovation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Comprehensive expertise in governance, compliance, and ethical technology that drives measurable business
            results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Pillar 1: AI GRC / Advisory / Consulting */}
          <Card className="bg-white/90 backdrop-blur-sm border-purple-200 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-2xl mb-2">AI GRC & Advisory</CardTitle>
              <CardDescription className="text-base">
                Strategic AI governance consulting for enterprise compliance and ethical technology implementation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">AI Governance & Regulatory Compliance frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">Algorithmic Audit & Bias Detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">EU AI Act & Global Compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">Data Privacy Impact Assessments</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full border-purple-200 hover:bg-purple-50 bg-transparent">
                <Link href="/incluu">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Pillar 2: Disability Advocate + Luxury Retreats */}
          <Card className="bg-white/90 backdrop-blur-sm border-cyan-200 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-cyan-600" />
              </div>
              <CardTitle className="text-2xl mb-2">Disability Advocacy & Wellness</CardTitle>
              <CardDescription className="text-base">
                Inclusive technology workshops and luxury retreats for individuals, enterprises, and wellness
                organizations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">Executive Training & Workshops</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">Tailored leadership development programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">Team Development Programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">Organizational Change Management</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full border-cyan-200 hover:bg-cyan-50 bg-transparent">
                <Link href="/dr-dede">
                  Explore Retreats
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Pillar 3: Speaking, TEDx, Events Booking */}
          <Card className="bg-white/90 backdrop-blur-sm border-purple-200 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Mic className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-2xl mb-2">Speaking & Events</CardTitle>
              <CardDescription className="text-base">
                TEDx talks, keynote presentations, and thought leadership for conferences and corporate events
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">TEDx: "You've Been Coded Out"</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">Keynote Speaking Engagements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">Panel Discussions & Fireside Chats</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">Corporate Workshops & Training</span>
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-purple-200 hover:bg-purple-50 bg-transparent"
              >
                <Link href="/dr-dede#speaking">
                  Book Speaking
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Business Impact Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Proven Business Impact</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Real results from strategic AI governance and tech equity implementations across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                  <CardTitle className="text-2xl">$50M</CardTitle>
                </div>
                <CardDescription className="text-base font-semibold text-foreground">
                  AI Governance Framework Implementation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Challenge: AI framework implementation for 12 countries
                  <br />
                  Solution: Comprehensive governance framework with automated compliance monitoring
                  <br />
                  Result: $50M+ in product launches, 85% faster product launches
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-50 to-white border-cyan-100">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-8 w-8 text-cyan-600" />
                  <CardTitle className="text-2xl">$25M</CardTitle>
                </div>
                <CardDescription className="text-base font-semibold text-foreground">
                  Digital Equity in Healthcare AI
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Challenge: AI Research bias against minority populations
                  <br />
                  Solution: Inclusive algorithm design, bias detection, $25M cost savings
                  <br />
                  Result: 95% improvement in diagnostic accuracy, $25M cost savings
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-purple-50/50 to-cyan-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">What Clients Say</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Trusted by industry leaders to deliver transformative AI governance solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-purple-100 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 flex items-center justify-center text-white font-bold text-lg">
                    SM
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Mitchell</p>
                    <p className="text-sm text-muted-foreground">CTO, HealthTech Global</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "Dr. Dédé's expertise in AI governance transformed our approach to healthcare technology. Her insights
                  helped us achieve 95% improvement in diagnostic accuracy while ensuring ethical AI practices."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-cyan-100 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center text-white font-bold text-lg">
                    JC
                  </div>
                  <div>
                    <p className="font-semibold">James Chen</p>
                    <p className="text-sm text-muted-foreground">VP of Compliance, FinServe Inc</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "Working with Dr. Dédé on our AI compliance framework was game-changing. We saved $50M+ and
                  accelerated our product launches by 85%. Her strategic vision is unmatched."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-purple-100 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 flex items-center justify-center text-white font-bold text-lg">
                    MP
                  </div>
                  <div>
                    <p className="font-semibold">Maria Patel</p>
                    <p className="text-sm text-muted-foreground">CEO, TechEquity Solutions</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "Dr. Dédé's disability advocacy and tech equity workshops revolutionized our organizational culture.
                  Her luxury retreats provided our leadership team with invaluable insights and actionable strategies."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="bg-gradient-to-br from-purple-600 to-cyan-600 text-white border-0 max-w-4xl mx-auto">
          <CardContent className="p-12 text-center">
            <Award className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Transform Your AI Strategy?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-pretty leading-relaxed">
              Let's discuss how ethical, socially responsible tech isn't optional, it's essential for sustainable
              business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/dr-dede">View Full Bio & Credentials</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
