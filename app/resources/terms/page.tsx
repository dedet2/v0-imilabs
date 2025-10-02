import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Dr. Dédé & incluu",
  description: "Terms of service for Dr. Dédé Tetsubayashi and incluu services.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-12">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
              <p className="text-foreground/80 leading-relaxed">
                By accessing or using the services provided by Dr. Dédé Tetsubayashi and incluu ("we," "our," or "us"),
                you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use
                our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Services</h2>
              <p className="text-foreground/80 leading-relaxed mb-3">We provide the following services:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>AI governance and compliance consulting</li>
                <li>Tech equity and accessibility consulting</li>
                <li>Speaking engagements and workshops</li>
                <li>Luxury wellness retreats and advocacy programs</li>
                <li>Educational resources and content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Use of Services</h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">Eligibility</h3>
              <p className="text-foreground/80 leading-relaxed">
                You must be at least 18 years old and have the legal capacity to enter into contracts to use our
                services.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Acceptable Use</h3>
              <p className="text-foreground/80 leading-relaxed mb-3">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not
                to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit harmful or malicious code</li>
                <li>Interfere with the operation of our services</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <p className="text-foreground/80 leading-relaxed">
                All content, materials, and intellectual property on our website and in our services are owned by or
                licensed to us. You may not use, reproduce, or distribute our content without express written
                permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Consulting Services</h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">Engagement Terms</h3>
              <p className="text-foreground/80 leading-relaxed">
                Specific terms for consulting engagements will be outlined in separate agreements. These Terms of
                Service supplement but do not replace those specific agreements.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Confidentiality</h3>
              <p className="text-foreground/80 leading-relaxed">
                We maintain strict confidentiality regarding client information and projects, subject to the terms of
                our engagement agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
              <p className="text-foreground/80 leading-relaxed mb-3">
                Payment terms for services will be specified in engagement agreements. Generally:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Invoices are due within 30 days of issuance</li>
                <li>Late payments may incur interest charges</li>
                <li>Certain services may require advance payment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Cancellation and Refunds</h2>
              <p className="text-foreground/80 leading-relaxed mb-3">
                Cancellation and refund policies vary by service type and will be specified in engagement agreements.
                Generally:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Consulting services: 14-day notice required for cancellation</li>
                <li>Speaking engagements: 30-day notice required</li>
                <li>Retreats: Cancellation policy specified at booking</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-foreground/80 leading-relaxed">
                To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
              <p className="text-foreground/80 leading-relaxed">
                You agree to indemnify and hold harmless Dr. Dédé Tetsubayashi, incluu, and our affiliates from any
                claims, damages, or expenses arising from your use of our services or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranties</h2>
              <p className="text-foreground/80 leading-relaxed">
                Our services are provided "as is" without warranties of any kind, either express or implied. We do not
                guarantee specific results from our consulting services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <p className="text-foreground/80 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the United States and the
                State of California, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Dispute Resolution</h2>
              <p className="text-foreground/80 leading-relaxed">
                Any disputes arising from these Terms or our services shall be resolved through binding arbitration in
                accordance with the rules of the American Arbitration Association.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <p className="text-foreground/80 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of material changes by
                posting the updated Terms on our website and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Severability</h2>
              <p className="text-foreground/80 leading-relaxed">
                If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in
                full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-foreground/80 leading-relaxed mb-3">
                For questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Email: legal@incluu.us
                <br />
                Website:{" "}
                <a href="/contact" className="text-primary hover:underline">
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
