import { MapPin } from "lucide-react"
import contactContent from "@/data/content/contact.json"

export function OfficeLocations() {
  const offices = contactContent.officeLocations.offices
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3 text-accent">{contactContent.officeLocations.title}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {offices.map((office, index) => (
            <div key={index} className="bg-card rounded-xl border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-accent/30">
              <div className="p-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">{office.name}</h3>
                    <div className="space-y-1">
                      {office.addressLines.map((line, lineIndex) => (
                        <p key={lineIndex} className="text-sm text-foreground/80 leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
