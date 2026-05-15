import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import {
  CalendarDays,
  ArrowRight,
  Building2,
  Newspaper,
  Trophy,
  BriefcaseBusiness,
} from "lucide-react"

import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export const metadata = {
  title: "News & Events - Zar Ventures",
  description:
    "Latest updates, announcements, projects, and events from Zar Ventures",
}

const featuredNews = {
  title: "Zar Ventures Announces New Premium Township Project",
  description:
    "Zar Ventures is proud to announce the launch of a modern integrated township project featuring luxury residences, commercial spaces, and world-class amenities.",
  date: "May 2026",
  image:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
}

const newsData = [
  {
    id: 1,
    title: "Luxury Residential Project Launch",
    description:
      "A premium residential project designed with modern architecture and smart living features has officially been launched.",
    date: "April 2026",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "International Realty Expansion",
    description:
      "Zar Ventures expands international real estate advisory services for global investors and buyers.",
    date: "March 2026",
    icon: Newspaper,
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "New Channel Partner Program",
    description:
      "A dedicated partner growth initiative launched with enhanced commissions and exclusive benefits.",
    date: "February 2026",
    icon: Trophy,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Commercial Investment Opportunities",
    description:
      "New commercial investment opportunities are now available across rapidly growing business zones.",
    date: "January 2026",
    icon: BriefcaseBusiness,
    image:
      "https://images.unsplash.com/photo-1486401899868-0e435ed85128?q=80&w=1200&auto=format&fit=crop",
  },
]

const upcomingEvents = [
  {
    title: "Real Estate Investor Meet",
    date: "20 June 2026",
    location: "Dubai Business Convention Center",
  },
  {
    title: "Luxury Property Expo",
    date: "12 July 2026",
    location: "Mumbai International Exhibition Hall",
  },
  {
    title: "Channel Partner Networking Summit",
    date: "05 August 2026",
    location: "Delhi Corporate Hub",
  },
]

export default function NewsEventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />

          <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full" />

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
              <span className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm mb-6 backdrop-blur-md">
                Latest Updates & Announcements
              </span>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                News & Events
              </h1>

              <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
                Explore the latest news, upcoming events, project launches,
                partnerships, and business updates from Zar Ventures.
              </p>

              <div className="relative h-[350px] md:h-[550px] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  fill
                  priority
                  unoptimized
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-10 left-10 text-left max-w-2xl">
                  <span className="inline-flex items-center px-4 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-sm mb-5">
                    Featured Announcement
                  </span>

                  <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                    {featuredNews.title}
                  </h2>

                  <p className="text-slate-300 text-lg leading-relaxed">
                    {featuredNews.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEWS SECTION */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-600 uppercase tracking-wider font-semibold">
                Company Updates
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
                Latest News
              </h2>

              <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-6" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {newsData.map((news) => {
                const Icon = news.icon

                return (
                  <div
                    key={news.id}
                    className="group bg-white rounded-[28px] overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                      <div className="absolute top-5 left-5">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      <div className="absolute bottom-5 left-5">
                        <span className="px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm">
                          {news.date}
                        </span>
                      </div>
                    </div>

                    <div className="p-7">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">
                        {news.title}
                      </h3>

                      <p className="text-slate-600 leading-relaxed mb-6">
                        {news.description}
                      </p>

                      <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                        Read More

                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* UPCOMING EVENTS */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-blue-600 uppercase tracking-wider font-semibold">
                  Meet Us
                </span>

                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
                  Upcoming Events
                </h2>

                <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-6" />
              </div>

              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="group flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-slate-50 border border-slate-200 rounded-[28px] p-8 hover:bg-white hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center">
                        <CalendarDays className="w-8 h-8 text-blue-600" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                          {event.title}
                        </h3>

                        <p className="text-slate-600 mb-1">
                          {event.date}
                        </p>

                        <p className="text-slate-500">
                          {event.location}
                        </p>
                      </div>
                    </div>

                    <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl px-6">
                      Event Details
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950" />

          <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full" />

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-8">
                <div className="p-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  <CalendarDays className="w-14 h-14 text-white" />
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Stay Updated With Zar Ventures
              </h2>

              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
                Follow our latest developments, partnerships, and upcoming
                real estate events worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link href="/projects">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-2xl text-lg"
                  >
                    Explore Projects
                  </Button>
                </Link>

                <Link href="/">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-slate-900 px-8 py-6 rounded-2xl text-lg"
                  >
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}