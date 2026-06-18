import { useState, useRef, useEffect } from 'react'

function safeEval(expr) {
  let e = expr.trim()
  if (!e) return '0'

  // Replace display symbols with JS equivalents
  e = e
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/−/g, '-')
    .replace(/π/g, '(' + Math.PI + ')')
    .replace(/√\(/g, 'Math.sqrt(')
    .replace(/\^/g, '**')

  // Safety: after stripping known identifiers, only allow math chars
  const stripped = e.replace(/Math\.sqrt/g, '').replace(/Math\.PI/g, '')
  if (/[a-zA-Z_$]/.test(stripped)) throw new Error('Invalid')

  const val = Function('"use strict"; return (' + e + ')')()
  if (typeof val !== 'number' || !isFinite(val)) throw new Error('Invalid')

  // Format: remove floating point noise
  const rounded = parseFloat(val.toFixed(10))
  return String(rounded)
}

export default function Calculator({ onClose }) {
  const [expr, setExpr]       = useState('')
  const [result, setResult]   = useState(null)  // null = no result yet
  const [error, setError]     = useState(false)

  const [pos, setPos] = useState({ x: window.innerWidth - 280, y: 100 })
  const isDragging = useRef(false)
  const dragOffset = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      if (!isDragging.current) return
      setPos({
        x: Math.max(0, Math.min(window.innerWidth  - 264, e.clientX - dragOffset.current.x)),
        y: Math.max(0, Math.min(window.innerHeight - 480, e.clientY - dragOffset.current.y))
      })
    }
    const onUp = () => { isDragging.current = false }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup',  onUp)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup',  onUp)
    }
  }, [])

  const handleDragStart = (e) => {
    isDragging.current = true
    dragOffset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y }
    e.preventDefault()
  }

  // ----- helpers -----

  const append = (val) => {
    if (result !== null) {
      // After a result, digits start fresh; operators continue from result
      const startsExpr = /^[0-9.(√π]/.test(val)
      setExpr(startsExpr ? val : rawMain + ' ' + val + ' ')
      setResult(null)
    } else {
      setExpr(prev => prev + val)
    }
    setError(false)
  }

  const appendOp = (op) => {
    if (result !== null) {
      setExpr(rawMain + ' ' + op + ' ')
      setResult(null)
    } else {
      // Replace trailing operator if present
      setExpr(prev => prev.replace(/[\+\-×÷\*\/]\s*$/, '').trimEnd() + ' ' + op + ' ')
    }
    setError(false)
  }

  const pressEquals = () => {
    const target = result !== null ? result : expr
    if (!target.trim()) return
    try {
      const val = safeEval(target)
      setResult(val)
      setError(false)
    } catch {
      setResult(null)
      setError(true)
    }
  }

  const pressClear = () => {
    setExpr(''); setResult(null); setError(false)
  }

  const pressBackspace = () => {
    if (result !== null) { setResult(null); return }
    setExpr(prev => prev.slice(0, -1))
    setError(false)
  }

  // Format a numeric string with thousands separators, preserving decimals
  const formatCommas = (val) => {
    const parts = String(val).split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return parts.join('.')
  }

  // Format each number token in an expression string with thousands commas
  const formatExprCommas = (s) =>
    s.replace(/\d+(\.\d+)?/g, (m) => {
      const [int, dec] = m.split('.')
      const formatted = int.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      return dec !== undefined ? formatted + '.' + dec : formatted
    })

  // Determine what to show in the large display slot
  const rawMain      = result !== null ? result  : (expr || '0')
  const displayMain  = result !== null ? formatCommas(result) : formatExprCommas(expr || '0')
  const displaySmall = result !== null ? expr    : ''

  // Dynamic font size: shrink as display grows
  const mainFontSize = Math.max(1.0, 2.2 - Math.max(0, displayMain.length - 9) * 0.08) + 'rem'

  // ----- button definitions -----
  const rows = [
    [
      { label: 'C',   cls: 'fn',  action: pressClear },
      { label: '( )', cls: 'fn',  action: () => {
          // Smart bracket: open if balanced or empty, else close
          const opens  = (expr.match(/\(/g) || []).length
          const closes = (expr.match(/\)/g) || []).length
          append(opens <= closes ? '(' : ')')
        }
      },
      { label: '⌫',  cls: 'fn',  action: pressBackspace },
      { label: '÷',   cls: 'op',  action: () => appendOp('÷') },
    ],
    [
      { label: '√(',  cls: 'fn',  action: () => append('√(') },
      { label: 'x²',  cls: 'fn',  action: () => append('^2') },
      { label: 'π',   cls: 'fn',  action: () => append('π') },
      { label: '×',   cls: 'op',  action: () => appendOp('×') },
    ],
    [
      { label: '7',   action: () => append('7') },
      { label: '8',   action: () => append('8') },
      { label: '9',   action: () => append('9') },
      { label: '−',   cls: 'op',  action: () => appendOp('−') },
    ],
    [
      { label: '4',   action: () => append('4') },
      { label: '5',   action: () => append('5') },
      { label: '6',   action: () => append('6') },
      { label: '+',   cls: 'op',  action: () => appendOp('+') },
    ],
    [
      { label: '1',   action: () => append('1') },
      { label: '2',   action: () => append('2') },
      { label: '3',   action: () => append('3') },
      { label: '(',   cls: 'br',  action: () => append('(') },
    ],
    [
      { label: '0',   cls: 'zero', action: () => append('0') },
      { label: '.',   action: () => append('.') },
      { label: ')',   cls: 'br',  action: () => append(')') },
      { label: '=',   cls: 'eq',  action: pressEquals },
    ],
  ]

  return (
    <div className="calculator" style={{ left: pos.x, top: pos.y }}>
      <div className="calc-header" onMouseDown={handleDragStart}>
        <span className="calc-title">⠿ Scientific Calculator</span>
        <button className="calc-close" onClick={onClose}>✕</button>
      </div>

      <div className="calc-display">
        <div className="calc-small-row">
          {displaySmall || ' '}
        </div>
        <div
          className={`calc-main-val ${error ? 'calc-error' : ''}`}
          style={error ? undefined : { fontSize: mainFontSize }}
        >
          {error ? 'Error' : displayMain}
        </div>
      </div>

      <div className="calc-pad">
        {rows.map((row, ri) => (
          <div key={ri} className="calc-row">
            {row.map(({ label, cls, action }) => (
              <button
                key={label}
                className={`calc-btn${cls ? ` calc-${cls}` : ''}`}
                onClick={action}
              >
                {label}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
