/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      // Main hub
      { source: "/dr-dede/retreats", destination: "/retreats-advocacy", permanent: true },

      // Individual retreats
      {
        source: "/dr-dede/retreats/cherry-blossom-2026",
        destination: "/retreats-advocacy/cherry-blossom-2026",
        permanent: true,
      },
      {
        source: "/dr-dede/retreats/summer-solstice-2026",
        destination: "/retreats-advocacy/summer-solstice-2026",
        permanent: true,
      },
      {
        source: "/dr-dede/retreats/autumn-equinox-2026",
        destination: "/retreats-advocacy/autumn-equinox-2026",
        permanent: true,
      },
      {
        source: "/dr-dede/retreats/winter-solstice-2026",
        destination: "/retreats-advocacy/winter-solstice-2026",
        permanent: true,
      },
      {
        source: "/dr-dede/retreats/cherry-blossom-2027",
        destination: "/retreats-advocacy/cherry-blossom-2027",
        permanent: true,
      },
      {
        source: "/dr-dede/retreats/anniversary-celebration-2026",
        destination: "/retreats-advocacy/anniversary-celebration-2026",
        permanent: true,
      },
      {
        source: "/dr-dede/retreats/family-retreat-june-2026",
        destination: "/retreats-advocacy/family-retreat-june-2026",
        permanent: true,
      },

      // Past retreats
      {
        source: "/dr-dede/retreats/past-winter-snow-2025",
        destination: "/retreats-advocacy/past/winter-snow-2025",
        permanent: true,
      },
      {
        source: "/dr-dede/retreats/past-spring-soaks-2025",
        destination: "/retreats-advocacy/past/spring-soaks-2025",
        permanent: true,
      },
      {
        source: "/dr-dede/retreats/past-fall-oasis-2025",
        destination: "/retreats-advocacy/past/fall-oasis-2025",
        permanent: true,
      },
      {
        source: "/dr-dede/retreats/past-new-years-2025",
        destination: "/retreats-advocacy/past/new-years-2025",
        permanent: true,
      },

      // Hub pages
      { source: "/dr-dede/retreats/wellness", destination: "/retreats-advocacy/luxury-wellness", permanent: true },
      {
        source: "/dr-dede/retreats/luxury-wellness",
        destination: "/retreats-advocacy/luxury-wellness",
        permanent: true,
      },
      {
        source: "/dr-dede/retreats/rest-as-resistance",
        destination: "/retreats-advocacy/luxury-wellness/rar-brand",
        permanent: true,
      },
      { source: "/dr-dede/retreats/rar", destination: "/retreats-advocacy/luxury-wellness/rar-brand", permanent: true },
      {
        source: "/dr-dede/retreats/corporate-wellness",
        destination: "/retreats-advocacy/executive-wellness/corporate-sponsorships",
        permanent: true,
      },
      {
        source: "/dr-dede/retreats/corporate-partnerships",
        destination: "/retreats-advocacy/executive-wellness/corporate-partnerships",
        permanent: true,
      },
      {
        source: "/dr-dede/retreats/partnerships",
        destination: "/retreats-advocacy/executive-wellness/corporate-partnerships",
        permanent: true,
      },
      { source: "/dr-dede/retreats/executive", destination: "/retreats-advocacy/executive-wellness", permanent: true },
      { source: "/dr-dede/retreats/advocacy", destination: "/retreats-advocacy/disability-retreats", permanent: true },

      // Catch-all for any remaining /dr-dede/ paths
      { source: "/dr-dede/:path*", destination: "/:path*", permanent: true },
      { source: "/incluu/:path*", destination: "/:path*", permanent: true },
    ]
  },
  images: {
    domains: ["images.unsplash.com", "unsplash.com", "blob.vercel-storage.com", "public.blob.vercel-storage.com"],
    formats: ["image/webp", "image/avif"],
    unoptimized: true,
  },
  async rewrites() {
    return []
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
