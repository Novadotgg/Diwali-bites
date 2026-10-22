import React, { useState, useEffect, useRef } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import {

  MapPin,
  Calendar,
  Clock,
  Store,
  Menu as MenuIcon,
  X,
  Gift,
  HelpCircle,
  Compass,
  ArrowRight,
  Instagram,
  Heart,
  ChevronRight,
} from 'lucide-react'
import { siteContent } from '../content'

// Asset imports
import heroBg from '../assets/hero-diyas.jpg'
import mojito1 from '../assets/mojito.jpeg'
import mojito2 from '../assets/mojito2.jpeg'
import mojito3 from '../assets/mojito3.jpeg'
import chaatImg from '../assets/chaat.jpeg'
import kharwasImg from '../assets/kharbas.jpeg'
import hamperImg from '../assets/hamper.jpeg'

export const Route = createFileRoute('/')({
  component: HomePage,
})

/* -------------------------------------------------------------------------- */
/*                               DECORATIVE SVGS                              */
/* -------------------------------------------------------------------------- */

function DiyaIcon({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="flameGlowComponent" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE066" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#F5C842" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#D4A017" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="flameGradComponent" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#D4A017" />
          <stop offset="40%" stopColor="#F5C842" />
          <stop offset="80%" stopColor="#FFE57F" />
          <stop offset="100%" stopColor="#FFF9E6" />
        </linearGradient>
        <linearGradient id="diyaGradComponent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5C842" />
          <stop offset="50%" stopColor="#D4A017" />
          <stop offset="100%" stopColor="#8A5A00" />
        </linearGradient>
      </defs>

      {/* Flame aura */}
      <circle cx="32" cy="22" r="13" fill="url(#flameGlowComponent)" className="flicker" />

      {/* Diya Flame */}
      <path
        d="M 32 10 C 35 15.5 38 19.5 38 25 C 38 28.5 35.3 31 32 31 C 28.7 31 26 28.5 26 25 C 26 19.5 29 15.5 32 10 Z"
        fill="url(#flameGradComponent)"
        className="flicker"
      />

      {/* Flame core */}
      <path
        d="M 32 16 C 33.5 19 35 22 35 25 C 35 26.8 33.7 28 32 28 C 30.3 28 29 26.8 29 25 C 29 22 30.5 19 32 16 Z"
        fill="#FFFDF5"
        className="flicker"
      />

      {/* Diya Bowl */}
      <path
        d="M 14 30 C 14 42 22 47 32 47 C 42 47 50 42 50 30 C 41 34.5 23 34.5 14 30 Z"
        fill="url(#diyaGradComponent)"
      />

      {/* Diya Rim highlight */}
      <ellipse cx="32" cy="30.5" rx="18" ry="3.5" fill="#FCE588" fillOpacity="0.75" />

      {/* Diya Stand */}
      <path d="M 26 47 L 24 51 L 40 51 L 38 47 Z" fill="#B27E0C" />
    </svg>
  )
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
      {/* 8 Petal geometry */}
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
      {/* Alternate 8 outer rays */}
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
    { left: '4%', delay: '0s', color: '#FFE066' },
    { left: '12%', delay: '0.4s', color: '#F5C842' },
    { left: '20%', delay: '0.9s', color: '#FFB800' },
    { left: '28%', delay: '0.2s', color: '#FFF4C2' },
    { left: '36%', delay: '1.2s', color: '#FFE066' },
    { left: '44%', delay: '0.6s', color: '#F5C842' },
    { left: '52%', delay: '1.5s', color: '#FFB800' },
    { left: '60%', delay: '0.3s', color: '#FFF4C2' },
    { left: '68%', delay: '1.0s', color: '#FFE066' },
    { left: '76%', delay: '0.7s', color: '#F5C842' },
    { left: '84%', delay: '1.3s', color: '#FFB800' },
    { left: '92%', delay: '0.5s', color: '#FFE066' },
  ]

  return (
    <div className="absolute top-0 left-0 right-0 w-full overflow-hidden pointer-events-none z-20 select-none h-16">
      <svg className="w-full h-8 opacity-40" preserveAspectRatio="none" viewBox="0 0 1200 40">
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
          <div className="w-1 h-2 bg-[#D4A017]/60" />
          <div
            className="w-2.5 h-3.5 rounded-full twinkle shadow-glow"
            style={{
              backgroundColor: bulb.color,
              animationDelay: bulb.delay,
              boxShadow: `0 0 12px ${bulb.color}`,
            }}
          />
        </div>
      ))}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

