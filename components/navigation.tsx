"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "@/components/icons"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileDropdowns, setMobileDropdowns] = useState({
    incluu: false,
    resources: false,
    drDede: false,
    retreats: false,
  })
  const [desktopDropdowns, setDesktopDropdowns] = useState({
    incluu: false,
    resources: false,
    drDede: false,
    retreats: false,
  })

  const timeoutRefs = useRef<{ [key: string]: NodeJS.Timeout | null }>({
    incluu: null,
    resources: null,
    drDede: null,
    retreats: null,
  })

  const toggleMobileDropdown = (key: keyof typeof mobileDropdowns) => {
    setMobileDropdowns((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const openDesktopDropdown = (key: keyof typeof desktopDropdowns) => {
    // Clear any pending close timeout
    if (timeoutRefs.current[key]) {
      clearTimeout(timeoutRefs.current[key]!)
      timeoutRefs.current[key] = null
    }
    setDesktopDropdowns((prev) => ({ ...prev, [key]: true }))
  }

  const closeDesktopDropdown = (key: keyof typeof desktopDropdowns) => {
    // Set a timeout to close the dropdown after 300ms
    timeoutRefs.current[key] = setTimeout(() => {
      setDesktopDropdowns((prev) => ({ ...prev, [key]: false }))
    }, 300)
  }

  const closeAllDesktopDropdowns = () => {
    // Clear all timeouts
    Object.keys(timeoutRefs.current).forEach((key) => {
      if (timeoutRefs.current[key]) {
        clearTimeout(timeoutRefs.current[key]!)
        timeoutRefs.current[key] = null
      }
    })
    setDesktopDropdowns({ incluu: false, resources: false, drDede: false, retreats: false })
  }

  useEffect(() => {
    return () => {
      Object.values(timeoutRefs.current).forEach((timeout) => {
        if (timeout) clearTimeout(timeout)
      })
    }
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500 bg-clip-text text-transparent">
              Dr. Dédé
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent hover:from-violet-700 hover:to-cyan-500 transition-all"
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => openDesktopDropdown("incluu")}
              onMouseLeave={() => closeDesktopDropdown("incluu")}
            >
              <Link
                href="/incluu"
                className="text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent hover:from-violet-700 hover:to-cyan-500 transition-all flex items-center gap-1"
              >
                incluu
                <ChevronDown className="h-3 w-3 text-violet-600" />
              </Link>
              {desktopDropdowns.incluu && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg p-2 z-50"
                  onMouseEnter={() => openDesktopDropdown("incluu")}
                  onMouseLeave={() => closeDesktopDropdown("incluu")}
                >
                  <a
                    href="https://incluu.us/blog"
                    className="block px-4 py-3 rounded-md hover:bg-accent transition-colors"
                  >
                    <div className="text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent">
                      Blog
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Latest insights and articles</p>
                  </a>
                  <Link
                    href="/case-studies"
                    onClick={closeAllDesktopDropdowns}
                    className="block px-4 py-3 rounded-md hover:bg-accent transition-colors"
                  >
                    <div className="text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent">
                      Case Studies
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Real-world impact stories</p>
                  </Link>
                  <Link
                    href="/testimonials"
                    onClick={closeAllDesktopDropdowns}
                    className="block px-4 py-3 rounded-md hover:bg-accent transition-colors"
                  >
                    <div className="text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent">
                      Testimonials
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Client success stories</p>
                  </Link>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => openDesktopDropdown("drDede")}
              onMouseLeave={() => closeDesktopDropdown("drDede")}
            >
              <Link
                href="/dr-dede"
                className="text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent hover:from-violet-700 hover:to-cyan-500 transition-all flex items-center gap-1"
              >
                Dr. Dédé
                <ChevronDown className="h-3 w-3 text-violet-600" />
              </Link>
              {desktopDropdowns.drDede && (
                <div
                  className="absolute top-full right-0 mt-2 w-72 bg-background border border-border rounded-lg shadow-lg p-2 z-50"
                  onMouseEnter={() => openDesktopDropdown("drDede")}
                  onMouseLeave={() => closeDesktopDropdown("drDede")}
                >
                  <div
                    className="relative"
                    onMouseEnter={() => openDesktopDropdown("retreats")}
                    onMouseLeave={() => closeDesktopDropdown("retreats")}
                  >
                    <Link
                      href="/dr-dede/retreats"
                      onClick={closeAllDesktopDropdowns}
                      className="px-4 py-3 rounded-md hover:bg-accent transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <div>
                        <div className="text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent">
                          Retreats & Advocacy
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Transformative experiences</p>
                      </div>
                      <ChevronDown className="h-3 w-3 rotate-90" />
                    </Link>
                    {desktopDropdowns.retreats && (
                      <div
                        className="absolute right-full top-0 mr-2 w-64 bg-background border border-border rounded-lg shadow-lg p-2 z-50"
                        onMouseEnter={() => openDesktopDropdown("retreats")}
                        onMouseLeave={() => closeDesktopDropdown("retreats")}
                      >
                        <Link
                          href="/dr-dede/retreats/executive"
                          onClick={closeAllDesktopDropdowns}
                          className="block px-4 py-3 rounded-md hover:bg-accent transition-colors"
                        >
                          <div className="text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent">
                            Executive Retreats
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">Leadership transformation</p>
                        </Link>
                        <Link
                          href="/dr-dede/retreats/wellness"
                          onClick={closeAllDesktopDropdowns}
                          className="block px-4 py-3 rounded-md hover:bg-accent transition-colors"
                        >
                          <div className="text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent">
                            Luxury Wellness
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">Holistic rejuvenation</p>
                        </Link>
                        <Link
                          href="/dr-dede/retreats/advocacy"
                          onClick={closeAllDesktopDropdowns}
                          className="block px-4 py-3 rounded-md hover:bg-accent transition-colors"
                        >
                          <div className="text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent">
                            Disability Advocacy
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">Inclusive innovation</p>
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link
                    href="/dr-dede/speaking"
                    onClick={closeAllDesktopDropdowns}
                    className="block px-4 py-3 rounded-md hover:bg-accent transition-colors"
                  >
                    <div className="text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent">
                      Speaking & Events
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Book Dr. Dédé for your event</p>
                  </Link>
                  <a
                    href="https://www.youtube.com/watch?v=mSQuZG_DHVY"
                    className="block px-4 py-3 rounded-md hover:bg-accent transition-colors"
                  >
                    <div className="text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent">
                      Watch TEDx
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Transforming AI through equity</p>
                  </a>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => openDesktopDropdown("resources")}
              onMouseLeave={() => closeDesktopDropdown("resources")}
            >
              <Link
                href="/resources"
                className="text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent hover:from-violet-700 hover:to-cyan-500 transition-all flex items-center gap-1"
              >
                Resources
                <ChevronDown className="h-3 w-3 text-violet-600" />
              </Link>
              {desktopDropdowns.resources && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg p-2 z-50"
                  onMouseEnter={() => openDesktopDropdown("resources")}
                  onMouseLeave={() => closeDesktopDropdown("resources")}
                >
                  <a
                    href="https://pmukyznd.manus.space/"
                    className="block px-4 py-3 rounded-md hover:bg-accent transition-colors"
                  >
                    <div className="text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent">
                      ROI Calculator
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Calculate your AI ROI potential</p>
                  </a>
                  <Link
                    href="/resources/stories"
                    onClick={closeAllDesktopDropdowns}
                    className="block px-4 py-3 rounded-md hover:bg-accent transition-colors"
                  >
                    <div className="text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent">
                      Stories
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Inspiring narratives</p>
                  </Link>
                  <Link
                    href="/resources/privacy"
                    onClick={closeAllDesktopDropdowns}
                    className="block px-4 py-3 rounded-md hover:bg-accent transition-colors"
                  >
                    <div className="text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent">
                      Privacy Policy
                    </div>
                  </Link>
                  <Link
                    href="/resources/terms"
                    onClick={closeAllDesktopDropdowns}
                    className="block px-4 py-3 rounded-md hover:bg-accent transition-colors"
                  >
                    <div className="text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent">
                      Terms of Service
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent hover:from-violet-700 hover:to-cyan-500 transition-all"
            >
              Contact
            </Link>

            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-violet-600 to-cyan-400 hover:from-violet-700 hover:to-cyan-500 text-white border-0"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent py-2 px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <div>
                <div className="flex items-center justify-between">
                  <Link
                    href="/incluu"
                    className="flex-1 text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent py-2 px-4"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    incluu
                  </Link>
                  <button
                    onClick={() => toggleMobileDropdown("incluu")}
                    className="p-2 text-foreground/80 hover:text-foreground"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${mobileDropdowns.incluu ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
                {mobileDropdowns.incluu && (
                  <div className="pl-8 flex flex-col gap-2">
                    <a href="https://incluu.us/blog" className="text-sm text-foreground/70 hover:text-foreground py-2">
                      Blog
                    </a>
                    <Link
                      href="/case-studies"
                      className="text-sm text-foreground/70 hover:text-foreground py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Case Studies
                    </Link>
                    <Link
                      href="/testimonials"
                      className="text-sm text-foreground/70 hover:text-foreground py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Testimonials
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <Link
                    href="/dr-dede"
                    className="flex-1 text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent py-2 px-4"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dr. Dédé
                  </Link>
                  <button
                    onClick={() => toggleMobileDropdown("drDede")}
                    className="p-2 text-foreground/80 hover:text-foreground"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${mobileDropdowns.drDede ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
                {mobileDropdowns.drDede && (
                  <div className="pl-8 flex flex-col gap-2">
                    <div>
                      <button
                        onClick={() => toggleMobileDropdown("retreats")}
                        className="flex items-center justify-between w-full text-sm text-foreground/60 hover:text-foreground py-2 text-left"
                      >
                        <span>Retreats & Advocacy</span>
                        <ChevronDown
                          className={`h-3 w-3 transition-transform ${mobileDropdowns.retreats ? "rotate-180" : ""}`}
                        />
                      </button>
                      {mobileDropdowns.retreats && (
                        <div className="pl-4 flex flex-col gap-2 mt-2">
                          <Link
                            href="/dr-dede/retreats/executive"
                            className="text-sm text-foreground/60 hover:text-foreground py-2"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Executive Retreats
                          </Link>
                          <Link
                            href="/dr-dede/retreats/wellness"
                            className="text-sm text-foreground/60 hover:text-foreground py-2"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Luxury Wellness
                          </Link>
                          <Link
                            href="/dr-dede/retreats/advocacy"
                            className="text-sm text-foreground/60 hover:text-foreground py-2"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Disability Advocacy
                          </Link>
                        </div>
                      )}
                    </div>
                    <Link
                      href="/dr-dede/speaking"
                      className="text-sm text-foreground/70 hover:text-foreground py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Speaking & Events
                    </Link>
                    <a
                      href="https://www.youtube.com/watch?v=mSQuZG_DHVY"
                      className="text-sm text-foreground/70 hover:text-foreground py-2"
                    >
                      Watch TEDx
                    </a>
                  </div>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <Link
                    href="/resources"
                    className="flex-1 text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent py-2 px-4"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Resources
                  </Link>
                  <button
                    onClick={() => toggleMobileDropdown("resources")}
                    className="p-2 text-foreground/80 hover:text-foreground"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${mobileDropdowns.resources ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
                {mobileDropdowns.resources && (
                  <div className="pl-8 flex flex-col gap-2">
                    <a
                      href="https://pmukyznd.manus.space/"
                      className="text-sm text-foreground/70 hover:text-foreground py-2"
                    >
                      ROI Calculator
                    </a>
                    <Link
                      href="/resources/stories"
                      className="text-sm text-foreground/70 hover:text-foreground py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Stories
                    </Link>
                    <Link
                      href="/resources/privacy"
                      className="text-sm text-foreground/70 hover:text-foreground py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href="/resources/terms"
                      className="text-sm text-foreground/70 hover:text-foreground py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Terms of Service
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent py-2 px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="px-4 pt-2">
                <Button
                  asChild
                  className="bg-gradient-to-r from-violet-600 to-cyan-400 hover:from-violet-700 hover:to-cyan-500 text-white border-0 w-full"
                >
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Schedule Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
