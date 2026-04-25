import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'

const PROUD_IMGS = [
  '/obama.webp',
  '/one.jpeg',
  '/spidy.jpeg',
  '/star.jpeg',
  '/joey.jpg',
  '/jesus.jpeg',
  '/borat.jpeg',
  '/michael.jpeg',
  '/boy.jpeg',
]

interface PerfectScoreModalProps {
  score: number
  total: number
  onClose: () => void
}

export function PerfectScoreModal({ score, total, onClose }: PerfectScoreModalProps) {
  const img = useRef(PROUD_IMGS[Math.floor(Math.random() * PROUD_IMGS.length)])

  useEffect(() => {
    const duration = 3500
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 70,
        origin: { x: 0 },
        colors: ['#4f46e5', '#818cf8', '#a5b4fc', '#fbbf24', '#34d399'],
      })
      confetti({
        particleCount: 6,
        angle: 120,
        spread: 70,
        origin: { x: 1 },
        colors: ['#4f46e5', '#818cf8', '#a5b4fc', '#fbbf24', '#34d399'],
      })
      if (Date.now() < end) requestAnimationFrame(frame)
    }

    frame()
  }, [])

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal perfect-modal" onClick={e => e.stopPropagation()}>
        <img src={img.current} alt="proud" className="perfect-img" />
        <p className="perfect-score">{score} / {total}</p>
        <p className="perfect-text">your daddy would be so proud 😎</p>
        <button className="btn btn-primary" onClick={onClose}>hell yeah</button>
      </div>
    </div>
  )
}
