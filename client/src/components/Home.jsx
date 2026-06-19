import { useState, useEffect, Fragment } from 'react'
import { getUsername, setUsername, getResultsForUser, getKnownUsers, deleteResult } from '../utils/resultStorage'

const NUMERACY_CATEGORIES = [
  {
    name: 'Number and Algebra',
    items: ['Percentages, fractions and decimals', 'Ratios, rates and proportions', 'Algebra and formulae']
  },
  {
    name: 'Measurement and Geometry',
    items: ['Area, volume, distances and speeds', 'Unit conversions (e.g. km to m)', 'Reading maps, plans and diagrams']
  },
  {
    name: 'Statistics and Probability',
    items: ['Reading graphs, charts and data', 'Mean, median, mode and range', 'Probability of events']
  }
]

const LITERACY_CATEGORIES = [
  {
    name: 'Comprehension',
    items: ['Identifying the primary purpose', 'Retrieving specific details', 'Understanding author intent']
  },
  {
    name: 'Analysis & Inference',
    items: ['Drawing logical inferences', 'Evaluating arguments', 'Interpreting figurative language']
  },
  {
    name: 'Text Formats',
    items: ['Policy documents and directives', 'Investigative reports', 'Technical manuals and legal briefs']
  }
]

const ABSTRACT_CATEGORIES = [
  {
    name: 'Pattern Completion',
    items: ['Matrix pattern completion', 'Series continuation', 'Grid rule identification']
  },
  {
    name: 'Spatial Reasoning',
    items: ['Shape rotation and reflection', 'Folding and unfolding', 'Mental rotation']
  },
  {
    name: 'Rule Identification',
    items: ['Transformation rules', 'Odd one out', 'Visual analogy completion']
  }
]

const SECTION_CONTENT = {
  numeracy: {
    title: 'Numeracy Practice Test',
    desc: 'This practice test mirrors the FRV Numeracy Skills Assessment. Questions are drawn from numerical and mathematical contexts including words, tables, graphs and diagrams.',
    formatChips: [{ cls: 'type-number_input', label: 'Calculated Number Entry' }],
    formatNote: 'Every answer requires calculation. Some questions build on data or results from earlier questions in the same scenario.',
    categories: NUMERACY_CATEGORIES,
    calcNote: true,
  },
  literacy: {
    title: 'Literacy Practice Test',
    desc: 'This practice test mirrors the FRV Literacy Skills Assessment. Questions are drawn from a range of text types including policy directives, investigative reports, technical manuals, opinion articles and legal briefs.',
    formatChips: [
      { cls: 'type-multiple_choice', label: 'Multiple Choice' },
      { cls: 'type-true_false_matrix', label: 'Yes / No Evaluation' },
    ],
    formatNote: 'Each passage is followed by multiple-choice comprehension questions and multi-statement evaluations. Read each text carefully before answering.',
    categories: LITERACY_CATEGORIES,
    calcNote: false,
  },
  abstract: {
    title: 'Abstract Reasoning Practice Test',
    desc: 'This practice test mirrors the FRV Abstract Reasoning Assessment. Each question presents a visual pattern or series — identify the rule and select the image that correctly completes it.',
    formatChips: [{ cls: 'type-image_choice', label: 'Image Selection' }],
    formatNote: 'Each question shows a pattern or matrix. Study the relationships between shapes, colours, and positions, then select the option that best completes the sequence.',
    categories: ABSTRACT_CATEGORIES,
    calcNote: false,
  },
}

const SECTION_LABEL = { numeracy: 'Numeracy', literacy: 'Literacy', abstract: 'Abstract' }

function formatDate(isoDate) {
  const d = new Date(isoDate + 'T12:00:00')
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })
}

