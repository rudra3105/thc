'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

interface FAQItem {
  q: string
  a: string
}

interface FAQProps {
  items: FAQItem[]
  className?: string
}

export default function FAQ({ items, className = '' }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className={`max-w-3xl ${className}`}>
      {items.map((item, i) => (
        <div key={i} className="faq-item">
          <button
            className="faq-trigger"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="text-left pr-4">{item.q}</span>
            <span
              className="w-7 h-7 min-w-[28px] rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                background: open === i ? 'var(--gradient)' : 'var(--gray)',
                color: open === i ? '#fff' : 'var(--blue)',
                transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
              }}
            >
              <Plus size={14} />
            </span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: open === i ? '400px' : '0' }}
          >
            <p className="pb-5 text-[14px] leading-relaxed" style={{ color: '#4b5563' }}>
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
