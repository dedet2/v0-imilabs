import Link from "next/link"

export default function RestAsResistancePage() {
  return (
    <div className="min-h-screen bg-[#fdfcfb]">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20"
        style={{
          background: "linear-gradient(135deg, rgba(156, 39, 176, 0.1) 0%, rgba(0, 188, 212, 0.1) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 text-sm font-semibold tracking-[3px] uppercase text-[#7b1fa2]">Rest as Resistance</div>
          <h1 className="text-5xl md:text-7xl font-light text-[#1a1a1a] mb-6 leading-tight">
            RAR | Wellness Retreats
            <br />
            for Black Women Leaders
          </h1>
          <p className="text-lg text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
            Four seasonal retreats throughout 2026. Limited to 10-12 participants per experience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#retreats"
              className="px-8 py-4 rounded-full text-white font-medium text-lg transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #9c27b0 0%, #00bcd4 100%)",
                boxShadow: "0 4px 20px rgba(156, 39, 176, 0.3)",
              }}
            >
              View 2026 Calendar
            </Link>
            <Link
              href="/dr-dede/retreats/partnerships"
              className="px-8 py-4 rounded-full border-2 border-[#9c27b0] text-[#9c27b0] font-medium text-lg transition-all hover:bg-[rgba(156,39,176,0.05)]"
            >
              Corporate Wellness
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-6">REST AS RESISTANCE</h2>
          <p className="text-xl text-[#4a4a4a] leading-relaxed mb-8">
            RAR | Transformative experiences in Japan designed for deep rest, cultural immersion, and radical self-care
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-20 px-6"
        style={{
          background: "linear-gradient(135deg, rgba(156, 39, 176, 0.05) 0%, rgba(0, 188, 212, 0.05) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center text-[#1a1a1a] mb-12">Proven Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "3+", label: "Retreats Completed" },
              { number: "25+", label: "Women Served" },
              { number: "100%", label: "Would Return" },
              { number: "15+", label: "Years Japan Expertise" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8">
                <div className="text-5xl font-light text-[#9c27b0] mb-2">{stat.number}</div>
                <div className="text-sm uppercase tracking-wide text-[#666]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 Retreat Calendar */}
      <section id="retreats" className="py-20 px-6 bg-[#fdfcfb]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center text-[#1a1a1a] mb-6">2026 Retreat Calendar</h2>
          <p className="text-center text-lg text-[#666] max-w-3xl mx-auto mb-12 leading-relaxed">
            Four distinct seasonal experiences, each offering unique cultural immersion, wellness practices, and
            opportunities for profound rest and transformation.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Cherry Blossom */}
            <Link
              href="/dr-dede/retreats/wellness/cherry-blossom-2026"
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div
                className="h-64 relative"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 182, 193, 0.5), rgba(255, 240, 245, 0.5))",
                }}
              >
                <span className="absolute top-4 left-4 bg-white/95 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase text-[#d81b60]">
                  Spring
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-normal text-[#1a1a1a] mb-2">Cherry Blossom Edition</h3>
                <div className="text-sm text-[#666] mb-4">April 8-18, 2026 • 7 or 10 days</div>
                <p className="text-[#4a4a4a] leading-relaxed mb-6">
                  Experience Japan's most celebrated season with hanami ceremonies, temple meditations, and onsen
                  healing during peak cherry blossom bloom.
                </p>
                <div className="text-xl font-semibold text-[#9c27b0] mb-4">From $12,500</div>
                <span className="inline-block text-[#9c27b0] font-semibold border-b-2 border-[#9c27b0]">
                  Learn More →
                </span>
              </div>
            </Link>

            {/* Summer Solstice */}
            <Link
              href="/dr-dede/retreats/wellness/summer-solstice-2026"
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div
                className="h-64 relative"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 235, 59, 0.3), rgba(139, 195, 74, 0.3))",
                }}
              >
                <span className="absolute top-4 left-4 bg-white/95 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase text-[#7cb342]">
                  Summer
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-normal text-[#1a1a1a] mb-2">Summer Solstice in Hokkaido</h3>
                <div className="text-sm text-[#666] mb-4">June 20-27, 2026 • 7 days</div>
                <p className="text-[#4a4a4a] leading-relaxed mb-6">
                  Northern Japan's mild summer. Explore Hokkaido's lavender fields, indigenous Ainu culture, and
                  pristine natural hot springs.
                </p>
                <div className="text-xl font-semibold text-[#9c27b0] mb-4">$13,500</div>
                <span className="inline-block text-[#9c27b0] font-semibold border-b-2 border-[#9c27b0]">
                  Learn More →
                </span>
              </div>
            </Link>

            {/* Winter Solstice */}
            <Link
              href="/retreats-advocacy/winter-solstice-2026"
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div
                className="h-64 relative"
                style={{
                  background: "linear-gradient(135deg, rgba(176, 224, 230, 0.5), rgba(230, 240, 255, 0.5))",
                }}
              >
                <span className="absolute top-4 left-4 bg-white/95 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase text-[#0288d1]">
                  Winter
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-normal text-[#1a1a1a] mb-2">Winter Solstice Edition (9-Day)</h3>
                <div className="text-sm text-[#666] mb-4">December 14-22, 2026 • 9 days</div>
                <p className="text-[#4a4a4a] leading-relaxed mb-6">
                  Snow country hot springs, winter illuminations, and deep rest during the darkest season. Home by
                  Christmas.
                </p>
                <div className="text-xl font-semibold text-[#9c27b0] mb-4">From $15,500</div>
                <span className="inline-block text-[#9c27b0] font-semibold border-b-2 border-[#9c27b0]">
                  Learn More →
                </span>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-[#666] mb-4">Questions about which retreat is right for you?</p>
            <Link
              href="mailto:rar@dr-dede.com"
              className="inline-block px-8 py-4 rounded-full text-white font-medium transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #9c27b0 0%, #00bcd4 100%)",
                boxShadow: "0 4px 20px rgba(156, 39, 176, 0.3)",
              }}
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Past Retreats Section */}
      <section id="past-retreats" className="py-20 px-6 bg-[#fdfcfb]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center text-[#1a1a1a] mb-12">Past Retreats</h2>

          <div className="max-w-2xl mx-auto">
            <Link
              href="https://rar-landing-clean.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all block"
            >
              <div
                className="h-64 relative"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 111, 0, 0.4), rgba(255, 193, 7, 0.4))",
                }}
              >
                <span className="absolute top-4 left-4 bg-white/95 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase text-[#f57c00]">
                  Fall 2025 • Completed
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-normal text-[#1a1a1a] mb-2">Fall Restorative Oasis</h3>
                <div className="text-sm text-[#666] mb-4">November 2025</div>
                <p className="text-[#4a4a4a] leading-relaxed mb-6">
                  Witnessed spectacular fall foliage in ancient temples, practiced mindful walking through bamboo
                  groves, embraced the art of letting go.
                </p>
                <span className="inline-block text-[#9c27b0] font-semibold border-b-2 border-[#9c27b0]">
                  View Details →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 2027 Retreats Calendar */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center text-[#1a1a1a] mb-6">2027 Retreat Calendar</h2>
          <p className="text-center text-lg text-[#666] max-w-3xl mx-auto mb-12 leading-relaxed">
            Planning ahead? Secure your spot for our 2027 seasonal experiences.
          </p>
          {/* Coming soon content */}
          <div className="text-center text-[#666]">
            <p className="text-lg mb-4">2027 retreat dates and details coming soon.</p>
            <Link
              href="mailto:rar@dr-dede.com"
              className="inline-block px-8 py-4 rounded-full text-white font-medium transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #9c27b0 0%, #00bcd4 100%)",
                boxShadow: "0 4px 20px rgba(156, 39, 176, 0.3)",
              }}
            >
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section
        id="philosophy"
        className="py-20 px-6"
        style={{
          background: "linear-gradient(135deg, rgba(156, 39, 176, 0.05) 0%, rgba(0, 188, 212, 0.05) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12">Our Philosophy</h2>
          <div className="text-lg text-[#4a4a4a] leading-relaxed space-y-6">
            <p>
              Rest as Resistance recognizes that for Black women, particularly those in leadership positions, rest is
              not merely self-care—it is an act of resistance against systems that demand our constant productivity
              while denying us space to heal.
            </p>

            <div className="text-2xl italic text-[#9c27b0] py-8 px-6 my-8 border-l-4 border-[#9c27b0] bg-white/50">
              "Rest is not a luxury. It is resistance."
            </div>

            <p>
              Our retreats combine the ancient wellness traditions of Japan with culturally affirming practices designed
              specifically for Black women leaders. From onsen hot spring healing to temple meditation, from kaiseki
              seasonal cuisine to facilitated sharing circles, every element honors your journey while creating space
              for profound transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Your Host */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center text-[#1a1a1a] mb-12">Meet Your Host</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-[#4a4a4a] leading-relaxed">
              <p>
                Dr. Dédé Tetsubayashi has called Japan home for over 15 years, building deep relationships with local
                communities and mastering the language and cultural nuances that transform a trip into a transformative
                experience.
              </p>
              <p>
                As a disability justice advocate, AI ethics researcher, and wellness practitioner, Dr. Dédé brings a
                unique intersectional lens to retreat design. Every experience centers accessibility, cultural
                specificity, and the particular needs of Black women leaders navigating multiple forms of
                marginalization.
              </p>
              <p>
                Her expertise in trauma-informed facilitation, combined with extensive knowledge of Japanese wellness
                traditions, creates a safe container for deep rest and authentic connection.
              </p>
            </div>
            <div className="space-y-4">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Dr. Dédé Tetsubayashi"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Section */}
      <section
        id="corporate"
        className="py-20 px-6 text-center text-white"
        style={{
          background: "linear-gradient(135deg, #9c27b0 0%, #00bcd4 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-8">Corporate Wellness Partnerships</h2>
          <p className="text-xl leading-relaxed mb-8 opacity-95">
            Support your women leaders with transformative retreat experiences. We partner with forward-thinking
            organizations to sponsor wellness opportunities for employees, particularly Black women and women of color
            in leadership roles.
          </p>
          <Link
            href="/dr-dede/retreats/partnerships"
            className="inline-block bg-white text-[#9c27b0] px-8 py-4 rounded-full font-medium text-lg hover:bg-white/95 transition-all"
          >
            Explore Corporate Offerings
          </Link>
        </div>
      </section>
    </div>
  )
}
