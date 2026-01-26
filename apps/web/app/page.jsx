'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { initLenis } from '@/motion/scroll'

// Components
import Navbar from '@/components/Navbar'
const CommandBar = dynamic(() => import('@/components/CommandBar'), { ssr: false })

// Sections
const HeroScene = dynamic(() => import('@/sections/HeroScene'), { ssr: false })
const AvatarReveal = dynamic(() => import('@/sections/AvatarReveal'), { ssr: false })
const OnboardingScroll = dynamic(() => import('@/sections/OnboardingScroll'), { ssr: false })
const VRPortal = dynamic(() => import('@/sections/VRPortal'), { ssr: false })

export default function Page() {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger)

    // Initialize Lenis smooth scroll
    const lenis = initLenis()

    // Cleanup
    return () => {
      lenis?.destroy()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <HeroScene />
        <AvatarReveal />
        <OnboardingScroll />
        <VRPortal />
      </main>
      <CommandBar />
    </>
  )
}
