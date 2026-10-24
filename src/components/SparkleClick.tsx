import { useEffect } from 'react'
import confetti from 'canvas-confetti'

export function SparkleClick() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // If clicking directly on an active button or link or input, let the button handle it
      const target = e.target as HTMLElement | null
      const isInteractive = target?.closest('button') || target?.closest('a') || target?.closest('input')

      // Position normalized for canvas-confetti (0 to 1)
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight

      if (!isInteractive) {
        // Delicate subtle sparkle burst
        confetti({
          particleCount: 16,
          startVelocity: 14,
          spread: 60,
          ticks: 45,
          origin: { x, y },
          colors: ['#FFE066', '#F5C842', '#D4A017', '#FF8F00'],
          shapes: ['circle'],
          scalar: 0.7,
          disableForReducedMotion: true,
        })
      }
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  return null
}
