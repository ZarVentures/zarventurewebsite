import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

import {
  CheckCircle2,
  Handshake,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Users,
  Building2,
} from "lucide-react"

import channelPartnerProgramContent from "@/data/content/channel-partner-program.json"

export const metadata = {
  title: "Channel Partner Program - Zar Ventures",
  description:
    "Join Zar Ventures as a Channel Partner and represent our premium real estate projects",
}

export default function ChannelPartnerProgramPage() {
  const content = channelPartnerProgramContent

  const benefits = [
    {
      icon: TrendingUp,
      title: "High Growth",
      desc: "Expand your business with premium real estate opportunities.",
    },
    {
      icon: Building2,
      title: "Premium Projects",
      desc: "Access verified residential and commercial developments.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Partnership",
      desc: "Transparent collaboration with long-term business value.",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      desc: "Marketing, sales, and operational support for every partner.",
    },
  ]

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
                Strategic Partnership Program
              </span>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                {content.title}
              </h1>

              <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
                {content.intro}
              </p>

              <div className="relative h-[350px] md:h-[550px] rounded-[32px] overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/professional-business-man-sales.jpg"
                  alt="Channel Partner Program"
                  fill
                  priority
                  className="object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-10 left-10 text-left">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                      <Handshake className="w-8 h-8 text-white" />
                    </div>

                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Grow With Zar Ventures
                      </h2>

                      <p className="text-slate-300 mt-2 text-lg">
                        Building profitable real estate partnerships together.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold uppercase tracking-wider">
                Why Join Us
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
                Partnership Benefits
              </h2>

              <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-6" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((item, index) => {
                const Icon = item.icon

                return (
                  <div
                    key={index}
                    className="group bg-white border border-slate-200 rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-500">
                      <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-500" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-10">
              {content.sections.map((section, index) => (
                <div
                  key={section.id}
                  className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl"
                >
                  <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-blue-600 to-cyan-500" />

                  <div className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
                      <div>
                        <span className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
                          Channel Partner Program
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
                          {section.title}
                        </h2>
                      </div>

                      <div className="hidden md:flex items-center justify-center w-20 h-20 rounded-3xl bg-blue-50">
                        <span className="text-3xl font-bold text-blue-600">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {section.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 hover:bg-white hover:shadow-md transition-all duration-300"
                        >
                          <div className="mt-1">
                            <CheckCircle2 className="w-5 h-5 text-blue-600" />
                          </div>

                          <p className="text-slate-700 leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
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

                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}