import { useEffect, useRef } from 'react'

// Viewport coords: x in [0..28], y in [0..100] (top=0, bottom=100)
// The curve starts at bottom-left and rises to top-right with realistic dips
const CURVE_PATH = [
  'M 14,98',
  'C 10,93 6,90 8,86',    // initial pop
  'S 16,82 13,77',         // small dip
  'C 10,72 6,68 9,63',    // recovery
  'S 18,60 15,55',         // consolidation dip
  'C 12,50 7,46 10,41',   // big dip (drawdown)
  'S 20,37 17,31',         // strong rally
  'C 14,26 9,23 11,18',   // minor pullback
  'S 20,14 17,9',          // grind higher
  'C 14,5 11,3 14,2',     // final push
].join(' ')

// Progress thresholds (0–1) where each node sits along the drawn path
const NODES = [
  { cx: 14, cy: 98, threshold: 0.0,  value: 0 },
  { cx: 13, cy: 77, threshold: 0.22, value: 4800 },
  { cx: 15, cy: 55, threshold: 0.42, value: 12300 },
  { cx: 10, cy: 41, threshold: 0.56, value: 19700 },
  { cx: 17, cy: 31, threshold: 0.66, value: 28500 },
  { cx: 11, cy: 18, threshold: 0.80, value: 38900 },
  { cx: 14, cy:  2, threshold: 1.0,  value: 47280 },
]

const TARGET_VALUE = 47280

export default function EquityCurve() {
  const pathRef    = useRef<SVGPathElement>(null)
  const counterRef = useRef<HTMLDivElement>(null)
  const nodeRefs   = useRef<(SVGCircleElement | null)[]>([])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const path    = pathRef.current
    const counter = counterRef.current
    if (!path || !counter) return

    const length = path.getTotalLength()

    const fmt = (v: number) => '$' + Math.floor(v).toLocaleString('en-US')

    if (prefersReduced) {
      path.style.strokeDasharray  = 'none'
      path.style.strokeDashoffset = '0'
      counter.textContent = fmt(TARGET_VALUE)
      nodeRefs.current.forEach(n => {
        if (n) { n.setAttribute('fill', '#FFB800'); n.setAttribute('r', '1.2') }
      })
      return
    }

    path.style.strokeDasharray  = String(length)
    path.style.strokeDashoffset = String(length)

    // counter animation state
    let displayedValue = 0
    let rafId = 0

    const onScroll = () => {
      const scrollTop  = window.scrollY
      const docHeight  = document.documentElement.scrollHeight - window.innerHeight
      const progress   = Math.min(scrollTop / Math.max(docHeight, 1), 1)

      // draw curve
      path.style.strokeDashoffset = String(length * (1 - progress))

      // animate counter
      // find target value based on progress between node thresholds
      let targetValue = 0
      for (let i = 0; i < NODES.length - 1; i++) {
        const a = NODES[i], b = NODES[i + 1]
        if (progress >= a.threshold && progress <= b.threshold) {
          const t = (progress - a.threshold) / (b.threshold - a.threshold)
          targetValue = a.value + t * (b.value - a.value)
          break
        }
      }
      if (progress >= 1) targetValue = TARGET_VALUE

      cancelAnimationFrame(rafId)
      const animate = () => {
        const diff = targetValue - displayedValue
        if (Math.abs(diff) < 1) {
          displayedValue = targetValue
          counter.textContent = fmt(displayedValue)
          return
        }
        displayedValue += diff * 0.14
        counter.textContent = fmt(displayedValue)
        rafId = requestAnimationFrame(animate)
      }
      rafId = requestAnimationFrame(animate)

      // light up nodes
      nodeRefs.current.forEach((n, i) => {
        if (!n) return
        const active = progress >= NODES[i].threshold
        n.setAttribute('fill', active ? '#FFB800' : '#1a1a2e')
        n.setAttribute('r',    active ? '1.3'     : '0.9')
        n.style.filter = active ? 'url(#node-glow)' : 'url(#curve-glow)'
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      {/* Counter — hidden on mobile alongside the rail */}
      <div
        ref={counterRef}
        aria-hidden="true"
        className="equity-curve-rail"
        style={{
          position:   'fixed',
          top:        '50%',
          left:       '0.6rem',
          transform:  'translateY(-50%) rotate(-90deg)',
          transformOrigin: 'center center',
          fontFamily: '"Space Mono", monospace',
          fontSize:   '0.6rem',
          letterSpacing: '0.08em',
          color:      '#FFB800',
          pointerEvents: 'none',
          zIndex:     30,
          whiteSpace: 'nowrap',
          textShadow: '0 0 8px rgba(255,184,0,0.7)',
        }}
      >
        $0
      </div>

      {/* SVG rail — left side strip, hidden on mobile to avoid overlap */}
      <div
        aria-hidden="true"
        className="equity-curve-rail"
        style={{
          position:      'fixed',
          top:           0,
          left:          0,
          width:         '28px',
          height:        '100%',
          pointerEvents: 'none',
          zIndex:        20,
        }}
      >
        <svg
          viewBox="0 0 28 100"
          preserveAspectRatio="none"
          width="28"
          height="100%"
          aria-hidden="true"
        >
          <defs>
            <filter id="curve-glow" x="-60%" y="-20%" width="220%" height="140%">
              <feGaussianBlur stdDeviation="0.7" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="node-glow" x="-120%" y="-120%" width="340%" height="340%">
              <feGaussianBlur stdDeviation="1.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* faint track */}
          <path
            d={CURVE_PATH}
            fill="none"
            stroke="#00e6c7"
            strokeWidth="0.25"
            strokeOpacity="0.15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* animated draw */}
          <path
            ref={pathRef}
            d={CURVE_PATH}
            fill="none"
            stroke="#00e6c7"
            strokeWidth="0.45"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#curve-glow)"
            style={{ transition: 'stroke-dashoffset 0.05s linear' }}
          />

          {/* nodes */}
          {NODES.map(({ cx, cy }, i) => (
            <circle
              key={i}
              ref={el => { nodeRefs.current[i] = el }}
              cx={cx}
              cy={cy}
              r="0.9"
              fill="#1a1a2e"
              stroke="#00e6c7"
              strokeWidth="0.25"
              filter="url(#curve-glow)"
              style={{ transition: 'fill 0.3s, r 0.3s' }}
            />
          ))}
        </svg>
      </div>
    </>
  )
}
