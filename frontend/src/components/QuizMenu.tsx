import { useState } from 'react'
import type { QuizMode, Theme } from '../types'
import { WEEK_LABELS, WEEK_COUNT, QUICK_COUNTS } from '../constants'

interface QuizMenuProps {
  theme: Theme
  onToggleTheme: () => void
  onSelect: (mode: QuizMode) => void
}

export function QuizMenu({ theme, onToggleTheme, onSelect }: QuizMenuProps) {
  const [practice, setPractice] = useState(false)

  function select(mode: QuizMode) {
    onSelect(practice ? { ...mode, practice: true } : mode)
  }

  return (
    <div className="menu-page">
      <header className="menu-header">
        <div className="menu-header-inner">
          <div>
            <h1 className="header-title">Contextualising Gender</h1>
            <p className="header-sub">Choose a quiz mode to begin</p>
          </div>
          <div className="menu-header-right">
            <label className="practice-toggle" title="Reveal correct answer immediately after each pick">
              <input
                type="checkbox"
                checked={practice}
                onChange={e => setPractice(e.target.checked)}
              />
              <span>Practice</span>
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
