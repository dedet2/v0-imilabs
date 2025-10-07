import type { Metadata } from "next"
import { WorkflowDemo } from "@/components/workflow-demo"

export const metadata: Metadata = {
  title: "Resource Gate Workflow Demo | Dr. Dédé Tetsubayashi",
  description: "Interactive demonstration of the resource gate and lead capture workflow",
}

export default function WorkflowDemoPage() {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-br from-purple-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Resource Gate Workflow Demo</h1>
            <p className="text-lg text-muted-foreground">
              See how users access premium resources through our lead capture system
            </p>
          </div>
          <WorkflowDemo />
        </div>
      </section>
    </main>
  )
}
