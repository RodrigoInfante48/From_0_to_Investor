export default function Navbar() {
  return (
    <nav className="fixed top-8 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-4">
      <div className="flex items-center gap-2">
        <span className="font-serif text-xl font-black text-white">DDI</span>
        <span className="font-mono text-teal text-sm">|</span>
        <span className="font-sans text-sm text-slate-ui hidden sm:block">Daily Duty Institute</span>
      </div>
      <a
        href="#pricing"
        className="font-sans text-sm font-semibold px-5 py-2.5 rounded-full bg-gold text-navy-950 hover:scale-105 transition-transform duration-200"
        style={{ boxShadow: '0 0 20px rgba(255,184,0,0.3)' }}
      >
        Quiero empezar →
      </a>
    </nav>
  )
}
