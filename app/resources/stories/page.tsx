import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, Heart, Lightbulb } from "lucide-react"

export const metadata: Metadata = {
  title: "Stories | Resources - Inspiring Narratives of Change",
  description:
    "Read inspiring stories of transformation, innovation, and inclusive excellence from the world of AI governance and tech equity.",
}

export default function StoriesPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">Stories of Transformation</h1>
            <p className="text-xl sm:text-2xl text-foreground/70 text-balance mb-8">
              Inspiring narratives of innovation, inclusion, and impact
            </p>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-12">
            {[
              {
                icon: Heart,
                title: "From Exclusion to Innovation: How Disability Drives Design Excellence",
                excerpt:
                  "When a Fortune 500 company discovered their AI product excluded 15% of potential users, they didn't just fix the problem—they transformed their entire approach to innovation.",
                date: "March 2024",
                readTime: "8 min read",
                category: "Innovation",
              },
              {
                icon: Lightbulb,
                title: "The $50M Wake-Up Call: A Compliance Crisis Becomes a Competitive Advantage",
                excerpt:
                  "Facing massive regulatory fines, a financial services company turned a compliance crisis into an opportunity to become an industry leader in ethical AI.",
                date: "February 2024",
                readTime: "10 min read",
                category: "Compliance",
              },
              {
                icon: BookOpen,
                title: "Building Bridges: How One Team Transformed Tech Culture Through Inclusion",
                excerpt:
                  "A mid-market SaaS company's journey from homogeneous team to inclusive powerhouse, and the unexpected business results that followed.",
                date: "January 2024",
                readTime: "7 min read",
                category: "Culture",
              },
            ].map((story, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                      <story.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {story.category}
                      </span>
                      <span className="text-xs text-foreground/60">{story.date}</span>
                      <span className="text-xs text-foreground/60">•</span>
                      <span className="text-xs text-foreground/60">{story.readTime}</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 hover:text-primary transition-colors cursor-pointer">
                      {story.title}
                    </h3>

                    <p className="text-foreground/70 leading-relaxed mb-4">{story.excerpt}</p>

                    <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80">
                      Read Full Story →
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-foreground/70 mb-8">
              Schedule a consultation to start your transformation journey.
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
