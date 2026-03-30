import '@/global.css'

export const metadata = {
  title: 'Golden Wheel™ — Home Care Compliance, Simplified',
  description: 'The compliance platform built for caregivers, home health aides, and care agencies. Stay licensed, document shifts, track renewals — all in one place.',
  keywords: ['home care compliance', 'caregiver compliance software', 'senior care licensing', 'Arizona home care', 'HIPAA shift logs'],
  openGraph: {
    title: 'Golden Wheel™ — Home Care Compliance, Simplified',
    description: 'Stay compliant. Protect your practice. Grow with confidence.',
    url: 'https://goldenwheel.care',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='antialiased'>
        {children}
      </body>
    </html>
  )
}

