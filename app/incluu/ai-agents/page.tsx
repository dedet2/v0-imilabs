import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  CheckCircle2,
  ArrowRight,
  Users,
  Globe,
  Lock,
  FileText,
  Zap,
  Heart,
} from "@/components/icons"

export const metadata: Metadata = {
  title: "Ethical AI Agents | Dr. Dédé & incluu",
  description:
    "AI Implementation with Cross-Cultural Ethics at the Core. Done-for-you AI agent development for high-risk, compliance-focused industries.",
  alternates: {
    canonical: "https://dr-dede.com/incluu/ai-agents",
  },
  openGraph: {
    title: "Ethical AI Agents | Dr. Dédé & incluu",
    description:
      "Harness the power of AI with built-in ethical safeguards and cross-cultural adaptability, designed specifically for high-risk, compliance-focused industries.",
  },
}

const serviceTiers = [
  {
    name: "Starter Agent Kit",
    price: "$5,000 - $10,000",
    badge: null,
    description: "Begin Your Ethical AI Journey",
    subtitle: "Single DFY Agent implementation with ethical safeguards and compliance features",
    features: [
      "One specialized agent (e.g., Outreach, Grant Finder, Content Scheduler)",
      "Ethical assessment and bias mitigation",
      "Cross-cultural adaptation (if applicable)",
      "Basic integration with existing systems",
      "Documentation and training",
    ],
    timeline: "Implementation in 2-3 weeks",
    ctaColor: "bg-blue-600 hover:bg-blue-700",
  },
  {
    name: "Pro AI Stack",
    price: "$15,000 - $25,000",
    badge: "Most Popular",
    description: "Scale Your Ethical AI Capabilities",
    subtitle: "Comprehensive AI agent ecosystem with integrated dashboards and CRM",
    features: [
      "3-5 integrated agents working together",
      "Airtable CRM integration and custom dashboards",
      "Workflow automation and process optimization",
      "Cross-cultural adaptation across markets",
      "Ethical governance framework",
      "Implementation support and training",
    ],
    timeline: "Implementation in 4-6 weeks",
    ctaColor: "bg-purple-600 hover:bg-purple-700",
  },
  {
    name: "Compliance Vault",
    price: "$35,000 - $50,000+",
    badge: null,
    description: "Enterprise-Grade Ethical AI Implementation",
    subtitle: "Enterprise-grade AI agent suite with comprehensive governance and regulatory compliance",
    features: [
      "Enterprise AI agent suite (5+ integrated agents)",
      "Comprehensive governance framework",
      "HIPAA/GDPR compliance layering",
      "Cross-cultural ethical adaptation",
      "Risk mitigation and monitoring systems",
      "Ongoing compliance updates",
      "Executive reporting and documentation",
    ],
    timeline: "Implementation in 6-8 weeks",
    ctaColor: "bg-indigo-600 hover:bg-indigo-700",
  },
  {
    name: "Licensing Model",
    price: "$10,000/year/license",
    badge: null,
    description: "Scale Ethical AI Across Your Organization",
    subtitle: "White-label packages for consultants, VC funds, and tech teams",
    features: [
      "Customizable AI agent frameworks",
      "White-label documentation and training",
      "Implementation support",
      "Regular updates and improvements",
      "Ethical compliance monitoring",
    ],
    timeline: "Implementation varies by scope",
    ctaColor: "bg-teal-600 hover:bg-teal-700",
  },
]

const industries = [
  {
    icon: Shield,
    title: "AI/GRC/Security/Compliance",
    description: "Organizations focused on governance, risk management, and compliance in AI implementation",
  },
  {
    icon: Lock,
    title: "Privacy-Heavy Industries",
    description: "Healthcare, finance, government, and other sectors with strict data privacy requirements",
  },
  {
    icon: Globe,
    title: "Multinational Organizations",
    description: "Companies expanding AI deployment across cultural contexts and international markets",
  },
  {
    icon: FileText,
    title: "Regulated Industries",
    description: "Organizations with stringent regulatory requirements (HIPAA, GDPR) and compliance needs",
  },
]

const processSteps = [
  {
    title: "Assessment & Discovery",
    description: "We begin by understanding your organization's unique needs and challenges",
    items: [
      "Ethical AI readiness assessment",
      "Cross-cultural adaptation needs analysis",
      "Compliance and regulatory requirement mapping",
      "Business process and workflow documentation",
      "Technical environment assessment",
      "ROI and value creation modeling",
    ],
  },
  {
    title: "Design & Development",
    description: "We create customized AI agent solutions that meet your specific requirements",
    items: [
      "AI agent architecture design",
      "Ethical framework implementation",
      "Cross-cultural adaptation engineering",
      "Integration planning and execution",
      "Compliance safeguard implementation",
      "Testing and validation protocols",
    ],
  },
  {
    title: "Implementation & Training",
    description: "We deploy your AI agents and ensure your team is ready to use them effectively",
    items: [
      "System deployment and configuration",
      "Integration with existing platforms",
      "User acceptance testing",
      "Team training and knowledge transfer",
      "Documentation and standard operating procedures",
      "Go-live support and monitoring",
    ],
  },
  {
    title: "Optimization & Support",
    description: "We ensure your AI agents continue to deliver value over time",
    items: [
      "Performance monitoring and optimization",
      "Ethical compliance auditing",
      "Cross-cultural effectiveness assessment",
      "System updates and improvements",
      "Ongoing support and maintenance",
      "Regular review and reporting",
    ],
  },
]

