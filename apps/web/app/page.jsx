'use client'

import { LanguageProvider } from '@/contexts/LanguageContext'
import KupuriNavbar from '@/components/kupuri/KupuriNavbar'
import KupuriHero from '@/components/kupuri/KupuriHero'
import KupuriTicker from '@/components/kupuri/KupuriTicker'
import KupuriServiceGrid from '@/components/kupuri/KupuriServiceGrid'
import KupuriFooter from '@/components/kupuri/KupuriFooter'
import ContactForm from '@/components/kupuri/ContactForm'

export default function Page() {
  return (
    <LanguageProvider>
      <main className="bg-dark text-bone selection:bg-kupuriCyan selection:text-dark">
        <KupuriNavbar />
        <section id="hero">
          <KupuriHero />
        </section>
        <KupuriTicker />
        <section id="work">
          <KupuriServiceGrid />
        </section>
        <section id="about" className="py-32 px-6 max-w-5xl mx-auto text-center">
          <h2 className="text-fluid-h2 font-light italic mb-8">
            Alma en la <span className="text-kupuriCyan">Máquina</span>
          </h2>
          <p className="text-lg text-bone/70 leading-relaxed mb-6">
            Kupuri Studios nace del corazón de la Ciudad de México, fusionando la riqueza
            ancestral de nuestra cultura con la vanguardia creativa contemporánea.
          </p>
          <p className="text-lg text-bone/70 leading-relaxed">
            Somos arquitectos de experiencias que trascienden lo digital, creando mundos
            que honran nuestra herencia mientras abrazan el futuro.
          </p>
        </section>
        <KupuriFooter />
        <ContactForm />
      </main>
    </LanguageProvider>
  )
}
