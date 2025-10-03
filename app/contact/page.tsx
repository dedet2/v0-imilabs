import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Linkedin, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Dr. Dédé | Schedule Consultation",
  description:
    "Get in touch with Dr. Dédé Tetsubayashi for AI governance consulting, speaking engagements, or luxury retreats. Schedule your consultation today.",
  openGraph: {
    title: "Contact Dr. Dédé | Schedule Consultation",
    description: "Get in touch for AI governance consulting, speaking engagements, or luxury retreats",
  },
}

export default function ContactPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200" variant="outline">
            Let's Connect
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Get in Touch</h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Ready to transform your AI strategy or book a speaking engagement? Let's discuss how we can work together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
                <CardDescription>Multiple ways to reach us</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <a
                      href="mailto:contact@drdede.com"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      contact@drdede.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Location</p>
                    <p className="text-sm text-muted-foreground">San Francisco Bay Area, CA</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Response Time</p>
                    <p className="text-sm text-muted-foreground">Within 24-48 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-600 to-cyan-600 text-white border-0">
              <CardContent className="p-6">
                <Linkedin className="h-8 w-8 mb-3 opacity-90" />
                <h3 className="font-semibold mb-2">Connect on LinkedIn</h3>
                <p className="text-sm opacity-90 mb-4 leading-relaxed">
                  Follow Dr. Dédé for insights on AI governance and tech equity
                </p>
                <a
                  href="https://www.linkedin.com/in/dr-dede/"
                  rel="noopener noreferrer"
                  className="text-sm font-medium underline hover:no-underline"
                >
                  View Profile →
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you soon</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Quick Links */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-purple-50/50 to-cyan-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">What Can We Help You With?</h2>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Select the service you're interested in to learn more
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">AI GRC Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Strategic AI governance and regulatory compliance frameworks
                </p>
                <a href="/incluu" className="text-sm font-medium text-purple-600 hover:text-purple-700">
                  Learn More →
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Speaking & Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  TEDx talks, keynotes, and corporate workshops
                </p>
                <a href="/dr-dede#speaking" className="text-sm font-medium text-cyan-600 hover:text-cyan-700">
                  Book Speaking →
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Luxury Retreats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Transformative wellness and leadership development
                </p>
                <a href="/dr-dede" className="text-sm font-medium text-purple-600 hover:text-purple-700">
                  Explore Retreats →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
