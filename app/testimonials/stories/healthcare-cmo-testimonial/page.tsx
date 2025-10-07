import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "@/components/icons"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Healthcare CMO Testimonial | Dr. Dédé Tetsubayashi",
  description:
    "How Dr. Tetsubayashi helped a regional healthcare system improve AI diagnostic accuracy by 95% while saving $100M annually.",
}

export default function HealthcareCMOTestimonialPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#7209b7] via-[#6366f1] to-[#06b6d4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="text-white hover:bg-white/10 mb-8">
              <Link href="/testimonials">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Testimonials
              </Link>
            </Button>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              "Our AI Diagnostic Accuracy Improved by 95% While Saving $100M"
            </h1>
            <p className="text-xl text-white/90 mb-4 drop-shadow">Dr. Amelia Foster, Chief Medical Officer</p>
            <p className="text-lg text-white/80 drop-shadow">Regional Healthcare System (847 Facilities)</p>
          </div>
        </div>
      </section>

      {/* Full Testimonial */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 w-full mb-12 rounded-xl overflow-hidden">
              <Image
                src="/healthcare-professionals-using-accessible-medical-.jpg"
                alt="Healthcare AI Transformation"
                fill
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>The Crisis</h2>
              <p className="text-lg leading-relaxed">
                "As CMO of a regional healthcare system with 847 facilities, I was facing a crisis that kept me up at
                night. Our AI diagnostic systems, which we'd invested millions in, were systematically failing disabled
                patients. Misdiagnoses were costing us $100M annually in extended treatments, malpractice claims, and
                regulatory penalties."
              </p>
              <p className="text-lg leading-relaxed">
                "But the financial cost paled in comparison to the human cost. We were failing the patients who needed
                us most. Our mission is quality healthcare for everyone, and our AI systems were undermining that
                mission every single day."
              </p>

              <h2>Finding the Solution</h2>
              <p className="text-lg leading-relaxed">
                "I'd heard Dr. Tetsubayashi speak at a medical technology conference about AI bias in healthcare. Her
                presentation was different from the usual academic discussions—she provided concrete examples of how AI
                systems fail disabled patients and, more importantly, how to fix them."
              </p>
              <p className="text-lg leading-relaxed">
                "Within a week of our first conversation, she was on-site conducting a comprehensive audit of our AI
                systems. What she found was worse than I'd feared but also gave us a clear path forward."
              </p>

              <h2>The Transformation</h2>
              <p className="text-lg leading-relaxed">
                "Dr. Tetsubayashi's approach was comprehensive and systematic. She didn't just fix our AI algorithms—she
                transformed our entire approach to healthcare technology. We retrained our diagnostic models with
                inclusive datasets, implemented bias detection protocols, and established continuous monitoring
                systems."
              </p>
              <p className="text-lg leading-relaxed">
                "But the technical fixes were only part of the solution. She also educated our entire medical staff—from
                physicians to nurses to technicians—on inclusive healthcare technology. The cultural shift was as
                important as the technical improvements."
              </p>

              <h2>The Results</h2>
              <p className="text-lg leading-relaxed">
                "The results were transformative. Within 12 months, our diagnostic accuracy for all patients improved by
                95%. Misdiagnoses dropped to near zero. Patient satisfaction scores reached all-time highs. And we were
                saving $100M annually in costs we'd previously accepted as inevitable."
              </p>
              <p className="text-lg leading-relaxed">
                "But the most meaningful impact was on patient outcomes. We were finally fulfilling our mission: quality
                healthcare for everyone, regardless of disability status. Our malpractice claims dropped dramatically,
                and our reputation in the community soared."
              </p>

              <h2>The Lasting Impact</h2>
              <p className="text-lg leading-relaxed">
                "Today, we're a model for accessible healthcare AI. Other healthcare systems come to us to learn how we
                did it. Dr. Tetsubayashi helped us establish an AI ethics committee that reviews every new technology
                before deployment. We've prevented dozens of potential issues before they became problems."
              </p>
              <p className="text-lg leading-relaxed">
                "If your healthcare organization is struggling with AI bias, don't wait until you're in crisis mode. Dr.
                Tetsubayashi's expertise can help you build inclusive healthcare AI systems that serve all patients
                equally. The investment pays for itself many times over—in both financial returns and patient outcomes."
              </p>
            </div>

            <Card className="mt-12 p-8 bg-purple-50 border-purple-200">
              <h3 className="text-2xl font-bold mb-6">Key Results</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">$100M</div>
                  <div className="text-sm text-muted-foreground">Annual Cost Savings</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Diagnostic Accuracy Improvement</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">847</div>
                  <div className="text-sm text-muted-foreground">Facilities Transformed</div>
                </div>
              </div>
            </Card>

            <div className="mt-12 flex gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Schedule Your Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/case-studies">View Related Case Study</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
