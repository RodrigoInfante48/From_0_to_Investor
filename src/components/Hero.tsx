import { useEffect, useRef } from 'react'

function CandlestickCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const draw = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const count = 28
      const w = canvas.width / count
      for (let i = 0; i < count; i++) {
        const x = i * w + w * 0.25
        const bodyH = 15 + Math.random() * 55
        const y = 80 + Math.random() * (canvas.height - 180)
        const isGreen = Math.random() > 0.38
        ctx.fillStyle = isGreen ? 'rgba(255,184,0,0.06)' : 'rgba(255,70,70,0.04)'
        ctx.fillRect(x, y, w * 0.55, bodyH)
        ctx.strokeStyle = isGreen ? 'rgba(255,184,0,0.09)' : 'rgba(255,70,70,0.06)'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(x + w * 0.275, y - 8 - Math.random() * 18)
        ctx.lineTo(x + w * 0.275, y + bodyH + 8 + Math.random() * 18)
        ctx.stroke()
      }
    }

    draw()
    const ro = new ResizeObserver(draw)
    ro.observe(canvas)
    return () => ro.disconnect()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  )
}

const STATS = [
  ['$0', 'Inversión inicial requerida'],
  ['+47K', 'Portafolio posible en 5 años'],
  ['6', 'Módulos de acción'],
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center mesh-bg overflow-hidden">
      <CandlestickCanvas />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-950/70 pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-32 pb-20">
        <p className="font-mono text-teal text-xs md:text-sm mb-6 tracking-[0.2em] reveal">
          // LA GUÍA DEFINITIVA · DAILY DUTY INSTITUTE
        </p>

        <h1 className="font-serif font-black leading-none mb-8">
          <span className="reveal block text-5xl md:text-7xl lg:text-8xl text-white">De</span>
          <span className="reveal block text-[5.5rem] md:text-[9rem] lg:text-[12rem] text-gold gold-glow leading-none" style={{ animationDelay: '0.08s' }}>
            $0
          </span>
          <span className="reveal block text-4xl md:text-6xl lg:text-7xl text-white mt-2" style={{ animationDelay: '0.16s' }}>
            a Inversionista
          </span>
        </h1>

        <p className="font-sans text-slate-ui text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed reveal" style={{ animationDelay: '0.24s' }}>
          La hoja de ruta paso a paso para empezar a invertir desde cero,<br className="hidden md:block" /> sin jerga y sin excusas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center reveal" style={{ animationDelay: '0.32s' }}>
          <a
            href="#pricing"
            className="magnetic-btn font-sans font-bold px-8 py-4 rounded-full bg-teal text-navy-950 text-lg hover:scale-105 transition-transform duration-200 teal-glow-box"
          >
            Quiero empezar →
          </a>
          <a
            href="#modules"
            className="font-sans font-semibold px-8 py-4 rounded-full border border-white/20 text-white hover:border-gold/50 hover:text-gold transition-colors duration-200"
          >
            Ver qué incluye ↓
          </a>
        </div>

        <div className="mt-20 flex justify-center gap-8 md:gap-16 reveal" style={{ animationDelay: '0.4s' }}>
          {STATS.map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="font-serif font-black text-2xl md:text-3xl text-gold">{n}</div>
              <div className="font-sans text-xs text-slate-ui mt-1 max-w-[100px]">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
