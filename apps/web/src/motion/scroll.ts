'use client'

import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

let lenis: Lenis | null = null

/**
 * Initialize Lenis smooth scroll and sync with GSAP ScrollTrigger
 */
export function initSmoothScroll() {
  if (typeof window === 'undefined') return null

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  lenis = new Lenis({
    duration: prefersReducedMotion ? 0.5 : 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: !prefersReducedMotion,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  })

  // Sync Lenis with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis?.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

  return lenis
}

/**
 * Destroy Lenis instance and cleanup
 */
export function destroySmoothScroll() {
  if (lenis) {
    lenis.destroy()
    lenis = null
  }
}

/**
 * Get current Lenis instance
 */
export function getLenis() {
  return lenis
}

/**
 * Scroll to a specific target
 */
export function scrollTo(target: string | number | HTMLElement, options?: any) {
  lenis?.scrollTo(target, options)
}
