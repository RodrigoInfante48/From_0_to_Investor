import { useRef } from 'react'

const DEFAULT_TICKERS = [
  { symbol: 'S&P 500', value: '+18.4%', up: true },
  { symbol: 'NASDAQ', value: '+24.1%', up: true },
  { symbol: 'BTC', value: '+62.3%', up: true },
  { symbol: 'ETH', value: '+38.7%', up: true },
  { symbol: 'GOLD', value: '+11.2%', up: true },
  { symbol: 'APPLE', value: '+27.5%', up: true },
  { symbol: 'NVIDIA', value: '+89.6%', up: true },
  { symbol: 'DOW', value: '+12.8%', up: true },
  { symbol: 'USD/EUR', value: '-2.1%', up: false },
  { symbol: 'OIL', value: '-4.3%', up: false },
]

/**
 * Infinite horizontal ticker bar with financial symbols.
 * Pauses on hover. Respects prefers-reduced-motion.
 * @param {object} props
 * @param {Array}  [props.tickers]
 * @param {number} [props.speed=40] - seconds for one full scroll
 * @param {string} [props.className='']
 */
export default function TickerBar({ tickers = DEFAULT_TICKERS, speed = 40, className = '' }) {
  const trackRef = useRef(null)

  const handleMouseEnter = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'paused'
  }
  const handleMouseLeave = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'running'
  }

  // Duplicate items to create seamless loop
  const items = [...tickers, ...tickers]

  return (
    <div
      className={`overflow-hidden border-y border-white/10 bg-navy-950/80 backdrop-blur-sm py-2 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
    >
      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track { animation-play-state: paused !important; }
        }
      `}</style>
      <div
        ref={trackRef}
        className="ticker-track flex gap-0 whitespace-nowrap"
        style={{
          animation: `ticker-scroll ${speed}s linear infinite`,
          width: 'max-content',
        }}
      >
        {items.map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 px-6 font-mono text-sm"
          >
            <span className="text-[#8A93A8]">{t.symbol}</span>
            <span className={t.up ? 'text-emerald-400' : 'text-red-400'}>
              {t.up ? '▲' : '▼'} {t.value}
            </span>
            <span className="text-white/20 ml-4">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
