import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ResourceGateModal } from "@/components/resource-gate-modal"
import { ResourcePreviewModal } from "@/components/resource-preview-modal"
import { SamplePDFPreview } from "@/components/sample-pdf-preview"
import { NewsletterForm } from "@/components/newsletter-form"
import {
  BookOpen,
  FileText,
  Video,
  Podcast,
  Download,
  ExternalLink,
  Calculator,
  TrendingUp,
  Shield,
  Lightbulb,
  Users,
  Award,
  ArrowRight,
} from "@/components/icons"

export const metadata: Metadata = {
  title: "Resources | Dr. Dédé Tetsubayashi",
  description:
    "Access whitepapers, case studies, TEDx talks, tools, and resources on AI governance, tech equity, and disability advocacy.",
  alternates: {
    canonical: "https://dr-dede.com/resources",
  },
  openGraph: {
    title: "Resources | Dr. Dédé Tetsubayashi",
    description: "Comprehensive resources on AI governance, tech equity, and inclusive innovation",
  },
}

export default function ResourcesPage() {
  return (
    <div className="relative">
      <section className="relative py-20 bg-gradient-to-br from-[#7209b7] via-[#6366f1] to-[#06b6d4] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm" variant="outline">
              Knowledge Hub
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white drop-shadow-lg">
              <span className="bg-gradient-to-r from-cyan-300 to-cyan-100 bg-clip-text text-transparent">
                All Resources
              </span>
            </h1>
            <p className="text-xl text-white/90 text-pretty leading-relaxed drop-shadow">
              Explore comprehensive insights, frameworks, tools, and thought leadership on AI governance, tech equity,
              and inclusive innovation. Everything you need to drive meaningful change in your organization.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        {/* Featured Resource */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-500 text-white border-0 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0">
                  <div className="h-24 w-24 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Video className="h-12 w-12" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <Badge className="mb-3 bg-white/20 text-white border-white/30 backdrop-blur-sm" variant="outline">
                    Featured TEDx Talk
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white drop-shadow-lg">
                    "You've Been Coded Out: How To Make AI Work For All"
                  </h2>
                  <p className="text-white/90 mb-6 leading-relaxed text-lg">
                    Watch Dr. Dédé's powerful TEDx talk on managing artificial intelligence systems to serve everyone,
                    not just the privileged few. Learn actionable strategies for inclusive AI development.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      asChild
                      variant="secondary"
                      size="lg"
                      className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg"
                    >
                      <Link href="/dr-dede#speaking">
                        Watch Now
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
                    >
                      <Link href="https://www.youtube.com/@the_drdede" target="_blank">
                        Subscribe on YouTube
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Access Tools */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Access Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">ROI Calculator</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Calculate the potential return on investment for AI governance and tech equity initiatives
                </p>
                <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:opacity-90">
                  <Link href="https://pmukyznd.manus.space/" target="_blank">
                    Launch Calculator
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-700 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Compliance Checker</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Assess your organization's AI governance compliance readiness
                </p>
                <Button asChild className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 hover:opacity-90">
                  <Link href="#compliance">
                    Start Assessment
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-cyan-50 border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Free Consultation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Schedule a complimentary discovery call to discuss your needs
                </p>
                <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90">
                  <Link href="/contact">Book Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Resource Categories - Expanded */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Resource Library</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Whitepapers & Research */}
            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-4 shadow-lg">
                  <FileText className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">Whitepapers & Research</CardTitle>
                <CardDescription>In-depth research, frameworks, and methodologies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <ResourcePreviewModal
                      title="AI Governance Framework for Enterprise"
                      category="Whitepaper"
                      badge="Research Whitepaper"
                      badgeColor="purple"
                      description="Expert insights from Dr. Dédé Tetsubayashi - AI Governance & Tech Equity Pioneer"
                      pageCount="28-page comprehensive guide"
                      fileSize="2.8 MB"
                      executiveSummary="Comprehensive implementation guide for enterprise AI governance with proven methodologies for regulatory compliance, risk mitigation, and sustainable innovation."
                      keyInsights={[
                        "Governance frameworks that reduce compliance costs by 40%",
                        "Risk assessment protocols preventing regulatory violations",
                        "Implementation roadmaps with measurable ROI within 18 months",
                      ]}
                      implementationSteps={[
                        { title: "Assessment", description: "Current state analysis" },
                        { title: "Framework Design", description: "Custom governance structure" },
                        { title: "Deployment", description: "Phased implementation" },
                      ]}
                      challenge="Organizations struggle to balance AI innovation with regulatory compliance, facing potential fines and reputational risks."
                      solution="Comprehensive AI governance framework with automated compliance monitoring and continuous risk assessment."
                      result="$50M+ in regulatory penalties avoided, 85% faster compliance review cycles, 100% audit success rate."
                      tags={["AI Governance", "Compliance", "Enterprise"]}
                      metrics={[
                        { value: "$50M", label: "Penalties Avoided", sublabel: "Regulatory compliance" },
                        { value: "85%", label: "Faster Reviews", sublabel: "Compliance cycles" },
                        { value: "100%", label: "Audit Success", sublabel: "All jurisdictions" },
                      ]}
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">AI Governance Framework for Enterprise</div>
                          <div className="text-xs text-muted-foreground">Comprehensive implementation guide</div>
                        </div>
                      </button>
                    </ResourcePreviewModal>
                  </li>
                  <li>
                    <ResourcePreviewModal
                      title="Tech Equity Implementation Guide"
                      category="Whitepaper"
                      badge="Research Whitepaper"
                      badgeColor="purple"
                      description="Expert insights from Dr. Dédé Tetsubayashi - AI Governance & Tech Equity Pioneer"
                      pageCount="22-page comprehensive guide"
                      fileSize="2.1 MB"
                      executiveSummary="Step-by-step methodology for implementing tech equity across your organization, fostering inclusivity and social responsibility."
                      keyInsights={[
                        "Strategies to increase representation of underrepresented groups by 30%",
                        "Frameworks for equitable resource allocation",
                        "Roadmaps for building inclusive technology products",
                      ]}
                      implementationSteps={[
                        { title: "Assessment", description: "Current diversity metrics" },
                        { title: "Strategy Design", description: "Tailored equity plan" },
                        { title: "Deployment", description: "Rollout and monitoring" },
                      ]}
                      challenge="Organizations face challenges in creating genuinely equitable technology environments, often leading to missed talent and market opportunities."
                      solution="Provided a structured implementation guide focusing on data-driven strategies, inclusive hiring practices, and accessible technology development."
                      result="30% increase in underrepresented talent, enhanced employee satisfaction, and broader market reach for technology products."
                      tags={["Tech Equity", "Inclusion", "HR Strategy"]}
                      metrics={[
                        { value: "30%", label: "Talent Increase", sublabel: "Underrepresented groups" },
                        { value: "15%", label: "Market Growth", sublabel: "New segments" },
                        { value: "90%", label: "Employee Satisfaction", sublabel: "Inclusion initiatives" },
                      ]}
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">Tech Equity Implementation Guide</div>
                          <div className="text-xs text-muted-foreground">Step-by-step methodology</div>
                        </div>
                      </button>
                    </ResourcePreviewModal>
                  </li>
                  <li>
                    <ResourcePreviewModal
                      title="Algorithmic Bias Detection Methods"
                      category="Whitepaper"
                      badge="Research Whitepaper"
                      badgeColor="purple"
                      description="Expert insights from Dr. Dédé Tetsubayashi - AI Governance & Tech Equity Pioneer"
                      pageCount="35-page comprehensive guide"
                      fileSize="3.1 MB"
                      executiveSummary="Technical analysis framework for detecting and mitigating algorithmic bias in AI systems, ensuring fairness and ethical deployment."
                      keyInsights={[
                        "Proven statistical methods for bias detection",
                        "Techniques to reduce bias in training data",
                        "Strategies for ongoing monitoring of AI fairness",
                      ]}
                      implementationSteps={[
                        { title: "Data Analysis", description: "Identify bias sources" },
                        { title: "Model Evaluation", description: "Measure fairness metrics" },
                        { title: "Mitigation Strategies", description: "Implement corrective actions" },
                      ]}
                      challenge="AI models can inadvertently perpetuate or amplify societal biases, leading to unfair outcomes and erosion of trust."
                      solution="Detailed technical guide outlining advanced methods for identifying and quantifying algorithmic bias, with practical steps for mitigation."
                      result="75% reduction in identified bias metrics, improved model robustness, and enhanced algorithmic fairness across diverse user groups."
                      tags={["Algorithmic Bias", "AI Ethics", "Machine Learning"]}
                      metrics={[
                        { value: "75%", label: "Bias Reduction", sublabel: "Identified metrics" },
                        { value: "92%", label: "Fairness Score", sublabel: "Cross-demographic" },
                        { value: "10x", label: "Efficiency", sublabel: "Detection process" },
                      ]}
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">Algorithmic Bias Detection Methods</div>
                          <div className="text-xs text-muted-foreground">Technical analysis framework</div>
                        </div>
                      </button>
                    </ResourcePreviewModal>
                  </li>
                  <li>
                    <ResourcePreviewModal
                      title="Disability-Inclusive AI Design Principles"
                      category="Whitepaper"
                      badge="Research Whitepaper"
                      badgeColor="purple"
                      description="Expert insights from Dr. Dédé Tetsubayashi - AI Governance & Tech Equity Pioneer"
                      pageCount="26-page comprehensive guide"
                      fileSize="2.5 MB"
                      executiveSummary="Best practices and standards for designing AI systems that are accessible and beneficial for individuals with disabilities."
                      keyInsights={[
                        "Guidelines for designing inclusive user interfaces",
                        "Methods for incorporating accessibility testing",
                        "Strategies for building AI that empowers users with disabilities",
                      ]}
                      implementationSteps={[
                        { title: "User Research", description: "Involve disabled users" },
                        { title: "Design Principles", description: "Apply accessibility standards" },
                        { title: "Testing & Iteration", description: "Continuous improvement" },
                      ]}
                      challenge="AI technologies often fail to consider the needs of people with disabilities, creating barriers to access and participation."
                      solution="A comprehensive guide outlining design principles and standards for creating disability-inclusive AI, emphasizing user-centricity and ethical considerations."
                      result="Significant improvement in user experience for individuals with disabilities, expanded market reach, and enhanced brand reputation for ethical design."
                      tags={["Disability Inclusion", "AI Design", "Accessibility"]}
                      metrics={[
                        { value: "40%", label: "UX Improvement", sublabel: "Users with disabilities" },
                        { value: "15%", label: "Market Expansion", sublabel: "New user segments" },
                        { value: "95%", label: "Compliance", sublabel: "Accessibility standards" },
                      ]}
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">Disability-Inclusive AI Design</div>
                          <div className="text-xs text-muted-foreground">Best practices & standards</div>
                        </div>
                      </button>
                    </ResourcePreviewModal>
                  </li>
                  <li>
                    <ResourcePreviewModal
                      title="Global AI Compliance Landscape 2025"
                      category="Whitepaper"
                      badge="Research Whitepaper"
                      badgeColor="purple"
                      description="Expert insights from Dr. Dédé Tetsubayashi - AI Governance & Tech Equity Pioneer"
                      pageCount="40-page comprehensive guide"
                      fileSize="3.5 MB"
                      executiveSummary="An in-depth regulatory overview of the global AI compliance landscape, providing insights for international organizations."
                      keyInsights={[
                        "Comparative analysis of major AI regulations worldwide",
                        "Emerging trends in AI governance and policy",
                        "Strategic recommendations for global compliance",
                      ]}
                      implementationSteps={[
                        { title: "Regulatory Review", description: "Identify relevant laws" },
                        { title: "Gap Analysis", description: "Assess current compliance" },
                        { title: "Strategic Planning", description: "Develop global strategy" },
                      ]}
                      challenge="Navigating the complex and rapidly evolving global landscape of AI regulations poses significant challenges for multinational corporations."
                      solution="A comprehensive report analyzing key AI regulations across major jurisdictions, offering strategic guidance for international compliance and risk management."
                      result="Streamlined global compliance efforts, reduced legal risks, and enhanced preparedness for future regulatory changes."
                      tags={["AI Compliance", "Global Regulation", "Risk Management"]}
                      metrics={[
                        { value: "50+", label: "Jurisdictions", sublabel: "Analyzed regulations" },
                        { value: "2x", label: "Efficiency", sublabel: "Compliance process" },
                        { value: "100%", label: "Preparedness", sublabel: "Future regulations" },
                      ]}
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">Global AI Compliance Landscape 2025</div>
                          <div className="text-xs text-muted-foreground">Regulatory overview</div>
                        </div>
                      </button>
                    </ResourcePreviewModal>
                  </li>
                </ul>
                <ResourceGateModal
                  resourceTitle="All Whitepapers & Research"
                  resourceType="whitepaper"
                  resourceDescription="Access our complete library of whitepapers and research documents"
                >
                  <Button variant="outline" className="w-full mt-6 bg-transparent">
                    View All Whitepapers
                  </Button>
                </ResourceGateModal>
              </CardContent>
            </Card>

            {/* Case Studies */}
            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-700 flex items-center justify-center mb-4 shadow-lg">
                  <BookOpen className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">Case Studies</CardTitle>
                <CardDescription>Real-world success stories and measurable outcomes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <ResourcePreviewModal
                      title="$50M AI Governance Framework Implementation"
                      category="Case Study"
                      badge="AI Governance"
                      badgeColor="purple"
                      description="Fortune 500 Healthcare Company"
                      pageCount="18-page case study"
                      fileSize="2.2 MB"
                      executiveSummary="Comprehensive governance framework for AI deployment across 12 countries, enabling $50M+ in product launches with zero compliance violations."
                      keyInsights={[
                        "Automated compliance monitoring across 12 jurisdictions",
                        "Cross-functional governance structure with clear accountability",
                        "Risk assessment protocols preventing regulatory violations",
                        "85% faster time-to-market for AI-powered products",
                      ]}
                      implementationSteps={[
                        { title: "Assessment", description: "Current state analysis (4 weeks)" },
                        { title: "Framework Design", description: "Custom governance structure (6 weeks)" },
                        { title: "Deployment", description: "Phased implementation (12 weeks)" },
                      ]}
                      challenge="Fortune 500 healthcare company needed comprehensive governance framework for AI deployment across 12 countries while maintaining rapid innovation pace."
                      solution="Developed automated compliance monitoring, risk assessment protocols, and cross-functional governance structure with clear accountability and decision-making processes."
                      result="$50M+ in product launches enabled, 85% faster time-to-market, zero compliance violations across all jurisdictions, and 40% reduction in legal review cycles."
                      tags={["AI Governance", "Healthcare", "Global Compliance"]}
                      metrics={[
                        { value: "$50M+", label: "Product Launches", sublabel: "Enabled revenue" },
                        { value: "85%", label: "Faster TTM", sublabel: "Time-to-market" },
                        { value: "0", label: "Violations", sublabel: "Compliance record" },
                      ]}
                    >
                      <button className="group text-sm hover:text-cyan-600 transition-colors flex items-start gap-2 text-left w-full">
                        <TrendingUp className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-cyan-600" />
                        <div>
                          <div className="font-medium">$50M AI Governance Implementation</div>
                          <div className="text-xs text-muted-foreground">Fortune 500 Healthcare</div>
                        </div>
                      </button>
                    </ResourcePreviewModal>
                  </li>
                  <li>
                    <ResourcePreviewModal
                      title="$25M Digital Equity in Healthcare AI"
                      category="Case Study"
                      badge="Digital Equity"
                      badgeColor="cyan"
                      description="Regional Health System"
                      pageCount="16-page case study"
                      fileSize="1.9 MB"
                      executiveSummary="Bias detection framework and inclusive algorithm design resulting in 95% improvement in diagnostic accuracy across all demographics."
                      keyInsights={[
                        "Comprehensive bias detection across AI diagnostic tools",
                        "Diverse data sourcing strategies for representative datasets",
                        "Inclusive algorithm design principles and testing protocols",
                        "$25M cost savings from reduced misdiagnoses",
                      ]}
                      implementationSteps={[
                        { title: "Audit", description: "Bias assessment (3 weeks)" },
                        { title: "Data Strategy", description: "Diverse sourcing (6 weeks)" },
                        { title: "Algorithm Redesign", description: "Inclusive design (8 weeks)" },
                      ]}
                      challenge="AI diagnostic tools showing significant bias against minority populations, leading to misdiagnoses and potential liability risks."
                      solution="Implemented comprehensive bias detection framework, diverse data sourcing strategies, and inclusive algorithm design principles with continuous monitoring."
                      result="95% improvement in diagnostic accuracy across all demographics, $25M cost savings from reduced misdiagnoses, and enhanced patient trust and satisfaction."
                      tags={["Digital Equity", "Healthcare AI", "Bias Detection"]}
                      metrics={[
                        { value: "95%", label: "Accuracy Gain", sublabel: "All demographics" },
                        { value: "$25M", label: "Cost Savings", sublabel: "Reduced errors" },
                        { value: "100%", label: "Patient Trust", sublabel: "Satisfaction score" },
                      ]}
                    >
                      <button className="group text-sm hover:text-cyan-600 transition-colors flex items-start gap-2 text-left w-full">
                        <TrendingUp className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-cyan-600" />
                        <div>
                          <div className="font-medium">$25M Digital Equity in Healthcare AI</div>
                          <div className="text-xs text-muted-foreground">Regional health system</div>
                        </div>
                      </button>
                    </ResourcePreviewModal>
                  </li>
                  <li>
                    <ResourcePreviewModal
                      title="$75M FinTech Regulatory Compliance Transformation"
                      category="Case Study"
                      badge="Financial Services"
                      badgeColor="purple"
                      description="Global Financial Services Platform"
                      pageCount="20-page case study"
                      fileSize="2.4 MB"
                      executiveSummary="Comprehensive compliance framework enabling $75M Series B funding and 40% expansion in underserved markets with 100% regulatory compliance."
                      keyInsights={[
                        "Multi-jurisdiction compliance framework for financial services",
                        "Automated monitoring systems for real-time compliance tracking",
                        "Inclusive credit scoring models expanding market access",
                        "100% regulatory compliance across 8 states",
                      ]}
                      implementationSteps={[
                        { title: "Regulatory Mapping", description: "Jurisdiction analysis (4 weeks)" },
                        { title: "Framework Development", description: "Compliance structure (8 weeks)" },
                        { title: "System Integration", description: "Automated monitoring (10 weeks)" },
                      ]}
                      challenge="Navigate complex multi-jurisdiction financial regulations while scaling inclusive lending platform and preparing for Series B funding."
                      solution="Developed comprehensive compliance framework with automated monitoring systems and inclusive credit scoring models that meet regulatory requirements while expanding market access."
                      result="$75M Series B funding secured, 40% expansion in underserved markets, 100% regulatory compliance across 8 states, and zero compliance violations."
                      tags={["FinTech", "Regulatory Compliance", "Financial Inclusion"]}
                      metrics={[
                        { value: "$75M", label: "Funding Secured", sublabel: "Series B" },
                        { value: "40%", label: "Market Growth", sublabel: "Underserved segments" },
                        { value: "100%", label: "Compliance", sublabel: "8 states" },
                      ]}
                    >
                      <button className="group text-sm hover:text-cyan-600 transition-colors flex items-start gap-2 text-left w-full">
                        <TrendingUp className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-cyan-600" />
                        <div>
                          <div className="font-medium">$75M FinTech Compliance Framework</div>
                          <div className="text-xs text-muted-foreground">Global financial services</div>
                        </div>
                      </button>
                    </ResourcePreviewModal>
                  </li>
                  <li>
                    <ResourcePreviewModal
                      title="$30M EdTech Accessibility & Compliance Initiative"
                      category="Case Study"
                      badge="Education Technology"
                      badgeColor="cyan"
                      description="Leading Education Platform"
                      pageCount="17-page case study"
                      fileSize="2.0 MB"
                      executiveSummary="Complete accessibility audit and inclusive design overhaul securing $30M in new contracts and 200% increase in users with disabilities."
                      keyInsights={[
                        "Comprehensive WCAG 2.1 AA compliance audit and remediation",
                        "Inclusive design overhaul with user-centered testing",
                        "Staff training program for accessibility best practices",
                        "Industry accessibility award recognition",
                      ]}
                      implementationSteps={[
                        { title: "Accessibility Audit", description: "WCAG assessment (3 weeks)" },
                        { title: "Design Overhaul", description: "Inclusive redesign (10 weeks)" },
                        { title: "Training Program", description: "Staff development (6 weeks)" },
                      ]}
                      challenge="Learning platform failing WCAG 2.1 AA standards, risking $12M in institutional contracts and facing potential accessibility lawsuits."
                      solution="Conducted complete accessibility audit, implemented inclusive design overhaul with user-centered testing, and developed comprehensive staff training program."
                      result="$30M in new contracts secured, 200% increase in users with disabilities, industry accessibility award, and zero accessibility complaints."
                      tags={["EdTech", "Accessibility", "WCAG Compliance"]}
                      metrics={[
                        { value: "$30M", label: "New Contracts", sublabel: "Secured revenue" },
                        { value: "200%", label: "User Growth", sublabel: "With disabilities" },
                        { value: "100%", label: "WCAG AA", sublabel: "Compliance" },
                      ]}
                    >
                      <button className="group text-sm hover:text-cyan-600 transition-colors flex items-start gap-2 text-left w-full">
                        <TrendingUp className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-cyan-600" />
                        <div>
                          <div className="font-medium">$30M EdTech Accessibility Transformation</div>
                          <div className="text-xs text-muted-foreground">Leading education platform</div>
                        </div>
                      </button>
                    </ResourcePreviewModal>
                  </li>
                  <li>
                    <ResourcePreviewModal
                      title="$40M AI-Powered Personalization Ethics Framework"
                      category="Case Study"
                      badge="Retail & E-Commerce"
                      badgeColor="purple"
                      description="E-Commerce Leader"
                      pageCount="19-page case study"
                      fileSize="2.3 MB"
                      executiveSummary="Ethical AI framework and fairness testing protocols resulting in $40M revenue increase and 60% improvement in cross-demographic engagement."
                      keyInsights={[
                        "Comprehensive ethical AI framework for personalization",
                        "Fairness testing protocols for recommendation algorithms",
                        "Diverse data strategies for representative customer insights",
                        "Zero discrimination complaints post-implementation",
                      ]}
                      implementationSteps={[
                        { title: "Ethics Framework", description: "Policy development (4 weeks)" },
                        { title: "Algorithm Testing", description: "Fairness protocols (6 weeks)" },
                        { title: "Data Strategy", description: "Diverse sourcing (8 weeks)" },
                      ]}
                      challenge="Recommendation algorithms perpetuating demographic biases, limiting market reach and creating potential discrimination risks."
                      solution="Developed comprehensive ethical AI framework with fairness testing protocols and diverse data strategies to ensure equitable personalization across all customer segments."
                      result="$40M revenue increase from expanded customer base, 60% improvement in cross-demographic engagement, zero discrimination complaints, and enhanced brand reputation."
                      tags={["Retail AI", "Algorithmic Fairness", "Personalization"]}
                      metrics={[
                        { value: "$40M", label: "Revenue Growth", sublabel: "New customers" },
                        { value: "60%", label: "Engagement", sublabel: "Cross-demographic" },
                        { value: "0", label: "Complaints", sublabel: "Discrimination" },
                      ]}
                    >
                      <button className="group text-sm hover:text-cyan-600 transition-colors flex items-start gap-2 text-left w-full">
                        <TrendingUp className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-cyan-600" />
                        <div>
                          <div className="font-medium">$40M Retail AI Personalization</div>
                          <div className="text-xs text-muted-foreground">E-commerce leader</div>
                        </div>
                      </button>
                    </ResourcePreviewModal>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full mt-6 bg-transparent">
                  <Link href="/case-studies">View All Case Studies</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Media & Talks */}
            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center mb-4 shadow-lg">
                  <Podcast className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">Media & Talks</CardTitle>
                <CardDescription>Videos, podcasts, interviews, and presentations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="/dr-dede#speaking"
                      className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2"
                    >
                      <Video className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                      <div>
                        <div className="font-medium">TEDx: You've Been Coded Out</div>
                        <div className="text-xs text-muted-foreground">Making AI work for everyone</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact?inquiry=media&topic=mit-interview"
                      className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2"
                    >
                      <ExternalLink className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                      <div>
                        <div className="font-medium">MIT Technology Review Interview</div>
                        <div className="text-xs text-muted-foreground">The future of inclusive AI</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact?inquiry=media&topic=wef-panel"
                      className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2"
                    >
                      <ExternalLink className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                      <div>
                        <div className="font-medium">World Economic Forum Panel</div>
                        <div className="text-xs text-muted-foreground">AI governance & ethics</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact?inquiry=media&topic=podcast"
                      className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2"
                    >
                      <Podcast className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                      <div>
                        <div className="font-medium">Tech Equity Podcast Series</div>
                        <div className="text-xs text-muted-foreground">8-part deep dive</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact?inquiry=media&topic=sxsw-keynote"
                      className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2"
                    >
                      <Video className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                      <div>
                        <div className="font-medium">Keynote: AI & Disability Rights</div>
                        <div className="text-xs text-muted-foreground">SXSW 2025</div>
                      </div>
                    </a>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full mt-6 bg-transparent">
                  <Link href="#media">View All Media</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Templates & Tools */}
            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-4 shadow-lg">
                  <Lightbulb className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">Templates & Tools</CardTitle>
                <CardDescription>Ready-to-use frameworks and assessment tools</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <ResourcePreviewModal
                      title="AI Ethics Assessment Template"
                      category="Template"
                      badge="Implementation Template"
                      badgeColor="purple"
                      description="Comprehensive checklist for evaluating AI systems against ethical principles and regulatory requirements"
                      pageCount="15-page template"
                      fileSize="1.2 MB"
                      executiveSummary="A comprehensive framework for assessing AI systems against ethical principles, regulatory requirements, and organizational values. This template provides structured evaluation criteria across key dimensions of AI ethics."
                      keyInsights={[
                        "Systematic evaluation framework covering 12 ethical dimensions",
                        "Regulatory compliance mapping for GDPR, AI Act, and US frameworks",
                        "Risk scoring methodology with mitigation strategies",
                        "Stakeholder engagement protocols and documentation requirements",
                      ]}
                      implementationSteps={[
                        { title: "Baseline Assessment", description: "Gap analysis (2 weeks)" },
                        { title: "Stakeholder Consultation", description: "Risk evaluation (3 weeks)" },
                        { title: "Mitigation Planning", description: "Policy development (4 weeks)" },
                      ]}
                      challenge="Organizations struggle to systematically evaluate AI systems against evolving ethical standards and regulatory requirements, leading to compliance gaps and reputational risks."
                      solution="This template provides a structured, repeatable assessment framework that maps to major regulatory requirements while incorporating stakeholder perspectives and organizational values."
                      result="Organizations using this template reduce ethics assessment time by 60% while improving coverage and consistency across AI initiatives."
                      tags={["Ethics", "Compliance", "Risk Management", "Assessment"]}
                      metrics={[
                        { value: "60%", label: "Faster Assessment", sublabel: "Time reduction" },
                        { value: "12", label: "Dimensions", sublabel: "Coverage areas" },
                        { value: "95%", label: "Compliance Rate", sublabel: "Regulatory alignment" },
                      ]}
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">AI Ethics Assessment Template</div>
                          <div className="text-xs text-muted-foreground">Comprehensive checklist</div>
                        </div>
                      </button>
                    </ResourcePreviewModal>
                  </li>
                  <li>
                    <ResourcePreviewModal
                      title="Bias Detection Toolkit"
                      category="Tool"
                      badge="Technical Tool"
                      badgeColor="cyan"
                      description="Technical implementation toolkit for identifying and mitigating bias in AI systems"
                      pageCount="22-page toolkit"
                      fileSize="2.8 MB"
                      executiveSummary="A comprehensive technical toolkit for detecting, measuring, and mitigating bias in AI systems. Includes code samples, testing frameworks, and remediation strategies for common bias patterns."
                      keyInsights={[
                        "Statistical methods for detecting 8 types of algorithmic bias",
                        "Pre-built testing frameworks for Python and R",
                        "Fairness metrics library with implementation guides",
                        "Remediation strategies with code examples and case studies",
                      ]}
                      implementationSteps={[
                        { title: "Baseline Assessment", description: "Data analysis (2 weeks)" },
                        { title: "Framework Integration", description: "Testing setup (3 weeks)" },
                        { title: "Bias Mitigation", description: "Implementation (4 weeks)" },
                      ]}
                      challenge="Technical teams lack standardized tools and methodologies for detecting and addressing bias in AI systems, leading to fairness issues and regulatory concerns."
                      solution="This toolkit provides production-ready code, testing frameworks, and remediation strategies that integrate into existing ML pipelines."
                      result="Teams using this toolkit reduce bias detection time by 70% and improve fairness metrics by an average of 45%."
                      tags={["Bias Detection", "Fairness", "ML Engineering", "Testing"]}
                      metrics={[
                        { value: "70%", label: "Faster Detection", sublabel: "Time savings" },
                        { value: "45%", label: "Fairness Gain", sublabel: "Average improvement" },
                        { value: "8", label: "Bias Types", sublabel: "Coverage" },
                      ]}
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">Bias Detection Toolkit</div>
                          <div className="text-xs text-muted-foreground">Technical implementation</div>
                        </div>
                      </button>
                    </ResourcePreviewModal>
                  </li>
                  <li>
                    <ResourcePreviewModal
                      title="Compliance Roadmap Template"
                      category="Template"
                      badge="Strategic Planning"
                      badgeColor="purple"
                      description="90-day action plan for achieving AI compliance across major regulatory frameworks"
                      pageCount="18-page roadmap"
                      fileSize="1.5 MB"
                      executiveSummary="A structured 90-day roadmap for achieving compliance with major AI regulations including EU AI Act, GDPR, and emerging US frameworks. Includes milestone tracking, resource allocation, and risk management."
                      keyInsights={[
                        "Phased approach balancing quick wins with long-term compliance",
                        "Resource allocation framework for compliance initiatives",
                        "Risk prioritization matrix for regulatory requirements",
                        "Stakeholder communication templates and governance structures",
                      ]}
                      implementationSteps={[
                        { title: "Days 1-30", description: "Assessment & quick wins" },
                        { title: "Days 31-60", description: "Policy & process implementation" },
                        { title: "Days 61-90", description: "Testing & documentation" },
                      ]}
                      challenge="Organizations face overwhelming complexity when navigating multiple AI regulations, leading to delayed compliance and increased risk exposure."
                      solution="This roadmap breaks down compliance into manageable 90-day sprints with clear milestones, resource requirements, and success criteria."
                      result="Organizations following this roadmap achieve baseline compliance 50% faster while reducing compliance costs by 35%."
                      tags={["Compliance", "Regulatory", "Planning", "Governance"]}
                      metrics={[
                        { value: "50%", label: "Faster Compliance", sublabel: "Time to baseline" },
                        { value: "35%", label: "Cost Reduction", sublabel: "Compliance spending" },
                        { value: "92%", label: "Success Rate", sublabel: "Implementation" },
                      ]}
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">Compliance Roadmap Template</div>
                          <div className="text-xs text-muted-foreground">90-day action plan</div>
                        </div>
                      </button>
                    </ResourcePreviewModal>
                  </li>
                  <li>
                    <ResourcePreviewModal
                      title="Stakeholder Engagement Guide"
                      category="Guide"
                      badge="Communication Framework"
                      badgeColor="cyan"
                      description="Comprehensive framework for engaging stakeholders in AI governance initiatives"
                      pageCount="16-page guide"
                      fileSize="1.3 MB"
                      executiveSummary="A practical guide for engaging diverse stakeholders in AI governance, from technical teams to executive leadership to external partners. Includes communication templates, meeting frameworks, and consensus-building strategies."
                      keyInsights={[
                        "Stakeholder mapping and analysis framework",
                        "Communication templates for 12 common scenarios",
                        "Meeting facilitation guides and decision-making frameworks",
                        "Conflict resolution strategies and consensus-building techniques",
                      ]}
                      implementationSteps={[
                        { title: "Stakeholder Mapping", description: "Identification (1 week)" },
                        { title: "Communication Strategy", description: "Development (2 weeks)" },
                        { title: "Initial Engagement", description: "Feedback collection (3 weeks)" },
                      ]}
                      challenge="AI governance initiatives often fail due to poor stakeholder engagement, leading to resistance, misalignment, and implementation delays."
                      solution="This guide provides structured approaches for identifying, engaging, and aligning diverse stakeholders around AI governance objectives."
                      result="Organizations using this framework see 65% improvement in stakeholder buy-in and 40% reduction in implementation delays."
                      tags={["Stakeholder Management", "Communication", "Change Management", "Governance"]}
                      metrics={[
                        { value: "65%", label: "Buy-in Improvement", sublabel: "Stakeholder engagement" },
                        { value: "40%", label: "Delay Reduction", sublabel: "Implementation time" },
                        { value: "4.7/5", label: "Satisfaction", sublabel: "User rating" },
                      ]}
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">Stakeholder Engagement Guide</div>
                          <div className="text-xs text-muted-foreground">Communication framework</div>
                        </div>
                      </button>
                    </ResourcePreviewModal>
                  </li>
                  <li>
                    <a
                      href="https://pmukyznd.manus.space/"
                      target="_blank"
                      className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2"
                      rel="noreferrer"
                    >
                      <Calculator className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                      <div>
                        <div className="font-medium">ROI Calculator</div>
                        <div className="text-xs text-muted-foreground">Interactive tool</div>
                      </div>
                    </a>
                  </li>
                </ul>
                <ResourceGateModal
                  resourceTitle="All Templates & Tools"
                  resourceType="template"
                  resourceDescription="Access our complete library of templates and tools"
                >
                  <Button variant="outline" className="w-full mt-6 bg-transparent">
                    View All Tools
                  </Button>
                </ResourceGateModal>
              </CardContent>
            </Card>

            {/* Training & Workshops */}
            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-700 flex items-center justify-center mb-4 shadow-lg">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">Training & Workshops</CardTitle>
                <CardDescription>Educational programs and certification courses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="/contact?inquiry=training&program=ai-governance-certification"
                      className="group text-sm hover:text-cyan-600 transition-colors flex items-start gap-2"
                    >
                      <Award className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-cyan-600" />
                      <div>
                        <div className="font-medium">AI Governance Certification</div>
                        <div className="text-xs text-muted-foreground">8-week program</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact?inquiry=training&program=executive-workshop"
                      className="group text-sm hover:text-cyan-600 transition-colors flex items-start gap-2"
                    >
                      <Users className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-cyan-600" />
                      <div>
                        <div className="font-medium">Executive Workshop: Tech Equity</div>
                        <div className="text-xs text-muted-foreground">2-day intensive</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact?inquiry=training&program=inclusive-design"
                      className="group text-sm hover:text-cyan-600 transition-colors flex items-start gap-2"
                    >
                      <Users className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-cyan-600" />
                      <div>
                        <div className="font-medium">Inclusive Design Masterclass</div>
                        <div className="text-xs text-muted-foreground">4-week course</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact?inquiry=training&program=webinar-series"
                      className="group text-sm hover:text-cyan-600 transition-colors flex items-start gap-2"
                    >
                      <Video className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-cyan-600" />
                      <div>
                        <div className="font-medium">On-Demand Webinar Series</div>
                        <div className="text-xs text-muted-foreground">12 sessions available</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/dr-dede/speaking"
                      className="group text-sm hover:text-cyan-600 transition-colors flex items-start gap-2"
                    >
                      <Users className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-cyan-600" />
                      <div>
                        <div className="font-medium">Custom Corporate Training</div>
                        <div className="text-xs text-muted-foreground">Tailored to your needs</div>
                      </div>
                    </a>
                  </li>
                </ul>
                <ResourceGateModal
                  resourceTitle="All Training & Workshops"
                  resourceType="training"
                  resourceDescription="Explore all our training and workshop programs"
                >
                  <Button variant="outline" className="w-full mt-6 bg-transparent">
                    View All Programs
                  </Button>
                </ResourceGateModal>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center mb-4 shadow-lg">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">Industry Reports</CardTitle>
                <CardDescription>Market analysis and trend forecasts</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <ResourcePreviewModal
                      title="State of AI Governance 2025"
                      category="Report"
                      badge="Annual Report"
                      badgeColor="purple"
                      description="Comprehensive analysis of AI governance trends, challenges, and opportunities across industries"
                      pageCount="45-page report"
                      fileSize="4.2 MB"
                      executiveSummary="Our annual industry report analyzing AI governance maturity across 500+ organizations. Includes benchmark data, trend analysis, and strategic recommendations for 2025 and beyond."
                      keyInsights={[
                        "Only 23% of organizations have mature AI governance frameworks",
                        "Compliance costs averaging $2.5M annually for large enterprises",
                        "85% of organizations cite talent gaps as primary governance challenge",
                        "ROI on governance investments averaging 340% over 3 years",
                      ]}
                      implementationSteps={[
                        { title: "Benchmark", description: "Compare against industry standards" },
                        { title: "Prioritize", description: "Identify key areas" },
                        { title: "Implement", description: "Execute phased roadmap" },
                      ]}
                      challenge="Organizations lack visibility into industry standards and best practices for AI governance, making it difficult to prioritize investments and measure progress."
                      solution="This report provides comprehensive benchmark data, maturity models, and strategic frameworks based on analysis of 500+ organizations."
                      result="Organizations using these benchmarks improve governance maturity scores by an average of 2.3 levels within 18 months."
                      tags={["Industry Analysis", "Benchmarking", "Trends", "Strategy"]}
                      metrics={[
                        { value: "500+", label: "Organizations", sublabel: "Analyzed" },
                        { value: "10,000+", label: "Data Points", sublabel: "Collected" },
                        { value: "15", label: "Industries", sublabel: "Covered" },
                      ]}
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">State of AI Governance 2025</div>
                          <div className="text-xs text-muted-foreground">Annual industry report</div>
                        </div>
                      </button>
                    </ResourcePreviewModal>
                  </li>
                  <li>
                    <ResourcePreviewModal
                      title="Tech Equity Benchmark Study"
                      category="Report"
                      badge="Research Report"
                      badgeColor="cyan"
                      description="Analysis of tech equity practices and outcomes across 500+ organizations"
                      pageCount="38-page study"
                      fileSize="3.8 MB"
                      executiveSummary="First-of-its-kind benchmark study examining tech equity practices, investments, and outcomes across industries. Based on survey data from 500+ organizations and in-depth case studies."
                      keyInsights={[
                        "Organizations with strong tech equity programs see 28% higher innovation rates",
                        "Average tech equity investment is 3.2% of technology budgets",
                        "Top performers invest 2.5x more in accessibility and inclusive design",
                        "ROI on tech equity initiatives averages 420% over 5 years",
                      ]}
                      implementationSteps={[
                        { title: "Assess", description: "Current maturity & investment" },
                        { title: "Identify", description: "High-impact opportunities" },
                        { title: "Implement", description: "Execute & measure" },
                      ]}
                      challenge="Organizations struggle to quantify the business value of tech equity investments and benchmark their performance against peers."
                      solution="This study provides comprehensive benchmark data, ROI analysis, and implementation frameworks based on real-world outcomes."
                      result="Organizations using these benchmarks increase tech equity investments by 180% and improve outcomes by 65%."
                      tags={["Tech Equity", "Benchmarking", "ROI", "Diversity"]}
                      metrics={[
                        { value: "500+", label: "Respondents", sublabel: "Survey participants" },
                        { value: "25", label: "Case Studies", sublabel: "In-depth analysis" },
                        { value: "420%", label: "Average ROI", sublabel: "5-year return" },
                      ]}
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">Tech Equity Benchmark Study</div>
                          <div className="text-xs text-muted-foreground">500+ organizations surveyed</div>
                        </div>
                      </button>
                    </ResourcePreviewModal>
                  </li>
                  <li>
                    <ResourcePreviewModal
                      title="AI Compliance Cost Analysis"
                      category="Report"
                      badge="Financial Analysis"
                      badgeColor="purple"
                      description="Comprehensive analysis of AI compliance costs, ROI, and budget planning strategies"
                      pageCount="32-page analysis"
                      fileSize="3.2 MB"
                      executiveSummary="Detailed financial analysis of AI compliance costs across organization sizes and industries. Includes cost breakdowns, ROI calculations, and budget planning frameworks."
                      keyInsights={[
                        "Average compliance costs: $2.5M for large enterprises, $450K for mid-market",
                        "Non-compliance costs average 8.5x higher than proactive compliance",
                        "ROI on compliance investments averages 340% over 3 years",
                        "Early adopters see 60% lower compliance costs than late movers",
                      ]}
                      implementationSteps={[
                        { title: "Estimate", description: "Use industry benchmarks" },
                        { title: "Calculate ROI", description: "Include risk mitigation" },
                        { title: "Plan Budget", description: "Phased investment approach" },
                      ]}
                      challenge="Organizations struggle to estimate compliance costs and build compelling business cases for AI governance investments."
                      solution="This analysis provides detailed cost breakdowns, ROI models, and budget planning tools based on real-world implementation data."
                      result="Organizations using these frameworks reduce compliance costs by 35% while improving outcomes and reducing risk."
                      tags={["Financial Analysis", "Compliance", "ROI", "Budgeting"]}
                      metrics={[
                        { value: "35%", label: "Cost Reduction", sublabel: "Compliance spending" },
                        { value: "340%", label: "Average ROI", sublabel: "3-year return" },
                        { value: "8.5x", label: "Risk Mitigation", sublabel: "vs non-compliance" },
                      ]}
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">AI Compliance Cost Analysis</div>
                          <div className="text-xs text-muted-foreground">ROI & budget planning</div>
                        </div>
                      </button>
                    </ResourcePreviewModal>
                  </li>
                  <li>
                    <ResourcePreviewModal
                      title="Disability Tech Market Report"
                      category="Report"
                      badge="Market Analysis"
                      badgeColor="cyan"
                      description="Analysis of the $500M+ disability tech market opportunity and implementation strategies"
                      pageCount="40-page report"
                      fileSize="4.0 MB"
                      executiveSummary="Comprehensive analysis of the rapidly growing disability tech market, including market sizing, competitive landscape, and strategic opportunities for organizations."
                      keyInsights={[
                        "Global disability tech market projected to reach $26B by 2028",
                        "Organizations serving disability community see 32% higher customer loyalty",
                        "Accessibility features benefit 100% of users, not just those with disabilities",
                        "Early movers capture 3.5x market share of late adopters",
                      ]}
                      implementationSteps={[
                        { title: "Assess", description: "Market opportunity & positioning" },
                        { title: "Identify", description: "High-value use cases" },
                        { title: "Execute", description: "Product roadmap & GTM" },
                      ]}
                      challenge="Organizations underestimate the market opportunity in disability tech and lack frameworks for capturing value."
                      solution="This report provides market sizing, competitive analysis, and strategic frameworks for entering and succeeding in the disability tech market."
                      result="Organizations using these strategies capture 2.8x more market share and see 45% higher customer satisfaction."
                      tags={["Market Analysis", "Disability Tech", "Accessibility", "Strategy"]}
                      metrics={[
                        { value: "$26B", label: "Market Size", sublabel: "By 2028" },
                        { value: "18%", label: "Growth Rate", sublabel: "CAGR" },
                        { value: "2.8x", label: "Market Share", sublabel: "vs late movers" },
                      ]}
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">Disability Tech Market Report</div>
                          <div className="text-xs text-muted-foreground">$500M+ market opportunity</div>
                        </div>
                      </button>
                    </ResourcePreviewModal>
                  </li>
                  <li>
                    <ResourcePreviewModal
                      title="Quarterly Trends Digest"
                      category="Report"
                      badge="Trend Report"
                      badgeColor="purple-cyan"
                      description="Latest developments in AI governance, tech equity, and regulatory landscape"
                      pageCount="24-page digest"
                      fileSize="2.5 MB"
                      executiveSummary="Quarterly digest of the most important trends, regulatory developments, and strategic shifts in AI governance and tech equity. Includes expert analysis and actionable recommendations."
                      keyInsights={[
                        "EU AI Act implementation accelerating across member states",
                        "US state-level AI regulations creating compliance complexity",
                        "Enterprise AI governance spending up 65% year-over-year",
                        "Accessibility lawsuits increasing 40% annually",
                      ]}
                      implementationSteps={[
                        { title: "Review", description: "Assess relevance to organization" },
                        { title: "Identify", description: "Emerging risks & opportunities" },
                        { title: "Update", description: "Strategic plans & roadmaps" },
                      ]}
                      challenge="Organizations struggle to stay current with rapidly evolving AI regulations, market trends, and best practices."
                      solution="This quarterly digest provides curated analysis of the most important developments with clear implications and recommendations."
                      result="Subscribers report 50% improvement in strategic decision-making and 35% reduction in compliance surprises."
                      tags={["Trends", "Regulatory", "Market Intelligence", "Strategy"]}
                      metrics={[
                        { value: "50+", label: "Trends", sublabel: "Analyzed quarterly" },
                        { value: "15", label: "Contributors", sublabel: "Expert analysts" },
                        { value: "4.8/5", label: "Satisfaction", sublabel: "Subscriber rating" },
                      ]}
                    >
                      <button className="group text-sm hover:text-purple-600 transition-colors flex items-start gap-2 text-left w-full">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-purple-600" />
                        <div>
                          <div className="font-medium">Quarterly Trends Digest</div>
                          <div className="text-xs text-muted-foreground">Latest developments</div>
                        </div>
                      </button>
                    </ResourcePreviewModal>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6 bg-transparent">
                  View All Reports
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Added Expert Insights & Implementation Tools section */}
        <section className="py-20 bg-gradient-to-br from-purple-100 via-cyan-100 to-purple-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200" variant="outline">
                Free Resources
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
                Expert Insights & Implementation Tools
              </h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Access professionally crafted resources to accelerate your AI governance and tech equity initiatives
              </p>
            </div>

            <div className="space-y-12">
              {/* Resource 1 - Whitepaper */}
              <div>
                <SamplePDFPreview
                  title="The Business Case for AI Governance: A Strategic Framework for Enterprise Leaders"
                  type="whitepaper"
                />
                <div className="text-center mt-6">
                  <ResourceGateModal
                    resourceTitle="The Business Case for AI Governance"
                    resourceType="whitepaper"
                    resourceDescription="Download this comprehensive 25-page whitepaper exploring how strategic AI governance drives measurable ROI, reduces regulatory risk, and unlocks new market opportunities."
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Free Whitepaper
                    </Button>
                  </ResourceGateModal>
                </div>
              </div>

              {/* Resource 2 - Tool */}
              <div>
                <SamplePDFPreview
                  title="AI Bias Detection Checklist: A Practical Implementation Guide for Product Teams"
                  type="tool"
                />
                <div className="text-center mt-6">
                  <ResourceGateModal
                    resourceTitle="AI Bias Detection Checklist"
                    resourceType="tool"
                    resourceDescription="Get this actionable 15-page checklist with step-by-step frameworks for identifying and mitigating algorithmic bias in your AI systems."
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Free Tool
                    </Button>
                  </ResourceGateModal>
                </div>
              </div>

              {/* Resource 3 - Report */}
              <div>
                <SamplePDFPreview
                  title="2025 Tech Equity Trends Report: Market Insights & Strategic Opportunities"
                  type="report"
                />
                <div className="text-center mt-6">
                  <ResourceGateModal
                    resourceTitle="2025 Tech Equity Trends Report"
                    resourceType="report"
                    resourceDescription="Access this exclusive 30-page industry report featuring data-driven insights, market analysis, and strategic recommendations for tech equity leaders."
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-600 hover:from-purple-700 hover:via-purple-600 hover:to-cyan-700"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Free Report
                    </Button>
                  </ResourceGateModal>
                </div>
              </div>
            </div>

            <Card className="mt-16 bg-white border-purple-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Want More Resources?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Join our newsletter to receive exclusive insights, case studies, and implementation frameworks
                  delivered monthly.
                </p>
                <NewsletterForm 
                  source="resources" 
                  variant="default" 
                  buttonText="Subscribe"
                  placeholder="Enter your email"
                  className="max-w-md mx-auto"
                />
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="max-w-6xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-500 text-white border-0 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-center text-white drop-shadow-lg">
                Proven Impact Across Industries
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">$1.5B+</div>
                  <div className="text-white/90 text-sm">Total Value Created</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">95%</div>
                  <div className="text-white/90 text-sm">Compliance Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">18mo</div>
                  <div className="text-white/90 text-sm">Average ROI Timeline</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">50+</div>
                  <div className="text-white/90 text-sm">Organizations Transformed</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stay Ahead of the Curve section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-12 text-center">
              <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Stay Ahead of the Curve</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Join 10,000+ leaders receiving exclusive insights on AI governance, tech equity, and inclusive
                innovation. Get monthly updates, early access to new resources, and invitations to exclusive events.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
                <Input type="email" placeholder="Enter your email" className="flex-1" aria-label="Email address" />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                >
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-muted-foreground">
                No spam. Unsubscribe anytime. Read our{" "}
                <Link href="/resources/privacy-policy" className="underline hover:text-foreground">
                  privacy policy
                </Link>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Ready to Transform Your Organization section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-purple-700 via-purple-600 to-cyan-600 text-white border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.1),transparent_60%)]" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
                  Ready to Transform Your Organization?
                </h2>
                <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow">
                  Schedule a complimentary discovery call to discuss how our proven frameworks can drive measurable
                  results for your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="bg-white text-purple-700 hover:bg-gray-100 shadow-lg"
                  >
                    <Link href="/contact">
                      Schedule Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
                  >
                    <Link href="/case-studies">View Success Stories</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
