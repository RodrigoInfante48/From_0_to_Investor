import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion, revealDefaults, applyFinalState } from '../lib/animations'

gsap.registerPlugin(ScrollTrigger)

/**
 * Animate children of `ref` with a staggered fade+translateY reveal on scroll.
 * Pass `selector` to target specific children (default: direct children).
 * Pass `overrides` to override revealDefaults per call-site.
 */
export function useScrollReveal(ref, { selector = ':scope > *', overrides = {} } = {}) {
  useEffect(() => {
    const container = ref?.current
    if (!container) return

    const targets = container.querySelectorAll(selector)
    if (!targets.length) return

    if (prefersReducedMotion()) {
      applyFinalState(targets)
      return
    }

    const config = { ...revealDefaults, ...overrides }

    // Set initial hidden state
    gsap.set(targets, { y: config.y, opacity: 0 })

    const tween = gsap.to(targets, {
      y: 0,
      opacity: 1,
      duration: config.duration,
      ease: config.ease,
      stagger: config.stagger,
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true,
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [ref, selector, overrides])
}
