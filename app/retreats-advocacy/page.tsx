import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Rest as Resistance Retreats | Luxury Wellness in Japan",
  description:
    "Experience transformative luxury wellness retreats in Japan. Rest as Resistance retreats for Black women and allies featuring onsen, meditation, and cultural immersion.",
  alternates: {
    canonical: "https://dr-dede.com/retreats-advocacy",
  },
}

export default function RetreatsAdvocacyHubComprehensive() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Standard Branding #1 */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: "url(/cOGqHCdiwvzOjN9thWnU3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(147,51,234,0.95) 0%, rgba(168,85,247,0.95) 50%, rgba(34,211,238,0.95) 100%)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
            <div className="h-5 w-5 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 flex items-center justify-center">
              <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <span className="text-sm font-semibold text-white">Transformative Experiences</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-6 tracking-tight">
            Retreats & Advocacy
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto mb-8 leading-relaxed">
            Luxury wellness experiences and disability advocacy programs that transform individuals and organizations
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/retreats-advocacy/cherry-blossom-2026">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-md">
                Explore Retreats
              </Button>
            </Link>
            <Link href="/retreats-advocacy/executive-wellness">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-md bg-transparent"
              >
                Corporate Partnerships
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "25+", label: "Women Served" },
              { number: "10+", label: "Retreats Completed" },
              { number: "100%", label: "Would Return" },
              { number: "15+", label: "Years Japan Expertise" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Wellness Designed for Everyone</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Our wellness retreats are founded on the principle that true luxury means accessibility for all.
                  Every aspect of the experience—from the physical spaces to the wellness practices—is designed to be
                  fully inclusive and deeply restorative.
                </p>
                <p>
                  Led by Dr. Dédé Tetsubayashi and a team of wellness experts, these retreats combine evidence-based
                  practices with personalized care, creating transformative experiences that honor your unique needs
                  and goals.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/owqCqtxXILQUpUVhJUngi.jpg"
                alt="Diverse corporate retreat with inclusive team wellness activities"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2026 Seasonal Calendar */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            2026 Seasonal Offerings
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Four transformative wellness experiences designed for rest, healing, and cultural immersion in Japan's most
            sacred spaces.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                season: "Spring",
                title: "Cherry Blossom 2026",
                dates: "April 8-18, 2026",
                duration: "7-10 days",
                price: "From $12,500",
                gradient: "from-pink-500 to-rose-400",
                link: "/retreats-advocacy/cherry-blossom-2026",
                image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=400",
              },
              {
                season: "Summer",
                title: "Summer Solstice 2026",
                dates: "June 20-27, 2026",
                duration: "7 days",
                price: "$13,500",
                gradient: "from-yellow-500 to-orange-400",
                link: "/retreats-advocacy/summer-solstice-2026",
                image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400&q=80",
              },
              {
                season: "Fall",
                title: "Autumn Equinox 2026",
                dates: "Sept 22 - Oct 2, 2026",
                duration: "11 days",
                price: "$14,500",
                gradient: "from-orange-500 to-red-400",
                link: "/retreats-advocacy/autumn-equinox-2026",
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400",
              },
              {
                season: "Winter",
                title: "Winter Solstice 2026",
                dates: "December 14-29, 2026",
                duration: "13-16 days",
                price: "From $21,500",
                gradient: "from-blue-500 to-cyan-400",
                link: "/retreats-advocacy/winter-solstice-2026",
                image: "https://images.unsplash.com/photo-1514477917009-389c76a86b68?w=400",
              },
            ].map((retreat, i) => (
              <Card key={i} className="border-gray-200 hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={retreat.image || "/placeholder.svg"}
                    alt={retreat.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div
                    className={`inline-block px-3 py-1 rounded-md bg-gradient-to-r ${retreat.gradient} text-white text-sm mb-3 font-medium`}
                  >
                    {retreat.season}
                  </div>
                  <CardTitle className="text-xl font-semibold mb-2">{retreat.title}</CardTitle>
                  <CardDescription className="text-gray-600 space-y-1">
                    <div>{retreat.dates}</div>
                    <div className="text-sm">{retreat.duration}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                    {retreat.price}
                  </div>
                  <Link href={retreat.link}>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:opacity-90 rounded-md">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Retreat Experiences */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Retreat Experiences</h2>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Transformative wellness journeys designed for leaders who deserve rest, renewal, and inclusive care.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Executive Retreats",
                description:
                  "Customized wellness experiences for C-suite and senior leadership teams. Designed to address burnout, restore clarity, and enhance strategic thinking through culturally-informed rest practices.",
                features: [
                  "Private group bookings (10-20 participants)",
                  "Customized programming",
                  "Leadership development integration",
                  "Post-retreat integration support",
                ],
                link: "/retreats-advocacy/executive-wellness",
                image: "/diverse-executives-networking-at-luxury-event.jpg",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                  </svg>
                ),
              },
              {
                title: "Luxury Wellness",
                description:
                  "Premium wellness retreats in Japan combining traditional healing practices with modern luxury. Experience transformative rest in culturally-rich environments designed for deep restoration.",
                features: [
                  "Seasonal retreat experiences",
                  "Traditional onsen healing",
                  "Cultural immersion",
                  "Small intimate groups (8-12 participants)",
                ],
                link: "/retreats-advocacy/luxury-wellness",
                image: "/cOGqHCdiwvzOjN9thWnU3.jpg",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                ),
              },
              {
                title: "Disability Retreats",
                description:
                  "Fully accessible wellness experiences designed specifically for individuals with disabilities. Every aspect thoughtfully curated to ensure comfort, dignity, and transformative healing.",
                features: [
                  "WCAG AAA accessible environments",
                  "Adaptive wellness practices",
                  "Specialized support staff",
                  "Dignity-centered care",
                ],
                link: "/retreats-advocacy/disability-retreats",
                image: "/serene-wellness-retreat-with-accessible-spa-facilities.jpg",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                ),
              },
            ].map((retreat, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={retreat.image || "/placeholder.svg"}
                    alt={retreat.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center mb-4">
                    {retreat.icon}
                  </div>
                  <CardTitle className="text-xl mb-3">{retreat.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{retreat.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {retreat.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={retreat.link}>
                    <Button variant="outline" className="w-full rounded-md bg-transparent">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Photo Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80",
                alt: "Nature meditation retreat in peaceful forest setting",
              },
              {
                src: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&q=80",
                alt: "Cultural wellness ceremony with traditional elements",
              },
              {
                src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80",
                alt: "Forest bathing shinrin-yoku experience",
              },
              {
                src: "/cherry-blossoms-temple2.jpg",
                alt: "Inclusive outdoor wellness gathering with diverse participants",
              },
            ].map((photo, i) => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Partnerships Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Corporate Partnerships</h2>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Bring transformative wellness experiences to your organization. Our corporate partnerships offer customized
            retreat experiences, executive wellness programs, and team restoration initiatives designed for
            high-performing teams.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Executive Wellness Programs",
                description:
                  "Customized wellness experiences for C-suite and senior leadership teams addressing burnout and enhancing strategic thinking.",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                  </svg>
                ),
              },
              {
                title: "Team Wellness Programs",
                description:
                  "Multi-day wellness experiences strengthening team cohesion while providing deep restoration for high-performing teams and ERG groups.",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                ),
              },
              {
                title: "Wellness Sponsorships",
                description:
                  "Sponsor employee participation in public retreats as part of DEI, wellness, or professional development initiatives demonstrating commitment to employee wellbeing.",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 10l-4-4h3V5h2v3h3l-4 4z" />
                  </svg>
                ),
              },
            ].map((program, i) => (
              <Card key={i} className="p-8 hover:shadow-lg transition-shadow text-center">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center mx-auto mb-4">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                <p className="text-gray-700 leading-relaxed">{program.description}</p>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-12 text-center p-8 bg-gradient-to-br from-purple-50 to-cyan-50 rounded-lg border border-purple-100">
            <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Partner With Us
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Interested in bringing transformative wellness to your organization? Let's discuss customized corporate
              wellness solutions.
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:opacity-90 px-8 py-3 rounded-md">
                Schedule Corporate Consultation
              </Button>
            </Link>
            <p className="mt-4 text-sm text-gray-500 italic">
              Trusted by Fortune 500 companies and leading healthcare organizations
            </p>
          </div>
        </div>
      </section>

      {/* Disability Advocacy Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Disability Advocacy Programs</h2>

          <div className="space-y-8">
            {[
              {
                title: "Corporate Accessibility Audits",
                description:
                  "Comprehensive assessments of your organization's accessibility practices, from digital products to physical spaces.",
                outcomes: [
                  "Detailed accessibility audit report",
                  "Prioritized remediation roadmap",
                  "Compliance gap analysis",
                  "Implementation support",
                ],
              },
              {
                title: "Inclusive Culture Transformation",
                description:
                  "Strategic programs to build truly inclusive organizations where disability is valued as a driver of innovation.",
                outcomes: [
                  "Leadership training programs",
                  "Employee resource group support",
                  "Policy & practice recommendations",
                  "Ongoing advisory support",
                ],
              },
              {
                title: "Accessibility Training & Workshops",
                description:
                  "Hands-on training for teams to build accessibility into every stage of product development and service delivery.",
                outcomes: [
                  "Customized training curriculum",
                  "Practical implementation tools",
                  "Team certification programs",
                  "Ongoing consultation access",
                ],
              },
            ].map((program, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center shadow-lg">
                      <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{program.description}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">What You'll Receive:</h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {program.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span className="text-sm text-gray-800">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Retreats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Why Choose Our Retreats</h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                title: "Fully Accessible",
                description:
                  "Every retreat is designed with accessibility at the forefront, ensuring all participants can fully engage and benefit.",
              },
              {
                title: "Luxury Experience",
                description:
                  "Premium accommodations, gourmet dining, and world-class amenities create an unforgettable experience.",
              },
              {
                title: "Expert Facilitation",
                description:
                  "Led by Dr. Dédé and a team of specialists in wellness, leadership, and inclusive design.",
              },
              {
                title: "Transformative Impact",
                description:
                  "Participants leave with actionable strategies, renewed energy, and a commitment to inclusive excellence.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center mb-4 shadow-lg">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Participant Testimonials</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "The executive retreat was transformative. I returned to my organization with a renewed commitment to inclusive leadership and practical strategies to implement immediately.",
                author: "Jennifer Martinez",
                role: "CEO, Healthcare Technology Company",
              },
              {
                quote:
                  "As a wheelchair user, I've never experienced a luxury retreat that was truly accessible. This was life-changing—I felt seen, valued, and empowered.",
                author: "David Thompson",
                role: "VP of Engineering, Fortune 500 Company",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <p className="text-gray-800 italic mb-6 leading-relaxed text-lg">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Rest as Resistance
          </h2>
          <blockquote className="text-2xl md:text-3xl italic text-gray-700 mb-4">
            "Rest is not a luxury. It is resistance."
          </blockquote>
          <p className="text-sm text-gray-600">— Tricia Hersey, The Nap Ministry</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Experience?</h2>
          <p className="text-xl text-white/95 mb-8 leading-relaxed">
            Inquire about our luxury retreats and advocacy programs to create lasting change for individuals and
            organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-semibold shadow-xl">
                Inquire About Retreats
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-3 rounded-md text-lg font-semibold"
              >
                Request Advocacy Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* NO FOOTER - Handled by live site */}
    </div>
  )
}
