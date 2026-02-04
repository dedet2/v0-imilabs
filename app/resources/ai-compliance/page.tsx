import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  FileText,
  Scale,
  AlertTriangle,
} from "@/components/icons"

export const metadata: Metadata = {
  title: "AI Compliance Quickscan | Dr. Dédé Tetsubayashi",
  description:
    "Get a comprehensive AI compliance assessment in just 2-5 business days. Identify critical gaps before they become costly violations.",
  alternates: {
    canonical: "https://dr-dede.com/resources/ai-compliance",
  },
  openGraph: {
    title: "AI Compliance Quickscan | Dr. Dédé Tetsubayashi",
    description:
      "Comprehensive AI compliance assessment designed specifically for AI implementations. Identify critical gaps before they become costly violations.",
  },
}

const risks = [
  {
    title: "Regulatory Violations",
    description: "GDPR, CCPA, and emerging AI regulations carry severe penalties for non-compliance.",
    icon: Scale,
  },
  {
    title: "Data Privacy Breaches",
    description: "AI systems often process sensitive data without proper safeguards.",
    icon: Shield,
  },
  {
    title: "Algorithmic Bias",
    description: "Discriminatory AI decisions can lead to lawsuits and reputation damage.",
    icon: Users,
  },
  {
    title: "Inadequate Documentation",
    description: "Missing audit trails and governance frameworks expose you to regulatory scrutiny.",
    icon: FileText,
  },
  {
    title: "Vendor Risk",
    description: "Third-party AI tools may not meet your compliance requirements.",
    icon: AlertTriangle,
  },
  {
    title: "Evolving Regulations",
    description: "New AI laws are constantly emerging, making compliance a moving target.",
    icon: TrendingUp,
  },
]

const features = [
  {
    title: "Comprehensive Assessment",
    description: "Deep dive into your AI systems, data flows, and compliance posture",
    icon: Shield,
  },
  {
    title: "Rapid Turnaround",
    description: "Get actionable insights in just 2-5 business days",
    icon: Clock,
  },
  {
    title: "Expert Analysis",
    description: "Led by certified compliance specialists with AI expertise",
    icon: Users,
  },
]

const deliverables = [
  {
    title: "Detailed Risk Assessment Report",
    description: "Comprehensive analysis of your AI compliance gaps and vulnerabilities",
  },
  {
    title: "Custom Policy Templates",
    description: "Ready-to-implement governance frameworks tailored to your business",
  },
  {
    title: "Prioritized Action Plan",
    description: "Step-by-step roadmap to achieve compliance, ranked by urgency",
  },
  {
    title: "Implementation Timeline",
    description: "Realistic milestones and deadlines for achieving full compliance",
  },
]

const packages = [
  {
    name: "Essential Quickscan",
    price: "$2,497",
    originalPrice: "$3,500",
    delivery: "Delivered in 5 Business Days",
    description: "Perfect for small to medium businesses starting their AI compliance journey",
    features: [
      "Comprehensive AI Risk Assessment",
      "GDPR & Data Privacy Compliance Review",
      "Basic AI Governance Framework",
      "Compliance Gap Analysis Report",
      "Priority Action Plan (Top 5 Issues)",
      "Email Support During Review",
      "30-Day Implementation Roadmap",
    ],
    popular: false,
  },
  {
    name: "Professional Quickscan",
    price: "$4,997",
    originalPrice: "$7,500",
    delivery: "Delivered in 3 Business Days",
    description: "Most popular choice for growing companies with existing AI implementations",
    features: [
      "Everything in Essential Package",
      "Advanced AI Ethics Assessment",
      "Industry-Specific Compliance Review",
      "Algorithmic Bias Detection Analysis",
      "Custom AI Policy Templates",
      "Live Strategy Session (90 minutes)",
      "Priority Support & Direct Access",
      "60-Day Implementation Roadmap",
      "Compliance Monitoring Dashboard Setup",
    ],
    popular: true,
  },
  {
    name: "Enterprise Quickscan",
    price: "$9,997",
    originalPrice: "$15,000",
    delivery: "Delivered in 2 Business Days",
    description: "Comprehensive solution for large organizations with complex AI ecosystems",
    features: [
      "Everything in Professional Package",
      "Multi-Jurisdictional Compliance Review",
      "AI Vendor Risk Assessment",
      "Executive Compliance Briefing",
      "Custom Training Materials",
      "Ongoing Compliance Monitoring (3 months)",
      "Dedicated Compliance Specialist",
      "Quarterly Review Sessions",
      "Legal Documentation Package",
      "Crisis Response Protocol",
    ],
    popular: false,
  },
]

export default function AICompliancePage() {
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
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
              <Badge className="bg-purple-400/30 backdrop-blur-sm text-white border-purple-300/40">Compliance Risk Alert</Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Is Your AI Implementation Putting You at Risk?
            </h1>
            <p className="text-xl text-white/90 mb-10 max-w-3xl text-pretty">
              Get a comprehensive AI compliance assessment in just 2-5 business days. Identify critical gaps before
              they become costly violations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-purple-400/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/40">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-300" />
                </div>
                <div className="text-3xl font-bold mb-1">$4.3M</div>
                <div className="text-sm text-white">Average Fine</div>
                <div className="text-xs text-purple-100 mt-1">GDPR violations in 2024</div>
              </div>
              <div className="bg-cyan-500 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/50">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-yellow-300" />
                </div>
                <div className="text-3xl font-bold mb-1">72 Hours</div>
                <div className="text-sm text-white">To report data breaches</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500/60 to-cyan-500/60 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/30">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-yellow-300" />
                </div>
                <div className="text-3xl font-bold mb-1">89%</div>
                <div className="text-sm text-white">of Companies</div>
                <div className="text-xs text-purple-100 mt-1">Have compliance gaps</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Dangers Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Hidden Dangers of AI Non-Compliance</h2>
            <p className="text-lg text-muted-foreground">
              Most businesses don't realize they're at risk until it's too late
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {risks.map((risk, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                    <risk.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">{risk.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{risk.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-cyan-400 text-white border-0">The Solution</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The AI Compliance Quickscan<sup className="text-lg">TM</sup> Solution
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive compliance assessment designed specifically for AI implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* What You'll Receive */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">What You'll Receive</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deliverables.map((item, index) => (
                <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Quickscan Package</h2>
            <p className="text-lg text-muted-foreground">
              Select the level of assessment that matches your business needs
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
                    <Badge className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-4 py-1 border-0">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl mb-2">{pkg.name}</CardTitle>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {pkg.delivery}
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
                    <Link href="/contact?service=compliance-quickscan">
                      Get Started Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Protect Your Organization?</h2>
            <p className="text-lg text-white/90 mb-8">
              Don't wait until a compliance violation costs you millions. Get your AI Compliance Quickscan today and
              gain peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-white/90 font-semibold">
                <Link href="/contact?service=compliance-quickscan">
                  Schedule Your Quickscan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                <Link href="/contact">Have Questions? Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
