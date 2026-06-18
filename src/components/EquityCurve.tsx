import { useEffect, useRef } from 'react'

const CURVE_PATH = 'M 3,97 C 8,92 12,90 16,87 S 22,82 25,79 C 29,75 30,76 33,72 S 37,66 40,63 C 44,59 45,61 48,57 S 52,50 55,47 C 59,42 60,44 63,40 S 67,33 70,29 C 74,24 75,26 78,22 S 82,15 85,11 C 89,6 91,7 95,4 S 98,2 100,2'

const NODES = [
  { cx: 3, cy: 97, label: 'Hero' },
  { cx: 25, cy: 79, label: 'Problem' },
  { cx: 48, cy: 57, label: 'Solution' },
  { cx: 70, cy: 29, label: 'Pricing' },
  { cx: 100, cy: 2, label: 'CTA' },
]

export default function EquityCurve() {
  const pathRef = useRef<SVGPathElement>(null)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const path = pathRef.current
    const counter = counterRef.current
    if (!path || !counter) return

    const length = path.getTotalLength()

    if (prefersReduced) {
      path.style.strokeDasharray = 'none'
      path.style.strokeDashoffset = '0'
      counter.textContent = '$47,280'
      return
    }

    path.style.strokeDasharray = String(length)
    path.style.strokeDashoffset = String(length)

    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(scrollTop / Math.max(docHeight, 1), 1)
      path.style.strokeDashoffset = String(length * (1 - progress))
      const value = Math.floor(progress * 47280)
      counter.textContent = '$' + value.toLocaleString('en-US')
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div id="equity-counter" ref={counterRef}>$0</div>
      <div className="fixed inset-0 pointer-events-none z-20" style={{ mixBlendMode: 'screen' }}>
        <svg
          viewBox="0 0 103 100"
          preserveAspectRatio="none"
          className="w-full h-full"
          aria-hidden="true"
        >
          <defs>
            <filter id="curve-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="0.6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            ref={pathRef}
            d={CURVE_PATH}
            fill="none"
            stroke="#00e6c7"
            strokeWidth="0.35"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#curve-glow)"
            style={{ transition: 'stroke-dashoffset 0.04s linear' }}
          />
          {NODES.map(({ cx, cy }) => (
            <circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r="0.9"
              fill="#FFB800"
              filter="url(#curve-glow)"
            />
          ))}
        </svg>
      </div>
    </>
  )
}