const differentiators = [
  {
    number: "1",
    title: "Deep Technical + Policy Expertise",
    description: "Combining technical implementation with policy and ethical considerations",
  },
  {
    number: "2",
    title: "Cross-Cultural Specialization",
    description: "Unique expertise in adapting AI systems across cultural contexts",
  },
  {
    number: "3",
    title: "Compliance-First Approach",
    description: "Built-in safeguards for regulated industries",
  },
  {
    number: "4",
    title: "Disability as Innovation",
    description: "Unique framework that transforms accessibility into competitive advantage",
  },
  {
    number: "5",
    title: "Ethical Governance",
    description: "Comprehensive frameworks for ongoing ethical oversight",
  },
]

export default function AIAgentsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-cyan-500/20 text-cyan-300 border-cyan-400/30">Ethical AI Agents™</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                AI Implementation with Cross-Cultural Ethics at the Core
              </h1>
              <p className="text-xl text-blue-100 mb-8 text-pretty">
                Harness the power of AI with built-in ethical safeguards and cross-cultural adaptability, designed
                specifically for high-risk, compliance-focused industries.
              </p>
              <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                <Link href="/contact?service=ai-agents">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-600">
              <h3 className="text-2xl font-bold mb-6">Ethical AI for High-Risk Industries</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle2 className="h-6 w-6 mr-3 text-cyan-400" />
                  HIPAA & GDPR Compliant Solutions
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-6 w-6 mr-3 text-cyan-400" />
                  Cross-Cultural Ethical Adaptation
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-6 w-6 mr-3 text-cyan-400" />
                  Risk-Mitigated Implementation
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-6 w-6 mr-3 text-cyan-400" />
                  Disability as Innovation Framework
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">About Ethical AI Agents™</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Ethical AI Agents™ by Dr. Dédé is a premium done-for-you AI agent development service designed specifically
            for organizations in high-risk, compliance-focused industries. This service leverages Dr. Dédé's unique
            expertise in AI ethics, cross-cultural adaptation, and disability as innovation to deliver risk-mitigated,
            ethically sound AI agent systems that meet stringent regulatory requirements.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 italic text-muted-foreground">
            A compliance-forward alternative to generalist AI consultants, with a focus on delivering secure, ethical
            AI workflows for enterprises where "getting it wrong" is expensive.
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Who We Serve</h2>
          <p className="text-center text-muted-foreground mb-12">Industries We Serve</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {industries.map((industry, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                    <industry.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-50">
              <CardHeader>
                <CardTitle>Ideal Client Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Mid to large enterprises with existing AI initiatives
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Organizations expanding AI deployment across cultural contexts
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Companies with significant compliance and ethical risk exposure
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Businesses seeking competitive advantage through ethical AI implementation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Service Tiers</h2>
          <p className="text-center text-muted-foreground mb-12">
            Choose the implementation level that matches your organization's needs and goals
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {serviceTiers.map((tier, idx) => (
              <Card key={idx} className="relative overflow-hidden">
                {tier.badge && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-purple-600 text-white">{tier.badge}</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <p className="text-2xl font-bold text-blue-600">{tier.price}</p>
                  <p className="font-semibold">{tier.description}</p>
                  <p className="text-sm text-muted-foreground">{tier.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground mb-4">{tier.timeline}</p>
                  <Button asChild className={`w-full ${tier.ctaColor} text-white`}>
                    <Link href="/contact?service=ai-agents">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Delivery Process</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            A proven methodology for implementing ethical AI agents in your organization
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, idx) => (
              <Card key={idx} className="bg-gray-50">
                <CardHeader>
                  <CardTitle>{step.title}</CardTitle>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {step.items.map((item, iidx) => (
                      <li key={iidx} className="flex items-start text-sm text-muted-foreground">
                        <span className="text-blue-600 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Ethical AI Agents™</h2>
          <p className="text-center text-blue-100 mb-12 max-w-3xl mx-auto">
            Our unique approach delivers exceptional value and competitive advantage
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="text-center">
              <Zap className="h-10 w-10 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-xl font-bold mb-3">Risk-Mitigated AI Implementation</h3>
              <p className="text-blue-100">
                Specialized expertise in developing AI agents that minimize ethical, regulatory, and reputational risks.
              </p>
            </div>
            <div className="text-center">
              <Globe className="h-10 w-10 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-xl font-bold mb-3">Cross-Cultural Ethical Adaptation</h3>
              <p className="text-blue-100">
                Unique methodology for ensuring AI systems work effectively and ethically across cultural contexts.
              </p>
            </div>
            <div className="text-center">
              <Shield className="h-10 w-10 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-xl font-bold mb-3">Compliance-Forward Design</h3>
              <p className="text-blue-100">Built-in safeguards for HIPAA, GDPR, and other regulatory frameworks.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-center mb-8">How We're Different</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {differentiators.map((diff, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {diff.number}
                </div>
                <h4 className="font-bold mb-2 text-sm">{diff.title}</h4>
                <p className="text-xs text-blue-100">{diff.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Implement Ethical AI Agents in Your Organization?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your specific needs and how we can help.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-white/90 font-semibold">
            <Link href="/contact?service=ai-agents">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
