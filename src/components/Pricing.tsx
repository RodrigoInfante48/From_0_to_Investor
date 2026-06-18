import { useEffect, useRef } from 'react'

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
    }, { threshold: 0.5 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return ref
}

const VALUE_STACK = [
  '6 módulos completos paso a paso',
  'Plantillas de portafolio listas para usar',
  'Guía de apertura de cuenta (paso a paso)',
  'Acceso de por vida + actualizaciones',
  'Soporte por comunidad DDI',
  'Garantía de 30 días sin preguntas',
]

export default function Pricing() {
  const priceRef = useCountUp(47, 1800)
  const valueRef = useCountUp(300, 2200)

  return (
    <section id="pricing" className="bg-navy-950 py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-teal text-xs tracking-[0.2em] mb-4 reveal">// LA OFERTA</p>
        <h2 className="font-serif font-black text-4xl md:text-5xl text-white mb-4 reveal" style={{ animationDelay: '0.08s' }}>
          Un precio.<br /><span className="text-gold">Acceso de por vida.</span>
        </h2>
        <p className="font-sans text-slate-ui mb-10 reveal" style={{ animationDelay: '0.12s' }}>
          Sin suscripciones. Sin sorpresas. Pagas una vez y el sistema es tuyo para siempre.
        </p>

        <div className="glass-card rounded-3xl p-8 md:p-10 reveal" style={{ animationDelay: '0.2s' }}>
          <div className="font-sans text-slate-ui text-sm line-through mb-1">
            Valor real: $<span ref={valueRef}>0</span> USD
          </div>
          <div className="font-serif font-black text-gold gold-glow mb-1" style={{ fontSize: 'clamp(3.5rem, 10vw, 6rem)', lineHeight: 1 }}>
            $<span ref={priceRef}>0</span>
            <span className="text-3xl ml-2">USD</span>
          </div>
          <div className="font-mono text-teal text-xs mb-8 tracking-widest">
            PRECIO DE LANZAMIENTO · ACCESO INMEDIATO
          </div>

          <div className="text-left mb-8">
            {VALUE_STACK.map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-2.5 border-b border-white/5 last:border-0">
                <span className="text-teal font-bold flex-shrink-0">✓</span>
                <span className="font-sans text-white/80 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="magnetic-btn block w-full font-sans font-bold py-5 rounded-full bg-gold text-navy-950 text-xl text-center hover:scale-105 transition-transform duration-200"
            style={{ boxShadow: '0 0 50px rgba(255,184,0,0.4)' }}
          >
            Quiero la guía ahora →
          </a>
          <p className="font-mono text-slate-ui text-xs mt-4">Procesado de forma segura por Hotmart · Garantía 30 días</p>
        </div>
      </div>
    </section>
  )
}
