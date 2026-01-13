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
    <section className="relative py-12 md:py-16 flex items-center justify-center bg-gradient-to-b from-primary/10 to-background">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-accent mb-6 text-balance text-sharp">
          {content.title}
        </h1>
        <div className="text-lg md:text-xl text-foreground/90 mb-8 max-w-3xl mx-auto space-y-4 text-pretty">
          <p>
            {content.subtitle}
          </p>
          {content.paragraphs?.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}
        </div>
        <Link href={content.ctaLink || "/services/core-competencies"}>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            {content.ctaText}
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
