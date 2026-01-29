"use client"

import Link from "next/link"
import { Linkedin, Twitter, Youtube, Mail, Instagram, Facebook } from "@/components/icons"
import { NewsletterForm } from "@/components/newsletter-form"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white border-t border-gray-700 mt-20">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
            <p className="text-gray-300 mb-6">Get the latest insights on AI governance, tech equity, and inclusive innovation delivered to your inbox.</p>
            <NewsletterForm 
              source="footer" 
              variant="footer" 
              buttonText="Subscribe"
              placeholder="Enter your email"
            />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Dr. Dédé Tetsubayashi
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              AI Governance Expert | Digital Equity Pioneer | Tech Ethics Thought Leader
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Transforming tech equity into competitive advantage through strategic AI governance and disability
              advocacy.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Services</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="/incluu"
                  className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-200" />
                  AI GRC Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/incluu"
                  className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-200" />
                  Tech Equity Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/dr-dede"
                  className="hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all duration-200" />
                  Disability Advocacy
                </Link>
              </li>
              <li>
                <Link
                  href="/dr-dede"
                  className="hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all duration-200" />
                  Luxury Retreats
                </Link>
              </li>
              <li>
                <Link
                  href="/dr-dede"
                  className="hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all duration-200" />
                  Speaking & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="/dr-dede"
                  className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-200" />
                  About Dr. Dédé
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-200" />
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-200" />
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-200" />
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect - Enhanced social media section */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Connect With Us</h3>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              Follow Dr. Dédé for insights on AI governance, tech equity, and inclusive innovation.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/dr-dede/"
                className="h-10 w-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://twitter.com/drdede"
                className="h-10 w-10 rounded-lg bg-gray-800 hover:bg-blue-400 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://youtube.com/@drdede"
                className="h-10 w-10 rounded-lg bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://instagram.com/drdede"
                className="h-10 w-10 rounded-lg bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://facebook.com/drdede"
                className="h-10 w-10 rounded-lg bg-gray-800 hover:bg-blue-700 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
              </a>
              <a
                href="mailto:contact@drdede.com"
                className="h-10 w-10 rounded-lg bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright and additional links */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© {currentYear} Dr. Dédé Tetsubayashi. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/resources/privacy-policy" className="hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/resources/terms-of-service" className="hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="hover:text-blue-400 transition-colors duration-200">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
