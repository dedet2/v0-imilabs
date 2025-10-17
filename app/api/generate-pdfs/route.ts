import { type NextRequest, NextResponse } from "next/server"
import { put } from "@vercel/blob"
import { PDFDocument, rgb, StandardFonts } from "pdf-lib"

const resources = [
  {
    id: "ai-governance-framework-2024",
    title: "AI Governance Framework 2024",
    subtitle: "A Comprehensive Guide to Responsible AI Implementation",
    category: "whitepaper",
  },
  {
    id: "disability-inclusive-design-guide",
    title: "Disability-Inclusive Design Guide",
    subtitle: "Creating Technology That Works for Everyone",
    category: "whitepaper",
  },
  {
    id: "risk-management-ai-systems",
    title: "Risk Management in AI Systems",
    subtitle: "Identifying, Assessing, and Mitigating AI Risks",
    category: "whitepaper",
  },
  {
    id: "accessibility-compliance-roadmap",
    title: "Accessibility Compliance Roadmap",
    subtitle: "Navigating WCAG, ADA, and Global Accessibility Standards",
    category: "whitepaper",
  },
  {
    id: "tech-equity-implementation-guide",
    title: "Tech Equity Implementation Guide",
    subtitle: "Building Inclusive Technology Organizations",
    category: "whitepaper",
  },
  {
    id: "fortune-500-ai-transformation",
    title: "Fortune 500 AI Transformation",
    subtitle: "Case Study: Global Technology Leader",
    category: "case-study",
  },
  {
    id: "healthcare-accessibility-overhaul",
    title: "Healthcare Accessibility Overhaul",
    subtitle: "Case Study: National Healthcare Provider",
    category: "case-study",
  },
  {
    id: "financial-services-risk-prevention",
    title: "Financial Services Risk Prevention",
    subtitle: "Case Study: Global Investment Bank",
    category: "case-study",
  },
  {
    id: "retail-inclusive-design",
    title: "Retail Inclusive Design",
    subtitle: "Case Study: E-Commerce Platform",
    category: "case-study",
  },
  {
    id: "government-digital-accessibility",
    title: "Government Digital Accessibility",
    subtitle: "Case Study: State Government Portal",
    category: "case-study",
  },
  {
    id: "ai-risk-assessment-template",
    title: "AI Risk Assessment Template",
    subtitle: "Systematic Evaluation Framework",
    category: "template",
  },
  {
    id: "accessibility-audit-checklist",
    title: "Accessibility Audit Checklist",
    subtitle: "WCAG 2.1 Compliance Verification",
    category: "template",
  },
  {
    id: "inclusive-design-toolkit",
    title: "Inclusive Design Toolkit",
    subtitle: "Practical Resources for Inclusive Product Development",
    category: "template",
  },
  {
    id: "compliance-documentation-template",
    title: "Compliance Documentation Template",
    subtitle: "Regulatory Compliance Record Keeping",
    category: "template",
  },
  {
    id: "stakeholder-engagement-framework",
    title: "Stakeholder Engagement Framework",
    subtitle: "Building Inclusive Decision-Making Processes",
    category: "template",
  },
]

async function generatePDF(resource: (typeof resources)[0]) {
  const pdfDoc = await PDFDocument.create()
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
  const timesRomanBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold)

  const page = pdfDoc.addPage([612, 792]) // Letter size
  const { width, height } = page.getSize()

  // Title
  page.drawText(resource.title, {
    x: 50,
    y: height - 100,
    size: 24,
    font: timesRomanBold,
    color: rgb(0.39, 0.4, 0.95), // Purple
  })

  // Subtitle
  page.drawText(resource.subtitle, {
    x: 50,
    y: height - 130,
    size: 14,
    font: timesRomanFont,
    color: rgb(0.3, 0.3, 0.3),
  })

  // Author
  page.drawText("Dr. Dédé Tetsubayashi", {
    x: 50,
    y: height - 160,
    size: 12,
    font: timesRomanBold,
    color: rgb(0, 0, 0),
  })

  page.drawText("AI Governance & Tech Equity Pioneer", {
    x: 50,
    y: height - 175,
    size: 10,
    font: timesRomanFont,
    color: rgb(0.4, 0.4, 0.4),
  })

  // Content
  const content = `This comprehensive ${resource.category} provides expert insights and practical frameworks for implementing responsible AI systems and inclusive technology practices.

Key Topics Covered:
• Strategic frameworks for AI governance
• Risk assessment and mitigation strategies
• Compliance with global regulations
• Inclusive design principles
• Measurable ROI and business value

About the Author:
Dr. Dédé Tetsubayashi is a recognized leader in AI governance and tech equity, with over $1.5B in measurable value delivered across Fortune 500 companies and innovative startups.

For more information, visit: incluu.com`

  const lines = content.split("\n")
  let yPosition = height - 220

  lines.forEach((line) => {
    page.drawText(line, {
      x: 50,
      y: yPosition,
      size: 11,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
      maxWidth: width - 100,
    })
    yPosition -= 18
  })

  // Footer
  page.drawText(`© ${new Date().getFullYear()} incluu | Expert AI Governance & Tech Equity Solutions`, {
    x: 50,
    y: 30,
    size: 8,
    font: timesRomanFont,
    color: rgb(0.5, 0.5, 0.5),
  })

  return await pdfDoc.save()
}

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] Starting PDF generation...")

    const results = []

    for (const resource of resources) {
      console.log(`[v0] Generating PDF for ${resource.title}...`)

      try {
        const pdfBytes = await generatePDF(resource)

        const blob = await put(`downloads/${resource.id}.pdf`, pdfBytes, {
          access: "public",
          addRandomSuffix: false,
          contentType: "application/pdf",
        })

        console.log(`[v0] ✓ PDF uploaded: ${blob.url}`)

        results.push({
          ...resource,
          url: blob.url,
        })
      } catch (error) {
        console.error(`[v0] ✗ Failed to generate PDF for ${resource.title}:`, error)
        results.push({
          ...resource,
          url: null,
          error: error instanceof Error ? error.message : "Unknown error",
        })
      }
    }

    console.log(`[v0] Generated ${results.filter((r) => r.url).length}/${resources.length} PDFs`)

    return NextResponse.json({
      success: true,
      results,
      generated: results.filter((r) => r.url).length,
      total: resources.length,
    })
  } catch (error) {
    console.error("[v0] PDF generation failed:", error)
    return NextResponse.json({ error: "Failed to generate PDFs" }, { status: 500 })
  }
}
