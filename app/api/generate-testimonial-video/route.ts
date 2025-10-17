import { type NextRequest, NextResponse } from "next/server"
import * as fal from "@fal-ai/serverless-client"

fal.config({
  credentials: process.env.FAL_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { name, title, company, testimonialText } = await request.json()

    if (!name || !testimonialText) {
      return NextResponse.json({ error: "Name and testimonial text are required" }, { status: 400 })
    }

    // Using Hedra's character-1 model for realistic talking head videos
    const result = await fal.subscribe("fal-ai/hedra/character-1", {
      input: {
        text: testimonialText,
        aspect_ratio: "16:9",
        // Generate a professional avatar based on the person's role
        image_url: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
      },
    })

    const videoUrl = result.video_url

    if (!videoUrl) {
      throw new Error("No video generated")
    }

    return NextResponse.json({
      videoUrl,
      name,
      title,
      company,
    })
  } catch (error) {
    console.error("[v0] Error generating testimonial video:", error)
    return NextResponse.json({ error: "Failed to generate video testimonial" }, { status: 500 })
  }
}
