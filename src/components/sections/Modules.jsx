import { useRef } from 'react'
import TiltCard from '../effects/TiltCard'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { MODULES, CHECKOUT_URL } from '../../lib/constants'

export default function Modules() {
  const headRef = useRef(null)
  const gridRef = useRef(null)

  useScrollReveal(headRef, { selector: ':scope > *', overrides: { stagger: 0.1 } })
  useScrollReveal(gridRef, { selector: ':scope > *', overrides: { stagger: 0.1, y: 50 } })

  return (
    <section
      id="modules"
      className="relative py-24 md:py-36 px-6"
      style={{ backgroundColor: 'var(--navy-900)' }}
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,184,0,0.18), transparent)' }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div ref={headRef} className="text-center mb-16 md:mb-20">
          <p className="font-mono text-xs tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--slate)' }}>
            // Contenido de la guía
          </p>
          <h2
            className="font-serif font-black text-3xl md:text-5xl leading-tight"
            style={{ color: 'var(--ivory)' }}
          >
            Lo que vas a aprender,{' '}
            <span style={{ color: 'var(--gold)' }}>en orden</span>
          </h2>
          <p className="mt-5 font-sans text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--slate)' }}>
            Seis módulos diseñados en secuencia. Cada uno construye sobre el anterior — no saltes pasos.
          </p>
        </div>

        {/* Module grid */}
        <div
          ref={gridRef}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {MODULES.map(({ id, title, description }) => (
            <TiltCard
              key={id}
              maxTilt={8}
              scale={1.015}
              className="h-full"
            >
              <div
                className="h-full rounded-2xl p-7 border flex flex-col"
                style={{
                  backgroundColor: 'rgba(11,14,26,0.7)',
                  borderColor: 'rgba(138,147,168,0.12)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Module number */}
                <span
                  className="font-mono font-bold text-3xl md:text-4xl leading-none mb-5 block"
                  style={{ color: 'var(--gold)', opacity: 0.55 }}
                  aria-hidden="true"
                >
                  {String(id).padStart(2, '0')}
                </span>

                <h3
                  className="font-serif font-bold text-lg md:text-xl mb-3 leading-snug"
                  style={{ color: 'var(--ivory)' }}
                >
                  {title}
                </h3>

                <p
                  className="font-sans text-sm leading-relaxed flex-1"
                  style={{ color: 'var(--slate)' }}
                >
                  {description}
                </p>

                {/* Subtle bottom accent line */}
                <div
                  className="mt-6 h-px w-10"
                  style={{ backgroundColor: 'var(--teal)', opacity: 0.5 }}
                  aria-hidden="true"
                />
              </div>
            </TiltCard>
          ))}
        </div>

        {/* CTA under grid */}
        <div className="mt-14 text-center">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-sans font-bold px-9 py-4 rounded-full text-base border transition-colors duration-200 hover:border-gold/60 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/60"
            style={{
              borderColor: 'rgba(255,255,255,0.18)',
              color: 'var(--ivory)',
            }}
          >
            Quiero los 6 módulos →
          </a>
        </div>
      </div>
    </section>
  )
}
