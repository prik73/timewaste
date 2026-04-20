import { useState, useRef } from 'react'
import type { QuizMode, Theme, SubjectId } from '../types'
import { SUBJECTS, QUICK_COUNTS } from '../constants'

interface QuizMenuProps {
  theme: Theme
  activeSubject: SubjectId
  onToggleTheme: () => void
  onSelect: (mode: QuizMode) => void
  onBack: () => void
}

export function QuizMenu({ theme, activeSubject, onToggleTheme, onSelect, onBack }: QuizMenuProps) {
  const [practice, setPractice] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const config = SUBJECTS[activeSubject]
  const totalQuestions = config.weekCount * config.questionsPerWeek
  const availableQuickCounts = QUICK_COUNTS.filter(c => c < totalQuestions)

  function handlePractice(checked: boolean) {
    setPractice(checked)
    if (toastTimer.current) clearTimeout(toastTimer.current)
    setToast(checked
      ? 'Practice on : answers revealed after each pick'
      : 'Practice off : submit when done to see results'
    )
    toastTimer.current = setTimeout(() => setToast(null), 2800)
  }

  type ModeOption = { type: 'full' } | { type: 'quick'; count: number } | { type: 'week'; week: number };

  function select(mode: ModeOption) {
    onSelect(practice ? { ...mode, subject: activeSubject, practice: true } as QuizMode : { ...mode, subject: activeSubject } as QuizMode)
  }

  return (
    <div className="menu-page">
      {toast && <div className="toast" key={toast}>{toast}</div>}
      <header className="menu-header">
        <div className="menu-header-inner">
          <div className="menu-header-left">
            <button className="btn-back" onClick={onBack} title="Back to Courses">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            <div>
              <h1 className="header-title">{config.title}</h1>
              <p className="header-sub">Choose a quiz mode to begin</p>
            </div>
          </div>
          <div className="menu-header-right">
            <label className="practice-toggle">
              <input
                type="checkbox"
                checked={practice}
                onChange={e => handlePractice(e.target.checked)}
              />
              <span className="practice-toggle-text">
                <span className="practice-toggle-label">Practice</span>
                <span className="practice-toggle-sub">instant feedback</span>
              </span>
            </label>
            <button className="btn-theme" onClick={onToggleTheme} title="Toggle theme">
              {theme === 'dark' ? '☀' : '☾'}
            </button>
          </div>
        </div>
      </header>

      <main className="menu-main">

        {/* Full quiz */}
        <section className="menu-section">
          <button className="mode-card mode-card-full" onClick={() => select({ type: 'full' })}>
            <span className="mode-card-title">Full Mock Test</span>
            <span className="mode-card-desc">All {totalQuestions} questions · all weeks · shuffled</span>
            <span className="mode-card-badge">{totalQuestions} Q</span>
          </button>
        </section>

        {/* Quick quiz */}
        <section className="menu-section">
          <h2 className="menu-section-title">Quick Quiz</h2>
          <p className="menu-section-sub">Random questions from the entire question bank</p>
          <div className="mode-grid">
            {availableQuickCounts.map(count => (
              <button
                key={count}
                className="mode-card mode-card-quick"
                onClick={() => select({ type: 'quick', count })}
              >
                <span className="mode-card-title">{count} Questions</span>
                <span className="mode-card-desc">Random · shuffled</span>
              </button>
            ))}
          </div>
        </section>

        {/* Week-wise */}
        <section className="menu-section">
          <h2 className="menu-section-title">Week-wise Test</h2>
          <p className="menu-section-sub">10 questions per week</p>
          <div className="week-grid">
            {Array.from({ length: config.weekCount }, (_, i) => i + 1).map(week => (
              <button
                key={week}
                className="week-card"
                onClick={() => select({ type: 'week', week })}
              >
                <span className="week-card-number">Week {week}</span>
                <span className="week-card-label">{config.weekLabels[week]}</span>
              </button>
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}
