import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import {
  CheckCircle2,
  Home,
  TrendingUp,
  Key,
  Building2,
  BarChart3,
  FileCheck,
  Shield,
  Users,
  Target,
  Award,
} from "lucide-react"

import internationalRealtyContent from "@/data/content/international-realty.json"
import { getIcon } from "@/lib/icon-map"

export const metadata = {
  title: "International Realty - Zar Ventures",
  description: "Explore our international realty services",
}

export default function InternationalRealtyPage() {
  const content = internationalRealtyContent

  const serviceIcons: Record<string, typeof Home> = {
    "Buying assistance": Home,
    "Selling services": TrendingUp,
    "Renting & leasing services": Key,
    "Property management": Building2,
    "Investment advisory": BarChart3,
    "Legal & documentation support": FileCheck,
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />

          <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full" />

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
              <span className="inline-flex items-center px-4 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm mb-6">
                Global Real Estate Solutions
              </span>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {content.title}
              </h1>

              <h2 className="text-2xl md:text-3xl text-cyan-300 font-semibold mb-6">
                {content.subtitle}
              </h2>

              <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed mb-10">
                {content.description}
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {content.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-sm"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="relative h-[350px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src={content.heroImage}
                  alt="International Realty"
                  fill
                  priority
                  className="object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-8 text-left">
                  <h3 className="text-3xl font-bold text-white">
                    Premium International Properties
                  </h3>

                  <p className="text-slate-300 mt-3 max-w-lg">
                    Helping investors and homeowners secure the finest global real estate opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES OVERVIEW */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.services.map((service, index) => {
                const ServiceIcon = serviceIcons[service] || Home

                return (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
                      <ServiceIcon className="w-7 h-7 text-blue-600" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {service}
                    </h3>

                    <p className="text-slate-600">
                      Premium real estate solutions tailored for international investors and property owners.
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* TRUSTED PARTNER */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-blue-600 font-semibold uppercase tracking-wider">
                Why Zar Ventures
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
                {content.trustedPartner.title}
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed">
                {content.trustedPartner.description}
              </p>
            </div>
          </div>
        </section>

        {/* SERVICE SECTIONS */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {content.serviceSections.map((section, index) => {
                const IconComponent = getIcon(section.icon)

                const reverse = index % 2 !== 0

                return (
                  <div
                    key={section.id}
                    className="grid lg:grid-cols-2 gap-12 items-center"
                  >
                    {/* IMAGE */}
                    <div className={`${reverse ? "lg:order-2" : ""}`}>
                      <div className="relative h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                        <Image
                          src={section.image}
                          alt={section.title}
                          fill
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                        <div className="absolute bottom-8 left-8">
                          <div className="flex items-center gap-4">
                            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                              <IconComponent className="w-7 h-7 text-white" />
                            </div>

                            <div>
                              <h3 className="text-3xl font-bold text-white">
                                {section.title}
                              </h3>

                              <p className="text-slate-300 mt-2">
                                {section.tagline}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className={`${reverse ? "lg:order-1" : ""}`}>
                      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200">
                        <p className="text-slate-600 leading-relaxed mb-8">
                          {section.description}
                        </p>

                        <h4 className="text-xl font-bold text-slate-900 mb-5">
                          Our Services Include
                        </h4>

                        <ul className="space-y-4 mb-10">
                          {section.items.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-4"
                            >
                              <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />

                              <span className="text-slate-700 leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-3">
                          {section.benefits.map((benefit, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-24 bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                {content.whyChooseUs.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.whyChooseUs.items.map((item, index) => {
                const icons = [Users, Shield, Target, Award]
                const IconComponent = icons[index % 4]

                return (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                      <IconComponent className="w-7 h-7 text-cyan-300" />
                    </div>

                    <p className="text-slate-300 leading-relaxed">
                      {item}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* INVESTMENT PROCESS */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="text-blue-600 uppercase tracking-wider font-semibold">
                Investment Journey
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
                {content.investmentProcess.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {content.investmentProcess.steps.map((step) => {
                const StepIcon = getIcon(step.icon)

                return (
                  <div
                    key={step.number}
                    className="relative bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      {step.number}
                    </div>

                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 mt-4">
                      <StepIcon className="w-8 h-8 text-blue-600" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      {step.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
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