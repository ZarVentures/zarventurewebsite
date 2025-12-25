"use client"

import { useState, useEffect, useRef } from "react"
import { Building2, Users, Hammer, TrendingUp } from "lucide-react"

interface Stat {
  icon: typeof Building2
  targetValue: number
  suffix: string
  label: string
  description: string
}

export function ExperienceStats() {
  const stats: Stat[] = [
    {
      icon: Building2,
      targetValue: 15,
      suffix: "+",
      label: "Years of Excellence",
      description: "Trusted expertise in real estate",
    },
    {
      icon: Users,
      targetValue: 2000,
      suffix: "+",
      label: "Happy Clients",
      description: "Families we've helped",
    },
    {
      icon: TrendingUp,
      targetValue: 200,
      suffix: "+",
      label: "Projects Delivered",
      description: "Successful completions",
    },
    {
      icon: Hammer,
      targetValue: 500,
      suffix: "+",
      label: "Construction Experience",
      description: "Construction projects completed",
    },
  ]

  const [counters, setCounters] = useState<number[]>(stats.map(() => 0))
  const sectionRef = useRef<HTMLElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const timerRefs = useRef<NodeJS.Timeout[]>([])
  const hasAnimatedRef = useRef(false)

  const animateCounters = () => {
    if (hasAnimatedRef.current) return // Prevent multiple animations
    hasAnimatedRef.current = true

    stats.forEach((stat, index) => {
      const duration = 2000 // 2 seconds
      const steps = 60
      const increment = stat.targetValue / steps
      let currentStep = 0

      const timer = setInterval(() => {
        currentStep++
        const currentValue = Math.min(
          Math.floor(increment * currentStep),
          stat.targetValue
        )

        setCounters((prev) => {
          const newCounters = [...prev]
          newCounters[index] = currentValue
          return newCounters
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          // Remove timer from ref array
          timerRefs.current = timerRefs.current.filter((t) => t !== timer)
          setCounters((prev) => {
            const newCounters = [...prev]
            newCounters[index] = stat.targetValue
            return newCounters
          })
        }
      }, duration / steps)
      
      // Store timer reference for cleanup
      timerRefs.current.push(timer)
    })
  }

  useEffect(() => {
    const currentRef = sectionRef.current
    if (!currentRef) return

    // Check if element is already visible on mount
    const checkVisibility = () => {
      const rect = currentRef.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0
      if (isVisible && !hasAnimatedRef.current) {
        animateCounters()
        return true
      }
      return false
    }

    // Check immediately (with a small delay to ensure DOM is ready)
    const timeoutId = setTimeout(() => {
      if (checkVisibility()) {
        return
      }

      // Create observer if not already visible
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimatedRef.current) {
              animateCounters()
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )

      // Observe the section
      if (observerRef.current && currentRef) {
        observerRef.current.observe(currentRef)
      }
    }, 100)

    // Cleanup function
    return () => {
      clearTimeout(timeoutId)
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      // Cleanup all timers
      timerRefs.current.forEach((timer) => clearInterval(timer))
      timerRefs.current = []
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-accent text-center mb-4">
          Our Journey of Excellence
        </h2>
        <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
          Over the years, we've built a legacy of trust, quality, and innovation in the real estate industry
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <stat.icon className="w-10 h-10 text-accent" />
              </div>
              <div className="font-serif text-5xl font-bold text-accent mb-2">
                {counters[index]}{stat.suffix}
              </div>
              <div className="font-semibold text-xl text-foreground mb-1">{stat.label}</div>
              <p className="text-sm text-foreground/70">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
