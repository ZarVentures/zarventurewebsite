import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { OfficeLocations } from "@/components/contact/office-locations"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata = {
  title: "Contact Us - Zar Ventures",
  description:
    "Get in touch with Zar Ventures. Visit our offices in Raipur, Bhilai, Korba, and Jashpur or contact us online.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />
      <main className="flex-1">
        <ContactHero />
        <ContactInfo />
        <OfficeLocations />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
