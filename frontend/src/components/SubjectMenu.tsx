import type { SubjectId, Theme } from '../types'
import { SUBJECTS } from '../constants'

interface SubjectMenuProps {
  theme: Theme
  onToggleTheme: () => void
  onSelect: (subject: SubjectId) => void
}

export function SubjectMenu({ theme, onToggleTheme, onSelect }: SubjectMenuProps) {
  return (
    <div className="menu-page subject-menu">
      <header className="menu-header">
        <div className="menu-header-inner">
          <div>
            <h1 className="header-title">Select a Course</h1>
            <p className="header-sub">Choose a subject to begin</p>
          </div>
          <div className="menu-header-right">
            <button className="btn-theme" onClick={onToggleTheme} title="Toggle theme">
              {theme === 'dark' ? '☀' : '☾'}
            </button>
          </div>
        </div>
      </header>

      <main className="menu-main">
        <div className="subject-grid">
          {Object.values(SUBJECTS).map(config => (
            <button
              key={config.id}
              className={`mode-card subject-card`}
              onClick={() => onSelect(config.id)}
            >
              <span className="mode-card-title">{config.title}</span>
              <span className="mode-card-desc">{config.weekCount} Weeks / Modules</span>
            </button>
          ))}
        </div>
        <div className="cutie-text">
          <img src="/cat.png" alt="A cute cat" className="cat-image" />
          <strong>all the best cutie</strong>
        </div>
      </main>
    </div>
  )
}
