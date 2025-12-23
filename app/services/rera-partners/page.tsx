import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { CheckCircle2, Handshake } from "lucide-react"
import reraPartnersContent from "@/data/content/rera-partners.json"
import { getIcon } from "@/lib/icon-map"

export const metadata = {
  title: "RERA Partners or Land owners, Be our partner - Zar Ventures",
  description: "Partner with us as a RERA partner or land owner",
}

export default function RERAPartnersPage() {
  const content = reraPartnersContent

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-accent">
                {content.title}
              </h1>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="relative h-56 md:h-72 rounded-lg overflow-hidden shadow-xl mb-6">
                <Image 
                  src={content.heroImage} 
                  alt="RERA Partners" 
                  fill 
                  className="object-cover object-center" 
                  priority
                />
              </div>
              <div className="bg-card rounded-lg border border-border shadow-lg p-6">
                <p className="text-base text-foreground/80 leading-relaxed">
                  {content.intro}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Sections */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-6">
              {content.sections.map((section) => {
                const IconComponent = getIcon(section.icon)
                const isImageLeft = section.imagePosition === "left"
                
                return (
                  <div key={section.id} className="bg-card rounded-lg border border-border shadow-lg overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-4">
                      {isImageLeft && (
                        <div className="relative h-full min-h-[200px] order-2 md:order-1">
                          <Image 
                            src={section.image} 
                            alt={section.title} 
                            fill 
                            className="object-cover" 
                          />
                        </div>
                      )}
                      <div className={`p-5 ${isImageLeft ? 'order-1 md:order-2' : ''}`}>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-accent/10 rounded-lg">
                            <IconComponent className="w-5 h-5 text-accent" />
                          </div>
                          <h3 className="text-xl font-serif font-bold text-foreground">
                            {section.title}
                          </h3>
                        </div>
                        {section.subtitle && (
                          <p className="text-foreground/70 mb-3 text-sm font-semibold">{section.subtitle}</p>
                        )}
                        {section.items && (
                          <ul className={`space-y-2 text-foreground/80 text-sm ${section.additionalItems ? 'mb-3' : ''}`}>
                            {section.items.map((item, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {section.additionalItems && (
                          <ul className="space-y-2 text-foreground/80 text-sm">
                            {section.additionalItems.map((item, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      {!isImageLeft && (
                        <div className="relative h-full min-h-[200px]">
                          <Image 
                            src={section.image} 
                            alt={section.title} 
                            fill 
                            className="object-cover" 
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-center mb-12">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-accent/10 rounded-full">
                    <Handshake className="w-12 h-12 text-accent" />
                  </div>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-accent">
                  {content.cta.title}
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
                  {content.cta.description}
                </p>
              </div>
              <a
                href={content.cta.link}
                className="inline-block px-8 py-3 bg-accent text-primary-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                {content.cta.buttonText}
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
