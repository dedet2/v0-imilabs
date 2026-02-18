"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "@/components/icons"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        organization: formData.get("organization") as string,
        service: formData.get("service") as string,
        message: formData.get("message") as string,
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        toast({
          title: "Message sent!",
          description: result.message || "We'll get back to you within 24-48 hours.",
        })
        ;(e.target as HTMLFormElement).reset()
      } else {
        toast({
          title: "Something went wrong",
          description: result.error || "Please try again or email us directly at rar@dr-dede.com",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast({
        title: "Connection error",
        description: "Please try again or email us directly at rar@dr-dede.com",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input id="firstName" name="firstName" required placeholder="John" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input id="lastName" name="lastName" required placeholder="Doe" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input id="email" name="email" type="email" required placeholder="john@example.com" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" type="tel" placeholder="+1 (234) 567-8900" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="organization">Organization</Label>
        <Input id="organization" name="organization" placeholder="Company Name" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service Interest *</Label>
        <Select name="service" required>
          <SelectTrigger id="service">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ai-grc">AI GRC Consulting</SelectItem>
            <SelectItem value="tech-equity">Tech Equity Solutions</SelectItem>
            <SelectItem value="speaking">Speaking Engagement</SelectItem>
            <SelectItem value="retreat">Luxury Retreat</SelectItem>
            <SelectItem value="workshop">Corporate Workshop</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your project or inquiry..."
          rows={6}
          className="resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to our privacy policy and terms of service.
      </p>
    </form>
  )
}
