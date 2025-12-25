"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Square, MapPin } from "lucide-react"
import { featuredProjectsContent } from "@/lib/content-loader" // Import from content-loader

interface Property {
  id: string
  title: string
  location: string
  area: string
  image: string
}

interface FeaturedPropertiesProps {
  properties?: Property[]
}

export function FeaturedProperties({ properties }: FeaturedPropertiesProps) {
  // Use properties from JSON file or fallback to prop
  const displayProperties = properties || featuredProjectsContent.projects

  if (!displayProperties || displayProperties.length === 0) {
    return (
      <section id="featured-projects" className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-accent">{featuredProjectsContent.title}</h2>
            <p className="text-muted-foreground">{featuredProjectsContent.emptyStateMessage}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="featured-projects" className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-accent">{featuredProjectsContent.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {featuredProjectsContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden">
              <div className="relative h-64 overflow-hidden shine-effect">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  className="w-full h-full object-cover image-enhanced"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg"
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">{property.title}</h3>
                <div className="flex items-center text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-border">
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="text-sm">{property.area}</span>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-primary border-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        window.location.href = "/projects"
                      }
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.location.href = "/projects"
              }
            }}
          >
            {featuredProjectsContent.buttonText}
          </Button>
        </div>
      </div>
    </section>
  )
}
