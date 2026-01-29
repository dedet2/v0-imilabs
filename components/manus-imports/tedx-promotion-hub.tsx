"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Play,
  Eye,
  ThumbsUp,
  MessageCircle,
  BarChart3,
  Mail,
  Activity,
  Twitter,
  Linkedin,
  Download,
  Youtube,
  Clock,
  Search,
  Scale,
  Target,
  Rocket,
} from "lucide-react"

interface Insight {
  icon: React.ReactNode
  title: string
  description: string
  bgColor: string
  textColor: string
}

interface Milestone {
  label: string
  value: number
}

export default function TEDxPromotionHub() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Subscribe:", email)
  }

  const insights: Insight[] = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Lead with Curiosity",
      description:
        "Challenge your assumptions and break out of echo chambers. AI reinforces stereotypes and biases unless we actively break the cycle through curiosity and questioning.",
      bgColor: "bg-blue-50",
      textColor: "text-blue-900",
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Be Accountable",
      description:
        "Ethical technology development requires considering all possible end users—especially those differently abled, impaired, or economically disadvantaged. Your responsibility doesn't end at launch.",
      bgColor: "bg-green-50",
      textColor: "text-green-900",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Solve for One, Extend to Many",
      description:
        "When you design with those on the margins, you create better solutions for everyone. Inclusive design benefits all users throughout your product's entire lifecycle.",
      bgColor: "bg-purple-50",
      textColor: "text-purple-900",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Take Action",
      description:
        "If an app is inaccessible, reach out to developers. If you see bias in tech or AI, call it out. Change begins with you—demand better technology for all.",
      bgColor: "bg-orange-50",
      textColor: "text-orange-900",
    },
  ]

  const milestones: Milestone[] = [
    { label: "First 1K", value: 1000 },
    { label: "5K Milestone", value: 5000 },
    { label: "10K Goal", value: 10000 },
    { label: "25K Stretch", value: 25000 },
  ]

  const currentViews = 2847
  const goalViews = 10000
  const progressPercentage = (currentViews / goalViews) * 100

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-red-600 rounded-lg p-2">
              <Play className="h-6 w-6 text-white fill-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">TEDx Talk Hub</h1>
              <p className="text-sm text-foreground/60">Aiming for 10,000+ Views</p>
            </div>
          </div>
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
            Top 2% Goal
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Section */}
            <Card className="overflow-hidden">
              <div className="aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="You've Been Coded Out: How To Make AI Work For All"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Video Stats */}
              <div className="p-4 border-b">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-6 text-sm text-foreground/60">
                    <span className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      2,847 views
                    </span>
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      85 likes
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      28 comments
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                      Tweet
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Share
                    </Button>
                    <Button size="sm" variant="secondary">
                      Copy
                    </Button>
                  </div>
                </div>
              </div>

              {/* About This Talk */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">About This Talk</h2>
                <p className="text-foreground/80 leading-relaxed">
                  In my TEDx talk, &ldquo;You&apos;ve Been Coded Out: How To Make AI Work For All,&rdquo; I dive into
                  the latest global research on AI&apos;s impact, and share the framework I use as a tech ethicist to
                  guide my clients in creating truly responsible apps and software that reflect the rich versatility of
                  their audiences. My mission is: to ensure AI empowers rather than oppresses, includes rather than
                  excludes, and uplifts rather than marginalizes. When AI is developed with equity, accessibility, and
                  lived experiences in mind, we create a future where technology truly serves all.
                </p>
              </div>
            </Card>

            {/* Key Insights */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-2">Key Insights from This Talk</h2>
              <p className="text-foreground/60 mb-6">Main takeaways and actionable insights</p>

              <div className="grid md:grid-cols-2 gap-4">
                {insights.map((insight, idx) => (
                  <div key={idx} className={`${insight.bgColor} rounded-lg p-6`}>
                    <div className={`flex items-center gap-2 mb-3 ${insight.textColor}`}>
                      {insight.icon}
                      <h3 className="text-lg font-bold">{insight.title}</h3>
                    </div>
                    <p className={`text-sm ${insight.textColor}`}>{insight.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6">
                <p className="text-foreground/80 mb-4">
                  Whether you&apos;re a technologist, organizer, creative, simply dreaming of a better world, or
                  building AI or biometric tech that could backfire, I&apos;d love to help!
                </p>
                <p className="text-foreground font-semibold mb-4">
                  I turn risky, biased systems into compliant, high-performing products—fast. My strategies have saved
                  $300M+, unlocked $500M+ in new markets.
                </p>
                <Button className="bg-yellow-400 text-foreground hover:bg-yellow-500">
                  Book an advisory call with Dr. Dede
                </Button>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Card */}
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Progress to 10K Views
              </h3>
              <p className="text-sm text-foreground/60 mb-2">
                Current milestone: {currentViews.toLocaleString()} / {goalViews.toLocaleString()} views
              </p>
              <div className="w-full bg-muted rounded-full h-3 mb-4">
                <div
                  className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <p className="text-3xl font-bold text-green-600 mb-6">{progressPercentage.toFixed(1)}%</p>
              <p className="text-sm text-foreground/60 mb-3">of goal achieved</p>

              <div className="space-y-2">
                {milestones.map((milestone, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-sm text-foreground/70">{milestone.label}</span>
                    <span className="text-sm font-semibold bg-muted px-2 py-1 rounded">
                      {milestone.value.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Stay Updated */}
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Stay Updated
              </h3>
              <p className="text-sm text-foreground/60 mb-4">Get notified about new content and milestones</p>
              <form onSubmit={handleSubscribe}>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="mb-3"
                />
                <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600">
                  Subscribe for Updates
                </Button>
              </form>
            </Card>

            {/* Live Analytics */}
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Live Analytics
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground/60">Today&apos;s Views</span>
                  <span className="text-lg font-bold text-green-600">+27</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground/60">Watch Time</span>
                  <span className="text-lg font-bold">1992 hrs</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground/60">Engagement Rate</span>
                  <span className="text-lg font-bold text-green-600">4.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground/60">Shares</span>
                  <span className="text-lg font-bold">56</span>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button className="w-full bg-blue-500 hover:bg-blue-600 justify-center gap-2">
                  <Twitter className="h-4 w-4" />
                  Share on Twitter
                </Button>
                <Button className="w-full bg-blue-700 hover:bg-blue-800 justify-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  Share on LinkedIn
                </Button>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 justify-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Assets
                </Button>
                <Button className="w-full bg-red-600 hover:bg-red-700 justify-center gap-2">
                  <Youtube className="h-4 w-4" />
                  View on YouTube
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-background border-t py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-foreground/60">
          <p className="mb-2">TEDx Talk Promotion Hub - Built to reach the top 2% of TEDx talks globally</p>
          <div className="flex items-center justify-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              Last updated: 10/15/2025
            </span>
            <span className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              2,847 total views
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
