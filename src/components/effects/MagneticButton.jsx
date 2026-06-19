import { useRef, useCallback } from 'react'
import { gsap } from 'gsap'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Wraps its child and pulls it toward the cursor on desktop.
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {number} [props.strength=0.4] - 0–1, how far the element shifts
 * @param {string} [props.className='']
 */
export default function MagneticButton({ children, strength = 0.4, className = '' }) {
  const elRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    if (prefersReducedMotion()) return
    // skip on touch-primary devices
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const el = elRef.current
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) * strength
    const dy = (e.clientY - cy) * strength

    gsap.to(el, { x: dx, y: dy, duration: 0.4, ease: 'power2.out' })
  }, [strength])

  const handleMouseLeave = useCallback(() => {
    gsap.to(elRef.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })
  }, [])

  return (
    <div
      ref={elRef}
      className={`inline-block ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
