import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getPostBySlug, getAllPostSlugs, getAdjacentPosts } from "@/lib/blog-data"
import { ShareButton } from "@/components/share-button"
import { ArticleContent } from "@/components/article-content"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Article Not Found | Dr. Dédé Blog",
    }
  }

  return {
    title: `${post.title} | Dr. Dédé Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
    },
    alternates: {
      canonical: `https://dr-dede.com/blog/${slug}`,
    },
  }
}

export function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  const { prev, next } = getAdjacentPosts(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 sm:py-32 text-white overflow-hidden min-h-[400px] md:min-h-[500px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#9333ea]/85 via-[#a855f7]/85 to-[#22d3ee]/85" />
        </div>
        {/* Radial Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)] z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.15),transparent_60%)] z-[1]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm" variant="outline">
              {post.category}
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-balance mb-6 drop-shadow-lg">
              {post.title}
            </h1>
            <p className="text-xl text-white/95 mb-8 leading-relaxed max-w-3xl drop-shadow">{post.description}</p>
            <div className="flex flex-wrap items-center gap-4 text-white/80">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span>|</span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ArticleContent blocks={post.contentBlocks} />

            {/* Author Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 sm:p-8 mt-12 shadow-lg border border-border/50">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">About Dr. Dédé Tetsubayashi</h3>
                  <p className="text-foreground/80 mb-4">
                    Dr. Dédé is a global advisor on AI governance, disability innovation, and inclusive technology
                    strategy. She helps organizations navigate the intersection of AI regulation, accessibility, and
                    responsible innovation.
                  </p>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-700 hover:to-violet-700"
                  >
                    <Link href="/contact">
                      Work With Dr. Dédé
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Share and CTA */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-foreground/60">Share this article:</span>
                  <ShareButton title={post.title} slug={slug} />
                </div>
                <Button
                  asChild
                  className="bg-gradient-to-r from-violet-600 to-cyan-400 hover:from-violet-700 hover:to-cyan-500"
                >
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>

            {/* Previous / Next Article Navigation */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                {prev ? (
                  <Link
                    href={`/blog/${prev.slug}`}
                    className="group flex flex-col p-4 rounded-lg border hover:border-violet-500 hover:bg-muted/50 transition-colors flex-1"
                  >
                    <span className="text-xs text-foreground/60 flex items-center gap-1 mb-2">
                      <ArrowLeft className="h-3 w-3" />
                      Previous Article
                    </span>
                    <span className="font-medium text-foreground group-hover:text-violet-600 transition-colors line-clamp-2">
                      {prev.title}
                    </span>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}
                {next ? (
                  <Link
                    href={`/blog/${next.slug}`}
                    className="group flex flex-col p-4 rounded-lg border hover:border-violet-500 hover:bg-muted/50 transition-colors text-right flex-1"
                  >
                    <span className="text-xs text-foreground/60 flex items-center justify-end gap-1 mb-2">
                      Next Article
                      <ArrowRight className="h-3 w-3" />
                    </span>
                    <span className="font-medium text-foreground group-hover:text-violet-600 transition-colors line-clamp-2">
                      {next.title}
                    </span>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles CTA */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Want more insights?</h2>
            <p className="text-foreground/70 mb-6">
              Explore more articles on AI governance, tech equity, and inclusive innovation.
            </p>
            <Button asChild variant="outline">
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Articles
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
