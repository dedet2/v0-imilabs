"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Heart, Mic, CheckCircle2, TrendingUp, Users, Award } from "@/components/icons"
import Image from "next/image"
import { useEffect, useRef } from "react"

export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
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
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600/95 via-purple-500/95 to-cyan-400/95 text-white overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />

        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20 transform hover:scale-[1.02] transition-all duration-700 animate-fade-in-up group">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <Image
                  src="/professional-portrait-of-african-american-woman-te.jpg"
                  alt="Dr. Dédé Tetsubayashi - AI Governance Expert"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>

              <div className="space-y-6 lg:space-y-8 animate-fade-in-up animation-delay-200">
                <Badge
                  className="mb-2 bg-white/15 text-white hover:bg-white/25 border-white/30 backdrop-blur-xl px-5 py-2.5 text-sm font-semibold shadow-lg"
                  variant="outline"
                >
                  Founder & Principal Consultant
                </Badge>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] text-balance text-white tracking-tight">
                  Ethical AI Governance for{" "}
                  <span className="bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent">
                    Inclusive Innovation
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/95 font-medium text-balance leading-relaxed">
                  Transforming tech equity into competitive advantage through strategic AI governance and disability
                  advocacy
                </p>
                <p className="text-base md:text-lg text-white/90 text-pretty leading-relaxed max-w-2xl">
                  Delivering transformational tech equity and AI governance consulting, generating proven results:{" "}
                  <span className="font-bold text-purple-100">$200M+ in cost savings</span> and{" "}
                  <span className="font-bold text-purple-100">$500M+ in market expansion</span> for enterprise clients.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-white/90 shadow-2xl transition-all duration-300 font-bold text-lg px-10 py-7 h-auto"
                  >
                    <Link href="/contact">
                      Get Started Today
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/80 text-white hover:bg-white/20 bg-white/10 backdrop-blur-xl font-semibold text-base px-10 py-7 h-auto transition-all duration-300 hover:border-white"
                  >
                    <Link href="/dr-dede">Explore Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-16 relative z-10">
        <div className="text-center mb-16 fade-in-section opacity-0 transition-all duration-700">
          <p className="text-sm md:text-base text-muted-foreground font-bold tracking-wider uppercase">
            Trusted by Fortune 500 and 100 companies and leading healthcare organizations
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <Card className="text-center bg-gradient-to-br from-white via-white to-purple-50/80 backdrop-blur-sm border-purple-200/50 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 fade-in-section opacity-0 group">
            <CardHeader className="pb-3 pt-6">
              <CardTitle className="text-4xl md:text-5xl font-black bg-gradient-to-br from-purple-600 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                $1.5B+
              </CardTitle>
              <CardDescription className="text-sm font-bold text-foreground/90 mt-2">
                Total Cost Savings
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center bg-gradient-to-br from-white via-white to-cyan-50/80 backdrop-blur-sm border-cyan-200/50 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 fade-in-section opacity-0 animation-delay-100 group">
            <CardHeader className="pb-3 pt-6">
              <CardTitle className="text-4xl md:text-5xl font-black bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-700 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                $500M+
              </CardTitle>
              <CardDescription className="text-sm font-bold text-foreground/90 mt-2">
                Market Access Unlocked
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center bg-gradient-to-br from-white via-white to-purple-50/80 backdrop-blur-sm border-purple-200/50 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 fade-in-section opacity-0 animation-delay-200 group">
            <CardHeader className="pb-3 pt-6">
              <CardTitle className="text-4xl md:text-5xl font-black bg-gradient-to-br from-purple-600 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                25+
              </CardTitle>
              <CardDescription className="text-sm font-bold text-foreground/90 mt-2">
                Years of Expertise
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center bg-gradient-to-br from-white via-white to-cyan-50/80 backdrop-blur-sm border-cyan-200/50 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 fade-in-section opacity-0 animation-delay-300 group">
            <CardHeader className="pb-3 pt-6">
              <CardTitle className="text-4xl md:text-5xl font-black bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-700 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                95%
              </CardTitle>
              <CardDescription className="text-sm font-bold text-foreground/90 mt-2">
                Client Success Rate
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-24 fade-in-section opacity-0 transition-all duration-700 space-y-6">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-balance tracking-tight bg-gradient-to-br from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
            Strategic Solutions for Inclusive Innovation
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed font-medium">
            Comprehensive expertise in governance, compliance, and ethical technology that drives measurable business
            results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Pillar 1: AI GRC / Advisory / Consulting */}
          <Card className="bg-white/80 backdrop-blur-xl border-purple-200/50 hover:shadow-2xl hover:border-purple-400/50 hover:-translate-y-2 transition-all duration-500 group fade-in-section opacity-0 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-fuchsia-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="space-y-6 relative z-10">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-purple-600 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl shadow-purple-500/30">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-black">AI GRC & Advisory</CardTitle>
              <CardDescription className="text-base leading-relaxed font-medium">
                Strategic AI governance consulting for enterprise compliance and ethical technology implementation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 relative z-10">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                  <span className="text-sm leading-relaxed font-medium">
                    AI Governance & Regulatory Compliance frameworks
                  </span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                  <span className="text-sm leading-relaxed font-medium">Algorithmic Audit & Bias Detection</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                  <span className="text-sm leading-relaxed font-medium">EU AI Act & Global Compliance</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                  <span className="text-sm leading-relaxed font-medium">Data Privacy Impact Assessments</span>
                </li>
              </ul>
              <Button
                asChild
                variant="outline"
                className="w-full border-2 border-purple-300 hover:bg-purple-600 hover:text-white hover:border-purple-600 bg-transparent font-bold transition-all duration-300 py-6 group/btn"
              >
                <Link href="/incluu">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Pillar 2: Disability Advocate + Luxury Retreats */}
          <Card className="bg-white/80 backdrop-blur-xl border-cyan-200/50 hover:shadow-2xl hover:border-cyan-400/50 hover:-translate-y-2 transition-all duration-500 group fade-in-section opacity-0 animation-delay-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="space-y-6 relative z-10">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-600 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl shadow-cyan-500/30">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-black">Disability Advocacy & Wellness</CardTitle>
              <CardDescription className="text-base leading-relaxed font-medium">
                Inclusive technology workshops and luxury retreats for individuals, enterprises, and wellness
                organizations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 relative z-10">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                  <span className="text-sm leading-relaxed font-medium">Executive Training & Workshops</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                  <span className="text-sm leading-relaxed font-medium">Tailored leadership development programs</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                  <span className="text-sm leading-relaxed font-medium">Team Development Programs</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                  <span className="text-sm leading-relaxed font-medium">Organizational Change Management</span>
                </li>
              </ul>
              <Button
                asChild
                variant="outline"
                className="w-full border-2 border-cyan-300 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 bg-transparent font-bold transition-all duration-300 py-6 group/btn"
              >
                <Link href="/dr-dede">
                  Explore Retreats
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Pillar 3: Speaking, TEDx, Events Booking */}
          <Card className="bg-white/80 backdrop-blur-xl border-purple-200/50 hover:shadow-2xl hover:border-purple-400/50 hover:-translate-y-2 transition-all duration-500 group fade-in-section opacity-0 animation-delay-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-fuchsia-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="space-y-6 relative z-10">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-purple-600 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl shadow-purple-500/30">
                <Mic className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-black">Speaking & Events</CardTitle>
              <CardDescription className="text-base leading-relaxed font-medium">
                TEDx talks, keynote presentations, and thought leadership for conferences and corporate events
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 relative z-10">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                  <span className="text-sm leading-relaxed font-medium">TEDx: "You've Been Coded Out"</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                  <span className="text-sm leading-relaxed font-medium">Keynote Speaking Engagements</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                  <span className="text-sm leading-relaxed font-medium">Panel Discussions & Fireside Chats</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                  <span className="text-sm leading-relaxed font-medium">Corporate Workshops & Training</span>
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-2 border-purple-300 hover:bg-purple-600 hover:text-white hover:border-purple-600 bg-transparent font-bold transition-all duration-300 py-6 group/btn"
              >
                <Link href="/dr-dede#speaking">
                  Book Speaking
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Business Impact Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-purple-50/40 to-cyan-50/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.08),transparent_50%)]" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24 fade-in-section opacity-0 transition-all duration-700 space-y-6">
              <h2 className="text-5xl md:text-7xl lg:text-7xl font-black text-balance leading-[1.1]">
                Proven Business Impact
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed font-medium max-w-3xl mx-auto">
                Real results from strategic AI governance and tech equity implementations across industries
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 fade-in-section opacity-0">
              <Card className="text-center bg-gradient-to-br from-purple-600/95 to-fuchsia-600/95 text-white border-0 hover:shadow-2xl hover:scale-105 transition-all duration-500">
                <CardHeader className="pb-3 pt-6">
                  <CardTitle className="text-4xl md:text-5xl font-black drop-shadow-lg">$200M+</CardTitle>
                  <CardDescription className="text-sm font-bold text-white/95 mt-2">
                    Cost Savings Generated
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center bg-gradient-to-br from-cyan-600/95 to-blue-600/95 text-white border-0 hover:shadow-2xl hover:scale-105 transition-all duration-500">
                <CardHeader className="pb-3 pt-6">
                  <CardTitle className="text-4xl md:text-5xl font-black drop-shadow-lg">$500M+</CardTitle>
                  <CardDescription className="text-sm font-bold text-white/95 mt-2">
                    Market Access Unlocked
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center bg-gradient-to-br from-purple-600/95 to-fuchsia-600/95 text-white border-0 hover:shadow-2xl hover:scale-105 transition-all duration-500">
                <CardHeader className="pb-3 pt-6">
                  <CardTitle className="text-4xl md:text-5xl font-black drop-shadow-lg">95%</CardTitle>
                  <CardDescription className="text-sm font-bold text-white/95 mt-2">Compliance Rate</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center bg-gradient-to-br from-cyan-600/95 to-blue-600/95 text-white border-0 hover:shadow-2xl hover:scale-105 transition-all duration-500">
                <CardHeader className="pb-3 pt-6">
                  <CardTitle className="text-4xl md:text-5xl font-black drop-shadow-lg">18 Mo</CardTitle>
                  <CardDescription className="text-sm font-bold text-white/95 mt-2">
                    Average ROI Timeline
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="min-h-[420px] flex flex-col bg-white/90 backdrop-blur-xl border-purple-200/50 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 fade-in-section opacity-0 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-transparent to-fuchsia-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="space-y-6 relative z-10">
                  <div className="flex items-center gap-5 mb-3">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-purple-600 flex items-center justify-center shadow-xl shadow-purple-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <TrendingUp className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-5xl font-black bg-gradient-to-br from-purple-600 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent">
                      $50M
                    </CardTitle>
                  </div>
                  <CardDescription className="text-xl font-black text-foreground">
                    AI Governance Framework Implementation
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 flex-1">
                  <p className="text-base text-muted-foreground leading-relaxed space-y-3">
                    <span className="block">
                      <strong className="text-foreground font-bold">Challenge:</strong> AI framework implementation for
                      12 countries
                    </span>
                    <span className="block">
                      <strong className="text-foreground font-bold">Solution:</strong> Comprehensive governance
                      framework with automated compliance monitoring
                    </span>
                    <span className="block">
                      <strong className="text-foreground font-bold">Result:</strong> $50M+ in product launches, 85%
                      faster product launches
                    </span>
                  </p>
                </CardContent>
              </Card>

              <Card className="min-h-[420px] flex flex-col bg-white/90 backdrop-blur-xl border-cyan-200/50 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 fade-in-section opacity-0 animation-delay-100 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/80 via-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="space-y-6 relative z-10">
                  <div className="flex items-center gap-5 mb-3">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-600 flex items-center justify-center shadow-xl shadow-cyan-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Users className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-5xl font-black bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-700 bg-clip-text text-transparent">
                      $25M
                    </CardTitle>
                  </div>
                  <CardDescription className="text-xl font-black text-foreground">
                    Digital Equity in Healthcare AI
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 flex-1">
                  <p className="text-base text-muted-foreground leading-relaxed space-y-3">
                    <span className="block">
                      <strong className="text-foreground font-bold">Challenge:</strong> AI Research bias against
                      minority populations
                    </span>
                    <span className="block">
                      <strong className="text-foreground font-bold">Solution:</strong> Inclusive algorithm design, bias
                      detection, $25M cost savings
                    </span>
                    <span className="block">
                      <strong className="text-foreground font-bold">Result:</strong> 95% improvement in diagnostic
                      accuracy, $25M cost savings
                    </span>
                  </p>
                </CardContent>
              </Card>

              <Card className="min-h-[420px] flex flex-col bg-white/90 backdrop-blur-xl border-purple-200/50 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 fade-in-section opacity-0 animation-delay-200 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-transparent to-fuchsia-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="space-y-6 relative z-10">
                  <div className="flex items-center gap-5 mb-3">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-purple-600 flex items-center justify-center shadow-xl shadow-purple-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Shield className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-5xl font-black bg-gradient-to-br from-purple-600 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent">
                      $75M
                    </CardTitle>
                  </div>
                  <CardDescription className="text-xl font-black text-foreground">
                    FinTech Compliance Transformation
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 flex-1">
                  <p className="text-base text-muted-foreground leading-relaxed space-y-3">
                    <span className="block">
                      <strong className="text-foreground font-bold">Challenge:</strong> Multi-jurisdiction regulatory
                      compliance for AI-powered lending
                    </span>
                    <span className="block">
                      <strong className="text-foreground font-bold">Solution:</strong> Automated compliance framework
                      with real-time monitoring
                    </span>
                    <span className="block">
                      <strong className="text-foreground font-bold">Result:</strong> $75M market expansion, zero
                      regulatory violations
                    </span>
                  </p>
                </CardContent>
              </Card>

              <Card className="min-h-[420px] flex flex-col bg-white/90 backdrop-blur-xl border-cyan-200/50 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 fade-in-section opacity-0 animation-delay-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/80 via-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="space-y-6 relative z-10">
                  <div className="flex items-center gap-5 mb-3">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-600 flex items-center justify-center shadow-xl shadow-cyan-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Award className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-5xl font-black bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-700 bg-clip-text text-transparent">
                      $30M
                    </CardTitle>
                  </div>
                  <CardDescription className="text-xl font-black text-foreground">
                    EdTech Accessibility Innovation
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 flex-1">
                  <p className="text-base text-muted-foreground leading-relaxed space-y-3">
                    <span className="block">
                      <strong className="text-foreground font-bold">Challenge:</strong> Learning platform inaccessible
                      to disabled students
                    </span>
                    <span className="block">
                      <strong className="text-foreground font-bold">Solution:</strong> Universal design framework with
                      AI-powered accommodations
                    </span>
                    <span className="block">
                      <strong className="text-foreground font-bold">Result:</strong> $30M new market access, 200% user
                      growth
                    </span>
                  </p>
                </CardContent>
              </Card>

              <Card className="min-h-[420px] flex flex-col bg-white/90 backdrop-blur-xl border-purple-200/50 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 fade-in-section opacity-0 animation-delay-400 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-transparent to-fuchsia-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="space-y-6 relative z-10">
                  <div className="flex items-center gap-5 mb-3">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-purple-600 flex items-center justify-center shadow-xl shadow-purple-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <TrendingUp className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-5xl font-black bg-gradient-to-br from-purple-600 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent">
                      $40M
                    </CardTitle>
                  </div>
                  <CardDescription className="text-xl font-black text-foreground">
                    Retail AI Personalization at Scale
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 flex-1">
                  <p className="text-base text-muted-foreground leading-relaxed space-y-3">
                    <span className="block">
                      <strong className="text-foreground font-bold">Challenge:</strong> Recommendation algorithms
                      excluding diverse customer segments
                    </span>
                    <span className="block">
                      <strong className="text-foreground font-bold">Solution:</strong> Inclusive AI framework with bias
                      detection and fairness metrics
                    </span>
                    <span className="block">
                      <strong className="text-foreground font-bold">Result:</strong> $40M revenue increase, 45%
                      improvement in customer satisfaction
                    </span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <Card className="bg-gradient-to-br from-purple-600/95 via-purple-500/95 to-cyan-400/95 text-white border-0 max-w-6xl mx-auto overflow-hidden relative fade-in-section opacity-0 transition-all duration-700 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.15),transparent_60%)]" />
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl" />

          <CardContent className="p-12 md:p-20 text-center relative z-10 space-y-10">
            <div className="h-24 w-24 mx-auto mb-8 rounded-3xl bg-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl">
              <Award className="h-14 w-14 text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-balance leading-[1.1]">
              Ready to Transform Your AI Strategy?
            </h2>
            <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto text-pretty leading-relaxed font-medium">
              Let's discuss how ethical, socially responsible tech isn't optional, it's essential for sustainable
              business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-purple-600 hover:bg-white/90 font-bold text-lg px-12 py-8 h-auto shadow-2xl transition-all duration-300"
              >
                <Link href="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/90 text-white hover:bg-white/20 bg-white/10 backdrop-blur-xl font-bold text-lg px-12 py-8 h-auto transition-all duration-300 hover:border-white hover:scale-105"
              >
                <Link href="/dr-dede">View Full Bio & Credentials</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
