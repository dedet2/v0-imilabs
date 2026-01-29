"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check, Clock, DollarSign, TrendingUp, Mail, Star } from "lucide-react"

export default function ROICalculatorLandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission - replace with actual form handler
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Redirect to calculator after successful submission
    setTimeout(() => {
      window.location.href = "/resources/roi-calculator"
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const testimonials = [
    {
      quote:
        "This calculator showed us we could save $180K annually through automation. We implemented the recommendations and hit those numbers in 8 months.",
      author: "Sarah Chen",
      role: "CEO, TechFlow Solutions",
    },
    {
      quote:
        "The ROI projections were spot-on. We reduced manual processes by 60% and our team can now focus on strategic initiatives.",
      author: "Marcus Rodriguez",
      role: "Operations Director, GrowthCorp",
    },
    {
      quote:
        "Finally, a tool that gives realistic projections! The calculator helped us secure board approval for our AI initiative.",
      author: "Dr. Emily Watson",
      role: "CTO, MedTech Innovations",
    },
  ]

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-primary via-primary/90 to-secondary flex items-center justify-center">
        <Card className="p-8 max-w-md text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-2">You&apos;re In!</h2>
          <p className="text-foreground/70">Redirecting you to the ROI Calculator...</p>
        </Card>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary via-primary/90 to-secondary">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-2 rounded-full inline-flex items-center gap-2">
            <Star className="h-4 w-4" />
            <span className="text-sm font-medium">Free Business Assessment Tool</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground text-center mb-6 text-balance">
          Discover Your Business&apos;s{" "}
          <span className="text-secondary-foreground">Hidden ROI Potential</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl text-primary-foreground/90 text-center max-w-4xl mx-auto mb-12 text-pretty">
          Calculate exactly how much AI automation could save your business in time, costs, and revenue. Get your
          personalized ROI report in under 3 minutes.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          <Card className="bg-primary/40 backdrop-blur-sm border-primary/30 p-8 text-center">
            <Clock className="h-10 w-10 text-primary-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary-foreground mb-2">Save 20+ Hours/Week</h3>
            <p className="text-primary-foreground/80">Automate repetitive tasks</p>
          </Card>

          <Card className="bg-secondary/50 backdrop-blur-sm border-secondary/30 p-8 text-center">
            <DollarSign className="h-10 w-10 text-secondary-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-secondary-foreground mb-2">Reduce Costs by 40%</h3>
            <p className="text-secondary-foreground/80">Optimize operations</p>
          </Card>

          <Card className="bg-primary/40 backdrop-blur-sm border-primary/30 p-8 text-center">
            <TrendingUp className="h-10 w-10 text-primary-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary-foreground mb-2">Boost Revenue 25%</h3>
            <p className="text-primary-foreground/80">Focus on growth activities</p>
          </Card>
        </div>

        {/* Form Section */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 shadow-2xl">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
                <Mail className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-2">Get Your Free ROI Calculator</h2>
              <p className="text-foreground/70">
                Enter your details below to access your personalized business ROI assessment
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold py-6 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Send Me the Calculator"}
              </Button>
            </form>

            <p className="text-center text-foreground/60 text-sm mt-4 flex items-center justify-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              We respect your privacy. No spam, unsubscribe anytime.
            </p>

            {/* Benefits List */}
            <div className="mt-8">
              <h4 className="font-bold text-foreground mb-4">What You&apos;ll Get:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Instant access to ROI calculator",
                  "Personalized savings report",
                  "AI Implementation Roadmap",
                  "Exclusive business insights",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center text-foreground/80">
                    <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-primary-foreground text-center mb-12">
            Trusted by 500+ Business Leaders
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-foreground/60 text-sm">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
