import Image from "next/image"
import aboutContent from "@/data/content/about.json"

export function CompanyIntro() {
  return (
    <section className="py-8 bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-yellow-400 mb-8 text-center">
            {aboutContent.title}
          </h1>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left side - Text content */}
            <div className="space-y-4 text-base text-gray-300 leading-relaxed">
              {aboutContent.intro.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <div className="mt-4">
                <h2 className="font-serif text-xl font-bold text-yellow-400 mb-3">
                  {aboutContent.intro.servicesTitle}
                </h2>

                <ul className="space-y-1.5 list-disc list-inside text-sm text-gray-300">
                  {aboutContent.intro.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-gray-300">
                {aboutContent.intro.closingParagraph}
              </p>
            </div>

            {/* Right side - Building image */}
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/luxury-modern-residential-building-exterior.jpg"
                alt="Zar Ventures Building"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}