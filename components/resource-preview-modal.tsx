"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "@/components/icons"
import { ResourceGateModal } from "@/components/resource-gate-modal"

interface ResourcePreviewModalProps {
  title: string
  category: string
  badge: string
  badgeColor: string
  description: string
  pageCount: string
  fileSize: string
  executiveSummary: string
  keyInsights: string[]
  implementationSteps: Array<{
    title: string
    description: string
  }>
  challenge: string
  solution: string
  result: string
  tags: string[]
  metrics: Array<{
    value: string
    label: string
    sublabel: string
  }>
  children: React.ReactNode
}

export function ResourcePreviewModal({
  title,
  category,
  badge,
  badgeColor,
  description,
  pageCount,
  fileSize,
  executiveSummary,
  keyInsights,
  implementationSteps,
  challenge,
  solution,
  result,
  tags,
  metrics,
  children,
}: ResourcePreviewModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const getBadgeClasses = (color: string) => {
    switch (color) {
      case "purple":
        return "bg-purple-100 text-purple-700 border-purple-200"
      case "cyan":
        return "bg-cyan-100 text-cyan-700 border-cyan-200"
      case "purple-cyan":
        return "bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-700 border-purple-200"
      default:
        return "bg-purple-100 text-purple-700 border-purple-200"
    }
  }

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{children}</div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-start gap-4 mb-4">
              <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <Badge className={`mb-2 ${getBadgeClasses(badgeColor)}`} variant="outline">
                  {badge}
                </Badge>
                <DialogTitle className="text-2xl leading-tight">{title}</DialogTitle>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-6">
            {/* Executive Summary */}
            <div>
              <h3 className="text-xl font-bold text-purple-600 mb-3">Executive Summary</h3>
              <p className="text-muted-foreground leading-relaxed">{executiveSummary}</p>
            </div>

            {/* Key Insights */}
            <div>
              <h3 className="text-xl font-bold text-purple-600 mb-3">Key Insights</h3>
              <ul className="space-y-2">
                {keyInsights.map((insight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span className="text-muted-foreground">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Implementation Framework */}
            <div>
              <h3 className="text-xl font-bold text-purple-600 mb-3">Implementation Framework</h3>
              <div className="grid grid-cols-3 gap-4">
                {implementationSteps.map((step, index) => (
                  <div key={index} className="bg-gradient-to-br from-purple-50 to-cyan-50 p-4 rounded-lg">
                    <div className="font-semibold mb-1">{step.title}</div>
                    <div className="text-sm text-muted-foreground">{step.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Document Info */}
            <div className="flex items-center justify-between py-4 border-y">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileText className="h-4 w-4" />
                <span>{pageCount}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Download className="h-4 w-4" />
                <span>PDF Format • {fileSize}</span>
              </div>
            </div>

            {/* Author Info */}
            <div className="flex items-center justify-between py-4 border-b">
              <div>
                <div className="font-semibold">Dr. Dédé Tetsubayashi</div>
                <div className="text-sm text-muted-foreground">{description}</div>
              </div>
              <div className="text-right">
                <div className="font-semibold">incluu</div>
                <div className="text-sm text-muted-foreground">www.imilabs.com/incluu</div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 py-6">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold mb-1">{metric.label}</div>
                  <div className="text-xs text-muted-foreground">{metric.sublabel}</div>
                </div>
              ))}
            </div>

            {/* Challenge */}
            <div>
              <h3 className="text-xl font-bold mb-3">Challenge</h3>
              <p className="text-muted-foreground leading-relaxed">{challenge}</p>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-xl font-bold mb-3">Solution</h3>
              <p className="text-muted-foreground leading-relaxed">{solution}</p>
            </div>

            {/* Result */}
            <div>
              <h3 className="text-xl font-bold mb-3">Result</h3>
              <p className="text-muted-foreground leading-relaxed">{result}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Download CTA */}
            <ResourceGateModal
              resourceTitle={title}
              resourceType={category.toLowerCase()}
              resourceDescription={executiveSummary}
            >
              <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90 text-lg py-6">
                <Download className="mr-2 h-5 w-5" />
                Download Full {category} (PDF)
              </Button>
            </ResourceGateModal>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
