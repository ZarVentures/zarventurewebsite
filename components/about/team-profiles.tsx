import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"

export function TeamProfiles() {
  const team = [
    {
      name: "Rajesh Kumar",
      role: "CEO & Founder",
      image: "/professional-business-man-ceo.jpg",
      bio: "With over 20 years in real estate, Rajesh leads our vision with innovation and strategic excellence.",
      linkedin: "#",
      email: "rajesh@zarventure.com",
    },
    {
      name: "Priya Sharma",
      role: "Chief Operations Officer",
      image: "/professional-business-woman-executive.jpg",
      bio: "Priya ensures operational excellence across all our projects with her 15 years of industry expertise.",
      linkedin: "#",
      email: "priya@zarventure.com",
    },
    {
      name: "Amit Patel",
      role: "Head of Sales",
      image: "/professional-business-man-sales.jpg",
      bio: "Amit's customer-first approach and market insights have helped thousands find their dream homes.",
      linkedin: "#",
      email: "amit@zarventure.com",
    },
    {
      name: "Neha Singh",
      role: "Marketing Director",
      image: "/professional-business-woman-marketing.jpg",
      bio: "Neha crafts compelling brand stories that connect our properties with the right audiences.",
      linkedin: "#",
      email: "neha@zarventure.com",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-accent text-center mb-4">Meet Our Team</h2>
        <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
          Our dedicated team of professionals brings together decades of expertise to serve you better
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <Card key={member.name} className="border-primary/20 bg-card hover:shadow-xl transition-all group">
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-accent mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-foreground/70 mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex gap-3">
                    <a
                      href={member.linkedin}
                      className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
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
