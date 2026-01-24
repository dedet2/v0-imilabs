"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, X, Menu } from "lucide-react" // Import X and Menu
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Navigation } from "@/components/navigation"

export default function Home() {
  const [selectedJourney, setSelectedJourney] = useState("")
  const [showStripePayment, setShowStripePayment] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false) // Declare mobileMenuOpen state
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const selectJourney = (journeyType: string) => {
    setSelectedJourney(journeyType)
    const reserveSection = document.getElementById("reserve")
    if (reserveSection) {
      reserveSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formElement = e.currentTarget
    const formData = {
      journey: (formElement.elements.namedItem("journey") as HTMLSelectElement).value,
      roomPreference: (formElement.elements.namedItem("roomPreference") as HTMLSelectElement).value,
      fullName: (formElement.elements.namedItem("fullName") as HTMLInputElement).value,
      email: (formElement.elements.namedItem("email") as HTMLInputElement).value,
      phone: (formElement.elements.namedItem("phone") as HTMLInputElement).value,
      paymentPlan: (formElement.elements.namedItem("paymentPlan") as HTMLSelectElement).value,
      message: (formElement.elements.namedItem("message") as HTMLTextAreaElement).value,
    }

    // Construct email body
    const emailBody = `
Rest as Resistance - Cherry Blossom Edition 2026
New Inquiry Received

Journey Selected: ${formData.journey}
Room Preference: ${formData.roomPreference}
Payment Plan: ${formData.paymentPlan}

Contact Information:
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
    `.trim()

    // Create mailto link
    const mailtoLink = `mailto:info@dr-dede.com,rar@dr-dede.com?subject=Rest as Resistance Inquiry - ${formData.fullName}&body=${encodeURIComponent(emailBody)}`

    // Open email client
    window.location.href = mailtoLink

    setIsSubmitting(false)
    setSubmitMessage(
      "Your email client will open with your inquiry. Please send the email to complete your submission.",
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Main Site Navigation */}
      <Navigation />

      {/* Page-specific Navigation */}
      <nav className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-center items-center h-16">
            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-8">
              <li>
                <a
                  href="#itinerary"
                  className="text-sm text-foreground hover:text-copper transition-colors tracking-wide"
                >
                  Itinerary
                </a>
              </li>
              <li>
                <a
                  href="#experiences"
                  className="text-sm text-foreground hover:text-copper transition-colors tracking-wide"
                >
                  Experiences
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-sm text-foreground hover:text-copper transition-colors tracking-wide"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-foreground hover:text-copper transition-colors tracking-wide">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#host" className="text-sm text-foreground hover:text-copper transition-colors tracking-wide">
                  Your Host
                </a>
              </li>
              <li>
                <a
                  href="#reserve"
                  className="text-sm text-foreground hover:text-copper transition-colors tracking-wide"
                >
                  Reserve
                </a>
              </li>
            </ul>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground absolute right-4"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {["itinerary", "experiences", "pricing", "faq", "host", "reserve"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="block py-2 text-sm text-foreground capitalize"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item === "faq" ? "FAQ" : item.replace("-", " ")}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen flex items-start justify-start pt-36 sm:pt-40 md:pt-48 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="absolute inset-0">
          <img src="/images/cherry-blossom-hero.jpg" alt="Cherry blossoms" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-background/20 to-white/30" />
        </div>

        <div className="relative max-w-3xl text-left z-10">
          <div className="uppercase tracking-[0.2em] text-sm sm:text-base text-bronze font-bold mb-4">
            Rest as Resistance — Cherry Blossom Edition 2026
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-bronze mb-6 leading-tight">
            Bloom Into Rest
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-bronze font-medium mb-8 leading-relaxed">
            April 8–18, 2026 · Kamakura · Tokyo · Premium Ryokan
          </p>

          <p className="text-base sm:text-lg md:text-xl text-bronze mb-8 max-w-full sm:max-w-2xl leading-relaxed">
            A once-in-a-lifetime wellness and restoration experience at the peak of cherry blossom season. Join 10 Black
            women leaders for 7–10 days of radical rest, cultural immersion, and sisterhood in the breathtaking
            landscapes of springtime in Japan.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-copper to-copper-dark hover:from-copper-dark hover:to-copper text-white px-6 sm:px-10 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
            asChild
          >
            <a href="#reserve">Reserve Your Spot</a>
          </Button>

          <p className="mt-6 text-xs sm:text-sm text-bronze font-medium">
            Limited to 10 women · Launch December 16 · Early Bird ends December 31
          </p>
        </div>
      </section>

      {/* Sacred Journey Section */}
      <section id="itinerary" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-center text-bronze mb-4 sm:mb-6">
            Your Sacred Journey
          </h2>

          <p className="text-base sm:text-lg text-center text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Cherry blossoms bloom for only two weeks each year—a gentle reminder that flourishing requires rest. This
            carefully curated itinerary honors that sacred timing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                tag: "DAYS 1-2",
                title: "Kamakura: Arrival & Grounding",
                description:
                  "Arrive at our private Kamakura home. Welcome ceremony, grounding rituals, and first sisterhood circle. Set intentions, and explore historic temples surrounded by lush greenery and ease into the week of sacred restoration.",
                items: [
                  "Airport pickup and orientation",
                  "Welcome tea ceremony",
                  "First group circle",
                  "Settling into your home-away-from-home",
                ],
              },
              {
                tag: "DAYS 3-4",
                title: "Kamakura: Deep Immersion",
                description:
                  "Sink deeper into rest with morning meditations and workshops, followed by afternoon onsen rituals. Forest bathing beneath lush floral canopies creates space for spontaneous joy and sacred stillness.",
                items: [
                  "Morning mindfulness and intention-setting",
                  "Onsen (hot spring) experience at nearby ryokan",
                  "Forest bathing in temple grounds",
                  "Evening storytelling circle",
                ],
              },
              {
                tag: "DAYS 5-6",
                title: "Kamakura: Integration & Reflection",
                description:
                  "Gentle mornings. Creative expression. Group integration circles. Beach walks along Shichirigahama. Optional yoga and embodied movement. A time and space to journal, nap... to be.",
                items: [
                  "Beach meditation at sunrise (optional)",
                  "Creative workshop (writing, art, movement)",
                  "Personal reflection time",
                  "Group integration session",
                ],
              },
              {
                tag: "DAY 7",
                title: "Tokyo: Shopping & Culture",
                description:
                  "Guided shopping excursion through Tokyo's vibrant neighborhoods. Small boutique experiences. Time to explore or rest as desired.",
                items: [
                  "Harajuku and Shibuya exploration",
                  "Lunch in trendy Tokyo district",
                  "Free time for individual exploration",
                  "Visit to Imperial Palace East Gardens",
                  "Explore historic Asakusa and Senso-ji Temple",
                ],
              },
              {
                tag: "DAYS 8-9 (10-DAY OPTION)",
                title: "Atami/Hakone/Izu: Onsen Immersion",
                // removed "(Gōra Kadan or similar)"
                description:
                  "For 10-day participants: Extend your journey with two nights at a traditional onsen ryokan in Hakone or Izu. Private onsen baths, kaiseki meals, and deeper integration time. Cherry blossom viewing in pristine gardens. Farewell ceremony.",
                items: [
                  "Extended rest and integration time",
                  "Private** onsen experiences",
                  "Award-winning kaiseki cuisine",
                  "Final cherry blossom meditation",
                  "Closing circle and farewell dinner",
                ],
              },
              {
                tag: "DAY 10",
                title: "Departure: Renewed & Rooted",
                description:
                  "Depart carrying the gifts of rest, new connections, and the memory of cherry blossoms that reminded us: beauty is fleeting, but what we integrate endures.",
                items: [
                  "Morning leisure time",
                  "Final reflections and gratitude circle",
                  "Airport transportation",
                  "Departure with renewed spirit",
                ],
              },
            ].map((day, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                style={{
                  border: "2px solid transparent",
                  backgroundImage:
                    "linear-gradient(white, white), linear-gradient(135deg, oklch(0.92 0.06 18), oklch(0.85 0.09 12), oklch(0.75 0.12 10))",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }}
              >
                <div className="text-copper-dark text-xs font-semibold tracking-[0.15em] mb-2">{day.tag}</div>
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-foreground mb-3 sm:mb-4">{day.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                  {day.description}
                </p>
                {day.items.length > 0 && (
                  <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                    {day.items.map((listItem, i) => (
                      <li key={i} className="pl-4">
                        • {listItem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-xs sm:text-sm text-muted-foreground italic">
              ** When and where private onsens are available, but cannot always be guaranteed due to the setup of the
              ryokan, onsen or spa facility.
            </p>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section
        id="experiences"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-secondary/30 to-secondary/30"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-center text-bronze mb-8 sm:mb-10 md:mb-12">
            Curated Healing Experiences
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-14 md:mb-16">
            {[
              {
                title: "Cherry Blossom Viewing",
                description:
                  "Peak sakura season. Daily viewing at temples, parks, and ryokan gardens. Capture once-in-a-lifetime beauty.",
                image: "/images/cherry-blossoms-sakura-in-full-bloom-at-japanese-t.jpg",
              },
              {
                title: "Daily Onsen Rituals",
                description:
                  "Traditional Japanese hot springs. Private bathing options. Healing mineral waters for deep restoration.",
                image: "/images/traditional-japanese-onsen-hot-spring-with-steam-a.jpg",
              },
              {
                title: "Forest Bathing",
                description:
                  "Guided walks through ancient groves. Breathwork beneath cherry blossom canopies. Nature as medicine.",
                image: "/images/peaceful-forest-path-with-cherry-blossoms-japanese.jpg",
              },
              {
                title: "Tea Ceremonies",
                description:
                  "Learn traditional Japanese tea preparation. Mindfulness through ritual. Seasonal sweets and meditation.",
                image: "/images/japanese-tea-ceremony-matcha-bowl-traditional-sett.jpg",
              },
              {
                title: "Kaiseki Cuisine",
                description:
                  "Multi-course seasonal Japanese dining. Art on every plate. Fresh, local ingredients prepared with care.",
                image: "/images/beautiful-kaiseki-japanese-cuisine-multi-course-me.jpg",
              },
              {
                title: "Rest as Resistance",
                description:
                  "Workshops on rest as liberation. Group circles. Embodied practices. Reclaiming joy as birthright.",
                image: "/images/black-women-in-peaceful-meditation-circle-wellness.jpg",
              },
              {
                title: "Yoga & Meditation",
                description:
                  "Gentle morning practices. Evening wind-down sessions. Movement that honors your body's needs.",
                image: "/images/yoga-garden.jpg",
              },
              {
                title: "Sisterhood Circles",
                description: "Intimate group of 10 Black women. Deep connections. Shared stories. Lifelong community.",
                image: "/images/black-women-friends-gathered-in-circle-laughing-an.jpg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden rounded-2xl hover:shadow-xl transition-all group"
                style={{
                  border: "2px solid transparent",
                  backgroundImage:
                    "linear-gradient(white, white), linear-gradient(135deg, oklch(0.92 0.06 18), oklch(0.85 0.09 12), oklch(0.75 0.12 10))",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="font-medium text-base sm:text-lg mb-2 text-foreground">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl"
            style={{
              border: "2px solid transparent",
              backgroundImage:
                "linear-gradient(white, white), linear-gradient(135deg, oklch(0.92 0.06 18), oklch(0.85 0.09 12), oklch(0.75 0.12 10))",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
          >
            <h3 className="font-serif text-xl sm:text-2xl text-center text-foreground mb-4 sm:mb-6">What's Included</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-2 sm:gap-y-3 text-xs sm:text-sm">
              {[
                "All accommodations",
                "All meals & tea",
                "Daily programming",
                "Cultural activities",
                "Onsen access",
                "Transportation",
                "Welcome gifts",
                "Photography",
                "24/7 host support",
                "Pre-retreat prep",
                "Digital resources",
                "Post-retreat integration",
              ].map((item, i) => (
                <p key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.85 0.09 12)' }} />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-center mb-3 sm:mb-4"
            style={{
              color: "oklch(0.75 0.12 10)",
              textShadow: "2px 2px 4px rgba(184, 134, 110, 0.2)",
            }}
          >
            Investing in Your Rest
          </h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-12 sm:mb-14 md:mb-16 max-w-3xl mx-auto leading-relaxed">
            Choose between our 7-day Kamakura & Tokyo experience or extend to 10 days with an onsen immersion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-14 md:mt-16">
            {/* 7-Day Option */}
            <Card className="p-6 sm:p-8 md:p-10 bg-card hover:shadow-lg transition-shadow border-2 border-copper/20 hover:border-copper/40">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal mb-2">7-Day Experience</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-light">$11,500</span>
                    <span className="text-sm sm:text-base text-muted-foreground">USD per person</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2">(flights included)</p>
                </div>

                <div className="pt-3 sm:pt-4">
                  <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4">Includes:</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      "Roundtrip economy flights included from select US hubs to Tokyo, or a land-only credit if you prefer to book your own.",
                      "7 days / 6 nights at a private home in Kamakura, shared with an intimate cohort of 10 max.",
                      "Daily breakfast, most dinners, curated lunches, snacks, tea, and water.",
                      "All in-country transport during the retreat and all included activities.",
                      "Daily group circles, somatic grounding, and curated culturally aligned workshops.",
                      "One pre-trip group orientation call and one post-trip integration call.",
                    ].map((feature, index) => (
                      <li key={index} className="flex gap-2 sm:gap-3 text-xs sm:text-sm leading-relaxed">
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className="w-full mt-6 sm:mt-8 bg-gradient-to-r from-copper to-copper-light hover:from-copper-dark hover:to-copper text-copper-foreground shadow-lg text-sm sm:text-base"
                  onClick={() => selectJourney("7-day")}
                >
                  Select 7-Day Experience
                </Button>
              </div>
            </Card>

            {/* 10-Day Option */}
            <Card className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-copper/5 via-copper-light/10 to-copper/5 border-2 border-copper hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-copper via-copper-light to-copper-dark text-copper-foreground px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-lg border border-copper-light/50">
                  Extended Rest
                </span>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal mb-2">10-Day Experience</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-light">$13,500</span>
                    <span className="text-sm sm:text-base text-muted-foreground">USD per person</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2">(flights + onsen extension included)</p>
                </div>

                <div className="pt-3 sm:pt-4">
                  <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4">Includes:</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      "Everything in the 7-Day Experience",
                      "3 additional nights at a traditional onsen ryokan in Hakone or Izu",
                      "Private hot spring baths** and kaiseki meals",
                      "Extended time for integration and deep rest",
                      "Transportation to/from the ryokan included",
                      "Additional guided reflection session",
                    ].map((feature, index) => (
                      <li key={index} className="flex gap-2 sm:gap-3 text-xs sm:text-sm leading-relaxed">
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className={index === 0 ? "font-medium" : ""}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className="w-full mt-6 sm:mt-8 bg-gradient-to-r from-copper-dark via-copper to-copper-light hover:from-copper hover:via-copper-light hover:to-copper-dark text-copper-foreground shadow-lg border border-copper-light/30 text-sm sm:text-base"
                  onClick={() => selectJourney("10-day")}
                >
                  Select 10-Day Experience
                </Button>
              </div>
            </Card>
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-xs sm:text-sm text-muted-foreground italic">
              ** When and where private onsens are available, but cannot always be guaranteed due to the setup of the
              ryokan, onsen or spa facility.
            </p>
          </div>

          {/* Payment Plans */}
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-copper/5 to-copper-light/10 p-6 sm:p-8 rounded-2xl border-2 border-copper/30 mb-8 sm:mb-10 md:mb-12 mt-12 sm:mt-14 md:mt-16">
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-normal mb-4 sm:mb-6 text-center text-bronze">
              Payment Plans Available
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <p className="font-semibold mb-2 text-sm sm:text-base">Pay in Full (Save $500!)</p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Pay by February 1, 2026 and receive $500 discount
                </p>
              </div>

              <div>
                <p className="font-semibold mb-2 text-sm sm:text-base">Three-Payment Plan</p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  • Deposit: $3,000 (secures your spot)
                  <br />• Second payment: February 15, 2026
                  <br />• Final payment: March 15, 2026
                </p>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t-2 border-copper/20">
              <p className="font-semibold mb-2 text-sm sm:text-base">Important Dates</p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                <strong>Early Bird Ends:</strong> December 31, 2025
                <br />
                <strong>Deposit Deadline:</strong> January 31, 2026
                <br />
                <strong>Final Payment:</strong> March 15, 2026
              </p>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t-2 border-copper/20">
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="flex-shrink-0">•</span>
                  <span>
                    <strong>Minimum of 8 guests required;</strong> if not reached by January 31, 2026, all payments
                    (including deposits) are fully refunded.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="flex-shrink-0">•</span>
                  <span>
                    <strong>Before January 31, 2026:</strong> Deposit may be transferred to another qualified
                    participant; additional payments refundable minus a 400 USD admin fee.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="flex-shrink-0">•</span>
                  <span>
                    <strong>February 1 – February 28, 2026:</strong> Deposit is non‑refundable; 50% of additional
                    payments refunded, 50% forfeited if you cancel in this window.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="flex-shrink-0">•</span>
                  <span>
                    <strong>After March 1, 2026:</strong> No refunds; spot may be transferred to another participant
                    with our approval.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="flex-shrink-0">•</span>
                  <span>
                    <strong>
                      We strongly recommend travel insurance that covers cancellation, medical care, and travel
                      disruptions.
                    </strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* What's Not Included */}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-center text-bronze mb-12 sm:mb-14 md:mb-16">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {[
              {
                question: "Do I need to be a Black woman?",
                answer:
                  'The Bloom Into Rest Retreat is intentionally designed for Black women/femmes of all gender identities—leaders, founders, executives, and creators ready to rest deeply and unapologetically. If you identify outside of this community and are interested in a future Rest as Resistance experience, we invite you to join our waitlist for retreats that will be open to everyone. All of our retreats maintain the same intimate, curated size (10-12 participants maximum) and deeply transformative, culturally immersive experience we\'re known for. To join the waitlist for future offerings, email info@dr-dede.com with "Future Retreat Interest" in the subject line.',
              },
              {
                question: "What's not included in the price?",
                answer:
                  "Not included: Visa fees (if applicable), travel insurance (highly recommended), personal shopping, additional spa treatments beyond included programming, and alcoholic beverages. Everything else—accommodation, meals, activities, transportation, guides—is included.",
              },
              {
                question: "Do I need to speak Japanese?",
                answer:
                  "Not at all! Dr. Dédé speaks Japanese fluently and will facilitate all interactions, cultural explanations, and translations. You'll learn basic phrases and etiquette, but language is not a barrier—just another layer of care we provide.",
              },
              {
                question: "What's the physical activity level?",
                answer:
                  "Gentle to moderate. Activities include walking (temple visits, cherry blossom viewing), optional yoga, and forest bathing. Everything is optional and adaptable to all fitness levels. This retreat prioritizes rest—you won't be rushed or over-scheduled. Your body's needs come first.",
              },
              {
                question: "Can I come solo?",
                answer:
                  "Most participants attend solo. Shared occupancy rooms (unless you choose single occupancy upgrade) foster connection and sisterhood. You'll never feel alone—you're joining an intimate group of 10 Black women, all seeking the same transformation.",
              },
              {
                question: "What's your refund & cancellation policy?",
                answer: (
                  <div className="space-y-4">
                    <div className="space-y-3 text-sm">
                      <p>
                        <strong>Minimum of 8 guests required;</strong> if not reached by January 31, 2026, all payments
                        (including deposits) are fully refunded.
                      </p>

                      <div>
                        <p className="font-semibold mb-1">Before January 31, 2026:</p>
                        <p>
                          Deposit may be transferred to another participant; additional payments refundable minus a $400
                          USD admin fee.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold mb-1">February 1 – February 28, 2026:</p>
                        <p>Deposit is non-refundable; 50% of additional payments refunded, 50% forfeited.</p>
                      </div>

                      <div>
                        <p className="font-semibold mb-1">After March 1, 2026:</p>
                        <p>No refunds; spot may be transferred with our approval.</p>
                      </div>

                      <p>
                        <strong>
                          We strongly recommend travel insurance that covers cancellation, medical care, and travel
                          disruptions.
                        </strong>
                      </p>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="link"
                          className="h-auto p-0 text-bronze hover:text-bronze-dark underline text-sm"
                        >
                          View Full Policy
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl text-bronze">Refund & Cancellation Policy</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6 text-sm">
                          <div>
                            <h3 className="font-bold text-base mb-3">Minimum group guarantee</h3>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>
                                If the minimum number of guests (8) is not reached by January 31, 2026, all payments —
                                including deposits — are fully refunded.
                              </li>
                              <li>
                                Joining now guarantees the best rate, priority access if a waitlist is needed, and early
                                access to future retreats.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-bold text-base mb-3">Payment schedule</h3>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>Deposit: 3,000 USD (secures your spot; due at booking).</li>
                              <li>Second payment: due February 15, 2026.</li>
                              <li>Final payment: due March 15, 2026.</li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-bold text-base mb-3">If you cancel your participation</h3>

                            <h4 className="font-semibold mt-4 mb-2">On or before January 31, 2026</h4>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>
                                Your 3,000 USD deposit:
                                <ul className="list-circle pl-5 mt-1">
                                  <li>
                                    May be transferred to another qualified participant you nominate (subject to our
                                    approval).
                                  </li>
                                </ul>
                              </li>
                              <li>
                                Any additional payments made beyond the deposit are refundable minus a 400 USD
                                administrative fee.
                              </li>
                            </ul>

                            <h4 className="font-semibold mt-4 mb-2">February 1 – February 28, 2026</h4>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>Your deposit is non‑refundable.</li>
                              <li>
                                Of all additional payments you have made (beyond the 3,000 USD deposit), 50% is
                                refundable, and 50% is forfeited if you cancel in this window.
                              </li>
                            </ul>

                            <h4 className="font-semibold mt-4 mb-2">On or after March 1, 2026</h4>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>No refunds are available.</li>
                              <li>
                                Your spot may be transferred to another participant with our written approval; any
                                financial arrangements between you and the new participant are your responsibility.
                              </li>
                              <li>
                                In very limited, documented force‑majeure circumstances (e.g., serious medical
                                emergencies or border closures), we may consider partial exceptions at our discretion,
                                but this is not guaranteed.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-bold text-base mb-3">If we cancel or cannot operate the retreat</h3>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>
                                If we must cancel the retreat for reasons beyond your control (including failure to
                                reach the 8‑guest minimum by January 31, 2026, or if we determine it is unsafe or
                                impossible to run the retreat), you will receive a full refund of all payments made,
                                including your deposit.
                              </li>
                              <li>
                                We are not responsible for any additional costs outside the retreat (e.g., independently
                                booked flights, visas, or other personal expenses), which is why we strongly recommend
                                purchasing travel insurance that covers trip cancellation, medical needs, and
                                disruptions.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                ),
              },
              {
                question: "Is WiFi available?",
                answer:
                  "Yes, WiFi is available at all accommodations. However, we encourage digital boundaries and designated tech-free spaces to support deep rest. We'll provide guidance on creating a digital detox that works for you.",
              },
              {
                question: "How intimate is the group really?",
                answer:
                  "VERY. We're limiting this to 10 women maximum—not 12, not 15. With 2 hosts (Dr. Dédé + Chief of Staff), that's a 1:5 host-to-guest ratio. You'll know everyone's name, story, and heart by day two. This isn't a tour group—it's a sisterhood experience.",
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={index.toString()}
                className="bg-white rounded-xl shadow-sm overflow-hidden px-0"
              >
                <AccordionTrigger className="w-full p-4 sm:p-5 md:p-6 text-left flex justify-between items-center hover:bg-copper-light/10 transition-colors">
                  <span className="font-semibold pr-3 sm:pr-4 text-[oklch(0.75_0.12_10)] text-sm sm:text-base">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="overflow-hidden px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 text-muted-foreground leading-relaxed whitespace-pre-line text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Host Section */}
      <section id="host" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-center text-bronze mb-8 sm:mb-10 md:mb-12">
            Meet Your Host
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-light mb-2">Dr. Dédé Tetsubayashi</h3>
                <p className="text-copper-dark font-medium text-xs sm:text-sm whitespace-nowrap">
                  Disability Advocate · Rest Revolutionary · AI Governance Expert
                </p>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Cornell-educated strategist with 25+ years of experience across Fortune 100 & 500 companies, Dr. Dédé
                brings Japanese language fluency and lived experience in Japan to her work, grounding her approach in
                cultural respect, relational depth, and embodied understanding.
              </p>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                With an authentic, long-standing commitment to Black women's wellness and liberation, Dr. Dédé weaves
                together AI ethics and governance, disability justice, and transformative wellness to create spaces
                where Black women—particularly those from marginalized and disabled communities—can rest without guilt,
                reconnect with joy, and return to their work renewed and resourced.
              </p>

              <blockquote className="border-l-4 border-copper pl-3 sm:pl-4 italic text-sm sm:text-base text-muted-foreground leading-relaxed">
                "In a world that demands our constant productivity, rest is a revolutionary act. I've spent years in
                Japan learning that rest isn't weakness—it's wisdom. Join me to reclaim your right to bloom, rest, and
                rise."
                <footer className="mt-2 text-xs sm:text-sm font-medium">— Dr. Dédé</footer>
              </blockquote>
            </div>

            <div className="relative h-full">
              <img
                src="/images/drdede-japan.jpg"
                alt="Dr. Dédé Tetsubayashi in Japan"
                className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

{/* Testimonials */}
  <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 text-white" style={{ backgroundColor: 'oklch(0.25 0.02 45)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-center mb-12 sm:mb-14 md:mb-16">
            What People Are Saying
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                text: "This retreat changed my life. I arrived exhausted and left renewed. The cherry blossoms, the sisterhood, the permission to just BE—it was everything I didn't know I needed.",
                author: "Jasmine, Entrepreneur",
              },
              {
                text: "I've traveled the world, but nothing prepared me for the magic of this experience. The combination of rest, culture, and community was profound. I'm still carrying it with me.",
                author: "Dr. Michelle, Professor",
              },
              {
                text: "As a Black woman who's always 'on,' this retreat gave me permission to turn off. The cherry blossoms reminded me that beauty is fleeting and so is this precious life. Time to rest.",
                author: "Aisha, Creative Director",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/5 p-6 sm:p-7 md:p-8 rounded-2xl border border-white/10">
                <p className="italic mb-4 sm:mb-5 md:mb-6 leading-relaxed text-sm sm:text-base">"{testimonial.text}"</p>
                <p className="text-copper-light font-semibold text-sm sm:text-base">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reserve Section */}
      <section id="reserve" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-center text-bronze mb-6 sm:mb-8">
            Reserve Your Spot
          </h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto">
            Cherry blossoms wait for no one. Only 10 spots available. Secure yours now.
          </p>

          <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl shadow-2xl border-2 border-copper-light">
            <form className="space-y-4 sm:space-y-5 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block font-semibold mb-2 text-sm sm:text-base">Selected Journey *</label>
                <select
                  required
                  name="journey"
                  value={selectedJourney}
                  onChange={(e) => setSelectedJourney(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-input rounded-xl focus:border-copper focus:outline-none transition-colors text-sm sm:text-base"
                >
                  <option value="">-- Select Your Journey --</option>
                  <option value="7-day">Cherry Blossom Core Journey (7-Day) — $11,500</option>
                  <option value="10-day">Full Cherry Blossom Experience (10-Day) — $13,500 ⭐ MOST POPULAR</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2 text-sm sm:text-base">Room Preference *</label>
                <select
                  required
                  name="roomPreference"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-input rounded-xl focus:border-copper focus:outline-none transition-colors text-sm sm:text-base"
                >
                  <option value="">-- Select Occupancy --</option>
                  <option value="shared">Shared Occupancy (Included in price)</option>
                  <option value="single">Single Occupancy (+$2,000) — Limited to 4 rooms</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2 text-sm sm:text-base">Full Name *</label>
                <input
                  type="text"
                  required
                  name="fullName"
                  placeholder="Your full name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-input rounded-xl focus:border-copper focus:outline-none transition-colors text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2 text-sm sm:text-base">Email Address *</label>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="your.email@example.com"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-input rounded-xl focus:border-copper focus:outline-none transition-colors text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2 text-sm sm:text-base">Phone Number *</label>
                <input
                  type="tel"
                  required
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-input rounded-xl focus:border-copper focus:outline-none transition-colors text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2 text-sm sm:text-base">Payment Plan Preference *</label>
                <select
                  required
                  name="paymentPlan"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-input rounded-xl focus:border-copper focus:outline-none transition-colors text-sm sm:text-base"
                >
                  <option value="">-- Select Payment Plan --</option>
                  <option value="full">Pay in Full (Save $500!)</option>
                  <option value="three">Three-Payment Plan</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2 text-sm sm:text-base">Tell Us About You (Optional)</label>
                <textarea
                  rows={4}
                  name="message"
                  placeholder="Why does this retreat call to you? What are you seeking? Any questions?"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-input rounded-xl focus:border-copper focus:outline-none transition-colors resize-none text-sm sm:text-base"
                />
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <input type="checkbox" required className="mt-1" />
                <span className="text-xs sm:text-sm text-muted-foreground">
                  I understand that a $3,000 non-refundable (but transferable) deposit is required to secure my spot,
                  and I agree to the cancellation policy. *
                </span>
              </div>

              {submitMessage && (
                <div
                  className={`p-4 rounded-lg ${submitMessage.includes("Thank you") ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
                >
                  {submitMessage}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  type="button"
                  size="lg"
                  onClick={() => setShowStripePayment(true)}
                  className="w-full sm:flex-1 bg-gradient-to-r from-copper-dark to-copper hover:from-copper hover:to-copper-light text-white py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg"
                >
                  Secure My Spot!
                </Button>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 bg-gradient-to-r from-copper to-copper-dark hover:from-copper-dark hover:to-copper text-white py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </Button>
              </div>

              <p className="text-center text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
                You'll receive a response within 24 hours with next steps and payment instructions.
              </p>
            </form>
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12 p-6 sm:p-8 bg-copper/5 rounded-2xl">
            <h3 className="font-serif text-xl sm:text-2xl mb-3 sm:mb-4">Questions? Let's Talk.</h3>
            <Button
              size="lg"
              className="bg-gradient-to-r from-copper to-copper-dark hover:from-copper-dark hover:to-copper text-white px-8 py-4 text-base rounded-full shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href="mailto:info@dr-dede.com">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>



      <Dialog open={showStripePayment} onOpenChange={setShowStripePayment}>
        <DialogContent className="max-w-[95vw] sm:max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-serif text-bronze">Secure Your Spot</DialogTitle>
          </DialogHeader>
          <div className="mt-3 sm:mt-4">
            <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
            <stripe-pricing-table
              pricing-table-id="prctbl_1SgCbLEVSHLlpak6r5hntf8a"
              publishable-key="pk_live_51HBq4LEVSHLlpak65gbm9X4cCKW6tyG6IL2F60eLf4W0cpozlg9gTSCxXsUVHSboSOMj79ZaTnAqQBTzA5e8avTo0055WBIeUn"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
