import { useState, useEffect } from 'react'
import { getRevision, removeFromRevision, updateRevisionComment } from '../utils/resultStorage'

function applyInline(str) {
  const tokens = str.split(/(\*\*[^*\n]+\*\*|\*[^*\n]+\*|`[^`\n]+`)/)
  return tokens.map((tok, i) => {
    if (tok.startsWith('**') && tok.endsWith('**')) return <strong key={i}>{tok.slice(2, -2)}</strong>
    if (tok.startsWith('*') && tok.endsWith('*')) return <em key={i}>{tok.slice(1, -1)}</em>
    if (tok.startsWith('`') && tok.endsWith('`')) return <code key={i} className="note-code">{tok.slice(1, -1)}</code>
    return tok
  })
}

function renderNote(text) {
  if (!text) return null
  const lines = text.split('\n')
  const out = []
  let listItems = []
  let listType = null

  const flushList = () => {
    if (!listItems.length) return
    const Tag = listType === 'ol' ? 'ol' : 'ul'
    out.push(<Tag key={out.length} className="note-list">{listItems.map((t, i) => <li key={i}>{applyInline(t)}</li>)}</Tag>)
    listItems = []
    listType = null
  }

  for (const raw of lines) {
    const line = raw.trimEnd()
    const ul = line.match(/^[-*•]\s+(.+)/)
    const ol = line.match(/^\d+[.)]\s+(.+)/)
    const h  = line.match(/^#{1,3}\s+(.+)/)

    if (ul) {
      if (listType === 'ol') flushList()
      listType = 'ul'; listItems.push(ul[1])
    } else if (ol) {
      if (listType === 'ul') flushList()
      listType = 'ol'; listItems.push(ol[1])
    } else {
      flushList()
      if (line.trim() === '') {
        out.push(<div key={out.length} className="note-gap" />)
      } else if (h) {
        out.push(<p key={out.length} className="note-heading">{applyInline(h[1])}</p>)
      } else {
        out.push(<p key={out.length} className="note-line">{applyInline(line)}</p>)
      }
    }
  }
  flushList()
  return out
}

function formatDate(iso) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function Revision({ section, onStartTest }) {
  const [items, setItems] = useState(() => {
    const all = getRevision()
    return section ? all.filter(i => i.section === section) : all
  })
  const [expanded, setExpanded] = useState(new Set())
  const [editOpen, setEditOpen] = useState(new Set())
  const [editDraft, setEditDraft] = useState({})
  const [pendingRemove, setPendingRemove] = useState(null)
  const [refreshing, setRefreshing] = useState(true)

  useEffect(() => {
    const all = getRevision()
    setItems(section ? all.filter(i => i.section === section) : all)
    setExpanded(new Set())
    setEditOpen(new Set())
    setPendingRemove(null)
  }, [section])

  // On mount: refresh answer/method/options from server so corrected questions don't show stale answers.
  // Keep refreshing=true until done so the Start Revision Test button is blocked.
  useEffect(() => {
    const stored = getRevision()
    if (stored.length === 0) { setRefreshing(false); return }
    const ids = stored.map(i => i.question.id)
    fetch('/api/questions-by-ids', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
      body: JSON.stringify({ ids }),
    })
      .then(r => r.ok ? r.json() : null)
      .then(fresh => {
        if (fresh) {
          const byId = {}
          fresh.forEach(q => { byId[String(q.id)] = q })
          const updated = stored.map(item => {
            const f = byId[String(item.question.id)]
            if (!f || f.question !== item.question.question) return item
            return { ...item, question: { ...item.question, answer: f.answer, method: f.method ?? item.question.method, options: f.options ?? item.question.options } }
          })
          localStorage.setItem('frv_revision', JSON.stringify(updated))
          setItems(section ? updated.filter(i => i.section === section) : updated)
        }
      })
      .catch(() => {})
      .finally(() => setRefreshing(false))
  }, [])

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
        {onStartTest && (
          <button
            className="btn-start btn-revision-start-test"
            disabled={refreshing}
            onClick={() => onStartTest(items.map(i => i.question))}
          >
            Start Revision Test
          </button>
        )}
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
                {q.context && (
                  <div className="context-block revision-context-block">
                    {q.context.title && <div className="context-title">{q.context.title}</div>}
                    {q.context.subtitle && <div className="context-subtitle">{q.context.subtitle}</div>}
                    {q.context.image && <img src={q.context.image} alt="Question context" className="context-image" />}
                    {q.context.images && q.context.images.map((src, ii) => (
                      <img key={ii} src={src} alt={`Context ${ii + 1}`} className="context-image" />
                    ))}
                    {q.context.paragraphs && q.context.paragraphs.map((para, pi) => (
                      <p key={pi} className={`context-paragraph${para.startsWith('•') ? ' context-bullet' : ''}`}>{para}</p>
                    ))}
                    {q.context.tables && q.context.tables.map((tbl, ti) => (
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
                          <tbody>{tbl.rows.map((row, ri) => <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>)}</tbody>
                        </table>
                      </div>
                    ))}
                    {q.context.extraParagraphs && q.context.extraParagraphs.map((para, pi) => (
                      <p key={pi} className="context-paragraph">{para}</p>
                    ))}
                    {q.context.note && <div className="context-note">{q.context.note}</div>}
                  </div>
                )}
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
                    <div className="revision-saved-comment">
                      <span className="revision-comment-label">Note</span>
                      <div className="note-body">{renderNote(item.comment)}</div>
                    </div>
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
