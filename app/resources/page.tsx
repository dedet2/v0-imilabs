import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ResourceGateModal } from "@/components/resource-gate-modal"
import {
  BookOpen,
  FileText,
  Video,
  Podcast,
  Download,
  ExternalLink,
  Calculator,
  Users,
  Award,
  TrendingUp,
  Shield,
  Lightbulb,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Resources | Dr. Dédé Tetsubayashi",
  description:
    "Access whitepapers, case studies, TEDx talks, tools, and resources on AI governance, tech equity, and disability advocacy.",
  openGraph: {
    title: "Resources | Dr. Dédé Tetsubayashi",
    description: "Comprehensive resources on AI governance, tech equity, and inclusive innovation",
  },
}

export default function ResourcesPage() {
  return (
    <div className="relative">
      <section className="relative py-20 bg-gradient-to-br from-[#7209b7] via-[#6366f1] to-[#06b6d4] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm" variant="outline">
              Knowledge Hub
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white drop-shadow-lg">
              <span className="bg-gradient-to-r from-cyan-300 to-cyan-100 bg-clip-text text-transparent">
                All Resources
              </span>
            </h1>
            <p className="text-xl text-white/90 text-pretty leading-relaxed drop-shadow">
              Explore comprehensive insights, frameworks, tools, and thought leadership on AI governance, tech equity,
              and inclusive innovation. Everything you need to drive meaningful change in your organization.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        {/* Featured Resource */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-500 text-white border-0 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0">
                  <div className="h-24 w-24 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Video className="h-12 w-12" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <Badge className="mb-3 bg-white/20 text-white border-white/30 backdrop-blur-sm" variant="outline">
                    Featured TEDx Talk
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white drop-shadow-lg">
                    "You've Been Coded Out: How To Make AI Work For All"
                  </h2>
                  <p className="text-white/90 mb-6 leading-relaxed text-lg">
                    Watch Dr. Dédé's powerful TEDx talk on managing artificial intelligence systems to serve everyone,
                    not just the privileged few. Learn actionable strategies for inclusive AI development.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      asChild
                      variant="secondary"
                      size="lg"
                      className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg"
                    >
                      <Link href="/dr-dede#speaking">
                        Watch Now
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
                    >
                      <Link href="https://www.youtube.com/@the_drdede" target="_blank">
                        Subscribe on YouTube
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Access Tools */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Access Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">ROI Calculator</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Calculate the potential return on investment for AI governance and tech equity initiatives
                </p>
                <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:opacity-90">
                  <Link href="https://pmukyznd.manus.space/" target="_blank">
                    Launch Calculator
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-700 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Compliance Checker</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Assess your organization's AI governance compliance readiness
                </p>
                <Button asChild className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 hover:opacity-90">
                  <Link href="#compliance">
                    Start Assessment
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-cyan-50 border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Free Consultation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Schedule a complimentary discovery call to discuss your needs
                </p>
                <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90">
                  <Link href="/contact">Book Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Resource Categories - Expanded */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Resource Library</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Whitepapers & Research */}
            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-4 shadow-lg">
                  <FileText className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">Whitepapers & Research</CardTitle>
                <CardDescription>In-depth research, frameworks, and methodologies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <ResourceGateModal
                      resourceTitle="AI Governance Framework for Enterprise"
                      resourceType="whitepaper"
                      resourceDescription="Comprehensive implementation guide for enterprise AI governance"
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">AI Governance Framework for Enterprise</div>
                          <div className="text-xs text-muted-foreground">Comprehensive implementation guide</div>
                        </div>
                      </button>
                    </ResourceGateModal>
                  </li>
                  <li>
                    <ResourceGateModal
                      resourceTitle="Tech Equity Implementation Guide"
                      resourceType="whitepaper"
                      resourceDescription="Step-by-step methodology for tech equity"
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">Tech Equity Implementation Guide</div>
                          <div className="text-xs text-muted-foreground">Step-by-step methodology</div>
                        </div>
                      </button>
                    </ResourceGateModal>
                  </li>
                  <li>
                    <ResourceGateModal
                      resourceTitle="Algorithmic Bias Detection Methods"
                      resourceType="whitepaper"
                      resourceDescription="Technical analysis framework for detecting algorithmic bias"
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">Algorithmic Bias Detection Methods</div>
                          <div className="text-xs text-muted-foreground">Technical analysis framework</div>
                        </div>
                      </button>
                    </ResourceGateModal>
                  </li>
                  <li>
                    <ResourceGateModal
                      resourceTitle="Disability-Inclusive AI Design"
                      resourceType="whitepaper"
                      resourceDescription="Best practices & standards for disability-inclusive AI design"
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">Disability-Inclusive AI Design</div>
                          <div className="text-xs text-muted-foreground">Best practices & standards</div>
                        </div>
                      </button>
                    </ResourceGateModal>
                  </li>
                  <li>
                    <ResourceGateModal
                      resourceTitle="Global AI Compliance Landscape 2025"
                      resourceType="whitepaper"
                      resourceDescription="Regulatory overview of the global AI compliance landscape"
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">Global AI Compliance Landscape 2025</div>
                          <div className="text-xs text-muted-foreground">Regulatory overview</div>
                        </div>
                      </button>
                    </ResourceGateModal>
                  </li>
                </ul>
                <ResourceGateModal
                  resourceTitle="All Whitepapers & Research"
                  resourceType="whitepaper"
                  resourceDescription="Access our complete library of whitepapers and research documents"
                >
                  <Button variant="outline" className="w-full mt-6 bg-transparent">
                    View All Whitepapers
                  </Button>
                </ResourceGateModal>
              </CardContent>
            </Card>

            {/* Case Studies */}
            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-700 flex items-center justify-center mb-4 shadow-lg">
                  <BookOpen className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">Case Studies</CardTitle>
                <CardDescription>Real-world success stories and measurable outcomes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="/case-studies"
                      className="group text-sm hover:text-cyan-600 transition-colors flex items-start gap-2"
                    >
                      <TrendingUp className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-cyan-600" />
                      <div>
                        <div className="font-medium">$50M AI Governance Implementation</div>
                        <div className="text-xs text-muted-foreground">Fortune 500 Healthcare</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/case-studies"
                      className="group text-sm hover:text-cyan-600 transition-colors flex items-start gap-2"
                    >
                      <TrendingUp className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-cyan-600" />
                      <div>
                        <div className="font-medium">$25M Digital Equity in Healthcare AI</div>
                        <div className="text-xs text-muted-foreground">Regional health system</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/case-studies"
                      className="group text-sm hover:text-cyan-600 transition-colors flex items-start gap-2"
                    >
                      <TrendingUp className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-cyan-600" />
                      <div>
                        <div className="font-medium">$75M FinTech Compliance Framework</div>
                        <div className="text-xs text-muted-foreground">Global financial services</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/case-studies"
                      className="group text-sm hover:text-cyan-600 transition-colors flex items-start gap-2"
                    >
                      <TrendingUp className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-cyan-600" />
                      <div>
                        <div className="font-medium">$30M EdTech Accessibility Transformation</div>
                        <div className="text-xs text-muted-foreground">Leading education platform</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/case-studies"
                      className="group text-sm hover:text-cyan-600 transition-colors flex items-start gap-2"
                    >
                      <TrendingUp className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-cyan-600" />
                      <div>
                        <div className="font-medium">$40M Retail AI Personalization</div>
                        <div className="text-xs text-muted-foreground">E-commerce leader</div>
                      </div>
                    </a>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full mt-6 bg-transparent">
                  <Link href="/case-studies">View All Case Studies</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Media & Talks */}
            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center mb-4 shadow-lg">
                  <Podcast className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">Media & Talks</CardTitle>
                <CardDescription>Videos, podcasts, interviews, and presentations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="/dr-dede#speaking"
                      className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2"
                    >
                      <Video className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                      <div>
                        <div className="font-medium">TEDx: You've Been Coded Out</div>
                        <div className="text-xs text-muted-foreground">Making AI work for everyone</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2"
                    >
                      <ExternalLink className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                      <div>
                        <div className="font-medium">MIT Technology Review Interview</div>
                        <div className="text-xs text-muted-foreground">The future of inclusive AI</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2"
                    >
                      <ExternalLink className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                      <div>
                        <div className="font-medium">World Economic Forum Panel</div>
                        <div className="text-xs text-muted-foreground">AI governance & ethics</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2"
                    >
                      <Podcast className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                      <div>
                        <div className="font-medium">Tech Equity Podcast Series</div>
                        <div className="text-xs text-muted-foreground">8-part deep dive</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2"
                    >
                      <Video className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                      <div>
                        <div className="font-medium">Keynote: AI & Disability Rights</div>
                        <div className="text-xs text-muted-foreground">SXSW 2025</div>
                      </div>
                    </a>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full mt-6 bg-transparent">
                  <Link href="#media">View All Media</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-4 shadow-lg">
                  <Lightbulb className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">Templates & Tools</CardTitle>
                <CardDescription>Ready-to-use frameworks and assessment tools</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <ResourceGateModal
                      resourceTitle="AI Ethics Assessment Template"
                      resourceType="template"
                      resourceDescription="Comprehensive checklist for AI ethics assessment"
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">AI Ethics Assessment Template</div>
                          <div className="text-xs text-muted-foreground">Comprehensive checklist</div>
                        </div>
                      </button>
                    </ResourceGateModal>
                  </li>
                  <li>
                    <ResourceGateModal
                      resourceTitle="Bias Detection Toolkit"
                      resourceType="tool"
                      resourceDescription="Technical implementation toolkit for bias detection"
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">Bias Detection Toolkit</div>
                          <div className="text-xs text-muted-foreground">Technical implementation</div>
                        </div>
                      </button>
                    </ResourceGateModal>
                  </li>
                  <li>
                    <ResourceGateModal
                      resourceTitle="Compliance Roadmap Template"
                      resourceType="template"
                      resourceDescription="90-day action plan for compliance"
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">Compliance Roadmap Template</div>
                          <div className="text-xs text-muted-foreground">90-day action plan</div>
                        </div>
                      </button>
                    </ResourceGateModal>
                  </li>
                  <li>
                    <ResourceGateModal
                      resourceTitle="Stakeholder Engagement Guide"
                      resourceType="guide"
                      resourceDescription="Communication framework for stakeholder engagement"
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">Stakeholder Engagement Guide</div>
                          <div className="text-xs text-muted-foreground">Communication framework</div>
                        </div>
                      </button>
                    </ResourceGateModal>
                  </li>
                  <li>
                    <a
                      href="https://pmukyznd.manus.space/"
                      target="_blank"
                      className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2"
                      rel="noreferrer"
                    >
                      <Calculator className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                      <div>
                        <div className="font-medium">ROI Calculator</div>
                        <div className="text-xs text-muted-foreground">Interactive tool</div>
                      </div>
                    </a>
                  </li>
                </ul>
                <ResourceGateModal
                  resourceTitle="All Templates & Tools"
                  resourceType="template"
                  resourceDescription="Access our complete library of templates and tools"
                >
                  <Button variant="outline" className="w-full mt-6 bg-transparent">
                    View All Tools
                  </Button>
                </ResourceGateModal>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-700 flex items-center justify-center mb-4 shadow-lg">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">Training & Workshops</CardTitle>
                <CardDescription>Educational programs and certification courses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="group text-sm hover:text-cyan-600 transition-colors flex items-start gap-2">
                      <Award className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-cyan-600" />
                      <div>
                        <div className="font-medium">AI Governance Certification</div>
                        <div className="text-xs text-muted-foreground">8-week program</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group text-sm hover:text-cyan-600 transition-colors flex items-start gap-2">
                      <Users className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-cyan-600" />
                      <div>
                        <div className="font-medium">Executive Workshop: Tech Equity</div>
                        <div className="text-xs text-muted-foreground">2-day intensive</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group text-sm hover:text-cyan-600 transition-colors flex items-start gap-2">
                      <Users className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-cyan-600" />
                      <div>
                        <div className="font-medium">Inclusive Design Masterclass</div>
                        <div className="text-xs text-muted-foreground">4-week course</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group text-sm hover:text-cyan-600 transition-colors flex items-start gap-2">
                      <Video className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-cyan-600" />
                      <div>
                        <div className="font-medium">On-Demand Webinar Series</div>
                        <div className="text-xs text-muted-foreground">12 sessions available</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/dr-dede/speaking"
                      className="group text-sm hover:text-cyan-600 transition-colors flex items-start gap-2"
                    >
                      <Users className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-cyan-600" />
                      <div>
                        <div className="font-medium">Custom Corporate Training</div>
                        <div className="text-xs text-muted-foreground">Tailored to your needs</div>
                      </div>
                    </a>
                  </li>
                </ul>
                <ResourceGateModal
                  resourceTitle="All Training & Workshops"
                  resourceType="training"
                  resourceDescription="Explore all our training and workshop programs"
                >
                  <Button variant="outline" className="w-full mt-6 bg-transparent">
                    View All Programs
                  </Button>
                </ResourceGateModal>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center mb-4 shadow-lg">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">Industry Reports</CardTitle>
                <CardDescription>Market analysis and trend forecasts</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <ResourceGateModal
                      resourceTitle="State of AI Governance 2025"
                      resourceType="report"
                      resourceDescription="Annual industry report on AI governance"
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">State of AI Governance 2025</div>
                          <div className="text-xs text-muted-foreground">Annual industry report</div>
                        </div>
                      </button>
                    </ResourceGateModal>
                  </li>
                  <li>
                    <ResourceGateModal
                      resourceTitle="Tech Equity Benchmark Study"
                      resourceType="report"
                      resourceDescription="500+ organizations surveyed on tech equity"
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">Tech Equity Benchmark Study</div>
                          <div className="text-xs text-muted-foreground">500+ organizations surveyed</div>
                        </div>
                      </button>
                    </ResourceGateModal>
                  </li>
                  <li>
                    <ResourceGateModal
                      resourceTitle="AI Compliance Cost Analysis"
                      resourceType="report"
                      resourceDescription="ROI & budget planning for AI compliance"
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">AI Compliance Cost Analysis</div>
                          <div className="text-xs text-muted-foreground">ROI & budget planning</div>
                        </div>
                      </button>
                    </ResourceGateModal>
                  </li>
                  <li>
                    <ResourceGateModal
                      resourceTitle="Disability Tech Market Report"
                      resourceType="report"
                      resourceDescription="$500M+ market opportunity in disability tech"
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">Disability Tech Market Report</div>
                          <div className="text-xs text-muted-foreground">$500M+ market opportunity</div>
                        </div>
                      </button>
                    </ResourceGateModal>
                  </li>
                  <li>
                    <ResourceGateModal
                      resourceTitle="Quarterly Trends Digest"
                      resourceType="report"
                      resourceDescription="Latest developments in AI governance and tech equity"
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">Quarterly Trends Digest</div>
                          <div className="text-xs text-muted-foreground">Latest developments</div>
                        </div>
                      </button>
                    </ResourceGateModal>
                  </li>
                </ul>
                <ResourceGateModal
                  resourceTitle="All Industry Reports"
                  resourceType="report"
                  resourceDescription="Access our complete library of industry reports"
                >
                  <Button variant="outline" className="w-full mt-6 bg-transparent">
                    View All Reports
                  </Button>
                </ResourceGateModal>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-500 text-white border-0 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-center text-white drop-shadow-lg">
                Proven Impact Across Industries
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">$1.5B+</div>
                  <div className="text-white/90 text-sm">Total Value Created</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">95%</div>
                  <div className="text-white/90 text-sm">Compliance Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">18mo</div>
                  <div className="text-white/90 text-sm">Average ROI Timeline</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">50+</div>
                  <div className="text-white/90 text-sm">Organizations Transformed</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gradient-to-br from-purple-50 via-white to-cyan-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto bg-white shadow-xl">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Stay Ahead of the Curve</h2>
              <p className="text-muted-foreground mb-6 text-pretty leading-relaxed max-w-xl mx-auto">
                Join 10,000+ leaders receiving exclusive insights on AI governance, tech equity, and inclusive
                innovation. Get monthly updates, early access to new resources, and invitations to exclusive events.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90 shadow-lg">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                No spam. Unsubscribe anytime. Read our{" "}
                <Link href="/resources/privacy" className="underline hover:text-purple-600">
                  privacy policy
                </Link>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-500 text-white border-0 shadow-2xl">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Schedule a complimentary discovery call to discuss how our proven frameworks can drive measurable results
              for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
              >
                <Link href="/case-studies">View Success Stories</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
