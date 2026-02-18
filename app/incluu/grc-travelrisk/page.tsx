import { redirect } from "next/navigation"

// GRC TravelRisk Engine landing page — redirects to the dedicated GRC subdomain
// The dashboard behind this is RBAC-protected (admin/superadmin only via Clerk)
export default function GRCTravelRiskRedirect() {
  redirect("https://grc.incluu.us")
}
