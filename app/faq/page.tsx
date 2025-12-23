"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import faqContent from "@/data/content/faq.json"

export default function FAQPage() {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set())

  const toggleSection = (sectionId: string) => {
    const newOpenSections = new Set(openSections)
    if (newOpenSections.has(sectionId)) {
      newOpenSections.delete(sectionId)
    } else {
      newOpenSections.add(sectionId)
    }
    setOpenSections(newOpenSections)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-8 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-accent mb-4">
                {faqContent.title}
              </h1>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-4">
              {faqContent.sections.map((section) => {
                const isOpen = openSections.has(section.id)
                
                return (
                  <div key={section.id} className="bg-card rounded-lg border border-border shadow-lg overflow-hidden">
                    {/* Section Header */}
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-accent/5 transition-colors"
                    >
                      <h2 className="text-xl font-serif font-bold text-foreground">
                        {section.title}
                      </h2>
                      <div className="flex-shrink-0 ml-4">
                        {isOpen ? (
                          <Minus className="w-6 h-6 text-accent" />
                        ) : (
                          <Plus className="w-6 h-6 text-accent" />
                        )}
                      </div>
                    </button>

                    {/* Expandable Content */}
                    {isOpen && (
                      <div className="px-5 pb-5 space-y-4">
                        {section.faqs.map((faq, index) => (
                          <div key={index} className="border-l-2 border-accent pl-4 py-2">
                            <h3 className="font-semibold text-foreground mb-2">
                              {index + 1}. {faq.question}
                            </h3>
                            <p className="text-sm text-foreground/80 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
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

