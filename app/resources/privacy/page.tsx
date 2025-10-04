import type { Metadata } from "next"
import { Shield, Lock, Eye, FileText, UserCheck, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Dr. Dédé & incluu",
  description: "Privacy policy for Dr. Dédé Tetsubayashi and incluu services.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-16 bg-gradient-to-br from-violet-900 via-purple-800 to-cyan-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-400">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
              <p className="text-cyan-100 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          <div className="space-y-8 bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-400">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Introduction</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Dr. Dédé Tetsubayashi and incluu ("we," "our," or "us") are committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
                website or use our services.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-400">
                  <Eye className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Information We Collect</h2>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Personal Information</h3>
              <p className="text-foreground/80 leading-relaxed mb-3">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Fill out contact forms</li>
                <li>Schedule consultations</li>
                <li>Subscribe to our newsletter</li>
                <li>Register for events or retreats</li>
                <li>Engage with our services</li>
              </ul>

              <p className="text-foreground/80 leading-relaxed mt-4 mb-3">This information may include:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Name and contact information</li>
                <li>Company and job title</li>
                <li>Email address and phone number</li>
                <li>Professional interests and needs</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-foreground/80 leading-relaxed mb-3">
                When you visit our website, we may automatically collect certain information about your device,
                including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-400">
                  <UserCheck className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">How We Use Your Information</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you relevant information and updates</li>
                <li>Analyze website usage and optimize user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-400">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Information Sharing and Disclosure</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-3">
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Service providers who assist in our operations</li>
                <li>Professional advisors (lawyers, accountants, etc.)</li>
                <li>Law enforcement when required by law</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-400">
                  <Lock className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Data Security</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="text-foreground/80 leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-foreground/80 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website. You can
                control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
              <p className="text-foreground/80 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                of these external sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
              <p className="text-foreground/80 leading-relaxed">
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal
                information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
              <p className="text-foreground/80 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-foreground/80 leading-relaxed mb-3">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Email: privacy@incluu.us
                <br />
                Website:{" "}
                <a href="/contact" className="text-violet-600 hover:text-cyan-600 transition-colors hover:underline">
                  Contact Form
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
