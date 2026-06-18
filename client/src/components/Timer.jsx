import { useState, useEffect, useCallback } from 'react'

export default function Timer({ totalSeconds, onExpire }) {
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds)

  const expire = useCallback(onExpire, [])

  useEffect(() => {
    if (secondsLeft <= 0) {
      expire()
      return
    }
    const id = setInterval(() => {
      setSecondsLeft(s => {
        if (s <= 1) {
          clearInterval(id)
          expire()
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const minutes = Math.floor(secondsLeft / 60)
  const seconds = secondsLeft % 60
  const pct = (secondsLeft / totalSeconds) * 100
  const isDanger = secondsLeft < 60
  const isWarning = secondsLeft < 300

  return (
    <div className={`timer ${isDanger ? 'timer-danger' : isWarning ? 'timer-warning' : ''}`}>
      <div className="timer-label">Time Remaining</div>
      <div className="timer-digits">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <div className="timer-track">
        <div className="timer-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
