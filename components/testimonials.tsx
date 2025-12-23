"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
  avatar: string
}

interface TestimonialsProps {
  testimonials?: Testimonial[]
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  // Default testimonials - will be replaced with data from S3
  const defaultTestimonials: Testimonial[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Homeowner",
      content:
        "Zar Venture made finding my dream home effortless. Their team was professional, knowledgeable, and truly cared about my needs.",
      rating: 5,
      avatar: "/professional-woman-portrait.png",
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "Property Investor",
      content:
        "Outstanding service and market expertise. I have invested in multiple properties through Zar Venture and each experience has been excellent.",
      rating: 5,
      avatar: "/professional-man-portrait.png",
    },
    {
      id: "3",
      name: "Priya Sharma",
      role: "NRI Buyer",
      content:
        "As an NRI, I was worried about the process, but Zar Venture handled everything smoothly. Their NRI Corner service is exceptional.",
      rating: 5,
      avatar: "/professional-woman-portrait-2.png",
    },
  ]

  const displayTestimonials = testimonials || defaultTestimonials

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-accent">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by hundreds of satisfied clients worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative overflow-hidden">
              <CardContent className="p-6">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
