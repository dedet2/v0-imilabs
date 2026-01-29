"use client"

import { useState } from "react"

export default function ROICalculatorLanding() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
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
            <span className="mr-2">✨</span>
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
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-2xl font-bold text-white mb-2">Save 20+ Hours/Week</h3>
            <p className="text-purple-100">Automate repetitive tasks</p>
          </div>

          {/* Card 2 */}
          <div className="bg-cyan-500/50 backdrop-blur-sm border border-cyan-300/30 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">💲</div>
            <h3 className="text-2xl font-bold text-white mb-2">Reduce Costs by 40%</h3>
            <p className="text-white">Optimize operations</p>
          </div>

          {/* Card 3 */}
          <div className="bg-purple-600/40 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-2xl font-bold text-white mb-2">Boost Revenue 25%</h3>
            <p className="text-purple-100">Focus on growth activities</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-full mb-4">
              <span className="text-3xl">🧮</span>
            </div>
            <h2 className="text-3xl font-bold text-purple-600 mb-2">Get Your Free ROI Calculator</h2>
            <p className="text-gray-600">Enter your details below to access your personalized business ROI assessment</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
            >
              <span className="mr-2">📧</span>
              Send Me the Calculator
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-4 flex items-center justify-center">
            <span className="mr-2">✓</span>
            We respect your privacy. No spam, unsubscribe anytime.
          </p>

          {/* Benefits List */}
          <div className="mt-8">
            <h4 className="font-bold text-gray-800 mb-4">What You'll Get:</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Instant access to ROI calculator
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Personalized savings report
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                AI Implementation Roadmap
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
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
                  <span key={i} className="text-yellow-400">
                    ⭐
                  </span>
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
                  <span key={i} className="text-yellow-400">
                    ⭐
                  </span>
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
                  <span key={i} className="text-yellow-400">
                    ⭐
                  </span>
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
