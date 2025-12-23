import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bed, Bath, Square, MapPin } from "lucide-react"

interface Property {
  id: string
  title: string
  location: string
  price: string
  bedrooms: number
  bathrooms: number
  area: string
  image: string
}

interface FeaturedPropertiesProps {
  properties?: Property[]
}

export function FeaturedProperties({ properties }: FeaturedPropertiesProps) {
  // Default properties - will be replaced with data from S3
  const defaultProperties: Property[] = [
    {
      id: "1",
      title: "Modern Luxury Villa",
      location: "Beverly Hills, CA",
      price: "₹20,45,00,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "3,200 sq ft",
      image: "/luxury-villa-exterior.png",
    },
    {
      id: "2",
      title: "Contemporary Apartment",
      location: "Manhattan, NY",
      price: "₹15,45,00,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "2,100 sq ft",
      image: "/modern-apartment.png",
    },
    {
      id: "3",
      title: "Elegant Townhouse",
      location: "San Francisco, CA",
      price: "₹26,70,00,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "4,500 sq ft",
      image: "/elegant-townhouse.jpg",
    },
  ]

  const displayProperties = properties || defaultProperties

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-accent">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our handpicked selection of premium properties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">{property.title}</h3>
                <div className="flex items-center text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="text-sm">{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="text-sm">{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="text-sm">{property.area}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl font-bold text-primary">{property.price}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-primary border-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
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
          >
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  )
}
