export default function SummerSolsticePage() {
  return (
    <div className="min-h-screen bg-[#fdfcfb]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <ul className="flex justify-center gap-8 py-4 px-4 flex-wrap">
          {["Itinerary", "Experiences", "Pricing", "FAQ", "Reserve"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-700 hover:text-[#7cb342] transition-colors font-medium"
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
          background: "linear-gradient(135deg, rgba(255, 235, 59, 0.3) 0%, rgba(139, 195, 74, 0.3) 100%)",
        }}
      >
        <p className="text-sm uppercase tracking-[3px] text-[#7cb342] font-semibold mb-4">REST AS RESISTANCE</p>
        <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6">Summer Solstice Edition</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl">June 20–27, 2026 · Hokkaido · Northern Japan</p>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
          Experience Japan's northern island during the longest day of the year. Lavender fields in bloom, outdoor onsen
          under extended daylight, and the creative energy of summer solstice.
        </p>
        <div className="bg-white/95 rounded-2xl p-8 shadow-xl max-w-md mb-8">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-[#7cb342] font-semibold mb-1">Dates</p>
              <p className="text-lg text-gray-900">June 20–27</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-[#7cb342] font-semibold mb-1">Duration</p>
              <p className="text-lg text-gray-900">7 Days</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-[#7cb342] font-semibold mb-1">Group Size</p>
              <p className="text-lg text-gray-900">8-12 guests</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-[#7cb342] font-semibold mb-1">Investment</p>
              <p className="text-lg text-gray-900">$12,500</p>
            </div>
          </div>
        </div>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded mb-6 max-w-2xl">
          <p className="text-sm text-amber-800">
            ⚠️ Pricing under review. Summer Solstice 2026 pricing will be finalized by February 1, 2026. Join interest
            list for early notification.
          </p>
        </div>
        <a
          href="#pricing"
          className="px-8 py-4 bg-gradient-to-r from-[#7cb342] to-[#9ccc65] text-white rounded-full text-lg font-medium shadow-lg hover:scale-105 transition-all"
        >
          Join Interest List
        </a>
      </section>

      {/* Placeholder content */}
      <section className="py-20 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-8 text-gray-900">7-Day Hokkaido Immersion</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Content following the structure from summer-solstice-2026.html template with itinerary, healing experiences,
            and pricing details.
          </p>
        </div>
      </section>
    </div>
  )
}
