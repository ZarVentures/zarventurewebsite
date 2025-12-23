import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { CheckCircle2, Handshake } from "lucide-react"
import channelPartnerProgramContent from "@/data/content/channel-partner-program.json"

export const metadata = {
  title: "Channel Partner Program - Zar Ventures",
  description: "Join Zar Ventures as a Channel Partner and represent our real estate projects",
}

export default function ChannelPartnerProgramPage() {
  const content = channelPartnerProgramContent

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-accent">
                {content.title}
              </h1>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="relative h-56 md:h-72 rounded-lg overflow-hidden shadow-xl mb-6">
                <Image 
                  src="/professional-business-man-sales.jpg"
                  alt="Channel Partner Program"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-card rounded-lg border border-border shadow-lg p-6">
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                    {content.intro}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-6">
              {content.sections.map((section) => (
                <div key={section.id} className="bg-card rounded-lg border border-border shadow-lg p-6">
                  <h2 className="text-2xl font-serif font-bold text-accent mb-4">
                    {section.title}
                  </h2>
                  <ul className="space-y-2 text-foreground/80">
                    {section.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-center mb-12">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-accent/10 rounded-full">
                    <Handshake className="w-12 h-12 text-accent" />
                  </div>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-accent">
                  {content.cta.title}
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
                  {content.cta.description}
                </p>
                <a
                  href={content.cta.link}
                  className="inline-block px-8 py-3 bg-accent text-primary-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                >
                  {content.cta.buttonText}
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}

