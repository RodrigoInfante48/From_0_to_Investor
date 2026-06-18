const PAINS = [
  {
    n: '01',
    title: 'La inflación te roba en silencio',
    body: 'Cada año que el dinero duerme en tu cuenta corriente pierde poder adquisitivo. La inflación es el impuesto que nadie te enseñó a esquivar.',
  },
  {
    n: '02',
    title: 'Esperar el "momento correcto"',
    body: 'El mejor momento para invertir fue hace 10 años. El segundo mejor es hoy. Cada mes de espera tiene un costo real y compuesto que casi nadie calcula.',
  },
  {
    n: '03',
    title: 'No saber por dónde empezar',
    body: 'El mercado parece un casino para insiders con MBA. Nadie te enseñó esto en la escuela y la mayoría de los consejos online te confunden más que te ayudan.',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="bg-ivory py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-gold-soft text-xs tracking-[0.2em] mb-4 reveal">// EL PROBLEMA</p>
        <h2 className="font-serif font-black text-4xl md:text-6xl text-navy-950 mb-6 leading-tight reveal" style={{ animationDelay: '0.08s' }}>
          El dinero que no inviertes...<br />
          <span className="text-gold-soft">lo pierde la inflación.</span>
        </h2>
        <p className="font-sans text-navy-900/60 text-lg mb-16 max-w-2xl reveal" style={{ animationDelay: '0.16s' }}>
          No es falta de dinero. Es falta de sistema. Estos son los tres errores que mantienen a la mayoría en $0 para siempre.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {PAINS.map((p, i) => (
            <div key={p.n} className="reveal" style={{ animationDelay: `${0.1 * i + 0.24}s` }}>
              <div className="font-serif font-black text-7xl text-gold/25 mb-4 leading-none">{p.n}</div>
              <h3 className="font-serif font-bold text-xl text-navy-950 mb-3">{p.title}</h3>
              <p className="font-sans text-navy-900/60 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
