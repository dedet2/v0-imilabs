import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

// Admin notification emails
const ADMIN_EMAILS = [
  "rar@dr-dede.com",
  "info@dr-dede.com",
  "info@incluu.us",
]

// Airtable configuration
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID || "appOV1EhlOeCh6ZdO"
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY || ""
const AIRTABLE_CONTACTS_TABLE = process.env.AIRTABLE_CONTACTS_TABLE || "Contact Submissions"

async function storeInAirtable(data: Record<string, string>) {
  if (!AIRTABLE_API_KEY) {
    console.warn("AIRTABLE_API_KEY not set — skipping Airtable storage")
    return { success: false, reason: "no_api_key" }
  }

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_CONTACTS_TABLE)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                "First Name": data.firstName,
                "Last Name": data.lastName,
                Email: data.email,
                Phone: data.phone || "",
                Organization: data.organization || "",
                "Service Interest": data.service || "",
                Message: data.message,
                Source: "dr-dede.com Contact Form",
                "Submitted At": new Date().toISOString(),
              },
            },
          ],
        }),
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Airtable error:", errorText)
      return { success: false, reason: errorText }
    }

    return { success: true }
  } catch (error) {
    console.error("Airtable storage error:", error)
    return { success: false, reason: String(error) }
  }
}

async function sendAdminNotification(data: Record<string, string>) {
  // Try Resend first
  const RESEND_API_KEY = process.env.RESEND_API_KEY
  if (RESEND_API_KEY) {
    try {
      const { Resend } = await import("resend")
      const resend = new Resend(RESEND_API_KEY)

      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "Dr. Dédé Website <notifications@dr-dede.com>",
        to: ADMIN_EMAILS,
        subject: `New Contact Inquiry: ${data.service || "General"} — ${data.firstName} ${data.lastName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #6b21a8; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold; color: #374151;">Name:</td><td style="padding: 8px;">${data.firstName} ${data.lastName}</td></tr>
              <tr style="background: #f9fafb;"><td style="padding: 8px; font-weight: bold; color: #374151;">Email:</td><td style="padding: 8px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
              <tr><td style="padding: 8px; font-weight: bold; color: #374151;">Phone:</td><td style="padding: 8px;">${data.phone || "Not provided"}</td></tr>
              <tr style="background: #f9fafb;"><td style="padding: 8px; font-weight: bold; color: #374151;">Organization:</td><td style="padding: 8px;">${data.organization || "Not provided"}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold; color: #374151;">Service Interest:</td><td style="padding: 8px;">${data.service || "Not specified"}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; background: #f3f4f6; border-radius: 8px;">
              <h3 style="color: #374151; margin-top: 0;">Message:</h3>
              <p style="color: #4b5563; white-space: pre-wrap;">${data.message}</p>
            </div>
            <p style="color: #9ca3af; font-size: 12px; margin-top: 24px;">
              Submitted from dr-dede.com contact form at ${new Date().toISOString()}
            </p>
          </div>
        `,
      })

      return { success: true, method: "resend" }
    } catch (error) {
      console.error("Resend email error:", error)
    }
  }

  // Try Slack webhook as fallback
  const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL
  if (SLACK_WEBHOOK_URL) {
    try {
      await fetch(SLACK_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `🔔 *New Contact Form Submission*`,
          blocks: [
            {
              type: "header",
              text: { type: "plain_text", text: "🔔 New Contact Inquiry" },
            },
            {
              type: "section",
              fields: [
                { type: "mrkdwn", text: `*Name:*\n${data.firstName} ${data.lastName}` },
                { type: "mrkdwn", text: `*Email:*\n${data.email}` },
                { type: "mrkdwn", text: `*Organization:*\n${data.organization || "N/A"}` },
                { type: "mrkdwn", text: `*Service:*\n${data.service || "N/A"}` },
              ],
            },
            {
              type: "section",
              text: { type: "mrkdwn", text: `*Message:*\n${data.message}` },
            },
          ],
        }),
      })

      return { success: true, method: "slack" }
    } catch (error) {
      console.error("Slack notification error:", error)
    }
  }

  console.warn("No notification method configured (set RESEND_API_KEY or SLACK_WEBHOOK_URL)")
  return { success: false, reason: "no_notification_service" }
}

