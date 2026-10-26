import { useState } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Flame } from 'lucide-react'
import confetti from 'canvas-confetti'
import { siteContent } from '../content'
import { LuckyBallGame } from './LuckyBallGame'

export function GamesSection() {
  const [diyasLit, setDiyasLit] = useState(0)
  const [streakMessage, setStreakMessage] = useState('')

  const handleLightDiya = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextCount = diyasLit + 1
    setDiyasLit(nextCount)

    // Spark shower on the button
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (rect.left + rect.width / 2) / window.innerWidth
    const y = (rect.top + rect.height / 2) / window.innerHeight

    confetti({
      particleCount: 20,
      startVelocity: 18,
      spread: 60,
      origin: { x, y },
      colors: ['#FFE066', '#F5C842', '#D4A017', '#FF9800', '#FF5722'],
      ticks: 40,
      scalar: 0.75,
      disableForReducedMotion: true,
    })

    if (nextCount === 5) {
      setStreakMessage('Festive Spark! Keep going!')
    } else if (nextCount === 10) {
      setStreakMessage('Grand Diya Master! Show this at our stall!')
    } else if (nextCount > 10 && nextCount % 5 === 0) {
      setStreakMessage(`${nextCount} Diyas glowing bright!`)
    }
  }

  return (
    <section
      id="games"
      className="relative bg-plum-gradient text-[#FDF6E3] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden rangoli-bg"
    >
      {/* Decorative Rotating Mandala */}
      <div className="absolute -right-32 top-10 opacity-20 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-96 h-96 spin-slow text-[#F5C842]/15" fill="currentColor">
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <g key={angle} transform={`rotate(${angle} 100 100)`}>
              <path d="M 100 30 C 108 50 114 65 100 80 C 86 65 92 50 100 30 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
            </g>
          ))}
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6B1F4A] border border-[#F5C842]/40 text-[#F5C842] text-xs font-bold uppercase tracking-wider mb-4 shadow-glow-sm"
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>{siteContent.games.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Rozha_One'] text-4xl sm:text-5xl lg:text-6xl text-gold-gradient mb-4"
          >
            {siteContent.games.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-[#FDF6E3]/85 leading-relaxed font-['Manrope']"
          >
            {siteContent.games.subtitle}
          </motion.p>
        </div>

        {/* Featured Live Carnival Challenge: Lucky Ball Challenge */}
        <LuckyBallGame />

        {/* Interactive "Tap to Light the Diya" Mini-Game */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto rounded-3xl bg-gradient-to-r from-[#6B1F4A]/70 via-[#4A0E2E]/90 to-[#6B1F4A]/70 p-6 sm:p-8 text-center border border-[#F5C842]/35 shadow-card shadow-glow-sm"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5C842]/20 text-[#F5C842] text-xs font-bold mb-3 border border-[#F5C842]/30">
            <Flame className="w-3.5 h-3.5 text-[#F5C842] animate-bounce" />
            <span>Interactive Festive Fun</span>
          </div>

          <h3 className="font-['Rozha_One'] text-2xl sm:text-3xl text-gold-gradient mb-2">
            Light a Diya for Good Luck!
          </h3>
          <p className="text-xs sm:text-sm text-[#FDF6E3]/80 font-['Manrope'] mb-6 max-w-md mx-auto">
            Tap the button to light ceremonial diyas and trigger festive golden sparkles. How many can you light?
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleLightDiya}
              className="px-6 py-3.5 rounded-full bg-gold-gradient text-[#4A0E2E] font-black text-sm sm:text-base shadow-glow hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group"
            >
              <Flame className="w-4 h-4 text-[#4A0E2E] group-hover:scale-125 transition-transform" />
              <span>Tap to Light a Diya</span>
            </button>

            <div className="px-5 py-3 rounded-full bg-[#3B0B24] border border-[#F5C842]/40 text-[#F5C842] text-sm font-bold flex items-center gap-2">
              <span>Diyas Lit:</span>
              <span className="font-mono text-lg text-white tabular-nums">{diyasLit}</span>
            </div>
          </div>

          {streakMessage && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-bold text-[#F5C842] mt-4"
            >
              {streakMessage}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
