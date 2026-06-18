import { useState } from 'react'

function isCorrect(q, userAnswer) {
  if (q.type === 'true_false_matrix') {
    if (!userAnswer) return false
    const ua = userAnswer.split(',').map(p => p.trim().toLowerCase())
    const ca = q.answer.split(',').map(p => p.trim().toLowerCase())
    return ua.length === ca.length && ua.every((v, i) => v === ca[i])
  }
  if (!userAnswer && userAnswer !== 0) return false
  const clean = s => String(s).replace(/[$,%\s]/g, '')
  const ua = parseFloat(clean(userAnswer))
  const ca = parseFloat(clean(q.answer))
  if (!isNaN(ua) && !isNaN(ca)) return Math.abs(ua - ca) < 0.01
  return clean(userAnswer).toLowerCase() === clean(q.answer).toLowerCase()
}

export default function Results({ questions, answers, startTime, endTime, timeExpired, onRestart }) {
  const [expandedWorking, setExpandedWorking] = useState({})

  const score = questions.filter(q => isCorrect(q, answers[q.id])).length
  const total = questions.length
  const pct = Math.round((score / total) * 100)

  const elapsed = Math.round((endTime - startTime) / 1000)
  const elMin = Math.floor(elapsed / 60)
  const elSec = elapsed % 60

  const passed = pct >= 70

  const categories = [...new Set(questions.map(q => q.category))]
  const breakdown = categories.map(cat => {
    const qs = questions.filter(q => q.category === cat)
    const correct = qs.filter(q => isCorrect(q, answers[q.id])).length
    return { cat, correct, total: qs.length }
  })

  const toggleWorking = (id) => {
    setExpandedWorking(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="results-page">
      <div className="results-container">
        <div className="results-heading">
          <h1>Test Complete</h1>
          {timeExpired && (
            <p className="expired-notice">Time expired — test was auto-submitted</p>
          )}
        </div>

        <div className="score-banner">
          <div className={`score-ring ${passed ? 'ring-pass' : 'ring-fail'}`}>
            <span className="ring-score">{score}</span>
            <span className="ring-denom">/{total}</span>
          </div>
          <div className="score-details">
            <span className={`result-badge ${passed ? 'badge-pass' : 'badge-fail'}`}>
              {passed ? 'PASS' : 'FAIL'}
            </span>
            <div className="score-pct">{pct}%</div>
            <div className="score-time">
              Time: {String(elMin).padStart(2, '0')}:{String(elSec).padStart(2, '0')}
            </div>
            <div className="score-note">Pass mark: 70%</div>
          </div>
        </div>

        <div className="section-card">
          <h2>Category Breakdown</h2>
          <div className="breakdown-list">
            {breakdown.map(({ cat, correct, total: t }) => (
              <div key={cat} className="breakdown-row">
                <span className="breakdown-cat">{cat}</span>
                <div className="breakdown-track">
                  <div
                    className={`breakdown-bar ${correct / t >= 0.6 ? 'bar-good' : 'bar-poor'}`}
                    style={{ width: `${(correct / t) * 100}%` }}
                  />
                </div>
                <span className="breakdown-score">{correct}/{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="section-card">
          <h2>Question Review</h2>
          <div className="review-list">
            {questions.map((q, i) => {
              const userAns = answers[q.id]
              const correct = isCorrect(q, userAns)
              const workingOpen = !!expandedWorking[q.id]
              return (
                <div key={q.id} className={`review-item ${correct ? 'review-correct' : 'review-wrong'}`}>
                  <div className="review-top">
                    <span className="review-num">Q{i + 1}</span>
                    <span className="review-cat-pill">{q.category}</span>
                    <span className={`review-tick ${correct ? 'tick-correct' : 'tick-wrong'}`}>
                      {correct ? '✓' : '✗'}
                    </span>
                  </div>
                  <p className="review-question">{q.question}</p>
                  {q.type === 'true_false_matrix' ? (
                    <div className="tfm-review">
                      {(q.options || []).map((stmt, i) => {
                        const userParts = userAns ? userAns.split(',') : []
                        const correctParts = q.answer.split(',')
                        const userVal = userParts[i] || null
                        const correctVal = correctParts[i]
                        const stmtOk = userVal && userVal.toLowerCase() === correctVal.toLowerCase()
                        return (
                          <div key={i} className={`tfm-review-row ${stmtOk ? 'tfmr-correct' : 'tfmr-wrong'}`}>
                            <span className="tfmr-icon">{stmtOk ? '✓' : '✗'}</span>
                            <span className="tfmr-stmt">{stmt}</span>
                            <span className="tfmr-ans">
                              {stmtOk
                                ? correctVal
                                : `You: ${userVal || 'not answered'} — Correct: ${correctVal}`}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  ) : !correct && (
                    <div className="review-answers">
                      <span className="ans-wrong">
                        {userAns ? `Your answer: ${userAns}` : 'Not answered'}
                      </span>
                      <span className="ans-correct">Correct: {q.answer}</span>
                    </div>
                  )}
                  {q.method && (
                    <div className="working-section">
                      <button
                        className={`working-toggle ${workingOpen ? 'working-toggle-open' : ''}`}
                        onClick={() => toggleWorking(q.id)}
                        aria-expanded={workingOpen}
                      >
                        <span className="working-toggle-icon">{workingOpen ? '▾' : '▸'}</span>
                        {workingOpen ? 'Hide working' : 'Show working'}
                      </button>
                      {workingOpen && (
                        <pre className="working-content">{q.method}</pre>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="results-footer">
          <button className="btn-restart" onClick={onRestart}>
            Take Another Test
          </button>
        </div>
      </div>
    </div>
  )
}
