const BENEFITS = [
  {
    icon: '📈',
    title: 'Tu primer portafolio activo',
    body: 'Al terminar la guía no solo sabrás — tendrás. Una cuenta abierta, activos seleccionados y tu primera compra ejecutada.',
  },
  {
    icon: '🧠',
    title: 'Claridad total sobre el dinero',
    body: 'Por fin entenderás cómo funciona el juego. Inflación, interés compuesto, riesgo — y cómo usarlos a tu favor desde hoy.',
  },
  {
    icon: '⚡',
    title: 'Inversión en piloto automático',
    body: 'Configurarás un sistema que invierte por ti cada mes, sin que tengas que pensar en ello. El tiempo hace el trabajo.',
  },
  {
    icon: '🛡️',
    title: 'Decisiones sin pánico',
    body: 'Cuando el mercado caiga (y caerá) sabrás exactamente qué hacer. Sin vender, sin perder la cabeza, sin arrepentirte.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="bg-navy-900 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-teal text-xs tracking-[0.2em] mb-4 reveal">// LO QUE VAS A LOGRAR</p>
        <h2 className="font-serif font-black text-4xl md:text-6xl text-white mb-16 reveal" style={{ animationDelay: '0.08s' }}>
          La transformación<br /><span className="text-gold">que esperas.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {BENEFITS.map((b, i) => (
            <div key={b.title} className="flex gap-5 reveal" style={{ animationDelay: `${i * 0.1 + 0.16}s` }}>
              <div className="text-4xl flex-shrink-0 mt-1" role="img" aria-label="">{b.icon}</div>
              <div>
                <h3 className="font-serif font-bold text-white text-xl mb-2">{b.title}</h3>
                <p className="font-sans text-slate-ui leading-relaxed text-sm">{b.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
