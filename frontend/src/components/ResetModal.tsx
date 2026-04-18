interface ResetModalProps {
  onConfirm: () => void
  onCancel: () => void
  onChangeMode: () => void
}

export function ResetModal({ onConfirm, onCancel, onChangeMode }: ResetModalProps) {
  return (
    <div className="overlay" onClick={onCancel}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>Reset quiz?</h2>
        <p>Your answers will be cleared and questions reshuffled.</p>
        <div className="modal-actions">
          <button className="btn btn-ghost" onClick={onChangeMode}>Change Mode</button>
          <button className="btn btn-ghost" onClick={onCancel}>Cancel</button>
          <button className="btn btn-danger" onClick={onConfirm}>Restart</button>
        </div>
      </div>
    </div>
  )
}
