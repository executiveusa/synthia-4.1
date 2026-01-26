'use client'

import { ReactNode } from 'react'

interface SectionProps {
  id: string
  className?: string
  children: ReactNode
  fullHeight?: boolean
}

export default function Section({ id, className = '', children, fullHeight = true }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full ${fullHeight ? 'min-h-screen' : ''} ${className}`}
    >
      {children}
    </section>
  )
}
