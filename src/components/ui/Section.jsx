export default function Section({ id, children, className = '', ...props }) {
  return (
    <section
      id={id}
      className={`relative w-full py-20 md:py-28 ${className}`}
      {...props}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
