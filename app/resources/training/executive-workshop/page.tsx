import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Briefcase,
  CheckCircle2,
  Clock,
  Users,
  ArrowRight,
  Target,
  Lightbulb,
  TrendingUp,
  Shield,
} from "@/components/icons"

export const metadata: Metadata = {
  title: "Executive Workshop: Tech Equity | incluu Training",
  description:
    "Intensive executive workshop on tech equity and inclusive AI leadership. Transform your organization's approach to ethical technology.",
  openGraph: {
    title: "Executive Workshop: Tech Equity | incluu Training",
    description: "Intensive executive workshop led by Dr. Dédé Tetsubayashi",
  },
}

export default function ExecutiveWorkshopPage() {
  return (
    <div className="relative">
      <section className="min-h-[60vh] relative overflow-hidden bg-gradient-to-br from-cyan-600 via-cyan-700 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30" variant="outline">
              Executive Leadership Program
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight text-white drop-shadow-lg">
              Executive Workshop: Tech Equity
            </h1>
            <p className="text-xl text-white/90 mb-8 text-pretty leading-relaxed drop-shadow max-w-3xl mx-auto">
              Transform your leadership team's understanding of tech equity and build inclusive AI strategies that drive
              business growth and social impact
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-cyan-600 hover:bg-gray-100">
                <Link href="/contact?inquiry=training&program=tech-equity">Book Workshop</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm"
              >
                <Link href="/contact?inquiry=training&program=tech-equity">Request Proposal</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card className="bg-gradient-to-br from-cyan-50 to-white border-cyan-200">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-cyan-600 mb-1">2-3 Days</div>
                <div className="text-sm text-muted-foreground">Intensive Workshop</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-200">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-purple-600 mb-1">10-25</div>
                <div className="text-sm text-muted-foreground">Participants</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-50 to-white border-cyan-200">
              <CardContent className="p-6 text-center">
                <Briefcase className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-cyan-600 mb-1">On-Site</div>
                <div className="text-sm text-muted-foreground">Or Virtual</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-200">
              <CardContent className="p-6 text-center">
                <Target className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-purple-600 mb-1">Custom</div>
                <div className="text-sm text-muted-foreground">Tailored Content</div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-balance">Workshop Overview</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 text-pretty leading-relaxed max-w-3xl mx-auto">
              This intensive executive workshop equips leadership teams with the strategic frameworks and practical
              tools to embed tech equity principles across their organization, turning compliance requirements into
              competitive advantages.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white border-cyan-200">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle>Designed For</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>C-suite executives and senior leadership</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Board members and advisors</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Product and technology leaders</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>DEI and people operations executives</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Risk and compliance officers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-purple-200">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Business Outcomes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Aligned leadership vision on tech equity</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Actionable 90-day implementation roadmap</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Risk mitigation and compliance strategies</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Market expansion opportunities identified</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Cross-functional collaboration framework</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance">Workshop Agenda</h2>

            <div className="space-y-6">
              <Card className="bg-white border-cyan-200">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-cyan-600">Day 1</span>
                    </div>
                    <div>
                      <CardTitle>Foundation & Assessment</CardTitle>
                      <CardDescription>Understanding the landscape</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• The business case for tech equity: ROI and risk mitigation</li>
                    <li>• Current state assessment: Where is your organization today?</li>
                    <li>• Regulatory landscape and compliance requirements</li>
                    <li>• Case studies: Success stories and cautionary tales</li>
                    <li>• Interactive exercise: Identifying blind spots in your AI systems</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-purple-200">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-purple-600">Day 2</span>
                    </div>
                    <div>
                      <CardTitle>Strategy & Framework Development</CardTitle>
                      <CardDescription>Building your roadmap</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• "Solve for One, Extend to Many" methodology deep dive</li>
                    <li>• Building cross-functional governance teams</li>
                    <li>• Developing your organization's tech equity framework</li>
                    <li>• Change management strategies for cultural transformation</li>
                    <li>• Workshop: Creating your 90-day action plan</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-cyan-200">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-cyan-600">Day 3</span>
                    </div>
                    <div>
                      <CardTitle>Implementation & Accountability</CardTitle>
                      <CardDescription>Making it real (Optional)</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Measuring success: KPIs and metrics that matter</li>
                    <li>• Building accountability structures and governance processes</li>
                    <li>• Communication strategies for internal and external stakeholders</li>
                    <li>• Preparing for audits and regulatory scrutiny</li>
                    <li>• Action planning: Next steps and commitment to change</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance">What's Included</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-cyan-50 to-white border-cyan-200">
                <CardHeader>
                  <Lightbulb className="h-10 w-10 text-cyan-600 mb-4" />
                  <CardTitle className="text-lg">Expert Facilitation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Led by Dr. Dédé Tetsubayashi with 25+ years of experience and $700M+ in proven business impact
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-200">
                <CardHeader>
                  <Shield className="h-10 w-10 text-purple-600 mb-4" />
                  <CardTitle className="text-lg">Custom Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Tailored frameworks, templates, and tools specific to your industry and organizational needs
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-cyan-50 to-white border-cyan-200">
                <CardHeader>
                  <Users className="h-10 w-10 text-cyan-600 mb-4" />
                  <CardTitle className="text-lg">Follow-Up Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    90-day post-workshop support including office hours and implementation guidance
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-cyan-600 via-cyan-700 to-purple-600 text-white border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance drop-shadow">
                Transform Your Leadership Team
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-pretty leading-relaxed">
                Book an executive workshop and align your leadership on tech equity strategies that drive business
                growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="bg-white text-cyan-600 hover:bg-gray-100 shadow-lg"
                >
                  <Link href="/contact?inquiry=training&program=tech-equity">
                    Book Workshop
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm shadow-lg"
                >
                  <Link href="/contact?inquiry=training&program=tech-equity">Request Custom Proposal</Link>
                </Button>
              </div>
              <p className="text-sm opacity-75 mt-6">Available for on-site or virtual delivery worldwide</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
