"use client"

import { useEffect } from "react"

export function DynamicFavicon() {
  useEffect(() => {
    // Detect which domain we're on
    const hostname = window.location.hostname
    const isDrDede = hostname.includes("dr-dede")

    // Set the appropriate favicon
    const faviconPath = isDrDede ? "/dr-dede-favicon.png" : "/incluu-favicon.png"

    // Update all favicon link tags
    const links = document.querySelectorAll("link[rel*='icon']")
    links.forEach((link) => link.remove())

    // Add new favicon links
    const iconLink = document.createElement("link")
    iconLink.rel = "icon"
    iconLink.type = "image/png"
    iconLink.href = faviconPath
    document.head.appendChild(iconLink)

    const appleLink = document.createElement("link")
    appleLink.rel = "apple-touch-icon"
    appleLink.href = faviconPath
    document.head.appendChild(appleLink)

    const shortcutLink = document.createElement("link")
    shortcutLink.rel = "shortcut icon"
    shortcutLink.href = faviconPath
    document.head.appendChild(shortcutLink)
  }, [])

  return null
}
