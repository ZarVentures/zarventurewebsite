import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2 } from "lucide-react"
import privacyContent from "@/data/content/privacy.json"

export const metadata = {
  title: "Privacy Policy - Zar Ventures",
  description: "Privacy Policy for Zar Ventures Real Estate",
}

export default function PrivacyPage() {
  const content = privacyContent

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-8 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-accent mb-4 text-center">
                {content.title}
              </h1>
              <p className="text-sm text-foreground/70 text-center mb-8">
                Effective Date: {content.effectiveDate}
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-card rounded-lg border border-border shadow-lg p-6">
                {content.intro.paragraphs.map((paragraph, index) => (
                  <p key={index} className={`text-foreground/80 leading-relaxed ${index === 0 ? 'mb-6' : ''}`}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {content.sections.map((section) => (
                <div key={section.id} className="bg-card rounded-lg border border-border shadow-lg p-6">
                  <h2 className="text-2xl font-serif font-bold text-accent mb-4">
                    {section.id}. {section.title}
                  </h2>
                  {section.content && (
                    <p className="text-foreground/80 mb-4">
                      {section.content}
                    </p>
                  )}
                  {section.subsections && section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex}>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{subsection.title}</h3>
                      <ul className="space-y-2 text-foreground/80">
                        {subsection.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {section.items && (
                    <ul className="space-y-2 text-foreground/80">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.additionalContent && (
                    <p className="text-foreground/80 leading-relaxed mt-4">
                      {section.additionalContent}
                    </p>
                  )}
                </div>
              ))}

              {/* Disclaimer */}
              <div className="bg-card rounded-lg border border-border shadow-lg p-6">
                <p className="text-sm text-foreground/70 italic leading-relaxed">
                  <strong>Disclaimer:</strong> {content.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

