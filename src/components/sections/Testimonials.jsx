import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { TESTIMONIALS } from '../../lib/constants'

function TestimonialCard({ name, role, quote, result, avatar }) {
  const initials = name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase()

  return (
    <figure
      className="relative rounded-2xl border p-6 flex flex-col gap-4 backdrop-blur-md transition-all duration-300 hover:border-[#FFB800]/25 hover:shadow-[0_0_24px_2px_rgba(255,184,0,0.06)]"
      style={{
        backgroundColor: 'rgba(255,255,255,0.04)',
        borderColor: 'rgba(255,255,255,0.08)',
      }}
    >
      {/* Placeholder badge */}
      <div
        className="absolute top-3 right-3 font-mono text-[9px] px-2 py-0.5 rounded-full border tracking-widest uppercase"
        style={{
          color: 'var(--slate)',
          borderColor: 'rgba(138,147,168,0.2)',
          backgroundColor: 'rgba(138,147,168,0.07)',
        }}
        title="Reemplaza este testimonio en constants.js → TESTIMONIALS"
      >
        placeholder
      </div>

      {/* Quote */}
      <blockquote className="font-sans text-sm md:text-base leading-relaxed flex-1" style={{ color: 'var(--ivory)' }}>
        {quote}
      </blockquote>

      {/* Result chip */}
      <div
        className="self-start font-mono text-xs px-3 py-1 rounded-full"
        style={{
          backgroundColor: 'rgba(0,230,199,0.1)',
          color: 'var(--teal)',
          border: '1px solid rgba(0,230,199,0.2)',
        }}
      >
        {result}
      </div>

      {/* Author */}
      <figcaption className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 overflow-hidden"
          style={{ backgroundColor: 'rgba(255,184,0,0.15)', color: 'var(--gold)' }}
          aria-hidden="true"
        >
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          ) : (
            initials
          )}
        </div>
        <div>
          <p className="font-sans font-semibold text-sm" style={{ color: 'var(--ivory)' }}>{name}</p>
          <p className="font-sans text-xs" style={{ color: 'var(--slate)' }}>{role}</p>
        </div>
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  const headRef = useRef(null)
  const gridRef = useRef(null)

  useScrollReveal(headRef, { selector: ':scope > *', overrides: { stagger: 0.1 } })
  useScrollReveal(gridRef, { selector: ':scope > *', overrides: { stagger: 0.12, y: 40 } })

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-36 px-6"
      style={{ backgroundColor: 'var(--navy-900)' }}
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,184,0,0.2), transparent)' }}
      />

      <div className="max-w-5xl mx-auto">
        <div ref={headRef} className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--teal)' }}>
            // Resultados reales
          </p>
          <h2 className="font-serif font-black text-3xl md:text-5xl leading-tight" style={{ color: 'var(--ivory)' }}>
            Lo que dicen quienes{' '}
            <span style={{ color: 'var(--gold)', textShadow: '0 0 40px rgba(255,184,0,0.25)' }}>
              ya lo hicieron
            </span>
          </h2>
          <p className="mt-5 font-sans text-sm max-w-xl mx-auto" style={{ color: 'var(--slate)' }}>
            — Testimonios de marcador. Reemplázalos con los reales en{' '}
            <code
              className="font-mono text-xs px-1.5 py-0.5 rounded"
              style={{ backgroundColor: 'rgba(255,255,255,0.07)', color: 'var(--teal)' }}
            >
              src/lib/constants.js → TESTIMONIALS
            </code>
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
