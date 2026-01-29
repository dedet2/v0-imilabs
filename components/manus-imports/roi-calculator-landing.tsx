"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Clock, DollarSign, TrendingUp, Calculator, Mail, Sparkles, Check, Star, ShieldCheck } from "lucide-react"

export default function ROICalculatorLanding() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          first_name: formData.name.split(" ")[0],
          last_name: formData.name.split(" ").slice(1).join(" ") || undefined,
          source: "roi-calculator",
          subscribed_to_newsletter: true,
          metadata: {
            landing_page: "roi-calculator",
            submitted_at: new Date().toISOString(),
          },
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit")
      }

      setSuccess(true)
      // Redirect to the actual calculator after successful submission
      setTimeout(() => {
        router.push("/resources/roi-calculator/tool")
      }, 1500)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-6 py-2 rounded-full inline-flex items-center">
            <Sparkles className="w-5 h-5 mr-2" />
            <span>Free Business Assessment Tool</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-6">
          Discover Your Business's{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-100">
            Hidden ROI Potential
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl text-white text-center max-w-4xl mx-auto mb-12">
          Calculate exactly how much AI automation could save your business in time, costs, and revenue. Get your
          personalized ROI report in under 3 minutes.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Card 1 */}
          <div className="bg-purple-600/40 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-4">
              <Clock className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Save 20+ Hours/Week</h3>
            <p className="text-purple-100">Automate repetitive tasks</p>
          </div>

          {/* Card 2 */}
          <div className="bg-cyan-500/50 backdrop-blur-sm border border-cyan-300/30 rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-4">
              <DollarSign className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Reduce Costs by 40%</h3>
            <p className="text-white">Optimize operations</p>
          </div>

          {/* Card 3 */}
          <div className="bg-purple-600/40 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-4">
              <TrendingUp className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Boost Revenue 25%</h3>
            <p className="text-purple-100">Focus on growth activities</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-full mb-4">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-purple-600 mb-2">Get Your Free ROI Calculator</h2>
            <p className="text-gray-600">Enter your details below to access your personalized business ROI assessment</p>
          </div>

          {success ? (
            <div className="text-center py-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-10 h-10 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">Success!</h3>
              <p className="text-gray-600">Redirecting you to the ROI Calculator...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {error}
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5 mr-2" />
                    Send Me the Calculator
                  </>
                )}
              </button>
            </form>
          )}

          <p className="text-center text-gray-500 text-sm mt-4 flex items-center justify-center">
            <Check className="w-4 h-4 mr-2 text-green-500" />
            We respect your privacy. No spam, unsubscribe anytime.
          </p>

          {/* Benefits List */}
          <div className="mt-8">
            <h4 className="font-bold text-gray-800 mb-4">What You'll Get:</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center text-gray-700">
                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                Instant access to ROI calculator
              </div>
              <div className="flex items-center text-gray-700">
                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                Personalized savings report
              </div>
              <div className="flex items-center text-gray-700">
                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                AI Implementation Roadmap
              </div>
              <div className="flex items-center text-gray-700">
                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                Exclusive business insights
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Trusted by 500+ Business Leaders</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "This calculator showed us we could save $180K annually through automation. We implemented the
                recommendations and hit those numbers in 8 months."
              </p>
              <div>
                <p className="font-bold text-gray-900">Sarah Chen</p>
                <p className="text-gray-600 text-sm">CEO, TechFlow Solutions</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The ROI projections were spot-on. We reduced manual processes by 60% and our team can now focus on
                strategic initiatives."
              </p>
              <div>
                <p className="font-bold text-gray-900">Marcus Rodriguez</p>
                <p className="text-gray-600 text-sm">Operations Director, GrowthCorp</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Finally, a tool that gives realistic projections! The calculator helped us secure board approval for
                our AI initiative."
              </p>
              <div>
                <p className="font-bold text-gray-900">Dr. Emily Watson</p>
                <p className="text-gray-600 text-sm">CTO, MedTech Innovations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
