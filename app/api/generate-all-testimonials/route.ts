import { type NextRequest, NextResponse } from "next/server"
import * as fal from "@fal-ai/serverless-client"
import { put } from "@vercel/blob"

fal.config({
  credentials: process.env.FAL_KEY,
})

const testimonials = [
  {
    id: "sarah-chen-cto",
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    company: "TechForward Inc.",
    text: "Dr. Tetsubayashi completely transformed our approach to AI ethics. When we discovered our AI lending system was systematically biased, we were facing potential regulatory fines exceeding $500 million. Within six months, we had completely overhauled our AI systems, eliminated bias, and improved our approval rates by 40%.",
  },
  {
    id: "marcus-rodriguez-cmo",
    name: "Dr. Marcus Rodriguez",
    role: "Chief Medical Officer",
    company: "Regional Medical Center",
    text: "The accessibility improvements Dr. Tetsubayashi implemented saved us millions and countless lives. Within months, our diagnostic accuracy for all patients improved by 95%. Our malpractice claims have dropped to near zero.",
  },
  {
    id: "amelia-foster-ceo",
    name: "Amelia Foster",
    role: "CEO & Founder",
    company: "InnovateLabs",
    text: "Dr. Tetsubayashi helped us secure $50 million Series C funding by demonstrating our responsible AI practices. She worked with us to build a comprehensive governance framework that impressed investors and gave us a competitive advantage.",
  },
  {
    id: "james-park-vp",
    name: "James Park",
    role: "VP Legal & Compliance",
    company: "DataStream Corp",
    text: "Dr. Tetsubayashi saved us from a $500 million regulatory penalty while improving our AI systems. She conducted extensive audits, retrained our models, and implemented continuous monitoring. We're now fully compliant across all jurisdictions.",
  },
  {
    id: "lisa-kumar-cio",
    name: "Dr. Lisa Kumar",
    role: "Chief Innovation Officer",
    company: "Global Manufacturing Solutions",
    text: "The supply chain AI improvements delivered $75 million in savings while advancing our ESG goals. We achieved $75 million in annual cost savings and a 40% increase in diverse supplier partnerships.",
  },
  {
    id: "michael-zhang-product",
    name: "Michael Zhang",
    role: "Head of Product",
    company: "ShopSmart Global",
    text: "Inclusive AI personalization increased our revenue by $95 million while improving customer satisfaction. We saw a 20% increase in customer satisfaction and captured a market we were completely missing.",
  },
]

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] Starting testimonial video generation...")

    const results = []

    for (const testimonial of testimonials) {
      console.log(`[v0] Generating video for ${testimonial.name}...`)

      try {
        // Generate video using fal.ai Hedra model
        const result = await fal.subscribe("fal-ai/hedra/character-1", {
          input: {
            text: testimonial.text,
            aspect_ratio: "16:9",
            image_url: `https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.id}`,
          },
        })

        if (result.video_url) {
          // Fetch the video and upload to Vercel Blob
          const videoResponse = await fetch(result.video_url)
          const videoBlob = await videoResponse.blob()

          const blob = await put(`testimonials/${testimonial.id}.mp4`, videoBlob, {
            access: "public",
            addRandomSuffix: false,
          })

          console.log(`[v0] ✓ Video uploaded for ${testimonial.name}: ${blob.url}`)

          results.push({
            ...testimonial,
            videoUrl: blob.url,
          })
        }
      } catch (error) {
        console.error(`[v0] ✗ Failed to generate video for ${testimonial.name}:`, error)
        results.push({
          ...testimonial,
          videoUrl: null,
          error: error instanceof Error ? error.message : "Unknown error",
        })
      }

      // Add delay to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 2000))
    }

    console.log(`[v0] Generated ${results.filter((r) => r.videoUrl).length}/${testimonials.length} videos`)

    return NextResponse.json({
      success: true,
      results,
      generated: results.filter((r) => r.videoUrl).length,
      total: testimonials.length,
    })
  } catch (error) {
    console.error("[v0] Video generation failed:", error)
    return NextResponse.json({ error: "Failed to generate testimonial videos" }, { status: 500 })
  }
}
