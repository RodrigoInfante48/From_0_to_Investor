export default function Card({ children, className = '', ...props }) {
  return (
    <div
      className={[
        'relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6',
        'shadow-[0_0_0_0_transparent] transition-shadow duration-300',
        'hover:border-[#FFB800]/30 hover:shadow-[0_0_20px_2px_rgba(255,184,0,0.08)]',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}
