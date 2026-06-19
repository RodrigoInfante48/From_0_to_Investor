import { useEffect, useRef } from 'react'

function generateCandles(count) {
  const candles = []
  let price = 100
  for (let i = 0; i < count; i++) {
    const open = price
    const move = (Math.random() - 0.48) * 6
    const close = open + move
    const high = Math.max(open, close) + Math.random() * 4
    const low  = Math.min(open, close) - Math.random() * 4
    candles.push({ open, close, high, low })
    price = close
  }
  return candles
}

/**
 * Lightweight canvas background with semi-transparent candlesticks.
 * Purely decorative — aria-hidden.
 */
export default function CandlestickBg({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    function resize() {
      canvas.width  = canvas.offsetWidth  * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      draw()
    }

    function draw() {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      const candleCount = Math.floor(w / 18)
      const candles = generateCandles(candleCount)

      // price range
      const prices = candles.flatMap(c => [c.high, c.low])
      const minP = Math.min(...prices)
      const maxP = Math.max(...prices)
      const range = maxP - minP || 1

      const candleW = (w / candleCount) * 0.55
      const padding = 24

      candles.forEach((c, i) => {
        const x = (i / candleCount) * w + (w / candleCount) / 2
        const toY = (p) => padding + (1 - (p - minP) / range) * (h - padding * 2)

        const openY  = toY(c.open)
        const closeY = toY(c.close)
        const highY  = toY(c.high)
        const lowY   = toY(c.low)
        const bullish = c.close >= c.open

        const color = bullish ? 'rgba(0, 230, 199, 0.18)' : 'rgba(255, 80, 80, 0.14)'

        ctx.strokeStyle = color
        ctx.lineWidth = 1

        // wick
        ctx.beginPath()
        ctx.moveTo(x, highY)
        ctx.lineTo(x, lowY)
        ctx.stroke()

        // body
        const bodyTop    = Math.min(openY, closeY)
        const bodyHeight = Math.max(Math.abs(closeY - openY), 1)

        ctx.fillStyle = color
        ctx.fillRect(x - candleW / 2, bodyTop, candleW, bodyHeight)
        ctx.strokeRect(x - candleW / 2, bodyTop, candleW, bodyHeight)
      })
    }

    if (reduced) {
      resize()
      return
    }

    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  )
}
