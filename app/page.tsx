import { Header } from "@/components/header"
import { HeroBanner } from "@/components/hero-banner"
import { FeaturedProperties } from "@/components/featured-properties"
// import { NewsEvents } from "@/components/news-events" // Commented out - will be activated later
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import homeContent from "@/data/content/home.json"

export default function HomePage() {

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />
      <main className="flex-1">
        <HeroBanner data={{
          title: homeContent.hero.title,
          subtitle: homeContent.hero.subtitle,
          ctaText: homeContent.hero.ctaText,
          backgroundImage: "",
          paragraphs: homeContent.hero.paragraphs
        }} />
        <FeaturedProperties />
        {/* <NewsEvents /> */} {/* Commented out - will be activated later */}
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
