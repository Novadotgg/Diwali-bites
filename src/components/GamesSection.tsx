import { useState } from 'react'
import { motion } from 'framer-motion'
import { Gift, HelpCircle, Trophy, Flame, Store } from 'lucide-react'
import confetti from 'canvas-confetti'
import { siteContent } from '../content'
import hamperImg from '../assets/hamper.jpeg'

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
      setStreakMessage('Grand Diya Master! Show this at Stall 4!')
    } else if (nextCount > 10 && nextCount % 5 === 0) {
      setStreakMessage(`${nextCount} Diyas glowing bright!`)
    }
  }

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const isFine = window.matchMedia('(pointer: fine)').matches
    if (!isFine) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = (rect.left + rect.width / 2) / window.innerWidth
    const y = (rect.top + rect.height / 2) / window.innerHeight

    confetti({
      particleCount: 10,
      startVelocity: 12,
      spread: 50,
      origin: { x, y },
      colors: ['#F5C842', '#FFE066', '#D4A017'],
      ticks: 35,
      scalar: 0.6,
      disableForReducedMotion: true,
    })
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
        <div className="text-center max-w-2xl mx-auto mb-16">
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

        {/* Feature Teaser Card: Blurred Hamper + Wobbling Gift Icon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border border-[#F5C842]/35 bg-[#3B0B24]/85 shadow-card backdrop-blur-md mb-12 max-w-4xl mx-auto group hover:border-[#F5C842]/60 transition-colors"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Hamper Photo with subtle blur effect per design */}
            <div className="relative aspect-video md:aspect-square overflow-hidden bg-black/40">
              <img
                src={hamperImg}
                alt="Festive Gift Hamper Teaser"
                className="w-full h-full object-cover filter blur-[2px] scale-105 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#4A0E2E]/45" />

              {/* Wobbling Gift Box Icon Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-gold-gradient flex items-center justify-center shadow-glow mb-3 wobble">
                  <Gift className="w-10 h-10 text-[#4A0E2E]" />
                </div>
                <span className="px-3.5 py-1 rounded-full bg-[#4A0E2E]/95 text-[#F5C842] text-xs font-black border border-[#F5C842]/50 shadow-md">
                  Celebration Gift Hampers
                </span>
              </div>
            </div>

            {/* Teaser Content */}
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5C842]/15 text-[#F5C842] text-xs font-bold w-fit mb-4 border border-[#F5C842]/30">
                <Store className="w-3.5 h-3.5" />
                <span>Diwali Mandi Stall No. 4</span>
              </div>

              <h3 className="font-['Rozha_One'] text-2xl sm:text-3xl text-gold-gradient mb-3">
                {siteContent.games.teaserTitle}
              </h3>

              <p className="text-xs sm:text-sm text-[#FDF6E3]/85 leading-relaxed font-['Manrope'] mb-6">
                {siteContent.games.teaserDescription}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#F5C842] bg-[#6B1F4A]/80 px-4 py-2.5 rounded-full border border-[#F5C842]/30">
                  <span>Win on-the-spot prizes & festive treats!</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Three Mystery Game Cards with Hover Confetti */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-14">
          {siteContent.games.mysteryCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              onMouseEnter={handleCardHover}
              className="bg-[#3B0B24]/80 border border-[#F5C842]/25 rounded-2xl p-6 text-center shadow-card hover:border-[#F5C842]/70 hover:shadow-glow-sm hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              {/* Subtle top shine */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F5C842]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#6B1F4A] border border-[#F5C842]/40 flex items-center justify-center text-[#F5C842] group-hover:scale-110 group-hover:bg-gold-gradient group-hover:text-[#4A0E2E] transition-all shadow-md">
                <HelpCircle className="w-7 h-7" />
              </div>
              <h4 className="font-['Rozha_One'] text-lg text-[#FDF6E3] mb-1.5 group-hover:text-[#F5C842] transition-colors">
                {card.title}
              </h4>
              <p className="font-['Manrope'] text-xs text-[#FDF6E3]/70 mb-3">{card.teaser}</p>
              {card.prizeHint && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F5C842]/15 text-[#F5C842] text-[11px] font-semibold">
                  <Gift className="w-3 h-3 text-[#F5C842]" />
                  <span>{card.prizeHint}</span>
                </span>
              )}
            </motion.div>
          ))}
        </div>

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
