import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Heart,
  Lightbulb,
  Mic,
  Mountain,
  Play,
  Sparkles,
  Users,
  Shield,
  CheckCircle2,
  ArrowRight,
} from "@/components/icons"

export const metadata: Metadata = {
  title: "Dr. Dédé Tetsubayashi | AI Governance Expert & TEDx Speaker",
  description:
    "Meet Dr. Dédé Tetsubayashi - AI Governance Expert, Disability Advocate, and TEDx Speaker. 25+ years transforming tech equity.",
  openGraph: {
    title: "Dr. Dédé Tetsubayashi | AI Governance Expert & TEDx Speaker",
    description: "AI Governance Expert, Disability Advocate, and TEDx Speaker",
  },
}

export default function DrDedePage() {
  return (
    <div className="relative">
      <div id="top" className="absolute top-0 left-0 w-full h-0" />
      {/* Hero Section - Based on external site design */}
      <section className="min-h-[90vh] relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/DrDedeSept2024_LaanclaCreative-95.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/70 via-purple-500/70 to-cyan-400/70"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Empty/Spacer */}
              <div></div>

              {/* Right Column - Text Content and Video */}
              <div className="space-y-8">
                {/* Text Content */}
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance leading-tight text-white drop-shadow-lg">
                    Transforming AI Through
                    <br />
                    <span className="bg-gradient-to-r from-cyan-300 to-cyan-100 bg-clip-text text-transparent">
                      Equitable Innovation
                    </span>
                  </h1>
                  <p className="text-xl text-white mb-6 text-pretty leading-relaxed drop-shadow">
                    Watch my TEDx talk on managing artificial intelligence systems to serve everyone, not just the
                    privileged few.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white shadow-xl">
                      <a href="https://www.youtube.com/watch?v=mSQuZG_DHVY" target="_blank" rel="noopener noreferrer">
                        <Play className="mr-2 h-4 w-4" />
                        Watch TEDx Talk
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm shadow-xl"
                    >
                      <Link href="/contact">Book a Session</Link>
                    </Button>
                  </div>
                </div>

                {/* Video Embed */}
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <a
                    href="https://www.youtube.com/watch?v=mSQuZG_DHVY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative group"
                  >
                    <img
                      src="/images/tedxtalk-thumbnail.webp"
                      alt="Dr. Dédé's TEDx Talk: You've Been Coded Out"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="bg-red-600 rounded-full p-6 group-hover:scale-110 transition-transform">
                        <Play className="h-12 w-12 text-white fill-white" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200" variant="outline">
              Proven Results
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Measurable Business Impact</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Transform compliance challenges into competitive advantages with strategic AI governance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 border-purple-400 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow">$200M+</div>
                <div className="text-sm font-semibold text-white mb-2">Cost Savings Delivered</div>
                <p className="text-sm text-purple-50">
                  Regulatory compliance strategies that prevent costly violations
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-500 to-cyan-600 border-cyan-400 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow">$500M+</div>
                <div className="text-sm font-semibold text-white mb-2">Market Access Unlocked</div>
                <p className="text-sm text-cyan-50">Accessibility-first design expands addressable markets</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 via-purple-600 to-cyan-500 border-purple-400 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow">18 Months</div>
                <div className="text-sm font-semibold text-white mb-2">Average ROI Timeline</div>
                <p className="text-sm text-purple-50">Rapid implementation with measurable business outcomes</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white border-purple-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">95%</div>
                <div className="text-xs font-semibold text-gray-700 mb-1">Compliance Rate</div>
                <p className="text-xs text-muted-foreground">Across all client implementations</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-cyan-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-1">40%</div>
                <div className="text-xs font-semibold text-gray-700 mb-1">Faster Time-to-Market</div>
                <p className="text-xs text-muted-foreground">With proactive governance frameworks</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-purple-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">3.2x</div>
                <div className="text-xs font-semibold text-gray-700 mb-1">ROI Multiplier</div>
                <p className="text-xs text-muted-foreground">Average return on consulting investment</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-cyan-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-1">85%</div>
                <div className="text-xs font-semibold text-gray-700 mb-1">Client Retention</div>
                <p className="text-xs text-muted-foreground">Long-term strategic partnerships</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600">
              <Link href="/contact">
                Schedule Your Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Limited availability - Book your 30-minute strategy session today
            </p>
          </div>
        </div>
      </section>

      {/* About Dr. Dédé Section - Based on external site */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-purple-400/40 via-purple-300/30 to-cyan-400/40">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About Dr. Dédé</h2>
          <p className="text-xl text-gray-700 mb-12 text-pretty leading-relaxed max-w-3xl mx-auto">
            Combining rigorous academic training with lived experience as a disability advocate to challenge
            conventional approaches to AI governance and create lasting systemic change
          </p>

          <div className="flex justify-center mb-16">
            <div className="relative w-full max-w-md h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/dr-dede-outdoor-urban.jpg"
                alt="Dr. Dédé Tetsubayashi"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Four Credential Cards - Based on external site */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-8 w-8 text-cyan-500 mx-auto mb-3" />
                <h3 className="font-semibold text-sm">AI, DEI, Consultant & Board Member</h3>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-cyan-500 mx-auto mb-3" />
                <h3 className="font-semibold text-sm">Disability Advocate & Systems Disruptor</h3>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Mic className="h-8 w-8 text-cyan-500 mx-auto mb-3" />
                <h3 className="font-semibold text-sm">TEDx Speaker</h3>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Lightbulb className="h-8 w-8 text-cyan-500 mx-auto mb-3" />
                <h3 className="font-semibold text-sm">Innovation Leader</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-cyan-100 text-cyan-700 border-cyan-200" variant="outline">
              Strategic Services
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">How We Work Together</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Tailored solutions for organizations at every stage of their AI governance journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-purple-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Strategic Consulting</CardTitle>
                <CardDescription>For enterprises & startups</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>AI governance framework development</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Regulatory compliance audits</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Algorithmic bias detection & mitigation</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Executive advisory & board guidance</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-50 to-purple-50 border-cyan-300 hover:shadow-xl transition-shadow relative">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-4">
                  <Mic className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle className="text-xl">Speaking & Workshops</CardTitle>
                <CardDescription>For conferences & teams</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Keynote presentations & panels</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Custom workshops & training</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Leadership development programs</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Virtual & in-person options</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-700">
                  <Link href="/dr-dede/speaking">View Speaking Topics</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-purple-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Mountain className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Luxury Retreats</CardTitle>
                <CardDescription>For individuals & executives</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Personalized leadership coaching</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Wellness & mindfulness practices</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Strategic career planning</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Accessible luxury accommodations</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="/dr-dede/retreats">Explore Retreats</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed About Section - Merged from current page */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-purple-400/40 via-purple-300/30 to-cyan-400/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Deep Expertise, Real-World Impact</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Dr. Dédé Tetsubayashi brings a unique combination of academic rigor, industry experience, and lived
              perspective to every engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Lived Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Dr. Dédé Tetsubayashi (she/they) is a Cornell University educated social scientist and technologist
                  with over 25 years of experience promoting equitable outcomes at the intersection of ethical
                  technology and social justice across the U.S., APAC, and African markets.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a disability advocate, Dr. Tetsubayashi brings a unique combination of academic rigor, industry
                  experience, and lived perspective to every engagement. She has partnered with organizations ranging
                  from start-ups to Fortune 100 companies, all with the shared goal of fostering a more equitable tech
                  landscape.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With over 25 years of hands-on experience, Dr. Tetsubayashi has delivered quantifiable business
                  impact: $200+ million in regulatory cost savings and $500+ million in new market opportunities through
                  strategic tech equity implementations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle>Pioneering Framework</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Her pioneering frameworks for AI governance and algorithmic bias detection are used across industries,
                  from healthcare and finance to education and retail. Dr. Tetsubayashi's work ensures that innovation
                  and accessibility go hand in hand, creating sustainable business growth while driving social impact.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Organizations implementing her frameworks report 40% faster time-to-market, 95% compliance rates, and
                  3.2x ROI on their AI governance investments.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/90 backdrop-blur-sm border-purple-200">
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center mb-3">
                  <Shield className="h-5 w-5 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Regulatory Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Deep knowledge of ADA, Section 508, WCAG, EU AI Act, and emerging AI regulations. Helps organizations
                  navigate complex compliance landscapes with confidence.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-cyan-200">
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-cyan-100 flex items-center justify-center mb-3">
                  <Users className="h-5 w-5 text-cyan-600" />
                </div>
                <CardTitle className="text-lg">Inclusive Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pioneered the "Solve for One, Extend to Many" methodology that transforms accessibility from
                  compliance burden to market opportunity and innovation driver.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-purple-200">
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center mb-3">
                  <Award className="h-5 w-5 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Change Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Expert in organizational transformation, helping leadership teams embed ethical AI practices into
                  company culture, operations, and strategic decision-making.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-purple-600 via-purple-700 to-cyan-600 text-white border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0">
                  <BookOpen className="h-16 w-16 opacity-90 drop-shadow" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 drop-shadow">A Sought-After Speaker and Thought Leader</h3>
                  <p className="opacity-90 leading-relaxed mb-3">
                    Dr. Tetsubayashi has been featured at MIT Technology Review, the World Economic Forum, and leading
                    industry conferences. Her TEDx talk on managing artificial intelligence systems to serve everyone,
                    not just the privileged few, has inspired thousands to rethink technology's role in society.
                  </p>
                  <p className="opacity-90 leading-relaxed">
                    She regularly contributes to academic journals, industry publications, and policy discussions,
                    shaping the future of AI governance and digital equity at the highest levels.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Credentials - Merged from current page */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Credentials & Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white/90 backdrop-blur-sm border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Cornell University</h3>
                    <p className="text-sm text-muted-foreground">
                      Specialized in AI governance and digital equity frameworks
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-cyan-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Certified Ethics Practitioner</h3>
                    <p className="text-sm text-muted-foreground">
                      Global expertise in technology ethics and compliance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Fortune 100 Experience</h3>
                    <p className="text-sm text-muted-foreground">
                      25+ years advising leading tech companies and startups
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-cyan-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Disability Advocate & Systems Disruptor</h3>
                    <p className="text-sm text-muted-foreground">
                      Lived experience informing inclusive technology design
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Speaking & TEDx Section - Merged from current page */}
      <section
        id="speaking"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-purple-400/40 via-purple-300/30 to-cyan-400/40"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200" variant="outline">
              TEDx Speaker | Keynote Presenter
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Speaking & Events</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Book Dr. Dédé for keynotes, panels, and workshops on AI governance and tech equity
            </p>
          </div>

          <Card className="bg-white/90 backdrop-blur-sm mb-12">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                      <Mic className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      Dr. Dédé's <span className="text-red-600">TEDx</span> Talk:
                    </h3>
                    <p className="text-lg font-semibold text-balance">
                      "You've Been Coded Out: How To Make AI Work For All"
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.youtube.com/embed/mSQuZG_DHVY"
                    title="Dr. Dédé's TEDx Talk: You've Been Coded Out"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Key Takeaways:</h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  In this powerful TEDx talk, Dr. Dédé Tetsubayashi reveals how AI systems are systematically failing
                  compliance standards and creating massive liability risks. As a tech expert and disability advocate
                  who has saved companies $200M+ and unlocked $500M+ in new markets, Dr. Tetsubayashi breaks down the
                  four essential principles for building compliant, high-performing AI systems.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Lead with Curiosity</span> - Challenge assumptions
                      and eliminate blind spots in AI development
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Be Accountable</span> - Implement governance
                      frameworks that ensure regulatory compliance
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Solve for One, Extend to Many</span> -
                      Accessibility-first design reduces legal risk and expands markets
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Take Action</span> - Proactive compliance
                      strategies that prevent costly violations and unlock growth
                    </div>
                  </li>
                </ul>
                <p className="text-sm italic text-muted-foreground mt-4">
                  This isn't just about technology—it's about justice, visibility, and the power of co-creation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column: Why It Matters */}
                <div className="bg-gradient-to-br from-cyan-50 to-purple-50 rounded-lg p-6 border border-cyan-200">
                  <h4 className="text-lg font-bold mb-3 text-center">Why It Matters</h4>
                  <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                    <p>
                      When we center the margins, we unlock a greater future for all. Dr. Dédé's mission is to make
                      ethical, socially responsive tech the NEW standard—not the exception.
                    </p>
                    <p>
                      This talk is a rallying cry to disrupt the harmful defaults in design in lieu of tech that has
                      been built with intention, accountability, and care.
                    </p>
                    <p>
                      AI systems are being deployed at unprecedented scale, yet many organizations lack the governance
                      frameworks needed to ensure compliance, equity, and ethical deployment.
                    </p>
                  </div>
                </div>

                {/* Right Column: Subscribe */}
                <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white rounded-lg p-6 shadow-xl">
                  <Heart className="h-10 w-10 mx-auto mb-3 opacity-90" />
                  <h4 className="text-lg font-bold mb-3 text-center">Join the Movement</h4>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-start gap-2">
                      <span className="font-bold">✅ SUBSCRIBE</span>
                      <span>to my YouTube!</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold">✅ SHARE</span>
                      <span>my TEDx Talk</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold">💬 COMMENT</span>
                      <span>to keep the conversation going</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold">👀 FOLLOW</span>
                      <span>@DrDeterWithDede</span>
                    </div>
                  </div>
                  <p className="text-sm mb-4 opacity-90">
                    Let's send a message: Ethical, socially responsive tech isn't optional, it's essential!
                  </p>
                  <Button
                    asChild
                    size="sm"
                    variant="secondary"
                    className="w-full bg-white text-purple-600 hover:bg-gray-100"
                  >
                    <a href="https://www.youtube.com/@the_drdede" target="_blank" rel="noopener noreferrer">
                      Subscribe on YouTube
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200" variant="outline">
              Trusted By Industry Leaders
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Client Success Stories</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Organizations that have transformed their AI governance with Dr. Dédé
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-1">$50M</div>
                    <div className="text-sm font-semibold text-gray-900">Compliance Cost Avoidance</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  "Dr. Tetsubayashi's AI governance framework helped us identify and remediate critical compliance gaps
                  before they became regulatory violations. Her proactive approach saved us from potential fines and
                  reputational damage."
                </p>
                <p className="text-sm font-semibold">— Fortune 100 Healthcare Company</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-50 to-white border-cyan-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-600 mb-1">$25M</div>
                    <div className="text-sm font-semibold text-gray-900">New Market Revenue</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  "By implementing accessibility-first design principles, we unlocked entirely new customer segments.
                  Dr. Dédé showed us how inclusive innovation drives both social impact and business growth."
                </p>
                <p className="text-sm font-semibold">— Leading FinTech Startup</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-1">6 Months</div>
                    <div className="text-sm font-semibold text-gray-900">To Full Compliance</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  "We were facing potential regulatory action for algorithmic bias in our hiring platform. Dr. Dédé's
                  team conducted a comprehensive audit, implemented corrective measures, and trained our entire
                  engineering team. We achieved full compliance in just 6 months."
                </p>
                <p className="text-sm font-semibold">— Global HR Technology Platform</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-50 to-white border-cyan-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-600 mb-1">40%</div>
                    <div className="text-sm font-semibold text-gray-900">Faster Product Launch</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  "Dr. Tetsubayashi helped us build AI governance into our product development lifecycle from day one.
                  Instead of slowing us down, her frameworks actually accelerated our launch by preventing costly
                  redesigns and compliance delays."
                </p>
                <p className="text-sm font-semibold">— EdTech Startup (Series B)</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-1">92%</div>
                    <div className="text-sm font-semibold text-gray-900">Employee Satisfaction</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  "The leadership retreat Dr. Dédé facilitated transformed our executive team's understanding of
                  inclusive AI. Our employee satisfaction scores around DEI initiatives jumped from 68% to 92% within a
                  year. The cultural shift has been remarkable."
                </p>
                <p className="text-sm font-semibold">— Fortune 500 Retail Corporation</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-50 to-white border-cyan-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-600 mb-1">100%</div>
                    <div className="text-sm font-semibold text-gray-900">Audit Pass Rate</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  "After implementing Dr. Tetsubayashi's AI governance framework, we've passed every regulatory audit
                  with zero findings. Her systematic approach to documentation and accountability has become our
                  competitive advantage in regulated markets."
                </p>
                <p className="text-sm font-semibold">— Financial Services AI Provider</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href="/case-studies">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Luxury Retreats Section - Merged from current page */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-purple-400/40 via-purple-300/30 to-cyan-400/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-cyan-100 text-cyan-700 border-cyan-200" variant="outline">
              Wellness & Leadership Development
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Luxury Retreats & Workshops</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Transformative experiences for individuals, enterprises, and wellness organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm border-cyan-200">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-4">
                  <Mountain className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle className="text-xl">Individual Retreats</CardTitle>
                <CardDescription>Personal transformation and leadership development</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Curated wellness experiences combining mindfulness, leadership coaching, and strategic planning in
                  luxury settings designed for accessibility and comfort.
                </p>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Personalized coaching sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Wellness and mindfulness practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Strategic career planning</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-700">
                  <Link href="/dr-dede/retreats">Explore Individual Retreats</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-purple-200">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Enterprise Workshops</CardTitle>
                <CardDescription>Team building and organizational transformation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Immersive leadership development programs that embed inclusive practices and ethical decision-making
                  across your organization.
                </p>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Executive team alignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Inclusive leadership training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Change management strategies</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="/dr-dede/retreats">Explore Enterprise Workshops</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA - Merged from current page */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <Card className="bg-gradient-to-br from-purple-600 via-purple-700 to-cyan-600 text-white border-0 max-w-4xl mx-auto shadow-2xl">
          <CardContent className="p-12 text-center">
            <Sparkles className="h-16 w-16 mx-auto mb-6 opacity-90 drop-shadow" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance drop-shadow">
              Ready to Transform Your AI Strategy?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-pretty leading-relaxed">
              Whether you need strategic AI governance consulting, speaking engagements, or transformative leadership
              retreats, let's create lasting impact together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg"
              >
                <Link href="/contact">Schedule Free Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm shadow-lg"
              >
                <Link href="/incluu">Explore incluu Services</Link>
              </Button>
            </div>
            <p className="text-sm opacity-75">Limited availability for Q1 2026 - Book your strategy session today</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
