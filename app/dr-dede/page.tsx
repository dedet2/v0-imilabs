import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Heart,
  Lightbulb,
  Mic,
  Mountain,
  Play,
  Sparkles,
  Users,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Dr. Dédé Tetsubayashi | AI Governance Expert & TEDx Speaker",
  description:
    "Meet Dr. Dédé Tetsubayashi - AI Governance Expert, Disability Advocate, and TEDx Speaker. PhD in Technology Policy, 20+ years transforming tech equity.",
  openGraph: {
    title: "Dr. Dédé Tetsubayashi | AI Governance Expert & TEDx Speaker",
    description: "AI Governance Expert, Disability Advocate, and TEDx Speaker",
  },
}

export default function DrDedePage() {
  return (
    <div className="relative">
      {/* Hero Section with TEDx Video */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200" variant="outline">
                AI Governance Expert | TEDx Speaker
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Dr. Dédé Tetsubayashi</h1>
              <p className="text-xl text-muted-foreground mb-6 text-pretty leading-relaxed">
                Combining rigorous academic training with lived experience as a disability advocate to challenge
                conventional approaches to AI governance and create lasting systemic change.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-purple-600" />
                  <span className="text-sm">
                    PhD in Technology Policy with 20+ years advising Fortune 100 enterprises and global organizations
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-cyan-600" />
                  <span className="text-sm">
                    Saved companies $200M+ in regulatory cost avoidance and $500M+ in new market opportunities
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="h-5 w-5 text-purple-600" />
                  <span className="text-sm">
                    Global experience and thought-leader featured at MIT Technology Review, WEF, and leading industry
                    conferences
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90">
                  <Link href="/contact">
                    Work With Dr. Dédé
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#speaking">Book Speaking</Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/african-american-woman-in-colorful-patterned-blaze.jpg"
                alt="Dr. Dédé TEDx Talk - You've Been Coded Out"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="h-20 w-20 mx-auto mb-4 opacity-90 hover:opacity-100 transition-opacity cursor-pointer" />
                  <p className="text-lg font-semibold mb-2">TEDx Talk</p>
                  <p className="text-sm opacity-90">"You've Been Coded Out: How To Make AI Work For All"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-purple-50/50 to-cyan-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
            <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl flex-shrink-0">
              <Image
                src="/professional-headshot-of-african-american-woman-te.jpg"
                alt="Dr. Dédé Tetsubayashi"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">About Dr. Dédé</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Combining rigorous academic training with lived experience to challenge conventional approaches
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Lived Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  As a PhD in Technology Policy and over 20 years of hands-on experience, Dr. Tetsubayashi has
                  transformed how Fortune 100 enterprises and startups alike approach tech equity and ethical technology
                  implementations. She has saved companies $200M+ in regulatory cost avoidance and unlocked $500M+ in
                  new market opportunities through strategic equity implementations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle>Pioneering Framework</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Her pioneering frameworks for AI governance and algorithmic bias detection are used across industries,
                  from healthcare and finance to education and retail. Dr. Tetsubayashi's work ensures that innovation
                  and accessibility go hand in hand, creating sustainable business growth while driving social impact.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-purple-600 to-cyan-600 text-white border-0">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0">
                  <BookOpen className="h-16 w-16 opacity-90" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">A Sought-After Speaker and Thought Leader</h3>
                  <p className="opacity-90 leading-relaxed">
                    Dr. Tetsubayashi has been featured at MIT Technology Review, the World Economic Forum, and leading
                    industry conferences. Her TEDx talk on managing artificial intelligence systems to serve everyone,
                    not just the privileged few, has inspired thousands to rethink technology's role in society.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Credentials */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Credentials & Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white/90 backdrop-blur-sm border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">PhD, Technology Policy</h3>
                    <p className="text-sm text-muted-foreground">
                      Specialized in AI governance and digital equity frameworks
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-cyan-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Certified Ethics Practitioner</h3>
                    <p className="text-sm text-muted-foreground">
                      Global expertise in technology ethics and compliance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Fortune 100 Experience</h3>
                    <p className="text-sm text-muted-foreground">
                      20+ years advising leading tech companies and startups
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-cyan-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Disability Advocate & Systems Disruptor</h3>
                    <p className="text-sm text-muted-foreground">
                      Lived experience informing inclusive technology design
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Speaking & TEDx Section */}
      <section
        id="speaking"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-purple-50/50 to-cyan-50/50"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200" variant="outline">
              TEDx Speaker | Keynote Presenter
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Speaking & Events</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Book Dr. Dédé for keynotes, panels, and workshops on AI governance and tech equity
            </p>
          </div>

          <Card className="bg-white/90 backdrop-blur-sm mb-12">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="h-24 w-24 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                    <Mic className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">
                    Dr. Dédé's <span className="text-red-600">TEDx</span> Talk:
                  </h3>
                  <p className="text-xl font-semibold mb-3 text-balance">
                    "You've Been Coded Out: How To Make AI Work For All"
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    In this powerful TEDx talk, Dr. Dédé Tetsubayashi reveals how AI systems are systematically failing
                    compliance standards and creating massive liability risks. As a tech expert and disability advocate
                    who has saved companies $200M+ and unlocked $500M+ in new markets, Dr. Tetsubayashi breaks down the
                    four essential principles for building compliant, high-performing AI systems.
                  </p>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold">Key Takeaways:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Lead with Curiosity - Challenge assumptions and eliminate blind spots in AI development</li>
                      <li>• Be Accountable - Implement governance frameworks that ensure regulatory compliance</li>
                      <li>
                        • Solve for One, Extend to Many - Accessibility-first design reduces risk and expands markets
                      </li>
                      <li>
                        • Take Action - Proactive compliance strategies that prevent costly violations and unlock growth
                      </li>
                    </ul>
                  </div>
                  <Button asChild className="bg-red-600 hover:bg-red-700">
                    <Link href="https://youtube.com" rel="noopener noreferrer">
                      <Play className="mr-2 h-4 w-4" />
                      Watch TEDx Talk
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <Mic className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Keynote Speaking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Engaging presentations on AI governance, tech equity, and disability advocacy for conferences and
                  corporate events
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <Users className="h-8 w-8 text-cyan-600 mb-2" />
                <CardTitle>Panel Discussions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Expert insights on technology ethics, regulatory compliance, and inclusive innovation for industry
                  panels
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <Briefcase className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Corporate Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Interactive training sessions for leadership teams on implementing ethical AI practices and governance
                  frameworks
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Luxury Retreats Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-cyan-100 text-cyan-700 border-cyan-200" variant="outline">
              Wellness & Leadership Development
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Luxury Retreats & Workshops</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Transformative experiences for individuals, enterprises, and wellness organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm border-cyan-200">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-4">
                  <Mountain className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle className="text-xl">Individual Retreats</CardTitle>
                <CardDescription>Personal transformation and leadership development</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Curated wellness experiences combining mindfulness, leadership coaching, and strategic planning in
                  luxury settings designed for accessibility and comfort.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Personalized coaching sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Wellness and mindfulness practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Strategic career planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-purple-200">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Enterprise Workshops</CardTitle>
                <CardDescription>Team building and organizational transformation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Immersive leadership development programs that embed inclusive practices and ethical decision-making
                  across your organization.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Executive team alignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Inclusive leadership training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Change management strategies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="bg-gradient-to-br from-purple-600 to-cyan-600 text-white border-0 max-w-4xl mx-auto">
          <CardContent className="p-12 text-center">
            <Sparkles className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Let's Work Together</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-pretty leading-relaxed">
              Whether you need strategic AI governance consulting, speaking engagements, or transformative leadership
              retreats, let's create lasting impact together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/incluu">Explore incluu Services</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
