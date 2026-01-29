import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Winter Solstice Retreat 2026 | Rest as Resistance Japan",
  description: "Embrace the stillness with our Winter Solstice retreat in Japan's snow country. December 2026. Luxury wellness retreat featuring hot springs and winter illuminations.",
  alternates: {
    canonical: "https://dr-dede.com/dr-dede/retreats/wellness/winter-solstice-2026",
  },
}

export default function WinterSolsticePage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <ul className="flex justify-center gap-8 py-4 px-4 flex-wrap">
          {["Itinerary", "Experiences", "Pricing", "FAQ", "Reserve"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-700 hover:text-[#667eea] transition-colors font-medium"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero */}
      <section
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20"
        style={{
          background:
            "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.15) 50%, rgba(240, 147, 251, 0.1) 100%)",
        }}
      >
        <p
          className="text-sm uppercase tracking-[3px] font-semibold mb-4"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          REST AS RESISTANCE
        </p>
        <h1
          className="text-5xl md:text-7xl font-light mb-6"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Winter Solstice Edition
        </h1>
        <p className="text-xl text-gray-600 mb-2">December 14–22, 2026</p>
        <p className="text-lg text-gray-500 mb-8 max-w-2xl">Tokyo · Snow Country · Kyoto · Premium Onsen</p>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
          Our 9-day flagship winter healing journey. Experience snow-covered temples, mountain onsen, winter
          illuminations, and culminate with Japan's sacred winter solstice ceremony.
        </p>
        <p className="text-sm text-gray-500 mb-8">Return home December 23 for Christmas with family</p>
        <a
          href="#pricing"
          className="px-8 py-4 rounded-full text-white text-lg font-medium shadow-lg hover:scale-105 transition-all"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
          }}
        >
          Reserve Your Spot
        </a>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            This 9-day journey culminates on the actual winter solstice (December 22)—the turning point when darkness
            transforms to light. We've intentionally designed this as an intensive rather than extended experience,
            honoring both the depth of rest you deserve and the reality that you have lives, families, and
            responsibilities waiting.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every day builds toward solstice ceremony. No filler. Just medicine.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-4xl font-light mb-12"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Investment
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-medium mb-4 text-gray-900">Winter Solstice Intensive</h3>
            <p className="text-5xl font-light mb-6" style={{ color: "#667eea" }}>
              $15,500
            </p>
            <p className="text-gray-600 mb-8">9 days · December 14-22, 2026</p>
            <ul className="text-left space-y-3 mb-8 max-w-lg mx-auto">
              <li className="flex items-start gap-2">
                <span className="text-[#06b6d4]">✓</span>
                <span className="text-gray-600">8 nights luxury accommodations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#06b6d4]">✓</span>
                <span className="text-gray-600">All meals, cultural experiences, onsen access</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#06b6d4]">✓</span>
                <span className="text-gray-600">Winter solstice ceremony with Ichiyo Raifuku charm</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#06b6d4]">✓</span>
                <span className="text-gray-600">All ground transportation & airport transfers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#06b6d4]">✓</span>
                <span className="text-gray-600">Single occupancy: +$2,000</span>
              </li>
            </ul>
            <div className="border-t border-gray-200 pt-6">
              <p className="text-sm font-semibold text-gray-700 mb-3">Payment Plans Available</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Pay in Full (Save $500! Total: $15,000)</li>
                <li>Two-Payment Plan: $8,000 deposit + $7,500 final</li>
                <li>Three-Payment Plan: $5,500 deposit + two $5,000 payments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
