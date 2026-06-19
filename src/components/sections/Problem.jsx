import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const PAINS = [
  {
    icon: '⚡',
    heading: 'El miedo te paraliza antes de empezar',
    body:
      'Llevas meses (o años) leyendo sobre inversiones pero nunca ejecutas. El miedo a perder lo poco que tienes es más fuerte que el deseo de crecer. Y el tiempo pasa.',
  },
  {
    icon: '🌀',
    heading: 'Demasiado ruido, cero claridad',
    body:
      'YouTube, TikTok, Reddit, podcasts… cada gurú dice algo distinto. Cuanto más consumes, más confuso te sientes. La infoxicación es el nuevo analfabetismo financiero.',
  },
  {
    icon: '📐',
    heading: 'Nadie te enseñó el método',
    body:
      'En la escuela te enseñaron a trabajar para el dinero. Nadie te explicó cómo hacer que el dinero trabaje para ti. Sin sistema, solo hay apuestas disfrazadas de inversión.',
  },
  {
    icon: '💸',
    heading: '"Necesito mucho capital para empezar"',
    body:
      'El mito de que invertir es solo para ricos te roba años de interés compuesto. Con $50 al mes y el vehículo correcto, el tiempo hace el trabajo pesado.',
  },
]

export default function Problem() {
  const gridRef = useRef(null)
  const headRef = useRef(null)

  useScrollReveal(headRef, { selector: ':scope > *', overrides: { stagger: 0.1 } })
  useScrollReveal(gridRef, { selector: ':scope > *', overrides: { stagger: 0.14, y: 50 } })

  return (
    <section
      id="problem"
      className="relative py-24 md:py-36 px-6"
      style={{ backgroundColor: 'var(--navy-900)' }}
    >
      {/* Subtle top separator */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(138,147,168,0.2), transparent)' }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Heading block */}
        <div ref={headRef} className="text-center mb-16 md:mb-20">
          <p className="font-mono text-xs tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--slate)' }}>
            // Por qué la mayoría nunca invierte
          </p>
          <h2
            className="font-serif font-black text-3xl md:text-5xl leading-tight"
            style={{ color: 'var(--ivory)' }}
          >
            No es falta de dinero.
            <br />
            <span style={{ color: 'var(--gold)' }}>Es falta de método.</span>
          </h2>
          <p className="mt-5 font-sans text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--slate)' }}>
            Reconoce el patrón. Si alguno de estos dolores te suena familiar, no estás solo — y tiene solución.
          </p>
        </div>

        {/* Pain cards */}
        <div ref={gridRef} className="grid gap-5 sm:grid-cols-2">
          {PAINS.map(({ icon, heading, body }) => (
            <div
              key={heading}
              className="rounded-2xl p-7 border"
              style={{
                backgroundColor: 'rgba(11,14,26,0.6)',
                borderColor: 'rgba(138,147,168,0.12)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span className="text-2xl mb-4 block" aria-hidden="true">{icon}</span>
              <h3
                className="font-serif font-bold text-lg md:text-xl mb-2"
                style={{ color: 'var(--ivory)' }}
              >
                {heading}
              </h3>
              <p className="font-sans text-sm md:text-base leading-relaxed" style={{ color: 'var(--slate)' }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
