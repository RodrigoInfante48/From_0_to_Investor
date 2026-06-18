export default function FinalCTA() {
  return (
    <section id="final-cta" className="bg-navy-950 py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-mono text-teal text-xs tracking-[0.2em] mb-6 reveal">// ÚLTIMA PARADA</p>
        <h2
          className="font-serif font-black text-white mb-6 reveal"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', lineHeight: 1.05, animationDelay: '0.08s' }}
        >
          ¿Cuándo<br />vas a{' '}
          <span className="text-gold gold-glow">empezar?</span>
        </h2>
        <p className="font-sans text-slate-ui text-lg mb-4 max-w-xl mx-auto leading-relaxed reveal" style={{ animationDelay: '0.16s' }}>
          Cada mes que pasa sin invertir, la inflación te cobra en silencio.<br />
          La única decisión que cambia el juego: empezar hoy.
        </p>
        <p className="font-mono text-teal text-sm mb-12 reveal" style={{ animationDelay: '0.22s' }}>
          El costo de esperar 1 año = miles en interés compuesto perdido.
        </p>
        <a
          href="#pricing"
          className="magnetic-btn inline-block font-sans font-bold px-12 py-6 rounded-full bg-gold text-navy-950 text-xl md:text-2xl hover:scale-105 transition-transform duration-200 reveal"
          style={{
            animationDelay: '0.28s',
            boxShadow: '0 0 70px rgba(255,184,0,0.5), 0 0 140px rgba(255,184,0,0.2)',
          }}
        >
          Empezar ahora →
        </a>
        <p className="font-sans text-slate-ui/60 text-sm mt-6 reveal" style={{ animationDelay: '0.36s' }}>
          Garantía de 30 días · Acceso inmediato · Precio de lanzamiento
        </p>
      </div>
    </section>
  )
}
