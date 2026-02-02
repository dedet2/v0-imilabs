"use client"

import { Lightbulb, ClipboardCheck, Calendar, Sparkles, Layers } from "lucide-react"
import type { ContentBlock } from "@/lib/blog-data"

interface ArticleContentProps {
  blocks: ContentBlock[]
}

export function ArticleContent({ blocks }: ArticleContentProps) {
  return (
    <article className="prose prose-lg max-w-none">
      {blocks.map((block, index) => (
        <ContentBlockRenderer key={index} block={block} />
      ))}
    </article>
  )
}

function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          className="text-foreground/80 leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: block.content }}
        />
      )

    case "heading2":
      return (
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-10 mb-4">
          {block.content}
        </h2>
      )

    case "heading3":
      return (
        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
          {block.content}
        </h3>
      )

    case "keyTakeaways":
      return (
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 sm:p-8 mb-10 shadow-lg border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-violet-600 to-cyan-500 h-12 w-12 rounded-lg flex items-center justify-center">
              <Lightbulb className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-foreground m-0">Key Takeaways</h2>
          </div>
          <ul className="space-y-3 text-foreground/80">
            {block.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="bg-gradient-to-br from-violet-600 to-cyan-500 h-2 w-2 rounded-full mt-2 flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )

    case "checklistCard":
      return (
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 sm:p-8 my-10 shadow-lg border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-violet-600 to-cyan-500 h-12 w-12 rounded-lg flex items-center justify-center">
              <ClipboardCheck className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-foreground m-0">{block.title}</h2>
          </div>
          <div className="space-y-6">
            {block.sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-foreground mb-2">{section.heading}</h3>
                <ul className="text-foreground/80 space-y-2 ml-4">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2">
                      <span className="text-violet-600 mt-1">{"•"}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )

    case "timelineCard":
      return (
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 sm:p-8 my-10 shadow-lg border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-violet-600 to-cyan-500 h-12 w-12 rounded-lg flex items-center justify-center">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-foreground m-0">{block.title}</h2>
          </div>
          <div className="space-y-6">
            {block.items.map((item, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-foreground mb-2">{item.heading}</h3>
                <p className="text-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )

    case "innovationCard":
      return (
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 sm:p-8 my-10 shadow-lg border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-violet-600 to-cyan-500 h-12 w-12 rounded-lg flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-foreground m-0">{block.title}</h2>
          </div>
          <div className="space-y-6">
            {block.items.map((item, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-foreground mb-2">{item.heading}</h3>
                <p className="text-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )

    case "designPatternsCard":
      return (
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 sm:p-8 my-10 shadow-lg border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-violet-600 to-cyan-500 h-12 w-12 rounded-lg flex items-center justify-center">
              <Layers className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-foreground m-0">{block.title}</h2>
          </div>
          <div className="space-y-4">
            {block.items.map((item, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-foreground mb-1">{item.heading}</h3>
                <p className="text-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )

    case "questionsCard":
      const bgClass = block.variant === "cyan" ? "bg-cyan-50" : "bg-violet-50"
      const borderClass = block.variant === "cyan" ? "border-cyan-500" : "border-violet-600"
      return (
        <div className={`${bgClass} border-l-4 ${borderClass} p-6 my-8 rounded-r-lg`}>
          {block.title && <h3 className="font-semibold text-foreground mb-4">{block.title}</h3>}
          <ul className="space-y-4 text-foreground/80">
            {block.questions.map((question, idx) => (
              <li key={idx} className="leading-relaxed italic">
                {question}
              </li>
            ))}
          </ul>
        </div>
      )

    case "practicalStepsCard":
      const isCyan = block.title.toLowerCase().includes("roadmap")
      const stepsVariant = isCyan ? "bg-cyan-50 border-cyan-500" : "bg-violet-50 border-violet-600"
      return (
        <div className={`${stepsVariant.split(" ")[0]} border-l-4 ${stepsVariant.split(" ")[1]} p-6 my-8 rounded-r-lg`}>
          <h3 className="font-semibold text-foreground mb-4">{block.title}</h3>
          <ul className="space-y-3 text-foreground/80">
            {block.items.map((item, idx) => (
              <li key={idx}>
                <strong className="text-foreground">{item.label}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </div>
      )

    default:
      return null
  }
}
