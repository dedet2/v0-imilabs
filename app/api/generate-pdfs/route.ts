import { type NextRequest, NextResponse } from "next/server"
import { PDFDocument, rgb, StandardFonts } from "pdf-lib"

const resources = [
  {
    id: "ai-governance-framework-2024",
    title: "AI Governance Framework for Enterprise",
    subtitle: "Comprehensive Implementation Guide",
    category: "whitepaper",
    pages: 28,
  },
  {
    id: "disability-inclusive-design-guide",
    title: "Disability-Inclusive AI Design",
    subtitle: "Best Practices & Standards",
    category: "whitepaper",
    pages: 24,
  },
  {
    id: "risk-management-ai-systems",
    title: "Risk Management in AI Systems",
    subtitle: "Technical Analysis Framework",
    category: "whitepaper",
    pages: 22,
  },
  {
    id: "accessibility-compliance-roadmap",
    title: "Accessibility Compliance Roadmap",
    subtitle: "Regulatory Overview",
    category: "whitepaper",
    pages: 20,
  },
  {
    id: "tech-equity-implementation-guide",
    title: "Tech Equity Implementation Guide",
    subtitle: "Step-by-Step Methodology",
    category: "whitepaper",
    pages: 26,
  },
  {
    id: "fortune-500-ai-transformation",
    title: "Fortune 500 AI Transformation",
    subtitle: "Case Study: $450M Value Delivered",
    category: "case-study",
    pages: 18,
  },
  {
    id: "healthcare-accessibility-overhaul",
    title: "Healthcare Accessibility Overhaul",
    subtitle: "Case Study: 15M Users Reached",
    category: "case-study",
    pages: 16,
  },
  {
    id: "financial-services-risk-prevention",
    title: "Financial Services Risk Prevention",
    subtitle: "Case Study: $200M Risk Mitigated",
    category: "case-study",
    pages: 17,
  },
  {
    id: "retail-inclusive-design",
    title: "Retail Inclusive Design Success",
    subtitle: "Case Study: 40% Conversion Increase",
    category: "case-study",
    pages: 15,
  },
  {
    id: "government-digital-accessibility",
    title: "Government Digital Accessibility",
    subtitle: "Case Study: State of California",
    category: "case-study",
    pages: 19,
  },
  {
    id: "ai-risk-assessment-template",
    title: "AI Risk Assessment Template",
    subtitle: "Systematic Evaluation Framework",
    category: "template",
    pages: 12,
  },
  {
    id: "accessibility-audit-checklist",
    title: "Accessibility Audit Checklist",
    subtitle: "WCAG 2.1 Compliance Verification",
    category: "template",
    pages: 14,
  },
  {
    id: "inclusive-design-toolkit",
    title: "Inclusive Design Toolkit",
    subtitle: "Practical Resources",
    category: "template",
    pages: 16,
  },
  {
    id: "compliance-documentation-template",
    title: "Compliance Documentation Template",
    subtitle: "Regulatory Record Keeping",
    category: "template",
    pages: 10,
  },
  {
    id: "stakeholder-engagement-framework",
    title: "Stakeholder Engagement Framework",
    subtitle: "Inclusive Decision-Making",
    category: "template",
    pages: 13,
  },
]

