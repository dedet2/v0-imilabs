import { NextResponse } from "next/server"

// ============================================================
// Contact Form API — stores in Supabase + Airtable, notifies via
// Google Workspace SMTP (primary) or Slack webhook (fallback).
// NO Resend dependency — uses nodemailer with Google Workspace.
// ============================================================

const ADMIN_EMAILS = ["rar@dr-dede.com", "info@dr-dede.com", "info@incluu.us"]

// Supabase direct REST API (no library dependency)
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ruiphgtxyazqlasbchiv.supabase.co"
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ""
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

// Airtable
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID || "appOV1EhlOeCh6ZdO"
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY || ""
const AIRTABLE_CONTACTS_TABLE = process.env.AIRTABLE_CONTACTS_TABLE || "Contact Submissions"

// ---------- Supabase Storage ----------

async function supabaseInsert(table: string, data: Record<string, unknown>) {
  const key = SUPABASE_SERVICE_KEY || SUPABASE_ANON_KEY
  if (!key) {
    console.warn("No Supabase key configured — skipping Supabase storage")
    return { success: false, reason: "no_key" }
  }

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      const errorText = await res.text()
      console.error(`Supabase insert to ${table} failed:`, errorText)
      return { success: false, reason: errorText }
    }

    return { success: true }
  } catch (error) {
    console.error(`Supabase insert error (${table}):`, error)
    return { success: false, reason: String(error) }
  }
}

async function storeInSupabase(formData: Record<string, string>) {
  // Try contact_submissions first
  let result = await supabaseInsert("contact_submissions", {
    first_name: formData.firstName,
    last_name: formData.lastName,
    email: formData.email.toLowerCase(),
    phone: formData.phone || null,
    company: formData.organization || null,
    subject: formData.service || null,
    message: formData.message,
    source: "dr-dede.com",
    status: "new",
  })

  if (result.success) return { success: true, table: "contact_submissions" }

  // Fallback to leads table
  result = await supabaseInsert("leads", {
    email: formData.email.toLowerCase(),
    first_name: formData.firstName,
    last_name: formData.lastName,
    company: formData.organization || null,
    source: "contact_form",
    interests: formData.service || null,
  })

  if (result.success) return { success: true, table: "leads" }

  return { success: false, reason: result.reason }
}

// ---------- Airtable Storage ----------

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

// ---------- Email Notification via Google Workspace SMTP ----------

async function sendEmailNotification(data: Record<string, string>) {
  // Use nodemailer with Google Workspace SMTP
  const SMTP_USER = process.env.SMTP_USER || process.env.GOOGLE_SMTP_USER
  const SMTP_PASS = process.env.SMTP_PASS || process.env.GOOGLE_APP_PASSWORD

  if (SMTP_USER && SMTP_PASS) {
    try {
      const nodemailer = await import("nodemailer")
      const transporter = nodemailer.default.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      })

      const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6b21a8; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold;">Name:</td><td style="padding: 8px;">${data.firstName} ${data.lastName}</td></tr>
            <tr style="background: #f9fafb;"><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${data.phone || "Not provided"}</td></tr>
            <tr style="background: #f9fafb;"><td style="padding: 8px; font-weight: bold;">Organization:</td><td style="padding: 8px;">${data.organization || "Not provided"}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Service Interest:</td><td style="padding: 8px;">${data.service || "Not specified"}</td></tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f3f4f6; border-radius: 8px;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 24px;">
            Submitted from dr-dede.com contact form at ${new Date().toISOString()}
          </p>
        </div>
      `

      await transporter.sendMail({
        from: `"Dr. Dédé Website" <${SMTP_USER}>`,
        to: ADMIN_EMAILS.join(", "),
        subject: `New Contact: ${data.service || "General"} — ${data.firstName} ${data.lastName}`,
        html: htmlBody,
      })

      // Also send confirmation to the submitter
      await transporter.sendMail({
        from: `"Dr. Dédé Tetsubayashi" <${SMTP_USER}>`,
        to: data.email,
        subject: "Thank you for reaching out — Dr. Dédé Tetsubayashi",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #6b21a8;">Thank You, ${data.firstName}!</h2>
            <p>We've received your inquiry about <strong>${data.service || "our services"}</strong>
            and will get back to you within 24-48 hours.</p>
            <p>In the meantime, feel free to explore our latest resources at
            <a href="https://www.dr-dede.com" style="color: #6b21a8;">dr-dede.com</a>.</p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
            <p style="color: #9ca3af; font-size: 12px;">
              Dr. Dédé Tetsubayashi | AI Governance Expert | Digital Equity Pioneer<br />
              <a href="https://www.dr-dede.com" style="color: #6b21a8;">www.dr-dede.com</a> |
              <a href="https://www.incluu.us" style="color: #06b6d4;">www.incluu.us</a>
            </p>
          </div>
        `,
      })

      return { success: true, method: "google_smtp" }
    } catch (error) {
      console.error("SMTP email error:", error)
    }
  }

  // Fallback: Slack webhook
  const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL
  if (SLACK_WEBHOOK_URL) {
    try {
      await fetch(SLACK_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `New Contact Form Submission`,
          blocks: [
            {
              type: "header",
              text: { type: "plain_text", text: "New Contact Inquiry" },
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

  console.warn("No notification service configured. Set SMTP_USER + SMTP_PASS (Google Workspace) or SLACK_WEBHOOK_URL")
  return { success: false, reason: "no_notification_service" }
}

// ---------- API Handler ----------

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
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const formData = { firstName, lastName, email, phone, organization, service, message }

    // Store in Supabase + Airtable in parallel, plus send notifications
    const [supabaseResult, airtableResult, notificationResult] = await Promise.all([
      storeInSupabase(formData),
      storeInAirtable(formData),
      sendEmailNotification(formData),
    ])

    const stored = supabaseResult.success || airtableResult.success
    if (!stored) {
      // CRITICAL: Log the full submission so it can be recovered
      console.error("CRITICAL: Failed to store contact submission!", JSON.stringify(formData))
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll get back to you within 24-48 hours.",
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
