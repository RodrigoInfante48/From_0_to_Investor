import MagneticButton from '../effects/MagneticButton'
import { CHECKOUT_URL } from '../../lib/constants'

const LEGAL_LINKS = [
  { label: 'Privacidad', href: '#' },
  { label: 'Términos', href: '#' },
  { label: 'Contacto', href: '#' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 border-t border-white/5 pt-20 pb-10 px-6">
      {/* Final CTA block */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="font-mono text-teal text-xs uppercase tracking-widest mb-4">
          Tu portafolio empieza hoy
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
          De <span className="text-gold">$0</span> a inversor.<br />Sin excusas.
        </h2>
        <MagneticButton strength={0.35}>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn inline-block font-sans font-bold text-base px-8 py-4 rounded-full bg-teal text-navy-950 hover:brightness-110 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
            style={{ boxShadow: '0 0 32px rgba(0,230,199,0.35)' }}
          >
            Acceder ahora →
          </a>
        </MagneticButton>
      </div>

      {/* Divider */}
      <div className="max-w-5xl mx-auto border-t border-white/5 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Brand */}
          <div>
            <div className="font-serif font-black text-xl text-white">DDI</div>
            <div className="font-sans text-xs text-slate-ui">Daily Duty Institute</div>
          </div>

          {/* Copyright */}
          <p className="font-sans text-slate-ui text-xs">
            © {year} Daily Duty Institute · Todos los derechos reservados
          </p>

          {/* Legal links */}
          <nav aria-label="Links legales">
            <ul className="flex gap-6">
              {LEGAL_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-sans text-slate-ui text-xs hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
