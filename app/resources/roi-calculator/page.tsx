"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Calculator, TrendingUp, DollarSign, Users, Shield } from "lucide-react"

// Note: Metadata must be in a separate layout.tsx for client components

export default function ROICalculatorPage() {
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
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Calculator className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">ROI Calculator</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
              Calculate Your AI Governance ROI
            </h1>
            <p className="text-xl sm:text-2xl text-foreground/70 text-balance mb-8">
              Discover the financial impact of proactive AI compliance and inclusive design
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Your Organization</h2>

                <div className="space-y-8">
                  {/* Number of Employees */}
                  <div>
                    <Label htmlFor="employees" className="text-base font-semibold mb-3 block">
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
                    <Label htmlFor="revenue" className="text-base font-semibold mb-3 block">
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
                    <p className="text-sm text-foreground/60 mt-2">${(revenue / 1000000).toFixed(1)}M</p>
                  </div>

                  {/* Compliance Issues */}
                  <div>
                    <Label htmlFor="compliance" className="text-base font-semibold mb-3 block">
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
                    <Label htmlFor="market" className="text-base font-semibold mb-3 block">
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
                    <p className="text-sm text-foreground/60 mt-2">
                      Accessibility expands addressable market by {marketExpansion}%
                    </p>
                  </div>
                </div>
              </Card>

              {/* Results Section */}
              <div className="space-y-6">
                <Card className="p-8 bg-gradient-to-br from-secondary/20 to-primary/20 border-primary/20">
                  <h2 className="text-2xl font-bold mb-6">Your Projected ROI</h2>

                  <div className="space-y-6">
                    {/* Total ROI */}
                    <div className="p-6 bg-background rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <TrendingUp className="h-6 w-6 text-primary" />
                        <h3 className="text-lg font-semibold">Total Value Generated</h3>
                      </div>
                      <p className="text-4xl font-bold text-primary">${(totalROI / 1000000).toFixed(2)}M</p>
                      <p className="text-sm text-foreground/60 mt-2">{roiMultiplier}x return on investment</p>
                    </div>

                    {/* Breakdown */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-background rounded-lg">
                        <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">Risk Mitigation</h4>
                          <p className="text-2xl font-bold text-foreground/90">
                            ${(potentialFines / 1000000).toFixed(2)}M
                          </p>
                          <p className="text-sm text-foreground/60 mt-1">Avoided compliance fines and legal costs</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-background rounded-lg">
                        <DollarSign className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">Market Expansion</h4>
                          <p className="text-2xl font-bold text-foreground/90">
                            ${(marketExpansionValue / 1000000).toFixed(2)}M
                          </p>
                          <p className="text-sm text-foreground/60 mt-1">
                            New revenue from expanded addressable market
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-background rounded-lg">
                        <Users className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">Productivity Gains</h4>
                          <p className="text-2xl font-bold text-foreground/90">
                            ${(productivityGains / 1000000).toFixed(2)}M
                          </p>
                          <p className="text-sm text-foreground/60 mt-1">Improved team efficiency and innovation</p>
                        </div>
                      </div>
                    </div>

                    {/* Net ROI */}
                    <div className="p-6 bg-background rounded-lg border-2 border-primary">
                      <h3 className="text-lg font-semibold mb-2">Net ROI (After Investment)</h3>
                      <p className="text-3xl font-bold text-primary">${(netROI / 1000000).toFixed(2)}M</p>
                      <p className="text-sm text-foreground/60 mt-2">
                        Based on average engagement cost of ${(investmentCost / 1000).toFixed(0)}K
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-3">Ready to realize these gains?</h3>
                  <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                    Schedule a consultation to discuss how we can help your organization achieve these results through
                    proactive AI governance and inclusive design.
                  </p>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <a href="/contact?service=consultation">Schedule Consultation</a>
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Calculation Methodology</h2>

            <div className="grid sm:grid-cols-2 gap-6">
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
                <Card key={index} className="p-6">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
