import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Mail, MessageCircle } from "lucide-react"
import { CONTACT_INFO } from "@/lib/constants"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "News & Events - Under Construction - Zar Ventures",
  description: "Thank you for showing interest in Zar Ventures news and events",
}

export default function NewsEventsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-8">
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-accent">
                  Thank You for Showing Interest
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 mb-4 leading-relaxed">
                  Thank you for showing interest in Zar Ventures projects. This page is under construction.
                </p>
                <p className="text-base md:text-lg text-foreground/70 mb-8 leading-relaxed">
                  For any quick information, please get in touch with us on the given contact numbers.
                </p>
              </div>

              <div className="bg-card rounded-lg border border-border shadow-lg p-8 mb-8">
                <h2 className="font-serif text-2xl font-bold mb-6 text-accent">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <a
                      href={`tel:${CONTACT_INFO.phone.primary}`}
                      className="text-lg text-foreground hover:text-accent transition-colors"
                    >
                      {CONTACT_INFO.phone.display.primary}
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <a
                      href={`tel:${CONTACT_INFO.phone.secondary}`}
                      className="text-lg text-foreground hover:text-accent transition-colors"
                    >
                      {CONTACT_INFO.phone.display.secondary}
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-lg text-foreground hover:text-accent transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <MessageCircle className="h-5 w-5 text-accent" />
                    <a
                      href={CONTACT_INFO.whatsapp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-foreground hover:text-accent transition-colors"
                    >
                      WhatsApp: {CONTACT_INFO.phone.display.primary}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-accent text-primary-foreground hover:bg-accent/90">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

