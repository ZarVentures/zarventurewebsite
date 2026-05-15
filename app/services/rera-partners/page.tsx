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
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
          
          <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full" />

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
              <span className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm mb-6 backdrop-blur-md">
                Strategic Real Estate Partnerships
              </span>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                {content.title}
              </h1>
              
              <p className="text-slate-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-12">
                {content.intro}
              </p>

              <div className="relative h-[350px] md:h-[550px] rounded-[32px] overflow-hidden shadow-2xl border border-white/10">
                <Image 
                  src={content.heroImage} 
                  alt="RERA Partners" 
                  fill 
                  className="object-cover object-top" 
                  priority
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-10 left-10 text-left">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                      <Handshake className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">
                        Unlock Project Potential
                      </h2>
                      <p className="text-slate-300 mt-2 text-lg">
                        Structured joint ventures and disciplined capital participation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTIONS */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold uppercase tracking-wider">
                Value Proposition
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
                Our Capabilities
              </h2>
              <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-6" />
            </div>

            <div className="space-y-24 max-w-6xl mx-auto">
              {content.sections.map((section, index) => {
                const IconComponent = getIcon(section.icon)
                const isEven = index % 2 === 0
                
                return (
                  <div key={section.id} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {/* IMAGE */}
                    <div className={`relative group ${!isEven ? 'lg:order-2' : ''}`}>
                      <div className="relative h-[350px] md:h-[450px] overflow-hidden rounded-3xl shadow-2xl border border-slate-200">
                        <Image 
                          src={section.image} 
                          alt={section.title} 
                          fill 
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        <div className="absolute bottom-6 left-6 pr-6">
                          <div className="flex items-center gap-3">
                            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30">
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white leading-tight">
                              {section.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="p-4 rounded-2xl bg-blue-50">
                            <IconComponent className="w-8 h-8 text-blue-600" />
                          </div>
                          <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                            {section.title}
                          </h3>
                        </div>
                        
                        {section.subtitle && (
                          <p className="text-blue-600 font-semibold text-lg mb-4">{section.subtitle}</p>
                        )}
                        
                        {section.items && (
                          <ul className={`space-y-4 ${section.additionalItems ? 'mb-6' : ''}`}>
                            {section.items.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-4">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <span className="text-slate-700 leading-relaxed text-lg">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {section.additionalItems && (
                          <ul className="space-y-4">
                            {section.additionalItems.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-4">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <span className="text-slate-700 leading-relaxed text-lg">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950" />
          <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full" />

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-8">
                <div className="p-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  <Handshake className="w-14 h-14 text-white" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                {content.cta.title}
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
                {content.cta.description}
              </p>
              <a
                href={content.cta.link}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 text-white font-semibold shadow-2xl hover:bg-blue-700 transition-all duration-300 hover:scale-105"
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
