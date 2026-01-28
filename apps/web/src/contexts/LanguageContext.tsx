'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'))
  }

  const t = (key: string) => {
    // This is a simple translation function
    // In production, you'd import theme.json and access nested values
    return key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
