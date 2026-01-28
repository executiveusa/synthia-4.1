'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import themeData from '../../../theme.json'

export default function KupuriHero() {
  const { language } = useLanguage()
  const tagline = themeData.branding.tagline[language]

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center text-center px-6">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-kupuriBlue via-kupuriViolet to-kupuriCyan opacity-30 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
        
        {/* Lightning effect overlays */}
        <div className="absolute inset-0 bg-kupuriCyan opacity-0 animate-lightning" />
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'circOut' }}
        className="relative z-10"
      >
        <h1 className="font-bold leading-none tracking-tighter text-fluid-h1 uppercase mb-4">
          Kupuri{' '}
          <span className="text-transparent border-t-2 border-b-2 border-bone inline-block">
            Studios
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 text-xl md:text-2xl tracking-[0.3em] uppercase text-kupuriCyan"
        >
          {tagline}
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest text-bone/60 uppercase">
            {language === 'es' ? 'Descubre' : 'Discover'}
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-12 bg-gradient-to-b from-kupuriCyan to-transparent"
          />
        </div>
      </motion.div>
    </section>
  )
}
