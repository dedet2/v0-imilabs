import Link from "next/link"
import { Linkedin, Twitter, Youtube, Mail, Instagram, Facebook } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="text-xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-4">
              Dr. Dédé Tetsubayashi
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI Governance Expert | Digital Equity Pioneer | Tech Ethics Thought Leader
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/incluu" className="hover:text-foreground transition-colors">
                  AI GRC Consulting
                </Link>
              </li>
              <li>
                <Link href="/incluu" className="hover:text-foreground transition-colors">
                  Tech Equity Solutions
                </Link>
              </li>
              <li>
                <Link href="/dr-dede" className="hover:text-foreground transition-colors">
                  Disability Advocacy
                </Link>
              </li>
              <li>
                <Link href="/dr-dede" className="hover:text-foreground transition-colors">
                  Luxury Retreats
                </Link>
              </li>
              <li>
                <Link href="/dr-dede" className="hover:text-foreground transition-colors">
                  Speaking & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/dr-dede" className="hover:text-foreground transition-colors">
                  About Dr. Dédé
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-foreground transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-foreground transition-colors">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://linkedin.com/in/drdede"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/drdede"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@drdede"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/drdede"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/drdede"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@drdede.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Dr. Dédé Tetsubayashi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
