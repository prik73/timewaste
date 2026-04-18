import { useState } from 'react'
import './App.css'
import { useQuiz } from './hooks/useQuiz'
import { useTheme } from './hooks/useTheme'
import { Header } from './components/Header'
import { ResetModal } from './components/ResetModal'
import { ScoreBanner } from './components/ScoreBanner'
import { QuestionCard } from './components/QuestionCard'
import { SubmitArea } from './components/SubmitArea'
import { ResultFooter } from './components/ResultFooter'

export default function App() {
  const { theme, toggle: toggleTheme } = useTheme()
  const { questions, answers, submitted, total, answered, unanswered, score, progress, scoreGrade, answer, submit, reset } = useQuiz()
  const [showConfirm, setShowConfirm] = useState(false)

  const handleReset = () => {
    reset()
    setShowConfirm(false)
  }

  return (
    <div className="app">
      <Header
        answered={answered}
        total={total}
        score={score}
        submitted={submitted}
        progress={progress}
        theme={theme}
        onToggleTheme={toggleTheme}
        onReset={() => setShowConfirm(true)}
      />

      {showConfirm && (
        <ResetModal onConfirm={handleReset} onCancel={() => setShowConfirm(false)} />
      )}

      <main className="main">
        {submitted && (
          <ScoreBanner score={score} total={total} unanswered={unanswered} scoreGrade={scoreGrade} />
        )}

        <div className="questions-list">
          {questions.map((q, i) => (
            <QuestionCard
              key={q.q}
              index={i}
              question={q}
              selected={answers[i]}
              submitted={submitted}
              onAnswer={answer}
            />
          ))}
        </div>

        {submitted
          ? <ResultFooter score={score} total={total} scoreGrade={scoreGrade} onRetake={() => setShowConfirm(true)} />
          : <SubmitArea answered={answered} total={total} onSubmit={submit} />
        }
      </main>
    </div>
  )
}
