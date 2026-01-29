"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Shield,
  Heart,
  Mic,
  CheckCircle2,
  TrendingUp,
  Award,
  Sparkles,
  DollarSign,
  Users,
  Clock,
} from "@/components/icons"
import Image from "next/image"
import { useEffect, useRef } from "react"

export default function Page() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Only set up intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".fade-in-section")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="relative overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#7209b7] via-[#6366f1] to-[#06b6d4] text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-8 animate-fade-in-up">
                <Badge className="bg-white/10 text-white hover:bg-white/20 border-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium">
                  Founder & Principal Consultant
                </Badge>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance tracking-tight text-white drop-shadow-lg">
                  Ethical AI Governance for{" "}
                  <span className="bg-gradient-to-r from-cyan-300 to-cyan-100 bg-clip-text text-transparent">
                    Inclusive Innovation
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-pretty max-w-2xl drop-shadow">
                  Transforming tech equity into competitive advantage through strategic AI governance and disability
                  advocacy
                </p>
                <div className="flex items-center gap-3 text-lg md:text-xl">
                  <Sparkles className="h-6 w-6 text-cyan-300 flex-shrink-0" />
                  <p className="text-white/90 font-semibold drop-shadow">
                    <span className="text-2xl md:text-3xl font-bold text-white">$1.5B+</span> in proven business impact
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-purple-700 hover:bg-white/90 font-semibold text-base shadow-xl"
                  >
                    <Link href="/contact">
                      Schedule Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/40 text-white hover:bg-white/20 bg-white/5 font-semibold text-base backdrop-blur-sm shadow-xl"
                  >
                    <Link href="/dr-dede#services">Explore Services</Link>
                  </Button>
                </div>
              </div>

              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 transform hover:scale-[1.02] transition-all duration-500 animate-fade-in-up animation-delay-200">
                <Image
                  src="/DrDede47.jpg"
                  alt="Dr. Dédé Tetsubayashi - AI Governance Expert"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-muted-foreground font-medium">
            Trusted by Fortune 500 and Fortune 100 companies and leading healthcare organizations
          </p>
        </div>
      </section>

      {/* Business Impact Metrics */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-section space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Business Impact at Scale</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Measurable results from strategic AI governance implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border hover:shadow-lg transition-all duration-300 fade-in-section">
              <CardHeader className="space-y-4 pb-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  $200M+
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Cost Savings from AI Governance Implementation
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300 fade-in-section animation-delay-100">
              <CardHeader className="space-y-4 pb-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  $500M+
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  New Market Access Through Inclusive Design
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300 fade-in-section animation-delay-200">
              <CardHeader className="space-y-4 pb-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  95%
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">Client Satisfaction & Success Rate</p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300 fade-in-section animation-delay-300">
              <CardHeader className="space-y-4 pb-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  18 Mo
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">Average Time to Full Compliance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted/30 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 fade-in-section space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
                Strategic Solutions for Inclusive Innovation
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                Comprehensive expertise in governance, compliance, and ethical technology that drives measurable
                business results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* AI GRC & Advisory */}
              <Card className="border-border hover:shadow-lg transition-all duration-300 fade-in-section">
                <CardHeader className="space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">AI GRC & Advisory</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Strategic AI governance consulting for enterprise compliance and ethical technology implementation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">AI Governance & Regulatory Compliance frameworks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">Algorithmic Audit & Bias Detection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">EU AI Act & Global Compliance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">Data Privacy Impact Assessments</span>
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="w-full font-semibold bg-transparent">
                    <Link href="/incluu">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Disability Advocacy */}
              <Card className="border-border hover:shadow-lg transition-all duration-300 fade-in-section animation-delay-100">
                <CardHeader className="space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Disability Advocacy & Wellness</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Inclusive technology workshops and luxury retreats for individuals, enterprises, and wellness
                    organizations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">Executive Training & Workshops</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">Tailored leadership development programs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">Team Development Programs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">Organizational Change Management</span>
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="w-full font-semibold bg-transparent">
                    <Link href="/dr-dede">
                      Explore Retreats
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Speaking & Events */}
              <Card className="border-border hover:shadow-lg transition-all duration-300 fade-in-section animation-delay-200">
                <CardHeader className="space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
                    <Mic className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Speaking & Events</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    TEDx talks, keynote presentations, and thought leadership for conferences and corporate events
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">TEDx: "You've Been Coded Out"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">Keynote Speaking Engagements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">Panel Discussions & Fireside Chats</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">Corporate Workshops & Training</span>
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="w-full font-semibold bg-transparent">
                    <Link href="/dr-dede/speaking">
                      Book Speaking
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Business Impact Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 fade-in-section space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Proven Business Impact</h2>
              <p className="text-lg md:text-2xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
                Real results from strategic AI governance and tech equity implementations across industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-border hover:shadow-lg transition-all duration-300 fade-in-section min-h-[420px] flex flex-col">
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold">$50M AI Governance Framework</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">Global Financial Services</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Implemented comprehensive AI governance framework for a Fortune 100 financial institution, reducing
                    compliance risk by 60% and enabling $50M in cost savings through automated compliance monitoring.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600" />
                      <span>60% reduction in compliance risk</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600" />
                      <span>Automated bias detection across 200+ models</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600" />
                      <span>EU AI Act compliance achieved in 12 months</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-all duration-300 fade-in-section animation-delay-100 min-h-[420px] flex flex-col">
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold">$25M Digital Equity in Healthcare</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">National Healthcare Provider</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Redesigned patient portal and telehealth platform to meet WCAG 2.2 AAA standards, expanding
                    accessible care to 15M+ patients with disabilities and generating $25M in new revenue.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-cyan-500" />
                      <span>15M+ patients gained accessible care</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-cyan-500" />
                      <span>40% increase in patient satisfaction</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-cyan-500" />
                      <span>Zero accessibility lawsuits post-launch</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-all duration-300 fade-in-section animation-delay-200 min-h-[420px] flex flex-col">
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold">$75M FinTech Compliance</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">Digital Banking Platform</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Developed AI ethics framework and algorithmic fairness testing for lending platform, preventing $75M
                    in potential regulatory fines and expanding market access to underserved communities.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600" />
                      <span>Eliminated discriminatory lending patterns</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600" />
                      <span>2M+ new customers from underserved markets</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600" />
                      <span>Full CFPB compliance certification</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-all duration-300 fade-in-section animation-delay-300 min-h-[420px] flex flex-col">
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold">$30M EdTech Accessibility</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">Online Learning Platform</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Transformed learning management system to support neurodivergent and disabled learners, achieving
                    Section 508 compliance and unlocking $30M in government contracts.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-cyan-500" />
                      <span>500K+ students with disabilities served</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-cyan-500" />
                      <span>85% improvement in learning outcomes</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-cyan-500" />
                      <span>Section 508 & WCAG 2.2 AAA certified</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-all duration-300 fade-in-section animation-delay-400 min-h-[420px] flex flex-col md:col-span-2">
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold">$40M Retail AI Personalization</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">E-Commerce Platform</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Redesigned recommendation algorithms to eliminate bias and improve accessibility, resulting in 35%
                    increase in conversion rates among disabled customers and $40M revenue growth.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600" />
                      <span>35% conversion rate increase</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600" />
                      <span>Zero algorithmic bias incidents</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600" />
                      <span>Industry-leading accessibility rating</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline" className="font-semibold bg-transparent">
                <Link href="/case-studies">
                  View All Case Studies
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-[#7209b7] via-[#6366f1] to-[#06b6d4] text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              Ready to Transform Your AI Strategy?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 text-pretty leading-relaxed">
              Let's discuss how ethical AI governance can drive measurable business results for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                asChild
                size="lg"
                className="bg-white text-purple-700 hover:bg-white/90 font-semibold text-base shadow-xl"
              >
                <Link href="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/40 text-white hover:bg-white/20 bg-white/5 font-semibold text-base backdrop-blur-sm shadow-xl"
              >
                <Link href="/resources">Explore Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
