import { Layout } from '@/components/dom/Layout'
import '@/global.css'

export const metadata = {
  title: 'Kupuri Studios | Digital Soul in Mexico City',
  description: 'Estudio creativo especializado en branding de alta gama, cine y experiencias digitales en CDMX. Creative studio specializing in high-end branding, film, and digital experiences.',
  keywords: 'Kupuri, Studios, CDMX, Mexico City, Branding, Film, Digital Experiences, Creative Agency',
  authors: [{ name: 'Kupuri Studios' }],
  openGraph: {
    title: 'Kupuri Studios | Alma en la Máquina',
    description: 'Soul in the Machine. High-end creative studio in Mexico City.',
    images: [
      {
        url: '/angel-storm.webp',
        width: 1200,
        height: 630,
        alt: 'Kupuri Studios - Electric CDMX',
      },
    ],
    type: 'website',
    locale: 'es_MX',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kupuri Studios',
    description: 'Alma en la Máquina. Soul in the Machine.',
    images: ['/angel-storm.webp'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icons/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({ children }) {
  return (
    <html lang='es' className='antialiased'>
      <head />
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
