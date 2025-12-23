import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import coreCompetenciesContent from "@/data/content/core-competencies.json"
import { getIcon } from "@/lib/icon-map"

export const metadata = {
  title: "Core Competencies - Zar Ventures",
  description: "Explore our core competencies in real estate services",
}

export default function CoreCompetenciesPage() {
  const content = coreCompetenciesContent

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
                  alt="Zar Ventures Office" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="text-center">
                <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-3xl mx-auto">
                  <p className="text-gray-700 text-base leading-relaxed">
                    {content.companyOverview.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Competencies Sections */}
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
                        <ul className="space-y-2 text-sm text-foreground/80">
                          {section.items.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
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

      </main>
      <Footer />
    </div>
  )
}
