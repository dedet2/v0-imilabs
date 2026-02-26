"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowLeft, Sparkles, Droplets, Mountain, Sunrise, Heart } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function SummerSolstice2026Page() {
  const [showStripePayment, setShowStripePayment] = useState(false)
  return (
    <div className="min-h-screen bg-white">
      <link rel="canonical" href="https://dr-dede.com/retreats-advocacy/summer-solstice-2026" />

      {/* Hero Section */}
      <section
        className="relative min-h-[95vh] flex items-center justify-center pt-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(79,179,212,0.85) 0%, rgba(155,135,245,0.8) 50%, rgba(110,231,183,0.85) 100%), url('/lavender.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-white/20 rounded-full blur-3xl top-40 left-20 animate-pulse" />
          <div className="absolute w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl bottom-40 right-40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <Link
            href="/retreats-advocacy"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Retreats
          </Link>
          <div className="inline-block px-6 py-3 bg-white/25 border-2 border-white/40 rounded-full text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
            SUMMER SOLSTICE · HOKKAIDO
          </div>
          <h1
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
            style={{ textShadow: "0 4px 20px rgba(8,145,178,0.4), 0 2px 8px rgba(0,0,0,0.2)" }}
          >
            Midnight Sun & Lavender Dreams
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-4 tracking-wide">Summer Solstice in Hokkaido</p>
          <p className="text-xl mb-4 opacity-95 max-w-2xl mx-auto leading-relaxed">
            June 21–27, 2026 · Sapporo · Lake Toya · Furano
          </p>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Experience Japan's northern paradise at peak summer. Seven days of endless daylight, purple lavender fields,
            crystal lakes, and mountain hot springs where nature's rhythm slows time itself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-6 text-lg font-bold rounded-lg shadow-lg hover:opacity-90 transition-all uppercase tracking-wide"
              >
                Reserve Your Spot
              </Button>
            </Link>
            <Button
              size="lg"
              onClick={() => setShowStripePayment(true)}
              className="bg-gradient-to-r from-cyan-600 to-green-500 text-white px-8 py-6 text-lg font-bold rounded-lg shadow-lg hover:opacity-90 transition-all uppercase tracking-wide"
            >
              Secure My Spot!
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-600 leading-relaxed">
            The summer solstice marks the year's longest day—a celebration of light, growth, and vitality. In Hokkaido,
            this magical timing transforms the island into a paradise of lavender fields, pristine lakes, and extended
            golden hours perfect for deep restoration and joyful exploration.
          </p>
        </div>
      </section>

      {/* Experiences with Photos */}
      <section
        className="py-20 px-4"
        style={{ background: "linear-gradient(135deg, #dbeafe 0%, rgba(219,234,254,0.5) 100%)" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-16"
            style={{
              background: "linear-gradient(135deg, #4fb3d4 0%, #9b87f5 50%, #6ee7b7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Summer Healing Experiences
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=600&q=80",
                icon: Sparkles,
                title: "Lavender Fields of Furano",
                description:
                  "Wander through endless purple lavender fields at Farm Tomita. Breathe in healing aromatherapy while capturing moments in Japan's most photographed summer landscape.",
              },
              {
                image: "/95koFZnoIxUhL46ZNu0MS.jpg",
                icon: Droplets,
                title: "Lake Toya Serenity",
                description:
                  "Pristine volcanic caldera lake with crystal-clear waters. Sunset boat rides, lakeside meditation, and stargazing under the midnight sun's extended twilight.",
              },
              {
                image: "/CMkR4NSHlSM7V6A41zEug.jpg",
                icon: Mountain,
                title: "Mountain Onsen Retreats",
                description:
                  "Natural hot springs with panoramic mountain views. Healing volcanic mineral waters surrounded by summer wildflowers and alpine scenery.",
              },
              {
                image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
                icon: Mountain,
                title: "Alpine Nature Walks",
                description:
                  "Gentle forest trails through birch groves and wildflower meadows. Extended daylight hours mean leisurely afternoon hikes without rushing sunset.",
              },
              {
                image: "/Jdmy3-wHyQkp-wzzeq4oA.jpg",
                icon: Sunrise,
                title: "Sunrise Meditation",
                description:
                  "Early morning practices by the lake. Experience the unique energy of solstice sunrise—nature's celebration of maximum light and life force.",
              },
              {
                image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80",
                icon: Heart,
                title: "Rest as Resistance",
                description:
                  "Workshops on seasonal rhythms and rest. Integration circles. Permission to align with nature's peak energy while honoring your need for restoration.",
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
                    <item.icon className="w-6 h-6 text-cyan-600" />
                    <h3 className="text-xl font-bold text-cyan-600">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-4xl font-extrabold text-center mb-16"
            style={{
              background: "linear-gradient(135deg, #4fb3d4 0%, #0891b2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Investment
          </h2>

          <Card className="border-none shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400" />
            <CardContent className="p-10 text-center">
              <h3 className="text-2xl font-bold text-cyan-600 mb-2">Summer Solstice Experience</h3>
              <p className="text-gray-600 mb-4 text-lg">7 Days · Shared Occupancy</p>
              <div
                className="text-5xl font-black mb-6"
                style={{
                  background: "linear-gradient(135deg, #4fb3d4 0%, #0891b2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                $13,500
              </div>
              <ul className="text-left space-y-3 mb-8">
                {[
                  "6 nights premium Hokkaido accommodations",
                  "All meals (breakfast, lunch, dinner)",
                  "Lavender farm visits & guided tours",
                  "Lake Toya boat experiences",
                  "Daily onsen access at ryokans",
                  "All transportation within Hokkaido",
                  "Alpine nature walks & forest bathing",
                  "Summer solstice ceremony",
                  "Rest as Resistance workshops",
                  "Integration circles & support",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-sm text-gray-600 mb-6 p-4 bg-sky-50 rounded-lg">
                <p className="font-semibold">Single Occupancy: +$1,800</p>
                <p className="mt-1">Payment Plans Available: 3-payment option</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-4 text-lg">
                    Reserve Your Spot
                  </Button>
                </Link>
                <Button
                  onClick={() => setShowStripePayment(true)}
                  className="w-full bg-gradient-to-r from-cyan-600 to-green-500 text-white py-4 text-lg"
                >
                  Secure My Spot!
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready for Summer Solstice?</h2>
          <p className="text-xl mb-8 opacity-90">Limited to 10 participants. Applications close April 30, 2026.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold">
                Reserve Your Seat
              </Button>
            </Link>
            <Link href="/retreats-advocacy/luxury-wellness">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-bold bg-transparent"
              >
                View All Retreats
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* NO FOOTER - Site handles it */}

      <Dialog open={showStripePayment} onOpenChange={setShowStripePayment}>
        <DialogContent className="max-w-[95vw] sm:max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-serif text-cyan-600">Secure Your Spot</DialogTitle>
          </DialogHeader>
          <div className="mt-3 sm:mt-4">
            {/* TODO: Create Stripe pricing table for Summer Solstice 2026 and replace this ID */}
            <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
            <stripe-pricing-table
              pricing-table-id="TODO_SUMMER_SOLSTICE_PRICING_TABLE"
              publishable-key="pk_live_51HBq4LEVSHLlpak65gbm9X4cCKW6tyG6IL2F60eLf4W0cpozlg9gTSCxXsUVHSboSOMj79ZaTnAqQBTzA5e8avTo0055WBIeUn"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
