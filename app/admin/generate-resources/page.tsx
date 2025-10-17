"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2, CheckCircle2, XCircle, FileText, Video, Copy } from "@/components/icons"

export default function GenerateResourcesPage() {
  const [pdfStatus, setPdfStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [videoStatus, setVideoStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [pdfResults, setPdfResults] = useState<any>(null)
  const [videoResults, setVideoResults] = useState<any>(null)

  const generatePDFs = async () => {
    setPdfStatus("loading")
    try {
      const response = await fetch("/api/generate-pdfs", { method: "POST" })
      const data = await response.json()
      setPdfResults(data)
      setPdfStatus(response.ok ? "success" : "error")
    } catch (error) {
      console.error("Failed to generate PDFs:", error)
      setPdfStatus("error")
    }
  }

  const generateVideos = async () => {
    setVideoStatus("loading")
    try {
      const response = await fetch("/api/generate-all-testimonials", { method: "POST" })
      const data = await response.json()
      setVideoResults(data)
      setVideoStatus(response.ok ? "success" : "error")
    } catch (error) {
      console.error("Failed to generate videos:", error)
      setVideoStatus("error")
    }
  }

  const copyVideoUrls = () => {
    if (!videoResults?.results) return

    const urlsCode = videoResults.results.map((r: any) => `  "${r.id}": "${r.videoUrl || "null"}",`).join("\n")

    const code = `// Update lib/testimonial-videos.ts with these URLs:\nconst videoUrls = {\n${urlsCode}\n}`

    navigator.clipboard.writeText(code)
    alert("Video URLs copied to clipboard! Paste into lib/testimonial-videos.ts")
  }

  return (
    <main className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-purple-50 to-cyan-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Generate Resources</h1>
            <p className="text-lg text-muted-foreground">Generate PDFs and video testimonials for the website</p>
          </div>

          <div className="grid gap-6">
            {/* PDF Generation */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle>Generate PDFs</CardTitle>
                    <CardDescription>
                      Create all 15 downloadable resources (whitepapers, case studies, templates)
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={generatePDFs}
                  disabled={pdfStatus === "loading"}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700"
                  size="lg"
                >
                  {pdfStatus === "loading" && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                  {pdfStatus === "success" && <CheckCircle2 className="mr-2 h-5 w-5" />}
                  {pdfStatus === "error" && <XCircle className="mr-2 h-5 w-5" />}
                  {pdfStatus === "idle" && "Generate All PDFs"}
                  {pdfStatus === "loading" && "Generating PDFs..."}
                  {pdfStatus === "success" && "PDFs Generated Successfully"}
                  {pdfStatus === "error" && "Generation Failed - Retry"}
                </Button>

                {pdfResults && (
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="font-medium">Generated:</span>
                      <Badge className="bg-purple-600">
                        {pdfResults.generated}/{pdfResults.total}
                      </Badge>
                    </div>
                    <div className="max-h-60 overflow-y-auto space-y-1">
                      {pdfResults.results?.map((result: any, index: number) => (
                        <div key={index} className="p-2 bg-white rounded text-sm">
                          <div className="flex items-center justify-between">
                            <span className="truncate flex-1">{result.title}</span>
                            {result.url ? (
                              <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 ml-2" />
                            ) : (
                              <XCircle className="h-4 w-4 text-red-600 flex-shrink-0 ml-2" />
                            )}
                          </div>
                          {result.error && (
                            <div className="mt-1 text-xs text-red-600 bg-red-50 p-2 rounded">Error: {result.error}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Video Generation */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center">
                    <Video className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <CardTitle>Generate Video Testimonials</CardTitle>
                    <CardDescription>Create AI-generated video testimonials using fal.ai</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={generateVideos}
                  disabled={videoStatus === "loading"}
                  className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700"
                  size="lg"
                >
                  {videoStatus === "loading" && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                  {videoStatus === "success" && <CheckCircle2 className="mr-2 h-5 w-5" />}
                  {videoStatus === "error" && <XCircle className="mr-2 h-5 w-5" />}
                  {videoStatus === "idle" && "Generate All Videos"}
                  {videoStatus === "loading" && "Generating Videos..."}
                  {videoStatus === "success" && "Videos Generated Successfully"}
                  {videoStatus === "error" && "Generation Failed - Retry"}
                </Button>

                {videoResults && (
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center justify-between p-3 bg-cyan-50 rounded-lg">
                      <span className="font-medium">Generated:</span>
                      <Badge className="bg-cyan-600">
                        {videoResults.generated}/{videoResults.total}
                      </Badge>
                    </div>
                    <div className="max-h-60 overflow-y-auto space-y-1">
                      {videoResults.results?.map((result: any, index: number) => (
                        <div key={index} className="p-2 bg-white rounded text-sm">
                          <div className="flex items-center justify-between">
                            <span className="truncate flex-1">{result.name}</span>
                            {result.videoUrl ? (
                              <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 ml-2" />
                            ) : (
                              <XCircle className="h-4 w-4 text-red-600 flex-shrink-0 ml-2" />
                            )}
                          </div>
                          {result.error && (
                            <div className="mt-1 text-xs text-red-600 bg-red-50 p-2 rounded">Error: {result.error}</div>
                          )}
                        </div>
                      ))}
                    </div>
                    {videoStatus === "success" && (
                      <Button onClick={copyVideoUrls} variant="outline" className="w-full mt-4 bg-transparent">
                        <Copy className="mr-2 h-4 w-4" />
                        Copy Video URLs to Update Code
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Instructions:</h3>
              <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                <li>Click "Generate All PDFs" to create all 15 downloadable resources</li>
                <li>Click "Generate All Videos" to create AI video testimonials</li>
                <li>Wait for generation to complete (may take several minutes)</li>
                <li>Files will be automatically uploaded to Vercel Blob storage</li>
                <li>Click "Copy Video URLs" and update lib/testimonial-videos.ts with the URLs</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
