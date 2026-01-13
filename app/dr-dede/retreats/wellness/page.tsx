import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Briefcase, HandHeart } from "lucide-react"

export const metadata: Metadata = {
  title: "Luxury Wellness Retreats | Dr. Dédé Tetsubayashi",
  description:
    "Transformative wellness experiences in Japan for Black women leaders. Rest as Resistance retreats, corporate wellness partnerships, and philanthropy-sponsored luxury disability wellness programs.",
}

export default function WellnessRetreatsPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#667eea]/95 via-[#764ba2]/95 to-[#f093fb]/95 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge
              className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm uppercase tracking-wider text-xs"
              variant="outline"
            >
              Holistic Wellness & Rejuvenation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white drop-shadow-lg">
              Luxury Wellness Retreats
            </h1>
            <p className="text-xl text-white/95 mb-8 text-pretty leading-relaxed max-w-3xl mx-auto drop-shadow">
              Transformative wellness experiences that honor your whole self—mind, body, and spirit—in luxury settings
              designed for complete accessibility and comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/40"
              >
                <Link href="/contact">
                  Book Your Retreat
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="#corporate">Explore Corporate Offerings</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] bg-clip-text text-transparent">
            Wellness Designed for Everyone
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6 text-lg max-w-3xl mx-auto">
            Our wellness retreats are founded on the principle that true luxury means accessibility for all. Every
            aspect of the experience—from the physical spaces to the wellness practices—is designed to be fully
            inclusive and deeply restorative.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
            Led by Dr. Dédé Tetsubayashi and a team of wellness experts, these retreats combine evidence-based practices
            with personalized care, creating transformative experiences that honor your unique needs and goals.
          </p>
        </div>
      </section>

      {/* Rest as Resistance Philosophy */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-cyan-50/50 to-purple-50/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] bg-clip-text text-transparent">
            Rest as Resistance Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-l-4 border-l-transparent hover:border-l-[#06b6d4] transition-all duration-300">
              <CardHeader>
                <div className="text-4xl mb-4">✊🏾</div>
                <CardTitle>Rest as Revolutionary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  In a world that demands constant productivity, rest becomes an act of resistance. For Black women
                  leaders carrying the weight of systemic barriers, choosing rest is revolutionary—a reclamation of
                  time, energy, and sovereignty over your own well-being.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-l-4 border-l-transparent hover:border-l-[#8b5cf6] transition-all duration-300">
              <CardHeader>
                <div className="text-4xl mb-4">💚</div>
                <CardTitle>Culturally Specific Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rest as Resistance centers Black women's experiences, addressing the unique intersections of race,
                  gender, and leadership. Every aspect—from the curriculum to the community—is designed to honor your
                  specific needs, challenges, and triumphs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-l-4 border-l-transparent hover:border-l-[#f093fb] transition-all duration-300">
              <CardHeader>
                <div className="text-4xl mb-4">🏔️</div>
                <CardTitle>Japan as Medicine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Japan's centuries-old wellness traditions—onsen healing, forest bathing, mindful rituals—offer
                  medicine for body and spirit. Combined with intentional rest practices, these experiences create space
                  for profound transformation and renewal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Retreats Archive */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-[#f3f4f6]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-balance bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] bg-clip-text text-transparent">
            Past Retreats
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Since 2023, Rest as Resistance has guided 25+ Black women leaders through transformative wellness
            experiences across Japan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Autumn Colors Edition 2024",
                dates: "October 8-18, 2024",
                locations: "Tokyo · Kamakura · Beppu · Osaka · Miyajima",
                days: "10 days",
              },
              {
                title: "Early Spring Renewal 2024",
                dates: "March 15-22, 2024",
                locations: "Tokyo · Nagano",
                days: "7 days",
              },
              {
                title: "Winter Solstice 2023",
                dates: "December 10-18, 2023",
                locations: "Ueda · Nagano Region",
                days: "8 days",
              },
              {
                title: "Cherry Blossom Immersion 2024",
                dates: "April 2-12, 2024",
                locations: "Kyoto · Nara · Kamakura",
                days: "10 days",
              },
              {
                title: "Summer Healing 2024",
                dates: "July 15-24, 2024",
                locations: "Hokkaido · Sapporo · Furano",
                days: "9 days",
              },
              {
                title: "Autumn Equinox 2023",
                dates: "September 18-26, 2023",
                locations: "Tokyo · Hakone · Kyoto",
                days: "8 days",
              },
            ].map((retreat, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-sm opacity-80">
                <CardHeader>
                  <Badge className="mb-2 bg-[#06b6d4] text-white w-fit text-xs" variant="default">
                    COMPLETED
                  </Badge>
                  <CardTitle className="text-lg">{retreat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{retreat.dates}</p>
                  <p className="text-sm text-muted-foreground mb-2">{retreat.locations}</p>
                  <p className="text-sm font-medium text-muted-foreground">{retreat.days}</p>
                  <p className="text-xs text-muted-foreground mt-3 italic">Sold out</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Want to hear about past participants' experiences? Email us for testimonials and retreat highlights.
            </p>
            <Button asChild variant="outline" size="sm">
              <a href="mailto:dede@incluu.us">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* 2026 Retreat Calendar */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-balance bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] bg-clip-text text-transparent">
            2026 Retreat Calendar
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Three seasonal retreats, each designed around Japan's natural rhythms and your need for restoration.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-purple-200">
              <CardHeader>
                <Badge className="mb-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white w-fit" variant="default">
                  SPRING
                </Badge>
                <CardTitle className="text-xl">Cherry Blossom Edition</CardTitle>
                <p className="text-sm text-muted-foreground">April 7-17, 2026</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Experience the magic of sakura season. A transformative 10-day spring retreat combining rest practices
                  with Japan's most celebrated time of year.
                </p>
                <p className="text-sm font-semibold mb-2">From $11,500</p>
                <Button asChild size="sm" className="w-full bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4]">
                  <a href="https://rar.dr-dede.com" target="_blank" rel="noopener noreferrer">
                    View Details
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-orange-200">
              <CardHeader>
                <Badge
                  className="mb-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white w-fit"
                  variant="default"
                >
                  SUMMER
                </Badge>
                <CardTitle className="text-xl">Summer Solstice Edition</CardTitle>
                <p className="text-sm text-muted-foreground">June 20-27, 2026</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Experience Hokkaido's lavender fields in bloom during the longest day of the year. 7-day intensive
                  with outdoor onsen and summer solstice rituals.
                </p>
                <p className="text-sm font-semibold mb-2">Pricing TBD</p>
                <Button asChild size="sm" variant="outline" className="w-full bg-transparent">
                  <Link href="/dr-dede/retreats/wellness/summer-solstice">Join Interest List</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-indigo-200">
              <CardHeader>
                <Badge className="mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-fit" variant="default">
                  WINTER · FLAGSHIP
                </Badge>
                <CardTitle className="text-xl">Winter Solstice Edition</CardTitle>
                <p className="text-sm text-muted-foreground">December 14-22, 2026</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Our flagship 9-day winter intensive. Snow-covered temples, mountain onsen, and the sacred winter
                  solstice ceremony marking darkness transforming to light.
                </p>
                <p className="text-sm font-semibold mb-2">From $15,500</p>
                <Button asChild size="sm" variant="outline" className="w-full bg-transparent">
                  <Link href="/dr-dede/retreats/wellness/winter-solstice">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            🌸 Early bird pricing available for Winter Solstice through September 15, 2026
          </p>
        </div>
      </section>

      {/* 2027 Retreat Calendar */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-cyan-50/50 to-purple-50/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-balance bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] bg-clip-text text-transparent">
            2027 Retreat Calendar
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Booking opens June 2026 with 12-month advance reservations. Join our interest list for early access to dates
            and early bird pricing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <Badge className="mb-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white w-fit" variant="default">
                  SPRING
                </Badge>
                <CardTitle>Cherry Blossom Edition 2027</CardTitle>
                <p className="text-sm text-muted-foreground">April 6-16, 2027 (tentative)</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Our signature spring retreat returns. Experience cherry blossoms at peak bloom with onsen healing and
                  cultural immersion.
                </p>
                <p className="text-sm font-semibold mb-2">From $11,500 (2027 pricing)</p>
                <p className="text-xs text-muted-foreground mb-4">Booking opens June 2026</p>
                <Button asChild size="sm" variant="outline" className="w-full bg-transparent">
                  <Link href="/contact">Join Interest List</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-amber-200">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white" variant="default">
                    SUMMER
                  </Badge>
                  <Badge className="bg-green-600 text-white" variant="default">
                    NEW
                  </Badge>
                </div>
                <CardTitle>Culinary Journey Edition 2027</CardTitle>
                <p className="text-sm text-muted-foreground">July 10-20, 2027 (tentative)</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Explore Japan's culinary traditions through hands-on experiences. Sushi-making workshops, kaiseki
                  dinners with chefs, local market tours, and regional specialty tastings.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1 mb-4">
                  <li>• Sushi-making masterclass in Tokyo</li>
                  <li>• Farm-to-table countryside experiences</li>
                  <li>• Private chef-led kaiseki preparations</li>
                  <li>• Regional specialty deep-dives</li>
                </ul>
                <p className="text-sm font-semibold mb-2">Pricing TBD</p>
                <p className="text-xs text-muted-foreground mb-4">Details announced Q2 2026</p>
                <Button asChild size="sm" variant="outline" className="w-full bg-transparent">
                  <Link href="/contact">Join Interest List</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-green-200">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-gradient-to-r from-orange-600 to-red-600 text-white" variant="default">
                    AUTUMN
                  </Badge>
                  <Badge className="bg-green-600 text-white" variant="default">
                    NEW
                  </Badge>
                </div>
                <CardTitle>Tea & Sake Essence Edition 2027</CardTitle>
                <p className="text-sm text-muted-foreground">October 5-15, 2027 (tentative)</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Immerse yourself in Japan's revered traditions of ryokucha (green tea) and sake. Visit plantations,
                  participate in ceremonies, tour breweries, and learn from masters.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1 mb-4">
                  <li>• Tea plantation visits and harvesting</li>
                  <li>• Traditional tea ceremony training</li>
                  <li>• Sake brewery tours with tastings</li>
                  <li>• Pairing workshops with seasonal cuisine</li>
                </ul>
                <p className="text-sm font-semibold mb-2">Pricing TBD</p>
                <p className="text-xs text-muted-foreground mb-4">Details announced Q2 2026</p>
                <Button asChild size="sm" variant="outline" className="w-full bg-transparent">
                  <Link href="/contact">Join Interest List</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <Badge className="mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-fit" variant="default">
                  WINTER · FLAGSHIP
                </Badge>
                <CardTitle>Winter Solstice Edition 2027</CardTitle>
                <p className="text-sm text-muted-foreground">December 13-28, 2027 (tentative)</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Our flagship 16-day winter immersion returns. Snow-covered temples, mountain onsen, winter solstice
                  ceremony, and Japan's most contemplative season.
                </p>
                <p className="text-sm font-semibold mb-2">From $20,000 (estimated 2027 pricing)</p>
                <p className="text-xs text-muted-foreground mb-4">Booking opens Summer 2026</p>
                <Button asChild size="sm" variant="outline" className="w-full bg-transparent">
                  <Link href="/contact">Join Interest List</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Be First to Know About 2027 Retreats</h3>
              <p className="text-center mb-6 text-white/90">
                Join our exclusive interest list for early access to 2027 booking, special early bird pricing, and first
                choice of dates.
              </p>
              <div className="max-w-md mx-auto">
                <Button asChild size="lg" className="w-full bg-white text-purple-600 hover:bg-gray-100">
                  <Link href="/contact">Join Interest List</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Corporate Wellness Partnerships */}
      <section id="corporate" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-balance bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] bg-clip-text text-transparent">
            Corporate Wellness Partnerships
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Bring Rest as Resistance to your organization. We partner with companies committed to the holistic
            well-being of their teams, offering executive retreats, wellness sponsorships, and customized programs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-purple-50 to-cyan-50">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Executive Retreats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Sponsor wellness retreats for your senior leadership team. Intensive healing experiences designed for
                  executives carrying high-stakes responsibilities.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Leadership renewal programs</li>
                  <li>• Burnout prevention strategies</li>
                  <li>• Team integration sessions</li>
                  <li>• ROI: Improved performance & retention</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-50 to-blue-50">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Team Wellness Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Custom wellness experiences for your entire team. From day retreats to multi-day immersions, we design
                  programs that fit your organization's needs.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Customizable duration & format</li>
                  <li>• On-site or destination options</li>
                  <li>• Facilitated group discussions</li>
                  <li>• Measurable wellness outcomes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <HandHeart className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Wellness Sponsorships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Sponsor retreat scholarships for underrepresented leaders. Demonstrate your commitment to equity and
                  well-being through philanthropy that creates lasting impact.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Full or partial retreat sponsorships</li>
                  <li>• Tax-deductible contributions</li>
                  <li>• Impact reporting & recognition</li>
                  <li>• Support disability & wellness equity</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4]">
              <Link href="/contact">
                Inquire About Corporate Partnerships
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-cyan-50/50 to-purple-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/serene-wellness-retreat-with-accessible-spa-facilities.jpg"
                alt="Luxury Wellness Retreat"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Wellness Designed for Everyone</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our wellness retreats are founded on the principle that true luxury means accessibility for all. Every
                aspect of the experience—from the physical spaces to the wellness practices—is designed to be fully
                inclusive and deeply restorative.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Led by Dr. Dédé Tetsubayashi and a team of wellness experts, these retreats combine evidence-based
                practices with personalized care, creating transformative experiences that honor your unique needs and
                goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Retreat */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-purple-600 to-cyan-600 text-white border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <Badge className="mb-4 bg-white/20 text-white border-white/30 w-fit" variant="outline">
                    Featured Retreat
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Bloom Into Rest — Japan 2026</h2>
                  <p className="text-lg mb-4 opacity-90 leading-relaxed">
                    A transformative spring retreat during Japan's legendary cherry blossom season. Experience renewal
                    and liberation through onsen healing, forest bathing, and mindful restoration in peak sakura bloom.
                  </p>
                  <p className="text-base mb-6 opacity-90 leading-relaxed">
                    Journey through Tokyo, Kyoto, Hakone, and the Japanese Alps during April's magical hanami
                    season—thoughtfully designed for women executives reclaiming rest as a sacred right.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="bg-white text-purple-600 hover:bg-gray-100 w-fit"
                  >
                    <a href="https://rar.dr-dede.com" target="_blank" rel="noopener noreferrer">
                      Learn More About Rest as Resistance
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
                <div className="relative h-64 md:h-auto min-h-[400px]">
                  <Image
                    src="/japanese-temple-pagoda-surrounded-by-pink-cherry-b.jpg"
                    alt="Bloom Into Rest - Japan Cherry Blossom Retreat 2026"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Japanese retreat imagery grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/japanese-hot-spring-onsen-with-cherry-blossoms-sak.jpg"
                alt="Onsen with Cherry Blossoms"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/traditional-japanese-ryokan-garden-with-pink-cherr.jpg"
                alt="Ryokan Garden in Spring"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/mount-fuji-with-pink-cherry-blossoms-sakura-foregr.jpg"
                alt="Mount Fuji with Cherry Blossoms"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Experience */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-cyan-50/50 to-purple-50/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-balance bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] bg-clip-text text-transparent">
            What You'll Experience
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Every retreat includes these core elements designed for deep restoration and transformation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "♨️",
                title: "Onsen Healing",
                description:
                  "Daily hot spring rituals in Japan's legendary mineral waters. Private onsen access for deep relaxation and therapeutic benefits.",
              },
              {
                icon: "🌲",
                title: "Forest Bathing",
                description:
                  "Guided shinrin-yoku experiences in sacred forests. Evidence-based nature immersion for stress reduction and immune support.",
              },
              {
                icon: "🍱",
                title: "Nourishment",
                description:
                  "Seasonal kaiseki cuisine and traditional Japanese meals. Every dish honors your dietary needs and cultural preferences.",
              },
              {
                icon: "🧘🏾‍♀️",
                title: "Mindful Movement",
                description:
                  "Gentle yoga, meditation, and somatic practices. Adapted for all abilities with trauma-informed facilitation.",
              },
              {
                icon: "🏨",
                title: "Luxury Accommodations",
                description:
                  "Traditional ryokan and modern hotels with full accessibility. Private rooms with thoughtful design and comfort.",
              },
              {
                icon: "🎌",
                title: "Cultural Immersion",
                description:
                  "Temple visits, tea ceremonies, and local experiences. Respectful engagement with Japanese traditions and communities.",
              },
              {
                icon: "✨",
                title: "Restorative Practices",
                description:
                  "Intentional rest, slow mornings, and unscheduled time. Permission to simply be without productivity pressure.",
              },
              {
                icon: "🤝",
                title: "Community & Connection",
                description:
                  "Intimate groups (8-12 participants). Facilitated discussions. Shared experiences. Lasting professional relationships.",
              },
            ].map((offering, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <div className="text-3xl mb-2">{offering.icon}</div>
                  <CardTitle className="text-lg">{offering.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{offering.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-cyan-50/50 to-purple-50/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance">
            Luxury Accessible Accommodations
          </h2>

          <Card className="bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Thoughtfully Designed Spaces</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span>Private suites with roll-in showers and adjustable features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span>Sensory-friendly quiet spaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span>Accessible outdoor spaces and gardens</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span>State-of-the-art assistive technology</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Personalized Support</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span>24/7 accessibility support staff</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span>Personal care assistance available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span>Customized activity scheduling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span>Medical support coordination</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Meet Your Host */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] bg-clip-text text-transparent">
            Meet Your Host
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
              <Image src="/dr-dede-headshot.jpg" alt="Dr. Dédé Tetsubayashi" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Dr. Dédé Tetsubayashi</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dr. Dédé is a globally recognized expert in AI governance, tech equity, and disability justice. As the
                founder of Rest as Resistance, she combines her expertise in systems change with deep knowledge of
                Japanese wellness traditions to create transformative healing experiences for Black women leaders.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Having lived and worked in Japan for over a decade, Dr. Dédé brings unique cultural fluency and
                accessibility expertise to every retreat. Her work centers the specific needs of multiply-marginalized
                leaders, creating spaces where rest becomes a revolutionary act of self-preservation and community care.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Through Rest as Resistance, Dr. Dédé is building a movement that honors rest as essential—not
                optional—for leaders carrying the weight of systemic change.
              </p>
              <Button asChild variant="outline">
                <Link href="/dr-dede">Learn More About Dr. Dédé</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-[#667eea]/10 via-[#764ba2]/10 to-[#f093fb]/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Begin Your Journey?</h2>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            Whether you're seeking personal renewal or exploring corporate partnerships, we're here to support your path
            to holistic wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4]">
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="mailto:dede@incluu.us">Email Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
