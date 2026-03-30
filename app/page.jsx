'use client'

import { useState } from 'react'

// ─── Animated Golden Wheel SVG ────────────────────────────────────────────────
function GoldenWheel({ size = 280 }) {
  const r = size / 2
  const hubR = r * 0.12
  const rimR = r * 0.88
  const spokeW = r * 0.035

  return (
    <div className='relative flex items-center justify-center' style={{ width: size, height: size }}>
      <div className='absolute rounded-full' style={{ width: size * 1.15, height: size * 1.15, background: 'radial-gradient(circle, rgba(201,162,39,0.15) 0%, transparent 70%)' }} />
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className='animate-spin-slow' style={{ filter: 'drop-shadow(0 0 12px rgba(201,162,39,0.35))' }}>
        <circle cx={r} cy={r} r={rimR} fill='none' stroke='#C9A227' strokeWidth={r * 0.055} />
        <circle cx={r} cy={r} r={rimR * 0.87} fill='none' stroke='#C9A227' strokeWidth={1.5} strokeOpacity='0.4' />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
          const rad = (deg * Math.PI) / 180
          return (
            <line key={i} x1={r + Math.cos(rad) * hubR * 1.5} y1={r + Math.sin(rad) * hubR * 1.5} x2={r + Math.cos(rad) * rimR * 0.87} y2={r + Math.sin(rad) * rimR * 0.87} stroke='#C9A227' strokeWidth={spokeW} strokeLinecap='round' />
          )
        })}
        <circle cx={r} cy={r} r={hubR * 1.5} fill='#C9A227' />
        <circle cx={r} cy={r} r={hubR * 0.7} fill='#8B6914' />
      </svg>
      <div className='absolute flex items-center justify-center animate-heartbeat' style={{ width: size * 0.25, height: size * 0.25 }}>
        <svg viewBox='0 0 24 24' fill='#fff' width={size * 0.14} height={size * 0.14}>
          <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
        </svg>
      </div>
    </div>
  )
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
function WheelIcon({ size = 24 }) {
  return (
    <svg viewBox='0 0 32 32' width={size} height={size}>
      <circle cx='16' cy='16' r='14' fill='none' stroke='#C9A227' strokeWidth='2.5' />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <line key={i} x1={16 + Math.cos((deg * Math.PI) / 180) * 5} y1={16 + Math.sin((deg * Math.PI) / 180) * 5} x2={16 + Math.cos((deg * Math.PI) / 180) * 12} y2={16 + Math.sin((deg * Math.PI) / 180) * 12} stroke='#C9A227' strokeWidth='2' strokeLinecap='round' />
      ))}
      <circle cx='16' cy='16' r='4' fill='#C9A227' />
      <circle cx='16' cy='16' r='2' fill='#8B6914' />
    </svg>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className='sticky top-0 z-50 bg-[#FAFAF8] border-b border-[#E2D9CE]'>
      <nav className='max-w-6xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center'>
        <a href='/' className='flex items-center gap-2 hover:opacity-80 transition-opacity'>
          <WheelIcon size={28} />
          <span className='font-display font-semibold text-lg text-[#1A1612] tracking-tight'>
            Golden Wheel<sup className='text-xs text-[#8B6914] ml-0.5'>&#8482;</sup>
          </span>
        </a>
        <ul className='hidden md:flex items-center gap-8'>
          <li><a href='#features' className='text-[#4A3F35] font-medium hover:text-[#8B6914] transition-colors text-sm'>Features</a></li>
          <li><a href='#pricing' className='text-[#4A3F35] font-medium hover:text-[#8B6914] transition-colors text-sm'>Pricing</a></li>
          <li><a href='#blog' className='text-[#4A3F35] font-medium hover:text-[#8B6914] transition-colors text-sm'>Resources</a></li>
          <li><a href='#waitlist' className='bg-[#8B6914] text-white px-6 py-2.5 rounded font-semibold text-sm hover:bg-[#1A1612] transition-all'>Get Early Access</a></li>
        </ul>
        <button className='md:hidden text-[#8B6914] p-2 text-xl min-w-[44px] min-h-[44px] flex items-center justify-center' onClick={() => setOpen(!open)} aria-label='Toggle menu'>
          {open ? '✕' : '☰'}
        </button>
      </nav>
      {open && (
        <div className='md:hidden bg-[#FAFAF8] border-t border-[#E2D9CE]'>
          <ul className='flex flex-col px-4 py-4 gap-1'>
            <li><a href='#features' onClick={() => setOpen(false)} className='block py-3 px-4 text-[#4A3F35] font-medium hover:bg-[#F3EDE4] rounded'>Features</a></li>
            <li><a href='#pricing' onClick={() => setOpen(false)} className='block py-3 px-4 text-[#4A3F35] font-medium hover:bg-[#F3EDE4] rounded'>Pricing</a></li>
            <li><a href='#blog' onClick={() => setOpen(false)} className='block py-3 px-4 text-[#4A3F35] font-medium hover:bg-[#F3EDE4] rounded'>Resources</a></li>
            <li className='pt-2'><a href='#waitlist' onClick={() => setOpen(false)} className='block text-center bg-[#8B6914] text-white px-6 py-3 rounded font-semibold text-sm'>Get Early Access</a></li>
          </ul>
        </div>
      )}
    </header>
  )
}