function formatTime(secs) {
  const m = Math.floor(secs / 60)
  const s = secs % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

function ProgressLog() {
  const [currentUser, setCurrentUser] = useState(() => getUsername())
  const [results, setResults] = useState(() => currentUser ? getResultsForUser(currentUser) : [])
  const [switchMode, setSwitchMode] = useState(false)
  const [newNameInput, setNewNameInput] = useState('')
  const [expanded, setExpanded] = useState(new Set())
  const [pendingDelete, setPendingDelete] = useState(null) // id awaiting confirmation

  const knownUsers = getKnownUsers()

  const switchTo = (name) => {
    setUsername(name)
    setCurrentUser(name)
    setResults(getResultsForUser(name))
    setSwitchMode(false)
    setNewNameInput('')
    setExpanded(new Set())
    setPendingDelete(null)
  }

  const handleNewName = () => {
    const t = newNameInput.trim()
    if (!t) return
    switchTo(t)
  }

  const toggleExpand = (id) => {
    setExpanded(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id); else next.add(id)
      return next
    })
  }

  const handleDeleteClick = (id) => {
    if (pendingDelete === id) {
      // second click — confirm
      deleteResult(id)
      setResults(prev => prev.filter(r => r.id !== id))
      setExpanded(prev => { const n = new Set(prev); n.delete(id); return n })
      setPendingDelete(null)
    } else {
      setPendingDelete(id)
    }
  }

  const cancelDelete = () => setPendingDelete(null)

  if (!currentUser && knownUsers.length === 0) return null

  const avgPct = results.length
    ? Math.round(results.reduce((s, r) => s + r.pct, 0) / results.length)
    : null

  return (
    <div className="progress-log" onClick={e => { if (!e.target.closest('.pl-delete-btn')) cancelDelete() }}>
      <div className="progress-log-header">
        <div className="progress-log-title">
          <span>Progress Log</span>
          {currentUser && <span className="progress-log-user"> — {currentUser}</span>}
        </div>
        <button
          className="progress-switch-btn"
          onClick={() => { setSwitchMode(m => !m); setNewNameInput('') }}
        >
          {switchMode ? 'Cancel' : 'Switch user'}
        </button>
      </div>

      {switchMode && (
        <div className="progress-switch-panel">
          {knownUsers.length > 0 && (
            <div className="progress-known-users">
              {knownUsers.map(name => (
                <button
                  key={name}
                  className={`progress-user-chip${name === currentUser ? ' puc-active' : ''}`}
                  onClick={() => switchTo(name)}
                >
                  {name}
                </button>
              ))}
            </div>
          )}
          <div className="progress-new-name-row">
            <input
              type="text"
              className="record-name-input"
              value={newNameInput}
              onChange={e => setNewNameInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleNewName()}
              placeholder="Or enter a new name…"
              maxLength={50}
            />
            <button className="btn-record-save" onClick={handleNewName} disabled={!newNameInput.trim()}>
              Switch
            </button>
          </div>
        </div>
      )}

      {!switchMode && currentUser && (
        <>
          {results.length === 0 ? (
            <p className="progress-empty">No results recorded yet. Take a test and click <strong>Record Result</strong> to start tracking your progress.</p>
          ) : (
            <>
              <div className="progress-summary">
                <span className="ps-stat"><strong>{results.length}</strong> test{results.length !== 1 ? 's' : ''} recorded</span>
                <span className="ps-divider">·</span>
                <span className="ps-stat">Average: <strong>{avgPct}%</strong></span>
                <span className="ps-divider">·</span>
                <span className="ps-stat">Best: <strong>{Math.max(...results.map(r => r.pct))}%</strong></span>
              </div>
              <div className="progress-table-wrap">
                <table className="progress-table">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Date</th>
                      <th>Section</th>
                      <th>Score</th>
                      <th>%</th>
                      <th>Time</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map(r => (
                      <Fragment key={r.id}>
                        <tr className={expanded.has(r.id) ? 'pl-row-expanded' : ''}>
                          <td className="pl-expand-cell">
                            <button
                              className="pl-expand-btn"
                              onClick={() => toggleExpand(r.id)}
                              title={expanded.has(r.id) ? 'Hide breakdown' : 'Show breakdown'}
                            >
                              {expanded.has(r.id) ? '▾' : '▸'}
                            </button>
                          </td>
                          <td>{formatDate(r.date)}</td>
                          <td>
                            <span className={`progress-section-badge psb-${r.section}`}>
                              {SECTION_LABEL[r.section] || r.section}
                            </span>
                          </td>
                          <td>{r.score} / {r.total}</td>
                          <td>
                            <span className={r.pct >= 70 ? 'progress-pass' : 'progress-fail'}>
                              {r.pct}%
                            </span>
                          </td>
                          <td>{formatTime(r.timeSecs)}</td>
                          <td className="pl-delete-cell">
                            <button
                              className={`pl-delete-btn${pendingDelete === r.id ? ' pl-delete-confirm' : ''}`}
                              onClick={e => { e.stopPropagation(); handleDeleteClick(r.id) }}
                              title={pendingDelete === r.id ? 'Click again to confirm deletion' : 'Delete this result'}
                            >
                              {pendingDelete === r.id ? 'Delete?' : '×'}
                            </button>
                          </td>
                        </tr>
                        {expanded.has(r.id) && (
                          <tr className="pl-breakdown-row">
                            <td colSpan="7">
                              <div className="pl-breakdown">
                                {r.breakdown && r.breakdown.length > 0 ? (
                                  r.breakdown.map(({ cat, correct, total: t }) => (
                                    <div key={cat} className="pl-breakdown-item">
                                      <span className="pl-bd-cat">{cat}</span>
                                      <div className="pl-bd-track">
                                        <div
                                          className={`pl-bd-bar ${correct / t >= 0.6 ? 'plbd-good' : 'plbd-poor'}`}
                                          style={{ width: `${Math.round((correct / t) * 100)}%` }}
                                        />
                                      </div>
                                      <span className="pl-bd-score">{correct}/{t}</span>
                                    </div>
                                  ))
                                ) : (
                                  <p className="pl-bd-unavailable">No category breakdown saved for this result.</p>
                                )}
                              </div>
                            </td>
                          </tr>
                        )}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </>
      )}

      {!switchMode && !currentUser && (
        <p className="progress-empty">Record a result after completing a test to start tracking your progress.</p>
      )}
    </div>
  )
}

export default function Home({ onStart, loading, error, section, onSectionChange }) {
  const [activeTab, setActiveTab] = useState(section) // 'numeracy' | 'literacy' | 'abstract' | 'progress'
  const [mode, setMode] = useState('full')
  const [customCount, setCustomCount] = useState(10)
  const [topicsOpen, setTopicsOpen] = useState(false)
  const [topicList, setTopicList] = useState([])
  const [selectedTopics, setSelectedTopics] = useState(new Set())

  useEffect(() => {
    fetch('/api/topics').then(r => r.json()).then(setTopicList).catch(() => {})
  }, [])

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    if (tab !== 'progress') onSectionChange(tab)
  }

  const toggleTopic = (name) => {
    setSelectedTopics(prev => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name); else next.add(name)
      return next
    })
  }

  const totalSelectedQs = topicList
    .filter(t => selectedTopics.has(t.name))
    .reduce((s, t) => s + t.questionCount, 0)

  const presets = [5, 10, 20, 30]

  const handleCountInput = (val) => {
    const n = parseInt(val)
    if (!isNaN(n)) setCustomCount(Math.min(30, Math.max(1, n)))
  }

  const customTotalSecs = customCount * 70
  const customMins = Math.floor(customTotalSecs / 60)
  const customSecs = customTotalSecs % 60
  const customTimeDisplay = `${customMins}:${String(customSecs).padStart(2, '0')}`

  const handleStart = () => {
    onStart(mode === 'custom' ? customCount : null)
  }

  const content = SECTION_CONTENT[section] || SECTION_CONTENT.numeracy
  const heroTitle = activeTab === 'progress' ? 'Progress Log' : content.title
  const heroSub = activeTab === 'progress' ? 'Track your test results over time' : 'Aptitude Assessment — Recruitment Preparation'

  return (
    <div className="home">
      <div className="home-hero">
        <div className="hero-badge">Fire Rescue Victoria</div>
        <h1>{heroTitle}</h1>
        <p className="hero-sub">{heroSub}</p>

        <div className="section-toggle">
          <button
            className={`section-toggle-btn${activeTab === 'numeracy' ? ' stb-active' : ''}`}
            onClick={() => handleTabClick('numeracy')}
          >
            Numeracy
          </button>
          <button
            className={`section-toggle-btn${activeTab === 'literacy' ? ' stb-active' : ''}`}
            onClick={() => handleTabClick('literacy')}
          >
            Literacy
          </button>
          <button
            className={`section-toggle-btn${activeTab === 'abstract' ? ' stb-active' : ''}`}
            onClick={() => handleTabClick('abstract')}
          >
            Abstract (beta)
          </button>
          <button
            className={`section-toggle-btn stb-progress${activeTab === 'progress' ? ' stb-active' : ''}`}
            onClick={() => handleTabClick('progress')}
          >
            Progress
          </button>
        </div>
      </div>

      {activeTab === 'progress' && <ProgressLog />}

      {activeTab !== 'progress' && <div className="home-card">
        <p className="card-desc">{content.desc}</p>

        <div className="mode-selector">
          <button
            className={`mode-btn ${mode === 'full' ? 'mode-active' : ''}`}
            onClick={() => setMode('full')}
          >
            Full Test
          </button>
          <button
            className={`mode-btn ${mode === 'custom' ? 'mode-active' : ''}`}
            onClick={() => setMode('custom')}
          >
            Custom Practice
          </button>
        </div>

        <div className="info-row">
          <div className="info-box">
            <span className="info-num">{mode === 'full' ? 30 : customCount}</span>
            <span className="info-label">Questions</span>
          </div>
          <div className="info-divider" />
          <div className="info-box">
            <span className={`info-num ${mode === 'custom' ? 'info-num-time' : ''}`}>
              {mode === 'full' ? '35' : customTimeDisplay}
            </span>
            <span className="info-label">{mode === 'full' ? 'Minutes' : 'Min : Sec'}</span>
          </div>
          <div className="info-divider" />
          <div className="info-box">
            <span className="info-num">70%</span>
            <span className="info-label">Pass mark</span>
          </div>
        </div>

        {mode === 'custom' && (
          <div className="custom-panel">
            <p className="section-label">Number of Questions</p>
            <div className="count-presets">
              {presets.map(n => (
                <button
                  key={n}
                  className={`count-chip ${customCount === n ? 'chip-active' : ''}`}
                  onClick={() => setCustomCount(n)}
                >
                  {n}
                </button>
              ))}
            </div>
            <div className="count-custom-row">
              <input
                type="number"
                min="1"
                max="30"
                value={customCount}
                onChange={e => handleCountInput(e.target.value)}
                className="count-input"
              />
              <span className="count-input-hint">questions (1–30) — or pick a preset above</span>
            </div>
          </div>
        )}

        {activeTab === 'numeracy' && (
          <div className="topic-focus">
            <button
              className={`topic-focus-toggle${topicsOpen ? ' tft-open' : ''}`}
              onClick={() => { setTopicsOpen(o => !o); setSelectedTopics(new Set()) }}
            >
              <span className="tft-icon">{topicsOpen ? '▾' : '▸'}</span>
              Practice by Topic
            </button>

            {topicsOpen && topicList.length > 0 && (
              <div className="topic-panel">
                <div className="topic-panel-actions">
                  <button className="topic-action-btn" onClick={() => setSelectedTopics(new Set(topicList.map(t => t.name)))}>
                    Select all
                  </button>
                  <button className="topic-action-btn" onClick={() => setSelectedTopics(new Set())}>
                    Clear all
                  </button>
                </div>

                <div className="topic-list">
                  {topicList.map(({ name, questionCount }) => (
                    <label key={name} className={`topic-item${selectedTopics.has(name) ? ' topic-checked' : ''}`}>
                      <input
                        type="checkbox"
                        checked={selectedTopics.has(name)}
                        onChange={() => toggleTopic(name)}
                      />
                      <span className="topic-name">{name}</span>
                      <span className="topic-count">{questionCount} Qs</span>
                    </label>
                  ))}
                </div>

                {selectedTopics.size > 0 && (
                  <div className="topic-start-row">
                    <span className="topic-selected-info">
                      {selectedTopics.size} topic{selectedTopics.size !== 1 ? 's' : ''} · {totalSelectedQs} questions available
                    </span>
                    <button
                      className="btn-start"
                      onClick={() => onStart(null, [...selectedTopics])}
                      disabled={loading}
                    >
                      {loading ? 'Loading…' : 'Start Focused Practice'}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        <div className="home-question-types">
          <p className="section-label">Question Format</p>
          <div className="qtype-row">
            {content.formatChips.map(chip => (
              <span key={chip.label} className={`qtype-chip ${chip.cls}`}>{chip.label}</span>
            ))}
          </div>
          <p className="format-note">{content.formatNote}</p>
        </div>

        <div className="home-categories">
          <p className="section-label">Topics Covered</p>
          <div className="cat-grid">
            {content.categories.map(cat => (
              <div key={cat.name} className="cat-card">
                <div className="cat-name">{cat.name}</div>
                <ul className="cat-items">
                  {cat.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="instructions-section">
          <p className="section-label">Before You Begin</p>
          <ul className="instructions-list">
            <li>Use the question ribbon to navigate between questions at any time</li>
            <li>Bookmark questions you want to revisit — use the button in the navigation bar or the ribbon</li>
            <li>The test auto-submits when the timer reaches zero</li>
            {content.calcNote && <li>A scientific calculator is available in the test</li>}
          </ul>
        </div>

        {error && <div className="error-banner">{error}</div>}

        <button className="btn-start" onClick={handleStart} disabled={loading}>
          {loading
            ? 'Loading questions…'
            : mode === 'full'
              ? 'Start Test'
              : `Start Practice — ${customCount} Question${customCount !== 1 ? 's' : ''}`}
        </button>
      </div>}
    </div>
  )
}
