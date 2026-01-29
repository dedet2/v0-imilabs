"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Search,
  Scale,
  Target,
  Rocket,
  ThumbsUp,
  MessageCircle,
  Bell,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  Link2,
  Copy,
} from "lucide-react"

interface Insight {
  icon: React.ReactNode
  title: string
  description: string
}

interface SpeakingTopic {
  title: string
  description: string
}

interface ShareButton {
  icon: React.ReactNode
  label: string
  color: string
}

export default function DrDedeTetsubayashi() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Subscribe:", email)
  }

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact:", message)
  }

  const shareButtons: ShareButton[] = [
    { icon: <Twitter className="h-4 w-4" />, label: "Twitter", color: "bg-blue-400" },
    { icon: <span className="text-sm">BS</span>, label: "BlueSky", color: "bg-sky-500" },
    { icon: <Linkedin className="h-4 w-4" />, label: "LinkedIn", color: "bg-blue-700" },
    { icon: <Facebook className="h-4 w-4" />, label: "Facebook", color: "bg-blue-600" },
    { icon: <Instagram className="h-4 w-4" />, label: "Instagram", color: "bg-pink-500" },
    { icon: <span className="text-sm">TH</span>, label: "Threads", color: "bg-black" },
    { icon: <Mail className="h-4 w-4" />, label: "Email", color: "bg-gray-600" },
    { icon: <Link2 className="h-4 w-4" />, label: "Copy Link", color: "bg-gray-500" },
  ]

  const insights: Insight[] = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Lead with Curiosity",
      description:
        "Challenge your assumptions and break out of echo chambers. AI reinforces stereotypes and biases unless we actively break the cycle through curiosity and questioning.",
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Be Accountable",
      description:
        "Ethical technology development requires considering all possible end users—especially those differently abled, impaired, or economically disadvantaged. Your responsibility doesn't end at launch.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Solve for One, Extend to Many",
      description:
        "When you design with those on the margins, you create better solutions for everyone. Inclusive design benefits all users throughout your product's entire lifecycle.",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Take Action",
      description:
        "If an app is inaccessible, reach out to developers. If you see bias in tech or AI, call it out. Change begins with you—demand better technology for all.",
    },
  ]

  const speakingTopics: SpeakingTopic[] = [
    {
      title: "The $300M Compliance Risk",
      description: "How AI bias creates massive business liability and the governance frameworks that prevent it.",
    },
    {
      title: "Anthropology Applied to Algorithms",
      description: "Using social science methodology to identify and fix systemic bias in AI systems.",
    },
    {
      title: "Building Technology for Human Complexity",
      description: "Frameworks that center human diversity and create truly accessible AI systems.",
    },
    {
      title: "AI Governance in Practice",
      description: "Practical implementation strategies for responsible AI development and deployment.",
    },
    {
      title: "The Future of Responsible Innovation",
      description: "Emerging trends in AI accountability and the regulatory landscape shaping technology development.",
    },
    {
      title: "From Exclusion to Empowerment",
      description:
        "Transforming lived experience into systematic change for more inclusive technology ecosystems.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              Dr. Dede Tetsubayashi
            </a>
            <div className="hidden md:flex gap-6">
              <a href="#home" className="text-foreground/70 hover:text-primary">
                Home
              </a>
              <a href="#tedx" className="text-foreground/70 hover:text-primary">
                TEDx Talk
              </a>
              <a href="#about" className="text-foreground/70 hover:text-primary">
                About
              </a>
              <a href="#speaking" className="text-foreground/70 hover:text-primary">
                Speaking
              </a>
              <a
                href="#calculator"
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-2 rounded-lg"
              >
                ROI Calculator
              </a>
              <a href="#contact" className="text-foreground/70 hover:text-primary">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">Dr. Dede Tetsubayashi</h1>
          <h2 className="text-2xl md:text-3xl text-primary-foreground mb-4">AI Governance Expert | TEDx Speaker</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">Social Scientist. Technologist. Systems Disruptor.</p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-secondary to-primary">
              Watch My TEDx Talk
            </Button>
            <Button size="lg" variant="secondary">
              Book Speaking
            </Button>
          </div>
        </div>
      </section>

      {/* TEDx Featured Section */}
      <section id="tedx" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-primary">Featured:</span>{" "}
            <span className="text-secondary">You&apos;ve Been Coded Out</span>
          </h2>
          <p className="text-center text-foreground/60 mb-8">How To Make AI Work For All - TEDxAdamsMorgan</p>

          {/* Video Embed */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="TEDx Talk"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Support on YouTube */}
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="text-red-500">▶</span> Support on YouTube
              </h3>
              <p className="text-sm text-foreground/60 mb-4">Help reach 10K!</p>
              <div className="space-y-2">
                <Button className="w-full bg-red-500 hover:bg-red-600 gap-2">
                  <ThumbsUp className="h-4 w-4" /> Like on YouTube
                </Button>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 gap-2">
                  <MessageCircle className="h-4 w-4" /> Comment on YouTube
                </Button>
                <Button className="w-full bg-red-600 hover:bg-red-700 gap-2">
                  <Bell className="h-4 w-4" /> Subscribe to Channel
                </Button>
              </div>
              <div className="mt-4 text-sm text-foreground/60 space-y-1">
                <p>176 views</p>
                <p>13 likes</p>
                <p>1 comments</p>
                <p>49 subscribers</p>
              </div>
            </Card>

            {/* Share This Talk */}
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4">Share This Talk</h3>
              <div className="grid grid-cols-2 gap-2">
                {shareButtons.map((btn, idx) => (
                  <Button key={idx} size="sm" className={`${btn.color} text-white hover:opacity-90 gap-2`}>
                    {btn.icon} {btn.label}
                  </Button>
                ))}
              </div>
              <Button className="w-full mt-2 gap-2">
                <Copy className="h-4 w-4" /> Copy Embed Code
              </Button>
            </Card>

            {/* Progress to 10K Views */}
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4">Progress to 10K Views</h3>
              <p className="text-sm text-foreground/60 mb-2">176 / 10,000 views</p>
              <div className="w-full bg-muted rounded-full h-3 mb-4">
                <div
                  className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full"
                  style={{ width: "1.8%" }}
                />
              </div>
              <p className="text-2xl font-bold text-secondary mb-4">1.8% of goal achieved</p>
              <div className="space-y-2 text-sm">
                {[
                  { label: "First 1K", value: "1,000" },
                  { label: "5K Milestone", value: "5,000" },
                  { label: "10K Goal", value: "10,000" },
                  { label: "25K Stretch", value: "25,000" },
                ].map((milestone, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span>{milestone.label}</span>
                    <span className="font-semibold">{milestone.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* YouTube Channel */}
          <Card className="max-w-md mx-auto mt-8 p-6 text-center">
            <h3 className="text-lg font-bold mb-2">YouTube Channel</h3>
            <p className="text-sm text-foreground/60 mb-2">Subscribe for more AI ethics content</p>
            <p className="text-3xl font-bold text-red-600 mb-4">49 subscribers</p>
            <Button className="w-full bg-red-600 hover:bg-red-700 gap-2">
              <Bell className="h-4 w-4" /> Subscribe to @the_drdede
            </Button>
            <p className="text-sm text-foreground/50 mt-2">Get notified about new talks and AI ethics insights</p>
          </Card>
        </div>
      </section>

      {/* About This Talk */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">About This Talk</h2>
          <p className="text-foreground/80 mb-8 leading-relaxed">
            In my TEDx talk, &ldquo;You&apos;ve Been Coded Out: How To Make AI Work For All,&rdquo; I dive into the
            latest global research on AI&apos;s impact, and share the framework I use as a tech ethicist to guide my
            clients in creating truly responsible apps and software that reflect the rich versatility of their
            audiences. My mission is: to ensure AI empowers rather than oppresses, includes rather than excludes, and
            uplifts rather than marginalizes. When AI is developed with equity, accessibility, and lived experiences in
            mind, we create a future where technology truly serves all.
          </p>

          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">Key Insights from This Talk</h3>
          <p className="text-foreground/60 mb-6">Main takeaways and actionable insights</p>

          <div className="grid md:grid-cols-2 gap-6">
            {insights.map((insight, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-primary">{insight.icon}</div>
                  <h4 className="text-xl font-bold">{insight.title}</h4>
                </div>
                <p className="text-foreground/70">{insight.description}</p>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-gradient-to-r from-primary to-secondary p-8 text-primary-foreground">
            <p className="text-lg mb-4">
              Whether you&apos;re a technologist, organizer, creative, simply dreaming of a better world, or building AI
              or biometric tech that could backfire, I&apos;d love to help!
            </p>
            <p className="text-xl font-semibold mb-6">
              I turn risky, biased systems into compliant, high-performing products—fast. My strategies have saved
              $300M+, unlocked $500M+ in new markets.
            </p>
            <Button size="lg" variant="secondary">
              Book an advisory call with Dr. Dede
            </Button>
          </Card>
        </div>
      </section>

      {/* About Dr. Dede */}
      <section id="about" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">About Dr. Dede</h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Social scientist who doesn&apos;t just research bias—she&apos;s lived it, measured it, and now
                she&apos;s dismantling it.
              </h3>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                Dr. Dede Tetsubayashi approaches AI governance like the social scientist she is: observing patterns,
                questioning assumptions, mapping invisible power structures. As a Black, queer, first-generation
                Togolese immigrant and transracial adoptee living with sickle-cell disease, she brings an
                anthropologist&apos;s eye to the sterile world of AI governance.
              </p>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                She doesn&apos;t just study how technology excludes—she&apos;s lived it. Every algorithm that failed to
                recognize her voice, every system that couldn&apos;t parse her name, every interface that ignored her
                needs has become data. This lived experience, combined with rigorous social science methodology, allows
                her to see compliance risks that others miss.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Her work has saved companies $300M+ by identifying algorithmic bias before it becomes liability.
                She&apos;s unlocked $500M+ in value by building frameworks that center human complexity rather than
                algorithmic convenience. This isn&apos;t just about doing good—it&apos;s about building sustainable,
                profitable, and accountable AI systems.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-cyan-100 rounded-lg p-8">
              <div className="aspect-[4/5] bg-muted rounded-lg" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">$300M+</p>
              <p className="text-foreground/60">Saved in Compliance Risks</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-secondary">$500M+</p>
              <p className="text-foreground/60">Value Unlocked</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">Fortune 500</p>
              <p className="text-foreground/60">Companies Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section id="speaking" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Speaking Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {speakingTopics.map((topic, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-primary">{topic.title}</h3>
                <p className="text-foreground/70">{topic.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Stay Connected</h2>
          <p className="text-primary-foreground/90 mb-8">
            Get exclusive insights on AI governance, speaking updates, and practical frameworks for responsible
            technology development.
          </p>
          <form onSubmit={handleSubscribe} className="mb-8">
            <div className="flex gap-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-white"
              />
              <Button variant="secondary">Join the Movement</Button>
            </div>
          </form>
          <p className="text-primary-foreground/80 text-sm">Join 500+ leaders building better AI systems.</p>
          <blockquote className="mt-8 text-xl text-primary-foreground italic">
            &ldquo;The most dangerous bias in AI isn&apos;t in the code—it&apos;s in who gets to write it.&rdquo;
            <br />
            <span className="text-sm">— Dr. Dede Tetsubayashi</span>
          </blockquote>
        </div>
      </section>

      {/* Recognition & Impact */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Recognition & Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">$300M+</p>
              <p className="text-xl font-semibold mb-2">Saved</p>
              <p className="text-foreground/60">Through risk mitigation and compliance strategies</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-secondary mb-2">$500M+</p>
              <p className="text-xl font-semibold mb-2">Unlocked</p>
              <p className="text-foreground/60">In new markets through inclusive design</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">TEDx</p>
              <p className="text-xl font-semibold mb-2">Speaker</p>
              <p className="text-foreground/60">Sharing insights on responsible AI development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
              <form onSubmit={handleContact}>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message..."
                  rows={6}
                  className="mb-4"
                />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Connect</h3>
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Linkedin className="h-5 w-5" /> LinkedIn
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Twitter className="h-5 w-5" /> Twitter
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Mail className="h-5 w-5" /> Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Dr. Dede Tetsubayashi</h3>
          <p className="text-gray-400 mb-6">AI Governance Expert | TEDx Speaker | Social Scientist</p>
          <p className="text-gray-500 text-sm">© 2025 Dr. Dede Tetsubayashi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
