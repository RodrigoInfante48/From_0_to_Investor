import { useState } from 'react'

const FAQS = [
  {
    q: '¿Necesito dinero para empezar?',
    a: 'No necesitas un capital mínimo para acceder a la guía. En el módulo 4, aprenderás cómo empezar con cualquier cantidad — incluso $10 o $20 al mes.',
  },
  {
    q: '¿Funciona en mi país?',
    a: 'Sí. La guía está diseñada para ser aplicable en cualquier país de LATAM. Los principios son universales y las plataformas recomendadas operan en la región.',
  },
  {
    q: '¿Qué tan rápido veo resultados?',
    a: 'Al terminar los 6 módulos (que puedes completar en un fin de semana) tendrás tu primer portafolio activo. Los resultados financieros dependen del tiempo en el mercado — empezar hoy es el primer resultado.',
  },
  {
    q: '¿Necesito saber de finanzas?',
    a: 'Cero. Comenzamos desde lo más básico: qué es el dinero, cómo funciona, por qué la inflación te afecta. Si ya tienes algo de conocimiento, los módulos avanzados te dan el sistema que faltaba.',
  },
  {
    q: '¿Cómo accedo después de comprar?',
    a: 'Acceso inmediato vía Hotmart. Recibirás tus credenciales en tu correo y podrás entrar desde cualquier dispositivo, en cualquier momento, sin límite de tiempo.',
  },
  {
    q: '¿Y si no me gusta?',
    a: '30 días de garantía completa. Si no quedas satisfecho por cualquier razón, escríbenos y te devolvemos el 100% de tu inversión sin preguntas ni complicaciones.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-ivory py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-gold-soft text-xs tracking-[0.2em] mb-4 reveal">// PREGUNTAS FRECUENTES</p>
        <h2 className="font-serif font-black text-4xl text-navy-950 mb-12 reveal" style={{ animationDelay: '0.08s' }}>
          Tus dudas,<br /><span className="text-gold-soft">respondidas.</span>
        </h2>
        <div className="space-y-2">
          {FAQS.map((f, i) => (
            <div
              key={i}
              className="border border-navy-900/10 rounded-xl overflow-hidden reveal"
              style={{ animationDelay: `${i * 0.05 + 0.16}s` }}
            >
              <button
                className="w-full text-left px-6 py-4 font-sans font-semibold text-navy-950 flex justify-between items-center hover:bg-navy-900/5 transition-colors duration-150"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{f.q}</span>
                <span className="text-gold-soft text-2xl ml-4 flex-shrink-0 font-light leading-none">
                  {open === i ? '−' : '+'}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 font-sans text-navy-900/65 text-sm leading-relaxed">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
