import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, Calendar, CheckCircle2, ArrowRight, Video, Users, BookOpen, Briefcase } from "@/components/icons"

export const metadata: Metadata = {
  title: "On-Demand Webinar Series | incluu Resources",
  description:
    "Access our library of on-demand webinars on AI governance, tech equity, and inclusive design. Learn from Dr. Dédé Tetsubayashi.",
  openGraph: {
    title: "On-Demand Webinar Series | incluu Resources",
    description: "On-demand webinars on AI governance and tech equity",
  },
}

export default function WebinarsPage() {
  return (
    <div className="relative">
      <section className="min-h-[60vh] relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-cyan-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30" variant="outline">
              On-Demand Learning
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight text-white drop-shadow-lg">
              Webinar Series
            </h1>
            <p className="text-xl text-white/90 mb-8 text-pretty leading-relaxed drop-shadow max-w-3xl mx-auto">
              Access our growing library of on-demand webinars covering AI governance, tech equity, compliance
              strategies, and inclusive design best practices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                <Link href="/contact?inquiry=training&program=webinars">Get Access</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm"
              >
                <Link href="/contact?inquiry=training&program=webinars">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-200">
              <CardContent className="p-6 text-center">
                <Video className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-purple-600 mb-1">20+ Hours</div>
                <div className="text-sm text-muted-foreground">Expert Content</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-50 to-white border-cyan-200">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-cyan-600 mb-1">On-Demand</div>
                <div className="text-sm text-muted-foreground">Watch Anytime</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-200">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-purple-600 mb-1">Monthly</div>
                <div className="text-sm text-muted-foreground">New Content</div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance">Featured Webinars</h2>

            <div className="space-y-6">
              <Card className="bg-white border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Play className="h-8 w-8 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-purple-100 text-purple-700 border-purple-200" variant="outline">
                          AI Governance
                        </Badge>
                        <span className="text-sm text-muted-foreground">60 minutes</span>
                      </div>
                      <CardTitle className="text-xl mb-2">
                        Building Your First AI Governance Framework: A Step-by-Step Guide
                      </CardTitle>
                      <CardDescription>
                        Learn how to establish a comprehensive AI governance framework that ensures compliance,
                        mitigates risk, and drives business value. Includes templates and real-world examples.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">
                      Compliance
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Risk Management
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Templates Included
                    </Badge>
                  </div>
                  <Button asChild className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700">
                    <Link href="/contact?inquiry=training&program=webinars">
                      Watch Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-cyan-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                      <Play className="h-8 w-8 text-cyan-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-cyan-100 text-cyan-700 border-cyan-200" variant="outline">
                          Inclusive Design
                        </Badge>
                        <span className="text-sm text-muted-foreground">45 minutes</span>
                      </div>
                      <CardTitle className="text-xl mb-2">
                        Solve for One, Extend to Many: The Inclusive Design Methodology
                      </CardTitle>
                      <CardDescription>
                        Discover how designing for edge cases creates better products for everyone. Learn Dr. Dédé's
                        proven methodology with case studies showing $500M+ in market expansion.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">
                      Accessibility
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Market Expansion
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Case Studies
                    </Badge>
                  </div>
                  <Button asChild className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-700">
                    <Link href="/contact?inquiry=training&program=webinars">
                      Watch Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Play className="h-8 w-8 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-purple-100 text-purple-700 border-purple-200" variant="outline">
                          Compliance
                        </Badge>
                        <span className="text-sm text-muted-foreground">75 minutes</span>
                      </div>
                      <CardTitle className="text-xl mb-2">
                        Navigating the EU AI Act: What US Companies Need to Know
                      </CardTitle>
                      <CardDescription>
                        Comprehensive overview of the EU AI Act and its implications for US-based companies. Learn
                        compliance strategies and avoid costly violations.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">
                      Regulatory
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      International
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Compliance Checklist
                    </Badge>
                  </div>
                  <Button asChild className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700">
                    <Link href="/contact?inquiry=training&program=webinars">
                      Watch Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-cyan-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                      <Play className="h-8 w-8 text-cyan-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-cyan-100 text-cyan-700 border-cyan-200" variant="outline">
                          Bias Detection
                        </Badge>
                        <span className="text-sm text-muted-foreground">90 minutes</span>
                      </div>
                      <CardTitle className="text-xl mb-2">
                        Algorithmic Bias Detection and Mitigation: Tools and Techniques
                      </CardTitle>
                      <CardDescription>
                        Hands-on workshop covering bias detection methodologies, testing tools, and mitigation
                        strategies. Includes practical exercises and real-world examples.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">
                      Technical
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Hands-On
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Tools Demo
                    </Badge>
                  </div>
                  <Button asChild className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-700">
                    <Link href="/contact?inquiry=training&program=webinars">
                      Watch Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Play className="h-8 w-8 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-purple-100 text-purple-700 border-purple-200" variant="outline">
                          Leadership
                        </Badge>
                        <span className="text-sm text-muted-foreground">50 minutes</span>
                      </div>
                      <CardTitle className="text-xl mb-2">
                        Building Cross-Functional AI Governance Teams: Roles and Responsibilities
                      </CardTitle>
                      <CardDescription>
                        Learn how to structure effective AI governance teams, define roles, and establish accountability
                        frameworks that drive organizational change.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">
                      Organizational
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Change Management
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Team Building
                    </Badge>
                  </div>
                  <Button asChild className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700">
                    <Link href="/contact?inquiry=training&program=webinars">
                      Watch Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance">Access Options</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white border-purple-200">
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-purple-600 mb-4" />
                  <CardTitle className="text-lg">Individual Access</CardTitle>
                  <CardDescription>Perfect for professionals</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Full webinar library access</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Downloadable resources</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Monthly new content</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Certificate of completion</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                    <Link href="/contact?inquiry=training&program=webinars">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-cyan-50 to-purple-50 border-cyan-300 relative">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-cyan-600 text-white">Popular</Badge>
                </div>
                <CardHeader>
                  <Users className="h-10 w-10 text-cyan-600 mb-4" />
                  <CardTitle className="text-lg">Team License</CardTitle>
                  <CardDescription>For teams of 5-25</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Everything in Individual</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Team dashboard and analytics</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Quarterly live Q&A sessions</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Priority support</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-700">
                    <Link href="/contact?inquiry=training&program=webinars">Contact Sales</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-purple-200">
                <CardHeader>
                  <Briefcase className="h-10 w-10 text-purple-600 mb-4" />
                  <CardTitle className="text-lg">Enterprise</CardTitle>
                  <CardDescription>For organizations 25+</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Everything in Team</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Custom content creation</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>SSO and LMS integration</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                    <Link href="/contact?inquiry=training&program=webinars">Request Demo</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-purple-600 via-purple-700 to-cyan-600 text-white border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance drop-shadow">Start Learning Today</h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-pretty leading-relaxed">
                Get instant access to our complete webinar library and start building your AI governance expertise
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg"
                >
                  <Link href="/contact?inquiry=training&program=webinars">
                    Get Access Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm shadow-lg"
                >
                  <Link href="/contact?inquiry=training&program=webinars">Schedule Demo</Link>
                </Button>
              </div>
              <p className="text-sm opacity-75 mt-6">New webinars added monthly - Cancel anytime</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
