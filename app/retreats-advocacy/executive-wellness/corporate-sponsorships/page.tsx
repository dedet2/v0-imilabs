import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Gift, Users, TrendingUp, Heart, Calendar } from "lucide-react"
import Image from "next/image"

export default function CorporateSponsorshipsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Standard Branding #1 */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl text-white font-light mb-6">Corporate Wellness Sponsorships</h1>
          <p className="text-xl text-white/95 mb-8 leading-relaxed">
            Support your team's well-being through transformative global wellness experiences
          </p>
          <Link href="/contact">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-semibold">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Invest in Your Team's Wellbeing</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Corporate wellness sponsorships allow you to send high-potential leaders and employees to our
                  transformative Rest as Resistance retreats worldwide. This is more than a benefit—it's a strategic
                  investment in leadership development and employee retention.
                </p>
                <p>
                  Sponsorships can be structured as tax-deductible wellness initiatives, DEI programs, or professional
                  development investments, making them accessible through multiple budget channels.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/executive-team-in-strategic-planning-session.jpg"
                alt="Corporate-sponsored inclusive retreat with diverse team members"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Sponsorship Options
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Flexible sponsorship models designed to fit your organization's goals and budget
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Individual Sponsorships",
                description: "Sponsor employees to attend public Rest as Resistance retreats",
                features: [
                  "Tax-deductible contribution",
                  "DEI wellness initiative",
                  "Flexible scheduling",
                  "Per-person investment",
                ],
                icon: Gift,
              },
              {
                title: "Group Sponsorships",
                description: "Send multiple team members to experience collective transformation",
                features: ["Tailored programming", "Team building focus", "Flexible dates", "Group pricing available"],
                icon: Users,
              },
              {
                title: "Annual Partnerships",
                description: "Ongoing wellness support for your organization",
                features: [
                  "Multiple retreat sponsorships",
                  "Priority scheduling",
                  "Custom reporting",
                  "Long-term wellness strategy",
                ],
                icon: Calendar,
              },
            ].map((option, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center mb-4">
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{option.title}</CardTitle>
                  <p className="text-gray-600">{option.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {option.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Why Sponsor Wellness Retreats?</h2>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Wellness retreat sponsorships deliver measurable ROI through improved retention, performance, and engagement.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Performance",
                stat: "23%",
                description: "Increase in productivity post-retreat",
              },
              {
                icon: Heart,
                title: "Burnout",
                stat: "67%",
                description: "Reduction in burnout symptoms",
              },
              {
                icon: Users,
                title: "Retention",
                stat: "4x",
                description: "Improved leadership retention",
              },
              {
                icon: Gift,
                title: "DEI Impact",
                stat: "100%",
                description: "Participants report feeling valued",
              },
            ].map((benefit, i) => (
              <Card key={i} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  {benefit.stat}
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Select Sponsorship Type",
                description:
                  "Choose individual, group, or annual partnership based on your organization's needs and budget.",
              },
              {
                step: "2",
                title: "Choose Retreats",
                description:
                  "Select from our seasonal offerings: Cherry Blossom, Summer Solstice, Autumn Equinox, or Winter Solstice retreats.",
              },
              {
                step: "3",
                title: "Nominate Participants",
                description:
                  "Identify high-potential leaders or teams who would benefit most from the transformative experience.",
              },
              {
                step: "4",
                title: "Complete Sponsorship",
                description:
                  "We handle all logistics—registration, accommodations, travel coordination, and dietary preferences.",
              },
              {
                step: "5",
                title: "Measure Impact",
                description:
                  "Receive post-retreat reports on participant experience and organizational impact metrics.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center text-white font-bold text-lg">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Retreats */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Available Retreat Experiences</h2>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Sponsor employees to attend any of our 2026 seasonal wellness retreats in Japan
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Cherry Blossom 2026",
                season: "Spring",
                dates: "April 8-18, 2026",
                price: "From $12,500",
                gradient: "from-pink-500 to-rose-400",
              },
              {
                name: "Summer Solstice 2026",
                season: "Summer",
                dates: "June 20-27, 2026",
                price: "$13,500",
                gradient: "from-yellow-500 to-orange-400",
              },
              {
                name: "Autumn Equinox 2026",
                season: "Fall",
                dates: "Sept 22 - Oct 2, 2026",
                price: "$14,500",
                gradient: "from-orange-500 to-red-400",
              },
              {
                name: "Winter Solstice 2026",
                season: "Winter",
                dates: "December 14-29, 2026",
                price: "From $21,500",
                gradient: "from-blue-500 to-cyan-400",
              },
            ].map((retreat, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`inline-block px-3 py-1 rounded-md bg-gradient-to-r ${retreat.gradient} text-white text-sm mb-3 font-medium`}>
                    {retreat.season}
                  </div>
                  <CardTitle className="text-2xl mb-2">{retreat.name}</CardTitle>
                  <p className="text-gray-600">{retreat.dates}</p>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    {retreat.price}
                  </div>
                  <Link href={`/retreats-advocacy/${retreat.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button variant="outline" className="w-full rounded-md bg-transparent">
                      View Retreat Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="p-8 border-none shadow-xl">
            <p className="text-xl italic text-gray-800 mb-6 leading-relaxed text-center">
              "Sponsoring our leadership team to attend the Rest as Resistance retreat was transformational. The
              investment paid dividends in team cohesion, reduced burnout, and renewed strategic clarity."
            </p>
            <div className="text-center">
              <div className="font-semibold">Michael Chen</div>
              <div className="text-sm text-gray-600">Chief People Officer, Tech Company</div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-light mb-6">Ready to Partner?</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Contact us to discuss custom corporate wellness sponsorship solutions
          </p>
          <Link href="/contact">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-semibold shadow-xl">
              Contact Us About Sponsorships
            </Button>
          </Link>
        </div>
      </section>

      {/* NO FOOTER - Handled by live site */}
    </div>
  )
}
