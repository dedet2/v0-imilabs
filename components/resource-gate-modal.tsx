"use client"

import type React from "react"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, FileText, Download } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ResourceGateModalProps {
  resourceTitle: string
  resourceType:
    | "whitepaper"
    | "case-study"
    | "report"
    | "tool"
    | "media"
    | "program"
    | "template"
    | "guide"
    | "training"
  resourceDescription?: string
  children: React.ReactNode
}

export function ResourceGateModal({
  resourceTitle,
  resourceType,
  resourceDescription,
  children,
}: ResourceGateModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // TODO: Integrate with CRM/email service
    console.log("Form submitted:", { ...formData, resourceTitle, resourceType })

    setIsSubmitted(true)

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setIsOpen(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        role: "",
        message: "",
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Access {resourceTitle}
              </DialogTitle>
              <DialogDescription className="text-base">
                {resourceDescription ||
                  `Fill out the form below to access this ${resourceType.replace("-", " ")} and join our newsletter for exclusive insights on AI governance and tech equity.`}
              </DialogDescription>
            </DialogHeader>

            <Card className="bg-gradient-to-br from-purple-50 to-cyan-50 border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2">What You'll Receive:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="flex items-start gap-2">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 text-purple-600" />
                        <span>Professionally formatted PDF delivered to your inbox</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 text-purple-600" />
                        <span>Actionable frameworks and implementation guides</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 text-purple-600" />
                        <span>Exclusive insights from 25+ years of expertise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0 text-purple-600" />
                        <span>Monthly newsletter with latest trends and updates</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* </CHANGE> */}

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company *</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Your Company"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Role *</Label>
                <Input
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  placeholder="Your Role"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">What are you hoping to learn? (Optional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your interests..."
                  rows={3}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 bg-transparent"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                >
                  Get Access
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to receive our newsletter and updates. Unsubscribe anytime.
              </p>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-8 w-8 text-white" />
            </div>
            <DialogTitle className="text-2xl mb-2">Thank You!</DialogTitle>
            <DialogDescription className="text-base mb-4">
              Check your email for access to <strong>{resourceTitle}</strong>.
            </DialogDescription>
            <Card className="bg-gradient-to-br from-purple-50 to-cyan-50 border-purple-200 max-w-md mx-auto">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm">PDF Sent to:</div>
                    <div className="text-sm text-muted-foreground">{formData.email}</div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground text-left">
                  You've also been added to our newsletter for exclusive insights on AI governance and tech equity.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