async function generateComprehensivePDF(resource: (typeof resources)[0]) {
  const pdfDoc = await PDFDocument.create()
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
  const helveticaOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique)

  const pageWidth = 612
  const pageHeight = 792
  const margin = 60
  const contentWidth = pageWidth - 2 * margin

  // Cover Page
  const coverPage = pdfDoc.addPage([pageWidth, pageHeight])

  // Purple gradient header (simulated with rectangle)
  coverPage.drawRectangle({
    x: 0,
    y: pageHeight - 250,
    width: pageWidth,
    height: 250,
    color: rgb(0.39, 0.4, 0.95),
  })

  // Category badge
  const categoryLabel = resource.category.toUpperCase().replace("-", " ")
  coverPage.drawText(categoryLabel, {
    x: margin,
    y: pageHeight - 80,
    size: 10,
    font: helveticaBold,
    color: rgb(1, 1, 1),
  })

  // Title
  const titleLines = wrapText(resource.title, contentWidth - 40, 32, helveticaBold)
  let titleY = pageHeight - 120
  titleLines.forEach((line) => {
    coverPage.drawText(line, {
      x: margin,
      y: titleY,
      size: 32,
      font: helveticaBold,
      color: rgb(1, 1, 1),
    })
    titleY -= 40
  })

  // Subtitle
  coverPage.drawText(resource.subtitle, {
    x: margin,
    y: titleY - 10,
    size: 16,
    font: helvetica,
    color: rgb(0.95, 0.95, 0.95),
  })

  // Author section
  coverPage.drawText("Dr. Dédé Tetsubayashi", {
    x: margin,
    y: 200,
    size: 18,
    font: helveticaBold,
    color: rgb(0.2, 0.2, 0.2),
  })

  coverPage.drawText("AI Governance & Tech Equity Pioneer", {
    x: margin,
    y: 180,
    size: 12,
    font: helvetica,
    color: rgb(0.4, 0.4, 0.4),
  })

  coverPage.drawText("25+ Years Experience | $1.5B+ Value Delivered", {
    x: margin,
    y: 165,
    size: 10,
    font: helvetica,
    color: rgb(0.5, 0.5, 0.5),
  })

  // Footer
  coverPage.drawText("incluu", {
    x: margin,
    y: 50,
    size: 14,
    font: helveticaBold,
    color: rgb(0.39, 0.4, 0.95),
  })

  coverPage.drawText("www.imilabs.com/incluu", {
    x: margin,
    y: 35,
    size: 9,
    font: helvetica,
    color: rgb(0.5, 0.5, 0.5),
  })

  // Executive Summary Page
  const summaryPage = pdfDoc.addPage([pageWidth, pageHeight])
  let yPos = pageHeight - margin

  summaryPage.drawText("Executive Summary", {
    x: margin,
    y: yPos,
    size: 24,
    font: helveticaBold,
    color: rgb(0.39, 0.4, 0.95),
  })

  yPos -= 40

  const summaryText = getExecutiveSummary(resource)
  const summaryLines = wrapText(summaryText, contentWidth, 12, helvetica)
  summaryLines.forEach((line) => {
    if (yPos < margin + 20) return
    summaryPage.drawText(line, {
      x: margin,
      y: yPos,
      size: 12,
      font: helvetica,
      color: rgb(0.2, 0.2, 0.2),
      lineHeight: 18,
    })
    yPos -= 18
  })

  // Key Insights Page
  const insightsPage = pdfDoc.addPage([pageWidth, pageHeight])
  yPos = pageHeight - margin

  insightsPage.drawText("Key Insights", {
    x: margin,
    y: yPos,
    size: 24,
    font: helveticaBold,
    color: rgb(0.39, 0.4, 0.95),
  })

  yPos -= 40

  const insights = getKeyInsights(resource)
  insights.forEach((insight, index) => {
    if (yPos < margin + 40) return

    // Bullet point
    insightsPage.drawCircle({
      x: margin + 5,
      y: yPos - 3,
      size: 3,
      color: rgb(0.39, 0.4, 0.95),
    })

    const insightLines = wrapText(insight, contentWidth - 20, 11, helvetica)
    insightLines.forEach((line) => {
      if (yPos < margin + 20) return
      insightsPage.drawText(line, {
        x: margin + 15,
        y: yPos,
        size: 11,
        font: helvetica,
        color: rgb(0.2, 0.2, 0.2),
      })
      yPos -= 16
    })
    yPos -= 10
  })

  // Implementation Framework Page
  const frameworkPage = pdfDoc.addPage([pageWidth, pageHeight])
  yPos = pageHeight - margin

  frameworkPage.drawText("Implementation Framework", {
    x: margin,
    y: yPos,
    size: 24,
    font: helveticaBold,
    color: rgb(0.39, 0.4, 0.95),
  })

  yPos -= 50

  const frameworks = getImplementationFramework(resource)
  frameworks.forEach((step, index) => {
    if (yPos < margin + 80) return

    // Step number box
    frameworkPage.drawRectangle({
      x: margin,
      y: yPos - 15,
      width: 30,
      height: 30,
      color: rgb(0.39, 0.4, 0.95),
    })

    frameworkPage.drawText(`${index + 1}`, {
      x: margin + 11,
      y: yPos - 5,
      size: 16,
      font: helveticaBold,
      color: rgb(1, 1, 1),
    })

    // Step title
    frameworkPage.drawText(step.title, {
      x: margin + 40,
      y: yPos,
      size: 14,
      font: helveticaBold,
      color: rgb(0.2, 0.2, 0.2),
    })

    // Step description
    const descLines = wrapText(step.description, contentWidth - 50, 10, helvetica)
    let descY = yPos - 18
    descLines.forEach((line) => {
      frameworkPage.drawText(line, {
        x: margin + 40,
        y: descY,
        size: 10,
        font: helvetica,
        color: rgb(0.4, 0.4, 0.4),
      })
      descY -= 14
    })

    yPos = descY - 25
  })

  // Add remaining content pages
  for (let i = 4; i < resource.pages; i++) {
    const contentPage = pdfDoc.addPage([pageWidth, pageHeight])
    yPos = pageHeight - margin

    // Page header
    contentPage.drawText(`${resource.title} | Page ${i + 1}`, {
      x: margin,
      y: pageHeight - 30,
      size: 8,
      font: helvetica,
      color: rgb(0.6, 0.6, 0.6),
    })

    // Section title
    const sectionTitle = getSectionTitle(resource, i)
    contentPage.drawText(sectionTitle, {
      x: margin,
      y: yPos,
      size: 18,
      font: helveticaBold,
      color: rgb(0.39, 0.4, 0.95),
    })

    yPos -= 35

    // Content
    const content = getSectionContent(resource, i)
    const contentLines = wrapText(content, contentWidth, 11, helvetica)
    contentLines.forEach((line) => {
      if (yPos < margin + 40) return
      contentPage.drawText(line, {
        x: margin,
        y: yPos,
        size: 11,
        font: helvetica,
        color: rgb(0.2, 0.2, 0.2),
      })
      yPos -= 16
    })

    // Page number
    contentPage.drawText(`${i + 1}`, {
      x: pageWidth / 2 - 10,
      y: 30,
      size: 10,
      font: helvetica,
      color: rgb(0.5, 0.5, 0.5),
    })

    // Footer
    contentPage.drawLine({
      start: { x: margin, y: 50 },
      end: { x: pageWidth - margin, y: 50 },
      thickness: 0.5,
      color: rgb(0.8, 0.8, 0.8),
    })

    contentPage.drawText("© 2025 incluu | www.imilabs.com/incluu", {
      x: margin,
      y: 35,
      size: 8,
      font: helvetica,
      color: rgb(0.6, 0.6, 0.6),
    })
  }

  const pdfBytes = await pdfDoc.save()
  return pdfBytes
}

