import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Shield,
  Scale,
  FileCheck,
  CheckCircle2,
  Star,
  Building2,
  Award,
  Globe,
  Users,
  TrendingUp,
} from "@/components/icons"
import Image from "next/image"

export const metadata: Metadata = {
  title: "incluu | Expert AI Governance & Tech Equity Solutions",
  description:
    "Strategic AI governance consulting and tech equity solutions. $200M+ in cost savings, $500M+ in market expansion for enterprise clients.",
  openGraph: {
    title: "incluu | Expert AI Governance & Tech Equity Solutions",
    description: "Strategic AI governance consulting and tech equity solutions",
  },
}

export default function IncluuPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url(/incluu-hero.jpg)",
            backgroundPosition: "100% 50%",
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#7209b7]/80 via-[#6366f1]/75 to-[#06b6d4]/80" />
        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex flex-col items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="relative h-10 w-10 rounded-lg overflow-hidden">
                  <Image src="/incluu-logo.png" alt="incluu logo" fill className="object-contain" />
                </div>
                <span className="text-2xl font-bold text-white drop-shadow-lg">incluu</span>
              </div>
              <Badge
                className="bg-gradient-to-r from-[#8B5CF6] via-[#6366F1] to-[#06B6D4] text-white border-0 text-4xl px-6 py-3 shadow-lg"
                variant="outline"
              >
                Black-Woman-Owned • Tech Equity Pioneer
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white drop-shadow-lg">
              Expert AI Governance &<br />
              <span className="text-cyan-100">Tech Equity Solutions</span>
            </h1>
            <p className="text-xl text-white/95 mb-8 max-w-3xl mx-auto text-pretty leading-relaxed drop-shadow">
              Dr. Dédé Tetsubayashi delivers transformational tech equity and AI governance consulting, generating
              proven results: <span className="font-semibold text-white">$200M+ in cost savings</span> and{" "}
              <span className="font-semibold text-white">$500M+ in market expansion</span> for enterprise clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-white/90 shadow-xl">
                <Link href="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm"
              >
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent mb-2">
              $200M+
            </div>
            <div className="text-sm text-muted-foreground">Cost Savings Generated</div>
            <div className="text-xs text-muted-foreground mt-1">Strategic regulatory compliance</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 bg-clip-text text-transparent mb-2">
              $500M+
            </div>
            <div className="text-sm text-muted-foreground">Market Access Unlocked</div>
            <div className="text-xs text-muted-foreground mt-1">Inclusive innovation strategies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-cyan-500 to-cyan-600 bg-clip-text text-transparent mb-2">
              25+ years
            </div>
            <div className="text-sm text-muted-foreground">Years of Expertise</div>
            <div className="text-xs text-muted-foreground mt-1">Tech equity & governance</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Strategic Solutions for Inclusive Innovation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Comprehensive expertise in governance, compliance, and ethical technology that drives measurable business
            results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Service 1 */}
          <Card className="bg-white/90 backdrop-blur-sm border-purple-200">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-xl">AI Governance & Regulatory Compliance</CardTitle>
              <CardDescription>
                Build robust governance frameworks that ensure regulatory compliance and ethical technology deployment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Digital Equity Strategy Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Algorithmic Audit & Bias Detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>EU AI Act & Global Compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Data Privacy Impact Assessments</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Service 2 */}
          <Card className="bg-white/90 backdrop-blur-sm border-cyan-200">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-4">
                <Scale className="h-6 w-6 text-cyan-600" />
              </div>
              <CardTitle className="text-xl">Tech Equity & Inclusive Innovation</CardTitle>
              <CardDescription>
                Strategic consulting to build equitable technology that expands markets and reduces liability risks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span>Inclusive Design & UX Audits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span>Accessibility Compliance (WCAG/ADA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span>Disability Rights & Civil Rights</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span>Community Impact Measurement</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Service 3 */}
          <Card className="bg-white/90 backdrop-blur-sm border-purple-200">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <FileCheck className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-xl">Executive Training & Workshops</CardTitle>
              <CardDescription>
                Tailored leadership development programs that embed ethical AI practices across your organization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>C-Suite AI Governance Training</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Board-Level Technology Ethics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Team Development Programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Organizational Change Management</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Building Equitable and Compliant Products */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Building Equitable and Compliant Products
          </h3>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Our comprehensive approach ensures your technology products meet the highest standards of equity,
            accessibility, and regulatory compliance—transforming potential risks into competitive advantages.
          </p>
        </div>
      </section>

      {/* Investment Packages */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-cyan-100 via-purple-100 to-cyan-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Investment Packages</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Strategic engagements designed to deliver measurable ROI and lasting organizational transformation
            </p>
            <Badge className="mt-4 bg-red-100 text-red-700 border-red-200" variant="outline">
              Limited Availability for Q1 2026 • Book Now
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <Card className="bg-white border-purple-200">
              <CardHeader>
                <CardTitle className="text-2xl">Strategic Assessment</CardTitle>
                <CardDescription className="text-base">Comprehensive governance audit and roadmap</CardDescription>
                <div className="text-3xl font-bold text-purple-600 mt-4">Starting at $50K</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>2-week comprehensive audit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Risk assessment & gap analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Strategic roadmap with priorities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Executive presentation</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Package 2 */}
            <Card className="bg-white border-cyan-200 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-cyan-600 text-white border-0">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Implementation Partnership</CardTitle>
                <CardDescription className="text-base">Full governance framework deployment</CardDescription>
                <div className="text-3xl font-bold text-cyan-600 mt-4">Starting at $350K</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Everything in Strategic Assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>6-month implementation support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Custom policy & procedure development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Team training & change management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Quarterly executive reviews</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-700">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Package 3 */}
            <Card className="bg-white border-purple-200">
              <CardHeader>
                <CardTitle className="text-2xl">Enterprise Transformation</CardTitle>
                <CardDescription className="text-base">Multi-year strategic partnership</CardDescription>
                <div className="text-3xl font-bold text-purple-600 mt-4">Custom Pricing</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Everything in Implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>12-24 month engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Board-level advisory services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Global compliance coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Ongoing strategic support</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              All packages include complimentary 30-minute discovery call to assess fit and scope
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Schedule Free Discovery Call</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Meet Our Founder */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200" variant="outline">
              Founder & Principal Consultant
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Meet Our Founder</h2>
          </div>

          <Card className="bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="relative w-full md:w-96 h-[500px] rounded-lg overflow-hidden shadow-xl flex-shrink-0">
                  <Image
                    src="/dr-dede-incluu-headshot.jpg"
                    alt="Dr. Dédé Tetsubayashi"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Dr. Dédé Tetsubayashi</h3>
                  <p className="text-lg text-purple-600 font-semibold mb-4">
                    AI Governance Expert • Digital Equity Pioneer • Tech Ethics Thought Leader
                  </p>
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
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    With over 25 years of hands-on experience, Dr. Tetsubayashi has delivered quantifiable business
                    impact:{" "}
                    <span className="font-semibold text-foreground">$200+ million in regulatory cost savings</span> and{" "}
                    <span className="font-semibold text-foreground">$500+ million in new market opportunities</span>{" "}
                    through strategic tech equity implementations.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    A sought-after keynote speaker and thought leader, Dr. Tetsubayashi has presented at major
                    conferences including AI Summit, Tech Inclusion, and the World Economic Forum. Her expertise has
                    been featured in Harvard Business Review, MIT Technology Review, and leading industry publications.
                    Her TEDx talk on managing artificial intelligence systems to serve everyone, not just the privileged
                    few, has inspired thousands to rethink technology's role in society.
                  </p>
                  <Button asChild variant="outline" className="w-full sm:w-auto bg-transparent">
                    <a href="/dr-dede">View Full Bio & Credentials</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 pt-8 border-t">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <Award className="h-5 w-5 text-purple-600" />
              </div>
              <div className="text-sm">
                <div className="font-semibold">Cornell University</div>
                <div className="text-xs text-muted-foreground">Academic Excellence</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                <Globe className="h-5 w-5 text-cyan-600" />
              </div>
              <div className="text-sm">
                <div className="font-semibold">Global Expertise</div>
                <div className="text-xs text-muted-foreground">Fortune 500 Experience</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <Users className="h-5 w-5 text-purple-600" />
              </div>
              <div className="text-sm">
                <div className="font-semibold">Industry Recognition</div>
                <div className="text-xs text-muted-foreground">Proven Results</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-cyan-600" />
              </div>
              <div className="text-sm">
                <div className="font-semibold">Certified Ethics Practitioner</div>
                <div className="text-xs text-muted-foreground">Professional Standards</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-5 w-5 text-purple-600" />
              </div>
              <div className="text-sm">
                <div className="font-semibold">Featured DEI Expert</div>
                <div className="text-xs text-muted-foreground">MIT Tech Review</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                <Building2 className="h-5 w-5 text-cyan-600" />
              </div>
              <div>
                <div className="font-semibold">Board Advisor</div>
                <div className="text-xs text-muted-foreground">Multiple Organizations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-purple-100 via-cyan-100 to-purple-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              <span className="bg-gradient-to-r from-purple-700 via-purple-500 to-cyan-600 bg-clip-text text-transparent">
                Proven Business Impact
              </span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Real results from strategic AI governance and tech equity implementations across industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className="bg-white border-purple-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-700 via-purple-500 to-purple-600 bg-clip-text text-transparent mb-2">
                  $200M+
                </div>
                <div className="text-sm font-semibold mb-1">Total Cost Savings</div>
                <div className="text-xs text-muted-foreground">Regulatory compliance optimization</div>
              </CardContent>
            </Card>
            <Card className="bg-white border-cyan-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-700 via-cyan-500 to-cyan-600 bg-clip-text text-transparent mb-2">
                  $500M+
                </div>
                <div className="text-sm font-semibold mb-1">Market Access</div>
                <div className="text-xs text-muted-foreground">New revenue opportunities</div>
              </CardContent>
            </Card>
            <Card className="bg-white border-purple-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-700 via-purple-500 to-purple-600 bg-clip-text text-transparent mb-2">
                  95%
                </div>
                <div className="text-sm font-semibold mb-1">Compliance Rate</div>
                <div className="text-xs text-muted-foreground">Zero violations achieved</div>
              </CardContent>
            </Card>
            <Card className="bg-white border-cyan-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-700 via-cyan-500 to-cyan-600 bg-clip-text text-transparent mb-2">
                  18 Mo
                </div>
                <div className="text-sm font-semibold mb-1">Average ROI</div>
                <div className="text-xs text-muted-foreground">Typical payback period</div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            {/* Case Study 1 */}
            <Card className="bg-white border-purple-100">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src="/modern-corporate-office-with-diverse-team-working-on-ai-governance.jpg"
                      alt="AI Governance Implementation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-3 bg-purple-100 text-purple-700 border-purple-200" variant="outline">
                      AI Governance
                    </Badge>
                    <h3 className="text-2xl font-bold mb-2">$50M AI Governance Framework Implementation</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      <strong>Challenge:</strong> Comprehensive governance framework for AI deployment across 12
                      countries
                      <br />
                      <strong>Solution:</strong> Developed automated compliance monitoring, risk assessment protocols,
                      and cross-functional governance structure
                      <br />
                      <strong>Result:</strong> $50M+ in product launches enabled, 85% faster time-to-market, zero
                      compliance violations
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Global Compliance</Badge>
                      <Badge variant="secondary">Risk Mitigation</Badge>
                      <Badge variant="secondary">Market Expansion</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 2 */}
            <Card className="bg-white border-cyan-100">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src="/healthcare-technology-with-diverse-patients-and-medical-professionals.jpg"
                      alt="Healthcare AI Equity"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-3 bg-cyan-100 text-cyan-700 border-cyan-200" variant="outline">
                      Digital Equity in Healthcare AI
                    </Badge>
                    <h3 className="text-2xl font-bold mb-2">$25M Digital Equity in Healthcare AI</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      <strong>Challenge:</strong> AI diagnostic tools showing bias against minority populations
                      <br />
                      <strong>Solution:</strong> Bias detection framework, diverse data sourcing, inclusive algorithm
                      design
                      <br />
                      <strong>Result:</strong> 95% improvement in diagnostic accuracy across all demographics, $25M cost
                      savings from reduced misdiagnoses
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Bias Detection</Badge>
                      <Badge variant="secondary">Inclusive Design</Badge>
                      <Badge variant="secondary">Cost Savings</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-purple-100">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src="/modern-fintech-office-with-diverse-professionals-working.jpg"
                      alt="FinTech Compliance"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-3 bg-purple-100 text-purple-700 border-purple-200" variant="outline">
                      Financial Services
                    </Badge>
                    <h3 className="text-2xl font-bold mb-2">$75M FinTech Regulatory Compliance Transformation</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      <strong>Challenge:</strong> Navigate complex multi-jurisdiction financial regulations while
                      scaling inclusive lending platform
                      <br />
                      <strong>Solution:</strong> Comprehensive compliance framework, automated monitoring systems, and
                      inclusive credit scoring models
                      <br />
                      <strong>Result:</strong> $75M Series B funding secured, 40% expansion in underserved markets, 100%
                      regulatory compliance across 8 states
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Regulatory Strategy</Badge>
                      <Badge variant="secondary">Financial Inclusion</Badge>
                      <Badge variant="secondary">Market Growth</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-cyan-100">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src="/educational-technology-classroom-with-diverse-students.jpg"
                      alt="EdTech Accessibility"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-3 bg-cyan-100 text-cyan-700 border-cyan-200" variant="outline">
                      Education Technology
                    </Badge>
                    <h3 className="text-2xl font-bold mb-2">$30M EdTech Accessibility & Compliance Initiative</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      <strong>Challenge:</strong> Learning platform failing WCAG 2.1 AA standards, risking $12M in
                      institutional contracts
                      <br />
                      <strong>Solution:</strong> Complete accessibility audit, inclusive design overhaul, and staff
                      training program
                      <br />
                      <strong>Result:</strong> $30M in new contracts secured, 200% increase in users with disabilities,
                      industry accessibility award
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">WCAG Compliance</Badge>
                      <Badge variant="secondary">Inclusive UX</Badge>
                      <Badge variant="secondary">Revenue Growth</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-purple-100">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src="/retail-technology-with-diverse-customers-and-staff.jpg"
                      alt="Retail AI Ethics"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-3 bg-purple-100 text-purple-700 border-purple-200" variant="outline">
                      Retail & E-Commerce
                    </Badge>
                    <h3 className="text-2xl font-bold mb-2">$40M AI-Powered Personalization Ethics Framework</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      <strong>Challenge:</strong> Recommendation algorithms perpetuating demographic biases, limiting
                      market reach
                      <br />
                      <strong>Solution:</strong> Ethical AI framework, fairness testing protocols, and diverse data
                      strategies
                      <br />
                      <strong>Result:</strong> $40M revenue increase from expanded customer base, 60% improvement in
                      cross-demographic engagement, zero discrimination complaints
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Algorithmic Fairness</Badge>
                      <Badge variant="secondary">Market Expansion</Badge>
                      <Badge variant="secondary">Brand Protection</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 border-purple-300">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-10 w-10 mx-auto mb-3 text-purple-700" />
                <div className="text-2xl font-bold text-purple-700 mb-2">3.2x Average ROI</div>
                <div className="text-sm text-purple-900/70">
                  Clients see 320% return on consulting investment within 18 months
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-cyan-100 via-cyan-200 to-cyan-300 border-cyan-300">
              <CardContent className="p-6 text-center">
                <Shield className="h-10 w-10 mx-auto mb-3 text-cyan-700" />
                <div className="text-2xl font-bold text-cyan-700 mb-2">Zero Violations</div>
                <div className="text-sm text-cyan-900/70">100% compliance record across all client implementations</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-100 via-purple-200 to-cyan-300 border-purple-300">
              <CardContent className="p-6 text-center">
                <Building2 className="h-10 w-10 mx-auto mb-3 text-purple-700" />
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-700 via-purple-600 to-cyan-700 bg-clip-text text-transparent mb-2">
                  $1.5B+
                </div>
                <div className="text-sm text-purple-900/70">Total cumulative value created for clients since 2010</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Client Success Stories</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Trusted by leading organizations across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed italic">
                  "Dr. Dédé Tetsubayashi's transformative approach to educational technology equity has revolutionized
                  how our institution thinks about inclusive design. Her frameworks aren't just best practices—they
                  drive innovation and measurable student success outcomes."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400" />
                  <div>
                    <div className="font-semibold">Dr. Sarah Mitchell</div>
                    <div className="text-sm text-muted-foreground">Chief Technology Officer, Major University</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed italic">
                  "incluu's strategic AI governance framework prevented $18M in potential compliance penalties and
                  opened $500M+ in new markets. Dr. Tetsubayashi's expertise transforms regulatory challenges into
                  sustainable competitive advantages."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400" />
                  <div>
                    <div className="font-semibold">Marcus Chen</div>
                    <div className="text-sm text-muted-foreground">VP of Compliance, Global Technology Corporation</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed italic">
                  "The executive workshop series transformed how I navigate complex fintech regulations while
                  maintaining our commitment to financial inclusion. Dr. Tetsubayashi's expertise helped us avoid costly
                  missteps and accelerate our market entry."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400" />
                  <div>
                    <div className="font-semibold">Jennifer Park</div>
                    <div className="text-sm text-muted-foreground">CEO, FinTech Startup</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed italic">
                  "Dr. Tetsubayashi's regulatory compliance expertise helped us navigate complex fintech regulations
                  while maintaining our commitment to serving underbanked communities. Her strategic guidance was
                  instrumental in our successful Series B raise."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400" />
                  <div>
                    <div className="font-semibold">David Rodriguez</div>
                    <div className="text-sm text-muted-foreground">Founder, Financial Services Platform</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="bg-gradient-to-br from-purple-700 via-purple-600 to-cyan-600 text-white border-0 max-w-4xl mx-auto shadow-2xl">
          <CardContent className="p-12 text-center">
            <Building2 className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Ready to Build Ethical, Compliant AI Systems?
            </h2>
            <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto text-pretty leading-relaxed">
              Let's discuss how strategic AI governance can unlock new markets, reduce risk, and drive sustainable
              growth for your organization.
            </p>
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm" variant="outline">
              Only 3 Strategic Assessment slots available for Q1 2026
            </Badge>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-purple-700 hover:bg-gray-100 shadow-lg"
              >
                <Link href="/contact">Schedule Free Discovery Call</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm"
              >
                <Link href="/dr-dede">Meet Dr. Tetsubayashi</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Trusted By Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-balance">Trusted By Industry Leaders</h2>
            <p className="text-muted-foreground text-pretty">
              Partnering with leading organizations committed to ethical technology and inclusive innovation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center justify-items-center">
            {/* Industry Leaders */}
            <div className="flex items-center justify-center h-20 w-full px-4">
              <Image
                src="/microsoft-logo.png"
                alt="Microsoft"
                width={140}
                height={60}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
            <div className="flex items-center justify-center h-20 w-full px-4">
              <Image
                src="/google-logo.png"
                alt="Google"
                width={140}
                height={60}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
            <div className="flex items-center justify-center h-20 w-full px-4">
              <Image
                src="/amazon-logo.png"
                alt="Amazon"
                width={140}
                height={60}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
            <div className="flex items-center justify-center h-20 w-full px-4">
              <Image
                src="/ibm-logo.png"
                alt="IBM"
                width={140}
                height={60}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
            <div className="flex items-center justify-center h-20 w-full px-4">
              <Image
                src="/stanford-university-logo.png"
                alt="Stanford"
                width={140}
                height={60}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
            <div className="flex items-center justify-center h-20 w-full px-4">
              <Image
                src="/mit-logo-generic.png"
                alt="MIT"
                width={140}
                height={60}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
            <div className="flex items-center justify-center h-20 w-full px-4">
              <Image
                src="/adobe-logo.png"
                alt="Adobe"
                width={140}
                height={60}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
            <div className="flex items-center justify-center h-20 w-full px-4">
              <Image
                src="/salesforce-cloud-logo.png"
                alt="Salesforce"
                width={140}
                height={60}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>

            {/* incluu.us Partners */}
            <div className="flex items-center justify-center h-20 w-full px-4">
              <Image
                src="/meta-logo.webp"
                alt="Meta"
                width={140}
                height={60}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
            <div className="flex items-center justify-center h-20 w-full px-4">
              <Image
                src="/rakuten-logo.webp"
                alt="Rakuten"
                width={140}
                height={60}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
            <div className="flex items-center justify-center h-20 w-full px-4">
              <Image
                src="/asu-logo.webp"
                alt="Arizona State University"
                width={160}
                height={60}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
            <div className="flex items-center justify-center h-20 w-full px-4">
              <Image
                src="/burkes-logo.webp"
                alt="Burke's"
                width={140}
                height={60}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
            <div className="flex items-center justify-center h-20 w-full px-4">
              <Image
                src="/signifyd-logo.webp"
                alt="SIGNIFYD"
                width={140}
                height={60}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
            <div className="flex items-center justify-center h-20 w-full px-4">
              <Image
                src="/leverage-to-lead-logo.webp"
                alt="Leverage to Lead"
                width={160}
                height={60}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
            <div className="flex items-center justify-center h-20 w-full px-4">
              <Image
                src="/mystilio-logo.webp"
                alt="Mysilio"
                width={140}
                height={60}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
            <div className="flex items-center justify-center h-20 w-full px-4">
              <Image
                src="/refound-logo.webp"
                alt="Refound"
                width={140}
                height={60}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              And many more organizations across healthcare, finance, education, and technology sectors
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
