"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)

  const servicesSubmenu = [
    { name: "Core Competencies", href: "/services/core-competencies" },
    { name: "RERA Partners or Land owners, Be our partner", href: "/services/rera-partners" },
    { name: "Collaboration Model", href: "/services/channel-partner" },
    { name: "Channel Partner", href: "/services/channel-partner-program" },
    { name: "International Realty", href: "/services/international-realty" },
  ]

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "News and Events", href: "/news-events" },
    { name: "Contact us", href: "/contact" },
    { name: "International Realty", href: "/services/international-realty" },
    { name: "FAQ", href: "/faq" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-header-text/20 bg-header-bg backdrop-blur supports-[backdrop-filter]:bg-header-bg/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/whatsapp-20image-202025-12-10-20at-207.jpeg"
              alt="Zar Ventures Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="font-serif text-2xl font-bold text-header-text">Zar Ventures</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-base font-medium text-header-text hover:text-header-text-hover transition-colors nav-item-enhanced focus-enhanced"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="px-3 py-2 text-base font-medium text-header-text hover:text-header-text-hover transition-colors flex items-center gap-1 cursor-pointer nav-item-enhanced focus-enhanced"
                onClick={(e) => {
                  e.preventDefault()
                  setIsServicesOpen(!isServicesOpen)
                }}
              >
                Our Services
                <ChevronDown className={`h-4 w-4 transition-transform icon-enhanced ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-header-bg border border-header-text/20 rounded-lg shadow-lg py-2 z-50 card-enhanced">
                  {servicesSubmenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-base text-header-text hover:bg-header-text/10 hover:text-header-text-hover transition-colors link-enhanced focus-enhanced"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navItems.slice(2).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-base font-medium text-header-text hover:text-header-text-hover transition-colors nav-item-enhanced focus-enhanced"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-header-text"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 space-y-1">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-header-text hover:text-header-text-hover hover:bg-header-text/10 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-header-text hover:text-header-text-hover hover:bg-header-text/10 rounded-md transition-colors"
              >
                <span>Our Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileServicesOpen && (
                <div className="pl-6 mt-1 space-y-1">
                  {servicesSubmenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-base text-header-text hover:text-header-text-hover hover:bg-header-text/10 rounded-md transition-colors"
                      onClick={() => {
                        setIsMenuOpen(false)
                        setIsMobileServicesOpen(false)
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navItems.slice(2).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-header-text hover:text-header-text-hover hover:bg-header-text/10 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
