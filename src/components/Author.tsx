export default function Author() {
  return (
    <section id="author" className="bg-ivory py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center md:justify-start reveal">
          <div
            className="w-44 h-44 md:w-52 md:h-52 rounded-full border-4 border-gold flex items-center justify-center flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #0B0E1A 100%)', boxShadow: '0 0 40px rgba(255,184,0,0.2)' }}
          >
            <span className="font-serif font-black text-7xl text-gold">R</span>
          </div>
        </div>
        <div>
          <p className="font-mono text-gold-soft text-xs tracking-[0.2em] mb-4 reveal">// EL AUTOR</p>
          <h2 className="font-serif font-black text-4xl text-navy-950 mb-1 reveal" style={{ animationDelay: '0.08s' }}>
            Rodrigo (Rod)
          </h2>
          <p className="font-sans text-gold-soft font-semibold mb-6 reveal" style={{ animationDelay: '0.12s' }}>
            Fundador · Daily Duty Institute
          </p>
          {[
            'Empecé desde cero — sin conocimiento financiero, sin contactos en el mundo de las inversiones y sin un gran capital.',
            'Después de años aprendiendo, equivocándome y simplificando, construí un sistema que funciona. Hoy quiero que tú lo tengas desde el día 1.',
            'DDI nació para democratizar la educación financiera en LATAM. Esta guía es el punto de partida para miles de personas que merecen un futuro diferente.',
          ].map((text, i) => (
            <p key={i} className="font-sans text-navy-900/65 leading-relaxed mb-4 reveal" style={{ animationDelay: `${i * 0.08 + 0.2}s` }}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
