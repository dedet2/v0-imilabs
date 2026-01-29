import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cherry Blossom Edition 2027 | Rest as Resistance",
  description: "Join us for Cherry Blossom retreat in Japan (April 6-16, 2027). Enhanced experiences for 2027 season.",
  openGraph: {
    title: "Cherry Blossom Edition 2027 | Rest as Resistance",
    description: "Join us for Cherry Blossom retreat in Japan (April 6-16, 2027). Enhanced experiences for 2027 season.",
    url: "https://dr-dede.com/retreats-advocacy/cherry-blossom-2027",
    siteName: "Dr. Dédé Tetsubayashi",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://dr-dede.com/retreats-advocacy/cherry-blossom-2027",
  },
}

export default function CherryBlossom2027Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
