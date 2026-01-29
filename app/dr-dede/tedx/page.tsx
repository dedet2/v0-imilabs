import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Youtube, MessageCircle } from "lucide-react"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Watch Dr. Dédé's TEDx Talk | You've Been Coded Out",
  description:
    "Watch Dr. Dédé Tetsubayashi's powerful TEDx talk on how AI systems are systematically failing compliance standards and creating massive liability risks.",
  openGraph: {
    title: "Watch Dr. Dédé's TEDx Talk | You've Been Coded Out",
    description: "Discover how to build compliant, high-performing AI systems that work for all.",
  },
  alternates: {
    canonical: "https://dr-dede.com/dr-dede/tedx",
  },
}

export default function TEDxPage() {
  return (
    <>
      <StructuredData
        type="VideoObject"
        data={{
          name: "You've Been Coded Out: How To Make AI Work For All",
          description:
            "Dr. Dédé Tetsubayashi reveals how AI systems are systematically failing compliance standards and creating massive liability risks.",
          uploadDate: "2024-01-15",
          thumbnailUrl: "/tedx-stage-with-speaker-dr--dede-in-colorful-outfi.jpg",
        }}
      />

      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 bg-gradient-to-br from-[#7209b7] via-[#6366f1] to-[#06b6d4] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.15),transparent_60%)]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 drop-shadow-lg">
                Dr. Dédé's <span className="text-[#FF2B06]">TED</span>
                <span className="text-white">x</span> Talk
              </h1>
              <p className="text-xl sm:text-2xl text-white/95 text-balance mb-8 italic drop-shadow leading-relaxed">
                "You've Been Coded Out: How To Make AI Work For All"
              </p>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <Card className="overflow-hidden border-2 shadow-2xl">
                <div className="aspect-video bg-black">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/mSQuZG_DHVY"
                    title="Dr. Dédé TEDx Talk: You've Been Coded Out"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </Card>

              {/* Video Description */}
              <div className="mt-8 text-center">
                <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                  In this powerful TEDx talk, Dr. Dédé Tetsubayashi reveals how AI systems are systematically failing
                  compliance standards and creating massive liability risks. As a tech expert and disability advocate
                  who has saved companies $200M+ and unlocked $500M+ in new markets, Dr. Dédé breaks down the four
                  essential principles for building compliant, high-performing AI systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent">Key Takeaways</h2>

              <div className="grid gap-6">
                {[
                  {
                    title: "Lead with Curiosity",
                    description:
                      "Challenge assumptions and eliminate blind spots in AI development to uncover hidden risks and opportunities.",
                  },
                  {
                    title: "Be Accountable",
                    description:
                      "Implement transparent governance frameworks that ensure regulatory compliance and build stakeholder trust.",
                  },
                  {
                    title: "Solve for One, Extend to Many",
                    description:
                      "Accessibility-first design reduces legal risk, expands markets, and creates products that work for everyone.",
                  },
                  {
                    title: "Take Action",
                    description:
                      "Proactive compliance strategies prevent costly violations and position your organization as an industry leader.",
                  },
                ].map((takeaway, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{takeaway.title}</h3>
                        <p className="text-foreground/70 leading-relaxed">{takeaway.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-12 p-8 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl border border-primary/20">
                <p className="text-lg text-center text-foreground/80 italic leading-relaxed">
                  "This isn't just about technology—it's about justice, visibility, and the power of co-creation."
                </p>
                <p className="text-center mt-4 font-semibold">— Dr. Dédé Tetsubayashi</p>
              </div>
            </div>
          </div>
        </section>

        {/* Subscriber Campaign */}
        <section className="py-20 bg-gradient-to-br from-secondary via-secondary/80 to-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent mb-6">
                Help me reach 10,000 Views!
              </h2>
              <p className="text-xl text-foreground mb-4">
                Right now, there's a real-time counter tracking our collective impact. Every subscriber helps amplify this work. Let's hit 10k together and send a message:
                Ethical, socially responsive tech isn't optional, it's essential!
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Subscribe Card */}
                <Card className="p-8 bg-white">
                  <div className="flex flex-col items-center text-center gap-4">
                    <Youtube className="h-12 w-12 text-[#FF0000]" />
                    <div>
                      <h3 className="font-bold text-lg mb-4">SUBSCRIBE to my YouTube!</h3>
                      <p className="text-sm text-foreground/70 mb-4">
                        <strong>SHARE</strong> my TEDx Talk with your networks
                      </p>
                      <p className="text-sm text-foreground/70 mb-4">
                        <strong>COMMENT</strong> to keep the conversation going
                      </p>
                      <p className="text-sm text-foreground/70">
                        <strong>FOLLOW</strong> and join the movement at{" "}
                        <a href="https://www.instagram.com/the_drdede/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                          @the_drdede
                        </a>
                      </p>
                    </div>
                    <Button asChild className="w-full bg-gradient-to-r from-violet-600 to-cyan-400 hover:from-violet-700 hover:to-cyan-500">
                      <a href="https://www.youtube.com/@the_drdede" target="_blank" rel="noopener noreferrer">
                        Subscribe Now
                      </a>
                    </Button>
                  </div>
                </Card>

                {/* Why It Matters Card */}
                <Card className="p-8 bg-white">
                  <div className="flex flex-col items-center text-center gap-4">
                    <MessageCircle className="h-12 w-12 text-primary" />
                    <div>
                      <h3 className="font-bold text-lg mb-4">Why It Matters</h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        When we center the margins, we unlock a greater future for us all. Dr. Dédé's mission is to make
                        ethical, socially responsive tech the NEW standard. This talk is a rallying cry to disrupt the
                        harmful defaults in design in lieu of tech that has been built with intention, accountability,
                        and care.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Photo Card */}
                <Card className="p-0 overflow-hidden bg-white">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zk6mV6KqzzC33gokqE9p9_946b7a779d91408f8f6f35c71482e652-yy7meNnqeSegxOrAr7udiirBcYjLf9.jpg"
                    alt="Dr. Dédé speaking at TEDx"
                    className="w-full h-full object-cover"
                  />
                </Card>
              </div>


            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent">Ready to Transform Your AI Strategy?</h2>
              <p className="text-xl text-foreground/70 mb-8">
                Book Dr. Dédé for your next event or schedule a consultation to discuss how to build compliant,
                high-performing AI systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-violet-600 to-cyan-400 hover:from-violet-700 hover:to-cyan-500">
                  <Link href="/dr-dede/speaking">Book Speaking Engagement</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-violet-600 text-violet-600 hover:bg-violet-50">
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