// ─── WAITLIST FORM ────────────────────────────────────────────────────────────
function WaitlistForm({ compact = false }) {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  return sent ? (
    <div className='flex items-center gap-2 text-[#8B6914] font-semibold'><span>&#10003;</span><span>You&apos;re on the list. We&apos;ll be in touch soon.</span></div>
  ) : (
    <form onSubmit={(e) => { e.preventDefault(); if (email) setSent(true) }} className={`flex ${compact ? 'flex-col sm:flex-row gap-2' : 'flex-col gap-3'} w-full max-w-md`}>
      <input type='email' required value={email} onChange={(e) => setEmail(e.target.value)} placeholder='your@email.com' className='flex-1 px-4 py-3 border border-[#E2D9CE] rounded bg-white text-[#1A1612] placeholder-gray-400 focus:outline-none focus:border-[#C9A227] transition-colors text-sm' />
      <button type='submit' className='bg-[#8B6914] text-white px-6 py-3 rounded font-semibold text-sm hover:bg-[#1A1612] transition-all whitespace-nowrap'>Get Early Access &#8594;</button>
    </form>
  )
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function Page() {
  return (
    <div className='min-h-screen bg-[#FAFAF8]'>
      <Nav />

      {/* HERO */}
      <section className='max-w-6xl mx-auto px-4 md:px-8 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
        <div className='animate-fade-up'>
          <div className='inline-flex items-center gap-2 bg-[#F0E6C8] text-[#8B6914] text-xs font-semibold px-3 py-1.5 rounded border border-[#E2C96A] mb-6'>
            <svg viewBox='0 0 24 24' fill='#C9A227' width='12' height='12'><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' /></svg>
            Built for caregivers. By people who understand care.
          </div>
          <h1 className='font-display text-4xl md:text-6xl font-semibold text-[#1A1612] leading-tight mb-6'>
            Home Care Compliance.<br /><span className='text-[#8B6914]'>Finally Simple.</span>
          </h1>
          <p className='text-xl text-[#4A3F35] mb-6 leading-relaxed'>
            Golden Wheel&#8482; keeps every license, certification, shift log, and state requirement organized and current &#8212; so you can focus on the care you provide, not the paperwork behind it.
          </p>
          <div className='flex flex-wrap gap-3 mb-8 text-sm'>
            {['Arizona Licensed', 'HIPAA-Ready', 'State Law Updates', 'No Setup Fee'].map((badge) => (
              <span key={badge} className='flex items-center gap-1.5 bg-white border border-[#E2D9CE] text-[#4A3F35] px-3 py-1.5 rounded font-medium'>
                <span className='text-[#C9A227] font-bold'>&#10003;</span> {badge}
              </span>
            ))}
          </div>
          <WaitlistForm />
          <p className='mt-3 text-xs text-gray-400'>Free to join the waitlist. No credit card required. Launches Q3 2026.</p>
        </div>
        <div className='flex justify-center items-center' style={{ animationDelay: '0.2s' }}>
          <GoldenWheel size={300} />
        </div>
      </section>

      {/* PROBLEM */}
      <section className='bg-[#1A1612] py-20'>
        <div className='max-w-5xl mx-auto px-4 md:px-8 text-center'>
          <h2 className='font-display text-3xl md:text-4xl text-white mb-4'>Sound familiar?</h2>
          <p className='text-[#D4B896] mb-12 text-lg'>Every caregiver and care agency deals with the same invisible compliance burden.</p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {[
              '"I\'m not sure if my CPR certification is still current."',
              '"We failed an audit because our shift logs weren\'t state-compliant."',
              '"I spent 3 hours searching Arizona law to answer one client question."',
              '"We lost a caregiver because we forgot her background check renewal."',
              '"Onboarding a new hire takes us two weeks of paperwork."',
              '"I don\'t know if our care plans meet the new state requirements."',
            ].map((pain, i) => (
              <div key={i} className='bg-[#2A2219] border border-[#3D3226] rounded-lg p-5 text-left'>
                <p className='text-[#F0E6C8] italic text-base leading-relaxed'>{pain}</p>
              </div>
            ))}
          </div>
          <p className='mt-10 text-[#C9A227] font-semibold text-lg'>Golden Wheel&#8482; eliminates all of this. Permanently.</p>
        </div>
      </section>

      {/* FEATURES */}
      <section id='features' className='max-w-6xl mx-auto px-4 md:px-8 py-24'>
        <div className='text-center mb-16'>
          <h2 className='font-display text-3xl md:text-5xl text-[#1A1612] mb-4'>Everything in One Place</h2>
          <p className='text-xl text-[#4A3F35] max-w-2xl mx-auto'>Six tools that replace five hours of compliance work every week.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[
            { icon: '&#128203;', title: 'State Compliance Tracker', desc: 'Real-time dashboard showing every license, certification, and required credential with status indicators and expiration countdowns.', detail: 'Covers Arizona, California, Florida, Texas, and 47 other states.' },
            { icon: '&#128221;', title: 'Shift Documentation', desc: 'HIPAA-compliant digital shift logs built to satisfy state audit requirements. Voice input and auto-formatting supported.', detail: 'Stores 7 years of records. Export to PDF instantly.' },
            { icon: '&#128276;', title: 'Compliance Alerts', desc: 'Proactive renewal reminders 90, 60, and 30 days before anything expires. Never miss a background check, license, or certification.', detail: 'SMS + email + in-app. Customize lead times.' },
            { icon: '&#9878;&#65039;', title: 'Legal Library', desc: 'Searchable database of state-by-state home care laws, regulations, and care standards &#8212; updated monthly by compliance specialists.', detail: '50-state coverage. Plain-English summaries.' },
            { icon: '&#128101;', title: 'Agency Dashboard', desc: 'See every caregiver\'s compliance status at a glance. Flag issues, assign tasks, and generate board-ready compliance reports.', detail: 'Supports teams of 1 to 500+ caregivers.' },
            { icon: '&#128196;', title: 'Client Intake & Care Plans', desc: 'Compliant onboarding forms, assessment tools, and care plan templates built specifically to meet state regulations.', detail: 'E-signature ready. Family portal included.' },
          ].map((f, idx) => (
            <div key={idx} className='bg-white p-7 rounded-lg border border-[#E2D9CE] hover:border-[#C9A227] hover:shadow-lg transition-all group'>
              <div className='text-3xl mb-4' dangerouslySetInnerHTML={{ __html: f.icon }} />
              <h3 className='text-lg font-semibold text-[#1A1612] mb-2 group-hover:text-[#8B6914] transition-colors'>{f.title}</h3>
              <p className='text-[#4A3F35] text-sm leading-relaxed mb-3'>{f.desc}</p>
              <p className='text-xs text-[#8B6914] font-medium'>{f.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className='bg-[#F3EDE4] py-20'>
        <div className='max-w-4xl mx-auto px-4 md:px-8'>
          <h2 className='font-display text-3xl md:text-4xl text-[#1A1612] mb-12 text-center'>Up and Running in 10 Minutes</h2>
          <div className='space-y-6'>
            {[
              { step: '1', title: 'Create your profile', desc: 'Enter your state, license type, certifications, and renewal dates. Golden Wheel&#8482; populates your compliance dashboard instantly.' },
              { step: '2', title: 'Import or add your clients and team', desc: 'Upload a spreadsheet or add caregivers manually. Invitations go out automatically with a one-click onboarding link.' },
              { step: '3', title: 'Stay compliant &#8212; automatically', desc: 'Golden Wheel&#8482; tracks everything, sends reminders, and flags issues before they become audit problems or license violations.' },
            ].map((s, i) => (
              <div key={i} className='flex gap-6 items-start bg-white p-6 rounded-lg border border-[#E2D9CE]'>
                <div className='w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#8B6914] text-white flex items-center justify-center font-display font-bold text-lg md:text-2xl flex-shrink-0'>{s.step}</div>
                <div>
                  <h3 className='text-lg font-semibold text-[#1A1612] mb-1'>{s.title}</h3>
                  <p className='text-[#4A3F35] text-sm leading-relaxed' dangerouslySetInnerHTML={{ __html: s.desc }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id='pricing' className='max-w-6xl mx-auto px-4 md:px-8 py-24'>
        <div className='text-center mb-16'>
          <h2 className='font-display text-3xl md:text-5xl text-[#1A1612] mb-4'>Straightforward Pricing</h2>
          <p className='text-xl text-[#4A3F35]'>No contracts. No setup fees. Cancel anytime.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-start'>
          {/* Solo */}
          <div className='bg-white border-2 border-[#E2D9CE] rounded-lg p-8 hover:border-[#C9A227] transition-all'>
            <p className='text-sm font-semibold text-[#8B6914] mb-2 uppercase tracking-wider'>Solo Caregiver</p>
            <div className='font-display text-5xl font-bold text-[#1A1612] mb-1'>$49<span className='text-base font-normal text-gray-400'>/mo</span></div>
            <p className='text-sm text-gray-500 mb-6'>Billed monthly. Cancel anytime.</p>
            <ul className='space-y-3 mb-8'>
              {['Your full compliance dashboard', 'State license + cert tracker', 'Shift documentation (unlimited)', '90/60/30-day renewal alerts', 'Legal library (read access)', 'Mobile app', 'Email support'].map((f) => (
                <li key={f} className='flex gap-2 text-sm text-[#4A3F35]'><span className='text-[#C9A227] font-bold flex-shrink-0'>&#10003;</span> {f}</li>
              ))}
            </ul>
            <div className='bg-[#F0E6C8] rounded p-3 text-xs text-[#8B6914] mb-6'><strong>Value if purchased separately:</strong> $800+/year. You pay $588.</div>
            <a href='#waitlist' className='block text-center bg-[#8B6914] text-white py-3 rounded font-semibold text-sm hover:bg-[#1A1612] transition-all'>Join Waitlist</a>
          </div>
          {/* Agency Pro — highlighted */}
          <div className='bg-[#1A1612] border-2 border-[#C9A227] rounded-lg p-8 relative'>
            <div className='absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9A227] text-[#1A1612] text-xs font-bold px-3 py-1 rounded-full'>MOST POPULAR</div>
            <p className='text-sm font-semibold text-[#C9A227] mb-2 uppercase tracking-wider'>Agency Pro</p>
            <div className='font-display text-5xl font-bold text-white mb-1'>$149<span className='text-base font-normal text-gray-400'>/mo</span></div>
            <p className='text-sm text-gray-500 mb-6'>Up to 25 caregivers. +$6/additional.</p>
            <ul className='space-y-3 mb-8'>
              {['Everything in Solo', 'Multi-caregiver accounts (25)', 'Client management portal', 'Automated compliance reports', 'Custom care plan templates', 'Invoice + billing generation', 'Family communication portal', 'Priority email + chat support', 'Onboarding assistance'].map((f) => (
                <li key={f} className='flex gap-2 text-sm text-[#D4B896]'><span className='text-[#C9A227] font-bold flex-shrink-0'>&#10003;</span> {f}</li>
              ))}
            </ul>
            <a href='#waitlist' className='block text-center bg-[#C9A227] text-[#1A1612] py-3 rounded font-bold text-sm hover:bg-white transition-all'>Join Waitlist</a>
          </div>
          {/* Enterprise */}
          <div className='bg-white border-2 border-[#E2D9CE] rounded-lg p-8 hover:border-[#C9A227] transition-all'>
            <p className='text-sm font-semibold text-[#8B6914] mb-2 uppercase tracking-wider'>Enterprise</p>
            <div className='font-display text-5xl font-bold text-[#1A1612] mb-1'>Custom</div>
            <p className='text-sm text-gray-500 mb-6'>For large agencies and networks.</p>
            <ul className='space-y-3 mb-8'>
              {['Everything in Agency Pro', 'Unlimited caregiver accounts', 'Dedicated compliance advisor', 'API access + custom integrations', 'EHR / payroll sync', 'White-label option', 'Custom training program', '24/7 phone support + SLA', 'Contract & volume pricing'].map((f) => (
                <li key={f} className='flex gap-2 text-sm text-[#4A3F35]'><span className='text-[#C9A227] font-bold flex-shrink-0'>&#10003;</span> {f}</li>
              ))}
            </ul>
            <a href='mailto:enterprise@goldenwheel.care' className='block text-center border-2 border-[#8B6914] text-[#8B6914] py-3 rounded font-semibold text-sm hover:bg-[#8B6914] hover:text-white transition-all'>Contact Us</a>
          </div>
        </div>
        <p className='text-center text-sm text-gray-400 mt-8'>All plans include a 14-day free trial. No credit card required to start.</p>
      </section>

      {/* BLOG */}
      <section id='blog' className='bg-[#F3EDE4] py-20'>
        <div className='max-w-6xl mx-auto px-4 md:px-8'>
          <div className='flex items-center justify-between mb-12 flex-wrap gap-4'>
            <div>
              <h2 className='font-display text-3xl md:text-4xl text-[#1A1612] mb-2'>Compliance Resources</h2>
              <p className='text-[#4A3F35]'>Practical guides for caregivers and care agencies.</p>
            </div>
            <a href='#' className='text-[#8B6914] font-semibold text-sm hover:underline'>View all articles &#8594;</a>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {[
              { tag: 'Licensing', title: 'Arizona Home Care License Requirements: The Complete 2026 Guide', excerpt: 'Everything you need to know about AZ DHS licensing, renewal timelines, required training hours, and common violations.', time: '8 min read', date: 'March 2026' },
              { tag: 'Documentation', title: 'How to Write a State-Compliant Shift Log (With Examples)', excerpt: 'Shift logs are the #1 document auditors request. Here\'s exactly what to include &#8212; and what triggers a violation.', time: '6 min read', date: 'February 2026' },
              { tag: 'Agency Growth', title: 'The Compliance Checklist Every Solo Caregiver Needs Before Accepting a New Client', excerpt: 'Protect yourself, protect your client, and set professional expectations from day one. A printable checklist included.', time: '5 min read', date: 'February 2026' },
            ].map((post, idx) => (
              <article key={idx} className='bg-white rounded-lg border border-[#E2D9CE] overflow-hidden hover:shadow-lg hover:border-[#C9A227] transition-all group'>
                <div className='h-1.5 bg-gradient-to-r from-[#8B6914] to-[#C9A227]' />
                <div className='p-6'>
                  <div className='flex items-center gap-2 mb-3'>
                    <span className='text-xs font-semibold text-[#8B6914] bg-[#F0E6C8] px-2 py-1 rounded'>{post.tag}</span>
                    <span className='text-xs text-gray-400'>{post.date}</span>
                  </div>
                  <h3 className='font-semibold text-[#1A1612] mb-3 leading-snug group-hover:text-[#8B6914] transition-colors'>{post.title}</h3>
                  <p className='text-sm text-[#4A3F35] leading-relaxed mb-4' dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                  <div className='flex items-center gap-1 text-xs text-gray-400'>
                    <svg viewBox='0 0 24 24' fill='#C9A227' width='12' height='12'><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' /></svg>
                    {post.time}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WAITLIST CTA */}
      <section id='waitlist' className='max-w-6xl mx-auto px-4 md:px-8 py-24'>
        <div className='bg-[#1A1612] rounded-xl p-8 md:p-16 text-center relative overflow-hidden'>
          <div className='absolute -right-16 -top-16 opacity-10 pointer-events-none'><GoldenWheel size={240} /></div>
          <div className='absolute -left-16 -bottom-16 opacity-10 pointer-events-none'><GoldenWheel size={200} /></div>
          <div className='relative'>
            <div className='flex justify-center mb-6'>
              <svg viewBox='0 0 24 24' fill='#C9A227' width='40' height='40' className='animate-heartbeat'>
                <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
              </svg>
            </div>
            <h2 className='font-display text-3xl md:text-5xl text-white mb-4'>Be First in the Door</h2>
            <p className='text-[#D4B896] text-xl mb-8 max-w-xl mx-auto'>
              Golden Wheel&#8482; launches Q3 2026. Join the waitlist now and lock in founding member pricing &#8212; 40% below standard rate, forever.
            </p>
            <div className='flex justify-center'>
              <WaitlistForm compact />
            </div>
            <p className='mt-4 text-sm text-[#8B7A5A]'>Join 340+ caregivers and agencies already on the list.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className='bg-[#1A1612] text-white py-12'>
        <div className='max-w-6xl mx-auto px-4 md:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mb-8'>
            <div>
              <div className='flex items-center gap-2 mb-4'><WheelIcon size={22} /><span className='font-display font-semibold text-[#D4AF8A]'>Golden Wheel&#8482;</span></div>
              <p className='text-white/60 text-sm leading-relaxed'>Compliance software for home care providers. Built with care, for those who care.</p>
            </div>
            <div>
              <h4 className='text-sm font-semibold text-[#D4AF8A] mb-4'>Product</h4>
              <ul className='space-y-2 text-sm text-white/60'>
                <li><a href='#features' className='hover:text-[#D4AF8A] transition-colors'>Features</a></li>
                <li><a href='#pricing' className='hover:text-[#D4AF8A] transition-colors'>Pricing</a></li>
                <li><a href='#blog' className='hover:text-[#D4AF8A] transition-colors'>Resources</a></li>
                <li><a href='#waitlist' className='hover:text-[#D4AF8A] transition-colors'>Join Waitlist</a></li>
              </ul>
            </div>
            <div>
              <h4 className='text-sm font-semibold text-[#D4AF8A] mb-4'>Contact</h4>
              <ul className='space-y-2 text-sm text-white/60'>
                <li><a href='mailto:hello@goldenwheel.care' className='hover:text-[#D4AF8A] transition-colors'>hello@goldenwheel.care</a></li>
                <li><a href='mailto:enterprise@goldenwheel.care' className='hover:text-[#D4AF8A] transition-colors'>Enterprise inquiries</a></li>
                <li className='pt-2 text-white/40'>Scottsdale, Arizona</li>
              </ul>
            </div>
          </div>
          <div className='border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40'>
            <p>&#169; 2026 Golden Wheel&#8482;. All rights reserved. Golden Wheel is a trademark.</p>
            <div className='flex gap-6'>
              <a href='#' className='hover:text-white/60 transition-colors'>Privacy Policy</a>
              <a href='#' className='hover:text-white/60 transition-colors'>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