function HomePage() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mojitoIndex, setMojitoIndex] = useState(0)
  const lenisRef = useRef<Lenis | null>(null)

  const mojitoImages = [mojito1, mojito2, mojito3]
  const mojitoItem = siteContent.menu.items.find((item) => item.id === 'fresh-mojitos')
  const flavorNames = mojitoItem?.flavors || ['Crisp Mint', 'Watermelon', 'Kala Khatta']

  // Auto-cycle mojito images every 2.8s
  useEffect(() => {
    const timer = setInterval(() => {
      setMojitoIndex((prev) => (prev + 1) % mojitoImages.length)
    }, 2800)
    return () => clearInterval(timer)
  }, [mojitoImages.length])

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  // Scroll spy & navbar styling
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 50)

      const sections = ['hero', 'menu', 'games', 'stall']
      const offsets = sections.map((id) => {
        const el = document.getElementById(id)
        if (!el) return { id, top: Infinity }
        const rect = el.getBoundingClientRect()
        return { id, top: Math.abs(rect.top) }
      })

      offsets.sort((a, b) => a.top - b.top)
      if (offsets[0]) {
        setActiveSection(offsets[0].id)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false)
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element, { offset: -80 })
    } else if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#4A0E2E] text-[#FDF6E3] font-['Manrope'] relative selection:bg-[#F5C842] selection:text-[#4A0E2E]">
      {/* ----------------------------- NAVBAR ----------------------------- */}
      <Navbar
        scrolled={scrolled}
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onNavigate={scrollTo}
      />

      {/* ----------------------------- HERO ------------------------------ */}
      <HeroSection onNavigate={scrollTo} />

      {/* ----------------------------- MENU ------------------------------ */}
      <MenuSection
        mojitoIndex={mojitoIndex}
        setMojitoIndex={setMojitoIndex}
        mojitoImages={mojitoImages}
        flavorNames={flavorNames}
      />

      {/* -------------------------- GAMES & FUN -------------------------- */}
      <GamesSection />

      {/* ------------------------ FIND OUR STALL ------------------------- */}
      <StallSection />

      {/* ----------------------------- FOOTER ---------------------------- */}
      <Footer onNavigate={scrollTo} />
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                                   NAVBAR                                   */
/* -------------------------------------------------------------------------- */

interface NavbarProps {
  scrolled: boolean
  activeSection: string
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  onNavigate: (href: string) => void
}

