import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from '@tanstack/react-router'
import { QRCodeSVG } from 'qrcode.react'
import { MapPin, Calendar, Clock, Store, ArrowRight, GraduationCap } from 'lucide-react'
import { siteContent } from '../content'
import { DiyaHero3D } from './DiyaHero3D'
import { MagneticButton } from './MagneticButton'
import { ProfessorSelectModal } from './ProfessorSelectModal'
import { Professor } from '../data/professors'
import heroBg from '../assets/hero-diyas.jpg'

interface HeroSectionProps {
  onNavigate: (href: string) => void
}

function MandalaDecor({ className = 'w-96 h-96' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`${className} spin-slow pointer-events-none select-none text-[#F5C842]/10`}
      fill="currentColor"
    >
      <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="100" cy="100" r="28" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="6" fill="currentColor" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 100 100)`}>
          <path
            d="M 100 30 C 108 50 114 65 100 80 C 86 65 92 50 100 30 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle cx="100" cy="40" r="2.5" fill="currentColor" />
          <circle cx="100" cy="18" r="3" fill="currentColor" />
        </g>
      ))}
      {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 100 100)`}>
          <path d="M 100 22 L 100 34" stroke="currentColor" strokeWidth="1" />
          <circle cx="100" cy="22" r="2" fill="currentColor" />
        </g>
      ))}
    </svg>
  )
}

