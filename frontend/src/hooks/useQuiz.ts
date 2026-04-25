import { useState, useEffect, useCallback, useMemo } from 'react'
import type { QuizState, QuizMode, Question } from '../types'
import { SUBJECTS } from '../constants'
import { QUESTIONS } from '../data/questions'
import { ANALYTICS_QUESTIONS } from '../data/analyticsQuestions'
import { IOT_QUESTIONS } from '../data/iotQuestions'

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
  const base = `mooc_quiz_${mode.subject}`
  if (mode.type === 'full')  return `${base}_full${p}`
  if (mode.type === 'quick') return `${base}_quick_${mode.count}${p}`
  return `${base}_week_${mode.week}${p}`
}

function poolForMode(mode: QuizMode): Question[] {
  const pool = mode.subject === 'analytics' ? ANALYTICS_QUESTIONS
             : mode.subject === 'iot'       ? IOT_QUESTIONS
             : QUESTIONS
  const qpw = SUBJECTS[mode.subject].questionsPerWeek
  if (mode.type === 'full') return pool
  if (mode.type === 'quick') return shuffle(pool).slice(0, mode.count)
  const start = (mode.week - 1) * qpw
  return pool.slice(start, start + qpw)
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
      if (autoSubmit) window.scrollTo({ top: 0, behavior: 'smooth' })
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
