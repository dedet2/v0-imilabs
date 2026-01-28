import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Mountain, Snowflake, Sparkles, Sun, Users, Waves, ArrowLeft } from "lucide-react"

export default function WinterSolstice2027Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Winter Ice Blue Theme */}
      <section
        className="relative min-h-[95vh] flex items-center justify-center pt-20"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(59,130,246,0.9) 0%, rgba(6,182,212,0.85) 50%, rgba(147,197,253,0.9) 100%), url('/japan-snow2.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <Link
            href="/retreats-advocacy"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Retreats
          </Link>
          <div className="inline-block px-6 py-3 bg-white/25 border-2 border-white/40 rounded-full text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
            Winter 2027 - Extended Journey
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Winter Solstice 2027
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-4 tracking-wide">The Complete Journey</p>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto leading-relaxed">
            Experience our most immersive winter retreat: 16 transformative days embracing the season's stillness. From
            snow-covered hot springs to New Year traditions, this extended journey offers the deepest rest and renewal.
          </p>
          <p className="text-lg font-medium mb-8">December 13-28, 2027 | Tokyo · Snow Country · Kyoto · Premium Ryokan</p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 text-lg font-bold rounded-lg shadow-lg hover:opacity-90 transition-all uppercase tracking-wide">
              Apply Now - From $20,500
            </Button>
          </Link>
          <p className="text-sm mt-4 opacity-90">Early Bird Pricing Available Through March 2027</p>
        </div>
      </section>

      {/* The Experience */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-6"
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #93c5fd 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The Winter Solstice Experience
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            Honor the winter solstice—the longest night and the return of the light—through 16 days of profound
            stillness, cultural immersion, and intentional rest. This extended journey allows time to fully release,
            restore, and emerge renewed.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Snowflake,
                title: "Snow Country Immersion",
                description:
                  "Five nights in Japan's legendary snow country. Daily onsen rituals in mountain hot springs, forest bathing through winter landscapes, and profound quiet.",
                image: "/japan-snow-country.jpg",
              },
              {
                icon: Mountain,
                title: "Sacred Winter Temples",
                description:
                  "Experience Kyoto's most sacred sites in their winter beauty. Four days exploring temples, zen gardens under snow, and traditional tea ceremonies.",
                image: "/lights-snow.jpg",
              },
              {
                icon: Waves,
                title: "Daily Onsen Rituals",
                description:
                  "Morning and evening hot spring practices throughout the journey. Experience yuzu baths on the winter solstice and private onsen time.",
                image: "/winter-onsen-night.jpg",
              },
              {
                icon: Sun,
                title: "Winter Solstice Ceremony",
                description:
                  "Celebrate December 21st with traditional yuzu bath rituals, Ichiyo Raifuku charm ceremony, and seasonal foods honoring the return of light.",
                image: "/winter-solstice-ceremony.jpg",
              },
              {
                icon: Sparkles,
                title: "Winter Illuminations",
                description:
                  "Tokyo and Kyoto transform with spectacular winter light displays. Experience the magic of Japanese winter celebrations.",
                image: "/illuminations.jpg",
              },
              {
                icon: Users,
                title: "Luxury Ryokan Finale",
                description:
                  "Two nights at a premium ryokan with private onsen, spa treatments, and gourmet kaiseki. The perfect culmination of your winter journey.",
                image: "/yuzu-bath-finale.jpg",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-60">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-blue-600">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-16"
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #93c5fd 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            16-Day Itinerary
          </h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Days 1-2: Tokyo Arrival & Recovery (Dec 13-14)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Private transfer to boutique hotel</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Welcome orientation and winter preparation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Gentle introduction to Japanese winter culture</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>First onsen experience in Tokyo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Days 3-4: Tokyo Winter Culture (Dec 15-16)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Imperial Palace gardens in winter beauty</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Meiji Shrine visit and traditional ceremony</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Tea ceremony workshop</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Tsukiji Outer Market food tour</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Winter illuminations viewing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-400">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-blue-600">Days 5-9: Snow Country Deep Rest (Dec 17-21)</CardTitle>
                  <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">Heart of Retreat</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Five nights in mountain onsen town (Nagano region)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Daily hot spring rituals (morning and evening)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Forest bathing in snow-covered landscapes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Traditional kaiseki dinners</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Sake brewery tour and tasting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Snow monkey park visit</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-semibold">December 21: Winter Solstice Ceremony</span>
                  </li>
                  <li className="flex items-start ml-7">
                    <Check className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Yuzu bath ritual and Ichiyo Raifuku charm ceremony</span>
                  </li>
                  <li className="flex items-start ml-7">
                    <Check className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Traditional solstice foods and celebration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Days 10-13: Kyoto Winter Temples (Dec 22-25)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Travel to Kyoto (December 22)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Fushimi Inari shrine exploration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Kinkaku-ji (Golden Pavilion) in winter</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Arashiyama bamboo grove</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Traditional kaiseki experiences</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Winter garden viewing at historic temples</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>December 25: Optional Christmas gathering for those away from family</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-400">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-purple-600">Days 14-15: Premium Ryokan Culmination (Dec 26-27)</CardTitle>
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">Luxury Finale</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Transfer to luxury ryokan (Gora Kadan or similar)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Premium spa treatments included</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Private onsen reservations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Multi-course gourmet kaiseki dinners</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Closing ceremony and integration circle</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Final group reflection and intention setting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Day 16: Tokyo Return & Departure (Dec 28)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Morning return to Tokyo</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Afternoon/evening international departure</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Arrive home December 28 (crossing international date line)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-16"
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #93c5fd 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Investment
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Core Journey</CardTitle>
                <div className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent my-4">
                  $20,500
                </div>
                <p className="text-gray-600">13 Days | December 13-25, 2027</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">12 nights accommodations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">All meals included</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Cultural experiences & activities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Daily onsen access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Winter solstice ceremony</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Ground transportation & airport transfers</span>
                  </li>
                </ul>
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600 mb-2">Depart December 26 - Home before New Year</p>
                  <p className="text-blue-600 font-semibold">Single Occupancy: +$2,900</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-400 shadow-xl relative">
              <div className="absolute top-4 right-4">
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">Featured</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">Complete Experience</CardTitle>
                <div className="text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent my-4">
                  $25,500
                </div>
                <p className="text-gray-600">16 Days | December 13-28, 2027</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 font-semibold">Everything in Core Journey PLUS:</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">3 additional nights (Dec 26-28)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">2 nights premium luxury ryokan</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Premium spa treatments</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Private onsen reservations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Enhanced gourmet kaiseki</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Extended closing ceremony</span>
                  </li>
                </ul>
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600 mb-2">Most immersive RaR experience - Maximum transformation</p>
                  <p className="text-purple-600 font-semibold">Single Occupancy: +$2,600</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Plans */}
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Payment Plans Available</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Pay in Full - Save $550!</h4>
                <p className="text-gray-600">Pay by March 1, 2027</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">3-Month Plan</h4>
                <p className="text-gray-600">Deposit + 2 payments (April & August 2027)</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">6-Month Plan</h4>
                <p className="text-gray-600">Deposit + 5 monthly payments (March-July 2027)</p>
              </div>
              <div className="text-center pt-6">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 text-lg font-bold rounded-lg shadow-lg hover:opacity-90 transition-all uppercase tracking-wide">
                    Apply Now
                  </Button>
                </Link>
                <p className="text-sm text-gray-600 mt-4">
                  $4,200 non-refundable deposit required to secure your spot
                  <br />
                  Final payment due October 1, 2027
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-16"
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #93c5fd 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Why 16 days vs. the 9-day intensive?",
                a: "The 16-day Complete Experience is designed for those who want maximum depth and transformation. The extended timeline allows for fuller nervous system regulation, deeper cultural immersion, and includes a luxury ryokan finale that's not possible in the shorter format. The 9-day intensive (offered in 2026) was designed to end before Christmas; this 16-day journey is perfect for those with flexible schedules or no holiday family obligations.",
              },
              {
                q: "What's included in my retreat investment?",
                a: "Everything except international flights and personal shopping: all accommodations, meals, cultural experiences, daily onsen access, ground transportation, airport transfers, and activities. The Complete Experience also includes spa treatments and private onsen time at the premium ryokan.",
              },
              {
                q: "What's the difference between the Core Journey and Complete Experience?",
                a: "The Core Journey (13 days, $20,500) ends December 25, getting you home before New Year. The Complete Experience (16 days, $25,500) includes 3 additional nights with 2 nights at a premium luxury ryokan, enhanced spa treatments, private onsen access, and an extended closing ceremony.",
              },
              {
                q: "Is this retreat suitable for first-time visitors to Japan?",
                a: "Absolutely. We handle all logistics, provide cultural context, and ensure you feel comfortable navigating Japanese customs and spaces. Many participants are first-time Japan visitors.",
              },
              {
                q: "What's the group size?",
                a: "We limit the retreat to 8-12 participants to ensure intimate group dynamics and personalized attention from Dr. Dede.",
              },
              {
                q: "Do I need to speak Japanese?",
                a: "No. Dr. Dede speaks Japanese fluently and will facilitate all interactions, cultural experiences, and translations throughout the journey.",
              },
              {
                q: "What if I want to come but have concerns about being away during Christmas?",
                a: "We understand! That's why we offer the Core Journey option (13 days) that ends December 25, getting you home in time for New Year celebrations. The Complete Experience is designed for those who either don't celebrate Christmas or have flexibility with family obligations.",
              },
              {
                q: "What's the cancellation policy?",
                a: "Deposits are non-refundable. Cancellations 90+ days before departure receive 50% refund of remaining balance. No refunds within 90 days of departure. We strongly recommend travel insurance.",
              },
            ].map((faq, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
