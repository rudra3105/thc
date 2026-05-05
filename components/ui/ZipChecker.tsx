'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { SERVED_ZIPS } from '@/lib/constants'

export default function ZipChecker() {
  const [zip, setZip] = useState('')
  const [result, setResult] = useState<null | boolean>(null)

  const check = () => {
    if (zip.length < 5) return
    setResult(SERVED_ZIPS.includes(zip))
  }

  return (
    <div>
      <div className="flex gap-2 max-w-sm">
        <input
          type="text"
          value={zip}
          onChange={(e) => { setZip(e.target.value.replace(/\D/g, '')); setResult(null) }}
          onKeyDown={(e) => e.key === 'Enter' && check()}
          placeholder="Enter ZIP code"
          maxLength={5}
          className="form-input text-sm py-3"
          style={{ background: 'rgba(255,255,255,0.9)' }}
        />
        <button
          onClick={check}
          className="px-4 py-3 rounded-lg font-semibold text-sm flex items-center gap-2"
          style={{ background: 'var(--blue)', color: '#fff', whiteSpace: 'nowrap' }}
        >
          <Search size={14} />
          Check Area
        </button>
      </div>
      {result !== null && (
        <p
          className="mt-2 text-sm font-medium"
          style={{ color: result ? '#16a34a' : '#dc2626' }}
        >
          {result
            ? `✅ Great news! We serve ZIP ${zip}. Book your pickup now!`
            : `📞 Call us for ZIP ${zip} availability — 214-348-0666`}
        </p>
      )}
    </div>
  )
}
