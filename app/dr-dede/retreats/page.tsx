import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles, Heart, Users, Mountain, CheckCircle2, Shield, Lightbulb, TrendingUp } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Luxury Retreats & Disability Advocacy | Dr. Dédé",
  description:
    "Transformative luxury wellness retreats and disability advocacy programs for executives, individuals, and organizations seeking inclusive excellence.",
}

export default function RetreatsPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-[#7209b7] via-[#6366f1] to-[#06b6d4] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
              <div className="h-5 w-5 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 flex items-center justify-center">
                <Heart className="h-3 w-3 text-white" />
              </div>
              <span className="text-sm font-semibold text-white">Transformative Experiences</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 drop-shadow-lg">
              Retreats & Advocacy
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 text-balance mb-8 drop-shadow leading-relaxed">
              Luxury wellness experiences and disability advocacy programs that transform individuals and organizations
            </p>
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-50 shadow-xl">
              <Link href="/contact?service=retreats">Inquire About Retreats</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Overview - Updated mission statement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Wellness Designed for Everyone</h2>
                <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
                  <p>
                    Our wellness retreats are founded on the principle that true luxury means accessibility for all.
                    Every aspect of the experience—from the physical spaces to the wellness practices—is designed to be
                    fully inclusive and deeply restorative.
                  </p>
                  <p>
                    Led by Dr. Dédé Tetsubayashi and a team of wellness experts, these retreats combine evidence-based
                    practices with personalized care, creating transformative experiences that honor your unique needs
                    and goals.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/accessible-luxury-spa-wellness-retreat-with-inclus.jpg"
                  alt="Luxury Wellness Experience"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retreat Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Retreat Experiences</h2>
            <p className="text-center text-lg text-foreground/70 mb-12 max-w-3xl mx-auto">
              Transformative wellness journeys designed for leaders who deserve rest, renewal, and inclusive care.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Sparkles,
                  title: "Executive Retreats",
                  description:
                    "Customized wellness experiences for C-suite and senior leadership teams. Designed to address burnout, restore clarity, and enhance strategic thinking through culturally-informed rest practices.",
                  features: [
                    "Private group bookings (10-20 participants)",
                    "Customized programming",
                    "Leadership development integration",
                    "Post-retreat integration support",
                  ],
                  href: "/dr-dede/retreats/executive",
                  image: "/luxury-executive-retreat-with-diverse-leaders-in-m.jpg",
                },
                {
                  icon: Mountain,
                  title: "Luxury Wellness",
                  description:
                    "Premium wellness retreats in Japan combining traditional healing practices with modern luxury. Experience transformative rest in culturally-rich environments designed for deep restoration.",
                  features: [
                    "Seasonal retreat experiences",
                    "Traditional onsen healing",
                    "Cultural immersion",
                    "Small intimate groups (8-12 participants)",
                  ],
                  href: "/dr-dede/retreats/wellness",
                  image: "/accessible-luxury-spa-wellness-retreat-with-inclus.jpg",
                },
                {
                  icon: Users,
                  title: "Disability Retreats",
                  description:
                    "Fully accessible wellness experiences designed specifically for individuals with disabilities. Every aspect thoughtfully curated to ensure comfort, dignity, and transformative healing.",
                  features: [
                    "WCAG AAA accessible environments",
                    "Adaptive wellness practices",
                    "Specialized support staff",
                    "Dignity-centered care",
                  ],
                  href: "/dr-dede/retreats/advocacy",
                  image: "/diverse-team-building-retreat-with-collaborative-a.jpg",
                },
              ].map((retreat, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src={retreat.image || "/placeholder.svg"}
                      alt={retreat.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#667eea] to-[#06b6d4] flex items-center justify-center mb-4">
                      <retreat.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{retreat.title}</h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">{retreat.description}</p>
                    <ul className="space-y-2 mb-6">
                      {retreat.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full bg-gradient-to-r from-[#667eea] to-[#06b6d4]">
                      <Link href={retreat.href}>Learn More</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Photo Gallery within the same section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/luxury-accessible-spa-with-modern-design.jpg"
                  alt="Luxury Spa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/diverse-executives-in-meditation-session.jpg"
                  alt="Meditation Session"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/gourmet-healthy-meal-presentation.jpg"
                  alt="Gourmet Dining"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/accessible-yoga-studio-with-natural-light.jpg"
                  alt="Yoga Studio"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Partnerships */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Corporate Partnerships</h2>
            <p className="text-center text-lg text-foreground/70 mb-12 max-w-3xl mx-auto">
              Bring transformative wellness experiences to your organization. Our corporate partnerships offer
              customized retreat experiences, executive wellness programs, and team restoration initiatives designed for
              high-performing teams.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Sparkles,
                  title: "Executive Wellness Programs",
                  description:
                    "Customized wellness experiences for C-suite and senior leadership teams addressing burnout and enhancing strategic thinking.",
                },
                {
                  icon: Users,
                  title: "Team Wellness Programs",
                  description:
                    "Multi-day wellness experiences strengthening team cohesion while providing deep restoration for high-performing teams and ERG groups.",
                },
                {
                  icon: Shield,
                  title: "Wellness Sponsorships",
                  description:
                    "Sponsor employee participation in public retreats as part of DEI, wellness, or professional development initiatives demonstrating commitment to employee wellbeing.",
                },
              ].map((program, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow text-center">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#667eea] to-[#06b6d4] flex items-center justify-center mx-auto mb-4">
                    <program.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{program.description}</p>
                </Card>
              ))}
            </div>

            <Card className="p-8 bg-gradient-to-br from-[#667eea]/5 to-[#06b6d4]/5 text-center">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#667eea] to-[#06b6d4] bg-clip-text text-transparent">
                Partner With Us
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed max-w-2xl mx-auto">
                Interested in bringing transformative wellness to your organization? Let's discuss customized corporate
                wellness solutions.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-[#667eea] to-[#06b6d4]">
                <Link href="/dr-dede/retreats/partnerships">Schedule Corporate Consultation</Link>
              </Button>
              <p className="mt-4 text-sm text-foreground/60 italic">
                Trusted by Fortune 500 companies and leading healthcare organizations
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Disability Advocacy */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Disability Advocacy Programs</h2>

            <div className="space-y-8">
              {[
                {
                  icon: Shield,
                  title: "Corporate Accessibility Audits",
                  description:
                    "Comprehensive assessments of your organization's accessibility practices, from digital products to physical spaces.",
                  outcomes: [
                    "Detailed accessibility audit report",
                    "Prioritized remediation roadmap",
                    "Compliance gap analysis",
                    "Implementation support",
                  ],
                },
                {
                  icon: Users,
                  title: "Inclusive Culture Transformation",
                  description:
                    "Strategic programs to build truly inclusive organizations where disability is valued as a driver of innovation.",
                  outcomes: [
                    "Leadership training programs",
                    "Employee resource group support",
                    "Policy & practice recommendations",
                    "Ongoing advisory support",
                  ],
                },
                {
                  icon: Lightbulb,
                  title: "Accessibility Training & Workshops",
                  description:
                    "Hands-on training for teams to build accessibility into every stage of product development and service delivery.",
                  outcomes: [
                    "Customized training curriculum",
                    "Practical implementation tools",
                    "Team certification programs",
                    "Ongoing consultation access",
                  ],
                },
              ].map((program, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0">
                      <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center shadow-lg">
                        <program.icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">{program.description}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">What You'll Receive:</h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {program.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/80">{outcome}</span>
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

      {/* Why Choose Our Retreats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Why Choose Our Retreats</h2>

            <div className="grid sm:grid-cols-2 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Fully Accessible",
                  description:
                    "Every retreat is designed with accessibility at the forefront, ensuring all participants can fully engage and benefit.",
                },
                {
                  icon: Sparkles,
                  title: "Luxury Experience",
                  description:
                    "Premium accommodations, gourmet dining, and world-class amenities create an unforgettable experience.",
                },
                {
                  icon: Users,
                  title: "Expert Facilitation",
                  description:
                    "Led by Dr. Dédé and a team of specialists in wellness, leadership, and inclusive design.",
                },
                {
                  icon: TrendingUp,
                  title: "Transformative Impact",
                  description:
                    "Participants leave with actionable strategies, renewed energy, and a commitment to inclusive excellence.",
                },
              ].map((benefit, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center mb-4 shadow-lg">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Participant Testimonials</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "The executive retreat was transformative. I returned to my organization with a renewed commitment to inclusive leadership and practical strategies to implement immediately.",
                  author: "Jennifer Martinez",
                  role: "CEO, Healthcare Technology Company",
                },
                {
                  quote:
                    "As a wheelchair user, I've never experienced a luxury retreat that was truly accessible. This was life-changing—I felt seen, valued, and empowered.",
                  author: "David Thompson",
                  role: "VP of Engineering, Fortune 500 Company",
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
      <section className="py-20 bg-gradient-to-br from-[#7209b7] via-[#6366f1] to-[#06b6d4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white drop-shadow-lg">
              Ready to Transform Your Experience?
            </h2>
            <p className="text-xl text-white/95 mb-8 drop-shadow leading-relaxed">
              Inquire about our luxury retreats and advocacy programs to create lasting change for individuals and
              organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-50 shadow-xl">
                <Link href="/contact?service=retreats">Inquire About Retreats</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
              >
                <Link href="/contact?service=advocacy">Request Advocacy Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
