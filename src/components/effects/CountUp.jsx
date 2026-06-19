import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function formatNumber(value, decimals = 0) {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

function useInView(threshold = 0.3) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, inView }
}

/**
 * @param {object} props
 * @param {number} props.to - Target value
 * @param {number} [props.duration=2] - Animation duration in seconds
 * @param {string} [props.prefix=''] - e.g. '$'
 * @param {string} [props.suffix=''] - e.g. '%'
 * @param {number} [props.decimals=0]
 * @param {string} [props.className='']
 */
export default function CountUp({
  to,
  duration = 2,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
}) {
  const [count, setCount] = useState(0)
  const rafRef = useRef(null)
  const reduced = prefersReducedMotion()

  const { ref, inView } = useInView(0.3)

  useEffect(() => {
    if (!inView) return
    if (reduced) { setCount(to); return }

    const start = performance.now()
    const ms = duration * 1000

    function tick(now) {
      const elapsed = now - start
      const progress = Math.min(elapsed / ms, 1)
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(eased * to)
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [inView, to, duration, reduced])

  return (
    <span
      ref={ref}
      className={`font-mono tabular-nums ${className}`}
      aria-label={`${prefix}${to}${suffix}`}
    >
      {prefix}{formatNumber(count, decimals)}{suffix}
    </span>
  )
}
