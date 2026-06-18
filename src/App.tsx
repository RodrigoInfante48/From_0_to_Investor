import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

import CursorGlow from './components/CursorGlow'
import EquityCurve from './components/EquityCurve'
import TickerBar from './components/TickerBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Modules from './components/Modules'
import Benefits from './components/Benefits'
import Author from './components/Author'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Guarantee from './components/Guarantee'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Lenis smooth scroll
    let lenis: Lenis | null = null
    if (!prefersReduced) {
      lenis = new Lenis({ lerp: 0.09 })
      const raf = (time: number) => {
        lenis?.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    }

    // Scroll reveal via IntersectionObserver
    const reveals = document.querySelectorAll<HTMLElement>('.reveal')
    if (prefersReduced) {
      reveals.forEach(el => el.classList.add('visible'))
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement
              const delay = parseFloat(el.style.animationDelay || '0') * 1000
              setTimeout(() => el.classList.add('visible'), delay)
              observer.unobserve(el)
            }
          })
        },
        { threshold: 0.12 }
      )
      reveals.forEach(el => observer.observe(el))
    }

    // Magnetic buttons
    type MagHandler = { el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }
    const handlers: MagHandler[] = []
    if (!prefersReduced) {
      document.querySelectorAll<HTMLElement>('.magnetic-btn').forEach(btn => {
        const move = (e: MouseEvent) => {
          const rect = btn.getBoundingClientRect()
          const dx = e.clientX - (rect.left + rect.width / 2)
          const dy = e.clientY - (rect.top + rect.height / 2)
          btn.style.transform = `translate(${dx * 0.14}px, ${dy * 0.14}px) scale(1.05)`
        }
        const leave = () => { btn.style.transform = '' }
        btn.addEventListener('mousemove', move)
        btn.addEventListener('mouseleave', leave)
        handlers.push({ el: btn, move, leave })
      })
    }

    return () => {
      lenis?.destroy()
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener('mousemove', move)
        el.removeEventListener('mouseleave', leave)
      })
    }
  }, [])

  return (
    <>
      <CursorGlow />
      <EquityCurve />
      <TickerBar />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Modules />
        <Benefits />
        <Author />
        <Testimonials />
        <Pricing />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
