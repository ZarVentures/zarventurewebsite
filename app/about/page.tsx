import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CompanyIntro } from "@/components/about/company-intro"
import { MissionVisionValues } from "@/components/about/mission-vision-values"
import { ExperienceStats } from "@/components/about/experience-stats"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />
      <main className="flex-1">
        <CompanyIntro />
        <MissionVisionValues />
        <ExperienceStats />
      </main>
      <Footer />
    </div>
  )
}
