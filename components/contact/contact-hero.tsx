import contactContent from "@/data/content/contact.json"

export function ContactHero() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm mb-6 backdrop-blur-md">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            {contactContent.hero.title}
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {contactContent.hero.description}
          </p>
        </div>
      </div>
    </section>
  )
}
