import { useState, useRef, useEffect } from 'react'
import { FAQ as FAQ_DATA } from '../lib/constants'

type FAQItem = { id: number; question: string; answer: string }

function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FAQItem
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const panelRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const el = panelRef.current
    if (!el) return
    setHeight(isOpen ? el.scrollHeight : 0)
  }, [isOpen])

  const btnId = `faq-btn-${item.id}`
  const panelId = `faq-panel-${item.id}`

  return (
    <div
      className="border border-navy-900/10 rounded-xl overflow-hidden reveal"
      style={{ animationDelay: `${index * 0.05 + 0.16}s` }}
    >
      <h3>
        <button
          id={btnId}
          className="w-full text-left px-6 py-4 font-sans font-semibold text-navy-950 flex justify-between items-center gap-4 hover:bg-navy-900/5 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-soft"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span>{item.question}</span>
          <span
            className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300"
            style={{
              background: isOpen ? 'rgba(224,168,46,0.15)' : 'rgba(26,26,46,0.06)',
              transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
              color: isOpen ? '#E0A82E' : '#8A93A8',
              fontSize: '1.25rem',
              lineHeight: 1,
            }}
            aria-hidden="true"
          >
            +
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        ref={panelRef}
        style={{
          height: `${height}px`,
          overflow: 'hidden',
          transition: 'height 0.28s cubic-bezier(0.4,0,0.2,1)',
          // prefers-reduced-motion handled via CSS
        }}
      >
        <div className="px-6 pb-5 font-sans text-navy-900/65 text-sm leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i))

  return (
    <section id="faq" className="bg-ivory py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-gold-soft text-xs tracking-[0.2em] mb-4 reveal">
          // PREGUNTAS FRECUENTES
        </p>
        <h2
          className="font-serif font-black text-4xl text-navy-950 mb-12 reveal"
          style={{ animationDelay: '0.08s' }}
        >
          Tus dudas,
          <br />
          <span className="text-gold-soft">respondidas.</span>
        </h2>

        <div className="space-y-2">
          {FAQ_DATA.map((item: FAQItem, i: number) => (
            <AccordionItem
              key={item.id}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
