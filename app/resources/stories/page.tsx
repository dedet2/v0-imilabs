import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, Heart, Lightbulb, Users, Award, TrendingUp } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Stories | Resources - Inspiring Narratives of Change",
  description:
    "Read inspiring stories of transformation, innovation, and inclusive excellence from the world of AI governance and tech equity.",
}

export default function StoriesPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-purple-600/95 via-purple-500/95 to-cyan-400/95 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm" variant="outline">
              Inspiring Narratives
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 text-white drop-shadow-lg">
              Stories of Transformation
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 text-balance mb-8 drop-shadow leading-relaxed">
              Inspiring narratives of innovation, inclusion, and impact from organizations that chose to lead with
              equity and accessibility
            </p>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            {[
              {
                icon: Heart,
                title: "From Exclusion to Innovation: How Disability Drives Design Excellence",
                excerpt:
                  "When a Fortune 500 company discovered their AI product excluded 15% of potential users, they didn't just fix the problem—they transformed their entire approach to innovation. The result? A 40% increase in market reach and $75M in new revenue.",
                date: "March 2024",
                readTime: "8 min read",
                category: "Innovation",
                image: "/diverse-team-celebrating-inclusive-product-launch.jpg",
                stats: { revenue: "$75M", reach: "40%", timeline: "18 months" },
              },
              {
                icon: Lightbulb,
                title: "The $50M Wake-Up Call: A Compliance Crisis Becomes a Competitive Advantage",
                excerpt:
                  "Facing massive regulatory fines, a financial services company turned a compliance crisis into an opportunity to become an industry leader in ethical AI. Their proactive governance framework not only avoided penalties but attracted $200M in new institutional investment.",
                date: "February 2024",
                readTime: "10 min read",
                category: "Compliance",
                image: "/executive-team-reviewing-compliance-dashboard.jpg",
                stats: { investment: "$200M", savings: "$50M", timeline: "12 months" },
              },
              {
                icon: BookOpen,
                title: "Building Bridges: How One Team Transformed Tech Culture Through Inclusion",
                excerpt:
                  "A mid-market SaaS company's journey from homogeneous team to inclusive powerhouse, and the unexpected business results that followed. Employee satisfaction increased 92%, retention improved 85%, and product innovation accelerated by 60%.",
                date: "January 2024",
                readTime: "7 min read",
                category: "Culture",
                image: "/diverse-tech-team-collaborating-in-modern-office.jpg",
                stats: { satisfaction: "92%", retention: "85%", innovation: "60%" },
              },
              {
                icon: Users,
                title: "Healthcare AI That Actually Serves All Patients: A System Transformation",
                excerpt:
                  "A regional healthcare system discovered their AI diagnostic tools were failing patients with disabilities. Their commitment to inclusive AI design resulted in 95% diagnostic accuracy across all patient populations and $100M in cost savings.",
                date: "December 2023",
                readTime: "9 min read",
                category: "Healthcare",
                image: "/healthcare-professionals-using-accessible-ai-tools.jpg",
                stats: { accuracy: "95%", savings: "$100M", patients: "2.3M" },
              },
              {
                icon: Award,
                title: "EdTech Accessibility: From Compliance Burden to Market Leader",
                excerpt:
                  "An education technology platform transformed accessibility from a checkbox requirement into their core value proposition. The result? They captured 45% of the accessible learning market and secured $30M in new funding.",
                date: "November 2023",
                readTime: "6 min read",
                category: "Education",
                image: "/students-using-accessible-learning-technology.jpg",
                stats: { market: "45%", funding: "$30M", users: "500K+" },
              },
              {
                icon: TrendingUp,
                title: "Retail AI Personalization That Includes Everyone",
                excerpt:
                  "A major e-commerce retailer rebuilt their AI recommendation engine with accessibility at its core. The inclusive approach expanded their addressable market by 23% and generated $40M in incremental revenue.",
                date: "October 2023",
                readTime: "8 min read",
                category: "Retail",
                image: "/accessible-ecommerce-shopping-experience.jpg",
                stats: { market: "23%", revenue: "$40M", customers: "1.2M" },
              },
            ].map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="text-xs font-semibold px-3 py-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full">
                        {story.category}
                      </span>
                      <span className="text-xs text-foreground/60">{story.date}</span>
                      <span className="text-xs text-foreground/60">•</span>
                      <span className="text-xs text-foreground/60">{story.readTime}</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 hover:text-purple-600 transition-colors cursor-pointer">
                      {story.title}
                    </h3>

                    <p className="text-foreground/70 leading-relaxed mb-6">{story.excerpt}</p>

                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-br from-purple-50 to-cyan-50 rounded-lg">
                      {Object.entries(story.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-purple-600">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    <Button variant="link" className="p-0 h-auto text-purple-600 hover:text-purple-700">
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
      <section className="py-20 bg-gradient-to-br from-purple-600/95 via-purple-500/95 to-cyan-400/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white drop-shadow-lg">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/95 mb-8 drop-shadow leading-relaxed">
              Schedule a consultation to start your transformation journey and join the organizations creating
              measurable impact through inclusive innovation.
            </p>
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-50 shadow-xl">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
