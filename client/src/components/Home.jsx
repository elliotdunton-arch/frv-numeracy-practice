import { useState, useEffect, Fragment } from 'react'
import { getUsername, setUsername, getResultsForUser, getKnownUsers, deleteResult } from '../utils/resultStorage'
import Revision from './Revision'

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

const MECHANICAL_CATEGORIES = [
  {
    name: 'Gears & Wheels',
    items: ['Direction of rotation', 'Gear ratios and speed', 'Meshing gear systems']
  },
  {
    name: 'Belts & Pulleys',
    items: ['Mechanical advantage', 'Belt slip and friction', 'Pulley systems and load']
  },
  {
    name: 'Forces & Pressure',
    items: ['Levers and balance', 'Fluid pressure', 'Cams and displacement']
  },
  {
    name: 'Electrical Circuits',
    items: ['Series and parallel circuits', 'Switch logic', 'Identifying active bulbs']
  },
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
  mechanical: {
    title: 'Mechanical Reasoning Practice Test',
    desc: 'This practice test covers mechanical reasoning concepts relevant to the FRV aptitude assessment. Questions use diagrams to test understanding of gears, pulleys, levers, circuits, and fluid mechanics.',
    formatChips: [{ cls: 'type-multiple_choice', label: 'Multiple Choice' }],
    formatNote: 'Each question presents a mechanical diagram. Study the diagram carefully before selecting your answer.',
    categories: MECHANICAL_CATEGORIES,
    calcNote: false,
  },
}

const SECTION_LABEL = { numeracy: 'Numeracy', literacy: 'Literacy', abstract: 'Abstract', mechanical: 'Mechanical' }

function formatDate(isoDate) {
  const d = new Date(isoDate + 'T12:00:00')
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })
}

