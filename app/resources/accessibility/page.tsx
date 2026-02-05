import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Eye, 
  Ear, 
  Hand, 
  Brain, 
  Monitor, 
  Smartphone, 
  Mail, 
  CheckCircle 
} from "lucide-react"

export const metadata: Metadata = {
  title: "Accessibility Statement | Dr. Dédé Tetsubayashi",
  description: "Our commitment to digital accessibility. Learn about our accessibility features, standards compliance, and how to request accommodations.",
  alternates: {
    canonical: "https://dr-dede.com/resources/accessibility",
  },
}

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-[#7209b7] via-[#6366f1] to-[#06b6d4] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 drop-shadow-lg">
              Accessibility Statement
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 text-balance leading-relaxed">
              Our commitment to creating inclusive digital experiences for everyone
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Commitment Statement */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">Our Commitment</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-foreground/80 leading-relaxed">
                  Dr. Dédé Tetsubayashi and incluu are committed to ensuring digital accessibility for people with 
                  disabilities. We are continually improving the user experience for everyone and applying the 
                  relevant accessibility standards.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  As a disability advocate and accessibility expert, Dr. Dédé practices what she preaches. 
                  This website is designed with accessibility as a foundational principle, not an afterthought.
                </p>
              </CardContent>
            </Card>

            {/* Standards Compliance */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">Standards Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. 
                  These guidelines explain how to make web content more accessible for people with disabilities.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Perceivable content for all users",
                    "Operable interface and navigation",
                    "Understandable information and UI",
                    "Robust content for assistive technologies",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Accessibility Features */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">Accessibility Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Visual Accessibility</h3>
                      <p className="text-sm text-foreground/70">
                        High contrast ratios, scalable text, alt text for images, and no reliance on color alone
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                      <Ear className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Auditory Accessibility</h3>
                      <p className="text-sm text-foreground/70">
                        Captions and transcripts for video content, visual alternatives for audio cues
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                      <Hand className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Motor Accessibility</h3>
                      <p className="text-sm text-foreground/70">
                        Full keyboard navigation, adequate click targets, no time-limited interactions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Cognitive Accessibility</h3>
                      <p className="text-sm text-foreground/70">
                        Clear navigation, consistent layout, plain language, and logical content structure
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                      <Monitor className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Screen Reader Compatible</h3>
                      <p className="text-sm text-foreground/70">
                        Semantic HTML, ARIA labels, proper heading structure, and skip navigation links
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Mobile Accessible</h3>
                      <p className="text-sm text-foreground/70">
                        Responsive design, touch-friendly interface, and mobile screen reader support
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feedback & Contact */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">Feedback & Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  We welcome your feedback on the accessibility of this website. If you encounter any 
                  accessibility barriers or need assistance, please contact us:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90">
                    <Link href="/contact?subject=accessibility">
                      <Mail className="mr-2 h-4 w-4" />
                      Report Accessibility Issue
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="mailto:accessibility@dr-dede.com">
                      accessibility@dr-dede.com
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Accommodations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Request Accommodations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We are committed to providing accommodations for our services, events, and retreats. 
                  If you need specific accommodations, please let us know in advance so we can ensure 
                  your needs are met.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Accommodation requests may include but are not limited to: sign language interpreters, 
                  captioning services, accessible venue requirements, dietary accommodations, 
                  and alternative format materials.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
