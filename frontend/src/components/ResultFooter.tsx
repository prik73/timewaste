interface ResultFooterProps {
  score: number
  total: number
  scoreGrade: string
  onRetake: () => void
}

export function ResultFooter({ score, total, scoreGrade, onRetake }: ResultFooterProps) {
  return (
    <div className="result-footer">
      <div className={`result-card ${scoreGrade}`}>
        <span className="result-label">Final Score</span>
        <span className="result-score">{score} / {total}</span>
        <span className="result-pct">{((score / total) * 100).toFixed(1)}%</span>
      </div>
      <button className="btn btn-ghost" onClick={onRetake}>
        ↺ Retake Test
      </button>
    </div>
  )
}
