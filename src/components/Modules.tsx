import { useEffect, useRef } from 'react'

const MODULES = [
  { n: '01', title: 'Mentalidad del Inversionista', desc: 'Reprograma tu relación con el dinero. Destruye los mitos que te frenan y construye la base mental para invertir con disciplina y largo plazo.' },
  { n: '02', title: 'Cómo Funciona el Dinero', desc: 'Entiende el juego antes de jugarlo. Inflación, interés compuesto, liquidez — las reglas que mueven todos los mercados y que nadie te enseñó.' },
  { n: '03', title: 'Instrumentos de Inversión', desc: 'Acciones, ETFs, bonos, fondos de índice. Conoce cada vehículo, cuándo usarlo y por qué los índices son tu mejor aliado al principio.' },
  { n: '04', title: 'Construye tu Portafolio', desc: 'De la teoría a la práctica. Abre tu cuenta, elige tus activos y ejecuta tu primera inversión real en menos de una hora.' },
  { n: '05', title: 'Gestión del Riesgo', desc: 'El dinero perdido no se recupera fácil. Aprende a diversificar, a no vender en pánico y a proteger lo que construyes.' },
  { n: '06', title: 'Automatiza tu Riqueza', desc: 'Invierte en piloto automático. Configura aportes recurrentes y deja que el tiempo y el interés compuesto hagan el trabajo pesado.' },
]

interface TiltCardProps {
  mod: typeof MODULES[0]
  delay: number
}

function TiltCard({ mod, delay }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14
      el.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg) scale(1.03)`
    }
    const handleLeave = () => {
      el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)'
    }
    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)
    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="glass-card rounded-2xl p-6 reveal cursor-default"
      style={{
        animationDelay: `${delay}s`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.2s ease',
      }}
    >
      <div className="font-mono text-gold text-sm font-bold mb-3">{mod.n}</div>
      <h3 className="font-serif font-bold text-white text-lg mb-3">{mod.title}</h3>
      <p className="font-sans text-slate-ui text-sm leading-relaxed">{mod.desc}</p>
    </div>
  )
}

export default function Modules() {
  return (
    <section id="modules" className="bg-navy-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-teal text-xs tracking-[0.2em] mb-4 reveal">// QUÉ INCLUYE</p>
        <h2 className="font-serif font-black text-4xl md:text-6xl text-white mb-4 reveal" style={{ animationDelay: '0.08s' }}>
          6 módulos. <span className="text-gold">Un sistema.</span>
        </h2>
        <p className="font-sans text-slate-ui text-lg mb-14 max-w-2xl reveal" style={{ animationDelay: '0.16s' }}>
          Cada módulo construye sobre el anterior. No es una colección de temas — es una secuencia diseñada para llevarte de cero a actuar.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MODULES.map((m, i) => (
            <TiltCard key={m.n} mod={m} delay={i * 0.07 + 0.24} />
          ))}
        </div>
      </div>
    </section>
  )
}
