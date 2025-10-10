import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, Users, ArrowRight, Heart, Palette, Code, Eye, Sparkles, Target } from "@/components/icons"

export const metadata: Metadata = {
  title: "Inclusive Design Masterclass | incluu Training",
  description:
    "Master inclusive design principles and accessibility-first methodologies. Learn to create products that serve everyone.",
  openGraph: {
    title: "Inclusive Design Masterclass | incluu Training",
    description: "Inclusive design masterclass led by Dr. Dédé Tetsubayashi",
  },
}

export default function InclusiveDesignMasterclassPage() {
  return (
    <div className="relative">
      <section className="min-h-[60vh] relative overflow-hidden bg-gradient-to-br from-purple-600 via-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30" variant="outline">
              Hands-On Masterclass
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight text-white drop-shadow-lg">
              Inclusive Design Masterclass
            </h1>
            <p className="text-xl text-white/90 mb-8 text-pretty leading-relaxed drop-shadow max-w-3xl mx-auto">
              Learn to design products and experiences that work for everyone through accessibility-first principles and
              the "Solve for One, Extend to Many" methodology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                <Link href="/contact?inquiry=training&program=inclusive-design">Register Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm"
              >
                <Link href="/contact?inquiry=training&program=inclusive-design">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-200">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-purple-600 mb-1">4 Weeks</div>
                <div className="text-sm text-muted-foreground">Course Duration</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-50 to-white border-cyan-200">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-cyan-600 mb-1">Live + Async</div>
                <div className="text-sm text-muted-foreground">Learning Format</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-200">
              <CardContent className="p-6 text-center">
                <Code className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-purple-600 mb-1">Hands-On</div>
                <div className="text-sm text-muted-foreground">Practical Projects</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-50 to-white border-cyan-200">
              <CardContent className="p-6 text-center">
                <Sparkles className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-cyan-600 mb-1">Certificate</div>
                <div className="text-sm text-muted-foreground">Upon Completion</div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-balance">Masterclass Overview</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 text-pretty leading-relaxed max-w-3xl mx-auto">
              This intensive masterclass teaches designers, developers, and product managers how to create inclusive
              digital experiences that expand market reach while meeting accessibility standards and compliance
              requirements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white border-purple-200">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Perfect For</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>UX/UI designers and design leads</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Product managers and owners</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Frontend developers and engineers</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Content strategists and writers</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Accessibility specialists</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-cyan-200">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle>What You'll Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>"Solve for One, Extend to Many" methodology</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>WCAG 2.2 compliance and best practices</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Inclusive user research methods</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Accessible design patterns and components</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Testing and validation strategies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance">Course Curriculum</h2>

            <div className="space-y-6">
              <Card className="bg-white border-purple-200">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-purple-600">Week 1</span>
                    </div>
                    <div>
                      <CardTitle>Foundations of Inclusive Design</CardTitle>
                      <CardDescription>Understanding accessibility and inclusion</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• The business case for inclusive design</li>
                    <li>• Disability models and lived experiences</li>
                    <li>• Introduction to WCAG 2.2 and accessibility standards</li>
                    <li>• Common accessibility barriers and how to avoid them</li>
                    <li>• Project: Accessibility audit of existing product</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-cyan-200">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-cyan-600">Week 2</span>
                    </div>
                    <div>
                      <CardTitle>Inclusive Research & Strategy</CardTitle>
                      <CardDescription>Understanding diverse user needs</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Recruiting and working with diverse participants</li>
                    <li>• Accessible research methods and tools</li>
                    <li>• Creating inclusive personas and user journeys</li>
                    <li>• "Solve for One, Extend to Many" deep dive</li>
                    <li>• Project: Conduct inclusive user research</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-purple-200">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-purple-600">Week 3</span>
                    </div>
                    <div>
                      <CardTitle>Accessible Design Patterns</CardTitle>
                      <CardDescription>Building inclusive interfaces</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Color, contrast, and visual design for accessibility</li>
                    <li>• Typography and readability best practices</li>
                    <li>• Keyboard navigation and focus management</li>
                    <li>• Screen reader optimization and ARIA</li>
                    <li>• Project: Redesign component library for accessibility</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-cyan-200">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-cyan-600">Week 4</span>
                    </div>
                    <div>
                      <CardTitle>Testing, Implementation & Advocacy</CardTitle>
                      <CardDescription>Ensuring quality and driving change</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Automated and manual accessibility testing</li>
                    <li>• Working with assistive technologies</li>
                    <li>• Building accessibility into design systems</li>
                    <li>• Advocating for accessibility in your organization</li>
                    <li>• Final project: Present inclusive design case study</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance">Course Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-200">
                <CardHeader>
                  <Palette className="h-10 w-10 text-purple-600 mb-4" />
                  <CardTitle className="text-lg">Live Design Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Weekly live sessions with Dr. Dédé reviewing your work and providing personalized feedback
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-cyan-50 to-white border-cyan-200">
                <CardHeader>
                  <Eye className="h-10 w-10 text-cyan-600 mb-4" />
                  <CardTitle className="text-lg">Real-World Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Apply learnings to your actual products or work on provided case studies from real companies
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-200">
                <CardHeader>
                  <Heart className="h-10 w-10 text-purple-600 mb-4" />
                  <CardTitle className="text-lg">Community Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Join a community of inclusive design practitioners and continue learning after the course
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-purple-600 via-cyan-600 to-purple-700 text-white border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance drop-shadow">Master Inclusive Design</h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-pretty leading-relaxed">
                Join the next cohort and learn to create products that work for everyone while expanding your market
                reach
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg"
                >
                  <Link href="/contact?inquiry=training&program=inclusive-design">
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm shadow-lg"
                >
                  <Link href="/contact?inquiry=training&program=inclusive-design">Download Syllabus</Link>
                </Button>
              </div>
              <p className="text-sm opacity-75 mt-6">Next cohort starts Q1 2026 - Early bird pricing available</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
