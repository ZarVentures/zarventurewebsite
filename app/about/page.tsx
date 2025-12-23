import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CompanyIntro } from "@/components/about/company-intro"
import { MissionVisionValues } from "@/components/about/mission-vision-values"
import { TeamProfiles } from "@/components/about/team-profiles"
import { ExperienceStats } from "@/components/about/experience-stats"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <CompanyIntro />
        <MissionVisionValues />
        <ExperienceStats />
        <TeamProfiles />
      </main>
      <Footer />
    </div>
  )
}
