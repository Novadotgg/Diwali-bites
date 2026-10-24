import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'

interface MagneticButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
  sparkOnClick?: boolean
}

export function MagneticButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
  sparkOnClick = true,
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLButtonElement | null>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!isFinePointer || !btnRef.current) return

    const { left, top, width, height } = btnRef.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2

    // Pull intensity
    const x = (e.clientX - centerX) * 0.22
    const y = (e.clientY - centerY) * 0.22

    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (sparkOnClick && btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect()
      const x = (rect.left + rect.width / 2) / window.innerWidth
      const y = (rect.top + rect.height / 2) / window.innerHeight

      confetti({
        particleCount: 24,
        startVelocity: 16,
        spread: 70,
        origin: { x, y },
        colors: ['#FFE066', '#F5C842', '#D4A017', '#FF8F00'],
        ticks: 50,
        scalar: 0.8,
        disableForReducedMotion: true,
      })
    }
    onClick?.()
  }

  const baseStyles =
    variant === 'primary'
      ? 'bg-gold-gradient text-[#4A0E2E] shadow-glow hover:shadow-[0_0_35px_rgba(245,200,66,0.6)] font-extrabold'
      : 'bg-[#6B1F4A]/50 border border-[#F5C842]/70 text-[#F5C842] hover:bg-[#F5C842]/20 hover:border-[#F5C842] backdrop-blur-md font-bold'

  return (
    <motion.button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
      whileTap={{ scale: 0.94 }}
      className={`relative overflow-hidden rounded-full px-7 py-3.5 text-sm sm:text-base flex items-center justify-center gap-2 group transition-shadow duration-300 ${baseStyles} ${className}`}
    >
      {/* Shimmer sweep effect */}
      <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-shimmer pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  )
}
