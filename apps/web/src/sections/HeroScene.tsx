'use client'

import { useEffect, useRef } from 'react'
import Section from '@/components/Section'
import { createHeroTimeline } from '@/motion/timelines'

export default function HeroScene() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const timeline = createHeroTimeline(sectionRef.current)

    return () => {
      timeline.kill()
    }
  }, [])

  return (
    <Section id="hero" className="flex items-center justify-center bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div ref={sectionRef as any} className="relative z-10 text-center px-6">
        <h1 className="hero-title text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          Welcome to
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            CYNTHIA
          </span>
        </h1>
        <p className="hero-subtitle text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Experience the future of AI interaction through cinematic immersion
        </p>
        <div className="mt-12 flex gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition-all hover:scale-105">
            Get Started
          </button>
          <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold backdrop-blur-sm transition-all hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </Section>
  )
}
