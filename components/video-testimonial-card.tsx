"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play } from "@/components/icons"
import { useState } from "react"

interface VideoTestimonialCardProps {
  title: string
  videoUrl: string | null
  duration: string
  category: string
  industry: string
  company: string
  quote: string
  author: string
  role: string
  companyName: string
}

export function VideoTestimonialCard({
  title,
  videoUrl,
  duration,
  category,
  industry,
  company,
  quote,
  author,
  role,
  companyName,
}: VideoTestimonialCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
      <div className="relative aspect-video bg-gradient-to-br from-purple-100 to-cyan-100">
        {videoUrl ? (
          <>
            {!isPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="h-16 w-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-all hover:scale-110"
                  aria-label="Play video"
                >
                  <Play className="h-8 w-8 text-purple-600 ml-1" />
                </button>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {duration}
                </div>
              </div>
            ) : (
              <video
                src={videoUrl}
                controls
                autoPlay
                className="w-full h-full object-cover"
                onEnded={() => setIsPlaying(false)}
              >
                Your browser does not support the video tag.
              </video>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="h-16 w-16 rounded-full bg-purple-200 flex items-center justify-center mx-auto mb-3">
                <Play className="h-8 w-8 text-purple-600" />
              </div>
              <p className="text-sm text-muted-foreground">Video coming soon</p>
            </div>
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-1 mb-3">
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {industry}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {company}
          </Badge>
        </div>
        <h3 className="font-bold mb-3">{title}</h3>
        <p className="text-sm text-muted-foreground italic mb-4">"{quote}"</p>
        <div className="border-t pt-4">
          <div className="font-semibold text-sm">{author}</div>
          <div className="text-xs text-muted-foreground">{role}</div>
          <div className="text-xs text-muted-foreground">{companyName}</div>
        </div>
      </CardContent>
    </Card>
  )
}
