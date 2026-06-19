import { ShieldCheck } from 'lucide-react'

export default function Guarantee() {
  return (
    <section id="guarantee" className="bg-ivory py-24 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Seal container */}
        <div className="flex flex-col md:flex-row items-center gap-10 reveal">
          {/* Shield icon — trust seal */}
          <div className="flex-shrink-0">
            <div
              className="w-32 h-32 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #fff8e7 0%, #f4f0e6 100%)',
                border: '3px solid rgba(255,184,0,0.5)',
                boxShadow: '0 0 0 8px rgba(255,184,0,0.08), 0 8px 32px rgba(255,184,0,0.15)',
              }}
              aria-hidden="true"
            >
              <ShieldCheck
                size={56}
                strokeWidth={1.5}
                style={{ color: '#E0A82E' }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <p className="font-mono text-gold-soft text-xs tracking-[0.2em] mb-2 uppercase">
              Sin riesgo
            </p>
            <h2 className="font-serif font-black text-3xl md:text-4xl text-navy-950 mb-4 leading-tight">
              Garantía de{' '}
              <span className="text-gold-soft">30 días</span>{' '}
              completa
            </h2>
            <p className="font-sans text-navy-900/65 text-base leading-relaxed mb-4">
              Aplica el sistema durante 30 días. Si no tienes claridad total sobre cómo empezar
              a invertir — o si por cualquier razón no quedas satisfecho — te devuelvo el
              <strong className="text-navy-950"> 100% de tu dinero</strong>, sin preguntas y sin burocracia.
            </p>
            <p className="font-sans text-navy-900/45 text-sm italic">
              El único riesgo real es no empezar.
            </p>
          </div>
        </div>

        {/* Supporting trust cues */}
        <div
          className="mt-10 grid grid-cols-3 gap-4 text-center reveal"
          style={{ animationDelay: '0.2s' }}
        >
          {[
            { label: 'Acceso', value: 'Inmediato' },
            { label: 'Garantía', value: '30 días' },
            { label: 'Pago seguro', value: 'Hotmart' },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="rounded-xl py-4 px-2"
              style={{
                background: 'rgba(255,184,0,0.07)',
                border: '1px solid rgba(255,184,0,0.18)',
              }}
            >
              <div className="font-serif font-black text-navy-950 text-base">{value}</div>
              <div className="font-sans text-navy-900/50 text-xs mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
