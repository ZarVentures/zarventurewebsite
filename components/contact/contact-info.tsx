import { Mail, Phone } from "lucide-react"
import contactContent from "@/data/content/contact.json"

export function ContactInfo() {

  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3 text-accent">{contactContent.contactInfo.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
              <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">{contactContent.contactInfo.email.label}</h3>
                <a href={contactContent.contactInfo.email.href} className="text-sm text-accent hover:underline cursor-pointer">
                  {contactContent.contactInfo.email.value}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
              <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">{contactContent.contactInfo.phone.label}</h3>
                <div className="space-y-1">
                  {contactContent.contactInfo.phone.numbers.map((phone, index) => (
                    <a key={index} href={phone.href} className="block text-sm text-accent hover:underline">
                      {phone.value}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
