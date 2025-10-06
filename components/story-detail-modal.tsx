"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download } from "@/components/icons"
import { SamplePDFPreview } from "@/components/sample-pdf-preview"

interface StoryDetailModalProps {
  isOpen: boolean
  onClose: () => void
  story: {
    title: string
    industry: string
    challenge: string
    solution: string
    result: string
    metrics: Array<{ value: string; label: string }>
    tags: string[]
  }
}

export function StoryDetailModal({ isOpen, onClose, story }: StoryDetailModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{story.title}</DialogTitle>
          <Badge variant="outline" className="w-fit">
            {story.industry}
          </Badge>
        </DialogHeader>

        <div className="space-y-6">
          {/* Story Preview */}
          <SamplePDFPreview title={story.title} type="case-study" />

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4">
            {story.metrics.map((metric, index) => (
              <div key={index} className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Challenge */}
          <div>
            <h3 className="font-bold text-lg mb-2">Challenge</h3>
            <p className="text-muted-foreground leading-relaxed">{story.challenge}</p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="font-bold text-lg mb-2">Solution</h3>
            <p className="text-muted-foreground leading-relaxed">{story.solution}</p>
          </div>

          {/* Result */}
          <div>
            <h3 className="font-bold text-lg mb-2">Result</h3>
            <p className="text-muted-foreground leading-relaxed">{story.result}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {story.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Download CTA */}
          <div className="border-t pt-6">
            <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600">
              <Download className="mr-2 h-4 w-4" />
              Download Full Case Study (PDF)
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
