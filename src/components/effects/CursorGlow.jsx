import { useEffect, useRef } from 'react'

/**
 * Teal halo that follows the cursor on desktop.
 * Skipped entirely on touch devices and prefers-reduced-motion.
 */
export default function CursorGlow({ size = 320, opacity = 0.12 }) {
  const glowRef = useRef(null)

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hasHover =
      typeof window !== 'undefined' &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches

    if (reduced || !hasHover) return

    const el = glowRef.current
    if (!el) return

    let raf
    let tx = -999, ty = -999
    let cx = -999, cy = -999

    const onMove = (e) => { tx = e.clientX; ty = e.clientY }
    window.addEventListener('mousemove', onMove, { passive: true })

    function loop() {
      // smooth lerp
      cx += (tx - cx) * 0.1
      cy += (ty - cy) * 0.1
      el.style.transform = `translate(${cx - size / 2}px, ${cy - size / 2}px)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [size])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle, rgba(0,230,199,${opacity}) 0%, transparent 70%)`,
        willChange: 'transform',
      }}
    />
  )
}
