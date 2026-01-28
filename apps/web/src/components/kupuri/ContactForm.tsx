'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import themeData from '../../../theme.json'

interface FormData {
  name: string
  email: string
  projectType: string
  budget: string
  message: string
}

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const { language } = useLanguage()
  const contactData = themeData.contact

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          projectType: '',
          budget: '',
          message: '',
        })
        setTimeout(() => {
          setIsOpen(false)
          setSubmitStatus('idle')
        }, 3000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 px-8 py-4 bg-kupuriCyan text-dark font-bold tracking-widest uppercase rounded-full hover:bg-kupuriBlue hover:text-bone transition-all duration-300 shadow-2xl shadow-kupuriCyan/50"
      >
        {language === 'es' ? 'Contacto' : 'Contact'}
      </button>

      {/* Modal/Slide-over */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-dark/90 backdrop-blur-sm z-50"
            />

            {/* Form Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-full md:w-[500px] bg-dark/95 backdrop-blur-md border-l border-kupuriCyan/20 z-50 overflow-y-auto"
            >
              <div className="p-8 md:p-12">
                {/* Header */}
                <div className="flex justify-between items-start mb-12">
                  <h2 className="text-4xl font-light italic text-bone">
                    {language === 'es' ? 'Conectemos' : "Let's Connect"}
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-bone/60 hover:text-bone transition-colors text-2xl"
                  >
                    ×
                  </button>
                </div>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 p-6 bg-kupuriCyan/10 border border-kupuriCyan rounded-lg"
                  >
                    <p className="text-kupuriCyan text-center">
                      {contactData.successMessage[language]}
                    </p>
                  </motion.div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm tracking-widest uppercase text-bone/60 mb-2">
                      {contactData.fields.name[language]}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-bone/20 focus:border-kupuriCyan py-3 text-bone outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm tracking-widest uppercase text-bone/60 mb-2">
                      {contactData.fields.email[language]}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-bone/20 focus:border-kupuriCyan py-3 text-bone outline-none transition-colors"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-sm tracking-widest uppercase text-bone/60 mb-2">
                      {contactData.fields.projectType[language]}
                    </label>
                    <select
                      required
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full bg-dark border-b border-bone/20 focus:border-kupuriCyan py-3 text-bone outline-none transition-colors"
                    >
                      <option value="">
                        {language === 'es' ? 'Seleccionar...' : 'Select...'}
                      </option>
                      {contactData.projectTypes.map((type, index) => (
                        <option key={index} value={type.en}>
                          {type[language]}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm tracking-widest uppercase text-bone/60 mb-2">
                      {contactData.fields.budget[language]}
                    </label>
                    <select
                      required
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full bg-dark border-b border-bone/20 focus:border-kupuriCyan py-3 text-bone outline-none transition-colors"
                    >
                      <option value="">
                        {language === 'es' ? 'Seleccionar...' : 'Select...'}
                      </option>
                      {contactData.budgetRanges.map((range, index) => (
                        <option key={index} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm tracking-widest uppercase text-bone/60 mb-2">
                      {contactData.fields.message[language]}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-bone/20 focus:border-kupuriCyan py-3 text-bone outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-kupuriCyan text-dark font-bold tracking-widest uppercase rounded-full hover:bg-kupuriBlue hover:text-bone transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting
                      ? language === 'es'
                        ? 'Enviando...'
                        : 'Sending...'
                      : language === 'es'
                        ? 'Enviar'
                        : 'Send'}
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
