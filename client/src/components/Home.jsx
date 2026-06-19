import { useState } from 'react'

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

export default function Home({ onStart, loading, error, section, onSectionChange }) {
  const [mode, setMode] = useState('full')
  const [customCount, setCustomCount] = useState(10)

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

  return (
    <div className="home">
      <div className="home-hero">
        <div className="hero-badge">Fire Rescue Victoria</div>
        <h1>{content.title}</h1>
        <p className="hero-sub">Aptitude Assessment — Recruitment Preparation</p>

        <div className="section-toggle">
          <button
            className={`section-toggle-btn${section === 'numeracy' ? ' stb-active' : ''}`}
            onClick={() => onSectionChange('numeracy')}
          >
            Numeracy
          </button>
          <button
            className={`section-toggle-btn${section === 'literacy' ? ' stb-active' : ''}`}
            onClick={() => onSectionChange('literacy')}
          >
            Literacy
          </button>
          <button
            className={`section-toggle-btn${section === 'abstract' ? ' stb-active' : ''}`}
            onClick={() => onSectionChange('abstract')}
          >
            Abstract Reasoning
          </button>
        </div>
      </div>

      <div className="home-card">
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
      </div>
    </div>
  )
}
