import { useEffect } from 'react'
import { useLenis } from './hooks/useLenis'

import CursorGlow from './components/CursorGlow'
import EquityCurve from './components/EquityCurve'
import TickerBar from './components/TickerBar'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Problem from './components/sections/Problem'
import Solution from './components/sections/Solution'
import Modules from './components/sections/Modules'
import Benefits from './components/Benefits'
import Author from './components/Author'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Guarantee from './components/Guarantee'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/layout/Footer'

export default function App() {
  useLenis()

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

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
