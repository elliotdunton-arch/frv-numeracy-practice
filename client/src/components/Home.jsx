import { useState } from 'react'

export default function Home({ onStart, loading, error }) {
  const [mode, setMode] = useState('full')
  const [customCount, setCustomCount] = useState(10)

  const presets = [5, 10, 20, 30, 40]

  const handleCountInput = (val) => {
    const n = parseInt(val)
    if (!isNaN(n)) setCustomCount(Math.min(40, Math.max(1, n)))
  }

  const customTotalSecs = customCount * 70
  const customMins = Math.floor(customTotalSecs / 60)
  const customSecs = customTotalSecs % 60
  const customTimeDisplay = `${customMins}:${String(customSecs).padStart(2, '0')}`

  const categories = [
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

  const handleStart = () => {
    onStart(mode === 'custom' ? customCount : null)
  }

  return (
    <div className="home">
      <div className="home-hero">
        <div className="hero-badge">Fire Rescue Victoria</div>
        <h1>Numeracy Practice Test</h1>
        <p className="hero-sub">Aptitude Assessment — Recruitment Preparation</p>
      </div>

      <div className="home-card">
        <p className="card-desc">
          This practice test mirrors the FRV Numeracy Skills Assessment. Questions are drawn from
          numerical and mathematical contexts including words, tables, graphs and diagrams.
        </p>

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
            <span className="info-num">{mode === 'full' ? 40 : customCount}</span>
            <span className="info-label">Questions</span>
          </div>
          <div className="info-divider" />
          <div className="info-box">
            <span className={`info-num ${mode === 'custom' ? 'info-num-time' : ''}`}>
              {mode === 'full' ? '46' : customTimeDisplay}
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
                max="40"
                value={customCount}
                onChange={e => handleCountInput(e.target.value)}
                className="count-input"
              />
              <span className="count-input-hint">questions (1–40) — or pick a preset above</span>
            </div>
          </div>
        )}

        <div className="home-question-types">
          <p className="section-label">Question Format</p>
          <div className="qtype-row">
            <span className="qtype-chip type-number_input">Calculated Number Entry</span>
          </div>
          <p className="format-note">Every answer requires calculation. Some questions build on data or results from earlier questions in the same scenario.</p>
        </div>

        <div className="home-categories">
          <p className="section-label">Topics Covered</p>
          <div className="cat-grid">
            {categories.map(cat => (
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
            <li>A scientific calculator is available in the test</li>
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
