import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { CHECKOUT_URL, PRODUCT_NAME } from '../../lib/constants'

const BRIDGES = [
  {
    pain: 'El miedo a perder',
    fix: 'Te damos el marco mental del inversor paciente: entiendas el riesgo real vs. el riesgo percibido y actúes con convicción.',
    accent: 'var(--gold)',
  },
  {
    pain: 'El ruido y la confusión',
    fix: 'Un solo camino, en orden. Módulo a módulo, sin saltar, sin loops infinitos de contenido gratuito que no lleva a ningún lado.',
    accent: 'var(--teal)',
  },
  {
    pain: 'La falta de método',
    fix: 'El sistema probado: flujo de caja → primer vehículo → portafolio → automatización. Ejecutable desde la semana 1.',
    accent: 'var(--gold)',
  },
  {
    pain: '"Necesito mucho capital"',
    fix: 'El protocolo $0 → primer depósito: cómo liberar capital de tu sueldo actual y ponerlo a trabajar sin esperar un bono.',
    accent: 'var(--teal)',
  },
]

export default function Solution() {
  const headRef = useRef(null)
  const bridgesRef = useRef(null)
  const closerRef = useRef(null)

  useScrollReveal(headRef, { selector: ':scope > *', overrides: { stagger: 0.1 } })
  useScrollReveal(bridgesRef, { selector: ':scope > *', overrides: { stagger: 0.13, y: 45 } })
  useScrollReveal(closerRef, { selector: ':scope > *', overrides: { stagger: 0.1 } })

  return (
    <section
      id="solution"
      className="relative py-24 md:py-36 px-6"
      style={{ backgroundColor: 'var(--navy-950)' }}
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(0,230,199,0.2), transparent)' }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div ref={headRef} className="text-center mb-16 md:mb-20">
          <p className="font-mono text-xs tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--teal)' }}>
            // La solución
          </p>
          <h2
            className="font-serif font-black text-3xl md:text-5xl leading-tight"
            style={{ color: 'var(--ivory)' }}
          >
            Presentamos{' '}
            <span
              className="inline-block"
              style={{
                color: 'var(--gold)',
                textShadow: '0 0 40px rgba(255,184,0,0.25)',
              }}
            >
              {PRODUCT_NAME}
            </span>
          </h2>
          <p className="mt-5 font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--slate)' }}>
            No es un curso de teoría. Es la hoja de ruta operativa que convierte cada uno de esos bloqueos en el siguiente paso concreto.
          </p>
        </div>

        {/* Pain → Fix bridges */}
        <div ref={bridgesRef} className="space-y-4">
          {BRIDGES.map(({ pain, fix, accent }) => (
            <div
              key={pain}
              className="flex gap-5 rounded-2xl p-6 border items-start"
              style={{
                backgroundColor: 'rgba(26,26,46,0.5)',
                borderColor: 'rgba(138,147,168,0.1)',
              }}
            >
              {/* Connector dot */}
              <div
                className="mt-1 flex-shrink-0 w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: accent, boxShadow: `0 0 8px ${accent}` }}
                aria-hidden="true"
              />
              <div className="min-w-0">
                <p className="font-sans font-semibold text-sm mb-1" style={{ color: accent }}>
                  Dolor: {pain}
                </p>
                <p className="font-sans text-sm md:text-base leading-relaxed" style={{ color: 'var(--ivory)' }}>
                  {fix}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closer CTA nudge */}
        <div ref={closerRef} className="mt-16 text-center">
          <p className="font-serif text-xl md:text-2xl font-bold mb-6" style={{ color: 'var(--ivory)' }}>
            Un método. Seis módulos. Un portafolio real.
          </p>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-sans font-bold px-9 py-4 rounded-full text-base transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
            style={{
              backgroundColor: 'var(--teal)',
              color: 'var(--navy-950)',
              boxShadow: '0 0 32px rgba(0,230,199,0.3)',
            }}
          >
            Quiero el método →
          </a>
        </div>
      </div>
    </section>
  )
}
