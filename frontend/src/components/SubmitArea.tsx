interface SubmitAreaProps {
  answered: number
  total: number
  onSubmit: () => void
}

export function SubmitArea({ answered, total, onSubmit }: SubmitAreaProps) {
  const remaining = total - answered
  return (
    <div className="submit-area">
      {remaining > 0 && (
        <p className="submit-warning">
          ⚠ {remaining} question{remaining !== 1 ? 's' : ''} still unanswered
        </p>
      )}
      <button className="btn btn-primary btn-submit" onClick={onSubmit}>
        Submit Test
      </button>
    </div>
  )
}
