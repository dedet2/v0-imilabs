import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import { NewsletterForm } from "@/components/newsletter-form"
import { blogPosts, getAllCategories } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Blog | Dr. Dédé & incluu",
  description: "Insights on AI governance, tech equity, disability advocacy, and inclusive innovation from Dr. Dédé Tetsubayashi.",
  openGraph: {
    title: "Blog | Dr. Dédé & incluu",
    description: "Insights on AI governance, tech equity, disability advocacy, and inclusive innovation.",
  },
  alternates: {
    canonical: "https://dr-dede.com/blog",
  },
}

const categories = getAllCategories()

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
                <NewsletterForm 
                  source="blog" 
                  variant="default" 
                  buttonText="Subscribe"
                  placeholder="Enter your email"
                  className="max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
