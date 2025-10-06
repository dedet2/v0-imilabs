"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2 } from "@/components/icons"

interface ResourceGateModalProps {
  isOpen: boolean
  onClose: () => void
  resourceTitle: string
  resourceType: "whitepaper" | "case-study" | "report" | "tool" | "media" | "program"
  resourceDescription?: string
}

export function ResourceGateModal({
  isOpen,
  onClose,
  resourceTitle,
  resourceType,
  resourceDescription,
}: ResourceGateModalProps) {
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
    // For now, just simulate submission
    console.log("Form submitted:", { ...formData, resourceTitle, resourceType })

    setIsSubmitted(true)

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      onClose()
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
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
                <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
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
            <DialogDescription className="text-base">
              Check your email for access to {resourceTitle}. We've also added you to our newsletter.
            </DialogDescription>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
