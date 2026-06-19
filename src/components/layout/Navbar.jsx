import { useState, useEffect } from 'react'
import MagneticButton from '../effects/MagneticButton'
import { CHECKOUT_URL } from '../../lib/constants'

const NAV_LINKS = [
  { label: 'El Problema', href: '#problem' },
  { label: 'Solución', href: '#solution' },
  { label: 'Módulos', href: '#modules' },
  { label: 'Precio', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={[
        'fixed left-0 right-0 z-40 transition-all duration-300',
        'top-8', // sits below TickerBar (h-8)
        scrolled
          ? 'bg-navy-950/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/30'
          : 'bg-transparent',
      ].join(' ')}
      aria-label="Navegación principal"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-md">
          <span className="font-serif text-2xl font-black text-white leading-none">DDI</span>
          <span className="font-mono text-teal/60 text-sm select-none">|</span>
          <span className="hidden sm:block font-sans text-xs text-slate-ui leading-tight">
            Daily Duty Institute<br />
            <span className="text-white/50 text-[10px] font-mono">From $0 → Investor</span>
          </span>
        </a>

        {/* Anchor links — desktop */}
        <ul className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="font-sans text-sm text-slate-ui hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <MagneticButton strength={0.3}>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn inline-block font-sans text-sm font-semibold px-5 py-2.5 rounded-full bg-gold text-navy-950 hover:brightness-110 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
            style={{ boxShadow: '0 0 22px rgba(255,184,0,0.35)' }}
          >
            Quiero empezar →
          </a>
        </MagneticButton>
      </div>
    </nav>
  )
}
