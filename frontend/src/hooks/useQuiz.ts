import { useState, useEffect, useCallback, useMemo } from 'react'
import type { QuizState, QuizMode, Question } from '../types'
import { QUESTIONS_PER_WEEK } from '../constants'
import { QUESTIONS } from '../data/questions'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function storageKey(mode: QuizMode): string {
  const p = mode.practice ? '_p' : ''
  if (mode.type === 'full')  return `mooc_quiz_full${p}`
  if (mode.type === 'quick') return `mooc_quiz_quick_${mode.count}${p}`
  return `mooc_quiz_week_${mode.week}${p}`
}

function poolForMode(mode: QuizMode): Question[] {
  if (mode.type === 'full') return QUESTIONS
  if (mode.type === 'quick') return shuffle(QUESTIONS).slice(0, mode.count)
  const start = (mode.week - 1) * QUESTIONS_PER_WEEK
  return QUESTIONS.slice(start, start + QUESTIONS_PER_WEEK)
}

function createFreshState(mode: QuizMode): QuizState {
  const qs = shuffle(poolForMode(mode)).map(q => ({ ...q, o: shuffle(q.o) }))
  return { questions: qs, answers: new Array(qs.length).fill(null), submitted: false }
}

function loadState(mode: QuizMode): QuizState {
  try {
    const saved = localStorage.getItem(storageKey(mode))
    if (saved) return JSON.parse(saved)
  } catch { /* ignore */ }
  return createFreshState(mode)
}

export function useQuiz(mode: QuizMode) {
  const key = storageKey(mode)

  const [state, setState] = useState<QuizState>(() => loadState(mode))

  // Re-initialise when the mode changes
  useEffect(() => {
    setState(loadState(mode))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  const answer = useCallback((idx: number, choice: string) => {
    setState(s => {
      if (s.submitted) return s
      if (mode.practice && s.answers[idx] !== null) return s
      const answers = [...s.answers]
      answers[idx] = choice
      const autoSubmit = !!mode.practice && answers.every(a => a !== null)
      return { ...s, answers, submitted: autoSubmit || s.submitted }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode.practice])

  const submit = useCallback(() => {
    setState(s => ({ ...s, submitted: true }))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const reset = useCallback(() => {
    localStorage.removeItem(key)
    setState(createFreshState(mode))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  const { questions, answers, submitted } = state
  const total = questions.length

  const answered = useMemo(
    () => answers.reduce((n, a) => n + (a !== null ? 1 : 0), 0),
    [answers],
  )

  const score = useMemo(
    () => answers.reduce<number>((n, a, i) => n + (a === questions[i].a ? 1 : 0), 0),
    [answers, questions],
  )

  const unanswered = total - answered
  const progress   = (answered / total) * 100
  const scoreGrade = score / total >= 0.8 ? 'score-great' : score / total >= 0.5 ? 'score-ok' : 'score-low'

  return { questions, answers, submitted, total, answered, unanswered, score, progress, scoreGrade, answer, submit, reset }
}
