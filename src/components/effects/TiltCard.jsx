import { useRef, useCallback } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Applies subtle 3-D tilt following the mouse, resets on leave.
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {number} [props.maxTilt=12] - Max degrees of rotation
 * @param {number} [props.scale=1.02]
 * @param {string} [props.className='']
 */
export default function TiltCard({ children, maxTilt = 12, scale = 1.02, className = '' }) {
  const cardRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    if (prefersReducedMotion()) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width   // 0–1
    const y = (e.clientY - rect.top)  / rect.height  // 0–1

    const rotateX = (0.5 - y) * maxTilt * 2   // positive = top tilts toward viewer
    const rotateY = (x - 0.5) * maxTilt * 2

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale},${scale},${scale})`
    card.style.transition = 'transform 0.1s ease-out'
  }, [maxTilt, scale])

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
    card.style.transition = 'transform 0.5s ease-out'
  }, [])

  return (
    <div
      ref={cardRef}
      className={`will-change-transform ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
