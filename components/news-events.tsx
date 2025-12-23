import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

interface NewsEvent {
  id: string
  title: string
  date: string
  description: string
  image: string
  category: "news" | "event"
}

interface NewsEventsProps {
  items?: NewsEvent[]
}

export function NewsEvents({ items }: NewsEventsProps) {
  // Default news/events - will be replaced with data from S3
  const defaultItems: NewsEvent[] = [
    {
      id: "1",
      title: "Real Estate Market Trends 2024",
      date: "March 15, 2024",
      description: "Discover the latest trends shaping the real estate market in 2024.",
      image: "/real-estate-market-analysis.jpg",
      category: "news",
    },
    {
      id: "2",
      title: "Property Investment Seminar",
      date: "March 25, 2024",
      description: "Join our exclusive seminar on smart property investment strategies.",
      image: "/business-seminar.jpg",
      category: "event",
    },
    {
      id: "3",
      title: "New Luxury Development Launch",
      date: "April 5, 2024",
      description: "Announcing our newest luxury residential development in prime location.",
      image: "/luxury-building-construction.jpg",
      category: "news",
    },
  ]

  const displayItems = items || defaultItems

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-accent">News & Events</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with the latest news and upcoming events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category === "news" ? "News" : "Event"}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{item.description}</p>
                <Button variant="ghost" className="text-primary hover:text-primary p-0 h-auto">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            View All Updates
          </Button>
        </div>
      </div>
    </section>
  )
}
