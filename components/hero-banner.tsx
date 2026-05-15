"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface HeroBannerProps {
  data?: {
    title: string
    subtitle: string
    paragraphs?: string[]
    ctaText: string
    ctaLink?: string
    backgroundImage: string
  }
}

export function HeroBanner({ data }: HeroBannerProps) {
  // Default content - updated with new welcome text
  const content = data || {
    title: "Welcome to Zar Ventures",
    subtitle: "Your trusted partner in real estate excellence. With a legacy of delivering premium properties and exceptional service, we have established ourselves as leaders in the real estate industry.",
    paragraphs: [
      "Our commitment to quality, innovation, and customer satisfaction drives everything we do. From luxury residences to commercial spaces, we bring your property dreams to life with integrity and professionalism.",
      "At Zar Ventures, we believe that finding the perfect property is more than just a transaction—it's about creating lasting value and building communities where people thrive."
    ],
    ctaText: "Explore Business Opportunities",
    ctaLink: "/services/core-competencies",
    backgroundImage: "",
  }

  return (
    <section className="relative overflow-hidden py-24 md:py-32 flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm mb-6 backdrop-blur-md">
          Welcome to Excellence
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-balance tracking-tight leading-tight">
          {content.title}
        </h1>
        <div className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto space-y-4 text-pretty leading-relaxed">
          <p>
            {content.subtitle}
          </p>
          {content.paragraphs?.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href={content.ctaLink || "/services/core-competencies"}>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-2xl text-lg font-semibold shadow-2xl transition-all duration-300 hover:scale-105 button-enhanced group">
              {content.ctaText}
              <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
