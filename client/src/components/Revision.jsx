import { useState, useEffect } from 'react'
import { getRevision, removeFromRevision, updateRevisionComment } from '../utils/resultStorage'

function formatDate(iso) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function Revision({ section }) {
  const [items, setItems] = useState(() => {
    const all = getRevision()
    return section ? all.filter(i => i.section === section) : all
  })
  const [expanded, setExpanded] = useState(new Set())
  const [editOpen, setEditOpen] = useState(new Set())
  const [editDraft, setEditDraft] = useState({})
  const [pendingRemove, setPendingRemove] = useState(null)

  useEffect(() => {
    const all = getRevision()
    setItems(section ? all.filter(i => i.section === section) : all)
    setExpanded(new Set())
    setEditOpen(new Set())
    setPendingRemove(null)
  }, [section])

  const toggleExpand = (id) => {
    setExpanded(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n })
  }

  const openEdit = (item) => {
    setEditDraft(prev => ({ ...prev, [item.question.id]: item.comment || '' }))
    setEditOpen(prev => new Set([...prev, item.question.id]))
  }

  const saveEdit = (questionId) => {
    const comment = editDraft[questionId] ?? ''
    updateRevisionComment(questionId, comment)
    setItems(prev => prev.map(i => i.question.id === questionId ? { ...i, comment } : i))
    setEditOpen(prev => { const n = new Set(prev); n.delete(questionId); return n })
  }

  const handleRemove = (questionId) => {
    if (pendingRemove === questionId) {
      removeFromRevision(questionId)
      setItems(prev => prev.filter(i => i.question.id !== questionId))
      setExpanded(prev => { const n = new Set(prev); n.delete(questionId); return n })
      setPendingRemove(null)
    } else {
      setPendingRemove(questionId)
    }
  }

  if (items.length === 0) {
    return (
      <div className="revision-empty">
        <p className="revision-empty-title">No questions saved yet</p>
        <p className="revision-empty-sub">After completing a test, click <strong>📌 Save to Revision</strong> on any question in the review to add it here.</p>
      </div>
    )
  }

  return (
    <div className="revision-list">
      <div className="revision-list-header">
        <span>{items.length} question{items.length !== 1 ? 's' : ''} saved for revision</span>
      </div>
      {items.map((item, idx) => {
        const q = item.question
        const isExpanded = expanded.has(q.id)
        const isEditing = editOpen.has(q.id)
        const isPendingRemove = pendingRemove === q.id

        return (
          <div key={q.id} className="revision-item" onClick={() => isPendingRemove && setPendingRemove(null)}>
            <div className="revision-item-top">
              <span className="revision-item-num">Q{idx + 1}</span>
              {q.category && <span className="revision-item-cat">{q.category}</span>}
              {q.set && <span className="revision-item-set">{q.set}</span>}
              <span className="revision-item-date">{formatDate(item.savedDate)}</span>
              <div className="revision-item-actions">
                <button className="btn-revision-expand" onClick={() => toggleExpand(q.id)}>
                  {isExpanded ? '▾ Collapse' : '▸ Show answer'}
                </button>
                <button
                  className={`btn-revision-remove${isPendingRemove ? ' brr-confirm' : ''}`}
                  onClick={e => { e.stopPropagation(); handleRemove(q.id) }}
                >
                  {isPendingRemove ? 'Confirm remove' : 'Remove'}
                </button>
              </div>
            </div>

            <p className="revision-item-question">{q.question}</p>

            {isExpanded && (
              <div className="revision-item-body">
                {q.questionImage && (
                  <div className="revision-item-image">
                    <img src={q.questionImage} alt="Question diagram" />
                  </div>
                )}
                <div className="revision-item-answer">
                  <span className="revision-answer-label">Correct answer</span>
                  <span className="revision-answer-value">{q.answer}</span>
                </div>
                {q.method && (
                  <pre className="revision-item-method">{q.method}</pre>
                )}
              </div>
            )}

            <div className="revision-comment-section">
              {isEditing ? (
                <div className="revision-edit-comment">
                  <textarea
                    className="revision-comment-input"
                    value={editDraft[q.id] ?? ''}
                    onChange={e => setEditDraft(prev => ({ ...prev, [q.id]: e.target.value }))}
                    placeholder="Add your notes — where you went wrong, extra context, key concepts…"
                    rows={3}
                    autoFocus
                  />
                  <div className="revision-edit-actions">
                    <button className="btn-revision-save-comment" onClick={() => saveEdit(q.id)}>Save note</button>
                    <button className="btn-ghost" onClick={() => setEditOpen(prev => { const n = new Set(prev); n.delete(q.id); return n })}>Cancel</button>
                  </div>
                </div>
              ) : (
                <div className="revision-comment-display">
                  {item.comment ? (
                    <p className="revision-saved-comment">
                      <span className="revision-comment-label">Note: </span>{item.comment}
                    </p>
                  ) : null}
                  <button className="btn-edit-note" onClick={() => openEdit(item)}>
                    {item.comment ? '✏ Edit note' : '+ Add note'}
                  </button>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
