import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Heart, Shield, Lightbulb, Target, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Disability Advocacy Retreats | Dr. Dédé Tetsubayashi",
  description:
    "Transformative retreats for disability advocates, allies, and organizations committed to building inclusive, accessible futures.",
}

export default function AdvocacyRetreatsPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-purple-600/95 via-purple-500/95 to-cyan-400/95 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm" variant="outline">
              Disability Justice & Inclusive Innovation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white drop-shadow-lg">
              Disability Advocacy Retreats
            </h1>
            <p className="text-xl text-white/95 mb-8 text-pretty leading-relaxed max-w-3xl drop-shadow">
              Immersive experiences for advocates, allies, and organizations committed to building truly inclusive
              technology and accessible futures for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90">
                <Link href="/contact">
                  Join the Movement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#mission">Our Mission</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section
        id="mission"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-purple-50/50 to-cyan-50/50"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                From Lived Experience to Systemic Change
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Led by Dr. Dédé Tetsubayashi, a disability advocate who has transformed how Fortune 500 companies
                approach accessibility and inclusion, these retreats combine personal narrative with strategic action.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that true advocacy requires both the wisdom of lived experience and the tools to create
                lasting systemic change. Our retreats provide both—in an environment designed for accessibility,
                community, and transformation.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/diverse-group-of-advocates-collaborating-in-accessible.jpg"
                alt="Disability Advocacy Retreat"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image src="/diverse-disability-advocates-in-workshop-discussio.jpg" alt="Advocacy Workshop" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image src="/accessible-technology-demonstration-with-diverse-u.jpg" alt="Technology Accessibility" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image src="/community-gathering-of-disability-advocates-celebr.jpg" alt="Advocacy Community" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance">Retreat Focus Areas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Technology Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Learn how to advocate for and implement accessible technology that serves all users, not just the
                  privileged few.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>WCAG and ADA compliance strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Inclusive design principles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Assistive technology integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <CardTitle>AI Ethics & Bias</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Understand how AI systems perpetuate ableism and learn strategies to advocate for equitable AI
                  governance.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Algorithmic bias detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Inclusive AI development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Regulatory advocacy strategies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Community Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Connect with fellow advocates, share strategies, and build lasting networks for collective action and
                  mutual support.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Peer support circles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Coalition building strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Ongoing advocacy networks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Strategic Action Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Develop concrete action plans for advocacy work, whether in corporate settings, policy arenas, or
                  community organizations.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Target className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Campaign strategy development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Stakeholder engagement tactics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Impact measurement frameworks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-purple-50/50 to-cyan-50/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance">Who Should Attend</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/90 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Disability Advocates</h3>
                <p className="text-sm text-muted-foreground">
                  Self-advocates and community organizers seeking to amplify their impact
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Corporate Leaders</h3>
                <p className="text-sm text-muted-foreground">
                  Executives and managers committed to building inclusive organizations
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <Lightbulb className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Tech Professionals</h3>
                <p className="text-sm text-muted-foreground">
                  Developers, designers, and product managers building accessible technology
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="bg-gradient-to-br from-purple-600 to-cyan-600 text-white border-0 max-w-4xl mx-auto">
          <CardContent className="p-12 text-center">
            <Heart className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Join the Advocacy Movement</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-pretty leading-relaxed">
              Whether you're a seasoned advocate or just beginning your journey, these retreats provide the community,
              tools, and inspiration to create lasting change.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/contact">
                Learn More & Apply
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
