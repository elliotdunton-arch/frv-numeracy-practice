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
