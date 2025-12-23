import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { CheckCircle2, Home, TrendingUp, Key, Building2, BarChart3, FileCheck, Shield, Users, Target, Award } from "lucide-react"
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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3 text-accent">
                {content.title}
              </h1>
              <div className="mb-4">
                <h2 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-2">
                  {content.subtitle}
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-3 leading-relaxed">
                  {content.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2 text-sm text-accent font-semibold">
                  {content.highlights.map((highlight, index) => (
                    <span key={index} className="px-3 py-1 bg-accent/10 rounded-full">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-xl mb-4">
                <Image 
                  src={content.heroImage} 
                  alt="International Realty" 
                  fill 
                  className="object-cover object-center" 
                  priority
                />
              </div>
              <div className="bg-card rounded-lg border border-border shadow-lg p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-foreground/80">
                  {content.services.map((service, index) => {
                    const ServiceIcon = serviceIcons[service] || Home
                    return (
                      <div key={index} className="flex items-center gap-2">
                        <ServiceIcon className="w-4 h-4 text-accent" />
                        <span>{service}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Your Trusted Partner Section */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3 text-accent">
                {content.trustedPartner.title}
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                {content.trustedPartner.description}
              </p>
            </div>
          </div>
        </section>

        {/* Services Sections */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-4">
              {content.serviceSections.map((section) => {
                const IconComponent = getIcon(section.icon)
                const isImageLeft = section.imagePosition === "left"
                
                return (
                  <div key={section.id} className="bg-card rounded-lg border border-border shadow-lg overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-4">
                      {isImageLeft && (
                        <div className="relative h-full min-h-[180px] order-2 md:order-1">
                          <Image 
                            src={section.image} 
                            alt={section.title} 
                            fill 
                            className="object-cover" 
                          />
                        </div>
                      )}
                      <div className={`p-4 ${isImageLeft ? 'order-1 md:order-2' : ''}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="p-1.5 bg-accent/10 rounded-lg">
                            <IconComponent className="w-4 h-4 text-accent" />
                          </div>
                          <h3 className="text-lg font-serif font-bold text-foreground">
                            {section.title}
                          </h3>
                        </div>
                        <p className="text-foreground/70 mb-2 text-xs italic">
                          {section.tagline}
                        </p>
                        <p className="text-foreground/80 mb-2 text-xs">
                          {section.description}
                        </p>
                        <p className="text-foreground/70 mb-1.5 text-xs font-semibold">Our services include:</p>
                        <ul className="space-y-1 text-foreground/80 text-xs mb-3">
                          {section.items.map((item, index) => (
                            <li key={index} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-foreground/70 mb-1.5 text-xs font-semibold">Why choose us:</p>
                        <div className="flex flex-wrap gap-1.5 text-xs text-accent">
                          {section.benefits.map((benefit, index) => (
                            <span key={index} className="px-2 py-0.5 bg-accent/10 rounded">
                              ✔ {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                      {!isImageLeft && (
                        <div className="relative h-full min-h-[180px]">
                          <Image 
                            src={section.image} 
                            alt={section.title} 
                            fill 
                            className="object-cover" 
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3 text-accent">
                  {content.whyChooseUs.title}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {content.whyChooseUs.items.slice(0, 4).map((item, index) => {
                  const icons = [Users, Shield, Target, Award]
                  const IconComponent = icons[index] || CheckCircle2
                  return (
                    <div key={index} className="flex items-start gap-2 p-3 bg-card rounded-lg border border-border">
                      <IconComponent className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </div>
                  )
                })}
                <div className="flex items-start gap-2 p-3 bg-card rounded-lg border border-border md:col-span-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground/80">{content.whyChooseUs.items[4]}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How the Investment Process Works */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3 text-accent">
                  {content.investmentProcess.title}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
                {content.investmentProcess.steps.map((step) => {
                  const StepIcon = getIcon(step.icon)
                  return (
                    <div key={step.number} className="bg-card rounded-lg border border-border shadow-lg p-4 text-center">
                      <div className="flex justify-center mb-2">
                        <div className="p-2 bg-accent/10 rounded-full">
                          <StepIcon className="w-5 h-5 text-accent" />
                        </div>
                      </div>
                      <div className="text-xl font-bold text-accent mb-1">{step.number}</div>
                      <h3 className="font-semibold text-sm text-foreground mb-1">{step.title}</h3>
                      <p className="text-xs text-foreground/80">
                        {step.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
