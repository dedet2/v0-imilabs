"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Download } from "@/components/icons"
import Image from "next/image"

interface SamplePDFPreviewProps {
  title: string
  type: "whitepaper" | "tool" | "report"
}

export function SamplePDFPreview({ title, type }: SamplePDFPreviewProps) {
  const getTypeColor = () => {
    switch (type) {
      case "whitepaper":
        return "from-purple-600 to-purple-700"
      case "tool":
        return "from-cyan-600 to-cyan-700"
      case "report":
        return "from-purple-600 via-purple-500 to-cyan-600"
    }
  }

  const getTypeLabel = () => {
    switch (type) {
      case "whitepaper":
        return "Research Whitepaper"
      case "tool":
        return "Implementation Tool"
      case "report":
        return "Industry Report"
    }
  }

  return (
    <Card className="bg-white border-2 border-purple-200 max-w-2xl mx-auto">
      <CardContent className="p-0">
        {/* PDF Header */}
        <div className={`bg-gradient-to-r ${getTypeColor()} p-8 text-white`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="relative h-12 w-12 rounded-lg overflow-hidden bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Image src="/incluu-logo.png" alt="incluu logo" width={32} height={32} className="object-contain" />
            </div>
            <span className="text-xl font-bold">incluu</span>
          </div>
          <Badge className="mb-4 bg-white/20 text-white border-white/30" variant="outline">
            {getTypeLabel()}
          </Badge>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-balance">{title}</h1>
          <p className="text-white/90 text-sm">
            Expert insights from Dr. Dédé Tetsubayashi • AI Governance & Tech Equity Pioneer
          </p>
        </div>

        {/* PDF Content Preview */}
        <div className="p-8 space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-3 text-purple-700">Executive Summary</h2>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="h-3 bg-gray-200 rounded w-full" />
              <div className="h-3 bg-gray-200 rounded w-full" />
              <div className="h-3 bg-gray-200 rounded w-5/6" />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3 text-cyan-700">Key Insights</h2>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-3">
                  <div className="h-2 w-2 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                  <div className="flex-1 space-y-1">
                    <div className="h-3 bg-gray-200 rounded w-full" />
                    <div className="h-3 bg-gray-200 rounded w-4/5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3 text-purple-700">Implementation Framework</h2>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="h-16 bg-gradient-to-br from-purple-100 to-cyan-100 rounded" />
                  <div className="h-2 bg-gray-200 rounded w-full" />
                  <div className="h-2 bg-gray-200 rounded w-3/4" />
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>25-page comprehensive guide</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>PDF Format • 2.4 MB</span>
              </div>
            </div>
          </div>
        </div>

        {/* PDF Footer */}
        <div className="bg-gray-50 p-6 border-t">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground mb-1">Dr. Dédé Tetsubayashi</p>
              <p>AI Governance Expert • Tech Equity Pioneer</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-foreground mb-1">incluu</p>
              <p>www.imilabs.com/incluu</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
