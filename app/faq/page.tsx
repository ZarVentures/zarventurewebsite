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
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-slate-950 via-gray-900 to-black border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-sm mb-4 border border-yellow-500/20">
                Help Center
              </span>

              <h1 className="text-4xl md:text-5xl font-serif font-bold text-yellow-400 mb-4">
                {faqContent.title}
              </h1>

              <p className="text-gray-400 text-lg">
                Find answers to the most frequently asked questions.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-14 bg-gradient-to-b from-black via-slate-950 to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-5">
              {faqContent.sections.map((section) => {
                const isOpen = openSections.has(section.id)

                return (
                  <div
                    key={section.id}
                    className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl overflow-hidden transition-all duration-300 hover:border-yellow-500/30"
                  >
                    {/* Section Header */}
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-all duration-300"
                    >
                      <h2 className="text-xl md:text-2xl font-serif font-bold text-white">
                        {section.title}
                      </h2>

                      <div className="flex-shrink-0 ml-4">
                        {isOpen ? (
                          <div className="p-2 rounded-full bg-yellow-500/10">
                            <Minus className="w-5 h-5 text-yellow-400" />
                          </div>
                        ) : (
                          <div className="p-2 rounded-full bg-yellow-500/10">
                            <Plus className="w-5 h-5 text-yellow-400" />
                          </div>
                        )}
                      </div>
                    </button>

                    {/* Expandable Content */}
                    <div
                      className={`transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "max-h-[2000px] opacity-100"
                          : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                    >
                      <div className="px-6 pb-6 space-y-5">
                        {section.faqs.map((faq, index) => (
                          <div
                            key={index}
                            className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-yellow-500/20 transition-all duration-300"
                          >
                            <h3 className="font-semibold text-white mb-3 text-lg">
                              {index + 1}. {faq.question}
                            </h3>

                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                              {faq.answer}
                            </p>
                          </div>
                        ))}
                      </div>
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