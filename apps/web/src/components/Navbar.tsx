'use client'

import { scrollTo } from '@/motion/scroll'

export default function Navbar() {
  const handleScroll = (target: string) => {
    scrollTo(target, { offset: 0, duration: 1.5 })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button
          onClick={() => handleScroll('#hero')}
          className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
        >
          CYNTHIA
        </button>
        <div className="flex gap-6">
          <button
            onClick={() => handleScroll('#hero')}
            className="text-white hover:text-blue-400 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll('#avatar')}
            className="text-white hover:text-blue-400 transition-colors"
          >
            Avatar
          </button>
          <button
            onClick={() => handleScroll('#onboarding')}
            className="text-white hover:text-blue-400 transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => handleScroll('#portal')}
            className="text-white hover:text-blue-400 transition-colors"
          >
            VR
          </button>
        </div>
      </div>
    </nav>
  )
}
