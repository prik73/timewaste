import { useState, useRef } from 'react'
import type { QuizMode, Theme } from '../types'
import { WEEK_LABELS, WEEK_COUNT, QUICK_COUNTS } from '../constants'

interface QuizMenuProps {
  theme: Theme
  onToggleTheme: () => void
  onSelect: (mode: QuizMode) => void
}

export function QuizMenu({ theme, onToggleTheme, onSelect }: QuizMenuProps) {
  const [practice, setPractice] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  function handlePractice(checked: boolean) {
    setPractice(checked)
    if (toastTimer.current) clearTimeout(toastTimer.current)
    setToast(checked
      ? 'Practice on : answers revealed after each pick'
      : 'Practice off : submit when done to see results'
    )
    toastTimer.current = setTimeout(() => setToast(null), 2800)
  }

  function select(mode: QuizMode) {
    onSelect(practice ? { ...mode, practice: true } : mode)
  }

  return (
    <div className="menu-page">
      {toast && <div className="toast" key={toast}>{toast}</div>}
      <header className="menu-header">
        <div className="menu-header-inner">
          <div>
            <h1 className="header-title">Contextualising Gender</h1>
            <p className="header-sub">Choose a quiz mode to begin</p>
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
            <span className="mode-card-desc">All 120 questions · all weeks · shuffled</span>
            <span className="mode-card-badge">120 Q</span>
          </button>
        </section>

        {/* Quick quiz */}
        <section className="menu-section">
          <h2 className="menu-section-title">Quick Quiz</h2>
          <p className="menu-section-sub">Random questions from the entire question bank</p>
          <div className="mode-grid">
            {QUICK_COUNTS.map(count => (
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
            {Array.from({ length: WEEK_COUNT }, (_, i) => i + 1).map(week => (
              <button
                key={week}
                className="week-card"
                onClick={() => select({ type: 'week', week })}
              >
                <span className="week-card-number">Week {week}</span>
                <span className="week-card-label">{WEEK_LABELS[week]}</span>
              </button>
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}
