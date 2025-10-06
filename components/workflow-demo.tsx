"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Download, ArrowRight } from "@/components/icons"
import { SamplePDFPreview } from "@/components/sample-pdf-preview"

export function WorkflowDemo() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({ name: "", email: "", company: "" })

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-4">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`h-10 w-10 rounded-full flex items-center justify-center font-bold ${
                step >= s ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-500"
              }`}
            >
              {step > s ? <CheckCircle2 className="h-5 w-5" /> : s}
            </div>
            {s < 4 && <div className={`h-1 w-16 ${step > s ? "bg-purple-600" : "bg-gray-200"}`} />}
          </div>
        ))}
      </div>

      {/* Step Content */}
      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Step 1: Browse Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Users browse the resource library and find valuable whitepapers, tools, and reports.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <Badge variant="outline">Whitepapers</Badge>
              <Badge variant="outline">Tools & Templates</Badge>
              <Badge variant="outline">Industry Reports</Badge>
            </div>
            <Button onClick={() => setStep(2)} className="w-full">
              Click to Download Resource <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Step 2: Preview Resource</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              A modal opens showing a preview of the PDF and what they'll receive.
            </p>
            <SamplePDFPreview title="AI Governance Framework for Enterprise" type="whitepaper" />
            <Button onClick={() => setStep(3)} className="w-full mt-6">
              Continue to Download <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>Step 3: Enter Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Users provide their contact details to receive the PDF via email.
            </p>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <Label htmlFor="company">Company (Optional)</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Acme Corp"
                />
              </div>
              <Button onClick={() => setStep(4)} className="w-full" disabled={!formData.name || !formData.email}>
                <Download className="mr-2 h-4 w-4" />
                Send Me the PDF
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 4 && (
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700">
              <CheckCircle2 className="h-6 w-6" />
              Success! Check Your Email
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              We've sent the PDF to <strong>{formData.email}</strong>. You should receive it within a few minutes.
            </p>
            <div className="bg-white p-4 rounded-lg border border-green-200 mb-4">
              <p className="text-sm text-muted-foreground">
                <strong>What happens next:</strong>
                <br />
                1. Check your inbox for an email from Dr. Dédé Tetsubayashi
                <br />
                2. Download your PDF resource
                <br />
                3. Optionally, schedule a free consultation to discuss implementation
              </p>
            </div>
            <Button onClick={() => setStep(1)} variant="outline" className="w-full">
              Browse More Resources
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
