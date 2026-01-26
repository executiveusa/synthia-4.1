'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Create hero section timeline
 */
export function createHeroTimeline(element: HTMLElement) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  })

  const title = element.querySelector('.hero-title')
  const subtitle = element.querySelector('.hero-subtitle')

  if (title) {
    tl.fromTo(
      title,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      0
    )
  }

  if (subtitle) {
    tl.fromTo(
      subtitle,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      0.2
    )
  }

  return tl
}

/**
 * Create avatar reveal timeline with scroll scrubbing
 */
export function createAvatarTimeline(element: HTMLElement, onProgress?: (progress: number) => void) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
        if (onProgress) onProgress(self.progress)
      },
    },
  })

  return tl
}

/**
 * Create onboarding scroll timeline with Lottie animation scrubbing
 */
export function createOnboardingTimeline(
  element: HTMLElement,
  onProgress?: (progress: number) => void
) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top top',
      end: '+=200%',
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
        if (onProgress) onProgress(self.progress)
      },
    },
  })

  return tl
}

/**
 * Create VR portal entrance timeline
 */
export function createVRPortalTimeline(element: HTMLElement) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top center',
      end: 'center center',
      scrub: true,
    },
  })

  const portal = element.querySelector('.vr-portal')
  const cta = element.querySelector('.vr-cta')

  if (portal) {
    tl.fromTo(
      portal,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' },
      0
    )
  }

  if (cta) {
    tl.fromTo(
      cta,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      0.5
    )
  }

  return tl
}

/**
 * Cleanup all ScrollTrigger instances
 */
export function cleanupTimelines() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
}
