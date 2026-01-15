"use client"

import Link from "next/link"
import { Users, Target, Handshake, TrendingUp, Heart, Award } from "lucide-react"

export default function CorporatePartnershipsPage() {
  return (
    <div className="min-h-screen bg-[#fdfcfb]">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20"
        style={{
          background: "linear-gradient(135deg, rgba(156, 39, 176, 0.9) 0%, rgba(0, 188, 212, 0.9) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-white">
          <p className="text-sm uppercase tracking-[3px] font-semibold mb-4">Corporate Wellness Programs</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            Invest in Your
            <br />
            Black Women Leaders
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed">
            Custom wellness retreat experiences in Japan that reduce burnout, strengthen leadership, and demonstrate
            genuine organizational commitment
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
            Partner with Rest as Resistance to provide transformative wellness experiences for your high-performing
            executives. Our proven retreats combine cultural immersion, deep rest practices, and leadership development
            in an environment designed specifically for Black women leaders.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="mailto:info@dr-dede.com"
              className="px-8 py-4 rounded-full bg-white text-[#9c27b0] text-lg font-semibold transition-all hover:scale-105 hover:shadow-xl"
            >
              Request Partnership Proposal
            </Link>
            <Link
              href="#programs"
              className="px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105 border-2 border-white"
            >
              View Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-light text-center mb-16"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            The Leadership Crisis
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-red-50 border-l-4 border-red-600">
              <h3 className="text-2xl font-medium mb-6 text-gray-900">The Problem</h3>
              <ul className="space-y-4">
                {[
                  "Black women executives face disproportionate burnout rates",
                  "Traditional wellness programs don't address their unique challenges",
                  "High turnover costs millions in lost talent and institutional knowledge",
                  "DEI initiatives often feel performative rather than substantive",
                  "Leaders are exhausted but have no culturally safe spaces to rest",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-purple-50 border-l-4 border-purple-600">
              <h3 className="text-2xl font-medium mb-6 text-gray-900">Our Solution</h3>
              <ul className="space-y-4">
                {[
                  "Culturally specific wellness experiences designed for Black women",
                  "Proven track record with 25+ executive participants",
                  "Measurable improvements in wellbeing, resilience, and engagement",
                  "Demonstrates tangible organizational investment in diverse leadership",
                  "Creates lasting networks among your women leaders",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        className="py-20 px-4"
        style={{ background: "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-light text-center mb-16"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Organizational Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-10 h-10" />,
                title: "Retention & Engagement",
                description:
                  "Reduce executive turnover by demonstrating genuine investment in wellbeing. Participants return energized and recommitted to organizational goals.",
              },
              {
                icon: <Target className="w-10 h-10" />,
                title: "Leadership Development",
                description:
                  "Strengthen leadership capacity through facilitated reflection, peer connection, and culturally affirming development practices.",
              },
              {
                icon: <Handshake className="w-10 h-10" />,
                title: "Authentic DEI",
                description:
                  "Move beyond performative diversity initiatives with substantive investment in Black women leaders' wellbeing and professional development.",
              },
              {
                icon: <Heart className="w-10 h-10" />,
                title: "Burnout Prevention",
                description:
                  "Proactively address executive burnout with deep rest practices proven to restore resilience and sustainable high performance.",
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: "Competitive Advantage",
                description:
                  "Differentiate your organization as an employer of choice for top Black women talent in competitive talent markets.",
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: "Measurable Impact",
                description:
                  "Receive post-retreat assessments documenting improvements in wellbeing metrics, engagement scores, and leadership capacity.",
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all">
                <div className="text-[#667eea] mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-[#667eea]">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Options */}
      <section id="programs" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-light text-center mb-16"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Partnership Options
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                tag: "Individual Sponsorship",
                title: "Sponsor 1-3 Leaders",
                description:
                  "Sponsor individual executives to join our seasonal public retreats alongside other Black women leaders from diverse organizations.",
                features: [
                  "7-16 days in Japan",
                  "Group size: 10-12 participants",
                  "Cross-company networking",
                  "Established retreat curriculum",
                  "Four seasonal options throughout 2026",
                ],
                price: "$12,500 - $26,500 per participant",
              },
              {
                tag: "Group Exclusive",
                title: "Exclusive Company Retreat",
                description:
                  "Book a private retreat exclusively for 6-12 leaders from your organization, with customized curriculum aligned to your strategic priorities.",
                features: [
                  "5-10 days, flexible scheduling",
                  "Exclusive to your organization",
                  "Custom curriculum design",
                  "Team building & cohesion",
                  "Strategic planning integration",
                  "Confidential organizational discussions",
                ],
                price: "Custom pricing based on group size",
              },
              {
                tag: "Ongoing Partnership",
                title: "Annual Wellness Program",
                description:
                  "Multi-year partnership providing annual retreat experiences for your emerging and senior Black women leaders, with quarterly wellness touchpoints.",
                features: [
                  "Priority retreat access",
                  "Discounted group rates",
                  "Quarterly virtual wellness sessions",
                  "Custom organizational wellness assessment",
                  "Leadership development integration",
                ],
                price: "Custom annual partnership pricing",
              },
            ].map((option, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-2xl p-8 hover:border-[#667eea] hover:shadow-xl transition-all"
              >
                <span className="inline-block px-4 py-2 bg-purple-100 text-[#667eea] rounded-full text-xs uppercase tracking-wider font-semibold mb-4">
                  {option.tag}
                </span>
                <h3 className="text-2xl font-medium mb-4 text-gray-900">{option.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
                <ul className="space-y-3 mb-6">
                  {option.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-gray-700">
                      <span className="text-[#667eea]">→</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xl font-semibold text-[#667eea] mb-6">{option.price}</p>
                <Link
                  href="mailto:info@dr-dede.com"
                  className="block w-full text-center px-6 py-3 rounded-full text-white font-medium transition-all hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
                  }}
                >
                  Inquire About {option.tag}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 px-4 text-white text-center"
        style={{ background: "linear-gradient(135deg, #9c27b0 0%, #00bcd4 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">Ready to Invest in Your Leaders?</h2>
          <p className="text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
            Contact us to discuss how Rest as Resistance corporate wellness programs can support your organization's
            commitment to Black women leaders.
          </p>
          <Link
            href="mailto:info@dr-dede.com"
            className="inline-block px-8 py-4 bg-white text-[#9c27b0] rounded-full text-lg font-semibold hover:scale-105 transition-all"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
