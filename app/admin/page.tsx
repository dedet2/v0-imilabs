import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, ExternalLink, Lock, Shield } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const metadata: Metadata = {
  title: "Admin Gateway | Dr. Dédé Suite",
  description: "Secure admin gateway to external dashboard",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminPage() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 mb-4">
              <Lock className="h-8 w-8 text-purple-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Admin Gateway</h1>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Secure access to external administrative dashboard
            </p>
          </div>

          <Alert className="mb-8 border-amber-200 bg-amber-50">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <AlertTitle className="text-amber-900">Security Notice</AlertTitle>
            <AlertDescription className="text-amber-800">
              You are about to access an external administrative system. Please ensure you have proper authorization
              before proceeding.
            </AlertDescription>
          </Alert>

          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Shield className="h-6 w-6 text-purple-600" />
                <CardTitle>Risk Travel Dashboard</CardTitle>
              </div>
              <CardDescription>
                External administrative portal for risk management and travel operations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-sm font-medium">Dashboard Type</span>
                  <Badge variant="outline">External System</Badge>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-sm font-medium">Authentication</span>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Required
                  </Badge>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm font-medium">Access Level</span>
                  <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                    Admin Only
                  </Badge>
                </div>
              </div>

              <div className="pt-4">
                <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90">
                  <Link href="https://risktravel-dashboard.vercel.app" rel="noopener noreferrer">
                    Access Dashboard
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center leading-relaxed">
                This link will redirect you to the dashboard. You may be prompted to authenticate with your admin
                credentials.
              </p>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/">Return to Homepage</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
