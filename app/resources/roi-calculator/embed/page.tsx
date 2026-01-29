import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ROI Calculator | Dr. Dédé & incluu",
  description:
    "Calculate exactly how much AI automation could save your business in time, costs, and revenue. Interactive ROI calculator.",
  alternates: {
    canonical: "https://dr-dede.com/resources/roi-calculator/embed",
  },
}

export default function ROICalculatorEmbedPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold">ROI Calculator</h1>
              <p className="text-sm text-foreground/70">Powered by Dr. Dédé & incluu</p>
            </div>
            <a
              href="/resources/roi-calculator"
              className="text-sm text-primary hover:underline"
            >
              Use Full Calculator
            </a>
          </div>
        </div>
      </div>

      {/* Embedded Site */}
      <div className="w-full h-[calc(100vh-80px)]">
        <iframe
          src="https://pmukyznd.manus.space/"
          title="ROI Calculator - Discover Your Business's Hidden ROI Potential"
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="lazy"
        />
      </div>
    </main>
  )
}