function Navbar({
  scrolled,
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  onNavigate,
}: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-500 flex items-center justify-between px-4 sm:px-6 py-2.5 ${
          scrolled
            ? 'glass-plum shadow-glow-sm shadow-card border border-[#F5C842]/30'
            : 'bg-[#4A0E2E]/60 backdrop-blur-md border border-[#F5C842]/15'
        }`}
      >
        {/* Brand Logo Left */}
        <button
          onClick={() => onNavigate('#hero')}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-full bg-[#6B1F4A]/80 border border-[#F5C842]/40 flex items-center justify-center p-1 group-hover:scale-105 group-hover:border-[#F5C842] transition-all">
            <DiyaIcon className="w-6 h-6" />
          </div>
          <div>
            <span className="font-['Rozha_One'] text-lg sm:text-xl text-gold-gradient tracking-wide block leading-none">
              {siteContent.brand.name}
            </span>
          </div>
        </button>

        {/* Center Pill Nav Desktop */}
        <nav className="hidden md:flex items-center bg-[#3B0B24]/75 p-1 rounded-full border border-[#F5C842]/20">
          {siteContent.nav.links.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId

            return (
              <button
                key={link.href}
                onClick={() => onNavigate(link.href)}
                className={`relative px-4 py-1.5 text-xs lg:text-sm font-semibold rounded-full transition-colors duration-300 focus:outline-none ${
                  isActive ? 'text-[#4A0E2E]' : 'text-[#FDF6E3]/85 hover:text-[#F5C842]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-gold-gradient shadow-glow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            )
          })}
        </nav>

        {/* CTA Button Right Desktop */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => onNavigate(siteContent.nav.cta.href)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gold-gradient text-[#4A0E2E] font-bold text-xs lg:text-sm shadow-glow hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none"
          >
            <Store className="w-3.5 h-3.5" />
            <span>{siteContent.nav.cta.label}</span>
          </button>
        </div>

        {/* Hamburger Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onNavigate(siteContent.nav.cta.href)}
            className="px-3 py-1.5 rounded-full bg-gold-gradient text-[#4A0E2E] font-bold text-xs shadow-glow"
          >
            Stall No. 4
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-full bg-[#6B1F4A] border border-[#F5C842]/40 flex items-center justify-center text-[#F5C842] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#4A0E2E]/98 backdrop-blur-2xl p-6 sm:p-8 flex flex-col justify-between md:hidden rangoli-bg"
          >
            <div className="flex items-center justify-between border-b border-[#F5C842]/20 pb-4">
              <div className="flex items-center gap-2">
                <DiyaIcon className="w-7 h-7" />
                <span className="font-['Rozha_One'] text-2xl text-gold-gradient">
                  {siteContent.brand.name}
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-[#6B1F4A] border border-[#F5C842]/40 flex items-center justify-center text-[#F5C842]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Staggered Numbered oversized links */}
            <div className="flex flex-col gap-6 my-auto py-8">
              {siteContent.nav.links.map((link, idx) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.35 }}
                  onClick={() => onNavigate(link.href)}
                  className="flex items-baseline gap-4 text-left group"
                >
                  <span className="font-mono text-xs text-[#F5C842]/70 font-semibold tracking-widest">
                    0{idx + 1}
                  </span>
                  <span className="font-['Rozha_One'] text-3xl sm:text-4xl text-[#FDF6E3] group-hover:text-gold-gradient transition-colors">
                    {link.label}
                  </span>
                  <ChevronRight className="w-5 h-5 text-[#F5C842] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all ml-auto self-center" />
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Footer CTA */}
            <div className="pt-6 border-t border-[#F5C842]/20 flex flex-col gap-3">
              <button
                onClick={() => onNavigate(siteContent.nav.cta.href)}
                className="w-full py-3.5 rounded-full bg-gold-gradient text-[#4A0E2E] font-bold text-center text-sm shadow-glow flex items-center justify-center gap-2"
              >
                <Store className="w-4 h-4" />
                <span>{siteContent.nav.cta.label}</span>
              </button>
              <p className="text-center text-xs text-[#FDF6E3]/60 font-['Manrope']">
                {siteContent.stall.venue} • {siteContent.stall.date}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

/* -------------------------------------------------------------------------- */
/*                                HERO SECTION                                */
/* -------------------------------------------------------------------------- */

function HeroSection({ onNavigate }: { onNavigate: (href: string) => void }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Background photo with slow zoom-out */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 7, ease: 'easeOut' }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Rich Plum Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#4A0E2E]/90 via-[#4A0E2E]/80 to-[#4A0E2E]" />

      {/* Decorative Rotating Mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-35 pointer-events-none">
        <MandalaDecor className="w-[500px] h-[500px] sm:w-[680px] sm:h-[680px]" />
      </div>

      {/* Twinkling Fairy Lights String */}
      <FairyLights />

      {/* Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Badge: College Diwali Mandi */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6B1F4A]/70 border border-[#F5C842]/50 text-[#F5C842] text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-glow-sm mb-6 backdrop-blur-md"
        >
          <span>{siteContent.hero.badge}</span>
        </motion.div>

        {/* Title Line 1: Revealed with mask */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
            className="font-['Rozha_One'] text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-gold-gradient drop-shadow-lg"
          >
            {siteContent.hero.titleLine1}
          </motion.h1>
        </div>

        {/* Title Line 2: Revealed with mask */}
        <div className="overflow-hidden mb-6">
          <motion.h2
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="font-['Rozha_One'] text-2xl sm:text-4xl md:text-5xl text-[#FDF6E3] drop-shadow-md"
          >
            {siteContent.hero.titleLine2}
          </motion.h2>
        </div>

        {/* Supporting Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-['Manrope'] text-sm sm:text-base md:text-lg text-[#FDF6E3]/85 max-w-2xl leading-relaxed mb-10 text-center"
        >
          {siteContent.hero.supportingLine}
        </motion.p>

        {/* Two CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => onNavigate(siteContent.hero.primaryCta.href)}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gold-gradient text-[#4A0E2E] font-bold text-sm sm:text-base shadow-glow hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>{siteContent.hero.primaryCta.label}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onNavigate(siteContent.hero.secondaryCta.href)}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#6B1F4A]/40 border border-[#F5C842]/70 text-[#F5C842] font-semibold text-sm sm:text-base hover:bg-[#F5C842]/15 hover:border-[#F5C842] hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md"
          >
            <span>{siteContent.hero.secondaryCta.label}</span>
          </button>
        </motion.div>

        {/* Quick event pill teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-14 flex items-center gap-2 sm:gap-4 text-xs text-[#FDF6E3]/75 font-medium bg-[#3B0B24]/60 px-4 py-2 rounded-full border border-[#F5C842]/20"
        >
          <span className="flex items-center gap-1.5 text-[#F5C842]">
            <MapPin className="w-3.5 h-3.5" />
            PCET Architecture
          </span>
          <span className="text-[#F5C842]/40">•</span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#F5C842]" />
            27 Oct 2026
          </span>
          <span className="text-[#F5C842]/40">•</span>
          <span className="font-bold text-[#F5C842] bg-[#F5C842]/20 px-2 py-0.5 rounded-full">
            Stall 4
          </span>
        </motion.div>
      </div>

      {/* Bottom transition curve into cream menu */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#FDF6E3] to-transparent pointer-events-none" />
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                                MENU SECTION                                */
/* -------------------------------------------------------------------------- */

interface MenuSectionProps {
  mojitoIndex: number
  setMojitoIndex: (idx: number) => void
  mojitoImages: string[]
  flavorNames: string[]
}

function MenuSection({
  mojitoIndex,
  setMojitoIndex,
  mojitoImages,
  flavorNames,
}: MenuSectionProps) {
  const chaatItem = siteContent.menu.items.find((item) => item.id === 'loaded-chips-chaat')
  const kharwasItem = siteContent.menu.items.find((item) => item.id === 'traditional-kharwas')
  const mojitoItem = siteContent.menu.items.find((item) => item.id === 'fresh-mojitos')

  return (
    <section id="menu" className="relative bg-[#FDF6E3] text-[#4A0E2E] py-24 px-4 sm:px-6 lg:px-8 rangoli-bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#4A0E2E]/10 border border-[#4A0E2E]/20 text-[#4A0E2E] text-xs font-bold uppercase tracking-wider mb-3"
          >
            <span>Curated Delights</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Rozha_One'] text-4xl sm:text-5xl lg:text-6xl text-[#4A0E2E] mb-4 tracking-tight"
          >
            {siteContent.menu.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-[#4A0E2E]/75 leading-relaxed font-['Manrope']"
          >
            {siteContent.menu.subtitle}
          </motion.p>
        </div>

        {/* 3 Menu Cards Grid: 1 col on mobile, 2 cols on tablet, 3 across on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Fresh Mojitos (Rotating Carousel) */}
          {mojitoItem && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 border border-[#4A0E2E]/10 flex flex-col group"
            >
              {/* Photo Area with 4:5 Aspect Ratio */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#4A0E2E]/5">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={mojitoIndex}
                    src={mojitoImages[mojitoIndex]}
                    alt={`${mojitoItem.name} - ${flavorNames[mojitoIndex]}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Subtle gradient shadow over image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                {/* Tag pill top-left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#4A0E2E]/90 text-[#F5C842] text-xs font-bold shadow-md backdrop-blur-md border border-[#F5C842]/30">
                    {mojitoItem.tag}
                  </span>
                </div>

                {/* Price pill top-right: ONLY rendered if price is non-empty */}
                {mojitoItem.price && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-gold-gradient text-[#4A0E2E] font-extrabold text-sm shadow-md">
                      {mojitoItem.price}
                    </span>
                  </div>
                )}

                {/* Active flavor pill bottom-left */}
                <div className="absolute bottom-10 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-white/90 text-[#4A0E2E] text-xs font-extrabold shadow-md backdrop-blur-sm">
                    {flavorNames[mojitoIndex]}
                  </span>
                </div>

                {/* Clickable Pagination Dots */}
                <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center items-center gap-2">
                  {mojitoImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setMojitoIndex(idx)}
                      aria-label={`Show ${flavorNames[idx]}`}
                      className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                        mojitoIndex === idx
                          ? 'w-6 bg-[#F5C842] shadow-glow'
                          : 'w-2 bg-white/60 hover:bg-white'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-['Rozha_One'] text-2xl text-[#4A0E2E] group-hover:text-[#6B1F4A] transition-colors">
                    {mojitoItem.name}
                  </h3>
                  {mojitoItem.description && (
                    <p className="text-xs sm:text-sm text-[#4A0E2E]/75 leading-relaxed font-['Manrope'] mt-2 mb-4">
                      {mojitoItem.description}
                    </p>
                  )}
                </div>

                {/* Flavor Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#4A0E2E]/10">
                  {flavorNames.map((flavor, fIdx) => (
                    <span
                      key={fIdx}
                      onClick={() => setMojitoIndex(fIdx)}
                      className={`text-[11px] px-2.5 py-1 rounded-full font-semibold cursor-pointer transition-all ${
                        mojitoIndex === fIdx
                          ? 'bg-[#4A0E2E] text-[#F5C842]'
                          : 'bg-[#FDF6E3] text-[#4A0E2E]/80 hover:bg-[#F5C842]/20'
                      }`}
                    >
                      {flavor}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Card 2: Loaded Chips Chaat */}
          {chaatItem && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 border border-[#4A0E2E]/10 flex flex-col group"
            >
              {/* Photo Area 4:5 */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#4A0E2E]/5">
                <img
                  src={chaatImg}
                  alt={chaatItem.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

                {/* Tag pill top-left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#4A0E2E]/90 text-[#F5C842] text-xs font-bold shadow-md backdrop-blur-md border border-[#F5C842]/30">
                    {chaatItem.tag}
                  </span>
                </div>

                {/* Price pill: only if non-empty */}
                {chaatItem.price && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-gold-gradient text-[#4A0E2E] font-extrabold text-sm shadow-md">
                      {chaatItem.price}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-['Rozha_One'] text-2xl text-[#4A0E2E] group-hover:text-[#6B1F4A] transition-colors">
                    {chaatItem.name}
                  </h3>
                  {chaatItem.description && (
                    <p className="text-xs sm:text-sm text-[#4A0E2E]/75 leading-relaxed font-['Manrope'] mt-2 mb-4">
                      {chaatItem.description}
                    </p>
                  )}
                </div>
                <div className="pt-3 border-t border-[#4A0E2E]/10 flex items-center gap-2 text-xs font-semibold text-[#4A0E2E]/70">
                  <span className="w-2 h-2 rounded-full bg-[#F5C842]" />
                  Freshly tossed with tangy festive chutneys
                </div>
              </div>
            </motion.div>
          )}

          {/* Card 3: Traditional Kharwas */}
          {kharwasItem && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 border border-[#4A0E2E]/10 flex flex-col group"
            >
              {/* Photo Area 4:5 */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#4A0E2E]/5">
                <img
                  src={kharwasImg}
                  alt={kharwasItem.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

                {/* Tag pill top-left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#4A0E2E]/90 text-[#F5C842] text-xs font-bold shadow-md backdrop-blur-md border border-[#F5C842]/30">
                    {kharwasItem.tag}
                  </span>
                </div>

                {/* Price pill: only if non-empty */}
                {kharwasItem.price && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-gold-gradient text-[#4A0E2E] font-extrabold text-sm shadow-md">
                      {kharwasItem.price}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-['Rozha_One'] text-2xl text-[#4A0E2E] group-hover:text-[#6B1F4A] transition-colors">
                    {kharwasItem.name}
                  </h3>
                  {kharwasItem.description && (
                    <p className="text-xs sm:text-sm text-[#4A0E2E]/75 leading-relaxed font-['Manrope'] mt-2 mb-4">
                      {kharwasItem.description}
                    </p>
                  )}
                </div>
                <div className="pt-3 border-t border-[#4A0E2E]/10 flex items-center gap-2 text-xs font-semibold text-[#4A0E2E]/70">
                  <span className="w-2 h-2 rounded-full bg-[#F5C842]" />
                  Melt-in-mouth colostrum with fragrant cardamom
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                            GAMES & FUN SECTION                             */
/* -------------------------------------------------------------------------- */

function GamesSection() {
  return (
    <section
      id="games"
      className="relative bg-plum-gradient text-[#FDF6E3] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden rangoli-bg"
    >
      {/* Decorative Rotating Mandala */}
      <div className="absolute -right-32 top-10 opacity-20 pointer-events-none">
        <MandalaDecor className="w-96 h-96" />
      </div>
      <div className="absolute -left-32 bottom-10 opacity-15 pointer-events-none">
        <MandalaDecor className="w-96 h-96" />
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
          className="relative rounded-3xl overflow-hidden border border-[#F5C842]/30 bg-[#3B0B24]/80 shadow-card backdrop-blur-md mb-12 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Hamper Photo with Blur Effect */}
            <div className="relative aspect-video md:aspect-square overflow-hidden">
              <img
                src={hamperImg}
                alt="Festive Gift Hamper Teaser"
                className="w-full h-full object-cover filter blur-[2.5px] scale-105"
              />
              <div className="absolute inset-0 bg-[#4A0E2E]/40" />

              {/* Wobbling Gift Box Icon Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-gold-gradient flex items-center justify-center shadow-glow mb-3 wobble">
                  <Gift className="w-10 h-10 text-[#4A0E2E]" />
                </div>
                <span className="px-3.5 py-1 rounded-full bg-[#4A0E2E]/90 text-[#F5C842] text-xs font-bold border border-[#F5C842]/40 shadow-md">
                  Prize Hampers Inside
                </span>
              </div>
            </div>

            {/* Teaser Content */}
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5C842]/15 text-[#F5C842] text-xs font-bold w-fit mb-4">
                <Store className="w-3.5 h-3.5" />
                <span>Diwali Mandi Stall No. 4</span>
              </div>
              <h3 className="font-['Rozha_One'] text-2xl sm:text-3xl text-gold-gradient mb-3">
                {siteContent.games.teaserTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#FDF6E3]/85 leading-relaxed font-['Manrope'] mb-6">
                {siteContent.games.teaserDescription}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-[#F5C842] bg-[#6B1F4A]/60 px-4 py-2.5 rounded-full border border-[#F5C842]/20 w-fit">
                <span>Play at our stall & win handcrafted goodies!</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Three Mystery "?" Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {siteContent.games.mysteryCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#3B0B24]/70 border border-[#F5C842]/25 rounded-2xl p-6 text-center shadow-card hover:border-[#F5C842]/60 hover:shadow-glow-sm transition-all duration-300 group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#6B1F4A] border border-[#F5C842]/40 flex items-center justify-center text-[#F5C842] group-hover:scale-110 group-hover:bg-gold-gradient group-hover:text-[#4A0E2E] transition-all">
                <HelpCircle className="w-7 h-7" />
              </div>
              <h4 className="font-['Rozha_One'] text-lg text-[#FDF6E3] mb-1.5">{card.title}</h4>
              <p className="font-['Manrope'] text-xs text-[#FDF6E3]/70">{card.teaser}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                            FIND OUR STALL SECTION                          */
/* -------------------------------------------------------------------------- */

function StallSection() {
  const stall = siteContent.stall

  return (
    <section id="stall" className="relative bg-[#FDF6E3] text-[#4A0E2E] py-24 px-4 sm:px-6 lg:px-8 rangoli-bg-cream">
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

        {/* Dark Plum Card with Gold Map-Pin Medallion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-plum-gradient text-[#FDF6E3] rounded-3xl p-8 sm:p-12 border border-[#F5C842]/30 shadow-card shadow-glow relative overflow-hidden"
        >
          {/* Subtle background mandala */}
          <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 opacity-15 pointer-events-none">
            <MandalaDecor className="w-80 h-80" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left Gold Map-Pin Medallion */}
            <div className="flex flex-col items-center text-center shrink-0">
              <div className="relative">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gold-gradient flex items-center justify-center shadow-glow mb-4">
                  <MapPin className="w-12 h-12 text-[#4A0E2E]" />
                </div>
                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[#6B1F4A] border-2 border-[#F5C842] flex items-center justify-center">
                  <DiyaIcon className="w-5 h-5" />
                </div>
              </div>
              <span className="font-['Rozha_One'] text-2xl text-gold-gradient">
                {stall.stallNumber}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#FDF6E3]/60 font-semibold mt-1">
                {stall.cardTitle}
              </span>
            </div>

            {/* Right Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {/* Venue */}
              <div className="bg-[#3B0B24]/70 p-5 rounded-2xl border border-[#F5C842]/20">
                <div className="flex items-center gap-2.5 text-[#F5C842] text-xs font-bold uppercase tracking-wider mb-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>{stall.venueLabel}</span>
                </div>
                <p className="font-['Rozha_One'] text-lg text-[#FDF6E3] leading-snug">
                  {stall.venue}
                </p>
              </div>

              {/* Stall Number */}
              <div className="bg-[#3B0B24]/70 p-5 rounded-2xl border border-[#F5C842]/20">
                <div className="flex items-center gap-2.5 text-[#F5C842] text-xs font-bold uppercase tracking-wider mb-1.5">
                  <Store className="w-4 h-4" />
                  <span>Stall Assignment</span>
                </div>
                <p className="font-['Rozha_One'] text-lg text-gold-gradient leading-snug">
                  {stall.stallNumber} (Diwali Bites)
                </p>
              </div>

              {/* Date */}
              <div className="bg-[#3B0B24]/70 p-5 rounded-2xl border border-[#F5C842]/20">
                <div className="flex items-center gap-2.5 text-[#F5C842] text-xs font-bold uppercase tracking-wider mb-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{stall.dateLabel}</span>
                </div>
                <p className="font-['Rozha_One'] text-lg text-[#FDF6E3] leading-snug">
                  {stall.date}
                </p>
              </div>

              {/* Timing */}
              <div className="bg-[#3B0B24]/70 p-5 rounded-2xl border border-[#F5C842]/20">
                <div className="flex items-center gap-2.5 text-[#F5C842] text-xs font-bold uppercase tracking-wider mb-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{stall.timingLabel}</span>
                </div>
                <p className="font-['Rozha_One'] text-lg text-[#FDF6E3] leading-snug">
                  {stall.timing}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Landmark Note */}
          <div className="mt-8 pt-6 border-t border-[#F5C842]/20 flex items-center gap-3 text-xs sm:text-sm text-[#FDF6E3]/85 font-['Manrope']">
            <span>{stall.landmark}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                                   FOOTER                                   */
/* -------------------------------------------------------------------------- */

function Footer({ onNavigate }: { onNavigate: (href: string) => void }) {
  const footer = siteContent.footer
  const [count, setCount] = React.useState<number>(0)

  React.useEffect(() => {
    const KEY = 'diwali_bites_visits'
    const prev = parseInt(localStorage.getItem(KEY) ?? '0', 10)
    const next = prev + 1
    localStorage.setItem(KEY, String(next))
    setCount(next)
  }, [])

  return (
    <footer className="bg-[#3B0B24] border-t border-[#F5C842]/20 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-center text-[#FDF6E3]">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Animated Diya Logo & Brand Name */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#6B1F4A] border border-[#F5C842]/40 flex items-center justify-center p-1.5 shadow-glow-sm">
            <DiyaIcon className="w-7 h-7" />
          </div>
          <span className="font-['Rozha_One'] text-3xl text-gold-gradient tracking-wide">
            {footer.brandName}
          </span>
        </div>

        {/* Tagline */}
        <p className="font-['Rozha_One'] text-base sm:text-lg text-[#FDF6E3]/90 mb-6 max-w-lg">
          {footer.tagline}
        </p>

        {/* Quick Nav Anchors */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-xs sm:text-sm font-semibold text-[#FDF6E3]/75">
          {siteContent.nav.links.map((link) => (
            <button
              key={link.href}
              onClick={() => onNavigate(link.href)}
              className="hover:text-[#F5C842] transition-colors focus:outline-none"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Instagram Link: strictly renders ONLY if a handle is set (currently empty string -> hidden per brief!) */}
        {footer.instagram ? (
          <div className="mb-8">
            <a
              href={`https://instagram.com/${footer.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#6B1F4A] border border-[#F5C842]/40 text-[#F5C842] text-xs font-semibold hover:bg-gold-gradient hover:text-[#4A0E2E] transition-all"
            >
              <Instagram className="w-4 h-4" />
              <span>@{footer.instagram}</span>
            </a>
          </div>
        ) : null}

        {/* Student Note */}
        <div className="max-w-xl mx-auto text-xs text-[#FDF6E3]/70 font-['Manrope'] mb-8 leading-relaxed">
          <p>{footer.note}</p>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-[#F5C842]/15 w-full flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FDF6E3]/50 font-['Manrope'] gap-3">
          <p>{footer.copyright}</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-[#F5C842] fill-[#F5C842]" /> for Diwali Mandi
          </p>
        </div>
      </div>

      {/* Visitor count — just the number, no label */}
      <div className="mt-6 pb-4 text-center">
        <motion.span
          key={count}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-['Manrope'] text-sm tabular-nums text-[#F5C842]/60 select-none tracking-widest"
        >
          {count.toLocaleString()}
        </motion.span>
      </div>
    </footer>
  )
}
