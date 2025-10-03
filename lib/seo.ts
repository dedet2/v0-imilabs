export interface SEOConfig {
  title: string
  description: string
  url: string
  image?: string
  type?: string
}

export function generateStructuredData(config: SEOConfig) {
  const baseUrl = "https://drdsuite.vercel.app"

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dr. Dédé Tetsubayashi",
    description:
      "AI Governance Expert, Digital Equity Pioneer, Tech Ethics Thought Leader, TEDx Speaker, and Disability Advocate",
    url: baseUrl,
    image: `${baseUrl}/og-image.jpg`,
    sameAs: [
      "https://www.linkedin.com/in/dr-dede/",
      "https://twitter.com/drdede",
      "https://youtube.com/@drdede",
      "https://incluu.us",
      "https://dr-dede.com",
    ],
    jobTitle: "AI Governance Expert & Principal Consultant",
    worksFor: {
      "@type": "Organization",
      name: "incluu",
      description: "Expert AI Governance & Tech Equity Solutions",
      url: `${baseUrl}/incluu`,
    },
    knowsAbout: [
      "Artificial Intelligence Governance",
      "Tech Equity",
      "Disability Advocacy",
      "Algorithmic Bias Detection",
      "Regulatory Compliance",
      "Digital Accessibility",
      "Technology Ethics",
    ],
    award: ["TEDx Speaker", "AI Governance Expert", "Disability Rights Advocate"],
  }
}

export function generateOrganizationStructuredData() {
  const baseUrl = "https://drdsuite.vercel.app"

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "incluu",
    alternateName: "Dr. Dédé Suite",
    description: "Expert AI Governance & Tech Equity Solutions",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    founder: {
      "@type": "Person",
      name: "Dr. Dédé Tetsubayashi",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-234-567-8900",
      contactType: "Customer Service",
      email: "contact@drdede.com",
      availableLanguage: ["English"],
    },
    sameAs: ["https://linkedin.com/company/incluu", "https://twitter.com/incluu"],
    areaServed: "Worldwide",
    serviceType: [
      "AI Governance Consulting",
      "Tech Equity Solutions",
      "Disability Advocacy",
      "Speaking Engagements",
      "Corporate Training",
    ],
  }
}

export function generateBreadcrumbStructuredData(items: { name: string; url: string }[]) {
  const baseUrl = "https://drdsuite.vercel.app"

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  }
}
