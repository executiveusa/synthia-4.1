'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'

export default function KupuriNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, toggleLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'circOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark/80 backdrop-blur-md border-b border-kupuriCyan/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-12 h-12">
            {/* Placeholder - replace with actual logo */}
            <div className="w-full h-full rounded-full bg-gradient-to-br from-kupuriCyan via-kupuriBlue to-kupuriViolet opacity-80 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-xl font-bold tracking-tight text-bone group-hover:text-kupuriCyan transition-colors">
            KUPURI
          </span>
        </button>

        {/* Navigation + Language Toggle */}
        <div className="flex items-center gap-8">
          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollTo('work')}
              className="text-sm tracking-widest uppercase text-bone/70 hover:text-kupuriCyan transition-colors"
            >
              {language === 'es' ? 'Trabajo' : 'Work'}
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="text-sm tracking-widest uppercase text-bone/70 hover:text-kupuriCyan transition-colors"
            >
              {language === 'es' ? 'Nosotros' : 'About'}
            </button>
            <button
              onClick={() => scrollTo('ecosystem')}
              className="text-sm tracking-widest uppercase text-bone/70 hover:text-kupuriCyan transition-colors"
            >
              {language === 'es' ? 'Ecosistema' : 'Ecosystem'}
            </button>
          </div>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="relative w-16 h-8 bg-bone/10 rounded-full border border-bone/20 hover:border-kupuriCyan transition-colors"
          >
            <motion.div
              animate={{
                x: language === 'es' ? 2 : 34,
              }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="absolute top-1 w-6 h-6 bg-kupuriCyan rounded-full"
            />
            <div className="absolute inset-0 flex items-center justify-between px-2 text-xs font-bold">
              <span
                className={`transition-colors ${language === 'es' ? 'text-dark' : 'text-bone/50'}`}
              >
                ES
              </span>
              <span
                className={`transition-colors ${language === 'en' ? 'text-dark' : 'text-bone/50'}`}
              >
                EN
              </span>
            </div>
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
