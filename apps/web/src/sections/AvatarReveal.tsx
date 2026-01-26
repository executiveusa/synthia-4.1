'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import Section from '@/components/Section'
import { createAvatarTimeline } from '@/motion/timelines'

const SceneCanvas = dynamic(() => import('@/three/SceneCanvas'), { ssr: false })
const Avatar = dynamic(() => import('@/three/Avatar'), { ssr: false })

export default function AvatarReveal() {
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    if (!sectionRef.current) return

    const timeline = createAvatarTimeline(sectionRef.current, (progress) => {
      setScrollProgress(progress)
    })

    return () => {
      timeline.kill()
    }
  }, [])

  return (
    <Section id="avatar" className="bg-black">
      <div ref={sectionRef as any} className="relative w-full h-screen">
        {/* 3D Canvas */}
        <div className="absolute inset-0 w-full h-full">
          <SceneCanvas>
            <Avatar scrollProgress={scrollProgress} />
          </SceneCanvas>
        </div>

        {/* Content overlay */}
        <div className="relative z-10 h-full flex items-center justify-end px-12">
          <div className="max-w-md text-right">
            <h2 className="text-5xl font-bold text-white mb-6">
              Meet Your
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Companion
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Scroll to explore Cynthia&apos;s form. A living, breathing intelligence
              designed to understand and evolve with you.
            </p>
            <div className="text-sm text-gray-500">
              Scroll progress: {Math.round(scrollProgress * 100)}%
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
