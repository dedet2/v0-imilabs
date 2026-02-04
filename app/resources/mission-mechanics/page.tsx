import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Zap,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Target,
  Settings,
  BarChart3,
  Rocket,
  Star,
} from "@/components/icons"

export const metadata: Metadata = {
  title: "Mission Mechanics Lab | Dr. Dédé Tetsubayashi",
  description:
    "Transform your business with the Mission Mechanics Lab - a comprehensive 12-week program for operational excellence and AI integration.",
  alternates: {
    canonical: "https://dr-dede.com/resources/mission-mechanics",
  },
  openGraph: {
    title: "Mission Mechanics Lab | Dr. Dédé Tetsubayashi",
    description:
      "The Mission Mechanics Lab is a comprehensive 12-week program that transforms how your business operates, integrates AI, and achieves breakthrough results.",
  },
}

const problems = [
  "You're constantly putting out fires instead of preventing them",
  "Your team lacks clear processes and accountability",
  "AI tools are scattered and underutilized",
  "Growth feels chaotic and unsustainable",
  "You're working harder but not seeing proportional results",
]

const solutions = [
  "Build systematic processes that run without you",
  "Create clear accountability and communication systems",
  "Strategically integrate AI for maximum impact",
  "Design scalable systems for sustainable growth",
  "Focus on high-impact activities that drive results",
]

const curriculum = [
  {
    weeks: "Weeks 1-2",
    title: "Mission Foundation",
    description: "Establish your operational mission and core principles",
    topics: ["Vision Clarity", "Goal Architecture", "Success Metrics"],
  },
  {
    weeks: "Weeks 3-4",
    title: "Process Mechanics",
    description: "Design and optimize your core business processes",
    topics: ["Process Mapping", "Bottleneck Analysis", "Automation Opportunities"],
  },
  {
    weeks: "Weeks 5-6",
    title: "AI Integration",
    description: "Strategically implement AI tools for maximum impact",
    topics: ["AI Tool Selection", "Integration Planning", "Team Training"],
  },
  {
    weeks: "Weeks 7-8",
    title: "Team Dynamics",
    description: "Align your team for peak performance and collaboration",
    topics: ["Communication Systems", "Accountability Frameworks", "Culture Design"],
  },
  {
    weeks: "Weeks 9-10",
    title: "Performance Optimization",
    description: "Measure, analyze, and continuously improve results",
    topics: ["KPI Development", "Data Analysis", "Continuous Improvement"],
  },
  {
    weeks: "Weeks 11-12",
    title: "Sustainable Growth",
    description: "Build systems for long-term success and scalability",
    topics: ["Scaling Strategies", "Leadership Development", "Future Planning"],
  },
]

const benefits = [
  {
    title: "Comprehensive Training Modules",
    description: "12 weeks of structured learning with actionable frameworks and tools",
  },
  {
    title: "Live Group Coaching",
    description: "Weekly sessions with expert facilitators and peer learning",
  },
  {
    title: "Personal 1:1 Coaching",
    description: "Individual sessions tailored to your specific challenges",
  },
  {
    title: "AI Implementation Playbooks",
    description: "Step-by-step guides for integrating AI into your operations",
  },
  {
    title: "Custom Process Templates",
    description: "Ready-to-use templates for common business processes",
  },
  {
    title: "Performance Tracking System",
    description: "Metrics and dashboards to measure your progress",
  },
  {
    title: "Exclusive Community Access",
    description: "Network with like-minded business leaders and experts",
  },
  {
    title: "Ongoing Support",
    description: "Continued access to resources and community after graduation",
  },
]

const packages = [
  {
    name: "Foundation Program",
    price: "$4,997",
    originalPrice: "$7,500",
    duration: "8 Weeks Program",
    description: "Perfect for teams new to operational excellence and AI integration",
    features: [
      "Core Mission Mechanics Framework",
      "Weekly Group Coaching Sessions",
      "Essential AI Tools Training",
      "Process Optimization Fundamentals",
      "Team Alignment Workshops",
      "Basic Performance Metrics Setup",
      "Community Access (6 months)",
      "Implementation Workbooks",
    ],
    popular: false,
  },
  {
    name: "Accelerator Program",
    price: "$9,997",
    originalPrice: "$15,000",
    duration: "12 Weeks Program",
    description: "Most comprehensive program for serious transformation",
    features: [
      "Everything in Foundation Program",
      "Advanced AI Implementation Strategies",
      "Personal 1:1 Coaching Sessions (4 sessions)",
      "Custom Operational Playbooks",
      "Leadership Transformation Module",
      "Advanced Analytics & Reporting",
      "Priority Support & Direct Access",
      "Lifetime Community Access",
      "Quarterly Mastermind Sessions",
      "Done-With-You Implementation",
    ],
    popular: true,
  },
  {
    name: "Enterprise Program",
    price: "$24,997",
    originalPrice: "$40,000",
    duration: "16 Weeks Program",
    description: "Complete organizational transformation for large teams",
    features: [
      "Everything in Accelerator Program",
      "Dedicated Success Manager",
      "Custom Training for Your Team",
      "Executive Leadership Intensive",
      "Multi-Department Integration",
      "Advanced Change Management",
      "Custom AI Solution Development",
      "Ongoing Support (12 months)",
      "Executive Reporting Dashboard",
      "ROI Guarantee Program",
    ],
    popular: false,
  },
]

