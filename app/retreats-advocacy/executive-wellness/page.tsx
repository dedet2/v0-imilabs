import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExecutiveWellnessHub() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Standard Branding #1 */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600)",
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
          <h1 className="text-5xl md:text-6xl text-white font-light mb-6">
            Transform Your Leadership Through Rest
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Custom corporate wellness programs and executive retreat sponsorships designed for organizational impact
            and leadership excellence.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/retreats-advocacy/executive-wellness/corporate-partnerships">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-md">
                Corporate Partnerships
              </Button>
            </Link>
            <Link href="/retreats-advocacy/executive-wellness/corporate-sponsorships">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-md bg-transparent"
              >
                Sponsorships
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Two Main Offerings */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Two Pathways to Partner
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Whether you're looking to send employees to existing retreats or create custom experiences for your
            organization, we have a partnership model for you.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Corporate Sponsorships
                </CardTitle>
                <CardDescription className="text-lg">Sponsor employees to attend existing retreats</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-center">
                  Send high-potential leaders to our Rest as Resistance public retreats as an investment in their
                  wellbeing and development. Tax-deductible sponsorship options available.
                </p>
                <ul className="space-y-2">
                  {[
                    "Individual or group sponsorships",
                    "Tax-deductible options",
                    "DEI initiative alignment",
                    "Leadership development ROI",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/retreats-advocacy/executive-wellness/corporate-sponsorships" className="block">
                  <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-md hover:opacity-90">
                    Learn About Sponsorships
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12H12v-2h8v2zm0-4H12v-2h8v2zm0-4H12V9h8v2zm0-4H12V5h8v2z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Corporate Partnerships
                </CardTitle>
                <CardDescription className="text-lg">Custom executive retreat programs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-center">
                  Design bespoke wellness retreats for your executive team or organization. Custom programming, private
                  accommodations, and tailored experiences.
                </p>
                <ul className="space-y-2">
                  {[
                    "Custom retreat design",
                    "Private group experiences",
                    "Executive team building",
                    "Leadership wellness programs",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/retreats-advocacy/executive-wellness/corporate-partnerships" className="block">
                  <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-md hover:opacity-90">
                    Explore Partnerships
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-16 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            The ROI of Executive Wellness
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Increased Performance",
                stat: "23%",
                description: "Average productivity increase after wellness retreat participation",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                  </svg>
                ),
              },
              {
                title: "Reduced Burnout",
                stat: "67%",
                description: "Reduction in burnout symptoms among retreat participants",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                ),
              },
              {
                title: "Better Retention",
                stat: "4x",
                description: "Improved retention of high-performing leaders",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-lg text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    {item.stat}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-light mb-6">Ready to Partner?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how wellness retreats can transform your organization.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-semibold">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      {/* NO FOOTER - Handled by live site */}
    </div>
  )
}
