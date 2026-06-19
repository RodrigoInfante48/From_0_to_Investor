const VARIANTS = {
  primary:
    'bg-[#FFB800] text-[#0B0E1A] font-semibold hover:brightness-110 active:brightness-95',
  ghost:
    'bg-transparent border border-[#00e6c7] text-[#00e6c7] hover:bg-[#00e6c7]/10 active:bg-[#00e6c7]/20',
  glass:
    'bg-white/5 backdrop-blur-md border border-white/10 text-[#F4F0E6] hover:bg-white/10 active:bg-white/5',
}

export default function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e6c7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0E1A] disabled:opacity-50 disabled:pointer-events-none'

  const classes = `${base} ${VARIANTS[variant]} ${className}`

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
