import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import CandlestickBg from '../effects/CandlestickBg'
import MagneticButton from '../effects/MagneticButton'
import { CHECKOUT_URL } from '../../lib/constants'

const STATS = [
  { value: '$0', label: 'Capital inicial necesario' },
  { value: '6', label: 'Módulos de acción directa' },
  { value: '+47K', label: 'Portafolio posible en 5 años' },
]

export default function Hero() {
  const sectionRef = useRef(null)
  const tagRef = useRef(null)
  const line1Ref = useRef(null)
  const zeroRef = useRef(null)
  const line2Ref = useRef(null)
  const subRef = useRef(null)
  const ctasRef = useRef(null)
  const statsRef = useRef(null)

  useLayoutEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) return

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Start from hidden — set before first paint
    gsap.set(
      [tagRef.current, line1Ref.current, zeroRef.current, line2Ref.current,
       subRef.current, ctasRef.current, statsRef.current],
      { autoAlpha: 0, y: 40 }
    )

    tl.to(tagRef.current,   { autoAlpha: 1, y: 0, duration: 0.6 })
      .to(line1Ref.current,  { autoAlpha: 1, y: 0, duration: 0.7 }, '-=0.35')
      .to(zeroRef.current,   { autoAlpha: 1, y: 0, duration: 0.75, ease: 'power4.out' }, '-=0.45')
      .to(line2Ref.current,  { autoAlpha: 1, y: 0, duration: 0.7 }, '-=0.5')
      .to(subRef.current,    { autoAlpha: 1, y: 0, duration: 0.65 }, '-=0.4')
      .to(ctasRef.current,   { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.35')
      .to(statsRef.current,  { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.3')

    return () => tl.kill()
  }, [])

  function handleScrollToModules(e) {
    e.preventDefault()
    const target = document.getElementById('modules')
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center mesh-bg overflow-hidden"
    >
      {/* Animated candlestick background */}
      <CandlestickBg />

      {/* Gradient overlay — stronger at bottom to blend into next section */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(11,14,26,0.4) 0%, transparent 30%, transparent 70%, rgba(11,14,26,0.85) 100%)',
        }}
      />

      {/* Radial gold bloom behind the $0 */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: '28%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '720px',
          height: '720px',
          background:
            'radial-gradient(circle, rgba(255,184,0,0.07) 0%, rgba(255,184,0,0.02) 40%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-32 pb-20">
        {/* Tag line */}
        <p
          ref={tagRef}
          className="font-mono text-teal text-xs md:text-sm mb-8 tracking-[0.22em] uppercase"
        >
          // Daily Duty Institute · Guía de Inversión
        </p>

        {/* Headline */}
        <h1 className="font-serif font-black leading-none mb-6 select-none">
          <span
            ref={line1Ref}
            className="block text-4xl md:text-6xl lg:text-7xl text-white tracking-tight"
          >
            From
          </span>

          {/* $0 — anchor for the Equity Curve start */}
          <span
            id="hero-zero"
            ref={zeroRef}
            className="block gold-glow"
            style={{
              fontSize: 'clamp(5rem, 18vw, 14rem)',
              lineHeight: 1,
              color: 'var(--gold)',
              letterSpacing: '-0.03em',
            }}
          >
            $0
          </span>

          <span
            ref={line2Ref}
            className="block text-4xl md:text-6xl lg:text-7xl tracking-tight"
            style={{ color: 'var(--teal)' }}
          >
            → Investor
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          ref={subRef}
          className="font-sans text-slate-ui text-base md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'var(--slate)' }}
        >
          La hoja de ruta que nadie te dio: cómo pasar de no tener nada
          a construir un portafolio real, paso a paso, sin jerga y sin excusas.
        </p>

        {/* CTAs */}
        <div
          ref={ctasRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <MagneticButton strength={0.35}>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-sans font-bold px-9 py-4 rounded-full text-navy-950 text-lg teal-glow-box transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
              style={{
                backgroundColor: 'var(--teal)',
                color: 'var(--navy-950)',
              }}
            >
              Quiero empezar ya →
            </a>
          </MagneticButton>

          <a
            href="#modules"
            onClick={handleScrollToModules}
            className="font-sans font-semibold px-8 py-4 rounded-full border text-white transition-colors duration-200 hover:border-gold/60 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/60"
            style={{ borderColor: 'rgba(255,255,255,0.18)' }}
          >
            Ver qué incluye ↓
          </a>
        </div>

        {/* Stats strip */}
        <div
          ref={statsRef}
          className="mt-20 flex justify-center gap-8 md:gap-16"
        >
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div
                className="font-serif font-black text-2xl md:text-3xl"
                style={{ color: 'var(--gold)' }}
              >
                {value}
              </div>
              <div
                className="font-sans text-xs mt-1 max-w-[110px] mx-auto"
                style={{ color: 'var(--slate)' }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
