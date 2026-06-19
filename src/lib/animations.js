import { gsap } from 'gsap'

export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Easings
export const ease = {
  smooth: 'power2.out',
  snappy: 'power3.out',
  elastic: 'back.out(1.4)',
  curve: 'power1.inOut',
}

// Durations (seconds)
export const duration = {
  fast: 0.35,
  base: 0.6,
  slow: 0.9,
}

// Default reveal config
export const revealDefaults = {
  y: 40,
  opacity: 0,
  duration: duration.base,
  ease: ease.smooth,
  stagger: 0.12,
}

// Apply final state without animating (reduced-motion)
export function applyFinalState(targets) {
  gsap.set(targets, { y: 0, opacity: 1, clearProps: 'transform,opacity' })
}
