"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

interface NewsletterFormProps {
  source?: string
  variant?: "default" | "compact" | "footer"
  showName?: boolean
  buttonText?: string
  placeholder?: string
  className?: string
}

export function NewsletterForm({
  source = "newsletter",
  variant = "default",
  showName = false,
  buttonText = "Subscribe",
  placeholder = "Enter your email",
  className = "",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus("idle")

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          first_name: firstName || undefined,
          source,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus("success")
        setMessage(data.message || "Successfully subscribed!")
        setEmail("")
        setFirstName("")
      } else {
        setStatus("error")
        setMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch {
      setStatus("error")
      setMessage("Network error. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : buttonText}
        </Button>
        {status === "success" && (
          <CheckCircle className="h-5 w-5 text-green-500 self-center" />
        )}
      </form>
    )
  }

  if (variant === "footer") {
    return (
      <div className={className}>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-background/10 border-background/20 text-foreground placeholder:text-foreground/50"
            disabled={isLoading}
          />
          <Button type="submit" variant="secondary" disabled={isLoading}>
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : buttonText}
          </Button>
        </form>
        {status !== "idle" && (
          <p className={`text-sm mt-2 ${status === "success" ? "text-green-400" : "text-red-400"}`}>
            {message}
          </p>
        )}
      </div>
    )
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="space-y-4">
        {showName && (
          <Input
            type="text"
            placeholder="First name (optional)"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            disabled={isLoading}
          />
        )}
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              buttonText
            )}
          </Button>
        </div>
        {status !== "idle" && (
          <div className={`flex items-center gap-2 text-sm ${status === "success" ? "text-green-600" : "text-red-600"}`}>
            {status === "success" ? (
              <CheckCircle className="h-4 w-4" />
            ) : (
              <AlertCircle className="h-4 w-4" />
            )}
            {message}
          </div>
        )}
      </form>
    </div>
  )
}
