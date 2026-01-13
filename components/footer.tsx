"use client"

import Link from "next/link"
import { useState } from "react"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { CONTACT_INFO } from "@/lib/constants"

export function Footer() {
  const [isWhatsAppDialogOpen, setIsWhatsAppDialogOpen] = useState(false)
  const [qrCodeError, setQrCodeError] = useState(false)
  const whatsappNumber = CONTACT_INFO.whatsapp.number
  const whatsappUrl = CONTACT_INFO.whatsapp.url
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(whatsappUrl)}`

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Get in Touch */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p className="text-base leading-relaxed">
                  4049, 4th Floor, Currency Tower
                  <br />
                  VIP Road, Raipur
                  <br />
                  Chhattisgarh, PIN- 492001
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <a href={`tel:${CONTACT_INFO.phone.primary}`} className="text-base hover:text-primary transition-colors">
                    {CONTACT_INFO.phone.display.primary}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <a href={`tel:${CONTACT_INFO.phone.secondary}`} className="text-base hover:text-primary transition-colors">
                    {CONTACT_INFO.phone.display.secondary}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-base hover:text-primary transition-colors cursor-pointer underline">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-base hover:text-primary transition-colors link-enhanced focus-enhanced">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#featured-properties" className="text-base hover:text-primary transition-colors link-enhanced focus-enhanced">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-base hover:text-primary transition-colors link-enhanced focus-enhanced">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-base hover:text-primary transition-colors link-enhanced focus-enhanced">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-base hover:text-primary transition-colors link-enhanced focus-enhanced">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/rera-compliance" className="text-base hover:text-primary transition-colors link-enhanced focus-enhanced">
                  RERA Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/about" className="text-base hover:text-primary transition-colors link-enhanced focus-enhanced">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-base hover:text-primary transition-colors link-enhanced focus-enhanced">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/services/international-realty" className="text-base hover:text-primary transition-colors link-enhanced focus-enhanced">
                  International Realty
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-base hover:text-primary transition-colors link-enhanced focus-enhanced">
                  FAQ
                </Link>
              </li>
            </ul>

            <h4 className="text-base font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/profile.php?id=61585967627893" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity focus-enhanced" 
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-[#1877F2] icon-enhanced" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity focus-enhanced" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-[#1DA1F2] icon-enhanced" />
              </a>
              <a 
                href="https://www.instagram.com/zar.ventures/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity focus-enhanced" 
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-[#E4405F] icon-enhanced" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity focus-enhanced" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-[#0077B5] icon-enhanced" />
              </a>
              <button
                onClick={() => setIsWhatsAppDialogOpen(true)}
                className="hover:opacity-80 transition-opacity focus-enhanced"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5 text-[#25D366] icon-enhanced" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-base">© {new Date().getFullYear()} Zar Ventures. All rights reserved.</p>
        </div>
      </div>

      {/* WhatsApp QR Code Dialog */}
      <Dialog open={isWhatsAppDialogOpen} onOpenChange={setIsWhatsAppDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">Scan to Connect on WhatsApp</DialogTitle>
            <DialogDescription className="text-center">
              Scan this QR code to start a conversation with us on WhatsApp
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center py-4">
            <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
              {qrCodeError ? (
                <div className="w-64 h-64 flex flex-col items-center justify-center text-center p-4">
                  <p className="text-sm text-muted-foreground mb-2">QR Code unavailable</p>
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline text-sm"
                  >
                    Click here to open WhatsApp
                  </a>
                </div>
              ) : (
                <img
                  src={qrCodeUrl}
                  alt="WhatsApp QR Code"
                  className="w-64 h-64"
                  onError={() => setQrCodeError(true)}
                />
              )}
            </div>
            <p className="text-sm text-muted-foreground text-center">
              WhatsApp: +91 {CONTACT_INFO.whatsapp.number.slice(2)}
            </p>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Or click{" "}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                here
              </a>{" "}
              to open WhatsApp directly
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  )
}
