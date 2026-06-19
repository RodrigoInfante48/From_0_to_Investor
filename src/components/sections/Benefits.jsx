import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { BENEFITS } from '../../lib/constants'
import CountUp from '../effects/CountUp'

function BenefitCard({ icon, metric, title, description }) {
  return (
    <div
      className="relative rounded-2xl border p-6 flex flex-col gap-3 backdrop-blur-md transition-all duration-300 hover:border-[#00e6c7]/30 hover:shadow-[0_0_24px_2px_rgba(0,230,199,0.07)]"
      style={{
        backgroundColor: 'rgba(255,255,255,0.04)',
        borderColor: 'rgba(255,255,255,0.08)',
      }}
    >
      <div className="text-2xl" aria-hidden="true">{icon}</div>

      {metric && (
        <div className="font-serif font-black text-4xl leading-none" style={{ color: 'var(--gold)' }}>
          <CountUp
            to={metric.to}
            prefix={metric.prefix}
            suffix={metric.suffix}
            decimals={metric.decimals}
            duration={2.2}
            className="!font-serif"
          />
          <span className="sr-only">{metric.label}</span>
        </div>
      )}

      <h3 className="font-sans font-bold text-base md:text-lg" style={{ color: 'var(--ivory)' }}>
        {title}
      </h3>
      <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--slate)' }}>
        {description}
      </p>
    </div>
  )
}

export default function Benefits() {
  const headRef = useRef(null)
  const gridRef = useRef(null)

  useScrollReveal(headRef, { selector: ':scope > *', overrides: { stagger: 0.1 } })
  useScrollReveal(gridRef, { selector: ':scope > *', overrides: { stagger: 0.1, y: 40 } })

  return (
    <section
      id="benefits"
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
            // Después del método
          </p>
          <h2 className="font-serif font-black text-3xl md:text-5xl leading-tight" style={{ color: 'var(--ivory)' }}>
            Lo que logras cuando{' '}
            <span style={{ color: 'var(--gold)', textShadow: '0 0 40px rgba(255,184,0,0.25)' }}>
              terminas
            </span>
          </h2>
          <p className="mt-5 font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--slate)' }}>
            No teoría acumulada. Resultados concretos que puedes medir desde la primera semana.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {BENEFITS.map((b) => (
            <BenefitCard key={b.id} {...b} />
          ))}
        </div>
      </div>
    </section>
  )
}
