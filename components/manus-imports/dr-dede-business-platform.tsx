"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Target, Globe, FlaskConical, Handshake, Zap, GraduationCap, Lightbulb, Bot, Users, Rocket } from "lucide-react"

interface IdentityThread {
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
}

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  price: string
  features: string[]
  gradient: string
}

export default function DrDedeBusinessPlatform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
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

  const identityThreads: IdentityThread[] = [
    {
      icon: <Target className="h-10 w-10" />,
      title: "Purpose-Driven",
      description: "Technology with clear social impact and measurable outcomes",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Global Perspective",
      description: "Understanding diverse needs across cultures and communities",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: <FlaskConical className="h-10 w-10" />,
      title: "Research-Based",
      description: "Evidence-driven approaches to accessibility and inclusion",
      gradient: "from-teal-500 to-teal-600",
    },
    {
      icon: <Handshake className="h-10 w-10" />,
      title: "Collaborative",
      description: "Working together with communities and stakeholders",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Innovation-Focused",
      description: "Pushing boundaries while maintaining ethical standards",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: <GraduationCap className="h-10 w-10" />,
      title: "Educational",
      description: "Teaching and learning from every interaction",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Transformative",
      description: "Creating lasting change in how we build technology",
      gradient: "from-blue-500 to-cyan-500",
    },
  ]

  const services: Service[] = [
    {
      icon: <Bot className="h-10 w-10" />,
      title: "AI Governance & Compliance",
      description: "Comprehensive frameworks for responsible AI implementation and governance",
      price: "$25K-$100K+",
      features: [
        "AI Ethics Framework Development",
        "Compliance Strategy & Implementation",
        "Risk Assessment & Mitigation",
        "Ongoing Governance Support",
      ],
      gradient: "from-teal-500 to-blue-500",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Fractional Executive Services",
      description: "Strategic leadership for accessibility and inclusion initiatives",
      price: "$10K-$25K/month",
      features: [
        "Strategic Planning & Execution",
        "Team Leadership & Development",
        "Stakeholder Management",
        "Performance Optimization",
      ],
      gradient: "from-purple-500 to-blue-500",
    },
    {
      icon: <Rocket className="h-10 w-10" />,
      title: "DFY AI Agents",
      description: "Done-for-you AI automation solutions for accessibility and compliance",
      price: "$500-$5K/month",
      features: [
        "Automated Accessibility Testing",
        "Compliance Monitoring",
        "Report Generation",
        "Continuous Optimization",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
              Dr. Dede
            </a>
            <div className="hidden md:flex items-center gap-6">
              {["Home", "About", "Services", "Speaking", "Incluu", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-foreground/70 hover:text-primary border-2 border-transparent hover:border-primary px-3 py-1 rounded transition"
                >
                  {item}
                </a>
              ))}
              <a
                href="#get-started"
                className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-32 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Technology{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">For All</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-4xl mx-auto mb-12 text-pretty">
            Dr. Dede helps organizations build inclusive, accessible technology that serves everyone. From AI governance
            to accessibility compliance, we create solutions that benefit society.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button size="lg" className="bg-gradient-to-r from-teal-500 to-blue-600">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50">
              Watch TEDx Talk
            </Button>
          </div>
        </div>
      </section>

      {/* Seven Identity Threads */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Seven Identity Threads</h2>
          <p className="text-center text-foreground/60 mb-12 max-w-3xl mx-auto">
            The interconnected aspects that shape our approach to inclusive technology
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {identityThreads.map((thread, idx) => (
              <div key={idx} className="group">
                <div
                  className={`bg-gradient-to-br ${thread.gradient} rounded-xl p-6 text-white h-full transition-transform hover:scale-105`}
                >
                  <div className="mb-4">{thread.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{thread.title}</h3>
                  <p className="text-white/90 text-sm">{thread.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Solutions */}
      <section id="services" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Services & Solutions</h2>
          <p className="text-center text-foreground/60 mb-12 max-w-3xl mx-auto">
            Comprehensive approaches to building inclusive, accessible technology
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition">
                <div className={`bg-gradient-to-br ${service.gradient} p-6`}>
                  <div className="text-white mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/90 mb-4">{service.description}</p>
                  <p className="text-3xl font-bold text-white">{service.price}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start text-sm text-foreground/80 gap-2">
                        <span className="text-green-500">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Learn More</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TEDx Featured Speaker */}
      <section className="py-16 bg-gradient-to-r from-primary via-blue-600 to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-6">TEDx Featured Speaker</h2>
            <p className="text-xl text-white/90 text-center mb-8">
              &ldquo;Building Technology That Serves Everyone&rdquo; - Watch Dr. Dede&apos;s inspiring talk about
              creating inclusive technology that benefits all of society.
            </p>

            <Card className="overflow-hidden shadow-2xl">
              <div className="aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="TEDx Talk"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6 text-center">
                <Button className="bg-gradient-to-r from-primary to-blue-600">Watch TEDx Talk</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Technology?</h2>
          <p className="text-xl text-foreground/70 mb-12 max-w-3xl mx-auto">
            Let&apos;s work together to create technology that serves everyone. Get started with a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-4">Start Your Transformation Journey</h3>
          <p className="text-center text-foreground/60 mb-12">
            Tell us about your accessibility and inclusion goals
          </p>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="project">Tell us about your project</Label>
                <Textarea
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  rows={6}
                  className="mt-1"
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-teal-500 to-blue-600">
                Get Free Consultation
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                Dr. Dede
              </h3>
              <p className="text-gray-400">Building inclusive, accessible technology that serves everyone.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    AI Governance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Fractional Executive
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    DFY AI Agents
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Speaking
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 Dr. Dede. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
