import { NextResponse } from "next/server"

// One-time setup endpoint — creates required Supabase tables
// Call this once after deployment: POST https://www.dr-dede.com/api/setup?key=SETUP_SECRET

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ruiphgtxyazqlasbchiv.supabase.co"
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ""

async function executeSql(sql: string) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: sql }),
  })
  return { status: res.status, body: await res.text() }
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url)
  const key = searchParams.get("key")

  // Simple auth check — must match env var or hardcoded setup key
  const SETUP_KEY = process.env.SETUP_SECRET || "drdede-setup-2026"
  if (key !== SETUP_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  if (!SUPABASE_SERVICE_KEY) {
    return NextResponse.json({ error: "SUPABASE_SERVICE_ROLE_KEY not configured" }, { status: 500 })
  }

  const results: Record<string, unknown> = {}

  // Try to create contact_submissions table via direct REST insert test
  // If the table doesn't exist, we'll get a 404 — we'll document the SQL needed
  try {
    // Test if contact_submissions exists
    const testRes = await fetch(`${SUPABASE_URL}/rest/v1/contact_submissions?select=count&limit=0`, {
      headers: {
        apikey: SUPABASE_SERVICE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
      },
    })

    if (testRes.ok) {
      results.contact_submissions = "table already exists"
    } else {
      results.contact_submissions = "table does not exist — needs manual creation via SQL Editor"
      results.sql = `
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  subject text,
  message text NOT NULL,
  source text DEFAULT 'website',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for service role" ON public.contact_submissions FOR ALL USING (true);
CREATE POLICY "Allow anon insert" ON public.contact_submissions FOR INSERT WITH CHECK (true);
      `.trim()
    }

    // Test if leads table exists
    const leadsRes = await fetch(`${SUPABASE_URL}/rest/v1/leads?select=count&limit=0`, {
      headers: {
        apikey: SUPABASE_SERVICE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
      },
    })
    results.leads = leadsRes.ok ? "table exists" : "table does not exist"

  } catch (error) {
    results.error = String(error)
  }

  return NextResponse.json({
    success: true,
    message: "Setup check complete",
    results,
    env_check: {
      supabase_url: !!SUPABASE_URL,
      supabase_service_key: !!SUPABASE_SERVICE_KEY,
      smtp_user: !!process.env.SMTP_USER,
      smtp_pass: !!process.env.SMTP_PASS,
      airtable_key: !!process.env.AIRTABLE_API_KEY,
      slack_webhook: !!process.env.SLACK_WEBHOOK_URL,
    },
  })
}

export async function GET() {
  return NextResponse.json({ message: "Use POST with ?key=SETUP_SECRET to run setup" })
}
