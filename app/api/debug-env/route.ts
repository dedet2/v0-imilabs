import { NextResponse } from "next/server"

export async function GET() {
  const envInfo = {
    nodeVersion: process.version,
    platform: process.platform,
    hasBlob: typeof process.env.BLOB_READ_WRITE_TOKEN !== "undefined",
    hasFal: typeof process.env.FAL_KEY !== "undefined",
    blobTokenLength: process.env.BLOB_READ_WRITE_TOKEN?.length || 0,
    falKeyLength: process.env.FAL_KEY?.length || 0,
    allEnvKeys: Object.keys(process.env).filter(
      (key) => key.includes("BLOB") || key.includes("FAL") || key.includes("VERCEL"),
    ),
    timestamp: new Date().toISOString(),
  }

  return NextResponse.json(envInfo)
}
