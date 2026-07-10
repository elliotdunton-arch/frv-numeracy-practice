import { useState, useRef, useCallback, useEffect } from 'react'
import Timer from './Timer'
import Calculator from './Calculator'
import DraggableImage from './DraggableImage'

export default function Quiz({ questions, onSubmit, totalTime, section }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [bookmarks, setBookmarks] = useState(new Set())
  const [showConfirm, setShowConfirm] = useState(false)
  const [showCalc, setShowCalc] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [showHint, setShowHint] = useState({})
  const [lightboxSrc, setLightboxSrc] = useState(null)

  const answersRef = useRef({})
  const bookmarksRef = useRef(new Set())
  const ribbonRef  = useRef(null)
  const pauseStartRef = useRef(null)
  const totalPausedMsRef = useRef(0)

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
      bookmarksRef.current = next
      return next
    })
  }

  const handlePause = () => {
    if (!isPaused) {
      pauseStartRef.current = Date.now()
      setIsPaused(true)
    } else {
      totalPausedMsRef.current += Date.now() - pauseStartRef.current
      pauseStartRef.current = null
      setIsPaused(false)
    }
  }

  const handleExpire = useCallback(() => {
    onSubmit(answersRef.current, true, totalPausedMsRef.current, bookmarksRef.current)
  }, [onSubmit])

  const confirmSubmit = () => onSubmit(answersRef.current, false, totalPausedMsRef.current, bookmarksRef.current)

  const isAnswered = (q) => {
    const v = answers[q.id]
    if (q.type === 'true_false_matrix') {
      if (!v) return false
      const parts = v.split(',')
      const labels = new Set(q.matrixLabels || ['True', 'False'])
      const expectedLength = (q.options || []).length
      return parts.length === expectedLength && parts.every(p => labels.has(p))
    }
    if (q.inputType === 'time_hm') {
      if (!v) return false
      const parts = v.split(':')
      return parts.length === 2 && parts[0] !== '' && parts[1] !== ''
    }
    return v !== undefined && v !== null && v !== ''
  }

  const handleMatrixToggle = (questionId, stmtIndex, value) => {
    const current = (answersRef.current[questionId] || ',,').split(',')
    current[stmtIndex] = value
    handleAnswer(questionId, current.join(','))
  }

  const answeredCount = questions.filter(isAnswered).length
  const unanswered    = questions.length - answeredCount
  const current       = questions[currentIndex]

  if (!current) return null

  const hasSplitImage = current.type === 'multiple_choice' && !!current.questionImage

  const renderAnswerInputs = (q) => {
    if (q.type === 'multiple_choice') {
      return (
        <div className="mc-radio-list">
          {(q.options || []).map(opt => (
            <button
              key={opt}
              className={`mc-radio-opt${answers[q.id] === opt ? ' mro-selected' : ''}`}
              onClick={() => handleAnswer(q.id, opt)}
            >
              <span className="mro-circle" />
              <span className="mro-text">{opt}</span>
            </button>
          ))}
        </div>
      )
    }
    if (q.type === 'true_false_matrix') {
      const labels = q.matrixLabels || ['True', 'False']
      return (
        <div className="tfm-rows">
          {(q.options || []).map((stmt, i) => {
            const parts = (answers[q.id] || '').split(',')
            const sel = parts[i] || ''
            return (
              <div key={i} className="tfm-row">
                <span className="tfm-stmt">{stmt}</span>
                <div className="tfm-btns">
                  {labels.map(lbl => (
                    <button
                      key={lbl}
                      className={`tfm-btn${sel === lbl ? ' tfm-true' : ''}`}
                      onClick={() => handleMatrixToggle(q.id, i, lbl)}
                    >{lbl}</button>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )
    }
    if (q.type === 'image_choice') {
      return (
        <>
          {q.questionImage && (
            <div className="img-question-wrap">
              <img src={q.questionImage} alt="Pattern question" className="img-question-main" />
            </div>
          )}
          <div className="img-choice-grid">
            {(q.options || []).map((src, i) => {
              const label = String.fromCharCode(65 + i)
              return (
                <button
                  key={label}
                  className={`img-choice-btn${answers[q.id] === label ? ' img-choice-selected' : ''}`}
                  onClick={() => handleAnswer(q.id, label)}
                >
                  <img src={src} alt={`Option ${label}`} className="img-choice-img" />
                  <span className="img-choice-label">{label}</span>
                </button>
              )
            })}
          </div>
        </>
      )
    }
    if (q.inputType === 'time_hm') {
      const stored = answers[q.id] || ':'
      const [hStr, mStr] = stored.split(':')
      return (
        <div className="number-input-area">
          <div className="time-hm-input">
            <input
              type="number"
              min="0"
              className="time-hm-hours"
              placeholder="0"
              value={hStr || ''}
              onChange={e => handleAnswer(q.id, `${e.target.value}:${mStr || ''}`)}
            />
            <span className="time-hm-sep">h</span>
            <input
              type="number"
              min="0"
              max="59"
              className="time-hm-mins"
              placeholder="00"
              value={mStr || ''}
              onChange={e => handleAnswer(q.id, `${hStr || ''}:${e.target.value}`)}
            />
            <span className="time-hm-sep">min</span>
          </div>
        </div>
      )
    }
    return (
      <div className="number-input-area">
        <div className="answer-input-wrap">
          {q.unit === '$' && <span className="input-unit input-unit-prefix">$</span>}
          <input
            type="text"
            inputMode="decimal"
            className="number-input"
            placeholder="Enter your answer…"
            value={answers[q.id] || ''}
            onChange={e => handleAnswer(q.id, e.target.value)}
            autoComplete="off"
          />
          {q.unit && q.unit !== '$' && (
            <span className="input-unit input-unit-suffix">{q.unit}</span>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="quiz">
      <header className="quiz-header">
        <h1 className="quiz-title">FRV {section === 'literacy' ? 'Literacy' : section === 'abstract' ? 'Abstract Reasoning' : section === 'mechanical' ? 'Mechanical Reasoning' : 'Numeracy'} Test</h1>
        <div className="quiz-header-right">
          <button
            className={`btn-calc-toggle ${showCalc ? 'active' : ''}`}
            onClick={() => setShowCalc(s => !s)}
          >
            🧮 Calculator
          </button>
          <button
            className={`btn-pause ${isPaused ? 'btn-pause--paused' : ''}`}
            onClick={handlePause}
          >
            {isPaused ? '▶ Resume' : '⏸ Pause'}
          </button>
          <button className="btn-finish" onClick={() => setShowConfirm(true)}>
            Finish Test
          </button>
          <Timer totalSeconds={totalTime} onExpire={handleExpire} isPaused={isPaused} />
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
                title={`Q${i + 1}${answered ? ' (answered)' : ''}${bookmarked ? ' ★' : ''}`}
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
      <div className={`quiz-main${(current.context || hasSplitImage) ? ' quiz-main--wide' : ''}`}>
        {hasSplitImage ? (
          <div className="quiz-img-split">
            <div className={`qis-left${current.questionImage2 ? ' qis-left--dual' : ''}`}>
              <img src={current.questionImage} alt="Question diagram" className={`qis-img${current.questionImage2 ? ' qis-img--dual' : ''}`} />
              {current.questionImage2 && (
                <img src={current.questionImage2} alt="Answer options diagram" className="qis-img qis-img--dual" />
              )}
            </div>
            <div className="qis-right">
              <span className="q-counter qis-counter">Question {currentIndex + 1} of {questions.length}</span>
              <p className="question-text qis-question">{current.question}</p>
              <div className="mc-radio-list">
                {(current.options || []).map(opt => (
                  <button
                    key={opt}
                    className={`mc-radio-opt${answers[current.id] === opt ? ' mro-selected' : ''}`}
                    onClick={() => handleAnswer(current.id, opt)}
                  >
                    <span className="mro-circle" />
                    <span className="mro-text">{opt}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="question-card">
            <div className="question-meta">
              <span className="q-counter">Question {currentIndex + 1} of {questions.length}</span>
            </div>

            {current.context ? (
              <div className="question-layout-split">
                <div className="context-panel">
                  <div className="context-block">
                    {current.context.title && (
                      <div className="context-title">{current.context.title}</div>
                    )}
                    {current.context.subtitle && (
                      <div className="context-subtitle">{current.context.subtitle}</div>
                    )}
                    {current.context.image && (
                      <img src={current.context.image} alt="Question context" className="context-image" onClick={() => setLightboxSrc(current.context.image)} />
                    )}
                    {current.context.images && current.context.images.map((src, ii) => (
                      <img key={ii} src={src} alt={`Question context ${ii + 1}`} className="context-image" onClick={() => setLightboxSrc(src)} />
                    ))}
                    {current.context.paragraphs && current.context.paragraphs.map((para, pi) => (
                      <p key={pi} className={`context-paragraph${para.startsWith('•') ? ' context-bullet' : ''}`}>
                        {para}
                      </p>
                    ))}
                    {current.context.tables && current.context.tables.map((tbl, ti) => (
                      <div key={ti} className="context-table-wrap">
                        {tbl.heading && <div className="context-table-heading">{tbl.heading}</div>}
                        <table className="context-table">
                          <thead>
                            {tbl.headerGroups ? (
                              <>
                                <tr>{tbl.headerGroups.map((g, gi) => <th key={gi} colSpan={g.colspan}>{g.label}</th>)}</tr>
                                {tbl.subHeaders && <tr>{tbl.subHeaders.map((h, hi) => <th key={hi}>{h}</th>)}</tr>}
                              </>
                            ) : (
                              <tr>{tbl.headers.map((h, hi) => <th key={hi}>{h}</th>)}</tr>
                            )}
                          </thead>
                          <tbody>
                            {tbl.rows.map((row, ri) => (
                              <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ))}
                    {current.context.extraParagraphs && current.context.extraParagraphs.map((para, pi) => (
                      <p key={pi} className="context-paragraph">{para}</p>
                    ))}
                    {current.context.note && (
                      <div className="context-note">{current.context.note}</div>
                    )}
                  </div>
                </div>
                <div className="answer-panel">
                  <p className="question-text">{current.question}</p>
                  {current.context.formulaHint && (
                    <>
                      <button
                        className="hint-btn"
                        onClick={() => setShowHint(h => ({ ...h, [current.id]: !h[current.id] }))}
                      >
                        💡 {showHint[current.id] ? 'Hide formula' : 'Show formula'}
                      </button>
                      {showHint[current.id] && (
                        <div className="hint-panel">
                          <pre className="hint-content">{current.context.formulaHint}</pre>
                        </div>
                      )}
                    </>
                  )}
                  {renderAnswerInputs(current)}
                </div>
              </div>
            ) : (
              <>
                <p className="question-text">{current.question}</p>
                {renderAnswerInputs(current)}
              </>
            )}
          </div>
        )}

        <div className="quiz-bottom-nav">
          <button
            className="btn-nav-back"
            onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
            disabled={currentIndex === 0}
          >
            ← Back
          </button>
          <button
            className={`btn-nav-bookmark${bookmarks.has(current.id) ? ' bnb-active' : ''}`}
            onClick={() => toggleBookmark(current.id)}
          >
            {bookmarks.has(current.id) ? '★ Bookmarked' : '☆ Bookmark'}
          </button>
          <button
            className="btn-nav-next"
            onClick={() => setCurrentIndex(i => Math.min(questions.length - 1, i + 1))}
            disabled={currentIndex === questions.length - 1}
          >
            Next →
          </button>
        </div>
      </div>

      {showCalc && <Calculator onClose={() => setShowCalc(false)} />}

      {isPaused && (
        <div className="pause-overlay">
          <div className="pause-card">
            <p className="pause-title">Test Paused</p>
            <p className="pause-subtitle">Your progress is saved. The timer has stopped.</p>
            <button className="btn-resume" onClick={handlePause}>▶ Resume Test</button>
          </div>
        </div>
      )}

      {lightboxSrc && (
        <DraggableImage src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      )}

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
