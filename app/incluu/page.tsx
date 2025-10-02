import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Scale, FileCheck, CheckCircle2, Star, Building2 } from "lucide-react"
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
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="relative h-12 w-12 rounded-lg overflow-hidden">
              <Image
                src="/modern-tech-company-logo-with-purple-and-cyan-grad.jpg"
                alt="incluu logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              incluu
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Expert AI Governance &<br />
            <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Tech Equity Solutions
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
            Dr. Dédé Tetsubayashi delivers transformational tech equity and AI governance consulting, generating proven
            results: <span className="font-semibold text-foreground">$200M+ in cost savings</span> and{" "}
            <span className="font-semibold text-foreground">$500M+ in market expansion</span> for enterprise clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90">
              <Link href="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">$200M+</div>
            <div className="text-sm text-muted-foreground">Cost Savings Generated</div>
            <div className="text-xs text-muted-foreground mt-1">Strategic regulatory compliance</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-600 mb-2">$500M+</div>
            <div className="text-sm text-muted-foreground">Market Access Unlocked</div>
            <div className="text-xs text-muted-foreground mt-1">Inclusive innovation strategies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Years of Expertise</div>
            <div className="text-xs text-muted-foreground mt-1">Tech equity & governance</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-600 mb-2">$200M+</div>
            <div className="text-sm text-muted-foreground">Total Client Value Created</div>
            <div className="text-xs text-muted-foreground mt-1">Across all engagements</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200" variant="outline">
            Black-Woman-Owned | Tech Equity Pioneer
          </Badge>
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

      {/* Case Studies */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-purple-50/50 to-cyan-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Proven Business Impact</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Real results from strategic AI governance and tech equity implementations across industries
            </p>
          </div>

          <div className="space-y-8">
            {/* Case Study 1 */}
            <Card className="bg-white border-purple-100">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src="/modern-corporate-office-with-diverse-team-working-.jpg"
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
                      <strong>Challenge:</strong> AI framework implementation for 12 countries
                      <br />
                      <strong>Solution:</strong> Comprehensive governance framework with automated compliance
                      monitoring, 85% faster product launches
                      <br />
                      <strong>Result:</strong> $50M+ in product launches, 85% better project launches
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
                      src="/healthcare-technology-with-diverse-patients-and-me.jpg"
                      alt="Healthcare AI Equity"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-3 bg-cyan-100 text-cyan-700 border-cyan-200" variant="outline">
                      Digital Equity
                    </Badge>
                    <h3 className="text-2xl font-bold mb-2">$25M Digital Equity in Healthcare AI</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      <strong>Challenge:</strong> AI Research bias against minority populations
                      <br />
                      <strong>Solution:</strong> Inclusive algorithm design, bias detection, diverse data sourcing
                      <br />
                      <strong>Result:</strong> 95% improvement in diagnostic accuracy, $25M cost savings
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
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Client Success Stories</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
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
                  opened $500M+ in new markets. Dr. Dédé's expertise transforms regulatory challenges into sustainable
                  competitive advantages."
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="bg-gradient-to-br from-purple-600 to-cyan-600 text-white border-0 max-w-4xl mx-auto">
          <CardContent className="p-12 text-center">
            <Building2 className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Ready to Build Ethical, Compliant AI Systems?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-pretty leading-relaxed">
              Let's discuss how strategic AI governance can unlock new markets, reduce risk, and drive sustainable
              growth for your organization.
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
                <Link href="/dr-dede">Meet Dr. Dédé</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
