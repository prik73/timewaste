import { useRef } from 'react'

const ALMOST_IMGS = [
  '/almostThere/download1.jpeg',
  '/almostThere/download2.jpeg',
  '/almostThere/download3.jpeg',
]

const ALMOST_TEXTS = [
  'almost doesn\'t count, sweetie 💅',
  'you were right there cutie',
  "next time make your daddy proud, beautiful 😇",
]

interface AlmostThereModalProps {
  score: number
  total: number
  onClose: () => void
}

export function AlmostThereModal({ score, total, onClose }: AlmostThereModalProps) {
  const idx = useRef(Math.floor(Math.random() * ALMOST_IMGS.length))

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal perfect-modal" onClick={e => e.stopPropagation()}>
        <img src={ALMOST_IMGS[idx.current]} alt="almost" className="perfect-img" />
        <p className="perfect-score" style={{ color: 'var(--q-skip)' }}>{score} / {total}</p>
        <p className="perfect-text">{ALMOST_TEXTS[idx.current]}</p>
        <button className="btn btn-ghost" onClick={onClose}>chal chal</button>
      </div>
    </div>
  )
}
