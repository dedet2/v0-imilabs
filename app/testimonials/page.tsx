import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export const metadata: Metadata = {
  title: "Client Testimonials | incluu - What Our Clients Say",
  description:
    "Read testimonials from Fortune 500 companies and organizations that have transformed their AI governance with incluu.",
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">What Our Clients Say</h1>
            <p className="text-xl sm:text-2xl text-foreground/70 text-balance mb-8">
              Hear from organizations that have transformed their AI governance and unlocked new opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "Dr. Dédé's expertise saved us from a potential $50M regulatory disaster. Her AI governance framework not only ensured compliance but also improved our product quality and expanded our market reach.",
                  author: "Sarah Chen",
                  role: "Chief Risk Officer",
                  company: "Fortune 500 Financial Services",
                  rating: 5,
                },
                {
                  quote:
                    "The accessibility-first approach unlocked $120M in new market opportunities we didn't even know existed. This wasn't just about compliance—it was about innovation and growth.",
                  author: "Michael Rodriguez",
                  role: "VP of Product",
                  company: "Global Healthcare Technology",
                  rating: 5,
                },
                {
                  quote:
                    "incluu transformed how we think about AI development. The governance framework reduced our compliance review time by 65% while actually improving the quality of our AI features.",
                  author: "Jennifer Park",
                  role: "CTO",
                  company: "Enterprise SaaS Platform",
                  rating: 5,
                },
                {
                  quote:
                    "Working with Dr. Dédé was transformative for our entire organization. She didn't just provide consulting—she empowered our teams with the knowledge and tools to build ethical AI systems.",
                  author: "David Thompson",
                  role: "Chief Innovation Officer",
                  company: "Fortune 100 Technology Company",
                  rating: 5,
                },
                {
                  quote:
                    "The ROI was immediate and substantial. We avoided costly fines, expanded our market, and built a competitive advantage through inclusive design. Best investment we've made.",
                  author: "Lisa Anderson",
                  role: "CEO",
                  company: "Mid-Market SaaS Company",
                  rating: 5,
                },
                {
                  quote:
                    "Dr. Dédé's TEDx talk inspired us to engage her services. The results exceeded our expectations—we're now industry leaders in AI governance and accessibility.",
                  author: "James Wilson",
                  role: "VP of Engineering",
                  company: "E-commerce Platform",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <Quote className="h-8 w-8 text-primary/20 mb-4" />

                  <p className="text-foreground/80 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>

                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-foreground/70">{testimonial.role}</div>
                    <div className="text-sm text-foreground/60">{testimonial.company}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Video Testimonials</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Fortune 500 Financial Services Transformation",
                  company: "Global Bank",
                  thumbnail: "/professional-business-meeting.png",
                },
                {
                  title: "Healthcare AI Accessibility Success Story",
                  company: "MedTech Company",
                  thumbnail: "/healthcare-technology-integration.png",
                },
              ].map((video, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted relative group cursor-pointer">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold mb-2">{video.title}</h3>
                    <p className="text-sm text-foreground/60">{video.company}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Client Satisfaction</h2>

            <div className="grid sm:grid-cols-4 gap-8">
              {[
                { value: "98%", label: "Client Satisfaction" },
                { value: "100%", label: "Would Recommend" },
                { value: "4.9/5", label: "Average Rating" },
                { value: "50+", label: "Organizations Served" },
              ].map((stat, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-foreground/70">{stat.label}</div>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join Our Success Stories</h2>
            <p className="text-xl text-foreground/70 mb-8">
              Schedule a consultation to discover how we can help your organization achieve similar results.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