// Helper functions for text wrapping and content generation
function wrapText(text: string, maxWidth: number, fontSize: number, font: any): string[] {
  const words = text.split(" ")
  const lines: string[] = []
  let currentLine = ""

  words.forEach((word) => {
    const testLine = currentLine + (currentLine ? " " : "") + word
    const width = testLine.length * (fontSize * 0.5) // Approximate width
    if (width > maxWidth && currentLine) {
      lines.push(currentLine)
      currentLine = word
    } else {
      currentLine = testLine
    }
  })

  if (currentLine) lines.push(currentLine)
  return lines
}

function getExecutiveSummary(resource: (typeof resources)[0]): string {
  const summaries: Record<string, string> = {
    whitepaper: `This comprehensive ${resource.title} provides expert insights and practical frameworks for implementing responsible AI systems and inclusive technology practices. Drawing from 25+ years of experience and $1.5B+ in measurable value delivered, this guide offers actionable strategies for organizations seeking to build ethical, compliant, and high-performing AI systems. The framework has been successfully implemented across Fortune 500 companies, government agencies, and innovative startups, delivering measurable ROI within 18 months.`,
    "case-study": `This detailed case study examines a real-world implementation of AI governance and tech equity principles, showcasing measurable business outcomes and lessons learned. The project demonstrates how strategic application of inclusive design and responsible AI practices can deliver significant value while mitigating risks and ensuring regulatory compliance. Key metrics include improved user satisfaction, reduced compliance costs, and enhanced operational efficiency.`,
    template: `This practical ${resource.title} provides ready-to-use frameworks and checklists for implementing best practices in AI governance and tech equity. Designed for immediate application, this template has been refined through dozens of successful implementations and includes step-by-step guidance, evaluation criteria, and success metrics. Organizations using this template report 40% faster implementation times and 60% reduction in compliance-related issues.`,
  }
  return summaries[resource.category] || summaries.whitepaper
}

