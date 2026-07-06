const RESULTS_KEY = 'frv_results'
const USERNAME_KEY = 'frv_username'

export function getUsername() {
  return localStorage.getItem(USERNAME_KEY) || ''
}

export function setUsername(name) {
  localStorage.setItem(USERNAME_KEY, name.trim())
}

export function getResults() {
  try {
    return JSON.parse(localStorage.getItem(RESULTS_KEY) || '[]')
  } catch {
    return []
  }
}

export function saveResult(entry) {
  const results = getResults()
  results.unshift(entry) // most recent first
  localStorage.setItem(RESULTS_KEY, JSON.stringify(results))
}

export function getResultsForUser(username) {
  return getResults().filter(r => r.username === username)
}

export function deleteResult(id) {
  const results = getResults().filter(r => r.id !== id)
  localStorage.setItem(RESULTS_KEY, JSON.stringify(results))
}

export function getKnownUsers() {
  const names = getResults().map(r => r.username)
  return [...new Set(names)]
}

const REVISION_KEY = 'frv_revision'

export function getRevision() {
  try {
    return JSON.parse(localStorage.getItem(REVISION_KEY) || '[]')
  } catch {
    return []
  }
}

export function addToRevision(question, comment = '') {
  const items = getRevision()
  const idx = items.findIndex(i => i.question.id === question.id)
  const entry = { savedId: Date.now(), savedDate: new Date().toISOString(), comment, question }
  if (idx >= 0) {
    items[idx] = entry
  } else {
    items.unshift(entry)
  }
  localStorage.setItem(REVISION_KEY, JSON.stringify(items))
}

export function removeFromRevision(questionId) {
  const items = getRevision().filter(i => i.question.id !== questionId)
  localStorage.setItem(REVISION_KEY, JSON.stringify(items))
}

export function updateRevisionComment(questionId, comment) {
  const items = getRevision().map(i =>
    i.question.id === questionId ? { ...i, comment } : i
  )
  localStorage.setItem(REVISION_KEY, JSON.stringify(items))
}

export function isInRevision(questionId) {
  return getRevision().some(i => i.question.id === questionId)
}
