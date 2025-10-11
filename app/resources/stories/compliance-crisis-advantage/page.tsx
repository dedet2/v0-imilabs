import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download } from "@/components/icons"
import Image from "next/image"
import { ResourceGateModal } from "@/components/resource-gate-modal"

export const metadata: Metadata = {
  title: "The $50M Wake-Up Call: A Compliance Crisis Becomes a Competitive Advantage",
  description:
    "Facing massive regulatory fines, a financial services company turned a compliance crisis into an opportunity to become an industry leader in ethical AI.",
}

export default function ComplianceCrisisStory() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/resources/stories" className="inline-flex items-center text-white/90 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Stories
            </Link>
            <Badge className="mb-4 bg-white/20 text-white border-white/30" variant="outline">
              Compliance
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              The $50M Wake-Up Call: A Compliance Crisis Becomes a Competitive Advantage
            </h1>
            <div className="flex flex-wrap gap-4 text-white/90">
              <span>February 2024</span>
              <span>•</span>
              <span>10 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 mb-12 rounded-lg overflow-hidden">
              <Image
                src="/executive-team-reviewing-compliance-dashboard.jpg"
                alt="Executive team reviewing compliance"
                fill
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>The Crisis</h2>
              <p>
                When Marcus Rodriguez became Chief Compliance Officer at a mid-sized financial services firm, he walked
                into what he describes as "a ticking time bomb." The company's AI-powered lending platform, which had
                been celebrated for its efficiency and scale, was facing potential regulatory fines exceeding $50
                million.
              </p>
              <p>
                "We had built an incredibly sophisticated system," Marcus recalls. "But we had focused so much on
                innovation that we hadn't adequately considered the regulatory implications. Multiple regulators were
                investigating us for potential bias in our lending algorithms."
              </p>

              <h2>The Investigation</h2>
              <p>
                The problems were serious. The company's AI models showed systematic bias against protected classes.
                Their data governance was inadequate. Their documentation was incomplete. And they had no formal process
                for ongoing compliance monitoring.
              </p>
              <p>
                "The potential fines were just the beginning," Marcus explains. "We were at risk of losing our banking
                licenses, facing class-action lawsuits, and destroying our reputation. Some board members were
                discussing whether we should shut down the AI platform entirely."
              </p>

              <h2>The Decision</h2>
              <p>
                Rather than retreating from AI, the company made a bold decision: they would become the industry leader
                in ethical AI and regulatory compliance. They brought in Dr. Dédé Tetsubayashi to design and implement a
                comprehensive AI governance framework.
              </p>
              <p>
                "Dr. Tetsubayashi showed us that compliance doesn't have to be a burden," Marcus says. "When done right,
                it becomes a competitive advantage. She helped us build a governance framework that not only satisfied
                regulators but also made our AI systems more effective and trustworthy."
              </p>

              <h2>The Transformation</h2>
              <p>The 12-month transformation program included:</p>
              <ul>
                <li>
                  <strong>Comprehensive AI Audit:</strong> Complete review of all AI systems, identifying bias,
                  documentation gaps, and compliance risks
                </li>
                <li>
                  <strong>Governance Framework:</strong> Establishment of AI ethics committee, clear accountability
                  structures, and ongoing monitoring processes
                </li>
                <li>
                  <strong>Technical Remediation:</strong> Rebuilding of AI models with fairness constraints, diverse
                  training data, and explainability features
                </li>
                <li>
                  <strong>Cultural Change:</strong> Training programs for all employees, establishing ethical AI as a
                  core company value
                </li>
              </ul>

              <h2>The Results</h2>
              <p>The transformation exceeded all expectations:</p>
              <ul>
                <li>
                  <strong>Avoided $50M in fines:</strong> Proactive compliance efforts satisfied regulators and avoided
                  all potential penalties
                </li>
                <li>
                  <strong>$200M in new investment:</strong> The company's commitment to ethical AI attracted
                  institutional investors who valued responsible innovation
                </li>
                <li>
                  <strong>Market leadership:</strong> The company became known as the industry leader in ethical AI,
                  winning major enterprise contracts
                </li>
                <li>
                  <strong>Improved performance:</strong> The more ethical AI models actually performed better, with 15%
                  improvement in prediction accuracy
                </li>
              </ul>

              <h2>The Competitive Advantage</h2>
              <p>
                "What started as a crisis became our greatest strength," Marcus reflects. "Enterprise clients now choose
                us specifically because they trust our governance framework. We've turned compliance from a cost center
                into a revenue driver."
              </p>
              <p>
                The company has since published their governance framework as an open standard, positioning themselves
                as thought leaders in the industry. They regularly present at conferences and have been featured in
                major business publications as a case study in responsible AI.
              </p>

              <h2>Key Takeaways</h2>
              <ul>
                <li>Proactive compliance is far less expensive than reactive crisis management</li>
                <li>Ethical AI governance can become a powerful competitive differentiator</li>
                <li>Regulatory compliance and business performance are not mutually exclusive</li>
                <li>Transparency and accountability build trust with customers, investors, and regulators</li>
              </ul>
            </div>

            <Card className="mt-12 p-8 bg-gradient-to-br from-purple-50 to-cyan-50">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Want to Learn More?</h3>
                <p className="text-muted-foreground mb-6">
                  Download our comprehensive guide on building AI governance frameworks that satisfy regulators and
                  drive business value.
                </p>
                <ResourceGateModal
                  resourceTitle="AI Governance Framework Implementation Guide"
                  resourceType="whitepaper"
                  trigger={
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                      <Download className="mr-2 h-5 w-5" />
                      Download Free Guide
                    </Button>
                  }
                />
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
