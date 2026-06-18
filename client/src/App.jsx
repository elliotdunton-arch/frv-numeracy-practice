import { useState } from 'react'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Results from './components/Results'

export default function App() {
  const [screen, setScreen] = useState('home')
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState({})
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)
  const [timeExpired, setTimeExpired] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [totalTime, setTotalTime] = useState(35 * 60)

  const startTest = async (customCount = null) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/questions')
      if (!res.ok) throw new Error('Failed to load questions')
      const data = await res.json()
      const selected = data.slice(0, customCount ?? 30)
      setQuestions(selected)
      setTotalTime(customCount ? customCount * 70 : 35 * 60)
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

  const submitTest = (userAnswers, expired = false) => {
    setAnswers(userAnswers)
    setEndTime(Date.now())
    setTimeExpired(expired)
    setScreen('results')
  }

  const restartTest = () => {
    setScreen('home')
  }

  return (
    <div className="app">
      {screen === 'home' && (
        <Home onStart={startTest} loading={loading} error={error} />
      )}
      {screen === 'quiz' && (
        <Quiz
          questions={questions}
          onSubmit={submitTest}
          totalTime={totalTime}
        />
      )}
      {screen === 'results' && (
        <Results
          questions={questions}
          answers={answers}
          startTime={startTime}
          endTime={endTime}
          timeExpired={timeExpired}
          onRestart={restartTest}
        />
      )}
    </div>
  )
}
