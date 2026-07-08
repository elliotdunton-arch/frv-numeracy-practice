import { useState, useRef, useEffect } from 'react'

export default function DraggableImage({ src, onClose }) {
  const [pos, setPos] = useState(() => ({
    x: Math.max(20, window.innerWidth - 520),
    y: 80,
  }))

  const dragging  = useRef(false)
  const origin    = useRef({ mx: 0, my: 0, px: 0, py: 0 })

  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return
      const cx = e.touches ? e.touches[0].clientX : e.clientX
      const cy = e.touches ? e.touches[0].clientY : e.clientY
      setPos({
        x: origin.current.px + cx - origin.current.mx,
        y: origin.current.py + cy - origin.current.my,
      })
    }
    const onUp = () => { dragging.current = false }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onUp)
    }
  }, [])

  const startDrag = (e) => {
    dragging.current = true
    const cx = e.touches ? e.touches[0].clientX : e.clientX
    const cy = e.touches ? e.touches[0].clientY : e.clientY
    origin.current = { mx: cx, my: cy, px: pos.x, py: pos.y }
    e.preventDefault()
  }

  return (
    <div className="drag-img-panel" style={{ left: pos.x, top: pos.y }}>
      <div
        className="drag-img-header"
        onMouseDown={startDrag}
        onTouchStart={startDrag}
      >
        <span className="drag-img-title">⠿ Passage</span>
        <button className="drag-img-close" onClick={onClose} onMouseDown={e => e.stopPropagation()}>✕</button>
      </div>
      <div className="drag-img-body">
        <img src={src} alt="Passage" className="drag-img-img" draggable={false} />
      </div>
    </div>
  )
}
