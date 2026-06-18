const CHECKLIST = [
  'Empieza desde $0, sin experiencia previa',
  'Sistema probado y replicable en LATAM',
  'Lenguaje claro, cero jerga financiera',
  'Acceso inmediato y de por vida',
  'Actualizaciones incluidas sin costo extra',
]

export default function Solution() {
  return (
    <section id="solution" className="bg-navy-900 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-teal text-xs tracking-[0.2em] mb-4 reveal">// LA SOLUCIÓN</p>
        <h2 className="font-serif font-black text-4xl md:text-6xl text-white mb-6 leading-tight reveal" style={{ animationDelay: '0.08s' }}>
          Tu hoja de ruta:<br />
          <span className="text-gold">de $0 a tu primer portafolio.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 mt-12 items-start">
          <div className="reveal" style={{ animationDelay: '0.16s' }}>
            <p className="font-sans text-slate-ui text-lg leading-relaxed mb-5">
              <strong className="text-white">From $0 to Investor</strong> es la guía práctica que construye el puente entre donde estás hoy y donde quieres estar financieramente.
            </p>
            <p className="font-sans text-slate-ui leading-relaxed mb-5">
              No teoría. No filosofía. Un sistema paso a paso que te lleva desde entender qué es el dinero hasta construir y automatizar tu primer portafolio real.
            </p>
            <p className="font-sans text-slate-ui leading-relaxed">
              Creada por Rod de Daily Duty Institute para quienes están hartos de posponer y listos para actuar.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8 reveal" style={{ animationDelay: '0.24s' }}>
            <p className="font-mono text-teal text-xs tracking-widest mb-5">INCLUYE</p>
            {CHECKLIST.map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0">
                <span className="text-teal font-bold flex-shrink-0">✓</span>
                <span className="font-sans text-white/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
