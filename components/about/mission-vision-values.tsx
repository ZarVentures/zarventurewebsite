import { Target, Eye, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import aboutContent from "@/data/content/about.json"

export function MissionVisionValues() {

  const items = aboutContent.missionVisionValues.items.map((item, index) => {
    const icons = [Target, Eye, Heart]
    return {
      icon: icons[index] || Target,
      title: item.title,
      description: item.description,
    }
  })

  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-accent text-center mb-6">
          {aboutContent.missionVisionValues.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <Card key={item.title} className="border-primary/20 bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-5">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-accent mb-3">{item.title}</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
