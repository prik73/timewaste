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

export type SubjectId = 'gender' | 'analytics' | 'iot'

export type QuizMode =
  | { subject: SubjectId; type: 'full'; practice?: boolean }
  | { subject: SubjectId; type: 'quick'; count: number; practice?: boolean }
  | { subject: SubjectId; type: 'week'; week: number; practice?: boolean }
