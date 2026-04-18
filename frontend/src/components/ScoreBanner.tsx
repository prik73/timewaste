interface ScoreBannerProps {
  score: number
  total: number
  unanswered: number
  scoreGrade: string
}

export function ScoreBanner({ score, total, unanswered, scoreGrade }: ScoreBannerProps) {
  return (
    <div className={`score-banner ${scoreGrade}`}>
      <span className="score-big">🎯 {score} / {total}</span>
      <div className="score-details">
        {((score / total) * 100).toFixed(1)}% correct
        {unanswered > 0 && ` · ${unanswered} not answered`}
      </div>
      {score === total && <div className="score-perfect">🎉 Perfect score!</div>}
    </div>
  )
}