const testimonials = [
  {
    quote:
      "In 12 weeks, we went from chaos to a well-oiled machine. Our productivity increased by 400% and our team stress levels dropped dramatically.",
    author: "Alex Thompson",
    title: "CEO, Digital Dynamics",
  },
  {
    quote:
      "The AI integration strategies alone saved us 25 hours per week. The ROI was evident within the first month.",
    author: "Maria Santos",
    title: "Operations Director, TechFlow",
  },
  {
    quote:
      "Finally, a program that delivers real results. Our revenue increased by 60% while working fewer hours. Life-changing!",
    author: "David Kim",
    title: "Founder, Growth Labs",
  },
]

export default function MissionMechanicsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/resources"
              className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
              Back to Resources
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-full bg-purple-400/30 backdrop-blur-sm border border-purple-300/40 flex items-center justify-center">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <Badge className="bg-purple-400/30 backdrop-blur-sm text-white border-purple-300/40">
                Transformation Program
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Transform Your Business Into a High-Performance Machine
            </h1>
            <p className="text-xl text-white/90 mb-10 max-w-3xl text-pretty">
              The Mission Mechanics Lab™ is a comprehensive 12-week program that transforms how your business operates,
              integrates AI, and achieves breakthrough results.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-purple-400/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/40">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-yellow-300" />
                </div>
                <div className="text-3xl font-bold mb-1">300%</div>
                <div className="text-sm text-white">Productivity Gain</div>
                <div className="text-xs text-purple-100 mt-1">Average improvement in team efficiency</div>
              </div>
              <div className="bg-cyan-500 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/50">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-yellow-300" />
                </div>
                <div className="text-3xl font-bold mb-1">15+ Hours</div>
                <div className="text-sm text-white">Saved Per Week</div>
                <div className="text-xs text-cyan-100 mt-1">Through process optimization</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500/60 to-cyan-500/60 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/30">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-5 w-5 text-yellow-300" />
                </div>
                <div className="text-3xl font-bold mb-1">95%</div>
                <div className="text-sm text-white">Success Rate</div>
                <div className="text-xs text-purple-100 mt-1">Participants achieve their goals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Are You Tired of Working IN Your Business Instead of ON It?
            </h2>
            <p className="text-lg text-muted-foreground">
              Most business leaders are trapped in operational chaos, fighting fires instead of building systems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* The Problem */}
            <Card className="bg-white border-red-200">
              <CardHeader>
                <CardTitle className="text-xl text-red-600">The Problem</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {problems.map((problem, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-600 text-sm font-bold">✕</span>
                      </div>
                      <span className="text-gray-700">{problem}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* The Solution */}
            <Card className="bg-white border-green-200">
              <CardHeader>
                <CardTitle className="text-xl text-green-600">The Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-cyan-400 text-white border-0">Curriculum</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Mission Mechanics Lab<sup className="text-lg">TM</sup> Curriculum
            </h2>
            <p className="text-lg text-muted-foreground">
              A systematic approach to operational excellence and AI integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {curriculum.map((week, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2 text-purple-600 border-purple-200">
                    {week.weeks}
                  </Badge>
                  <CardTitle className="text-lg">{week.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{week.description}</p>
                  <ul className="space-y-2">
                    {week.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-cyan-500" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <h3 className="text-xl text-muted-foreground">
              What You Get in the Mission Mechanics Lab<sup className="text-sm">TM</sup>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Transformation Level</h2>
            <p className="text-lg text-muted-foreground">
              Select the program that matches your business goals and commitment level
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${pkg.popular ? "border-2 border-cyan-500 shadow-xl scale-105" : "border border-gray-200"}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-4 py-1 border-0">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl mb-2">{pkg.name}</CardTitle>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {pkg.duration}
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-3">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full ${pkg.popular ? "bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600" : ""}`}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    <Link href="/contact?service=mission-mechanics">
                      Start Your Transformation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories from the Lab</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the Mission Mechanics Lab<sup className="text-lg">TM</sup>
            </h2>
            <p className="text-lg text-white/90 mb-4">
              Build the high-performance business you've always envisioned. Limited spots available.
            </p>
            <p className="text-sm text-white/70 mb-8">90-day results guarantee • Only 20 spots per cohort</p>
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-white/90 font-semibold">
              <Link href="/contact?service=mission-mechanics">
                Schedule A Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
