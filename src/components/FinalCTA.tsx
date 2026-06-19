import { useEffect, useRef } from 'react'
import MagneticButton from './effects/MagneticButton'
import { CHECKOUT_URL } from '../lib/constants'

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  // Pulse the gold glow as equity curve reaches its peak (progress → 1)
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const el = glowRef.current
    if (!el) return

    const onScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const vh = window.innerHeight
      // t goes 0→1 as section scrolls into view
      const t = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)))
      const opacity = 0.12 + t * 0.28
      el.style.opacity = String(opacity)
      el.style.transform = `scale(${0.85 + t * 0.3})`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="final-cta"
      ref={sectionRef}
      className="bg-navy-950 py-32 px-6 relative overflow-hidden"
    >
      {/* Ambient gold glow — equity curve peak */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          top: '10%',
          right: '-10%',
          width: '60vw',
          height: '60vw',
          maxWidth: '700px',
          maxHeight: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,184,0,0.18) 0%, transparent 70%)',
          opacity: 0.12,
          transform: 'scale(0.85)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
          willChange: 'opacity, transform',
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p className="font-mono text-teal text-xs tracking-[0.2em] mb-6 reveal">
          // ÚLTIMA PARADA
        </p>

        <h2
          className="font-serif font-black text-white mb-6 reveal"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            lineHeight: 1.05,
            animationDelay: '0.08s',
          }}
        >
          ¿Cuándo
          <br />
          vas a{' '}
          <span className="text-gold gold-glow">empezar?</span>
        </h2>

        <p
          className="font-sans text-slate-ui text-lg mb-4 max-w-xl mx-auto leading-relaxed reveal"
          style={{ animationDelay: '0.16s' }}
        >
          Cada mes sin invertir, la inflación te cobra en silencio.
          <br />
          La única decisión que cambia el juego: empezar hoy.
        </p>

        <p
          className="font-mono text-teal text-sm mb-12 reveal"
          style={{ animationDelay: '0.22s' }}
        >
          1 año de espera = miles en interés compuesto perdido.
        </p>

        {/* Primary CTA */}
        <div className="reveal" style={{ animationDelay: '0.28s' }}>
          <MagneticButton strength={0.35}>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn inline-block font-sans font-bold px-12 py-6 rounded-full bg-gold text-navy-950 text-xl md:text-2xl transition-transform duration-200"
              style={{
                boxShadow:
                  '0 0 70px rgba(255,184,0,0.5), 0 0 140px rgba(255,184,0,0.2)',
              }}
            >
              Empezar ahora →
            </a>
          </MagneticButton>
        </div>

        <p
          className="font-sans text-slate-ui/60 text-sm mt-6 reveal"
          style={{ animationDelay: '0.36s' }}
        >
          Garantía de 30 días · Acceso inmediato · Precio de lanzamiento
        </p>
      </div>
    </section>
  )
}