async function sendConfirmationEmail(data: Record<string, string>) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY
  if (!RESEND_API_KEY) return

  try {
    const { Resend } = await import("resend")
    const resend = new Resend(RESEND_API_KEY)

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Dr. Dédé Tetsubayashi <notifications@dr-dede.com>",
      to: [data.email],
      subject: "Thank you for reaching out — Dr. Dédé Tetsubayashi",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6b21a8;">Thank You, ${data.firstName}!</h2>
          <p style="color: #374151; line-height: 1.6;">
            We've received your inquiry about <strong>${data.service || "our services"}</strong>
            and will get back to you within 24-48 hours.
          </p>
          <p style="color: #374151; line-height: 1.6;">
            In the meantime, feel free to explore our latest resources at
            <a href="https://www.dr-dede.com" style="color: #6b21a8;">dr-dede.com</a>.
          </p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
          <p style="color: #9ca3af; font-size: 12px;">
            Dr. Dédé Tetsubayashi | AI Governance Expert | Digital Equity Pioneer<br />
            <a href="https://www.dr-dede.com" style="color: #6b21a8;">www.dr-dede.com</a> |
            <a href="https://www.incluu.us" style="color: #06b6d4;">www.incluu.us</a>
          </p>
        </div>
      `,
    })
  } catch (error) {
    console.error("Confirmation email error:", error)
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, organization, service, message } = body

    // Validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "First name, last name, email, and message are required" },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    const formData = { firstName, lastName, email, phone, organization, service, message }

    // Store in Supabase (primary)
    let supabaseResult = { success: false, reason: "" }
    try {
      const supabase = await createClient()
      const { error: insertError } = await supabase.from("contact_submissions").insert({
        first_name: firstName,
        last_name: lastName,
        email: email.toLowerCase(),
        phone: phone || null,
        organization: organization || null,
        service_interest: service || null,
        message: message,
        source: "dr-dede.com",
        status: "new",
      })

      if (insertError) {
        console.error("Supabase contact insert error:", insertError)
        // Try the leads table as fallback
        const { error: leadsError } = await supabase.from("leads").insert({
          email: email.toLowerCase(),
          first_name: firstName,
          last_name: lastName,
          company: organization || null,
          source: "contact_form",
          interests: service || null,
        })

        if (leadsError) {
          console.error("Supabase leads fallback error:", leadsError)
          supabaseResult = { success: false, reason: String(leadsError.message) }
        } else {
          supabaseResult = { success: true, reason: "stored_in_leads" }
        }
      } else {
        supabaseResult = { success: true, reason: "stored_in_contact_submissions" }
      }
    } catch (error) {
      console.error("Supabase error:", error)
      supabaseResult = { success: false, reason: String(error) }
    }

    // Store in Airtable (secondary) — run in parallel with notification
    const [airtableResult, notificationResult] = await Promise.all([
      storeInAirtable(formData),
      sendAdminNotification(formData),
    ])

    // Send confirmation email (non-blocking)
    sendConfirmationEmail(formData).catch((e) =>
      console.error("Confirmation email failed:", e)
    )

    // At least one storage method must succeed
    const stored = supabaseResult.success || airtableResult.success
    if (!stored) {
      console.error("CRITICAL: Failed to store contact submission anywhere!", {
        supabase: supabaseResult,
        airtable: airtableResult,
      })
      // Still return success to user — we don't want to lose the inquiry
      // Log the full submission for manual recovery
      console.error("LOST SUBMISSION DATA:", JSON.stringify(formData))
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll get back to you within 24-48 hours.",
      stored: {
        supabase: supabaseResult.success,
        airtable: airtableResult.success,
      },
      notified: notificationResult.success,
    })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: "Something went wrong. Please try again or email us directly at rar@dr-dede.com" },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed. Please use the contact form at https://www.dr-dede.com/contact" },
    { status: 405 }
  )
}
