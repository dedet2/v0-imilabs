import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Heart, Sparkles, Mountain, Waves, Sun, Moon } from "lucide-react"

export default function WellnessRetreatsPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-purple-600/95 via-purple-500/95 to-cyan-400/95 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm" variant="outline">
              Holistic Wellness & Rejuvenation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white drop-shadow-lg">
              Luxury Wellness Retreats
            </h1>
            <p className="text-xl text-white/95 mb-8 text-pretty leading-relaxed max-w-3xl drop-shadow">
              Transformative wellness experiences that honor your whole self—mind, body, and spirit—in luxury settings
              designed for complete accessibility and comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:opacity-90">
                <Link href="#calendar">
                  Book Your Retreat
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/20 bg-transparent"
              >
                <Link href="/dr-dede/retreats/partnerships">Explore Corporate Offerings</Link>
              </Button>
            </div>
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
                    <a
                      href="https://v0-rest-as-resistance-kt19hdfbk-dedet2s-projects.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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

      {/* 2026 Retreat Calendar */}
      <section
        id="calendar"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-purple-50/50 to-cyan-50/50"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-balance">2026 Retreat Calendar</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Four seasonal wellness journeys through Japan, each offering unique cultural immersion and transformative
            rest practices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Cherry Blossom Edition</CardTitle>
                <Badge variant="secondary" className="w-fit">
                  April 8-18, 2026
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Experience Japan's most celebrated season. Witness peak sakura bloom while practicing hanami
                  meditation, onsen healing, and mindful renewal.
                </p>
                <p className="text-2xl font-bold text-purple-600 mb-4">From $12,500</p>
                <Button asChild className="w-full bg-gradient-to-r from-pink-500 to-purple-600">
                  <a
                    href="https://v0-rest-as-resistance-kt19hdfbk-dedet2s-projects.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-yellow-400 to-green-500 flex items-center justify-center mb-4">
                  <Sun className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Summer Solstice in Hokkaido</CardTitle>
                <Badge variant="secondary" className="w-fit">
                  June 20-27, 2026
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Northern Japan's mild summer. Explore lavender fields, Ainu cultural traditions, and pristine natural
                  hot springs in Hokkaido's stunning landscapes.
                </p>
                <p className="text-2xl font-bold text-purple-600 mb-4">$13,500</p>
                <Button asChild className="w-full bg-gradient-to-r from-yellow-500 to-green-600">
                  <Link href="/dr-dede/retreats/wellness/summer-solstice-2026">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center mb-4">
                  <Mountain className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Autumn Leaves in Kyoto</CardTitle>
                <Badge variant="secondary" className="w-fit">
                  November 2026
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Witness spectacular fall foliage in ancient temples. Practice mindful walking through bamboo groves
                  and embrace the art of letting go.
                </p>
                <p className="text-2xl font-bold text-purple-600 mb-4">TBA</p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <a href="mailto:rar@dr-dede.com">
                    Join Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-600 flex items-center justify-center mb-4">
                  <Moon className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Winter Solstice Edition (9-Day)</CardTitle>
                <Badge variant="secondary" className="w-fit">
                  December 14-22, 2026
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Snow country hot springs, winter illuminations, and deep rest during the darkest season. Home by
                  Christmas.
                </p>
                <p className="text-2xl font-bold text-purple-600 mb-4">From $15,500</p>
                <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-cyan-600">
                  <Link href="/retreats-advocacy/winter-solstice-2026">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Experience - with Lucide icons */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance">What You'll Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Onsen Healing",
                desc: "Traditional Japanese hot spring rituals for deep relaxation",
              },
              {
                icon: Sparkles,
                title: "Cultural Immersion",
                desc: "Authentic experiences with local communities and traditions",
              },
              {
                icon: Mountain,
                title: "Nature Connection",
                desc: "Forest bathing and mindful walking in sacred landscapes",
              },
              { icon: Waves, title: "Mindful Practices", desc: "Meditation, breathwork, and restorative movement" },
              {
                icon: Sun,
                title: "Nourishing Cuisine",
                desc: "Seasonal kaiseki meals honoring Japanese culinary arts",
              },
              {
                icon: Moon,
                title: "Rest as Resistance",
                desc: "Reclaiming rest as a radical act of self-preservation",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex h-16 w-16 rounded-full bg-gradient-to-br from-purple-600 to-cyan-400 items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 2027 Calendar Preview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-cyan-50/50 to-purple-50/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-balance">2027 Retreat Calendar</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Early registration opening soon for our 2027 seasonal retreats.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { season: "Cherry Blossom 2027", dates: "April 2027", price: "$12,500" },
              { season: "Summer Solstice 2027", dates: "June 2027", price: "TBA" },
              { season: "Autumn Leaves 2027", dates: "November 2027", price: "TBA" },
              { season: "Winter Solstice 2027", dates: "December 2027", price: "TBA" },
            ].map((retreat, index) => (
              <Card key={index} className="bg-white/90">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{retreat.season}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{retreat.dates}</p>
                  <p className="text-lg font-bold text-purple-600">{retreat.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Partnerships CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Corporate Wellness Partnerships</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Support your women leaders with transformative retreat experiences. Partner with us to sponsor wellness
            opportunities for employees.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-cyan-600">
            <Link href="/dr-dede/retreats/partnerships">
              Inquire About Corporate Partnerships
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-purple-50/50 to-cyan-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We're here to help you find the perfect retreat experience.
          </p>
          <Button asChild size="lg" variant="outline">
            <a href="mailto:rar@dr-dede.com">
              Email Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
