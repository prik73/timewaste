import { useState, useEffect } from 'react'
import './App.css'
import type { QuizMode, SubjectId } from './types'
import { SUBJECTS } from './constants'
import { useQuiz } from './hooks/useQuiz'
import { useTheme } from './hooks/useTheme'
import { SubjectMenu } from './components/SubjectMenu'
import { QuizMenu } from './components/QuizMenu'
import { Header } from './components/Header'
import { ResetModal } from './components/ResetModal'
import { ScoreBanner } from './components/ScoreBanner'
import { QuestionCard } from './components/QuestionCard'
import { SubmitArea } from './components/SubmitArea'
import { ResultFooter } from './components/ResultFooter'
import { PerfectScoreModal } from './components/PerfectScoreModal'

function modeLabel(mode: QuizMode): string {
  const prefix = mode.practice ? 'Practice · ' : ''
  if (mode.type === 'full')  return `${prefix}Full Mock Test`
  if (mode.type === 'quick') return `${prefix}Quick Quiz · ${mode.count} Questions`
  return `${prefix}Week ${mode.week} · ${SUBJECTS[mode.subject].weekLabels[mode.week]}`
}

const DEFAULT_MODE: QuizMode = { subject: 'gender', type: 'full' }

export default function App() {
  const { theme, toggle: toggleTheme } = useTheme()
  const [activeSubject, setActiveSubject] = useState<SubjectId | null>(null)
  const [mode, setMode] = useState<QuizMode | null>(null)
  const [showConfirm, setShowConfirm] = useState(false)
  const [showPerfect, setShowPerfect] = useState(false)

  const activeMode = mode ?? DEFAULT_MODE
  const quiz = useQuiz(activeMode)

  const isPerfect = quiz.submitted && quiz.score === quiz.total && activeMode.subject === 'iot'
  useEffect(() => {
    if (isPerfect) setShowPerfect(true)
  }, [isPerfect])

  const handleSubjectSelect = (chosen: SubjectId) => {
    const stalePrefix = chosen === 'gender' ? 'mooc_quiz_analytics' : 'mooc_quiz_gender';
    
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith(stalePrefix)) {
        localStorage.removeItem(key)
      }
    })
    
    setActiveSubject(chosen)
  }

  if (activeSubject === null) {
    return <SubjectMenu theme={theme} onToggleTheme={toggleTheme} onSelect={handleSubjectSelect} />
  }

  if (mode === null) {
    return <QuizMenu 
      theme={theme} 
      activeSubject={activeSubject} 
      onToggleTheme={toggleTheme} 
      onSelect={setMode} 
      onBack={() => setActiveSubject(null)} 
    />
  }

  const handleReset = () => {
    quiz.reset()
    setShowConfirm(false)
    setShowPerfect(false)
  }

  const handleChangeMode = () => {
    setShowConfirm(false)
    setMode(null)
  }

  return (
    <div className="app">
      <Header
        title={SUBJECTS[activeMode.subject].title}
        label={modeLabel(mode)}
        answered={quiz.answered}
        total={quiz.total}
        score={quiz.score}
        submitted={quiz.submitted}
        isPractice={mode.practice}
        progress={quiz.progress}
        theme={theme}
        onToggleTheme={toggleTheme}
        onReset={() => setShowConfirm(true)}
        onBack={handleChangeMode}
      />

      {isPerfect && showPerfect && (
        <PerfectScoreModal
          score={quiz.score}
          total={quiz.total}
          onClose={() => setShowPerfect(false)}
        />
      )}

      {showConfirm && (
        <ResetModal
          onConfirm={handleReset}
          onCancel={() => setShowConfirm(false)}
          onChangeMode={handleChangeMode}
        />
      )}

      <main className="main">
        {quiz.submitted && (
          <ScoreBanner score={quiz.score} total={quiz.total} unanswered={quiz.unanswered} scoreGrade={quiz.scoreGrade} />
        )}

        <div className="questions-list">
          {quiz.questions.map((q, i) => (
            <QuestionCard
              key={q.q}
              index={i}
              question={q}
              selected={quiz.answers[i]}
              submitted={quiz.submitted}
              isPractice={mode.practice}
              onAnswer={quiz.answer}
            />
          ))}
        </div>

        {quiz.submitted
          ? <ResultFooter score={quiz.score} total={quiz.total} scoreGrade={quiz.scoreGrade} onRetake={() => setShowConfirm(true)} />
          : !mode.practice && <SubmitArea answered={quiz.answered} total={quiz.total} onSubmit={quiz.submit} />
        }
      </main>
    </div>
  )
}
