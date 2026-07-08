import { useState } from 'react'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Results from './components/Results'

export default function App() {
  const [screen, setScreen] = useState('home')
  const [section, setSection] = useState('numeracy')
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState({})
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)
  const [timeExpired, setTimeExpired] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [totalTime, setTotalTime] = useState(35 * 60)
  const [pausedMs, setPausedMs] = useState(0)
  const [bookmarks, setBookmarks] = useState(new Set())

  const startTest = async (customCount = null, selectedTopics = null, filterType = null, ordered = false, fill = false) => {
    setLoading(true)
    setError(null)
    try {
      let endpoint = section === 'literacy' ? '/api/literacy-questions' : section === 'abstract' ? '/api/abstract-questions' : section === 'mechanical' ? '/api/mechanical-questions' : '/api/questions'
      if (section === 'literacy' && selectedTopics && selectedTopics.length > 0) {
        const param = filterType === 'sets' ? 'sets' : 'categories'
        endpoint += `?${param}=` + encodeURIComponent(selectedTopics.join(','))
        if (ordered) endpoint += '&ordered=true'
      } else if (section === 'mechanical' && selectedTopics && selectedTopics.length > 0) {
        endpoint += '?sets=' + encodeURIComponent(selectedTopics.join(','))
        if (ordered) endpoint += '&ordered=true'
        if (fill) endpoint += '&fill=true'
      } else if (selectedTopics && selectedTopics.length > 0) {
        endpoint += '?topics=' + encodeURIComponent(selectedTopics.join(','))
      }
      const res = await fetch(endpoint)
      if (!res.ok) throw new Error('Failed to load questions')
      const data = await res.json()
      const MECH_FULL = 32
      const selected = section === 'literacy'
        ? data
        : section === 'mechanical'
          ? (customCount ? data.slice(0, customCount) : data.slice(0, MECH_FULL))
          : data.slice(0, customCount ?? 30)
      setQuestions(selected)
      setTotalTime(section === 'mechanical' ? Math.round(selected.length * 37.5) : selected.length * 70)
      setAnswers({})
      setStartTime(Date.now())
      setEndTime(null)
      setTimeExpired(false)
      setScreen('quiz')
    } catch (err) {
      setError('Could not connect to the server. Make sure the server is running on port 3001.')
    } finally {
      setLoading(false)
    }
  }

  const submitTest = (userAnswers, expired = false, pausedMillis = 0, bmarks = new Set()) => {
    setAnswers(userAnswers)
    setBookmarks(bmarks)
    setEndTime(Date.now())
    setTimeExpired(expired)
    setPausedMs(pausedMillis)
    setScreen('results')
  }

  const restartTest = () => {
    setBookmarks(new Set())
    setScreen('home')
  }

  const retryIncorrect = (incorrectQuestions) => {
    setQuestions(incorrectQuestions)
    setTotalTime(section === 'mechanical' ? Math.round(incorrectQuestions.length * 37.5) : incorrectQuestions.length * 70)
    setAnswers({})
    setStartTime(Date.now())
    setEndTime(null)
    setTimeExpired(false)
    setScreen('quiz')
  }

  const resitTest = async (questionIds, sec) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/questions-by-ids', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: questionIds }),
      })
      if (!res.ok) throw new Error('Failed to load questions')
      const qs = await res.json()
      if (qs.length === 0) throw new Error('No questions found')
      setSection(sec)
      setQuestions(qs)
      setTotalTime(sec === 'mechanical' ? Math.round(qs.length * 37.5) : qs.length * 70)
      setAnswers({})
      setBookmarks(new Set())
      setStartTime(Date.now())
      setEndTime(null)
      setTimeExpired(false)
      setScreen('quiz')
    } catch (err) {
      setError('Could not load the previous test. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      {screen === 'home' && (
        <Home
          onStart={startTest}
          onResit={resitTest}
          loading={loading}
          error={error}
          section={section}
          onSectionChange={setSection}
        />
      )}
      {screen === 'quiz' && (
        <Quiz
          questions={questions}
          onSubmit={submitTest}
          totalTime={totalTime}
          section={section}
        />
      )}
      {screen === 'results' && (
        <Results
          questions={questions}
          answers={answers}
          startTime={startTime}
          endTime={endTime}
          timeExpired={timeExpired}
          section={section}
          onRestart={restartTest}
          onRetryIncorrect={retryIncorrect}
          pausedMs={pausedMs}
          bookmarks={bookmarks}
        />
      )}
    </div>
  )
}
