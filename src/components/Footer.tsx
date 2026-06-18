export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/5 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div>
          <div className="font-serif font-black text-xl text-white">DDI</div>
          <div className="font-sans text-xs text-slate-ui">Daily Duty Institute</div>
        </div>
        <p className="font-sans text-slate-ui text-sm">
          © 2025 Daily Duty Institute · Todos los derechos reservados
        </p>
        <div className="flex gap-6">
          {['Privacidad', 'Términos', 'Contacto'].map((link) => (
            <a
              key={link}
              href="#"
              className="font-sans text-slate-ui text-xs hover:text-white transition-colors duration-150"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
