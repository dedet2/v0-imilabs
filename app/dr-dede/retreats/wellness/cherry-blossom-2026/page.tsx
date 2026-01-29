import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cherry Blossom Retreat 2026 | Rest as Resistance Japan",
  description: "Experience the transformative Cherry Blossom Edition retreat in Japan. March 30 - April 9, 2026 in Tokyo, Kamakura, and Kyoto. Luxury wellness retreat for Black women.",
  alternates: {
    canonical: "https://dr-dede.com/dr-dede/retreats/wellness/cherry-blossom-2026",
  },
}

export default function CherryBlossomPage() {
  return (
    <div className="min-h-screen bg-[#fdfcfb]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <ul className="flex justify-center gap-8 py-4 px-4 flex-wrap">
          {["Itinerary", "Experiences", "Pricing", "FAQ", "Reserve"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-700 hover:text-[#d81b60] transition-colors font-medium"
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
          background: "linear-gradient(135deg, rgba(255, 182, 193, 0.5), rgba(255, 240, 245, 0.5))",
        }}
      >
        <p className="text-sm uppercase tracking-[3px] text-[#d81b60] font-semibold mb-4">REST AS RESISTANCE</p>
        <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6">Cherry Blossom Edition</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl">
          March 30–April 9, 2026 · Tokyo · Kamakura · Kyoto
        </p>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
          A luxury healing experience in Japan for women executives reclaiming rest as a right. Bask in slow mornings,
          onsen rituals, forest bathing and ryokan care.
        </p>
        <div className="bg-white/95 rounded-2xl p-8 shadow-xl max-w-md mb-8">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-[#d81b60] font-semibold mb-1">Dates</p>
              <p className="text-lg text-gray-900">March 30–April 9</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-[#d81b60] font-semibold mb-1">Duration</p>
              <p className="text-lg text-gray-900">10 Days</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-[#d81b60] font-semibold mb-1">Group Size</p>
              <p className="text-lg text-gray-900">8-12 guests</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-[#d81b60] font-semibold mb-1">Investment</p>
              <p className="text-lg text-gray-900">From $11,500</p>
            </div>
          </div>
        </div>
        <a
          href="#pricing"
          className="px-8 py-4 bg-gradient-to-r from-[#d81b60] to-[#f48fb1] text-white rounded-full text-lg font-medium shadow-lg hover:scale-105 transition-all"
        >
          Reserve Your Spot
        </a>
        <p className="text-sm text-gray-500 mt-8 italic max-w-2xl">
          With gratitude to Tricia Hersey, also known as the Nap Bishop of The Nap Ministry and author of Rest Is
          Resistance.
        </p>
      </section>

      {/* Content sections would continue here following the rar.dr-dede.com structure */}
      <section className="py-20 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed">
            This page content should be copied exactly from{" "}
            <a href="https://rar.dr-dede.com" className="text-[#d81b60] underline">
              rar.dr-dede.com
            </a>{" "}
            including all tiers (Whispering Pines, Golden Crane, Eternal Blossom), itinerary, Senanu kimono section, and
            all exact copy.
          </p>
        </div>
      </section>
    </div>
  )
}
