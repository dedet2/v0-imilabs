import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Blog | Dr. Dédé & incluu",
  description: "Insights on AI governance, tech equity, disability advocacy, and inclusive innovation from Dr. Dédé Tetsubayashi.",
  openGraph: {
    title: "Blog | Dr. Dédé & incluu",
    description: "Insights on AI governance, tech equity, disability advocacy, and inclusive innovation.",
  },
}

const blogPosts = [
  {
    id: 1,
    title: "The EU AI Act: What Leaders Need to Know in 2026",
    description: "A comprehensive guide to the EU AI Act requirements and how organizations can prepare for compliance.",
    category: "AI Governance",
    date: "January 15, 2026",
    readTime: "8 min read",
    image: "/modern-corporate-office-with-diverse-team-working-on-ai-governance.jpg",
    slug: "eu-ai-act-guide-2026",
  },
  {
    id: 2,
    title: "Disability as Innovation Driver: The Business Case",
    description: "How inclusive design and accessibility-first thinking can unlock new markets and drive competitive advantage.",
    category: "Tech Equity",
    date: "January 8, 2026",
    readTime: "6 min read",
    image: "/diverse-team-collaborating-on-inclusive-technology.jpg",
    slug: "disability-innovation-driver",
  },
  {
    id: 3,
    title: "Building Ethical AI Systems: A Framework for Success",
    description: "Practical steps for implementing ethical AI governance that protects your organization and serves all users.",
    category: "AI Governance",
    date: "December 20, 2025",
    readTime: "10 min read",
    image: "/executive-team-reviewing-compliance-dashboard.jpg",
    slug: "ethical-ai-framework",
  },
  {
    id: 4,
    title: "The ROI of Accessible Technology",
    description: "Quantifying the business value of accessibility investments and inclusive design practices.",
    category: "Business Impact",
    date: "December 12, 2025",
    readTime: "7 min read",
    image: "/diverse-team-celebrating-inclusive-product-launch.jpg",
    slug: "roi-accessible-technology",
  },
  {
    id: 5,
    title: "Algorithmic Bias: Detection and Prevention Strategies",
    description: "Understanding how bias enters AI systems and practical approaches to identify and mitigate it.",
    category: "AI Governance",
    date: "December 5, 2025",
    readTime: "9 min read",
    image: "/diverse-tech-team-collaborating-in-modern-office.jpg",
    slug: "algorithmic-bias-prevention",
  },
  {
    id: 6,
    title: "Rest as Resistance: The Wellness Imperative for Leaders",
    description: "Why executive wellness and intentional rest are essential for sustainable leadership and innovation.",
    category: "Wellness",
    date: "November 28, 2025",
    readTime: "5 min read",
    image: "/diverse-executives-in-meditation-session.jpg",
    slug: "rest-as-resistance-leaders",
  },
]

const categories = ["All", "AI Governance", "Tech Equity", "Business Impact", "Wellness"]

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-[#7209b7] via-[#6366f1] to-[#06b6d4] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm" variant="outline">
              Insights & Resources
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
              Blog
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 text-pretty leading-relaxed max-w-3xl mx-auto">
              Expert insights on AI governance, tech equity, disability advocacy, and building inclusive innovation
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Featured Post */}
            <div className="mb-16">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-video md:aspect-auto">
                    <Image
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-gradient-to-r from-violet-600 to-cyan-400 text-white border-0">
                      Featured
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {blogPosts[0].description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-foreground/60 mb-6">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {blogPosts[0].date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {blogPosts[0].readTime}
                      </span>
                    </div>
                    <Button asChild className="w-fit bg-gradient-to-r from-violet-600 to-cyan-400 hover:from-violet-700 hover:to-cyan-500">
                      <Link href={`/blog/${blogPosts[0].slug}`}>
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* All Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative aspect-video">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-foreground/60">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg leading-snug">{post.title}</CardTitle>
                    <CardDescription className="leading-relaxed">{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground/60 flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent hover:from-violet-700 hover:to-cyan-500 flex items-center gap-1"
                      >
                        Read More
                        <ArrowRight className="h-3 w-3 text-violet-600" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Newsletter CTA */}
            <div className="mt-20 p-8 md:p-12 bg-gradient-to-br from-violet-600/10 to-cyan-400/10 rounded-2xl border border-violet-200">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Subscribe to receive the latest insights on AI governance, tech equity, and inclusive innovation delivered to your inbox.
                </p>
                <Button asChild className="bg-gradient-to-r from-violet-600 to-cyan-400 hover:from-violet-700 hover:to-cyan-500">
                  <Link href="/contact">
                    Subscribe to Newsletter
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
