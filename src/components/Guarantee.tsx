export default function Guarantee() {
  return (
    <section id="guarantee" className="bg-navy-900 py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div
          className="w-24 h-24 rounded-full border-4 border-gold flex items-center justify-center mx-auto mb-8 reveal"
          style={{ boxShadow: '0 0 30px rgba(255,184,0,0.2)' }}
        >
          <span className="text-4xl" role="img" aria-label="Escudo">🛡️</span>
        </div>
        <h2 className="font-serif font-black text-4xl md:text-5xl text-white mb-6 reveal" style={{ animationDelay: '0.08s' }}>
          Garantía de <span className="text-gold">30 días</span>
        </h2>
        <p className="font-sans text-slate-ui text-lg leading-relaxed max-w-xl mx-auto reveal" style={{ animationDelay: '0.16s' }}>
          Si en 30 días aplicas el sistema y no tienes claridad total sobre cómo empezar a invertir, te devuelvo el 100% de tu dinero. Sin preguntas. Sin burocracia.
        </p>
        <p className="font-sans text-white/40 text-sm mt-6 reveal" style={{ animationDelay: '0.24s' }}>
          El único riesgo real es no empezar.
        </p>
      </div>
    </section>
  )
}
