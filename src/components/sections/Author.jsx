import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { AUTHOR } from '../../lib/constants'

export default function Author() {
  const containerRef = useRef(null)

  useScrollReveal(containerRef, { selector: ':scope > *', overrides: { stagger: 0.12, y: 30 } })

  return (
    <section
      id="author"
      className="relative py-24 md:py-36 px-6"
      style={{ backgroundColor: 'var(--navy-950)' }}
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(0,230,199,0.15), transparent)' }}
      />

      <div className="max-w-4xl mx-auto">
        <div ref={containerRef} className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">

          {/* Avatar */}
          <div className="flex-shrink-0 flex flex-col items-center gap-4">
            <div
              className="w-36 h-36 md:w-44 md:h-44 rounded-full border-2 flex items-center justify-center overflow-hidden"
              style={{ borderColor: 'rgba(0,230,199,0.3)', backgroundColor: 'rgba(0,230,199,0.06)' }}
              aria-label={`Foto de ${AUTHOR.name}`}
            >
              {AUTHOR.avatarPlaceholder ? (
                <img
                  src={AUTHOR.avatarPlaceholder}
                  alt={AUTHOR.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="font-serif font-black text-5xl" style={{ color: 'var(--teal)' }}>
                  {AUTHOR.name.charAt(0)}
                </span>
              )}
            </div>
            <div className="text-center">
              <p className="font-sans font-bold text-sm" style={{ color: 'var(--ivory)' }}>
                {AUTHOR.name}
              </p>
              <p className="font-mono text-xs mt-1" style={{ color: 'var(--slate)' }}>
                Daily Duty Institute
              </p>
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1 min-w-0">
            <p className="font-mono text-xs tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--teal)' }}>
              // Quién está detrás
            </p>
            <h2 className="font-serif font-black text-2xl md:text-4xl mb-2" style={{ color: 'var(--ivory)' }}>
              {AUTHOR.name}
            </h2>
            <p className="font-sans text-sm mb-6" style={{ color: 'var(--gold)' }}>
              {AUTHOR.role}
            </p>

            <div className="space-y-4 mb-8">
              {AUTHOR.bio.map((paragraph, i) => (
                <p key={i} className="font-sans text-sm md:text-base leading-relaxed" style={{ color: 'var(--slate)' }}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Credentials */}
            <ul className="space-y-2">
              {AUTHOR.credentials.map((cred, i) => (
                <li key={i} className="flex items-center gap-3 font-sans text-sm" style={{ color: 'var(--ivory)' }}>
                  <span
                    className="flex-shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: 'var(--teal)', boxShadow: '0 0 6px var(--teal)' }}
                    aria-hidden="true"
                  />
                  {cred}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
