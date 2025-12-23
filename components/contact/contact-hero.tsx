import contactContent from "@/data/content/contact.json"

export function ContactHero() {

  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3 text-accent">{contactContent.hero.title}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {contactContent.hero.description}
          </p>
        </div>
      </div>
    </section>
  )
}
