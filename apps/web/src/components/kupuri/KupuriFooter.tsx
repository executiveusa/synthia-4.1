'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import themeData from '../../../theme.json'

export default function KupuriFooter() {
  const { language } = useLanguage()
  const ecosystem = themeData.ecosystem

  return (
    <footer id="ecosystem" className="py-24 border-t border-gray-900 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Ecosystem Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-fluid-h2 font-light italic mb-4">
            {language === 'es' ? 'Conecta con el' : 'Connect with the'}{' '}
            <span className="text-kupuriCyan">
              {language === 'es' ? 'Pulso' : 'Pulse'}
            </span>
          </h2>
          <p className="text-lg text-bone/60 max-w-2xl mx-auto">
            {language === 'es'
              ? 'Explora nuestro ecosistema de servicios creativos.'
              : 'Explore our ecosystem of creative services.'}
          </p>
        </motion.div>

        {/* Ecosystem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {ecosystem.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 border border-gray-800 hover:border-kupuriBlue transition-all duration-300 bg-dark/30"
            >
              {/* Icon/Emoji */}
              <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform">
                {item.id === 'branding' ? '💎' : item.id === 'film' ? '🎬' : '⚡'}
              </span>

              {/* Title */}
              <h4 className="text-xl font-bold uppercase tracking-widest mb-3 text-bone group-hover:text-kupuriCyan transition-colors">
                {item.title[language]}
              </h4>

              {/* Description */}
              <p className="text-sm text-bone/60 mb-4">
                {item.description[language]}
              </p>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 border border-kupuriCyan/30 text-kupuriCyan rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-bone/60 text-sm mb-2">
              © 2026 Kupuri Studios. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
            </p>
            <p className="text-bone/40 text-xs">
              {language === 'es' ? 'Hecho con alma en CDMX' : 'Made with soul in CDMX'}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://instagram.com/kupuri.studios"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone/60 hover:text-kupuriCyan transition-colors text-sm tracking-widest"
            >
              INSTAGRAM
            </a>
            <a
              href="https://twitter.com/kupuristudios"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone/60 hover:text-kupuriCyan transition-colors text-sm tracking-widest"
            >
              TWITTER
            </a>
            <a
              href="https://linkedin.com/company/kupuri-studios"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone/60 hover:text-kupuriCyan transition-colors text-sm tracking-widest"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
