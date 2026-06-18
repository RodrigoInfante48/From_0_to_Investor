const ITEMS = [
  'DDI +12.4%', 'INVERSIÓN +87.3%', 'RIQUEZA +∞%', 'PORTAFOLIO $0→$47,280',
  'MERCADOS +5.2%', 'EDUCACIÓN +100%', 'LIBERTAD FINANCIERA ↑', 'DIVIDENDOS +3.8%',
  'S&P 500 +24.1%', 'BITCOIN +156%', 'ÍNDICES +18.7%', 'AHORRO INTELIGENTE ✓',
]

export default function TickerBar() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-navy-900 border-b border-gold/20 h-8 overflow-hidden flex items-center">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="font-mono text-xs text-teal px-6 whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
