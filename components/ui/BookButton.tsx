'use client'

import { useState } from 'react'
import BookingModal from '@/components/booking/BookingModal'
import type { CSSProperties } from 'react'

interface BookButtonProps {
  label?: string
  service?: string
  variant?: 'primary' | 'gradient' | 'outline' | 'outline-white'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  style?: CSSProperties
  className?: string
}

const BASE: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 7,
  borderRadius: 9,
  fontWeight: 600,
  cursor: 'pointer',
  fontFamily: 'DM Sans, sans-serif',
  whiteSpace: 'nowrap',
  transition: 'opacity 0.2s',
}

const VARIANTS: Record<string, CSSProperties> = {
  primary: { background: '#2F6FDB', color: '#fff', border: 'none' },
  gradient: { background: 'linear-gradient(135deg,#2F6FDB,#C2187A)', color: '#fff', border: 'none' },
  outline: { background: 'transparent', color: '#2F6FDB', border: '2px solid #2F6FDB' },
  'outline-white': { background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.55)' },
}

const SIZES: Record<string, CSSProperties> = {
  sm: { padding: '9px 18px', fontSize: 13 },
  md: { padding: '12px 24px', fontSize: 14 },
  lg: { padding: '15px 30px', fontSize: 15 },
}

export default function BookButton({
  label = 'Book Free Pickup',
  service,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  style,
  className,
}: BookButtonProps) {
  const [open, setOpen] = useState(false)

  const btnStyle: CSSProperties = {
    ...BASE,
    ...VARIANTS[variant],
    ...SIZES[size],
    width: fullWidth ? '100%' : undefined,
    ...style,
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={btnStyle}
        className={className}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.opacity = '0.88' }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.opacity = '1' }}
      >
        {label}
      </button>
      <BookingModal isOpen={open} onClose={() => setOpen(false)} preselectedService={service} />
    </>
  )
}
