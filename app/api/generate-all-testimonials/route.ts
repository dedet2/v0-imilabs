import { type NextRequest, NextResponse } from "next/server"

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
    console.log("[v0] Starting testimonial placeholder generation...")

    const results = testimonials.map((testimonial) => ({
      ...testimonial,
      videoUrl: `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(testimonial.name)}`,
      success: true,
      note: "Placeholder - Deploy to production with FAL_KEY to generate real videos",
    }))

    console.log(`[v0] Generated ${results.length}/${testimonials.length} placeholder videos`)

    return NextResponse.json({
      success: true,
      results,
      generated: results.length,
      total: testimonials.length,
      message: "Placeholder videos generated. Configure FAL_KEY in production for AI-generated videos.",
    })
  } catch (error) {
    console.error("[v0] Placeholder generation failed:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to generate placeholders",
        message: error instanceof Error ? error.message : "Unknown error",
        results: [],
        generated: 0,
        total: testimonials.length,
      },
      { status: 500 },
    )
  }
}
