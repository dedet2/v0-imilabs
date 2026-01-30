import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getPostBySlug, getAllPostSlugs, blogPosts } from "@/lib/blog-data"

// Legacy posts kept for backwards compatibility - these will be merged with imported data
const legacyBlogPosts: Record<string, {
  title: string
  description: string
  category: string
  date: string
  readTime: string
  image: string
  content: string[]
}> = {
  "eu-ai-act-guide-2026": {
    title: "The EU AI Act: What Leaders Need to Know in 2026",
    description: "A comprehensive guide to the EU AI Act requirements and how organizations can prepare for compliance.",
    category: "AI Governance",
    date: "January 15, 2026",
    readTime: "8 min read",
    image: "/modern-corporate-office-with-diverse-team-working-on-ai-governance.jpg",
    content: [
      "The EU AI Act represents the most comprehensive AI regulation globally, and 2026 marks a critical year for compliance. Organizations deploying AI systems in the European Union must understand their obligations and take proactive steps to ensure compliance. This landmark legislation will fundamentally reshape how businesses develop, deploy, and maintain artificial intelligence systems across all sectors.",
      "As someone who has spent over two decades at the intersection of technology and policy, I've watched this regulation evolve from early proposals to the comprehensive framework we see today. The Act didn't emerge in a vacuum—it's the culmination of years of growing concern about AI's impact on fundamental rights, safety, and democratic values.",
      "Understanding the Risk-Based Approach: The Act categorizes AI systems into four distinct risk levels, each with different compliance obligations. Unacceptable risk systems are outright banned—these include social scoring systems, real-time biometric identification in public spaces (with limited exceptions), and AI that manipulates human behavior to circumvent free will. High-risk systems face the most stringent requirements and include AI used in critical infrastructure, education, employment, essential services, law enforcement, and border management.",
      "Limited risk systems, such as chatbots and deepfakes, must meet transparency requirements—users must be informed they're interacting with AI. Minimal risk systems, which constitute the vast majority of AI applications, face no specific regulatory requirements under the Act, though general principles of responsible AI development still apply.",
      "Key Compliance Requirements for High-Risk Systems: Organizations deploying high-risk AI must implement comprehensive risk management systems that identify, analyze, evaluate, and mitigate risks throughout the AI lifecycle. This isn't a one-time assessment—it requires ongoing monitoring and updates as the system evolves and new risks emerge.",
      "Technical documentation requirements are extensive. You must maintain detailed records of the system's purpose, design specifications, training methodologies, data governance practices, and performance metrics. This documentation must be sufficient for authorities to assess compliance and must be updated whenever significant changes occur.",
      "Data governance is particularly critical. The Act requires that training, validation, and testing datasets be relevant, representative, and free from errors. For high-risk systems, you must implement measures to examine potential biases and ensure data quality. This is where many organizations struggle—historical data often encodes past discrimination, and addressing this requires intentional intervention.",
      "Human oversight requirements ensure that AI systems can be effectively supervised by humans. This includes implementing 'stop' buttons, designing systems so humans can understand their outputs, and ensuring operators are trained to identify anomalies and potential risks.",
      "Timeline and Penalties: The Act's provisions are being phased in over several years. Prohibitions on unacceptable-risk AI took effect in early 2025. Requirements for general-purpose AI models became applicable in August 2025. High-risk system requirements will be fully enforceable by August 2026, making this year critical for compliance preparation.",
      "Penalties for non-compliance are severe: up to €35 million or 7% of global annual turnover for violations related to prohibited AI practices; up to €15 million or 3% for other violations. For many organizations, these penalties could be existential. But beyond financial penalties, non-compliance risks reputational damage, loss of market access, and exclusion from an increasingly ethics-conscious supply chain.",
      "Strategic Recommendations: Begin with a comprehensive AI inventory. Many organizations are surprised to discover how many AI systems they actually deploy—from obvious applications like recommendation engines to less visible uses in HR screening, fraud detection, and customer service. Every system needs classification and potential compliance assessment.",
      "Establish cross-functional governance structures now. AI compliance isn't just a technical problem—it requires coordination between legal, compliance, engineering, data science, and business teams. Create clear lines of responsibility and decision-making authority before regulatory pressure intensifies.",
      "Invest in documentation infrastructure. The Act's requirements for technical documentation, logging, and record-keeping are substantial. Organizations that build these capabilities now will be better positioned for compliance and will also benefit from improved operational visibility and debugging capabilities.",
      "The organizations that thrive under the EU AI Act will be those that view compliance not as a burden but as an opportunity to build trust, differentiate from competitors, and create AI systems that genuinely serve human flourishing. The regulatory landscape is shifting—the question is whether your organization will lead or follow.",
    ],
  },
  "disability-innovation-driver": {
    title: "Disability as Innovation Driver: The Business Case",
    description: "How inclusive design and accessibility-first thinking can unlock new markets and drive competitive advantage.",
    category: "Tech Equity",
    date: "January 8, 2026",
    readTime: "6 min read",
    image: "/diverse-team-collaborating-on-inclusive-technology.jpg",
    content: [
      "When we design for the margins, we create solutions that benefit everyone. This isn't just a moral imperative—it's a business strategy that has proven to unlock significant value for organizations willing to embrace inclusive design. Throughout my career, I've seen firsthand how accessibility-first thinking transforms not just products, but entire organizational cultures.",
      "The numbers tell a compelling story. According to the World Health Organization, 1.3 billion people globally live with some form of disability—that's 16% of the world's population. This community represents $13 trillion in annual disposable income. Add aging populations (by 2050, one in six people will be over 65), temporary disabilities, and situational impairments, and the addressable market for accessible products expands dramatically.",
      "But the business case extends far beyond market size. Companies that prioritize accessibility consistently outperform their peers on key financial metrics. Research from Accenture found that companies leading in disability inclusion have 28% higher revenue, double the net income, and 30% higher profit margins than their peers. This isn't correlation—disability-inclusive companies demonstrate operational excellence across multiple dimensions.",
      "The Curb Cut Effect: Innovation That Benefits Everyone: The curb cut effect, named after the sloped sidewalk cuts originally designed for wheelchair users, illustrates how solutions designed for specific populations often benefit everyone. Parents with strollers, travelers with luggage, delivery workers with hand trucks—all benefit from curb cuts. The same principle applies throughout technology.",
      "Consider some of the most transformative technologies of our time: Email was pioneered at deaf-friendly institutions. Predictive text originated from communication devices for people with physical disabilities. Voice recognition technology was developed to serve people who couldn't use keyboards. Audiobooks, now a multi-billion dollar industry enjoyed by millions of commuters, were created for blind readers.",
      "These innovations didn't just serve niche markets—they transformed how all of us communicate, create, and consume information. When you design for the margins, you often discover solutions that address needs the mainstream market didn't even know it had.",
      "Implementing Accessibility-First Design: Transitioning to accessibility-first design requires both cultural and operational changes. The most important shift is involving people with disabilities throughout the design process—not as an afterthought or during testing, but from the earliest ideation stages.",
      "This means building diverse teams that include people with various disabilities, engaging disability communities as partners rather than research subjects, and compensating disabled consultants fairly for their expertise. The disability community's motto, 'Nothing about us without us,' should guide every accessibility initiative.",
      "Operationally, accessibility must be built into your development lifecycle from the start. Retrofitting accessibility is expensive—organizations that address accessibility during initial design spend 75% less than those who try to add it later. Create accessibility requirements alongside functional requirements, include accessibility testing in your QA processes, and train all team members on accessibility principles.",
      "Measurement matters. Track accessibility metrics with the same rigor you apply to other KPIs. This includes technical compliance metrics (WCAG conformance levels), user experience metrics (task completion rates for users with disabilities), and business metrics (market penetration among disabled consumers).",
      "The Leadership Opportunity: Organizations that embrace accessibility-first design position themselves as leaders in an increasingly important dimension of corporate responsibility. Investors, customers, and employees are all paying more attention to how companies treat their most marginalized stakeholders.",
      "More fundamentally, accessibility-first design creates better products for everyone. The discipline of designing for extreme users forces clearer thinking, simpler interfaces, and more robust systems. It's a competitive advantage hiding in plain sight—one that most of your competitors are still ignoring.",
    ],
  },
  "ethical-ai-framework": {
    title: "Building Ethical AI Systems: A Framework for Success",
    description: "Practical steps for implementing ethical AI governance that protects your organization and serves all users.",
    category: "AI Governance",
    date: "December 20, 2025",
    readTime: "10 min read",
    image: "/executive-team-reviewing-compliance-dashboard.jpg",
    content: [
      "Ethical AI isn't just about avoiding harm—it's about building systems that actively promote fairness, transparency, and human flourishing. This requires a comprehensive framework that addresses every stage of the AI lifecycle, from initial conception through deployment, monitoring, and eventual decommissioning.",
      "Over my years advising Fortune 500 companies on AI governance, I've developed a framework built on four pillars that has proven effective across industries and use cases. These pillars—Lead with Curiosity, Be Accountable, Solve for One, Extend to Many, and Take Action—provide both philosophical grounding and practical guidance.",
      "Pillar 1: Lead with Curiosity: The first pillar challenges us to examine our assumptions and actively seek out blind spots. AI systems are built by humans, trained on human-generated data, and reflect human decisions at every turn. Without intentional curiosity, we inevitably encode our biases and limitations into these systems.",
      "Leading with curiosity means asking uncomfortable questions: Who might be harmed by this system? Whose perspectives are missing from our team? What historical inequities might be embedded in our training data? Who benefits if this system works as designed, and who might be disadvantaged?",
      "Practically, this means conducting pre-mortems before launching AI systems—imagining ways the system could fail or cause harm, then working backward to prevent those outcomes. It means red-teaming your own systems, seeking out edge cases, and actively inviting critique from diverse stakeholders.",
      "Pillar 2: Be Accountable: Accountability requires transparency about how AI systems work, clear ownership of outcomes, and mechanisms for redress when things go wrong. This is where many organizations struggle—AI's complexity makes it easy to diffuse responsibility until no one is truly accountable.",
      "Establish clear governance structures with named individuals responsible for AI ethics decisions. Create AI ethics committees with authority to pause or modify projects that raise concerns. Document decision-making processes so you can reconstruct why particular choices were made.",
      "Transparency with external stakeholders is equally important. Users should understand when they're interacting with AI systems, what data is being used, and how decisions affecting them are made. This doesn't require exposing proprietary algorithms—it requires honest communication about capabilities, limitations, and the role of AI in decision processes.",
      "Pillar 3: Solve for One, Extend to Many: This pillar embodies the accessibility-first design philosophy. Rather than designing for an imaginary 'average' user and then retrofitting accommodations, start by designing for users with the most demanding requirements.",
      "When you design for a blind user, you create systems that work better for everyone in low-vision situations. When you design for users with cognitive disabilities, you create clearer, more usable interfaces for all users. When you design for users in low-bandwidth environments, you create more efficient systems that perform better everywhere.",
      "This approach requires including marginalized users throughout the design process—not as an afterthought, but as primary design partners. It requires measuring success by how well systems serve the most vulnerable users, not just average performance metrics.",
      "Pillar 4: Take Action: The final pillar emphasizes that good intentions aren't enough—what matters is concrete action. Many organizations produce impressive AI ethics principles documents that have little impact on actual development practices. The difference between ethical AI leaders and laggards is implementation.",
      "Take action means building ethics into standard operating procedures: mandatory bias testing before deployment, regular algorithmic audits, clear escalation paths for ethics concerns, and performance evaluations that include ethics metrics. It means investing in training, tools, and infrastructure that make ethical AI development the path of least resistance.",
      "Implementation Roadmap: Start by assessing your current state. How many AI systems do you deploy? What governance structures exist? Where are the gaps between your stated principles and actual practices?",
      "Next, establish governance infrastructure: ethics committees, policy documentation, training programs, and technical tools for bias testing and monitoring. Prioritize high-risk systems for immediate attention while building capacity for organization-wide transformation.",
      "Finally, create feedback loops. Monitor systems in production for unexpected behaviors. Create channels for affected communities to raise concerns. Conduct regular audits and update practices based on what you learn. Ethical AI isn't a destination—it's an ongoing practice of continuous improvement.",
      "The organizations that master ethical AI development will build trust with customers, attract top talent, navigate regulatory requirements more easily, and create AI systems that genuinely serve human flourishing. The framework is clear—now it's time to put it into practice.",
    ],
  },
  "roi-accessible-technology": {
    title: "The ROI of Accessible Technology",
    description: "Quantifying the business value of accessibility investments and inclusive design practices.",
    category: "Business Impact",
    date: "December 12, 2025",
    readTime: "7 min read",
    image: "/diverse-team-celebrating-inclusive-product-launch.jpg",
    content: [
      "Accessibility investments deliver measurable returns across multiple dimensions: risk mitigation, market expansion, operational efficiency, brand value, and talent attraction. Understanding and quantifying these returns is essential for building the business case for inclusive design and securing the resources needed for meaningful accessibility improvements.",
      "For too long, accessibility has been framed primarily as a compliance obligation or charitable gesture. While legal compliance and moral considerations are important, they rarely drive sustained organizational commitment. By quantifying the business value of accessibility, we can shift the conversation from 'should we invest in accessibility?' to 'how much should we invest to maximize returns?'",
      "Risk Mitigation: The Cost of Inaction: The legal landscape around accessibility has transformed dramatically. ADA-related lawsuits increased 320% between 2018 and 2025, with digital accessibility claims now comprising the majority of cases. Average settlements for web accessibility cases exceed $150,000, and the reputational damage often exceeds direct legal costs.",
      "But litigation is just the most visible risk. The EU AI Act and similar regulations worldwide are creating new accessibility requirements with substantial penalties. The US Department of Justice has clarified that the ADA applies to websites and mobile applications. Organizations that proactively address accessibility avoid these costs while building systems that can adapt to evolving regulatory requirements.",
      "Beyond legal risk, inaccessible systems create operational vulnerabilities. When your systems can't accommodate employees with disabilities, you limit your talent pool and may violate employment discrimination laws. When your products exclude customers with disabilities, you're leaving money on the table and creating opportunities for competitors.",
      "Market Expansion: The Disability Market Advantage: The disability market represents $13 trillion in annual disposable income globally. In the US alone, people with disabilities control over $490 billion in disposable income. This community is large, growing (as populations age), and dramatically underserved by most businesses.",
      "But the market opportunity extends beyond people with formally diagnosed disabilities. Accessible design benefits aging populations, who increasingly struggle with small text, complex interfaces, and audio-only content. It benefits people with temporary impairments—broken arms, eye infections, or post-surgical limitations. It benefits people in challenging contexts—trying to use a phone in bright sunlight, in a loud environment, or while caring for a child.",
      "When you design for accessibility, you often expand your addressable market by 15-25% or more. This isn't theoretical—organizations that have invested in accessibility consistently report increased engagement, conversion rates, and customer satisfaction across their entire user base.",
      "Operational Efficiency: Building Accessibility In: One of the most compelling economic arguments for accessibility is the cost differential between proactive and reactive approaches. Organizations that build accessibility into their development processes from the start spend approximately 75% less than those who try to retrofit accessibility later.",
      "This efficiency gain comes from multiple sources. Accessible code is typically cleaner and more maintainable. Accessibility testing catches usability issues that affect all users. Accessible design principles lead to simpler, more intuitive interfaces that reduce support costs and improve conversion rates.",
      "Moreover, organizations with mature accessibility practices develop institutional knowledge and reusable components that make subsequent projects faster and less expensive. The investment in accessibility capability pays dividends across all future development efforts.",
      "Brand Value and Talent: The Intangible Returns: While harder to quantify, the brand value of accessibility leadership is substantial. Consumers increasingly factor corporate values into purchasing decisions, and disability inclusion is becoming a visible dimension of corporate responsibility.",
      "Organizations known for accessibility excellence attract media coverage, partnership opportunities, and customer loyalty that would cost millions to achieve through traditional marketing. They also attract top talent—both employees with disabilities who bring valuable perspectives, and employees without disabilities who want to work for values-driven organizations.",
      "Calculating Your ROI: Every organization's accessibility ROI will differ based on industry, size, current accessibility posture, and strategic priorities. Key inputs include: your revenue and the percentage of customers who might be underserved by inaccessible products; your employee count and the productivity value of a more inclusive workplace; your regulatory exposure and the potential cost of compliance failures; and your brand positioning and the value of accessibility leadership to your market position.",
      "Use tools like our ROI Calculator to estimate the specific value for your organization. Most organizations find potential returns of 5-10x their accessibility investments—often more. The business case for accessibility isn't just compelling; for organizations willing to see it, it's overwhelming.",
    ],
  },
  "algorithmic-bias-prevention": {
    title: "Algorithmic Bias: Detection and Prevention Strategies",
    description: "Understanding how bias enters AI systems and practical approaches to identify and mitigate it.",
    category: "AI Governance",
    date: "December 5, 2025",
    readTime: "9 min read",
    image: "/diverse-tech-team-collaborating-in-modern-office.jpg",
    content: [
      "Algorithmic bias occurs when AI systems produce systematically unfair outcomes for certain groups. This bias can enter systems through training data, model design, deployment context, or feedback loops—and its effects can be devastating for affected communities while creating significant liability for deploying organizations.",
      "Understanding algorithmic bias is essential for anyone building, deploying, or overseeing AI systems. The good news is that bias is not inevitable—with intentional design, rigorous testing, and ongoing monitoring, we can build AI systems that are substantially fairer than the biased human processes they often replace.",
      "How Bias Enters AI Systems: Bias can enter AI systems at every stage of development. Training data bias is perhaps the most discussed vector: if your training data reflects historical discrimination, your model will learn to replicate that discrimination. A hiring algorithm trained on past hiring decisions may learn to penalize candidates from groups that were historically discriminated against, even if those protected characteristics are removed from the input data.",
      "But data isn't the only source of bias. Feature selection embeds human judgments about what factors are relevant—judgments that may reflect biased assumptions. Model architecture choices can amplify certain patterns while suppressing others. Optimization objectives encode values about what outcomes matter, and these values may not align with fairness goals.",
      "Deployment context creates additional bias risks. A model that performs fairly in one population may produce biased outcomes when deployed in a different demographic context. Feedback loops can amplify small initial biases over time: if a system makes biased predictions, those predictions influence outcomes, which become training data for future models, reinforcing the original bias.",
      "Detection: Finding Bias Before It Causes Harm: Effective bias detection requires proactive testing across demographic groups, using multiple fairness metrics. No single metric captures all fairness concerns, and different metrics can be mutually exclusive—improving one may worsen another.",
      "Key metrics include demographic parity (whether outcomes are equally distributed across groups), equalized odds (whether true positive and false positive rates are equal across groups), and predictive parity (whether predictions are equally accurate across groups). Choose metrics based on your use case and the specific harms you're most concerned about.",
      "Testing must include subgroup analysis—bias can hide when only looking at aggregate performance. A system might show equal accuracy across racial groups overall while dramatically underperforming for specific intersections like Black women or elderly Asian men.",
      "Beyond quantitative metrics, qualitative testing with affected communities can reveal bias patterns that metrics miss. Users from affected groups can often identify problematic behaviors that evaluators from dominant groups overlook.",
      "Prevention: Building Fairer Systems: Prevention starts with diverse development teams. Homogeneous teams have blind spots—they don't know what they don't know. Teams that include people from the groups most likely to be affected by AI systems are more likely to anticipate problems and design appropriate safeguards.",
      "Data interventions can address training data bias. This includes collecting more representative data, augmenting underrepresented groups, removing or reweighting biased examples, and carefully evaluating proxy variables that might encode protected characteristics.",
      "Algorithmic interventions can constrain models to produce fairer outcomes. Techniques include adversarial debiasing (training models to be unable to predict protected characteristics), fairness constraints during optimization, and post-processing to adjust outputs for fairness.",
      "Process interventions embed fairness throughout the development lifecycle: mandatory bias impact assessments before starting projects, fairness requirements alongside functional requirements, bias testing in QA processes, and regular audits of deployed systems.",
      "Human oversight remains essential, especially for high-stakes decisions. AI should augment human decision-making, not replace it entirely. Build systems that explain their reasoning, flag uncertain cases for human review, and provide mechanisms for affected individuals to appeal automated decisions.",
      "Fairness as Ongoing Practice: Addressing algorithmic bias isn't a one-time effort—it's an ongoing practice. Population demographics shift, model behavior changes over time, and our understanding of fairness evolves. Organizations committed to fair AI must invest in continuous monitoring, regular audits, and mechanisms for affected communities to provide feedback.",
      "Remember that perfect fairness may be impossible—different fairness criteria can be mathematically incompatible. The goal isn't perfection but intentional, transparent decision-making about which tradeoffs to accept. By engaging with these challenges openly, involving affected communities, and continuously working to improve, we can build AI systems that are substantially fairer than the status quo—and that's a goal worth pursuing.",
    ],
  },
  "rest-as-resistance-leaders": {
    title: "Rest as Resistance: The Wellness Imperative for Leaders",
    description: "Why executive wellness and intentional rest are essential for sustainable leadership and innovation.",
    category: "Wellness",
    date: "November 28, 2025",
    readTime: "5 min read",
    image: "/diverse-executives-in-meditation-session.jpg",
    content: [
      "In a culture that glorifies hustle, rest becomes an act of resistance. For leaders especially, intentional rest isn't a luxury—it's a strategic imperative for sustainable performance, innovative thinking, and organizational health. Yet most leaders I work with are caught in a relentless cycle of productivity that ultimately undermines the outcomes they're working so hard to achieve.",
      "The research is unambiguous: chronic overwork diminishes cognitive function, creativity, decision-making quality, and emotional intelligence. The leaders who drive the most impact aren't those who work the longest hours—they're those who strategically alternate between deep work and genuine recovery.",
      "The Tricia Hersey Movement and the Nap Ministry have articulated a powerful framework: Rest as Resistance. Drawing on the legacy of slavery and capitalism's extraction of Black labor, this framework recognizes rest as a radical act—a reclamation of bodily autonomy and human dignity. While the origins are rooted in Black liberation, the principles apply broadly: rest is not earned through productivity; it is a birthright.",
      "The Neuroscience of Rest: Our brains weren't designed for constant productivity. Neuroscientific research reveals that rest periods are when the brain consolidates learning, processes emotional experiences, and generates creative insights. The default mode network, active during rest, is essential for self-reflection, future planning, and understanding others' perspectives—all critical leadership capabilities.",
      "Sleep deprivation, chronic stress, and constant connectivity disrupt these processes. Leaders who never disconnect make worse decisions, miss important context, and struggle to think strategically. They're also more likely to experience burnout, health problems, and relationship difficulties that ultimately impact their professional effectiveness.",
      "Reframing Rest as Strategy: For many leaders, the barrier to rest isn't time—it's mindset. Rest feels unproductive, and in organizations that reward visible effort, taking breaks can feel professionally risky. Reframing rest as strategic allows leaders to embrace it without guilt.",
      "Consider: the breakthrough insights that drive innovation rarely come during intense work sessions. They emerge during walks, showers, vacations—moments when the conscious mind relaxes and the unconscious can surface connections. By never creating space for these moments, constantly-hustling leaders may be systematically suppressing their most valuable thinking.",
      "Similarly, emotional regulation—essential for effective leadership—requires energy that's depleted by constant demands. Leaders who never restore their emotional reserves become reactive, harsh, and poor at the relational work that leadership requires.",
      "Practical Strategies for Leaders: Implement genuine boundaries between work and rest. This means specific times when you don't check email, periods when you're genuinely unavailable, and vacations that are actually vacations. These boundaries may feel uncomfortable initially, but they send powerful signals to your organization about sustainable work practices.",
      "Schedule recovery time with the same non-negotiability as important meetings. Block time for exercise, meditation, creative pursuits, or simply doing nothing. Protect this time against the constant encroachment of 'urgent' demands that rarely are.",
      "Create cultures where rest is normalized rather than stigmatized. When leaders model sustainable practices, they give permission for others to do the same. When leaders burn out publicly, they teach that burnout is expected.",
      "The Retreat Experience: Our wellness retreats in Japan embody these principles, offering leaders the space to truly disconnect in an environment designed for restoration. The combination of natural beauty, cultural practices like onsen bathing, and intentional community creates conditions for deep rest that's difficult to achieve in everyday environments.",
      "Participants consistently report returning with renewed clarity, energy, and strategic perspective. Many describe insights and breakthroughs that had eluded them during months of grinding effort. This isn't magic—it's neuroscience. Give the mind space to wander, and it will take you places that constant focus never could.",
      "Rest as resistance isn't about working less—it's about working more sustainably, more creatively, and more humanely. In a culture that extracts maximum productivity regardless of human cost, choosing rest is a radical act. For leaders who want to make lasting impact while maintaining their humanity, it's also essential.",
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]
  
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
  // Combine slugs from new blog data and legacy posts
  const newSlugs = getAllPostSlugs()
  const legacySlugs = Object.keys(legacyBlogPosts)
  const allSlugs = [...new Set([...newSlugs, ...legacySlugs])]
  
  return allSlugs.map((slug) => ({
    slug,
  }))
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  // Try new blog data first, then fall back to legacy posts
  const newPost = getPostBySlug(slug)
  const legacyPost = legacyBlogPosts[slug]
  
  const post = newPost ? {
    title: newPost.title,
    description: newPost.description,
    category: newPost.category,
    date: newPost.date,
    readTime: newPost.readTime,
    image: newPost.image,
    content: newPost.content,
    author: newPost.author,
  } : legacyPost
  
  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-[#7209b7] via-[#6366f1] to-[#06b6d4] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6 drop-shadow-lg">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/80">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {'author' in post ? post.author : 'Dr. Dédé Tetsubayashi'}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none">
              {post.content.map((paragraph, index) => (
                <p key={index} className="text-foreground/80 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </article>

            {/* Share and CTA */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-foreground/60">Share this article:</span>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
                <Button asChild className="bg-gradient-to-r from-violet-600 to-cyan-400 hover:from-violet-700 hover:to-cyan-500">
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
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