function formatTime(secs) {
  const m = Math.floor(secs / 60)
  const s = secs % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

const CHART = { vw: 460, vh: 110, pl: 34, pr: 12, pt: 10, pb: 22 }
CHART.iw = CHART.vw - CHART.pl - CHART.pr
CHART.ih = CHART.vh - CHART.pt - CHART.pb

function TrendChart({ data }) {
  const { vw, vh, pl, pr, pt, iw, ih } = CHART
  const xOf = i => pl + (data.length > 1 ? (i / (data.length - 1)) * iw : iw / 2)
  const yOf = pct => pt + ih - (pct / 100) * ih
  const pts = data.map((r, i) => `${xOf(i).toFixed(1)},${yOf(r.pct).toFixed(1)}`).join(' ')

  return (
    <svg viewBox={`0 0 ${vw} ${vh}`} className="pg-chart-svg" preserveAspectRatio="none">
      {/* faint grid at 25 / 50 / 75 / 100 */}
      {[25, 50, 75, 100].map(p => (
        <line key={p} x1={pl} y1={yOf(p)} x2={vw - pr} y2={yOf(p)} stroke="#e5e7eb" strokeWidth="0.5" />
      ))}
      {/* 70% pass-mark line */}
      <line x1={pl} y1={yOf(70)} x2={vw - pr} y2={yOf(70)} stroke="#f97316" strokeWidth="1" strokeDasharray="4 3" />
      {/* Y-axis labels */}
      {[0, 50, 100].map(p => (
        <text key={p} x={pl - 5} y={yOf(p) + 3.5} textAnchor="end" fontSize="8" fill="#9ca3af">{p}%</text>
      ))}
      <text x={pl - 5} y={yOf(70) + 3.5} textAnchor="end" fontSize="8" fill="#f97316">70%</text>
      {/* Connecting line */}
      {data.length > 1 && (
        <polyline points={pts} fill="none" stroke="#1e3a5f" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
      )}
      {/* Data points */}
      {data.map((r, i) => (
        <circle key={r.id} cx={xOf(i)} cy={yOf(r.pct)} r="4.5"
          fill={r.pct >= 70 ? '#22c55e' : '#ef4444'} stroke="white" strokeWidth="1.5" />
      ))}
    </svg>
  )
}

function ProgressLog({ onResit }) {
  const [currentUser, setCurrentUser] = useState(() => getUsername())
  const [results, setResults] = useState(() => currentUser ? getResultsForUser(currentUser) : [])
  const [switchMode, setSwitchMode] = useState(false)
  const [newNameInput, setNewNameInput] = useState('')
  const [expanded, setExpanded] = useState(new Set())
  const [pendingDelete, setPendingDelete] = useState(null) // id awaiting confirmation
  const [sectionFilter, setSectionFilter] = useState('all')

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

  // Stats strip
  const totalQs = results.reduce((s, r) => s + (r.total || 0), 0)
  let streak = 0
  for (let i = results.length - 1; i >= 0; i--) {
    if (results[i].pct >= 70) streak++
    else break
  }
  const improvement = results.length >= 2
    ? results[results.length - 1].pct - results[0].pct
    : null

  // Trend chart
  const sectionsPresent = ['all', ...[...new Set(results.map(r => r.section))]]
  const chartData = sectionFilter === 'all' ? results : results.filter(r => r.section === sectionFilter)

  // Topic weakness — aggregate category breakdown across all results
  const catMap = {}
  results.forEach(r => {
    ;(r.breakdown || []).forEach(({ cat, correct, total: t }) => {
      if (!catMap[cat]) catMap[cat] = { correct: 0, total: 0 }
      catMap[cat].correct += correct
      catMap[cat].total += t
    })
  })
  const weaknesses = Object.entries(catMap)
    .map(([cat, { correct, total }]) => ({ cat, pct: Math.round((correct / total) * 100) }))
    .sort((a, b) => a.pct - b.pct)

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
              {/* ── Stats strip ── */}
              <div className="pg-stats-strip">
                <div className="pg-stat">
                  <span className="pg-stat-val">{results.length}</span>
                  <span className="pg-stat-label">tests taken</span>
                </div>
                <div className="pg-stat">
                  <span className="pg-stat-val">{avgPct}%</span>
                  <span className="pg-stat-label">average score</span>
                </div>
                <div className="pg-stat">
                  <span className="pg-stat-val">{Math.max(...results.map(r => r.pct))}%</span>
                  <span className="pg-stat-label">personal best</span>
                </div>
                <div className="pg-stat">
                  <span className={`pg-stat-val${streak > 0 ? ' pg-stat-streak' : ''}`}>{streak}</span>
                  <span className="pg-stat-label">pass streak</span>
                </div>
                <div className="pg-stat">
                  <span className="pg-stat-val">{totalQs.toLocaleString()}</span>
                  <span className="pg-stat-label">questions attempted</span>
                </div>
                <div className="pg-stat">
                  {improvement !== null ? (
                    <span className={`pg-stat-val ${improvement > 0 ? 'pg-stat-up' : improvement < 0 ? 'pg-stat-down' : ''}`}>
                      {improvement > 0 ? '+' : ''}{improvement}%
                    </span>
                  ) : (
                    <span className="pg-stat-val pg-stat-muted">—</span>
                  )}
                  <span className="pg-stat-label">vs first attempt</span>
                </div>
              </div>

              {/* ── Trend chart ── */}
              <div className="pg-chart-wrap">
                <div className="pg-chart-header">
                  <span className="pg-chart-title">Score Trend</span>
                  {sectionsPresent.length > 2 && (
                    <div className="pg-section-tabs">
                      {sectionsPresent.map(s => (
                        <button
                          key={s}
                          className={`pg-section-tab${sectionFilter === s ? ' pst-active' : ''}`}
                          onClick={() => setSectionFilter(s)}
                        >
                          {s === 'all' ? 'All' : SECTION_LABEL[s] || s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {chartData.length === 0 ? (
                  <p className="pg-chart-empty">No results for this section.</p>
                ) : (
                  <TrendChart data={chartData} />
                )}
                <div className="pg-chart-legend">
                  <span className="pgcl-pass">● Pass</span>
                  <span className="pgcl-fail">● Fail</span>
                  <span className="pgcl-line">— — 70% pass mark</span>
                </div>
              </div>

              {/* ── Topic weakness ── */}
              {weaknesses.length > 0 && (
                <div className="pg-weakness-wrap">
                  <div className="pg-weakness-title">Topic Averages <span className="pg-weakness-sub">(worst first)</span></div>
                  {weaknesses.map(({ cat, pct: p }) => (
                    <div key={cat} className="pg-wk-row">
                      <span className="pg-wk-cat">{cat}</span>
                      <div className="pg-wk-track">
                        <div
                          className={`pg-wk-bar ${p >= 80 ? 'pgwk-good' : p >= 60 ? 'pgwk-mid' : 'pgwk-poor'}`}
                          style={{ width: `${p}%` }}
                        />
                        <div className="pg-wk-passline" />
                      </div>
                      <span className={`pg-wk-pct ${p >= 80 ? 'pgwk-good' : p >= 60 ? 'pgwk-mid' : 'pgwk-poor'}`}>{p}%</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="progress-summary">
                <span className="ps-stat"><strong>{results.length}</strong> test{results.length !== 1 ? 's' : ''} recorded</span>
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
                          <td className="pl-resit-cell">
                            {r.questionIds && r.questionIds.length > 0 && (
                              <button
                                className="pl-resit-btn"
                                onClick={e => { e.stopPropagation(); onResit(r.questionIds, r.section) }}
                                title="Resit this exact test"
                              >
                                Resit
                              </button>
                            )}
                          </td>
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
                            <td colSpan="8">
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

export default function Home({ onStart, onResit, loading, error, section, onSectionChange }) {
  const [activeTab, setActiveTab] = useState(section) // 'numeracy' | 'literacy' | 'abstract' | 'progress'
  const [mode, setMode] = useState('full')
  const [customCount, setCustomCount] = useState(10)
  const [topicsOpen, setTopicsOpen] = useState(false)
  const [topicList, setTopicList] = useState([])
  const [selectedTopics, setSelectedTopics] = useState(new Set())
  const [categoriesOpen, setCategoriesOpen] = useState(false)
  const [categoryList, setCategoryList] = useState([])
  const [selectedCategories, setSelectedCategories] = useState(new Set())
  const [strategyOpen, setStrategyOpen] = useState(false)
  const [logicLoopsOpen, setLogicLoopsOpen] = useState(false)
  const [elimMethodOpen, setElimMethodOpen] = useState(false)
  const [formulaOpen, setFormulaOpen] = useState(false)
  const [mechSetsOpen, setMechSetsOpen] = useState(false)
  const [selectedMechSets, setSelectedMechSets] = useState(new Set())
  const [mechSetList, setMechSetList] = useState([])
  const [mechGuideOpen, setMechGuideOpen] = useState(false)
  const [litSetsOpen, setLitSetsOpen] = useState(false)
  const [selectedLitSets, setSelectedLitSets] = useState(new Set())
  const [litSetList, setLitSetList] = useState([])
  const [numSetsOpen, setNumSetsOpen] = useState(false)
  const [selectedNumSets, setSelectedNumSets] = useState(new Set())
  const [numSetList, setNumSetList] = useState([])
  const [absSetsOpen, setAbsSetsOpen] = useState(false)
  const [selectedAbsSets, setSelectedAbsSets] = useState(new Set())
  const [absSetList, setAbsSetList] = useState([])

  useEffect(() => {
    fetch('/api/topics').then(r => r.json()).then(setTopicList).catch(() => {})
    fetch('/api/literacy-topics').then(r => r.json()).then(setCategoryList).catch(() => {})
    fetch('/api/mechanical-sets').then(r => r.json()).then(setMechSetList).catch(() => {})
    fetch('/api/literacy-sets').then(r => r.json()).then(setLitSetList).catch(() => {})
    fetch('/api/numeracy-sets').then(r => r.json()).then(setNumSetList).catch(() => {})
    fetch('/api/abstract-sets').then(r => r.json()).then(setAbsSetList).catch(() => {})
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

  const toggleCategory = (name) => {
    setSelectedCategories(prev => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name); else next.add(name)
      return next
    })
  }

  const totalSelectedQs = topicList
    .filter(t => selectedTopics.has(t.name))
    .reduce((s, t) => s + t.questionCount, 0)

  const totalSelectedCatQs = categoryList
    .filter(c => selectedCategories.has(c.name))
    .reduce((s, c) => s + c.questionCount, 0)

  const totalSelectedMechQs = mechSetList
    .filter(s => selectedMechSets.has(s.name))
    .reduce((s, c) => s + c.questionCount, 0)

  const totalSelectedLitSetQs = litSetList
    .filter(s => selectedLitSets.has(s.name))
    .reduce((s, c) => s + c.questionCount, 0)

  const totalSelectedNumSetQs = numSetList
    .filter(s => selectedNumSets.has(s.name))
    .reduce((s, c) => s + c.questionCount, 0)

  const totalSelectedAbsSetQs = absSetList
    .filter(s => selectedAbsSets.has(s.name))
    .reduce((s, c) => s + c.questionCount, 0)

  const toggleMechSet = (name) => {
    setSelectedMechSets(prev => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name); else next.add(name)
      return next
    })
  }

  const toggleLitSet = (name) => {
    setSelectedLitSets(prev => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name); else next.add(name)
      return next
    })
  }

  const toggleNumSet = (name) => {
    setSelectedNumSets(prev => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name); else next.add(name)
      return next
    })
  }

  const toggleAbsSet = (name) => {
    setSelectedAbsSets(prev => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name); else next.add(name)
      return next
    })
  }

  const isMech = section === 'mechanical'
  const maxCustomCount = isMech ? 40 : 30
  const secsPerQ = isMech ? 37.5 : 70
  const presets = isMech ? [5, 10, 20, 32] : [5, 10, 20, 30]

  const handleCountInput = (val) => {
    const n = parseInt(val)
    if (!isNaN(n)) setCustomCount(Math.min(maxCustomCount, Math.max(1, n)))
  }

  const customTotalSecs = Math.round(customCount * secsPerQ)
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
            Abstract
          </button>
          <button
            className={`section-toggle-btn${activeTab === 'mechanical' ? ' stb-active' : ''}`}
            onClick={() => handleTabClick('mechanical')}
          >
            Mechanical
          </button>
          <button
            className={`section-toggle-btn stb-progress${activeTab === 'progress' ? ' stb-active' : ''}`}
            onClick={() => handleTabClick('progress')}
          >
            Progress
          </button>
        </div>
      </div>

      {activeTab === 'progress' && <ProgressLog onResit={onResit} />}

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
          <button
            className={`mode-btn mode-btn-revision ${mode === 'revision' ? 'mode-active' : ''}`}
            onClick={() => setMode('revision')}
          >
            Revision
          </button>
        </div>

        {mode === 'revision' && <Revision section={section} />}

        {mode !== 'revision' && <><div className="info-row">
          <div className="info-box">
            <span className="info-num">{mode === 'full' ? (isMech ? 32 : 30) : customCount}</span>
            <span className="info-label">Questions</span>
          </div>
          <div className="info-divider" />
          <div className="info-box">
            <span className={`info-num ${mode === 'custom' ? 'info-num-time' : ''}`}>
              {mode === 'full' ? (isMech ? '20' : '35') : customTimeDisplay}
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
                max={maxCustomCount}
                value={customCount}
                onChange={e => handleCountInput(e.target.value)}
                className="count-input"
              />
              <span className="count-input-hint">questions (1–{maxCustomCount}) — or pick a preset above</span>
            </div>
          </div>
        )}

        {activeTab === 'literacy' && litSetList.length > 0 && (
          <div className="topic-focus">
            <button
              className={`topic-focus-toggle${litSetsOpen ? ' tft-open' : ''}`}
              onClick={() => { setLitSetsOpen(o => !o); setSelectedLitSets(new Set()) }}
            >
              <span className="tft-icon">{litSetsOpen ? '▾' : '▸'}</span>
              Practice by Set
            </button>

            {litSetsOpen && litSetList.length > 0 && (
              <div className="topic-panel">
                <div className="topic-list">
                  {litSetList.map(({ name, questionCount }) => (
                    <label key={name} className={`topic-item${selectedLitSets.has(name) ? ' topic-checked' : ''}`}>
                      <input
                        type="checkbox"
                        checked={selectedLitSets.has(name)}
                        onChange={() => toggleLitSet(name)}
                      />
                      <span className="topic-name">{name}</span>
                      <span className="topic-count">{questionCount} Qs</span>
                    </label>
                  ))}
                </div>

                {selectedLitSets.size > 0 && (
                  <div className="topic-start-row">
                    <span className="topic-selected-info">
                      {selectedLitSets.size} set{selectedLitSets.size !== 1 ? 's' : ''} · {totalSelectedLitSetQs} questions available
                    </span>
                    <button
                      className="btn-start-secondary"
                      onClick={() => onStart(null, [...selectedLitSets], 'sets', true)}
                      disabled={loading}
                    >
                      {loading ? 'Loading…' : 'Start In Order'}
                    </button>
                    <button
                      className="btn-start"
                      onClick={() => onStart(null, [...selectedLitSets], 'sets')}
                      disabled={loading}
                    >
                      {loading ? 'Loading…' : 'Start (Random)'}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {activeTab === 'literacy' && (
          <div className="topic-focus">
            <button
              className={`topic-focus-toggle${categoriesOpen ? ' tft-open' : ''}`}
              onClick={() => { setCategoriesOpen(o => !o); setSelectedCategories(new Set()) }}
            >
              <span className="tft-icon">{categoriesOpen ? '▾' : '▸'}</span>
              Practice by Category
            </button>

            {categoriesOpen && categoryList.length > 0 && (
              <div className="topic-panel">
                <div className="topic-panel-actions">
                  <button className="topic-action-btn" onClick={() => setSelectedCategories(new Set(categoryList.map(c => c.name)))}>
                    Select all
                  </button>
                  <button className="topic-action-btn" onClick={() => setSelectedCategories(new Set())}>
                    Clear all
                  </button>
                </div>

                <div className="topic-list">
                  {categoryList.map(({ name, questionCount }) => (
                    <label key={name} className={`topic-item${selectedCategories.has(name) ? ' topic-checked' : ''}`}>
                      <input
                        type="checkbox"
                        checked={selectedCategories.has(name)}
                        onChange={() => toggleCategory(name)}
                      />
                      <span className="topic-name">{name}</span>
                      <span className="topic-count">{questionCount} Qs</span>
                    </label>
                  ))}
                </div>

                {selectedCategories.size > 0 && (
                  <div className="topic-start-row">
                    <span className="topic-selected-info">
                      {selectedCategories.size} categor{selectedCategories.size !== 1 ? 'ies' : 'y'} · {totalSelectedCatQs} questions available
                    </span>
                    <button
                      className="btn-start"
                      onClick={() => onStart(null, [...selectedCategories])}
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

        {activeTab === 'mechanical' && (
          <div className="topic-focus">
            <button
              className={`topic-focus-toggle${mechSetsOpen ? ' tft-open' : ''}`}
              onClick={() => { setMechSetsOpen(o => !o); setSelectedMechSets(new Set()) }}
            >
              <span className="tft-icon">{mechSetsOpen ? '▾' : '▸'}</span>
              Practice by Set
            </button>

            {mechSetsOpen && mechSetList.length > 0 && (
              <div className="topic-panel">
                <div className="topic-list">
                  {mechSetList.map(({ name, questionCount }) => (
                    <label key={name} className={`topic-item${selectedMechSets.has(name) ? ' topic-checked' : ''}`}>
                      <input
                        type="checkbox"
                        checked={selectedMechSets.has(name)}
                        onChange={() => toggleMechSet(name)}
                      />
                      <span className="topic-name">{name}</span>
                      <span className="topic-count">{questionCount} Qs</span>
                    </label>
                  ))}
                </div>

                {selectedMechSets.size > 0 && (
                  <div className="topic-start-row">
                    <span className="topic-selected-info">
                      {selectedMechSets.size} set{selectedMechSets.size !== 1 ? 's' : ''} · {totalSelectedMechQs} questions available
                    </span>
                    <button
                      className="btn-start-secondary"
                      onClick={() => onStart(null, [...selectedMechSets], 'sets', true)}
                      disabled={loading}
                    >
                      {loading ? 'Loading…' : 'Start In Order'}
                    </button>
                    <button
                      className="btn-start"
                      onClick={() => onStart(null, [...selectedMechSets], 'sets')}
                      disabled={loading}
                    >
                      {loading ? 'Loading…' : 'Start (Random)'}
                    </button>
                    {totalSelectedMechQs < 32 && (
                      <button
                        className="btn-start-secondary"
                        onClick={() => onStart(null, [...selectedMechSets], 'sets', true, true)}
                        disabled={loading}
                      >
                        {loading ? 'Loading…' : 'Full Test — Set First'}
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {activeTab === 'numeracy' && numSetList.length > 0 && (
          <div className="topic-focus">
            <button
              className={`topic-focus-toggle${numSetsOpen ? ' tft-open' : ''}`}
              onClick={() => { setNumSetsOpen(o => !o); setSelectedNumSets(new Set()) }}
            >
              <span className="tft-icon">{numSetsOpen ? '▾' : '▸'}</span>
              Practice by Set
            </button>

            {numSetsOpen && numSetList.length > 0 && (
              <div className="topic-panel">
                <div className="topic-list">
                  {numSetList.map(({ name, questionCount }) => (
                    <label key={name} className={`topic-item${selectedNumSets.has(name) ? ' topic-checked' : ''}`}>
                      <input
                        type="checkbox"
                        checked={selectedNumSets.has(name)}
                        onChange={() => toggleNumSet(name)}
                      />
                      <span className="topic-name">{name}</span>
                      <span className="topic-count">{questionCount} Qs</span>
                    </label>
                  ))}
                </div>

                {selectedNumSets.size > 0 && (
                  <div className="topic-start-row">
                    <span className="topic-selected-info">
                      {selectedNumSets.size} set{selectedNumSets.size !== 1 ? 's' : ''} · {totalSelectedNumSetQs} questions available
                    </span>
                    <button
                      className="btn-start-secondary"
                      onClick={() => onStart(null, [...selectedNumSets], 'sets', true)}
                      disabled={loading}
                    >
                      {loading ? 'Loading…' : 'Start In Order'}
                    </button>
                    <button
                      className="btn-start"
                      onClick={() => onStart(null, [...selectedNumSets], 'sets')}
                      disabled={loading}
                    >
                      {loading ? 'Loading…' : 'Start (Random)'}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {activeTab === 'abstract' && absSetList.length > 0 && (
          <div className="topic-focus">
            <button
              className={`topic-focus-toggle${absSetsOpen ? ' tft-open' : ''}`}
              onClick={() => { setAbsSetsOpen(o => !o); setSelectedAbsSets(new Set()) }}
            >
              <span className="tft-icon">{absSetsOpen ? '▾' : '▸'}</span>
              Practice by Set
            </button>

            {absSetsOpen && absSetList.length > 0 && (
              <div className="topic-panel">
                <div className="topic-list">
                  {absSetList.map(({ name, questionCount }) => (
                    <label key={name} className={`topic-item${selectedAbsSets.has(name) ? ' topic-checked' : ''}`}>
                      <input
                        type="checkbox"
                        checked={selectedAbsSets.has(name)}
                        onChange={() => toggleAbsSet(name)}
                      />
                      <span className="topic-name">{name}</span>
                      <span className="topic-count">{questionCount} Qs</span>
                    </label>
                  ))}
                </div>

                {selectedAbsSets.size > 0 && (
                  <div className="topic-start-row">
                    <span className="topic-selected-info">
                      {selectedAbsSets.size} set{selectedAbsSets.size !== 1 ? 's' : ''} · {totalSelectedAbsSetQs} questions available
                    </span>
                    <button
                      className="btn-start-secondary"
                      onClick={() => onStart(null, [...selectedAbsSets], 'sets', true)}
                      disabled={loading}
                    >
                      {loading ? 'Loading…' : 'Start In Order'}
                    </button>
                    <button
                      className="btn-start"
                      onClick={() => onStart(null, [...selectedAbsSets], 'sets')}
                      disabled={loading}
                    >
                      {loading ? 'Loading…' : 'Start (Random)'}
                    </button>
                  </div>
                )}
              </div>
            )}
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

        {activeTab === 'numeracy' && (
          <div className="strategy-guide">
            <button
              className={`strategy-guide-toggle${formulaOpen ? ' sgt-open' : ''}`}
              onClick={() => setFormulaOpen(o => !o)}
            >
              <span className="tft-icon">{formulaOpen ? '▾' : '▸'}</span>
              Numeracy Formula Reference
            </button>

            {formulaOpen && (
              <div className="strategy-guide-body">

                <div className="sg-section">
                  <div className="sg-heading">1. Volume &amp; Capacity — "The Bridge"</div>
                  <p className="sg-note">The most common trap is confusing linear, square (area), and cubic (volume) conversions.</p>
                  <ul className="sg-list">
                    <li><strong>Length:</strong> units change by factor of 10, 100, or 1,000.</li>
                    <li><strong>Area:</strong> units change by the <em>squared</em> factor (e.g., 1 m² = 10,000 cm²).</li>
                    <li><strong>Volume:</strong> units change by the <em>cubed</em> factor (e.g., 1 m³ = 1,000,000 cm³ — <em>not</em> 1,000).</li>
                  </ul>
                  <table className="conv-table">
                    <thead>
                      <tr><th>From</th><th>To</th><th>Operation</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>1 cm³</td><td>1 mL</td><td>1 : 1 (direct)</td></tr>
                      <tr><td>1,000 cm³</td><td>1 L</td><td>÷ 1,000</td></tr>
                      <tr><td>1 m³</td><td>1,000 L</td><td>× 1,000</td></tr>
                      <tr><td>1 m³</td><td>1 kL</td><td>1 : 1 (direct)</td></tr>
                      <tr><td>1 L</td><td>1,000 mL</td><td>× 1,000</td></tr>
                    </tbody>
                  </table>
                  <p className="sg-tip">💡 Shortcut: always convert to a base unit (Litres or cm³) before calculating if units in the question don't match.</p>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">1b. Length Conversions (mm, cm, m, km)</div>
                  <table className="conv-table">
                    <thead>
                      <tr><th>Unit</th><th>mm</th><th>cm</th><th>m</th><th>km</th></tr>
                    </thead>
                    <tbody>
                      <tr><td><strong>1 mm</strong></td><td>1</td><td>÷ 10</td><td>÷ 1,000</td><td>÷ 1,000,000</td></tr>
                      <tr><td><strong>1 cm</strong></td><td>× 10</td><td>1</td><td>÷ 100</td><td>÷ 100,000</td></tr>
                      <tr><td><strong>1 m</strong></td><td>× 1,000</td><td>× 100</td><td>1</td><td>÷ 1,000</td></tr>
                      <tr><td><strong>1 km</strong></td><td>× 1,000,000</td><td>× 100,000</td><td>× 1,000</td><td>1</td></tr>
                    </tbody>
                  </table>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">1c. Area Conversions (mm², cm², m², km²)</div>
                  <table className="conv-table">
                    <thead>
                      <tr><th>Unit</th><th>mm²</th><th>cm²</th><th>m²</th><th>km²</th></tr>
                    </thead>
                    <tbody>
                      <tr><td><strong>1 mm²</strong></td><td>1</td><td>÷ 100</td><td>÷ 1,000,000</td><td>÷ 10¹²</td></tr>
                      <tr><td><strong>1 cm²</strong></td><td>× 100</td><td>1</td><td>÷ 10,000</td><td>÷ 10¹⁰</td></tr>
                      <tr><td><strong>1 m²</strong></td><td>× 1,000,000</td><td>× 10,000</td><td>1</td><td>÷ 1,000,000</td></tr>
                      <tr><td><strong>1 km²</strong></td><td>× 10¹²</td><td>× 10¹⁰</td><td>× 1,000,000</td><td>1</td></tr>
                    </tbody>
                  </table>
                  <p className="sg-note">Rule: area factors are the square of the length factor (e.g., 1 m = 100 cm → 1 m² = 100² = 10,000 cm²).</p>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">2. Geometry</div>
                  <ul className="sg-list formula-list">
                    <li><span className="fl-name">Rectangle / Square Area</span><span className="fl-formula">Length × Width</span></li>
                    <li><span className="fl-name">Triangle Area</span><span className="fl-formula">½ × Base × Height</span></li>
                    <li><span className="fl-name">Circle Area</span><span className="fl-formula">π × r²</span></li>
                    <li><span className="fl-name">Circle Circumference</span><span className="fl-formula">π × d  (or 2πr)</span></li>
                    <li><span className="fl-name">Rectangular Prism Volume</span><span className="fl-formula">Length × Width × Height</span></li>
                    <li><span className="fl-name">Cylinder Volume</span><span className="fl-formula">(π × r²) × Height</span></li>
                  </ul>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">3. Ratios, Percentages &amp; Speed</div>
                  <ul className="sg-list formula-list">
                    <li><span className="fl-name">Percentage Change</span><span className="fl-formula">(New − Old) / Old × 100</span></li>
                    <li><span className="fl-name">Speed</span><span className="fl-formula">Distance / Time</span></li>
                    <li><span className="fl-name">Time</span><span className="fl-formula">Distance / Speed</span></li>
                    <li><span className="fl-name">Distance</span><span className="fl-formula">Speed × Time</span></li>
                    <li><span className="fl-name">Average</span><span className="fl-formula">Sum of values / Count</span></li>
                  </ul>
                  <p className="sg-note">Keep units consistent — km/h or m/s — don't mix.</p>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">4. Pay & Timesheets</div>
                  <ul className="sg-list formula-list">
                    <li><span className="fl-name">Total pay</span><span className="fl-formula">Σ (hours × rate) per day type</span></li>
                    <li><span className="fl-name">Saturday rate</span><span className="fl-formula">Weekday rate × 1.5</span></li>
                    <li><span className="fl-name">Sunday rate</span><span className="fl-formula">Weekday rate × 2</span></li>
                    <li><span className="fl-name">Gender Pay Gap (GPG)</span><span className="fl-formula">(Male avg − Female avg) ÷ Male avg × 100</span></li>
                  </ul>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">5. Pricing & Discounts</div>
                  <ul className="sg-list formula-list">
                    <li><span className="fl-name">Unit price</span><span className="fl-formula">Total price ÷ Quantity</span></li>
                    <li><span className="fl-name">% saving</span><span className="fl-formula">(Original − Sale) ÷ Original × 100</span></li>
                    <li><span className="fl-name">Discounted price</span><span className="fl-formula">Original × (1 − discount%)</span></li>
                    <li><span className="fl-name">Find original price</span><span className="fl-formula">Sale price ÷ (1 − discount%)</span></li>
                  </ul>
                  <p className="sg-note">Reverse discount tip: if $80 is the price after a 20% discount → Original = $80 ÷ 0.80 = $100.</p>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">6. Fleet Vehicle Costs</div>
                  <ul className="sg-list formula-list">
                    <li><span className="fl-name">Net cost after n years</span><span className="fl-formula">Purchase price − (Annual saving × n)</span></li>
                    <li><span className="fl-name">Break-even year</span><span className="fl-formula">n = (Price A − Price B) ÷ (Saving A − Saving B), round up</span></li>
                    <li><span className="fl-name">% of budget covered</span><span className="fl-formula">Budget ÷ Purchase price × 100</span></li>
                  </ul>
                  <p className="sg-note">Break-even: the year when the cheaper-to-run vehicle's cumulative savings exceed its higher upfront cost.</p>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">7. Loans & Depreciation</div>
                  <ul className="sg-list formula-list">
                    <li><span className="fl-name">Total repaid</span><span className="fl-formula">Monthly payment × months (+ balloon)</span></li>
                    <li><span className="fl-name">Total interest</span><span className="fl-formula">Total repaid − Principal borrowed</span></li>
                    <li><span className="fl-name">Monthly interest (reducing)</span><span className="fl-formula">Balance × (Annual rate ÷ 12)</span></li>
                    <li><span className="fl-name">New balance (reducing)</span><span className="fl-formula">Balance + Monthly interest − Payment</span></li>
                    <li><span className="fl-name">Annual depreciation</span><span className="fl-formula">(Purchase price − Resale value) ÷ Years</span></li>
                    <li><span className="fl-name">Value after n years</span><span className="fl-formula">Purchase price − (n × Annual depreciation)</span></li>
                  </ul>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">8. Property & Home Loans</div>
                  <ul className="sg-list formula-list">
                    <li><span className="fl-name">Deposit amount</span><span className="fl-formula">Property value × deposit%</span></li>
                    <li><span className="fl-name">Loan amount</span><span className="fl-formula">Property value − Deposit (± bundled costs)</span></li>
                    <li><span className="fl-name">Annual interest</span><span className="fl-formula">Loan balance × annual interest rate</span></li>
                    <li><span className="fl-name">Gross rental yield</span><span className="fl-formula">Annual rent ÷ Property value × 100</span></li>
                  </ul>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">9. Water, Energy & Standard Drinks</div>
                  <ul className="sg-list formula-list">
                    <li><span className="fl-name">Water used</span><span className="fl-formula">Flow rate (L/min) × Duration (min)</span></li>
                    <li><span className="fl-name">Water saved</span><span className="fl-formula">Standard flow usage − Efficient flow usage</span></li>
                    <li><span className="fl-name">kJ burned (hrs)</span><span className="fl-formula">Activity rate (kJ/hr) × Time (hrs)</span></li>
                    <li><span className="fl-name">Burn time (mins)</span><span className="fl-formula">(Food kJ ÷ Activity rate kJ/hr) × 60</span></li>
                    <li><span className="fl-name">Burn time (hrs)</span><span className="fl-formula">Food kJ ÷ Activity rate (kJ/hr)</span></li>
                    <li><span className="fl-name">Food equivalent</span><span className="fl-formula">kJ burned ÷ kJ per food item</span></li>
                    <li><span className="fl-name">Standard drinks</span><span className="fl-formula">Volume (mL) × (ABV% ÷ 100) × 0.789 ÷ 10</span></li>
                  </ul>
                  <p className="sg-note">Activity rates are given in kJ/hr (e.g. soccer 2,500 kJ/hr, running 2,200 kJ/hr, walking 1,000 kJ/hr). These are always provided in the question context.</p>
                  <p className="sg-note">Standard drinks: 0.789 is the ethanol density (g/mL). Dividing by 10 converts grams to standard drinks (1 standard drink = 10g pure alcohol).</p>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">10. Map & Scale Reading</div>
                  <ul className="sg-list formula-list">
                    <li><span className="fl-name">Actual distance (km)</span><span className="fl-formula">Map distance (cm) × Scale ÷ 100,000</span></li>
                    <li><span className="fl-name">Travel time</span><span className="fl-formula">Actual distance ÷ Speed</span></li>
                  </ul>
                  <p className="sg-note">Example: 10 cm on a 1:15,000 map → 10 × 15,000 ÷ 100,000 = 1.5 km.</p>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">11. Business Profit</div>
                  <ul className="sg-list formula-list">
                    <li><span className="fl-name">Gross profit</span><span className="fl-formula">Revenue − Cost of Goods Sold (COGS)</span></li>
                    <li><span className="fl-name">Net profit</span><span className="fl-formula">Gross profit − Operating expenses</span></li>
                    <li><span className="fl-name">Net profit margin</span><span className="fl-formula">Net profit ÷ Revenue × 100</span></li>
                  </ul>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">12. FRV Pro-Tips</div>
                  <ul className="sg-list">
                    <li><strong>The Zero Check:</strong> Count zeros carefully in volume conversions. 1 m³ = 1,000,000 cm³, not 1,000.</li>
                    <li><strong>Fraction → Decimal:</strong> If stuck on a division problem, convert to a decimal immediately — it's faster in a timed environment.</li>
                    <li><strong>Estimation:</strong> Short on time? Estimate to eliminate two obviously wrong answers and improve your guessing odds.</li>
                  </ul>
                </div>

              </div>
            )}
          </div>
        )}

        {activeTab === 'mechanical' && (
          <div className="strategy-guide">
            <button
              className={`strategy-guide-toggle${mechGuideOpen ? ' sgt-open' : ''}`}
              onClick={() => setMechGuideOpen(o => !o)}
            >
              <span className="tft-icon">{mechGuideOpen ? '▾' : '▸'}</span>
              Mechanical Reasoning Guide
            </button>

            {mechGuideOpen && (
              <div className="strategy-guide-body">

                <div className="sg-section">
                  <div className="sg-heading">1. Gears — Direction of Rotation</div>
                  <ul className="sg-list">
                    <li><strong>Meshing gears</strong> always rotate in <em>opposite</em> directions.</li>
                    <li><strong>Belt-connected gears (open belt)</strong> rotate in the <em>same</em> direction.</li>
                    <li><strong>Belt-connected gears (crossed belt)</strong> rotate in <em>opposite</em> directions.</li>
                    <li>Trace each connection in order — every mesh or crossed belt reverses direction.</li>
                  </ul>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">2. Gears — Speed &amp; Ratios</div>
                  <ul className="sg-list formula-list">
                    <li><span className="fl-name">Gear ratio</span><span className="fl-formula">Teeth on driven ÷ Teeth on driver</span></li>
                    <li><span className="fl-name">Speed of driven</span><span className="fl-formula">Driver speed × (Driver teeth ÷ Driven teeth)</span></li>
                  </ul>
                  <ul className="sg-list">
                    <li><strong>Smaller gear = faster rotation.</strong> A gear with half the teeth turns twice as fast.</li>
                    <li>For size-based questions: diameter ratio works the same as tooth ratio.</li>
                  </ul>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">3. Pulleys &amp; Mechanical Advantage</div>
                  <ul className="sg-list">
                    <li><strong>Fixed pulley:</strong> changes direction of force only — no mechanical advantage.</li>
                    <li><strong>Movable pulley:</strong> each rope section supporting the load shares the weight.</li>
                    <li><strong>Effort required</strong> = Load ÷ Number of rope sections supporting the movable pulley.</li>
                    <li>Example: 2 rope sections supporting a 60 kg load → effort = 30 kg.</li>
                  </ul>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">4. Belts — Slip &amp; Friction</div>
                  <ul className="sg-list">
                    <li>The greater the <strong>angle of wrap</strong> around the drive wheel, the greater the friction.</li>
                    <li>A <strong>cross belt</strong> wraps more than 180° — highest friction, least likely to slip.</li>
                    <li>A standard open belt has a smaller angle of wrap and slips more easily under load.</li>
                  </ul>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">5. Levers &amp; Linkages</div>
                  <ul className="sg-list">
                    <li>A lever with a <strong>fixed pivot</strong> reverses direction across the fulcrum — one side up, other side down.</li>
                    <li>A <strong>non-fixed pivot arm</strong> swings in an arc — the hook maintains a constant radius from the pivot.</li>
                    <li>Pushing or pulling a handle <em>towards</em> the pivot causes the far end to move <em>away</em>, and vice versa.</li>
                  </ul>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">6. Cams &amp; Cranks</div>
                  <ul className="sg-list">
                    <li><strong>Number of punches per rotation</strong> = number of lobes on the cam.</li>
                    <li>A <strong>crank-slider</strong> converts continuous rotation into <em>to-and-fro</em> (reciprocating) motion.</li>
                    <li>A <strong>slot mechanism</strong> (Scotch yoke) creates to-and-fro motion with <em>pauses</em> at the extremes.</li>
                    <li>If a connecting rod can only push (not pull), the output will move in one direction then stop — not oscillate.</li>
                  </ul>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">7. Conveyor Belt Fault Finding</div>
                  <ul className="sg-list">
                    <li>Identify which floors <em>work</em> and which <em>don't</em>.</li>
                    <li>The broken belt is the one connecting the <strong>last working floor</strong> to the <strong>first non-working floor</strong>.</li>
                    <li>If the motor is faulty, <em>no</em> floors work. If only some are out, the motor is fine.</li>
                  </ul>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">8. Springs &amp; Forces</div>
                  <ul className="sg-list">
                    <li>A block between two opposing springs moves <strong>toward the stronger spring's anchor point</strong>.</li>
                    <li>If spring Z is 3× stronger than X, the block moves toward the end anchored by Z.</li>
                  </ul>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">9. Fluid Pressure</div>
                  <ul className="sg-list formula-list">
                    <li><span className="fl-name">Pressure at bottom</span><span className="fl-formula">P = ρ × g × h</span></li>
                  </ul>
                  <ul className="sg-list">
                    <li>Pressure depends on the <strong>height (depth) of liquid</strong> above the point — not the volume.</li>
                    <li>As water level drops, pressure at the bottom <em>decreases</em>.</li>
                  </ul>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">10. Electrical Circuits</div>
                  <ul className="sg-list">
                    <li>A bulb only lights if it is in a <strong>complete (closed) circuit path</strong>.</li>
                    <li>An open switch breaks the circuit — any bulb depending on that path will not light.</li>
                    <li>Trace from the power source through each switch: only follow paths where all switches are closed.</li>
                  </ul>
                </div>

              </div>
            )}
          </div>
        )}

        {activeTab === 'literacy' && (
          <>
          <div className="strategy-guide">
            <button
              className={`strategy-guide-toggle${strategyOpen ? ' sgt-open' : ''}`}
              onClick={() => setStrategyOpen(o => !o)}
            >
              <span className="tft-icon">{strategyOpen ? '▾' : '▸'}</span>
              Literacy Strategy Guide
            </button>

            {strategyOpen && (
              <div className="strategy-guide-body">
                <div className="sg-section">
                  <div className="sg-heading">1. The "Reverse Reading" Method</div>
                  <ul className="sg-list">
                    <li>Do not read the article first — it is a waste of time.</li>
                    <li><strong>Scan the questions first.</strong> Identify keywords (names, dates, specific concepts) so you know exactly what you are hunting for in the text.</li>
                    <li><strong>Scan the text.</strong> Look for topic sentences and conclusion paragraphs to grasp the main argument quickly.</li>
                  </ul>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">2. The "Elimination" Strategy</div>
                  <ul className="sg-list">
                    <li><strong>Beware of Extremes.</strong> Be suspicious of answers containing absolute words: <em>always, never, all, none, impossible, perfectly</em>. If an option is an absolute, it is rarely correct unless explicitly supported.</li>
                    <li><strong>Ignore Outside Knowledge.</strong> Even if you know a topic well, answer only based on the provided text. If it isn't written there, it is not "True" for the purpose of the test.</li>
                  </ul>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">3. Categorising Question Types</div>
                  <ul className="sg-list">
                    <li><strong>Inference:</strong> The answer is not explicitly stated. Deduce it from tone, metaphors, or adjectives (e.g., "lukewarm silence" = not positive).</li>
                    <li><strong>Vocabulary in Context:</strong> Use the surrounding sentence. Determine if the word has a positive or negative connotation in that specific context.</li>
                    <li><strong>Main Purpose:</strong> Ensure the answer summarises the <em>whole</em> text, not just one specific detail or paragraph.</li>
                    <li><strong>Fact Extraction:</strong> Find the keyword from the question in the text. The answer is almost always in that sentence or the one immediately following.</li>
                  </ul>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">4. Time Management — The "60-Second Rule"</div>
                  <ul className="sg-list">
                    <li><strong>Don't get stuck.</strong> If a question is taking longer than 60–90 seconds, flag it, make a best guess, and move on.</li>
                    <li><strong>All points are equal.</strong> A simple question at the end of the test is worth the same as a difficult one in the middle. Do not sacrifice easy points by getting stuck on a "rabbit hole" question.</li>
                  </ul>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">5. Review Routine (Post-Practice)</div>
                  <ul className="sg-list">
                    <li><strong>Analyse the "Why."</strong> If you get a question wrong, don't just note the correct answer — identify why the distractor was tempting. Was it a "half-truth" (correct in the beginning, wrong in the conclusion)? Did it use a common stereotype?</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="strategy-guide">
            <button
              className={`strategy-guide-toggle${logicLoopsOpen ? ' sgt-open' : ''}`}
              onClick={() => setLogicLoopsOpen(o => !o)}
            >
              <span className="tft-icon">{logicLoopsOpen ? '▾' : '▸'}</span>
              Advanced Elimination: Logic Loops
            </button>

            {logicLoopsOpen && (
              <div className="strategy-guide-body">
                <div className="sg-section">
                  <div className="sg-heading">1. The "Purpose" Loop</div>
                  <ul className="sg-list">
                    <li><strong>The Problem:</strong> You are stuck between the "actual" purpose and an option that seems "good," but is just a byproduct of the text.</li>
                    <li><strong>The Strategy:</strong> Always look for the Call to Action or the Main Claim.</li>
                    <li><strong>The Elimination:</strong> If an option is true based on the text but doesn't explain why the author wrote it, eliminate it.</li>
                    <li><strong>Example:</strong> If the text is a petition about trucks, "the trucks are noisy" might be a fact in the text, but the purpose of the text is to get people to email the council. The fact supports the purpose, but it is not the purpose itself.</li>
                  </ul>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">2. The "Inference" Loop</div>
                  <ul className="sg-list">
                    <li><strong>The Problem:</strong> You find yourself "reading between the lines" too much, or conversely, being too literal and missing the point.</li>
                    <li><strong>The Strategy:</strong> Use the "Tight-Leash" Rule.</li>
                    <li><strong>The Elimination:</strong> An inference must be true if the text is true. If you have to say "well, it's probably true, but not necessarily," eliminate that option immediately.</li>
                    <li><strong>Example:</strong> If the text says "the budget was cut, leading to fewer staff," the inference "the quality of service dropped" might be probable, but "the department is now smaller" is necessarily true. Stick to the necessary truth.</li>
                  </ul>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">3. The "Summary" Loop</div>
                  <ul className="sg-list">
                    <li><strong>The Problem:</strong> You have two options that both summarise the text accurately, but one is "more" correct.</li>
                    <li><strong>The Strategy:</strong> Check for Scope.</li>
                    <li><strong>The Elimination:</strong> Look for the option that covers the entire text, not just one paragraph or one supporting detail.</li>
                    <li><strong>Example:</strong> If the text discusses the history of a building, its current decay, and a plan for renovation, the summary "The building is falling down" is too narrow. "The building's historical status makes its current decay and proposed renovation a complex public issue" is correct because it captures the scope of all three parts.</li>
                  </ul>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">Final Test-Day Checklist for Elimination</div>
                  <p className="sg-intro">Whenever you are down to your last two options and feel the loop starting:</p>
                  <ul className="sg-list">
                    <li><strong>Stop.</strong> Do not re-read the whole passage.</li>
                    <li><strong>Ask:</strong> "What is the one specific word or phrase in the text that makes this option wrong?"</li>
                    <li><strong>Search:</strong> Look for the "Over-Extender" trigger (e.g., <em>always/never</em>), the "Factually Absent" claim, or the "Contextually Mismatched" relationship.</li>
                    <li><strong>Decide:</strong> Usually, one of the two options will have a "fatal flaw" — a single word that contradicts the text — once you stop looking for the "right" answer and start hunting for the "wrong" word.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="strategy-guide">
            <button
              className={`strategy-guide-toggle${elimMethodOpen ? ' sgt-open' : ''}`}
              onClick={() => setElimMethodOpen(o => !o)}
            >
              <span className="tft-icon">{elimMethodOpen ? '▾' : '▸'}</span>
              Systematic Elimination Method
            </button>

            {elimMethodOpen && (
              <div className="strategy-guide-body">
                <div className="sg-section">
                  <div className="sg-heading">1. The "Pre-Read" Filter</div>
                  <ul className="sg-list">
                    <li>Before reading the paragraph, read the question and all four answer options. This creates a "search query" in your brain, ensuring you are scanning the text for specific evidence rather than passively absorbing information.</li>
                  </ul>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">2. The Three-Category Elimination</div>
                  <p className="sg-intro">When evaluating the four answer options, immediately sort them into these three categories:</p>
                  <ul className="sg-list">
                    <li><strong>Category 1 — "Factually Absent" (Eliminate First):</strong> These options discuss concepts not in the text at all. If an option mentions an idea, reason, or conclusion that cannot be mapped to a specific sentence or phrase, cross it out immediately.</li>
                    <li><strong>Category 2 — "Over-Extender" (Eliminate Second):</strong> These options use absolute language (<em>always, never, definitely, entirely</em>) that the text does not support. Even if an option sounds "kind of" right, the absolute nature of the claim makes it incorrect. Eliminate any option that makes a broader claim than the text allows.</li>
                    <li><strong>Category 3 — "Contextually Mismatched" (The Final Choice):</strong> These options use words from the text but twist the logical relationship between them (e.g., confusing cause and effect, or misattributing a quote). Check the "Evidence Chain" — if the text says "A causes B" but the option says "B causes A," it is a distractor.</li>
                  </ul>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">3. Applying the "Evidence Chain"</div>
                  <p className="sg-intro">Use this step-by-step to confirm your final answer is the strongest:</p>
                  <ul className="sg-list">
                    <li><strong>Locate the anchor:</strong> Find the exact sentence in the text that addresses the question.</li>
                    <li><strong>Verify the logic:</strong> Does your chosen answer directly paraphrase the evidence? If you have to assume outside knowledge to make the answer work, it is likely the wrong choice.</li>
                    <li><strong>Cross-check:</strong> If two options seem correct, choose the one that is narrower and more directly supported by the text. Avoid any option that requires "leaps" in logic.</li>
                  </ul>
                </div>

                <div className="sg-section">
                  <div className="sg-heading">4. The "Not a Reason" Question</div>
                  <ul className="sg-list">
                    <li><strong>Identify the goal:</strong> If the question asks for a reason for a quote in a news report, look for authoritative and neutral purposes (providing facts, source attribution).</li>
                    <li><strong>Identify the Bias Trigger:</strong> Any option implying the reporter is expressing a personal opinion, favouring one side, or trying to sway the reader is usually the "not a reason" answer — it contradicts the professional standard of journalistic neutrality.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          </>
        )}

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
      </>}
    </div>}
  </div>
  )
}
