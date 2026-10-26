import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Clock, Store, Navigation, Compass } from 'lucide-react'
import { siteContent } from '../content'

export function StallSection() {
  const stall = siteContent.stall

  // Countdown to event date: 27th October 2026
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 })

  useEffect(() => {
    const targetDate = new Date('2026-10-27T09:00:00+05:30').getTime()

    const calculateTime = () => {
      const now = new Date().getTime()
      const diff = targetDate - now

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        setTimeLeft({ days, hours, minutes })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 })
      }
    }

    calculateTime()
    const timer = setInterval(calculateTime, 60000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="stall" className="relative bg-[#FDF6E3] text-[#4A0E2E] py-24 px-4 sm:px-6 lg:px-8 rangoli-bg-cream">
      {/* Jaali lattice border on top */}
      <div className="jaali-border-t absolute top-0 left-0 right-0 opacity-40" />

      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#4A0E2E]/10 border border-[#4A0E2E]/20 text-[#4A0E2E] text-xs font-bold uppercase tracking-wider mb-3"
          >
            <Compass className="w-3.5 h-3.5 text-[#D4A017]" />
            <span>{stall.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Rozha_One'] text-4xl sm:text-5xl lg:text-6xl text-[#4A0E2E] mb-4"
          >
            {stall.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-[#4A0E2E]/75 leading-relaxed font-['Manrope']"
          >
            {stall.subtitle}
          </motion.p>
        </div>

        {/* Big Neon Marquee Board */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-[#2D061A] via-[#4A0E2E] to-[#2D061A] rounded-3xl p-8 sm:p-12 border-2 border-[#F5C842]/40 shadow-2xl shadow-[#4A0E2E]/60 text-center mb-10 overflow-hidden"
        >
          {/* Subtle marquee bulbs along top and bottom */}
          <div className="flex justify-between items-center mb-6 px-4 opacity-75">
            {[...Array(9)].map((_, i) => (
              <span
                key={i}
                className="w-2.5 h-2.5 rounded-full bg-[#F5C842] shadow-glow twinkle"
                style={{ animationDelay: `${i * 0.25}s` }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <span className="text-xs sm:text-sm uppercase tracking-widest text-[#F5C842] font-black mb-2">
              Official Food & Refreshment Destination
            </span>

            {/* Neon Glow Board */}
            <h3 className="font-['Rozha_One'] text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#FFF3CC] neon-glow drop-shadow-2xl">
              {stall.stallNumber.toUpperCase()}
            </h3>

            <p className="font-['Rozha_One'] text-lg sm:text-2xl text-gold-gradient mt-2 tracking-wide">
              DIWALI BITES — PCET ARCHITECTURE
            </p>

            {/* Countdown Badge */}
            <div className="mt-6 inline-flex items-center gap-3 bg-[#3B0B24]/90 px-6 py-2.5 rounded-full border border-[#F5C842]/40 shadow-glow-sm">
              <Clock className="w-4 h-4 text-[#F5C842]" />
              <span className="text-xs sm:text-sm text-[#FDF6E3]/90 font-medium">
                Diwali Mandi Countdown:
              </span>
              <span className="font-mono text-sm sm:text-base font-black text-[#F5C842] tabular-nums">
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
              </span>
            </div>
          </div>

          {/* Marquee bulbs bottom */}
          <div className="flex justify-between items-center mt-6 px-4 opacity-75">
            {[...Array(9)].map((_, i) => (
              <span
                key={i}
                className="w-2.5 h-2.5 rounded-full bg-[#F5C842] shadow-glow twinkle"
                style={{ animationDelay: `${(8 - i) * 0.25}s` }}
              />
            ))}
          </div>
        </motion.div>

        {/* Venue Information Card & Illustrated Path */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-plum-gradient text-[#FDF6E3] rounded-3xl p-8 sm:p-10 border border-[#F5C842]/30 shadow-card relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Illustrated Walk Path */}
            <div className="bg-[#3B0B24]/80 rounded-2xl p-6 border border-[#F5C842]/20 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F5C842] flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5" />
                  Campus Walking Path
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#F5C842]/20 text-[#F5C842] text-[11px] font-bold">
                  Ground Floor
                </span>
              </div>

              {/* Step by step campus navigation */}
              <div className="space-y-3.5 font-['Manrope'] text-xs sm:text-sm text-[#FDF6E3]/85">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#6B1F4A] border border-[#F5C842]/40 text-[#F5C842] flex items-center justify-center font-bold text-xs shrink-0">
                    1
                  </span>
                  <span>Enter via PCET Main Campus Gate towards Architecture Wing.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#6B1F4A] border border-[#F5C842]/40 text-[#F5C842] flex items-center justify-center font-bold text-xs shrink-0">
                    2
                  </span>
                  <span>Walk past the courtyard following the warm yellow fairy light canopy.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gold-gradient text-[#4A0E2E] flex items-center justify-center font-black text-xs shrink-0 shadow-glow-sm">
                    3
                  </span>
                  <span className="font-semibold text-white">
                    Spot the glowing <strong className="text-[#F5C842]">Diwali Bites</strong> banner with chilled mojitos and freshly tossed chaat!
                  </span>
                </div>
              </div>

              {/* Get Directions Link (Opens Google Maps) */}
              <div className="mt-6 pt-4 border-t border-[#F5C842]/20">
                <a
                  href={stall.mapUrl || 'https://maps.google.com/?q=S.B.+Patil+College+of+Architecture+Nigdi+Pune'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gold-gradient text-[#4A0E2E] font-black text-xs sm:text-sm shadow-glow hover:scale-105 active:scale-95 transition-all"
                >
                  <MapPin className="w-4 h-4 text-[#4A0E2E]" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Right: Key Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Venue */}
              <div className="bg-[#3B0B24]/70 p-5 rounded-2xl border border-[#F5C842]/20">
                <div className="flex items-center gap-2 text-[#F5C842] text-xs font-bold uppercase tracking-wider mb-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>{stall.venueLabel}</span>
                </div>
                <p className="font-['Rozha_One'] text-base sm:text-lg text-[#FDF6E3] leading-snug">
                  {stall.venue}
                </p>
              </div>

              {/* Stall Assignment */}
              <div className="bg-[#3B0B24]/70 p-5 rounded-2xl border border-[#F5C842]/20">
                <div className="flex items-center gap-2 text-[#F5C842] text-xs font-bold uppercase tracking-wider mb-1.5">
                  <Store className="w-4 h-4" />
                  <span>Stall Location</span>
                </div>
                <p className="font-['Rozha_One'] text-base sm:text-lg text-gold-gradient leading-snug">
                  Diwali Bites • Campus Courtyard
                </p>
              </div>

              {/* Date */}
              <div className="bg-[#3B0B24]/70 p-5 rounded-2xl border border-[#F5C842]/20">
                <div className="flex items-center gap-2 text-[#F5C842] text-xs font-bold uppercase tracking-wider mb-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{stall.dateLabel}</span>
                </div>
                <p className="font-['Rozha_One'] text-base sm:text-lg text-[#FDF6E3] leading-snug">
                  {stall.date}
                </p>
              </div>

              {/* Timing */}
              <div className="bg-[#3B0B24]/70 p-5 rounded-2xl border border-[#F5C842]/20">
                <div className="flex items-center gap-2 text-[#F5C842] text-xs font-bold uppercase tracking-wider mb-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{stall.timingLabel}</span>
                </div>
                <p className="font-['Rozha_One'] text-base sm:text-lg text-[#FDF6E3] leading-snug">
                  {stall.timing}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Landmark Note */}
          <div className="mt-6 pt-4 border-t border-[#F5C842]/20 text-xs sm:text-sm text-[#FDF6E3]/85 font-['Manrope'] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F5C842]" />
            <span>{stall.landmark}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
