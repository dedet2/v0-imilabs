import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Heart, Users, Briefcase, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Wellness Retreats & Advocacy | Dr. Dédé Tetsubayashi",
  description:
    "Transformative wellness experiences that honor your whole self—mind, body, and spirit—in luxury settings designed for complete accessibility and comfort.",
  alternates: {
    canonical: "https://dr-dede.com/retreats-advocacy",
  },
}

export default function RetreatsAdvocacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#7209b7] via-[#6366f1] to-[#06b6d4] text-white py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
              Wellness Designed for Everyone
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Our wellness retreats are founded on the principle that true luxury means accessibility for all. Every
              aspect of the experience—from the physical spaces to the wellness practices—is designed to be fully
              inclusive and deeply restorative.
            </p>
            <p className="text-lg mb-8 text-white/80 max-w-3xl mx-auto">
              Led by Dr. Dédé Tetsubayashi and a team of wellness experts, these retreats combine evidence-based
              practices with personalized care, creating transformative experiences that honor your unique needs and
              goals.
            </p>
          </div>
        </div>
      </section>

      {/* Retreat Experiences */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-4 bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
            Retreat Experiences
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            Transformative wellness journeys designed for leaders who deserve rest, renewal, and inclusive care.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Executive Retreats */}
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  Executive Retreats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Customized wellness experiences for C-suite and senior leadership teams. Designed to address burnout,
                  restore clarity, and enhance strategic thinking through culturally-informed rest practices.
                </p>
                <ul className="text-left space-y-2 mb-6 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 mt-1.5 flex-shrink-0" />
                    Private group bookings (10-20 participants)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 mt-1.5 flex-shrink-0" />
                    Customized programming
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 mt-1.5 flex-shrink-0" />
                    Leadership development integration
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 mt-1.5 flex-shrink-0" />
                    Post-retreat integration support
                  </li>
                </ul>
                <Link href="/retreats-advocacy/executive-wellness">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:opacity-90">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Luxury Wellness */}
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  Luxury Wellness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Premium wellness retreats in Japan combining traditional healing practices with modern luxury.
                  Experience transformative rest in culturally-rich environments designed for deep restoration.
                </p>
                <ul className="text-left space-y-2 mb-6 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 mt-1.5 flex-shrink-0" />
                    Seasonal retreat experiences
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 mt-1.5 flex-shrink-0" />
                    Traditional onsen healing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 mt-1.5 flex-shrink-0" />
                    Cultural immersion
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 mt-1.5 flex-shrink-0" />
                    Small intimate groups (8-12 participants)
                  </li>
                </ul>
                <Link href="/retreats-advocacy/luxury-wellness">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:opacity-90">
                    Explore Retreats
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Disability Retreats */}
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  Disability Retreats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Fully accessible wellness experiences designed specifically for individuals with disabilities. Every
                  aspect thoughtfully curated to ensure comfort, dignity, and transformative healing.
                </p>
                <ul className="text-left space-y-2 mb-6 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 mt-1.5 flex-shrink-0" />
                    WCAG AAA accessible environments
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 mt-1.5 flex-shrink-0" />
                    Adaptive wellness practices
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 mt-1.5 flex-shrink-0" />
                    Specialized support staff
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 mt-1.5 flex-shrink-0" />
                    Dignity-centered care
                  </li>
                </ul>
                <Link href="/retreats-advocacy/disability-retreats">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:opacity-90">
                    Discover Options
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Corporate Partnerships */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-4 bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
            Corporate Partnerships
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            Bring transformative wellness experiences to your organization. Our corporate partnerships offer customized
            retreat experiences, executive wellness programs, and team restoration initiatives designed for
            high-performing teams.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Executive Wellness Programs */}
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center mb-4">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl">Executive Wellness Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Customized wellness experiences for C-suite and senior leadership teams addressing burnout and
                  enhancing strategic thinking.
                </p>
              </CardContent>
            </Card>

            {/* Team Wellness Initiatives */}
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl">Team Wellness Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Multi-day wellness experiences strengthening team cohesion while providing deep restoration for
                  high-performing teams and ERG groups.
                </p>
              </CardContent>
            </Card>

            {/* Wellness Sponsorships */}
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center mb-4">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl">Wellness Sponsorships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sponsor employee participation in public retreats as part of DEI, wellness, or professional
                  development initiatives demonstrating commitment to employee wellbeing.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Box */}
          <div className="mt-12 max-w-3xl mx-auto bg-gradient-to-br from-purple-50 to-cyan-50 border-l-4 border-purple-600 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Partner With Us
            </h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Interested in bringing transformative wellness to your organization? Let's discuss customized corporate
              wellness solutions.
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:opacity-90 px-8 py-3 text-lg">
                Schedule Corporate Consultation
              </Button>
            </Link>
            <p className="mt-4 text-sm text-gray-500 italic">
              Trusted by Fortune 500 companies and leading healthcare organizations
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
