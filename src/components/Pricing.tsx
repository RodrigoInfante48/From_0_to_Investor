import { useEffect, useRef } from 'react'
import MagneticButton from './effects/MagneticButton'
import { CHECKOUT_URL, PRICING } from '../lib/constants'

function useCountUp(target: number, duration = 2000) {
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) { el.textContent = target.toLocaleString('en-US'); return }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const startTime = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - startTime) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          el.textContent = Math.floor(eased * target).toLocaleString('en-US')
          if (t < 1) requestAnimationFrame(tick)
          else el.textContent = target.toLocaleString('en-US')
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.4 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return ref
}

export default function Pricing() {
  const valueTotalRef = useCountUp(PRICING.valueTotal, 2000)
  const priceRef = useCountUp(PRICING.price, 1400)

  return (
    <section id="pricing" className="bg-navy-950 py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-teal text-xs tracking-[0.2em] mb-4 reveal">// LA OFERTA</p>
        <h2
          className="font-serif font-black text-4xl md:text-5xl text-white mb-4 reveal"
          style={{ animationDelay: '0.08s' }}
        >
          Un precio único.<br />
          <span className="text-gold">Acceso de por vida.</span>
        </h2>
        <p
          className="font-sans text-slate-ui mb-10 reveal"
          style={{ animationDelay: '0.12s' }}
        >
          Sin suscripciones. Sin sorpresas. Pagas una vez y el sistema es tuyo para siempre.
        </p>

        {/* Card */}
        <div
          className="glass-card rounded-3xl p-8 md:p-12 reveal"
          style={{
            animationDelay: '0.2s',
            background: 'linear-gradient(135deg, rgba(255,184,0,0.04) 0%, rgba(26,26,46,0.95) 60%)',
            border: '1px solid rgba(255,184,0,0.18)',
            boxShadow: '0 0 80px rgba(255,184,0,0.06)',
          }}
        >
          {/* Value stack — strikethrough */}
          <div className="mb-6">
            <p className="font-sans text-slate-ui text-xs uppercase tracking-widest mb-1">Valor total del paquete</p>
            <p
              className="font-mono text-slate-ui/60 text-2xl line-through"
              aria-label={`Valor original: $${PRICING.valueTotal} USD`}
            >
              $<span ref={valueTotalRef}>0</span> USD
            </p>
          </div>

          {/* Real price */}
          <div className="mb-2">
            <div
              className="font-serif font-black text-gold gold-glow"
              style={{ fontSize: 'clamp(4rem, 12vw, 6.5rem)', lineHeight: 1 }}
              aria-label={`Precio de lanzamiento: $${PRICING.price} USD`}
            >
              $<span ref={priceRef}>0</span>
            </div>
            <div className="font-sans text-ivory/60 text-lg -mt-1">USD</div>
          </div>

          <div className="font-mono text-teal text-xs mb-8 tracking-[0.2em]">
            PRECIO DE LANZAMIENTO · ACCESO INMEDIATO
          </div>

          {/* Includes list */}
          <ul className="text-left mb-10 space-y-0" aria-label="Qué incluye">
            {PRICING.includes.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0"
              >
                <span className="text-teal font-bold flex-shrink-0 text-base" aria-hidden="true">✓</span>
                <span className="font-sans text-white/80 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <MagneticButton strength={0.3}>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn block w-full font-sans font-bold py-5 rounded-full bg-gold text-navy-950 text-xl text-center transition-transform duration-200"
              style={{ boxShadow: '0 0 50px rgba(255,184,0,0.4), 0 0 100px rgba(255,184,0,0.15)' }}
            >
              Quiero la guía ahora →
            </a>
          </MagneticButton>

          <p className="font-mono text-slate-ui text-xs mt-5">
            Procesado de forma segura por Hotmart · Garantía 30 días
          </p>
        </div>
      </div>
    </section>
  )
}
