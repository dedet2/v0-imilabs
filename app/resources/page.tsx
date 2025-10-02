import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, Video, Podcast, Download, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Resources | Dr. Dédé Tetsubayashi",
  description:
    "Access whitepapers, case studies, TEDx talks, and resources on AI governance, tech equity, and disability advocacy.",
  openGraph: {
    title: "Resources | Dr. Dédé Tetsubayashi",
    description: "Whitepapers, case studies, and resources on AI governance and tech equity",
  },
}

export default function ResourcesPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200" variant="outline">
            Knowledge Hub
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Resources</h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Explore insights, frameworks, and thought leadership on AI governance, tech equity, and inclusive innovation
          </p>
        </div>

        {/* Featured Resource */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-purple-600 to-cyan-600 text-white border-0">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0">
                  <div className="h-20 w-20 rounded-lg bg-white/20 flex items-center justify-center">
                    <Video className="h-10 w-10" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <Badge className="mb-3 bg-white/20 text-white border-white/30" variant="outline">
                    Featured
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">TEDx Talk: "You've Been Coded Out"</h2>
                  <p className="opacity-90 mb-4 leading-relaxed">
                    Watch Dr. Dédé's powerful TEDx talk on making AI work for everyone, not just the privileged few
                  </p>
                  <Button asChild variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                    <Link href="/dr-dede#speaking">
                      Watch Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Resource Categories */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Whitepapers */}
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Whitepapers</CardTitle>
                <CardDescription>In-depth research and frameworks</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-sm hover:text-purple-600 transition-colors flex items-start gap-2">
                      <Download className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>AI Governance Framework for Enterprise</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm hover:text-purple-600 transition-colors flex items-start gap-2">
                      <Download className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>Tech Equity Implementation Guide</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm hover:text-purple-600 transition-colors flex items-start gap-2">
                      <Download className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>Algorithmic Bias Detection Methods</span>
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Case Studies */}
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle>Case Studies</CardTitle>
                <CardDescription>Real-world success stories</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-sm hover:text-cyan-600 transition-colors flex items-start gap-2">
                      <Download className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>$50M AI Governance Implementation</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm hover:text-cyan-600 transition-colors flex items-start gap-2">
                      <Download className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>Healthcare AI Equity Transformation</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm hover:text-cyan-600 transition-colors flex items-start gap-2">
                      <Download className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>Global Compliance Framework</span>
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Media */}
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Podcast className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Media & Talks</CardTitle>
                <CardDescription>Videos, podcasts, and interviews</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-sm hover:text-purple-600 transition-colors flex items-start gap-2">
                      <ExternalLink className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>TEDx: You've Been Coded Out</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm hover:text-purple-600 transition-colors flex items-start gap-2">
                      <ExternalLink className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>MIT Technology Review Interview</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm hover:text-purple-600 transition-colors flex items-start gap-2">
                      <ExternalLink className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>WEF Panel Discussion</span>
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-purple-50/50 to-cyan-50/50">
        <Card className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Stay Updated</h2>
            <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">
              Subscribe to receive the latest insights on AI governance, tech equity, and inclusive innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-input bg-background text-sm"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90">Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
