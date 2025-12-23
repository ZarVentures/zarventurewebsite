import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2 } from "lucide-react"
import reraComplianceContent from "@/data/content/rera-compliance.json"

export const metadata = {
  title: "RERA Compliance - Zar Ventures",
  description: "RERA Compliance Policy for Zar Ventures Real Estate",
}

export default function RERACompliancePage() {
  const content = reraComplianceContent

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
                <p className="text-foreground/80 leading-relaxed">
                  {content.intro}
                </p>
              </div>

              {content.sections.map((section) => (
                <div key={section.id} className="bg-card rounded-lg border border-border shadow-lg p-6">
                  <h2 className="text-2xl font-serif font-bold text-accent mb-4">
                    {section.id}. {section.title}
                  </h2>
                  {section.content && (
                    <p className={`text-foreground/80 ${section.items ? 'mb-4' : 'leading-relaxed'}`}>
                      {section.content}
                    </p>
                  )}
                  {section.items && (
                    <ul className={`space-y-2 text-foreground/80 ${section.additionalContent ? 'mt-4' : ''}`}>
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

