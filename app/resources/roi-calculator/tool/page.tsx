"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Calculator, TrendingUp, DollarSign, Users, Shield, ArrowLeft } from "lucide-react"

export default function ROICalculatorToolPage() {
  const [employees, setEmployees] = useState(100)
  const [revenue, setRevenue] = useState(10000000)
  const [complianceIssues, setComplianceIssues] = useState(3)
  const [marketExpansion, setMarketExpansion] = useState(15)

  // Calculate ROI metrics
  const avgFinePerViolation = 250000
  const potentialFines = complianceIssues * avgFinePerViolation
  const marketExpansionValue = revenue * (marketExpansion / 100)
  const productivityGains = employees * 5000 // $5k per employee in productivity
  const totalROI = potentialFines + marketExpansionValue + productivityGains
  const investmentCost = 150000 // Average engagement cost
  const netROI = totalROI - investmentCost
  const roiMultiplier = (totalROI / investmentCost).toFixed(1)

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400">
      {/* Header */}
      <div className="container mx-auto px-4 pt-8">
        <Link href="/resources/roi-calculator" className="inline-flex items-center text-white/80 hover:text-white mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Overview
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Calculator className="h-5 w-5" />
              <span className="text-sm font-semibold">ROI Calculator</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-6">
              Calculate Your AI Governance ROI
            </h1>
            <p className="text-xl text-white/90 text-balance mb-8">
              Discover the financial impact of proactive AI compliance and inclusive design
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <Card className="p-8 bg-white">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Your Organization</h2>

                <div className="space-y-8">
                  {/* Number of Employees */}
                  <div>
                    <Label htmlFor="employees" className="text-base font-semibold mb-3 block text-gray-700">
                      Number of Employees
                    </Label>
                    <div className="flex items-center gap-4">
                      <Slider
                        id="employees"
                        min={10}
                        max={10000}
                        step={10}
                        value={[employees]}
                        onValueChange={(value) => setEmployees(value[0])}
                        className="flex-1"
                      />
                      <Input
                        type="number"
                        value={employees}
                        onChange={(e) => setEmployees(Number(e.target.value))}
                        className="w-24"
                      />
                    </div>
                  </div>

                  {/* Annual Revenue */}
                  <div>
                    <Label htmlFor="revenue" className="text-base font-semibold mb-3 block text-gray-700">
                      Annual Revenue ($)
                    </Label>
                    <div className="flex items-center gap-4">
                      <Slider
                        id="revenue"
                        min={1000000}
                        max={1000000000}
                        step={1000000}
                        value={[revenue]}
                        onValueChange={(value) => setRevenue(value[0])}
                        className="flex-1"
                      />
                      <Input
                        type="number"
                        value={revenue}
                        onChange={(e) => setRevenue(Number(e.target.value))}
                        className="w-32"
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-2">${(revenue / 1000000).toFixed(1)}M</p>
                  </div>

                  {/* Compliance Issues */}
                  <div>
                    <Label htmlFor="compliance" className="text-base font-semibold mb-3 block text-gray-700">
                      Potential Compliance Issues per Year
                    </Label>
                    <div className="flex items-center gap-4">
                      <Slider
                        id="compliance"
                        min={0}
                        max={20}
                        step={1}
                        value={[complianceIssues]}
                        onValueChange={(value) => setComplianceIssues(value[0])}
                        className="flex-1"
                      />
                      <Input
                        type="number"
                        value={complianceIssues}
                        onChange={(e) => setComplianceIssues(Number(e.target.value))}
                        className="w-20"
                      />
                    </div>
                  </div>

                  {/* Market Expansion */}
                  <div>
                    <Label htmlFor="market" className="text-base font-semibold mb-3 block text-gray-700">
                      Potential Market Expansion (%)
                    </Label>
                    <div className="flex items-center gap-4">
                      <Slider
                        id="market"
                        min={0}
                        max={50}
                        step={1}
                        value={[marketExpansion]}
                        onValueChange={(value) => setMarketExpansion(value[0])}
                        className="flex-1"
                      />
                      <Input
                        type="number"
                        value={marketExpansion}
                        onChange={(e) => setMarketExpansion(Number(e.target.value))}
                        className="w-20"
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Accessibility expands addressable market by {marketExpansion}%
                    </p>
                  </div>
                </div>
              </Card>

              {/* Results Section */}
              <div className="space-y-6">
                <Card className="p-8 bg-white border-2 border-purple-200">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Your Projected ROI</h2>

                  <div className="space-y-6">
                    {/* Total ROI */}
                    <div className="p-6 bg-gradient-to-br from-purple-50 to-cyan-50 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <TrendingUp className="h-6 w-6 text-purple-600" />
                        <h3 className="text-lg font-semibold text-gray-900">Total Value Generated</h3>
                      </div>
                      <p className="text-4xl font-bold text-purple-600">${(totalROI / 1000000).toFixed(2)}M</p>
                      <p className="text-sm text-gray-600 mt-2">{roiMultiplier}x return on investment</p>
                    </div>

                    {/* Breakdown */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                        <Shield className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1 text-gray-900">Risk Mitigation</h4>
                          <p className="text-2xl font-bold text-gray-800">
                            ${(potentialFines / 1000000).toFixed(2)}M
                          </p>
                          <p className="text-sm text-gray-600 mt-1">Avoided compliance fines and legal costs</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                        <DollarSign className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1 text-gray-900">Market Expansion</h4>
                          <p className="text-2xl font-bold text-gray-800">
                            ${(marketExpansionValue / 1000000).toFixed(2)}M
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            New revenue from expanded addressable market
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                        <Users className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1 text-gray-900">Productivity Gains</h4>
                          <p className="text-2xl font-bold text-gray-800">
                            ${(productivityGains / 1000000).toFixed(2)}M
                          </p>
                          <p className="text-sm text-gray-600 mt-1">Improved team efficiency and innovation</p>
                        </div>
                      </div>
                    </div>

                    {/* Net ROI */}
                    <div className="p-6 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg text-white">
                      <h3 className="text-lg font-semibold mb-2">Net ROI (After Investment)</h3>
                      <p className="text-3xl font-bold">${(netROI / 1000000).toFixed(2)}M</p>
                      <p className="text-sm text-white/80 mt-2">
                        Based on average engagement cost of ${(investmentCost / 1000).toFixed(0)}K
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white">
                  <h3 className="font-semibold mb-3 text-gray-900">Ready to realize these gains?</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    Schedule a consultation to discuss how we can help your organization achieve these results through
                    proactive AI governance and inclusive design.
                  </p>
                  <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600">
                    <Link href="/contact?service=consultation">Schedule Consultation</Link>
                  </Button>
                </Card>
              </div>
            </div>

            {/* Methodology Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-white">Calculation Methodology</h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Risk Mitigation",
                    description:
                      "Based on average regulatory fines of $250K per violation for AI compliance failures (GDPR, ADA, EU AI Act).",
                  },
                  {
                    title: "Market Expansion",
                    description:
                      "Accessibility-first design expands addressable market by 15-25% by including people with disabilities and aging populations.",
                  },
                  {
                    title: "Productivity Gains",
                    description:
                      "Inclusive teams are 35% more productive and innovative, translating to $5K+ per employee annually.",
                  },
                  {
                    title: "Conservative Estimates",
                    description:
                      "All calculations use conservative industry benchmarks. Actual results often exceed these projections.",
                  },
                ].map((item, index) => (
                  <Card key={index} className="p-6 bg-white">
                    <h3 className="font-semibold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
