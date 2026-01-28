'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import themeData from '../../../theme.json'

const CATEGORIES = ['ALL', 'BRANDING', 'FILM', 'DIGITAL']

export default function KupuriServiceGrid() {
  const [filter, setFilter] = useState('ALL')
  const { language } = useLanguage()
  const projects = themeData.services

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-fluid-h2 font-light italic mb-4">
          {language === 'es' ? 'Nuestro' : 'Our'}{' '}
          <span className="text-kupuriCyan">
            {language === 'es' ? 'Trabajo' : 'Work'}
          </span>
        </h2>
        <p className="text-lg text-bone/60 max-w-2xl mx-auto">
          {language === 'es'
            ? 'Proyectos que fusionan tradición mexicana con visión contemporánea.'
            : 'Projects that fuse Mexican tradition with contemporary vision.'}
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-16 overflow-x-auto pb-4 scrollbar-hide">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-8 py-3 border rounded-full transition-all duration-300 text-sm tracking-widest whitespace-nowrap ${
              filter === cat
                ? 'bg-kupuriBlue border-kupuriBlue text-bone'
                : 'border-gray-700 text-bone/70 hover:border-bone hover:text-bone'
            }`}
          >
            {language === 'es'
              ? cat === 'ALL'
                ? 'TODOS'
                : cat === 'BRANDING'
                  ? 'MARCA'
                  : cat === 'FILM'
                    ? 'CINE'
                    : cat
              : cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <AnimatePresence mode="popLayout">
          {projects
            .filter((p) => filter === 'ALL' || p.category === filter)
            .map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={project.id}
                className="group aspect-square bg-gray-900 overflow-hidden relative cursor-pointer"
              >
                {/* Placeholder gradient - replace with actual images */}
                <div className="w-full h-full bg-gradient-to-br from-kupuriBlue/20 via-kupuriViolet/20 to-kupuriCyan/20 transition-transform duration-700 group-hover:scale-110" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                  <span className="text-kupuriCyan text-xs tracking-widest mb-2 uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-4xl font-light italic text-bone">
                    {project.title[language]}
                  </h3>
                  <button className="mt-6 self-start text-xs border-b border-bone pb-1 uppercase tracking-tighter text-bone hover:text-kupuriCyan transition-colors">
                    {language === 'es' ? 'Ver Caso de Estudio' : 'View Case Study'}
                  </button>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
