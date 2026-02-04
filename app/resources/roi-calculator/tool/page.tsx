"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, TrendingUp, DollarSign, Clock, ArrowLeft, Settings } from "@/components/icons"

export default function ROICalculatorToolPage() {
  // Assessment Parameters
  const [timePerStage, setTimePerStage] = useState(100)
  const [stagesPerProduct, setStagesPerProduct] = useState(6)
  const [timeReduction, setTimeReduction] = useState(50)
  const [blendedHourlyRate, setBlendedHourlyRate] = useState(200)
  const [productsPerYear, setProductsPerYear] = useState(12)

  // Calculate ROI metrics
  const calculations = useMemo(() => {
    const timePerAssessment = timePerStage * stagesPerProduct
    const timeSavedPerAssessment = timePerAssessment * (timeReduction / 100)
    const totalAssessmentsPerYear = productsPerYear
    const annualTimeSaved = timeSavedPerAssessment * totalAssessmentsPerYear
    const annualCostSavings = annualTimeSaved * blendedHourlyRate
    const investmentCost = 50000 // Assumed investment
    const roi = ((annualCostSavings - investmentCost) / investmentCost) * 100
    const paybackPeriod = investmentCost / (annualCostSavings / 12)
    const remainingTime = (timePerAssessment * totalAssessmentsPerYear) - annualTimeSaved

    return {
      timePerAssessment,
      timeSavedPerAssessment,
      totalAssessmentsPerYear,
      annualTimeSaved,
      annualCostSavings,
      roi,
      paybackPeriod,
      remainingTime,
    }
  }, [timePerStage, stagesPerProduct, timeReduction, blendedHourlyRate, productsPerYear])

  // Chart data for Time & Cost Comparison
  const beforeIncluuCost = calculations.timePerAssessment * calculations.totalAssessmentsPerYear * blendedHourlyRate
  const afterIncluuCost = beforeIncluuCost - calculations.annualCostSavings

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400">
      {/* Header */}
      <div className="container mx-auto px-4 pt-6">
        <Link
          href="/resources/roi-calculator"
          className="inline-flex items-center text-white/80 hover:text-white text-sm bg-purple-700/50 px-4 py-2 rounded-full"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Landing
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 mb-4">
              <Calculator className="h-8 w-8" />
              <h1 className="text-3xl sm:text-4xl font-bold">AI Risk Assessment ROI Calculator</h1>
            </div>
            <p className="text-lg text-white/90">
              Calculate the exact financial impact of automating your risk assessments with Incluu
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Section - Assessment Parameters */}
              <Card className="p-6 bg-white">
                <div className="flex items-center gap-2 mb-6">
                  <Settings className="h-5 w-5 text-gray-600" />
                  <h2 className="text-xl font-bold text-gray-900">Assessment Parameters</h2>
                </div>

                <div className="space-y-6">
                  {/* Time per Stage */}
                  <div>
                    <Label htmlFor="timePerStage" className="text-sm font-medium text-gray-700">
                      Time per Stage (Hours)
                    </Label>
                    <Input
                      id="timePerStage"
                      type="number"
                      value={timePerStage}
                      onChange={(e) => setTimePerStage(Number(e.target.value))}
                      className="mt-1"
                    />
                    <p className="text-xs text-gray-500 mt-1">How long does one manual risk assessment stage take?</p>
                  </div>

                  {/* Stages per Product */}
                  <div>
                    <Label htmlFor="stagesPerProduct" className="text-sm font-medium text-gray-700">
                      Stages per Product
                    </Label>
                    <Input
                      id="stagesPerProduct"
                      type="number"
                      value={stagesPerProduct}
                      onChange={(e) => setStagesPerProduct(Number(e.target.value))}
                      className="mt-1"
                    />
                    <p className="text-xs text-gray-500 mt-1">How many assessment stages per product lifecycle?</p>
                  </div>

                  {/* Time Reduction */}
                  <div>
                    <Label htmlFor="timeReduction" className="text-sm font-medium text-gray-700">
                      Time Reduction with Incluu (%)
                    </Label>
                    <Input
                      id="timeReduction"
                      type="number"
                      value={timeReduction}
                      onChange={(e) => setTimeReduction(Number(e.target.value))}
                      className="mt-1"
                    />
                    <p className="text-xs text-gray-500 mt-1">Estimated percentage of time saved using Incluu</p>
                  </div>

                  {/* Blended Hourly Rate */}
                  <div>
                    <Label htmlFor="blendedHourlyRate" className="text-sm font-medium text-gray-700">
                      Blended Hourly Rate ($)
                    </Label>
                    <Input
                      id="blendedHourlyRate"
                      type="number"
                      value={blendedHourlyRate}
                      onChange={(e) => setBlendedHourlyRate(Number(e.target.value))}
                      className="mt-1"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Average hourly rate of employees handling assessments
                    </p>
                  </div>

                  {/* Products Assessed per Year */}
                  <div>
                    <Label htmlFor="productsPerYear" className="text-sm font-medium text-gray-700">
                      Products Assessed per Year
                    </Label>
                    <Input
                      id="productsPerYear"
                      type="number"
                      value={productsPerYear}
                      onChange={(e) => setProductsPerYear(Number(e.target.value))}
                      className="mt-1"
                    />
                    <p className="text-xs text-gray-500 mt-1">Number of products requiring risk assessment annually</p>
                  </div>
                </div>
              </Card>

              {/* Results Section - ROI Impact Analysis */}
              <Card className="p-6 bg-white">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="h-5 w-5 text-gray-600" />
                  <h2 className="text-xl font-bold text-gray-900">ROI Impact Analysis</h2>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-cyan-500 rounded-xl p-4 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="h-4 w-4" />
                      <span className="text-xs font-medium">Annual Time Saved</span>
                    </div>
                    <p className="text-2xl font-bold">{calculations.annualTimeSaved.toLocaleString()} hrs</p>
                  </div>
                  <div className="bg-green-500 rounded-xl p-4 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <DollarSign className="h-4 w-4" />
                      <span className="text-xs font-medium">Annual Savings</span>
                    </div>
                    <p className="text-2xl font-bold">${calculations.annualCostSavings.toLocaleString()}</p>
                  </div>
                  <div className="bg-purple-500 rounded-xl p-4 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-xs font-medium">ROI</span>
                    </div>
                    <p className="text-2xl font-bold">{calculations.roi.toFixed(0)}%</p>
                  </div>
                  <div className="bg-orange-500 rounded-xl p-4 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="h-4 w-4" />
                      <span className="text-xs font-medium">Payback Period</span>
                    </div>
                    <p className="text-2xl font-bold">{calculations.paybackPeriod.toFixed(0)} mo</p>
                  </div>
                </div>

                {/* Detailed Breakdown */}
                <div className="space-y-3 text-sm border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time per Assessment:</span>
                    <span className="font-medium">{calculations.timePerAssessment} hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time Saved per Assessment:</span>
                    <span className="font-medium">{calculations.timeSavedPerAssessment} hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Assessments per Year:</span>
                    <span className="font-medium">{calculations.totalAssessmentsPerYear}</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="text-gray-900 font-semibold">Annual Cost Savings:</span>
                    <span className="font-bold text-green-600">
                      ${calculations.annualCostSavings.toLocaleString()}
                    </span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Charts Section */}
            <div className="grid lg:grid-cols-2 gap-8 mt-8">
              {/* Time & Cost Comparison */}
              <Card className="p-6 bg-white">
                <h3 className="font-semibold mb-4 text-gray-900">Time & Cost Comparison</h3>
                <div className="h-64 flex items-end justify-center gap-16">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-24 bg-cyan-400 rounded-t-lg transition-all duration-500"
                      style={{ height: `${Math.min((beforeIncluuCost / beforeIncluuCost) * 200, 200)}px` }}
                    />
                    <p className="mt-2 text-sm text-gray-600">Before Incluu</p>
                    <p className="text-xs text-gray-500">${beforeIncluuCost.toLocaleString()}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div
                      className="w-24 bg-green-400 rounded-t-lg transition-all duration-500"
                      style={{ height: `${Math.min((afterIncluuCost / beforeIncluuCost) * 200, 200)}px` }}
                    />
                    <p className="mt-2 text-sm text-gray-600">After Incluu</p>
                    <p className="text-xs text-gray-500">${afterIncluuCost.toLocaleString()}</p>
                  </div>
                </div>
              </Card>

              {/* Annual Time Allocation */}
              <Card className="p-6 bg-white">
                <h3 className="font-semibold mb-4 text-gray-900">Annual Time Allocation</h3>
                <div className="h-64 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    {/* Simple pie chart using CSS */}
                    <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="4"
                        strokeDasharray={`${(calculations.annualTimeSaved / (calculations.annualTimeSaved + calculations.remainingTime)) * 100} 100`}
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        stroke="#EF4444"
                        strokeWidth="4"
                        strokeDasharray={`${(calculations.remainingTime / (calculations.annualTimeSaved + calculations.remainingTime)) * 100} 100`}
                        strokeDashoffset={`-${(calculations.annualTimeSaved / (calculations.annualTimeSaved + calculations.remainingTime)) * 100}`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900">
                          {((calculations.annualTimeSaved / (calculations.annualTimeSaved + calculations.remainingTime)) * 100).toFixed(0)}%
                        </p>
                        <p className="text-xs text-gray-500">Time Saved</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-8 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-sm text-green-600">
                      Time Saved: {calculations.annualTimeSaved.toLocaleString()}h
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="text-sm text-red-600">
                      Remaining Time: {calculations.remainingTime.toLocaleString()}h
                    </span>
                  </div>
                </div>
              </Card>
            </div>

            {/* CTA Section */}
            <Card className="mt-8 p-8 bg-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Ready to Achieve These Results?</h3>
                <p className="text-gray-600 mb-6">
                  Based on your inputs, Incluu could save your organization{" "}
                  <span className="font-semibold text-green-600">
                    ${calculations.annualCostSavings.toLocaleString()}
                  </span>{" "}
                  annually while reducing risk assessment time by{" "}
                  <span className="font-semibold text-cyan-600">
                    {calculations.annualTimeSaved.toLocaleString()} hours
                  </span>
                  .
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600"
                  >
                    <Link href="/resources/ai-compliance">Get AI Compliance Assessment</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/resources/mission-mechanics">Transform Your Operations</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
