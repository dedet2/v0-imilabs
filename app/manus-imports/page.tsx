import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Video, Bot, Mic, Building2, Calculator } from "lucide-react"

export const metadata: Metadata = {
  title: "Manus Imports | Component Library",
  description: "Imported components and pages from Manus projects for Dr. Dédé and incluu.",
  alternates: {
    canonical: "https://dr-dede.com/manus-imports",
  },
}

const imports = [
  {
    title: "TEDx Promotion Hub",
    description: "TEDx talk promotion dashboard with YouTube integration and social sharing",
    href: "/manus-imports/tedx-promotion",
    icon: Video,
    source: "knvvaaal.manus.space",
  },
  {
    title: "Ethical AI Agents",
    description: "B2B services page for AI governance and ethical AI consulting",
    href: "/manus-imports/ai-agents",
    icon: Bot,
    source: "gbxtekwu.manus.space",
  },
  {
    title: "Dr. Dédé Speaker",
    description: "Speaker profile and TEDx talk page with booking capabilities",
    href: "/manus-imports/speaker",
    icon: Mic,
    source: "nslacnow.manus.space",
  },
  {
    title: "Business Platform",
    description: "Main business platform landing page with services overview",
    href: "/manus-imports/business-platform",
    icon: Building2,
    source: "owbonrry.manus.space",
  },
  {
    title: "ROI Calculator Landing",
    description: "Lead capture landing page for ROI Calculator with email gating",
    href: "/manus-imports/roi-landing",
    icon: Calculator,
    source: "pmukyznd.manus.space",
  },
]

export default function ManusImportsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Manus Imports</h1>
          <p className="text-xl text-foreground/70 mb-12">
            Components and pages imported from external Manus projects, converted to TypeScript and integrated with the
            design system.
          </p>

          <div className="grid gap-6">
            {imports.map((item) => (
              <Link key={item.href} href={item.href}>
                <Card className="hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                          <CardDescription className="mt-1">{item.description}</CardDescription>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-foreground/40" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/60">
                      Source: <code className="bg-muted px-2 py-1 rounded">{item.source}</code>
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
