"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Briefcase, HandHeart, Sparkles, Heart, Mountain } from "lucide-react"

export default function ClientWellnessRetreatsPage() {
  return (
    <div className="min-h-screen bg-[#fdfcfb]">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20"
        style={{
          background:
            "linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 50%, rgba(240, 147, 251, 0.2) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-[3px] text-[#667eea] font-semibold mb-4">
            HOLISTIC WELLNESS &amp; REJUVENATION
          </p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Luxury Wellness Retreats
          </h1>
          <p className="text-xl md:text-2xl text-[#4b5563] mb-8 max-w-3xl mx-auto leading-relaxed">
            Transformative wellness experiences that honor your whole self—mind, body, and spirit—in luxury settings
            designed for complete accessibility and comfort.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#calendar"
              className="px-8 py-4 rounded-full text-white text-lg font-medium transition-all hover:scale-105 hover:shadow-xl"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
                boxShadow: "0 4px 20px rgba(102, 126, 234, 0.3)",
              }}
            >
              Book Your Retreat
            </Link>
            <Link
              href="/dr-dede/retreats/partnerships"
              className="px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105"
              style={{
                background: "transparent",
                border: "2px solid #667eea",
                color: "#667eea",
              }}
            >
              Explore Corporate Offerings
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-light mb-8"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Wellness Designed for Everyone
          </h2>
          <div className="space-y-6 text-lg text-[#4b5563] leading-relaxed">
            <p>
              Our wellness retreats are founded on the principle that true luxury means accessibility for all. Every
              aspect of the experience—from the physical spaces to the wellness practices—is designed to be fully
              inclusive and deeply restorative.
            </p>
            <p>
              Led by Dr. Dédé Tetsubayashi and a team of wellness experts, these retreats combine evidence-based
              practices with personalized care, creating transformative experiences that honor your unique needs and
              goals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Retreat */}
      <section
        className="py-20 px-4"
        style={{ background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/japanese-temple-pagoda-surrounded-by-pink-cherry-b.jpg"
                alt="Cherry blossoms at Japanese temple"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white">Featured Retreat</Badge>
              <h2
                className="text-4xl md:text-5xl font-light mb-6"
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Rest as Resistance
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                A luxury healing experience in Japan for women executives reclaiming rest as a right. Bloom into renewal
                during cherry blossom season with onsen rituals, forest bathing, and mindful restoration.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Experience the beauty of sakura season in Tokyo, Kamakura, Beppu, and Miyajima—thoughtfully designed for
                deep rest, community, and liberation.
              </p>
              <Link
                href="https://rar.dr-dede.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white text-lg font-medium transition-all hover:scale-105 hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
                  boxShadow: "0 4px 20px rgba(102, 126, 234, 0.3)",
                }}
              >
                Learn More About Rest as Resistance
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rest as Resistance Philosophy */}
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
            Rest as Resistance
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <Sparkles
                    className="w-8 h-8"
                    style={{
                      background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  />
                ),
                title: "Rest as Revolutionary",
                description:
                  "In a world that profits from exhaustion, rest is a radical act of resistance. We create spaces where slowing down is celebrated, where doing nothing is honored, and where your wellbeing takes center stage.",
              },
              {
                icon: (
                  <Heart
                    className="w-8 h-8"
                    style={{
                      background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  />
                ),
                title: "Culturally Specific Care",
                description:
                  "Your wellness journey should reflect and honor your lived experience. We provide culturally affirming practices, from hair and skincare guidance to spaces that center the unique needs of Black women leaders.",
              },
              {
                icon: (
                  <Mountain
                    className="w-8 h-8"
                    style={{
                      background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  />
                ),
                title: "Japan as Medicine",
                description:
                  "Japan's ancient wellness traditions—onsen healing, forest bathing, mindful eating—offer powerful pathways to restoration. We blend these practices with modern wellness science for holistic healing.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl transition-all hover:shadow-xl"
                style={{ borderLeft: "4px solid transparent", cursor: "pointer" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderLeftColor = "#667eea"
                  e.currentTarget.style.boxShadow = "0 10px 40px rgba(102, 126, 234, 0.15)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderLeftColor = "transparent"
                  e.currentTarget.style.boxShadow = ""
                }}
              >
                <div className="text-[#06b6d4] mb-4">{item.icon}</div>
                <h3 className="text-2xl font-medium mb-4 text-[#1f2937]">{item.title}</h3>
                <p className="text-[#6b7280] leading-relaxed">{item.description}</p>
              </div>
            ))}
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
              <a href="mailto:rar@dr-dede.com">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* 2026 Retreat Calendar */}
      <section id="calendar" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
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
                <p className="text-sm text-muted-foreground">April 8-18, 2026</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Experience the magic of sakura season. A transformative 10-day spring retreat combining rest practices
                  with Japan's most celebrated time of year.
                </p>
                <p className="text-sm font-semibold mb-2">From $12,500</p>
                <Button asChild size="sm" className="w-full bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4]">
                  <Link href="/dr-dede/retreats/wellness/cherry-blossom-2026">View Details</Link>
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
                <p className="text-sm font-semibold mb-2">$13,500</p>
                <Button asChild size="sm" className="w-full bg-gradient-to-r from-[#7cb342] to-[#9ccc65]">
                  <Link href="/dr-dede/retreats/wellness/summer-solstice-2026">Learn More</Link>
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
                <Button asChild size="sm" className="w-full bg-gradient-to-r from-[#0288d1] to-[#06b6d4] text-white">
                  <Link href="/dr-dede/retreats/wellness/winter-solstice-2026">Learn More</Link>
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
                <p className="text-sm font-semibold mb-2">From $12,500 (2027 pricing)</p>
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

      {/* What You'll Experience */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] bg-clip-text text-transparent">
          What You'll Experience
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <Sparkles
                  className="w-8 h-8"
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                />
              ),
              title: "Natural Onsen Healing",
              description:
                "Daily hot spring rituals in volcanic mineral waters. Private and semi-private options available.",
            },
            {
              icon: (
                <Mountain
                  className="w-8 h-8"
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                />
              ),
              title: "Cultural Immersion",
              description:
                "Temple visits, tea ceremonies, and seasonal traditions. Experience Japan through a wellness lens.",
            },
            {
              icon: (
                <Heart
                  className="w-8 h-8"
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                />
              ),
              title: "Rest Practices",
              description: "Guided meditation, somatic healing, and community care. Learn to honor your body's wisdom.",
            },
            {
              icon: (
                <Users
                  className="w-8 h-8"
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                />
              ),
              title: "Intimate Groups",
              description: "10-12 participants maximum. Create meaningful connections with like-minded leaders.",
            },
            {
              icon: (
                <Briefcase
                  className="w-8 h-8"
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                />
              ),
              title: "Accessibility First",
              description: "Fully accessible accommodations, mobility support, and dietary customization.",
            },
            {
              icon: (
                <HandHeart
                  className="w-8 h-8"
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                />
              ),
              title: "Expert Guidance",
              description: "Led by Dr. Dédé Tetsubayashi with local wellness practitioners and cultural guides.",
            },
          ].map((experience, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] p-6 rounded-2xl hover:shadow-xl transition-shadow"
            >
              <div className="text-[#06b6d4] mb-4">{experience.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-[#1f2937]">{experience.title}</h3>
              <p className="text-[#6b7280] leading-relaxed">{experience.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Wellness */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-cyan-50/50 to-purple-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] bg-clip-text text-transparent">
            Corporate Wellness Partnerships
          </h2>
          <p className="text-lg text-[#4b5563] leading-relaxed mb-8">
            Support your team's wellbeing with fully sponsored or subsidized retreat experiences. We design custom
            wellness programs that combine rest, cultural immersion, and leadership development.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Executive Team Retreats",
                description: "Private group experiences for 8-15 leaders",
              },
              {
                title: "Wellness Sponsorships",
                description: "Full or partial sponsorship for individual employees",
              },
              {
                title: "Custom Programs",
                description: "Tailored itineraries aligned with your DEI goals",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-2 text-[#667eea]">{item.title}</h3>
                <p className="text-sm text-[#6b7280]">{item.description}</p>
              </div>
            ))}
          </div>
          <Link
            href="/dr-dede/retreats/partnerships"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
              color: "white",
              boxShadow: "0 4px 20px rgba(102, 126, 234, 0.3)",
            }}
          >
            Inquire About Corporate Partnerships
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Philosophy */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-cyan-50/50 to-purple-50/50">
        <div className="max-w-5xl mx-auto">
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
              <a href="mailto:rar@dr-dede.com">Email Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
