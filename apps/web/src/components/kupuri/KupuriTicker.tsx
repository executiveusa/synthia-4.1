'use client'

import { motion } from 'framer-motion'

const items = [
  'BRANDING',
  'FILM',
  'DIGITAL',
  'CDMX',
  'KUPURI',
  'STUDIOS',
  '•',
]

export default function KupuriTicker() {
  return (
    <div className="relative overflow-hidden bg-kupuriCyan py-6 border-y border-kupuriBlue">
      <motion.div
        animate={{
          x: [0, -1920],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
        className="flex gap-12 whitespace-nowrap"
      >
        {[...Array(4)].map((_, setIndex) => (
          <div key={setIndex} className="flex gap-12">
            {items.map((item, index) => (
              <span
                key={`${setIndex}-${index}`}
                className="text-2xl md:text-4xl font-bold tracking-wider text-dark"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
