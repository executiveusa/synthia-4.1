'use client'

import { useEffect, useRef, useState } from 'react'
import Section from '@/components/Section'
import { createOnboardingTimeline } from '@/motion/timelines'

export default function OnboardingScroll() {
  const sectionRef = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!sectionRef.current) return

    const timeline = createOnboardingTimeline(sectionRef.current, (p) => {
      setProgress(p)
    })

    return () => {
      timeline.kill()
    }
  }, [])

  const features = [
    {
      title: 'Intelligent Conversations',
      description: 'Natural language processing that understands context and nuance',
      icon: '💬',
    },
    {
      title: 'Adaptive Learning',
      description: 'Evolves with your preferences and communication style',
      icon: '🧠',
    },
    {
      title: 'Multi-Modal Interface',
      description: 'Text, voice, and visual interactions seamlessly integrated',
      icon: '🎨',
    },
  ]

  const currentFeatureIndex = Math.floor(progress * features.length)

  return (
    <Section id="onboarding" className="bg-gradient-to-b from-black via-blue-900/20 to-black">
      <div ref={sectionRef as any} className="relative w-full h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-16">
            Powerful Features
          </h2>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 ${
                  index === currentFeatureIndex
                    ? 'scale-110 bg-white/10 shadow-2xl shadow-blue-500/50'
                    : 'scale-100 opacity-50'
                }`}
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Progress indicator */}
          <div className="mt-12 text-center">
            <div className="inline-flex gap-2">
              {features.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentFeatureIndex ? 'bg-blue-400 w-8' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
