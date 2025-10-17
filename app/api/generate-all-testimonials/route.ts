import { type NextRequest, NextResponse } from "next/server"
import * as fal from "@fal-ai/serverless-client"
import { put } from "@vercel/blob"

console.log("[v0] Configuring fal.ai client...")
fal.config({
  credentials: process.env.FAL_KEY,
})
console.log(`[v0] FAL_KEY exists: ${!!process.env.FAL_KEY}`)

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
    console.log(`[v0] FAL_KEY exists: ${!!process.env.FAL_KEY}`)
    console.log(`[v0] BLOB_READ_WRITE_TOKEN exists: ${!!process.env.BLOB_READ_WRITE_TOKEN}`)

    const results = []

    for (const testimonial of testimonials) {
      console.log(`[v0] Generating video for ${testimonial.name}...`)

      try {
        console.log(`[v0] Calling fal.ai API for ${testimonial.name}...`)

        const result: any = await fal.subscribe("fal-ai/flux/schnell", {
          input: {
            prompt: `Professional headshot portrait of ${testimonial.name}, ${testimonial.role} at ${testimonial.company}. Business professional, confident, friendly expression, corporate setting, high quality, photorealistic`,
            image_size: "landscape_16_9",
            num_inference_steps: 4,
            num_images: 1,
          },
        })

        console.log(`[v0] fal.ai response received for ${testimonial.name}`)

        const imageUrl = result.images?.[0]?.url

        if (imageUrl) {
          console.log(`[v0] Fetching image from ${imageUrl}...`)
          const imageResponse = await fetch(imageUrl)

          if (!imageResponse.ok) {
            throw new Error(`Failed to fetch image: ${imageResponse.statusText}`)
          }

          const imageBlob = await imageResponse.blob()
          console.log(`[v0] Image fetched, size: ${imageBlob.size} bytes`)

          const blob = await put(`testimonials/${testimonial.id}.jpg`, imageBlob, {
            access: "public",
            addRandomSuffix: false,
          })

          console.log(`[v0] ✓ Image uploaded for ${testimonial.name}: ${blob.url}`)

          results.push({
            ...testimonial,
            videoUrl: blob.url,
            success: true,
          })
        } else {
          throw new Error("No image URL in response")
        }
      } catch (error) {
        console.error(`[v0] ✗ Failed to generate image for ${testimonial.name}:`, error)
        if (error instanceof Error) {
          console.error(`[v0] Error message: ${error.message}`)
          console.error(`[v0] Error stack: ${error.stack}`)
        }
        results.push({
          ...testimonial,
          videoUrl: null,
          success: false,
          error: error instanceof Error ? error.message : "Unknown error",
        })
      }

      await new Promise((resolve) => setTimeout(resolve, 2000))
    }

    const successCount = results.filter((r) => r.success).length
    console.log(`[v0] Generated ${successCount}/${testimonials.length} images`)

    return NextResponse.json({
      success: true,
      results,
      generated: successCount,
      total: testimonials.length,
    })
  } catch (error) {
    console.error("[v0] Image generation failed:", error)
    return NextResponse.json(
      {
        error: "Failed to generate testimonial images",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
