import type { Theme } from '../types'

interface HeaderProps {
  title: string
  label: string
  answered: number
  total: number
  score: number
  submitted: boolean
  isPractice?: boolean
  progress: number
  theme: Theme
  onToggleTheme: () => void
  onReset: () => void
  onBack: () => void
}

export function Header({ title, label, answered, total, score, submitted, isPractice, progress, theme, onToggleTheme, onReset, onBack }: HeaderProps) {
  const progressWidth = submitted ? (score / total) * 100 : progress

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <button className="btn-back" onClick={onBack} title="Change quiz mode">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <div>
            <h1 className="header-title">{title}</h1>
            <p className="header-sub">
              {submitted
                ? `${label} · Score: ${score}/${total} (${((score / total) * 100).toFixed(1)}%)`
                : isPractice
                  ? `${label} · ${score}/${answered} correct · ${total - answered} remaining`
                  : `${label} · ${answered} of ${total} answered`}
            </p>
          </div>
        </div>
        <div className="header-actions">
          <button className="btn-theme" onClick={onToggleTheme} title="Toggle theme">
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <button className="btn-reset" onClick={onReset} title="Reset answers">
            ↺ Reset
          </button>
        </div>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progressWidth}%` }} />
      </div>
    </header>
  )
}
