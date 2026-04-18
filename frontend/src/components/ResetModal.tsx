interface ResetModalProps {
  onConfirm: () => void
  onCancel: () => void
}

export function ResetModal({ onConfirm, onCancel }: ResetModalProps) {
  return (
    <div className="overlay" onClick={onCancel}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>Reset quiz?</h2>
        <p>All your answers will be cleared and questions reshuffled. This cannot be undone.</p>
        <div className="modal-actions">
          <button className="btn btn-ghost" onClick={onCancel}>Cancel</button>
          <button className="btn btn-danger" onClick={onConfirm}>Yes, Reset</button>
        </div>
      </div>
    </div>
  )
}
