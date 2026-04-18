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
