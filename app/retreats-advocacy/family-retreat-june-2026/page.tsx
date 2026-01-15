import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Ticket, Castle, Mountain, Check } from "lucide-react"

export default function FamilyRetreatJune2026Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Rainbow gradient matching HTML */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=1600&width=2400&query=multi-generational+Black+family+grandparents+parents+children+enjoying+Japan+temple+garden)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(16,185,129,0.85) 0%, rgba(59,130,246,0.75) 25%, rgba(245,158,11,0.75) 50%, rgba(236,72,153,0.85) 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-block px-6 py-3 rounded-full bg-white/30 border-2 border-white/50 text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
            Private Family Retreat
          </div>
          <h1
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
            style={{ textShadow: "0 4px 20px rgba(16,185,129,0.5)" }}
          >
            Family Adventure
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-4 opacity-95">Multi-Generational Japan Journey</p>
          <p className="text-xl mb-4 opacity-95">June 8-28, 2026 · Tokyo · Kyoto · Osaka · Hokkaido</p>
          <p className="text-lg max-w-3xl mx-auto mb-10 opacity-95 leading-relaxed">
            A thoughtfully curated three-week family journey through Japan designed for multi-generational travel.
            Experience age-appropriate activities, accessible accommodations, and meaningful moments that bring together
            grandparents, parents, and children.
          </p>
          <a href="mailto:info@dr-dede.com?subject=Family%20Adventure%20June%202026%20Inquiry">
            <Button
              className="px-8 py-4 text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              style={{ background: "linear-gradient(to right, #9333ea 0%, #0891b2 100%)" }}
            >
              Schedule Consultation
            </Button>
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            Creating memories across generations requires thoughtful planning. This exclusive family journey balances
            cultural discovery with fun activities, ensuring every family member—from youngest to oldest—experiences the
            magic of Japan together.
          </p>
        </div>
      </section>

      <section
        className="py-20 px-4"
        style={{
          background:
            "linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(59,130,246,0.05) 50%, rgba(245,158,11,0.08) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-16"
            style={{
              background: "linear-gradient(135deg, #10b981 0%, #3b82f6 33%, #f59e0b 66%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Family-Friendly Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Theme Parks */}
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-0 rounded-2xl">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(/placeholder.svg?height=600&width=600&query=diverse+Black+family+children+grandparents+excited+at+DisneySea+Japan+theme+park)",
                }}
              />
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)" }}
                  >
                    <Ticket className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-600">Theme Parks</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Tokyo DisneySea and 2 full days at Universal Studios Japan with age-appropriate activities for all
                  family members.
                </p>
              </CardContent>
            </Card>

            {/* Cultural Activities */}
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-0 rounded-2xl">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(/placeholder.svg?height=600&width=600&query=Black+grandmother+teaching+grandchildren+Japanese+origami+craft+cultural+activity)",
                }}
              />
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)" }}
                  >
                    <Castle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-600">Cultural Activities</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Traditional crafts workshops, kimono family photos, temple visits, deer feeding in Nara, and hands-on
                  cultural experiences.
                </p>
              </CardContent>
            </Card>

            {/* Nature & Relaxation */}
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-0 rounded-2xl">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(/placeholder.svg?height=600&width=600&query=Black+multi-generational+family+elderly+couple+children+Hokkaido+lavender+fields+Japan)",
                }}
              />
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)" }}
                  >
                    <Mountain className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-600">Nature & Relaxation</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Hokkaido lavender fields, Lake Toya hot springs, scenic cable cars, and accessible accommodations for
                  all ages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-16"
            style={{
              background: "linear-gradient(135deg, #10b981 0%, #3b82f6 33%, #f59e0b 66%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Investment
          </h2>
          <Card className="relative overflow-hidden shadow-xl rounded-3xl border-0 p-8 hover:border-emerald-500 border-2 border-transparent transition-all">
            <div
              className="absolute top-0 left-0 right-0 h-1.5"
              style={{ background: "linear-gradient(to right, #10b981, #3b82f6, #f59e0b, #ec4899)" }}
            />
            <CardContent className="p-4 text-center">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Family Adventure Package</h3>
              <p
                className="text-5xl font-black my-6"
                style={{
                  background: "linear-gradient(to right, #10b981 0%, #3b82f6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Starting at $32,000
              </p>
              <p className="text-gray-500 text-lg mb-8">Family of 4 · Custom quotes for larger groups</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500" /> 20 nights family accommodations
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500" /> Theme park tickets (DisneySea, Universal)
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500" /> All cultural activities & entrance fees
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500" /> Private transportation between cities
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500" /> Family-friendly guides & support
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500" /> Age-appropriate activity planning
                </li>
              </ul>
              <div className="p-4 rounded-xl mb-8" style={{ background: "rgba(16,185,129,0.1)" }}>
                <p className="font-semibold">
                  <strong>Pricing:</strong> Family of 4: $32K | Family of 5-6: $38K | Family of 7+: Custom
                </p>
              </div>
              <a href="mailto:info@dr-dede.com?subject=Family%20Adventure%20June%202026%20Inquiry" className="block">
                <Button
                  className="w-full py-4 text-lg font-bold rounded-lg"
                  style={{ background: "linear-gradient(to right, #9333ea 0%, #0891b2 100%)" }}
                >
                  Schedule Consultation
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        className="py-20 px-4 text-center text-white"
        style={{ background: "linear-gradient(135deg, #10b981 0%, #3b82f6 33%, #f59e0b 66%, #ec4899 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Begin Planning Your Family Adventure</h2>
          <p className="text-xl mb-4">
            Email:{" "}
            <a href="mailto:info@dr-dede.com" className="underline">
              info@dr-dede.com
            </a>
          </p>
          <Link href="/retreats-advocacy">
            <Button
              variant="outline"
              className="mt-4 border-2 border-white text-white hover:bg-white/10 bg-transparent"
            >
              View All Retreats
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
