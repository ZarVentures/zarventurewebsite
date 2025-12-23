import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Handshake, CheckCircle2 } from "lucide-react"
import collaborationModelContent from "@/data/content/collaboration-model.json"
import { getIcon } from "@/lib/icon-map"

export const metadata = {
  title: "Collaboration Model - Zar Ventures",
  description: "Collaboration Model for channel partners and grow your real estate business",
}

export default function ChannelPartnerPage() {
  const content = collaborationModelContent

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3 text-accent">
                Our Collaboration Proposal
              </h1>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-xl mb-4">
                <Image 
                  src={content.heroImage} 
                  alt="Channel Partner Collaboration" 
                  fill 
                  className="object-cover object-center" 
                  priority
                />
              </div>
              <div className="bg-card rounded-lg border border-border shadow-lg p-4 mb-4">
                <p className="text-sm text-foreground/80 leading-relaxed text-center">
                  {content.intro.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sections */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-4">
                {content.sections.map((section) => {
                  const IconComponent = getIcon(section.icon)
                  const isImageLeft = section.imagePosition === "left"
                  
                  return (
                    <div key={section.id} className="bg-card rounded-lg border border-border shadow-lg overflow-hidden">
                      <div className="grid md:grid-cols-2 gap-4">
                        {isImageLeft && (
                          <div className="relative h-full min-h-[180px] order-2 md:order-1">
                            <Image 
                              src={section.image} 
                              alt={section.title} 
                              fill 
                              className="object-cover" 
                            />
                          </div>
                        )}
                        <div className={`p-4 ${isImageLeft ? 'order-1 md:order-2' : ''}`}>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-3 bg-accent/10 rounded-xl flex-shrink-0">
                              <IconComponent className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-lg font-serif font-bold text-foreground">
                              {section.title}
                            </h3>
                          </div>
                          {section.description && (
                            <p className="text-foreground/70 mb-3 text-base">
                              {section.description}
                            </p>
                          )}
                          <ul className="space-y-2 text-foreground/80 text-base">
                            {section.items.map((item, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {!isImageLeft && (
                          <div className="relative h-full min-h-[180px]">
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
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Handshake className="w-10 h-10 text-accent" />
                  </div>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3 text-accent">
                  {content.cta.title}
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
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
