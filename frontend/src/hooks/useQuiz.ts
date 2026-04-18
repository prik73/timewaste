import { useState, useEffect, useCallback, useMemo } from 'react'
import type { QuizState } from '../types'
import { STORAGE_KEY } from '../constants'
import { QUESTIONS } from '../data/questions'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function createFreshState(): QuizState {
  const qs = shuffle(QUESTIONS).map(q => ({ ...q, o: shuffle(q.o) }))
  return { questions: qs, answers: new Array(qs.length).fill(null), submitted: false }
}

function loadState(): QuizState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return JSON.parse(saved)
  } catch { /* ignore */ }
  return createFreshState()
}

export function useQuiz() {
  const [state, setState] = useState<QuizState>(loadState)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const answer = useCallback((idx: number, choice: string) => {
    setState(s => {
      if (s.submitted) return s
      const answers = [...s.answers]
      answers[idx] = choice
      return { ...s, answers }
    })
  }, [])

  const submit = useCallback(() => {
    setState(s => ({ ...s, submitted: true }))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const reset = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    setState(createFreshState())
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const { questions, answers, submitted } = state
  const total = questions.length

  const answered = useMemo(
    () => answers.reduce((n, a) => n + (a !== null ? 1 : 0), 0),
    [answers],
  )

  const score = useMemo(
    () => submitted
      ? answers.reduce<number>((n, a, i) => n + (a === questions[i].a ? 1 : 0), 0)
      : 0,
    [submitted, answers, questions],
  )

  const unanswered  = total - answered
  const progress    = (answered / total) * 100
  const scoreGrade  = score / total >= 0.8 ? 'score-great' : score / total >= 0.5 ? 'score-ok' : 'score-low'

  return { questions, answers, submitted, total, answered, unanswered, score, progress, scoreGrade, answer, submit, reset }
}
