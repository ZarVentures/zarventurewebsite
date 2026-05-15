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
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />

          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-blue-500 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400 blur-3xl" />
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm mb-6">
                Enterprise Excellence
              </span>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                {content.title}
              </h1>

              <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed mb-12">
                {content.companyOverview.description}
              </p>

              <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src={content.heroImage}
                  alt="Zar Ventures"
                  fill
                  priority
                  className="object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-8 left-8 text-left">
                  <h2 className="text-white text-2xl font-semibold">
                    Driving Innovation & Excellence
                  </h2>

                  <p className="text-slate-300 mt-2">
                    Transforming businesses with modern enterprise solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE COMPETENCIES */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="text-blue-600 font-semibold tracking-wide uppercase">
                What We Do
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
                Our Core Competencies
              </h2>

              <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full" />
            </div>

            <div className="space-y-20">
              {content.sections.map((section, index) => {
                const IconComponent = getIcon(section.icon)

                const isEven = index % 2 === 0

                return (
                  <div
                    key={section.id}
                    className={`grid lg:grid-cols-2 gap-10 items-center ${
                      !isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* IMAGE */}
                    <div
                      className={`relative group ${
                        !isEven ? "lg:order-2" : ""
                      }`}
                    >
                      <div className="relative h-[350px] md:h-[450px] overflow-hidden rounded-3xl shadow-2xl">
                        <Image
                          src={section.image}
                          alt={section.title}
                          fill
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                        <div className="absolute bottom-6 left-6">
                          <div className="flex items-center gap-3">
                            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>

                            <h3 className="text-2xl font-bold text-white">
                              {section.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div
                      className={`${
                        !isEven ? "lg:order-1" : ""
                      }`}
                    >
                      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="p-4 rounded-2xl bg-blue-50">
                            <IconComponent className="w-8 h-8 text-blue-600" />
                          </div>

                          <div>
                            <p className="text-sm text-slate-500 uppercase tracking-widest">
                              Expertise
                            </p>

                            <h3 className="text-3xl font-bold text-slate-900">
                              {section.title}
                            </h3>
                          </div>
                        </div>

                        <ul className="space-y-5">
                          {section.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-4 group"
                            >
                              <div className="mt-1 h-3 w-3 rounded-full bg-blue-600 group-hover:scale-125 transition-transform" />

                              <span className="text-slate-700 leading-relaxed text-lg">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
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