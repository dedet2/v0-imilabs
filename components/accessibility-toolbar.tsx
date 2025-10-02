"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Settings, Type, Contrast, Pause, Play } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function AccessibilityToolbar() {
  const [fontSize, setFontSize] = useState("normal")
  const [highContrast, setHighContrast] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  const increaseFontSize = () => {
    const root = document.documentElement
    if (fontSize === "normal") {
      root.style.fontSize = "112.5%"
      setFontSize("large")
    } else if (fontSize === "large") {
      root.style.fontSize = "125%"
      setFontSize("xlarge")
    }
  }

  const decreaseFontSize = () => {
    const root = document.documentElement
    if (fontSize === "xlarge") {
      root.style.fontSize = "112.5%"
      setFontSize("large")
    } else if (fontSize === "large") {
      root.style.fontSize = "100%"
      setFontSize("normal")
    }
  }

  const toggleContrast = () => {
    document.documentElement.classList.toggle("high-contrast")
    setHighContrast(!highContrast)
  }

  const toggleMotion = () => {
    if (reducedMotion) {
      document.documentElement.style.removeProperty("--motion-reduce")
    } else {
      document.documentElement.style.setProperty("--motion-reduce", "1")
    }
    setReducedMotion(!reducedMotion)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            className="h-12 w-12 rounded-full shadow-lg bg-background/95 backdrop-blur-sm"
            aria-label="Accessibility settings"
          >
            <Settings className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Accessibility</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={increaseFontSize} disabled={fontSize === "xlarge"}>
            <Type className="mr-2 h-4 w-4" />
            Increase Text Size
          </DropdownMenuItem>
          <DropdownMenuItem onClick={decreaseFontSize} disabled={fontSize === "normal"}>
            <Type className="mr-2 h-4 w-4" />
            Decrease Text Size
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={toggleContrast}>
            <Contrast className="mr-2 h-4 w-4" />
            {highContrast ? "Normal" : "High"} Contrast
          </DropdownMenuItem>
          <DropdownMenuItem onClick={toggleMotion}>
            {reducedMotion ? <Play className="mr-2 h-4 w-4" /> : <Pause className="mr-2 h-4 w-4" />}
            {reducedMotion ? "Enable" : "Reduce"} Motion
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
