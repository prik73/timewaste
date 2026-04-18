import type { Theme } from '../types'

interface HeaderProps {
  answered: number
  total: number
  score: number
  submitted: boolean
  progress: number
  theme: Theme
  onToggleTheme: () => void
  onReset: () => void
}

export function Header({ answered, total, score, submitted, progress, theme, onToggleTheme, onReset }: HeaderProps) {
  const progressWidth = submitted ? (score / total) * 100 : progress

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <div>
            <h1 className="header-title">Contextualising Gender</h1>
            <p className="header-sub">
              {submitted
                ? `Score: ${score}/${total} · ${((score / total) * 100).toFixed(1)}%`
                : `Practice Quiz · ${answered} of ${total} answered`}
            </p>
          </div>
        </div>
        <div className="header-actions">
          <button className="btn-theme" onClick={onToggleTheme} title="Toggle theme">
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <button className="btn-reset" onClick={onReset} title="Reset all answers">
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
