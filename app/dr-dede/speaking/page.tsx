import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mic, Users, Award, Calendar, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Book Dr. Dédé for Speaking & Events | TEDx Speaker",
  description:
    "Book Dr. Dédé Tetsubayashi for keynotes, panels, and workshops on AI governance, tech equity, and disability advocacy. TEDx speaker with proven impact.",
}

export default function SpeakingPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background%20image-5OPnc8AlHTSoOxJ7nl3p76nm3yD6w0.png"
            alt="Dr. Dédé Tetsubayashi"
            fill
            className="object-cover object-right"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/95 via-purple-500/95 to-cyan-400/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
              <Award className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white">TEDx Speaker</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 drop-shadow-lg">
              Speaking & Events with Dr. Dédé
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 text-balance mb-8 drop-shadow leading-relaxed">
              Transform your event with powerful insights on AI governance, tech equity, and inclusive innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-50 shadow-xl">
                <Link href="/contact?service=speaking">Book Dr. Dédé</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
              >
                <Link href="/dr-dede/tedx">Watch TEDx Talk</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Speaking Topics</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Mic,
                  title: "AI Governance & Compliance",
                  description:
                    "Navigate the complex landscape of AI regulation, from EU AI Act to algorithmic accountability frameworks.",
                  topics: [
                    "Building compliant AI systems",
                    "Risk management strategies",
                    "Regulatory compliance frameworks",
                    "Ethical AI development",
                  ],
                  image: "/professional-speaker-presenting-ai-governance-to-c.jpg",
                },
                {
                  icon: Users,
                  title: "Tech Equity & Inclusion",
                  description:
                    "Learn how inclusive design expands markets, reduces risk, and creates products that work for everyone.",
                  topics: [
                    "Accessibility-first design",
                    "Disability as innovation driver",
                    "Expanding market reach",
                    "Building inclusive teams",
                  ],
                  image: "/diverse-team-collaborating-on-inclusive-technology.jpg",
                },
                {
                  icon: Award,
                  title: "Leadership & Innovation",
                  description:
                    "Discover how to lead with curiosity, accountability, and action to drive transformative change.",
                  topics: [
                    "Challenging assumptions",
                    "Transparent governance",
                    "Proactive compliance",
                    "Building high-performing teams",
                  ],
                  image: "/executive-leadership-workshop-with-diverse-busines.jpg",
                },
                {
                  icon: Calendar,
                  title: "Future of Work & AI",
                  description: "Explore how AI is reshaping work, and how to prepare your organization for the future.",
                  topics: [
                    "AI transformation strategies",
                    "Workforce adaptation",
                    "Human-AI collaboration",
                    "Ethical automation",
                  ],
                  image: "/futuristic-office-with-ai-technology-and-diverse-w.jpg",
                },
              ].map((topic, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image src={topic.image || "/placeholder.svg"} alt={topic.title} fill className="object-cover" />
                  </div>
                  <div className="p-8">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center mb-4">
                      <topic.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{topic.title}</h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">{topic.description}</p>
                    <ul className="space-y-2">
                      {topic.topics.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-sm text-foreground/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Event Types</h2>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Keynotes",
                  description: "45-60 minute presentations that inspire and educate large audiences",
                  duration: "45-60 min",
                },
                {
                  title: "Panels & Fireside Chats",
                  description: "Interactive discussions on AI governance, tech equity, and innovation",
                  duration: "30-90 min",
                },
                {
                  title: "Workshops",
                  description: "Hands-on sessions for teams to develop actionable strategies",
                  duration: "2-4 hours",
                },
              ].map((type, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                  <p className="text-sm text-foreground/70 mb-4 leading-relaxed">{type.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-br from-purple-600 to-cyan-400 rounded-full">
                    <Calendar className="h-4 w-4 text-white" />
                    <span className="text-xs font-semibold text-white">{type.duration}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Speaking Engagements */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Past Speaking Engagements</h2>

            <div className="space-y-6">
              {[
                {
                  event: "TEDxAdamsMorgan",
                  title: "You've Been Coded Out: How To Make AI Work For All",
                  year: "2024",
                  description:
                    "Revealed how AI systems systematically fail compliance standards and shared four principles for building ethical AI.",
                },
                {
                  event: "AI Governance Summit",
                  title: "Navigating the EU AI Act: Practical Compliance Strategies",
                  year: "2024",
                  description: "Guided 500+ executives through regulatory requirements and implementation frameworks.",
                },
                {
                  event: "Tech Equity Conference",
                  title: "Disability as Innovation Driver",
                  year: "2023",
                  description:
                    "Demonstrated how accessibility-first design unlocks new markets and reduces legal risk.",
                },
              ].map((engagement, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {engagement.year}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent mb-1">
                        {engagement.event}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{engagement.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">{engagement.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">What Event Organizers Say</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "Dr. Dédé's keynote was the highlight of our conference. Her insights on AI governance were both practical and inspiring.",
                  author: "Sarah Chen",
                  role: "Conference Director, AI Summit 2024",
                },
                {
                  quote:
                    "The workshop transformed how our team thinks about accessibility. We've already implemented several of her recommendations.",
                  author: "Michael Rodriguez",
                  role: "VP of Product, Fortune 500 Tech Company",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <p className="text-foreground/80 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-foreground/60">{testimonial.role}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600/95 via-purple-500/95 to-cyan-400/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white drop-shadow-lg">Ready to Book Dr. Dédé?</h2>
            <p className="text-xl text-white/95 mb-8 drop-shadow leading-relaxed">
              Transform your next event with insights that inspire action and drive real change.
            </p>
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-50 shadow-xl">
              <Link href="/contact?service=speaking">Request Speaking Engagement</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
