import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, first_name, last_name, company, source, interests } = body

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    // Check if email already exists
    const { data: existingLead } = await supabase
      .from("leads")
      .select("id, created_at")
      .eq("email", email.toLowerCase())
      .single()

    if (existingLead) {
      // Update existing lead with new info if provided
      const { error: updateError } = await supabase
        .from("leads")
        .update({
          first_name: first_name || undefined,
          last_name: last_name || undefined,
          company: company || undefined,
          interests: interests || undefined,
          updated_at: new Date().toISOString(),
        })
        .eq("id", existingLead.id)

      if (updateError) {
        console.error("Error updating lead:", updateError)
        return NextResponse.json(
          { error: "Failed to update subscription" },
          { status: 500 }
        )
      }

      return NextResponse.json({
        success: true,
        message: "You're already subscribed! We've updated your preferences.",
        isExisting: true,
      })
    }

    // Insert new lead
    const { error: insertError } = await supabase.from("leads").insert({
      email: email.toLowerCase(),
      first_name: first_name || null,
      last_name: last_name || null,
      company: company || null,
      source: source || "website",
      interests: interests || null,
    })

    if (insertError) {
      console.error("Error inserting lead:", insertError)
      return NextResponse.json(
        { error: "Failed to subscribe" },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed!",
      isExisting: false,
    })
  } catch (error) {
    console.error("Leads API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  )
}