function getKeyInsights(resource: (typeof resources)[0]): string[] {
  return [
    "Governance frameworks that reduce compliance costs by 40% while improving system reliability and user trust through systematic risk assessment and mitigation strategies.",
    "Risk assessment protocols preventing regulatory violations through proactive identification of potential issues, comprehensive documentation, and continuous monitoring systems.",
    "Implementation roadmaps with measurable ROI within 18 months, including detailed timelines, resource allocation, and success metrics aligned with business objectives.",
    "Inclusive design principles that expand market reach by 25-40% through accessibility improvements, cultural considerations, and user-centered development practices.",
    "Compliance strategies that streamline regulatory requirements across multiple jurisdictions, reducing legal risks and enabling faster market entry.",
    "Stakeholder engagement frameworks that build organizational buy-in and ensure sustainable implementation through clear communication and collaborative decision-making.",
  ]
}

function getImplementationFramework(resource: (typeof resources)[0]): Array<{ title: string; description: string }> {
  return [
    {
      title: "Assessment",
      description:
        "Comprehensive evaluation of current state, including system architecture, data flows, risk exposure, and compliance gaps. Includes stakeholder interviews and technical audits.",
    },
    {
      title: "Framework Design",
      description:
        "Custom governance structure tailored to organizational needs, regulatory requirements, and business objectives. Defines roles, responsibilities, and decision-making processes.",
    },
    {
      title: "Deployment",
      description:
        "Phased implementation with continuous monitoring, feedback loops, and iterative improvements. Includes training programs, documentation, and change management support.",
    },
  ]
}

function getSectionTitle(resource: (typeof resources)[0], pageIndex: number): string {
  const sections = [
    "Introduction",
    "Background & Context",
    "Methodology",
    "Key Findings",
    "Strategic Recommendations",
    "Implementation Guidelines",
    "Risk Mitigation Strategies",
    "Compliance Requirements",
    "Success Metrics",
    "Case Examples",
    "Best Practices",
    "Common Pitfalls",
    "Resource Requirements",
    "Timeline & Milestones",
    "Stakeholder Engagement",
    "Monitoring & Evaluation",
    "Continuous Improvement",
    "Future Considerations",
    "Conclusion",
    "Appendix",
  ]
  return sections[pageIndex - 4] || `Section ${pageIndex - 3}`
}

function getSectionContent(resource: (typeof resources)[0], pageIndex: number): string {
  return `This section provides detailed analysis and practical guidance on implementing ${resource.title.toLowerCase()}. The content draws from extensive research, real-world implementations, and proven methodologies developed over 25+ years of experience in AI governance and tech equity. Key considerations include regulatory compliance, stakeholder engagement, risk mitigation, and measurable business outcomes. Organizations implementing these recommendations typically see significant improvements in system reliability, user satisfaction, and operational efficiency within 12-18 months. The framework has been successfully applied across diverse industries including healthcare, financial services, retail, government, and technology sectors, demonstrating its versatility and effectiveness in various organizational contexts.`
}

export async function POST(request: NextRequest) {
  try {
    const results = []

    for (const resource of resources) {
      try {
        const pdfBytes = await generateComprehensivePDF(resource)
        const base64 = Buffer.from(pdfBytes).toString("base64")
        const dataUrl = `data:application/pdf;base64,${base64}`

        results.push({
          ...resource,
          url: dataUrl,
          downloadName: `${resource.id}.pdf`,
          success: true,
        })
      } catch (error) {
        results.push({
          ...resource,
          url: null,
          success: false,
          error: error instanceof Error ? error.message : "Unknown error",
        })
      }
    }

    const successCount = results.filter((r) => r.success).length

    return NextResponse.json({
      success: true,
      results,
      generated: successCount,
      total: resources.length,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to generate PDFs",
        message: error instanceof Error ? error.message : "Unknown error",
        results: [],
        generated: 0,
        total: resources.length,
      },
      { status: 500 },
    )
  }
}
