const TESTIMONIALS = [
  {
    name: 'María G.',
    location: 'México',
    text: 'Llevaba años queriendo invertir pero no sabía cómo empezar. En dos semanas ya tenía mi primer ETF. La claridad de Rod es incomparable.',
    stars: 5,
  },
  {
    name: 'Carlos P.',
    location: 'Colombia',
    text: 'Pensé que necesitaba mucho dinero para invertir. Esta guía me mostró que podía empezar con lo que tenía. Llevo 8 meses invirtiendo y no paro.',
    stars: 5,
  },
  {
    name: 'Ana L.',
    location: 'Argentina',
    text: 'Lo mejor fue entender el interés compuesto de verdad. Ya no veo el dinero igual. La guía cambia la perspectiva por completo.',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-navy-950 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-teal text-xs tracking-[0.2em] mb-4 reveal">// TESTIMONIOS</p>
        <h2 className="font-serif font-black text-4xl md:text-5xl text-white mb-16 reveal" style={{ animationDelay: '0.08s' }}>
          Ellos ya<br /><span className="text-gold">empezaron.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="glass-card rounded-2xl p-6 flex flex-col reveal"
              style={{ animationDelay: `${i * 0.1 + 0.16}s` }}
            >
              <div className="flex mb-4">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <span key={s} className="text-gold text-sm">★</span>
                ))}
              </div>
              <p className="font-sans text-white/75 text-sm leading-relaxed italic flex-1 mb-5">
                "{t.text}"
              </p>
              <div>
                <div className="font-serif font-bold text-white">{t.name}</div>
                <div className="font-mono text-teal text-xs mt-0.5">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
