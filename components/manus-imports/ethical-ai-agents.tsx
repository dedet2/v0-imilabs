"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check, Shield, Lock, Globe, FileText, Menu } from "lucide-react"

interface ServiceTier {
  name: string
  price: string
  badge: string | null
  description: string
  subtitle: string
  features: string[]
  timeline: string
  cta: string
  ctaColor: string
}

interface Industry {
  icon: React.ReactNode
  title: string
  description: string
}

interface ProcessStep {
  title: string
  description: string
  items: string[]
}

interface Differentiator {
  number: string
  title: string
  description: string
}

export default function EthicalAIAgents() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    serviceTier: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const serviceTiers: ServiceTier[] = [
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
      cta: "Get Started",
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
      cta: "Explore Pro Stack",
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
      cta: "Request Enterprise Quote",
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
      cta: "Discuss Licensing",
      ctaColor: "bg-teal-600 hover:bg-teal-700",
    },
  ]

  const industries: Industry[] = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "AI/GRC/Security/Compliance",
      description: "Organizations focused on governance, risk management, and compliance in AI implementation",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Privacy-Heavy Industries",
      description: "Healthcare, finance, government, and other sectors with strict data privacy requirements",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Multinational Organizations",
      description: "Companies expanding AI deployment across cultural contexts and international markets",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Regulated Industries",
      description: "Organizations with stringent regulatory requirements (HIPAA, GDPR) and compliance needs",
    },
  ]

  const processSteps: ProcessStep[] = [
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

  const differentiators: Differentiator[] = [
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

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-gray-900 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Ethical AI Agents</h1>
            <div className="hidden md:flex gap-6">
              <a href="#about" className="hover:text-cyan-400 transition">
                About
              </a>
              <a href="#services" className="hover:text-cyan-400 transition">
                Services
              </a>
              <a href="#process" className="hover:text-cyan-400 transition">
                Process
              </a>
              <a href="#value" className="hover:text-cyan-400 transition">
                Value
              </a>
              <a href="#contact" className="hover:text-cyan-400 transition">
                Contact
              </a>
            </div>
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
                AI Implementation with Cross-Cultural Ethics at the Core
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Harness the power of AI with built-in ethical safeguards and cross-cultural adaptability, designed
                specifically for high-risk, compliance-focused industries.
              </p>
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                Schedule a Consultation
              </Button>
            </div>
            <Card className="bg-blue-800/50 backdrop-blur-sm border-blue-600 p-8">
              <h3 className="text-2xl font-bold mb-6">Ethical AI for High-Risk Industries</h3>
              <ul className="space-y-4">
                {[
                  "HIPAA & GDPR Compliant Solutions",
                  "Cross-Cultural Ethical Adaptation",
                  "Risk-Mitigated Implementation",
                  "Disability as Innovation Framework",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-6">About Ethical AI Agents</h2>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            Ethical AI Agents by Dr. Dede is a premium done-for-you AI agent development service designed specifically
            for organizations in high-risk, compliance-focused industries. This service leverages Dr. Dede&apos;s unique
            expertise in AI ethics, cross-cultural adaptation, and disability as innovation to deliver risk-mitigated,
            ethically sound AI agent systems that meet stringent regulatory requirements.
          </p>
          <Card className="bg-blue-50 border-l-4 border-blue-600 p-6">
            <p className="italic text-foreground/80">
              A compliance-forward alternative to generalist AI consultants, with a focus on delivering secure, ethical
              AI workflows for enterprises where &ldquo;getting it wrong&rdquo; is expensive.
            </p>
          </Card>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Who We Serve</h2>

          <h3 className="text-2xl font-bold mb-8 text-center">Industries We Serve</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
            {industries.map((industry, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition">
                <div className="text-primary mb-4">{industry.icon}</div>
                <h4 className="text-lg font-bold mb-2">{industry.title}</h4>
                <p className="text-foreground/60 text-sm">{industry.description}</p>
              </Card>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto p-8 bg-muted/30">
            <h3 className="text-2xl font-bold mb-4">Ideal Client Profile</h3>
            <ul className="space-y-3 text-foreground/80">
              {[
                "Mid to large enterprises with existing AI initiatives",
                "Organizations expanding AI deployment across cultural contexts",
                "Companies with significant compliance and ethical risk exposure",
                "Businesses seeking competitive advantage through ethical AI implementation",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Service Tiers */}
      <section id="services" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our Service Tiers</h2>
          <p className="text-center text-foreground/60 mb-12">
            Choose the implementation level that matches your organization&apos;s needs and goals
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {serviceTiers.map((tier, idx) => (
              <Card key={idx} className="overflow-hidden relative">
                {tier.badge && (
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {tier.badge}
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-4">{tier.price}</p>
                  <h4 className="text-lg font-semibold mb-2">{tier.description}</h4>
                  <p className="text-foreground/60 mb-6">{tier.subtitle}</p>

                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start text-sm gap-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm text-foreground/60 mb-6">{tier.timeline}</p>

                  <Button className={`w-full ${tier.ctaColor} text-white`}>{tier.cta}</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section id="process" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our Delivery Process</h2>
          <p className="text-center text-foreground/60 mb-12 max-w-3xl mx-auto">
            A proven methodology for implementing ethical AI agents in your organization
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, idx) => (
              <Card key={idx} className="p-8 bg-muted/30">
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-foreground/60 mb-6">{step.description}</p>
                <ul className="space-y-2">
                  {step.items.map((item, iidx) => (
                    <li key={iidx} className="flex items-start text-sm text-foreground/80 gap-2">
                      <span className="text-blue-600">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="value" className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Ethical AI Agents</h2>
          <p className="text-center text-blue-100 mb-12 max-w-3xl mx-auto">
            Our unique approach delivers exceptional value and competitive advantage
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {[
              {
                title: "Risk-Mitigated AI Implementation",
                description:
                  "Specialized expertise in developing AI agents that minimize ethical, regulatory, and reputational risks.",
              },
              {
                title: "Cross-Cultural Ethical Adaptation",
                description:
                  "Unique methodology for ensuring AI systems work effectively and ethically across cultural contexts.",
              },
              {
                title: "Compliance-Forward Design",
                description: "Built-in safeguards for HIPAA, GDPR, and other regulatory frameworks.",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-3xl font-bold text-center mb-8">How We&apos;re Different</h3>
          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {differentiators.map((diff, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {diff.number}
                </div>
                <h4 className="font-bold mb-2">{diff.title}</h4>
                <p className="text-sm text-blue-100">{diff.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-balance">
            Ready to Implement Ethical AI Agents in Your Organization?
          </h2>
          <p className="text-xl mb-8">Schedule a consultation to discuss your specific needs and how we can help.</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Schedule a Consultation
          </Button>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="mt-1"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="serviceTier">Service Tier Interest</Label>
                <Select
                  value={formData.serviceTier}
                  onValueChange={(value) => setFormData({ ...formData, serviceTier: value })}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select a service tier" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTiers.map((tier, idx) => (
                      <SelectItem key={idx} value={tier.name}>
                        {tier.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project"
                  className="mt-1"
                  rows={6}
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Submit Inquiry
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Ethical AI Agents</h3>
          <p className="text-gray-400 mb-6">Building responsible AI for a better future</p>
          <p className="text-gray-500 text-sm">© 2025 Dr. Dede. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
