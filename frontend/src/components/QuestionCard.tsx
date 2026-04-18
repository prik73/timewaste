import { memo } from 'react'
import type { Question } from '../types'
import { OPTION_LETTERS } from '../constants'

interface QuestionCardProps {
  index: number
  question: Question
  selected: string | null
  submitted: boolean
  onAnswer: (idx: number, choice: string) => void
}

export const QuestionCard = memo(function QuestionCard({ index, question, selected, submitted, onAnswer }: QuestionCardProps) {
  const correct = question.a

  let cardState = ''
  if (submitted) {
    cardState = selected === correct ? 'card-correct' : selected === null ? 'card-skip' : 'card-wrong'
  }

  return (
    <div className={`question-card ${cardState}`}>
      <div className="question-header">
        <span className="q-number">Q{index + 1}</span>
        {submitted && (
          <span className={`q-badge ${selected === correct ? 'badge-correct' : selected === null ? 'badge-skip' : 'badge-wrong'}`}>
            {selected === correct ? '✓ Correct' : selected === null ? '— Skipped' : '✗ Wrong'}
          </span>
        )}
      </div>
      <p className="question-text">{question.q}</p>
      <div className="options">
        {question.o.map((opt, j) => {
          let cls = 'option'
          if (submitted) {
            if (opt === correct) cls += ' opt-correct'
            else if (opt === selected) cls += ' opt-wrong'
            else cls += ' opt-dim'
          } else {
            if (opt === selected) cls += ' opt-selected'
          }
          return (
            <button
              key={opt}
              className={cls}
              onClick={() => onAnswer(index, opt)}
              disabled={submitted}
            >
              <span className="opt-letter">{OPTION_LETTERS[j]}</span>
              <span className="opt-text">{opt}</span>
            </button>
          )
        })}
      </div>
      {submitted && selected === null && (
        <div className="skip-note">Correct answer: <strong>{correct}</strong></div>
      )}
    </div>
  )
})
