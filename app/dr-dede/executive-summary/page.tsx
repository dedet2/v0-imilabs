import { redirect } from "next/navigation"

// Executive Summary — redirects to the dedicated executive summary site
export default function ExecutiveSummaryRedirect() {
  redirect("https://v0-dr-dede-executive-summary.vercel.app")
}
