import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Calendar, Users, CheckCircle, ArrowRight, Clock, BookOpen } from "@/components/icons"

export const metadata: Metadata = {
  title: "AI Governance Certification | Dr. Dédé Tetsubayashi",
  description:
    "Comprehensive 8-week certification program in AI governance, compliance, and risk management. Learn from industry expert Dr. Dédé Tetsubayashi.",
  openGraph: {
    title: "AI Governance Certification | Dr. Dédé Tetsubayashi",
    description: "8-week certification program in AI governance and compliance",
  },
}

export default function AIGovernanceCertificationPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#7209b7] via-[#6366f1] to-[#06b6d4] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm" variant="outline">
              Professional Certification
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white drop-shadow-lg">
              AI Governance Certification
            </h1>
            <p className="text-xl text-white/90 text-pretty leading-relaxed drop-shadow mb-8">
              Master the frameworks, methodologies, and best practices for implementing comprehensive AI governance in
              your organization. 8-week intensive program led by Dr. Dédé Tetsubayashi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg"
              >
                <Link href="/contact?inquiry=training&program=ai-governance-certification">
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
              >
                <Link href="#curriculum">View Curriculum</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">8 Weeks</div>
                <div className="text-sm text-muted-foreground">Program Duration</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">Live + Async</div>
                <div className="text-sm text-muted-foreground">Learning Format</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-cyan-50 border-purple-200">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">20-30</div>
                <div className="text-sm text-muted-foreground">Cohort Size</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">Certificate</div>
                <div className="text-sm text-muted-foreground">Upon Completion</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">What You'll Learn</h2>
              <ul className="space-y-4">
                {[
                  "Comprehensive AI governance frameworks and methodologies",
                  "Regulatory compliance across major jurisdictions (EU AI Act, GDPR, US frameworks)",
                  "Risk assessment and mitigation strategies for AI systems",
                  "Ethical AI principles and implementation practices",
                  "Stakeholder engagement and governance structure design",
                  "Automated compliance monitoring and reporting",
                  "Real-world case studies and implementation roadmaps",
                  "Tools and templates for immediate application",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Who Should Attend</h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Chief AI Officers and AI governance leaders",
                  "Compliance and risk management professionals",
                  "Product managers working with AI systems",
                  "Legal and policy professionals in tech",
                  "Data scientists and ML engineers",
                  "Executive leadership overseeing AI initiatives",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Card className="bg-gradient-to-br from-purple-600 to-cyan-600 text-white border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Investment</h3>
                  <div className="text-3xl font-bold mb-2">$4,995</div>
                  <p className="text-white/90 text-sm mb-4">
                    Includes all course materials, templates, tools, and lifetime access to resources
                  </p>
                  <p className="text-white/90 text-sm">Group discounts available for 3+ participants</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Curriculum */}
          <div id="curriculum" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">8-Week Curriculum</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  week: 1,
                  title: "Foundations of AI Governance",
                  topics: ["AI governance landscape", "Regulatory overview", "Risk frameworks"],
                },
                {
                  week: 2,
                  title: "Compliance & Regulatory Requirements",
                  topics: ["EU AI Act deep dive", "GDPR & data protection", "US regulatory landscape"],
                },
                {
                  week: 3,
                  title: "Risk Assessment & Management",
                  topics: ["Risk identification", "Assessment methodologies", "Mitigation strategies"],
                },
                {
                  week: 4,
                  title: "Ethical AI Principles",
                  topics: ["Ethics frameworks", "Bias detection", "Fairness metrics"],
                },
                {
                  week: 5,
                  title: "Governance Structure Design",
                  topics: ["Organizational models", "Roles & responsibilities", "Decision-making processes"],
                },
                {
                  week: 6,
                  title: "Implementation & Monitoring",
                  topics: ["Deployment strategies", "Automated monitoring", "Continuous improvement"],
                },
                {
                  week: 7,
                  title: "Stakeholder Engagement",
                  topics: ["Communication strategies", "Change management", "Building buy-in"],
                },
                {
                  week: 8,
                  title: "Capstone Project & Certification",
                  topics: ["Real-world application", "Peer review", "Final assessment"],
                },
              ].map((week) => (
                <Card key={week.week} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Badge className="w-fit mb-2" variant="outline">
                      Week {week.week}
                    </Badge>
                    <CardTitle className="text-xl">{week.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {week.topics.map((topic, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <BookOpen className="h-4 w-4 text-purple-600 flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Instructor */}
          <Card className="bg-gradient-to-br from-purple-50 to-cyan-50 border-purple-200 mb-16">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Your Instructor</h2>
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4">Dr. Dédé Tetsubayashi</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Dr. Dédé is a globally recognized expert in AI governance and tech equity, with over 15 years of
                  experience advising Fortune 500 companies, startups, and government agencies. She has helped
                  organizations implement governance frameworks that have enabled $1.5B+ in value creation while
                  maintaining 95%+ compliance rates across all jurisdictions.
                </p>
                <Button asChild variant="outline">
                  <Link href="/dr-dede">Learn More About Dr. Dédé</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-to-br from-purple-700 via-purple-600 to-cyan-600 text-white border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
                Ready to Become an AI Governance Expert?
              </h2>
              <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow">
                Join the next cohort and gain the skills, frameworks, and certification to lead AI governance in your
                organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="bg-white text-purple-700 hover:bg-gray-100 shadow-lg"
                >
                  <Link href="/contact?inquiry=training&program=ai-governance-certification">
                    Enroll Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
                >
                  <Link href="/contact?inquiry=training&program=ai-governance-certification">
                    Request Group Pricing
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