function FairyLights() {
  const bulbs = [
    { left: '3%', delay: '0s', color: '#FFE066' },
    { left: '11%', delay: '0.4s', color: '#F5C842' },
    { left: '19%', delay: '0.9s', color: '#FFB800' },
    { left: '27%', delay: '0.2s', color: '#FFF4C2' },
    { left: '35%', delay: '1.2s', color: '#FFE066' },
    { left: '43%', delay: '0.6s', color: '#F5C842' },
    { left: '51%', delay: '1.5s', color: '#FFB800' },
    { left: '59%', delay: '0.3s', color: '#FFF4C2' },
    { left: '67%', delay: '1.0s', color: '#FFE066' },
    { left: '75%', delay: '0.7s', color: '#F5C842' },
    { left: '83%', delay: '1.3s', color: '#FFB800' },
    { left: '91%', delay: '0.5s', color: '#FFE066' },
    { left: '97%', delay: '1.1s', color: '#F5C842' },
  ]

  return (
    <div className="absolute top-0 left-0 right-0 w-full overflow-hidden pointer-events-none z-20 select-none h-16">
      <svg className="w-full h-8 opacity-45" preserveAspectRatio="none" viewBox="0 0 1200 40">
        <path
          d="M 0 10 Q 150 35 300 10 Q 450 35 600 10 Q 750 35 900 10 Q 1050 35 1200 10"
          fill="none"
          stroke="#D4A017"
          strokeWidth="1.5"
        />
      </svg>
      {bulbs.map((bulb, i) => (
        <div
          key={i}
          className="absolute top-3 -translate-x-1/2 flex flex-col items-center"
          style={{ left: bulb.left }}
        >
          <div className="w-1 h-2 bg-[#D4A017]/70" />
          <div
            className="w-2.5 h-3.5 rounded-full twinkle shadow-glow"
            style={{
              backgroundColor: bulb.color,
              animationDelay: bulb.delay,
              boxShadow: `0 0 14px ${bulb.color}`,
            }}
          />
        </div>
      ))}
    </div>
  )
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const navigate = useNavigate()
  const title1Letters = Array.from(siteContent.hero.titleLine1)
  const [invitationUrl, setInvitationUrl] = useState('/invitation')
  const [professorModalOpen, setProfessorModalOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setInvitationUrl(`${window.location.origin}/invitation`)
    }
  }, [])

  const handleSelectProfessor = (prof: Professor) => {
    navigate({
      to: '/invitation',
      search: { prof: prof.id } as any,
    })
  }

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* 1. RESTORED ORIGINAL BACKGROUND: Photo with slow zoom-out */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 7, ease: 'easeOut' }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* 2. RESTORED ORIGINAL BACKGROUND: Rich Plum Gradient Overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-[#4A0E2E]/92 via-[#4A0E2E]/82 to-[#4A0E2E] pointer-events-none" />

      {/* 3. RESTORED ORIGINAL BACKGROUND: Rotating Decorative Mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-2 opacity-30 pointer-events-none">
        <MandalaDecor className="w-[500px] h-[500px] sm:w-[680px] sm:h-[680px]" />
      </div>

      {/* Swaying Twinkling Fairy Lights String */}
      <FairyLights />

      {/* Hero Content Container: 2-Column Responsive Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN: Hero Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Festive Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#6B1F4A]/80 border border-[#F5C842]/50 text-[#F5C842] text-xs sm:text-sm font-black tracking-widest uppercase shadow-glow-sm mb-5 backdrop-blur-md"
            >
              <span>{siteContent.hero.badge}</span>
            </motion.div>

            {/* Title Line 1: Staggered Letter Reveal */}
            <h1 className="font-['Rozha_One'] text-5xl sm:text-7xl md:text-8xl tracking-tight text-gold-gradient drop-shadow-2xl mb-2 flex flex-wrap justify-center lg:justify-start overflow-hidden">
              {title1Letters.map((char, idx) => (
                <motion.span
                  key={idx}
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.25 + idx * 0.04,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </h1>

            {/* Title Line 2 */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="font-['Rozha_One'] text-2xl sm:text-3xl md:text-4xl text-[#FDF6E3] drop-shadow-md mb-5"
            >
              {siteContent.hero.titleLine2}
            </motion.h2>

            {/* Supporting Line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="font-['Manrope'] text-sm sm:text-base text-[#FDF6E3]/90 max-w-xl leading-relaxed mb-8 drop-shadow"
            >
              {siteContent.hero.supportingLine}
            </motion.p>

            {/* Magnetic CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10"
            >
              <MagneticButton
                variant="primary"
                onClick={() => onNavigate(siteContent.hero.primaryCta.href)}
                className="w-full sm:w-auto"
              >
                <span>{siteContent.hero.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </MagneticButton>

              <MagneticButton
                variant="secondary"
                onClick={() => onNavigate(siteContent.hero.secondaryCta.href)}
                className="w-full sm:w-auto"
              >
                <Store className="w-4 h-4 text-[#F5C842]" />
                <span>{siteContent.hero.secondaryCta.label}</span>
              </MagneticButton>
            </motion.div>

            {/* 3-Second Quick Answer Bar for crowded venue */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.15 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3.5 text-xs text-[#FDF6E3]/85 font-semibold bg-[#3B0B24]/85 px-4 sm:px-5 py-2.5 rounded-full border border-[#F5C842]/30 shadow-lg backdrop-blur-md"
            >
              <span className="flex items-center gap-1.5 text-[#F5C842]">
                <Store className="w-3.5 h-3.5" />
                <strong className="underline decoration-[#F5C842]">Stall No. 4</strong>
              </span>
              <span className="text-[#F5C842]/40 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#F5C842]" />
                PCET Architecture
              </span>
              <span className="text-[#F5C842]/40 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#F5C842]" />
                27 Oct 2026
              </span>
              <span className="text-[#F5C842]/40 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#F5C842]" />
                9 AM – 5 PM
              </span>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: 3D Diya Showcase & Under-Diya Invitation Pass */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* Ambient Radial Golden Aura behind the Diya */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#F5C842]/25 via-[#FF9800]/20 to-transparent blur-3xl pointer-events-none" />

            {/* Dedicated 3D Diya Canvas */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-[420px] lg:h-[420px] flex items-center justify-center pointer-events-auto"
            >
              <DiyaHero3D className="w-full h-full" />
            </motion.div>

            {/* UNDER THE DIYA: Festive QR Code & Invitation Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="w-full max-w-sm sm:max-w-md mt-1 sm:mt-2 bg-[#3B0B24]/90 border border-[#F5C842]/40 rounded-2xl p-4 sm:p-5 shadow-card backdrop-blur-md relative z-10 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left hover:border-[#F5C842]/70 transition-all duration-300"
            >
              {/* Gold-framed QR Code */}
              <div className="relative p-2 bg-[#FFFDF5] rounded-xl border-2 border-[#F5C842] shadow-md shrink-0 flex items-center justify-center group">
                <QRCodeSVG
                  value={invitationUrl}
                  size={92}
                  level="M"
                  fgColor="#4A0E2E"
                  bgColor="#FFFDF5"
                />
              </div>

              {/* Action & Info */}
              <div className="flex-1 flex flex-col items-center sm:items-start justify-center gap-1.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#6B1F4A]/80 border border-[#F5C842]/40 text-[#F5C842] text-[10px] font-bold uppercase tracking-wider">
                  <GraduationCap className="w-3 h-3 text-[#F5C842]" />
                  <span>Faculty Guest Pass</span>
                </div>
                <div>
                  <h3 className="font-['Rozha_One'] text-lg sm:text-xl text-gold-gradient leading-tight">
                    Faculty Invitation
                  </h3>
                  <p className="text-xs text-[#FDF6E3]/80 leading-snug mt-0.5">
                    Click below to find your name or scan QR code
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setProfessorModalOpen(true)}
                  className="mt-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gold-gradient text-[#4A0E2E] font-bold text-xs shadow-glow hover:scale-105 active:scale-95 transition-all group"
                >
                  <span>Select Your Name</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Professor Directory Selection Modal */}
      <ProfessorSelectModal
        isOpen={professorModalOpen}
        onClose={() => setProfessorModalOpen(false)}
        onSelectProfessor={handleSelectProfessor}
      />

      {/* Bottom transition curve into cream menu */}
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FDF6E3] to-transparent pointer-events-none z-10" />
    </section>
  )
}
