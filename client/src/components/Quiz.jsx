import { useState, useRef, useCallback, useEffect } from 'react'
import Timer from './Timer'
import Calculator from './Calculator'

export default function Quiz({ questions, onSubmit, totalTime }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [bookmarks, setBookmarks] = useState(new Set())
  const [showConfirm, setShowConfirm] = useState(false)
  const [showCalc, setShowCalc] = useState(false)

  const answersRef = useRef({})
  const ribbonRef  = useRef(null)

  useEffect(() => {
    if (!ribbonRef.current) return
    const btns = ribbonRef.current.querySelectorAll('.ribbon-btn')
    if (btns[currentIndex]) {
      btns[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [currentIndex])

  const handleAnswer = (questionId, value) => {
    const updated = { ...answersRef.current, [questionId]: value }
    answersRef.current = updated
    setAnswers(updated)
  }

  const toggleBookmark = (questionId) => {
    setBookmarks(prev => {
      const next = new Set(prev)
      next.has(questionId) ? next.delete(questionId) : next.add(questionId)
      return next
    })
  }

  const handleExpire = useCallback(() => {
    onSubmit(answersRef.current, true)
  }, [onSubmit])

  const confirmSubmit = () => onSubmit(answersRef.current, false)

  const isAnswered = (q) => {
    const v = answers[q.id]
    return v !== undefined && v !== null && v !== ''
  }

  const answeredCount = questions.filter(isAnswered).length
  const unanswered    = questions.length - answeredCount
  const current       = questions[currentIndex]

  if (!current) return null

  return (
    <div className="quiz">
      <header className="quiz-header">
        <h1 className="quiz-title">FRV Numeracy Test</h1>
        <div className="quiz-header-right">
          <button
            className={`btn-calc-toggle ${showCalc ? 'active' : ''}`}
            onClick={() => setShowCalc(s => !s)}
          >
            🧮 Calculator
          </button>
          <button className="btn-finish" onClick={() => setShowConfirm(true)}>
            Finish Test
          </button>
          <Timer totalSeconds={totalTime} onExpire={handleExpire} />
        </div>
      </header>

      <div className="quiz-progress-bar">
        <div className="quiz-progress-fill" style={{ width: `${(answeredCount / questions.length) * 100}%` }} />
      </div>

      {/* Ribbon */}
      <div className="ribbon-wrapper">
        <div className="ribbon" ref={ribbonRef}>
          {questions.map((q, i) => {
            const answered   = isAnswered(q)
            const bookmarked = bookmarks.has(q.id)
            const isCurrent  = i === currentIndex
            return (
              <button
                key={q.id}
                className={[
                  'ribbon-btn',
                  isCurrent  ? 'rb-current'    : '',
                  answered   ? 'rb-answered'   : '',
                  bookmarked ? 'rb-bookmarked' : '',
                ].join(' ')}
                onClick={() => setCurrentIndex(i)}
                title={`Q${i + 1} — ${q.category}${answered ? ' (answered)' : ''}${bookmarked ? ' ★' : ''}`}
              >
                {i + 1}
                {bookmarked && <span className="rb-star">★</span>}
              </button>
            )
          })}
        </div>
        <div className="ribbon-meta">
          <span>{answeredCount} / {questions.length} answered</span>
          {bookmarks.size > 0 && (
            <span className="ribbon-meta-bk">★ {bookmarks.size} bookmarked</span>
          )}
        </div>
      </div>

      {/* Question */}
      <div className="quiz-main">
        <div className="question-card">
          <div className="question-meta">
            <span className="q-counter">Question {currentIndex + 1} of {questions.length}</span>
            <span className="q-category-badge">{current.category}</span>
          </div>

          {current.context && (
            <div className="context-block">
              {current.context.title && (
                <div className="context-title">{current.context.title}</div>
              )}
              {current.context.subtitle && (
                <div className="context-subtitle">{current.context.subtitle}</div>
              )}
              {current.context.tables && current.context.tables.map((tbl, ti) => (
                <div key={ti} className="context-table-wrap">
                  {tbl.heading && <div className="context-table-heading">{tbl.heading}</div>}
                  <table className="context-table">
                    <thead>
                      <tr>{tbl.headers.map((h, hi) => <th key={hi}>{h}</th>)}</tr>
                    </thead>
                    <tbody>
                      {tbl.rows.map((row, ri) => (
                        <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
              {current.context.note && (
                <div className="context-note">{current.context.note}</div>
              )}
            </div>
          )}

          <p className="question-text">{current.question}</p>

          <div className="number-input-area">
            <input
              type="text"
              inputMode="decimal"
              className="number-input"
              placeholder="Enter your answer…"
              value={answers[current.id] || ''}
              onChange={e => handleAnswer(current.id, e.target.value)}
              autoComplete="off"
            />
          </div>
        </div>

        <div className="q-nav-controls">
          <button
            className="btn-nav"
            onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
            disabled={currentIndex === 0}
          >
            ← Previous
          </button>
          <button
            className={`btn-bookmark-nav ${bookmarks.has(current.id) ? 'bk-active' : ''}`}
            onClick={() => toggleBookmark(current.id)}
          >
            {bookmarks.has(current.id) ? '★ Bookmarked' : '☆ Bookmark'}
          </button>
          <button
            className="btn-nav"
            onClick={() => setCurrentIndex(i => Math.min(questions.length - 1, i + 1))}
            disabled={currentIndex === questions.length - 1}
          >
            Next →
          </button>
        </div>
      </div>

      {showCalc && <Calculator onClose={() => setShowCalc(false)} />}

      {showConfirm && (
        <div className="modal-overlay" onClick={() => setShowConfirm(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h3>Finish Test?</h3>
            {unanswered > 0 && (
              <p>You have <strong>{unanswered} unanswered question{unanswered !== 1 ? 's' : ''}</strong> — these will be marked incorrect.</p>
            )}
            {bookmarks.size > 0 && (
              <p>You still have <strong>{bookmarks.size} bookmarked question{bookmarks.size !== 1 ? 's' : ''}</strong> to review.</p>
            )}
            {unanswered === 0 && bookmarks.size === 0 && (
              <p>All {questions.length} questions answered. Ready to submit?</p>
            )}
            <div className="modal-actions">
              <button className="btn-ghost" onClick={() => setShowConfirm(false)}>Continue Test</button>
              <button className="btn-submit-confirm" onClick={confirmSubmit}>Submit Test</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
