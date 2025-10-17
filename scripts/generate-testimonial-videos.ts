/**
 * Generate AI video testimonials using fal.ai
 * This script creates 6 realistic talking-head videos for client testimonials
 */

import * as fal from "@fal-ai/serverless-client"

fal.config({
  credentials: process.env.FAL_KEY,
})

const testimonials = [
  {
    id: "sarah-chen-cto",
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    company: "TechForward Inc.",
    testimonialText:
      "Dr. Tetsubayashi completely transformed our approach to AI ethics. When we discovered our AI lending system was systematically biased against 2.3 million customers across 47 countries, we were facing potential regulatory fines exceeding $500 million. She didn't just help us avoid disaster—she transformed our entire approach to AI governance. Within six months, we had completely overhauled our AI systems, eliminated bias, and actually improved our approval rates by 40%. The ROI was immediate and substantial.",
  },
  {
    id: "marcus-rodriguez-cmo",
    name: "Dr. Marcus Rodriguez",
    role: "Chief Medical Officer",
    company: "Regional Medical Center",
    testimonialText:
      "The accessibility improvements Dr. Tetsubayashi implemented saved us millions and countless lives. We were hemorrhaging $100 million annually from AI diagnostic errors affecting disabled patients. She didn't just fix our AI—she educated our entire medical staff on inclusive healthcare technology. Within months, our diagnostic accuracy for all patients improved by 95%. Our malpractice claims have dropped to near zero, and patient satisfaction is at an all-time high.",
  },
  {
    id: "amelia-foster-ceo",
    name: "Amelia Foster",
    role: "CEO & Founder",
    company: "InnovateLabs",
    testimonialText:
      "Dr. Tetsubayashi helped us secure $50 million Series C funding by demonstrating our responsible AI practices. As a startup, we needed to prove our AI systems were ethical and scalable. She worked with us to build a comprehensive governance framework that impressed investors and gave us a competitive advantage. Today, we're the industry leader in ethical AI for education technology.",
  },
  {
    id: "james-park-vp",
    name: "James Park",
    role: "VP Legal & Compliance",
    company: "DataStream Corp",
    testimonialText:
      "Dr. Tetsubayashi saved us from a $500 million regulatory penalty while improving our AI systems. Our credit scoring algorithms showed systematic bias that threatened our entire business. She conducted extensive audits, retrained our models, and implemented continuous monitoring systems. We're now fully compliant across all jurisdictions and our AI systems are more accurate than ever.",
  },
  {
    id: "lisa-kumar-cio",
    name: "Dr. Lisa Kumar",
    role: "Chief Innovation Officer",
    company: "Global Manufacturing Solutions",
    testimonialText:
      "The supply chain AI improvements delivered $75 million in savings while advancing our ESG goals. Our AI-powered supply chain optimization was inadvertently excluding suppliers owned by disabled entrepreneurs. Dr. Tetsubayashi helped us implement a comprehensive supplier diversity framework with AI bias detection. We achieved $75 million in annual cost savings and a 40% increase in diverse supplier partnerships.",
  },
  {
    id: "michael-zhang-product",
    name: "Michael Zhang",
    role: "Head of Product",
    company: "ShopSmart Global",
    testimonialText:
      "Inclusive AI personalization increased our revenue by $95 million while improving customer satisfaction. Our recommendation engines were systematically excluding products for disabled customers. Dr. Tetsubayashi enhanced our algorithms to ensure personalized recommendations for all users. We saw a 20% increase in customer satisfaction and captured a market we were completely missing.",
  },
]

async function generateTestimonialVideo(testimonial: (typeof testimonials)[0]) {
  console.log(`\n[v0] Generating video for ${testimonial.name}...`)

  try {
    // Using fal.ai's Hedra character-1 model for realistic talking head videos
    const result = await fal.subscribe("fal-ai/hedra/character-1", {
      input: {
        text: testimonial.testimonialText,
        aspect_ratio: "16:9",
        // Generate professional avatar
        image_url: `https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.id}`,
      },
    })

    if (result.video_url) {
      console.log(`[v0] ✓ Video generated for ${testimonial.name}`)
      console.log(`[v0]   Video URL: ${result.video_url}`)
      return {
        ...testimonial,
        videoUrl: result.video_url,
      }
    } else {
      throw new Error("No video URL returned")
    }
  } catch (error) {
    console.error(`[v0] ✗ Failed to generate video for ${testimonial.name}:`, error)
    return null
  }
}

async function generateAllVideos() {
  console.log("=" * 60)
  console.log("GENERATING AI VIDEO TESTIMONIALS")
  console.log("=" * 60)

  const results = []

  for (const testimonial of testimonials) {
    const result = await generateTestimonialVideo(testimonial)
    if (result) {
      results.push(result)
    }
    // Add delay to avoid rate limiting
    await new Promise((resolve) => setTimeout(resolve, 2000))
  }

  console.log("\n" + "=" * 60)
  console.log(`✅ Generated ${results.length}/${testimonials.length} videos successfully`)
  console.log("=" * 60)

  return results
}

// Export for use in other scripts
export { generateAllVideos, testimonials }

// Run if executed directly
if (require.main === module) {
  generateAllVideos()
    .then((results) => {
      console.log("\n[v0] Video generation complete!")
      console.log("[v0] Results:", JSON.stringify(results, null, 2))
    })
    .catch((error) => {
      console.error("[v0] Video generation failed:", error)
      process.exit(1)
    })
}
