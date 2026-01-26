'use client'

import { useEffect, useRef, useState } from 'react'
import Section from '@/components/Section'
import { createVRPortalTimeline } from '@/motion/timelines'

export default function VRPortal() {
  const sectionRef = useRef<HTMLElement>(null)
  const [vrAvailable, setVrAvailable] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return

    const timeline = createVRPortalTimeline(sectionRef.current)

    // Check for WebXR support
    if ('xr' in navigator) {
      ;(navigator as any).xr?.isSessionSupported('immersive-vr').then((supported: boolean) => {
        setVrAvailable(supported)
      })
    }

    return () => {
      timeline.kill()
    }
  }, [])

  return (
    <Section id="portal" className="bg-gradient-to-b from-black via-purple-900/30 to-black">
      <div ref={sectionRef as any} className="relative w-full h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          {/* Portal visual effect */}
          <div className="vr-portal relative mx-auto mb-12 w-64 h-64">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow opacity-50 blur-xl" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse" />
            <div className="absolute inset-8 rounded-full bg-black flex items-center justify-center">
              <span className="text-6xl">🌐</span>
            </div>
          </div>

          {/* CTA content */}
          <div className="vr-cta">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Enter the
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Metaverse
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Experience Cynthia in immersive virtual reality
            </p>

            {/* VR Button */}
            {vrAvailable ? (
              <button
                className="px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-xl font-bold rounded-full transition-all hover:scale-110 shadow-2xl shadow-purple-500/50"
                onClick={() => {
                  // VR entry logic will be handled by @react-three/xr
                  alert('VR Experience launching soon!')
                }}
              >
                Launch VR Experience
              </button>
            ) : (
              <div>
                <button
                  className="px-12 py-4 bg-gray-700 text-gray-300 text-xl font-bold rounded-full cursor-not-allowed"
                  disabled
                >
                  VR Not Available
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  WebXR not supported on this device
                </p>
              </div>
            )}

            {/* Coming soon badge */}
            <div className="mt-8 inline-block px-6 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full">
              <span className="text-purple-300 text-sm font-semibold">
                🚀 Full VR Experience Coming Soon
              </span>
            </div>
          </div>
        </div>

        {/* Background particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
