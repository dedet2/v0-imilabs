import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles, Heart, Users, Mountain, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Luxury Retreats & Disability Advocacy | Dr. Dédé",
  description:
    "Transformative luxury wellness retreats and disability advocacy programs for executives, individuals, and organizations seeking inclusive excellence.",
}

export default function RetreatsPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Heart className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Transformative Experiences</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">Retreats & Advocacy</h1>
            <p className="text-xl sm:text-2xl text-foreground/70 text-balance mb-8">
              Luxury wellness experiences and disability advocacy programs that transform individuals and organizations
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact?service=retreats">Inquire About Retreats</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Retreat Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Retreat Experiences</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Sparkles,
                  title: "Executive Retreats",
                  description:
                    "Exclusive experiences for C-suite leaders to recharge, strategize, and build inclusive leadership capabilities.",
                  features: [
                    "Private luxury accommodations",
                    "Strategic planning sessions",
                    "Wellness & mindfulness practices",
                    "Inclusive leadership training",
                  ],
                  duration: "3-5 days",
                },
                {
                  icon: Mountain,
                  title: "Luxury Wellness",
                  description:
                    "Curated wellness experiences combining accessibility, luxury, and transformative personal growth.",
                  features: [
                    "Fully accessible venues",
                    "Personalized wellness programs",
                    "Gourmet inclusive dining",
                    "Spa & therapeutic services",
                  ],
                  duration: "5-7 days",
                },
                {
                  icon: Users,
                  title: "Team Retreats",
                  description:
                    "Build high-performing, inclusive teams through immersive experiences and collaborative learning.",
                  features: [
                    "Team building activities",
                    "Diversity & inclusion workshops",
                    "Collaborative problem-solving",
                    "Cultural competency training",
                  ],
                  duration: "2-4 days",
                },
              ].map((retreat, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <retreat.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{retreat.title}</h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">{retreat.description}</p>
                  <ul className="space-y-2 mb-6">
                    {retreat.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm font-semibold text-primary">{retreat.duration}</div>
                </Card>
              ))}
            </div>
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
                  <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">{program.description}</p>
                  <div>
                    <h4 className="font-semibold mb-3">What You'll Receive:</h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {program.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
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
                  title: "Fully Accessible",
                  description:
                    "Every retreat is designed with accessibility at the forefront, ensuring all participants can fully engage and benefit.",
                },
                {
                  title: "Luxury Experience",
                  description:
                    "Premium accommodations, gourmet dining, and world-class amenities create an unforgettable experience.",
                },
                {
                  title: "Expert Facilitation",
                  description:
                    "Led by Dr. Dédé and a team of specialists in wellness, leadership, and inclusive design.",
                },
                {
                  title: "Transformative Impact",
                  description:
                    "Participants leave with actionable strategies, renewed energy, and a commitment to inclusive excellence.",
                },
              ].map((benefit, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
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
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Experience?</h2>
            <p className="text-xl text-foreground/70 mb-8">
              Inquire about our luxury retreats and advocacy programs to create lasting change for individuals and
              organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact?service=retreats">Inquire About Retreats</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact?service=advocacy">Request Advocacy Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
