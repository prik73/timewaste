export interface Question {
  q: string
  o: string[]
  a: string
}

export interface QuizState {
  questions: Question[]
  answers: (string | null)[]
  submitted: boolean
}

export type Theme = 'light' | 'dark'

export type QuizMode =
  | { type: 'full'; practice?: boolean }
  | { type: 'quick'; count: number; practice?: boolean }
  | { type: 'week'; week: number; practice?: boolean }
