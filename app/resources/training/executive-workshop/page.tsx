import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Calendar, CheckCircle, ArrowRight, Clock, Target, Briefcase } from "@/components/icons"

export const metadata: Metadata = {
  title: "Executive Workshop: Tech Equity | Dr. Dédé Tetsubayashi",
  description:
    "Intensive 2-day executive workshop on tech equity, inclusive innovation, and building equitable technology organizations.",
  openGraph: {
    title: "Executive Workshop: Tech Equity | Dr. Dédé Tetsubayashi",
    description: "2-day intensive executive workshop on tech equity and inclusive innovation",
  },
}

export default function ExecutiveWorkshopPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#06b6d4] via-[#6366f1] to-[#7209b7] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm" variant="outline">
              Executive Leadership
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white drop-shadow-lg">
              Executive Workshop: Tech Equity
            </h1>
            <p className="text-xl text-white/90 text-pretty leading-relaxed drop-shadow mb-8">
              Transform your organization's approach to technology equity. This intensive 2-day workshop equips
              executive leaders with strategies, frameworks, and actionable plans for building truly inclusive
              technology organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-cyan-600 hover:bg-gray-100 shadow-lg"
              >
                <Link href="/contact?inquiry=training&program=executive-workshop">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
              >
                <Link href="#agenda">View Agenda</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">2 Days</div>
                <div className="text-sm text-muted-foreground">Intensive Workshop</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">In-Person</div>
                <div className="text-sm text-muted-foreground">On-site or Virtual</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-cyan-50 to-purple-50 border-cyan-200">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">15-25</div>
                <div className="text-sm text-muted-foreground">Executive Leaders</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-cyan-100 border-purple-200">
              <CardContent className="p-6 text-center">
                <Briefcase className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">Action Plan</div>
                <div className="text-sm text-muted-foreground">Customized Roadmap</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Workshop Outcomes</h2>
              <ul className="space-y-4">
                {[
                  "Strategic framework for tech equity implementation",
                  "Data-driven approach to measuring diversity and inclusion",
                  "Inclusive hiring and retention strategies",
                  "Accessible product development methodologies",
                  "Equitable resource allocation frameworks",
                  "Stakeholder engagement and communication plans",
                  "90-day action plan customized to your organization",
                  "Executive toolkit with templates and resources",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Designed For</h2>
              <ul className="space-y-4 mb-8">
                {[
                  "C-suite executives (CEO, CTO, CPO, CHRO)",
                  "VP-level technology and product leaders",
                  "Diversity, equity, and inclusion executives",
                  "Chief Innovation Officers",
                  "Board members overseeing technology strategy",
                  "Executive teams planning transformation initiatives",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Card className="bg-gradient-to-br from-cyan-600 to-purple-600 text-white border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Investment</h3>
                  <div className="text-3xl font-bold mb-2">$12,500</div>
                  <p className="text-white/90 text-sm mb-4">Per participant (minimum 10 participants)</p>
                  <p className="text-white/90 text-sm">
                    Includes pre-workshop assessment, all materials, 90-day action plan, and 3 months of post-workshop
                    support
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Agenda */}
          <div id="agenda" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">2-Day Agenda</h2>
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-cyan-50 to-purple-50">
                  <CardTitle className="text-2xl">Day 1: Foundation & Strategy</CardTitle>
                  <CardDescription>Building the business case and strategic framework</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[
                      {
                        time: "9:00 AM - 10:30 AM",
                        title: "The Business Case for Tech Equity",
                        description: "Market opportunities, risk mitigation, and competitive advantage",
                      },
                      {
                        time: "10:45 AM - 12:15 PM",
                        title: "Current State Assessment",
                        description: "Interactive workshop to assess your organization's tech equity maturity",
                      },
                      {
                        time: "1:15 PM - 3:00 PM",
                        title: "Strategic Framework Development",
                        description: "Building your organization's tech equity strategy and goals",
                      },
                      {
                        time: "3:15 PM - 5:00 PM",
                        title: "Inclusive Product Development",
                        description: "Methodologies for building accessible, equitable technology products",
                      },
                    ].map((session, index) => (
                      <div key={index} className="flex gap-4 pb-4 border-b last:border-0">
                        <div className="flex-shrink-0 w-32 text-sm font-medium text-cyan-600">{session.time}</div>
                        <div className="flex-1">
                          <div className="font-semibold mb-1">{session.title}</div>
                          <div className="text-sm text-muted-foreground">{session.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-cyan-50">
                  <CardTitle className="text-2xl">Day 2: Implementation & Action Planning</CardTitle>
                  <CardDescription>Practical strategies and customized roadmap development</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[
                      {
                        time: "9:00 AM - 10:30 AM",
                        title: "Inclusive Hiring & Retention",
                        description: "Strategies for building and retaining diverse technology teams",
                      },
                      {
                        time: "10:45 AM - 12:15 PM",
                        title: "Equitable Resource Allocation",
                        description: "Frameworks for fair distribution of opportunities and resources",
                      },
                      {
                        time: "1:15 PM - 3:00 PM",
                        title: "Change Management & Stakeholder Engagement",
                        description: "Building buy-in and managing organizational transformation",
                      },
                      {
                        time: "3:15 PM - 5:00 PM",
                        title: "90-Day Action Plan Development",
                        description: "Creating your customized implementation roadmap with milestones",
                      },
                    ].map((session, index) => (
                      <div key={index} className="flex gap-4 pb-4 border-b last:border-0">
                        <div className="flex-shrink-0 w-32 text-sm font-medium text-purple-600">{session.time}</div>
                        <div className="flex-1">
                          <div className="font-semibold mb-1">{session.title}</div>
                          <div className="text-sm text-muted-foreground">{session.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Results */}
          <Card className="bg-gradient-to-br from-cyan-50 to-purple-50 border-cyan-200 mb-16">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Expected Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Target className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold mb-2">30%+</div>
                  <div className="text-sm text-muted-foreground">
                    Increase in underrepresented talent within 18 months
                  </div>
                </div>
                <div className="text-center">
                  <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold mb-2">15%+</div>
                  <div className="text-sm text-muted-foreground">Market expansion through inclusive products</div>
                </div>
                <div className="text-center">
                  <Target className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold mb-2">90%+</div>
                  <div className="text-sm text-muted-foreground">Employee satisfaction with inclusion initiatives</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-to-br from-cyan-700 via-cyan-600 to-purple-600 text-white border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
                Transform Your Organization's Approach to Tech Equity
              </h2>
              <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow">
                Join executive leaders from Fortune 500 companies who have successfully implemented tech equity
                strategies that drive both social impact and business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="bg-white text-cyan-700 hover:bg-gray-100 shadow-lg"
                >
                  <Link href="/contact?inquiry=training&program=executive-workshop">
                    Register Your Team
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
                >
                  <Link href="/contact?inquiry=training&program=executive-workshop">Schedule a Call</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
