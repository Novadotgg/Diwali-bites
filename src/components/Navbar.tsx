import { motion, AnimatePresence } from 'framer-motion'
import { Store, Menu as MenuIcon, X, ChevronRight } from 'lucide-react'
import { siteContent } from '../content'

interface NavbarProps {
  scrolled: boolean
  activeSection: string
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  onNavigate: (href: string) => void
}

function DiyaLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="navFlameGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE066" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#F5C842" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#D4A017" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="navFlameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#D4A017" />
          <stop offset="40%" stopColor="#F5C842" />
          <stop offset="80%" stopColor="#FFE57F" />
          <stop offset="100%" stopColor="#FFF9E6" />
        </linearGradient>
        <linearGradient id="navDiyaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5C842" />
          <stop offset="50%" stopColor="#D4A017" />
          <stop offset="100%" stopColor="#8A5A00" />
        </linearGradient>
      </defs>

      <circle cx="32" cy="22" r="14" fill="url(#navFlameGlow)" className="flicker" />
      <path
        d="M 32 10 C 35 15.5 38 19.5 38 25 C 38 28.5 35.3 31 32 31 C 28.7 31 26 28.5 26 25 C 26 19.5 29 15.5 32 10 Z"
        fill="url(#navFlameGrad)"
        className="flicker"
      />
      <path
        d="M 14 30 C 14 42 22 47 32 47 C 42 47 50 42 50 30 C 41 34.5 23 34.5 14 30 Z"
        fill="url(#navDiyaGrad)"
      />
      <ellipse cx="32" cy="30.5" rx="18" ry="3.5" fill="#FCE588" fillOpacity="0.8" />
      <path d="M 26 47 L 24 51 L 40 51 L 38 47 Z" fill="#B27E0C" />
    </svg>
  )
}

export function Navbar({
  scrolled,
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  onNavigate,
}: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-500 flex items-center justify-between px-4 sm:px-6 py-2.5 ${
          scrolled
            ? 'glass-plum shadow-glow-sm shadow-card border border-[#F5C842]/35'
            : 'bg-[#4A0E2E]/70 backdrop-blur-md border border-[#F5C842]/20'
        }`}
      >
        {/* Brand Logo Left */}
        <button
          onClick={() => onNavigate('#hero')}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-full bg-[#6B1F4A]/90 border border-[#F5C842]/45 flex items-center justify-center p-1 group-hover:scale-105 group-hover:border-[#F5C842] transition-all shadow-glow-sm">
            <DiyaLogo className="w-6 h-6" />
          </div>
          <div>
            <span className="font-['Rozha_One'] text-lg sm:text-xl text-gold-gradient tracking-wide block leading-none">
              {siteContent.brand.name}
            </span>
          </div>
        </button>

        {/* Center Pill Navigation (Desktop) */}
        <nav className="hidden md:flex items-center bg-[#3B0B24]/80 p-1 rounded-full border border-[#F5C842]/25 shadow-inner">
          {siteContent.nav.links.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId

            return (
              <button
                key={link.href}
                onClick={() => onNavigate(link.href)}
                className={`relative px-4 py-1.5 text-xs lg:text-sm font-bold rounded-full transition-colors duration-300 focus:outline-none ${
                  isActive ? 'text-[#4A0E2E]' : 'text-[#FDF6E3]/85 hover:text-[#F5C842]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-gold-gradient shadow-glow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Right CTA (Desktop) */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => onNavigate(siteContent.nav.cta.href)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gold-gradient text-[#4A0E2E] font-extrabold text-xs lg:text-sm shadow-glow hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none"
          >
            <Store className="w-3.5 h-3.5" />
            <span>{siteContent.nav.cta.label}</span>
          </button>
        </div>

        {/* Mobile Actions: Stall button + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onNavigate(siteContent.nav.cta.href)}
            className="px-3 py-1.5 rounded-full bg-gold-gradient text-[#4A0E2E] font-black text-xs shadow-glow"
          >
            Find Stall
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-full bg-[#6B1F4A] border border-[#F5C842]/45 flex items-center justify-center text-[#F5C842] focus:outline-none shadow-md"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-[#4A0E2E]/98 backdrop-blur-2xl p-6 sm:p-8 flex flex-col justify-between md:hidden rangoli-bg overflow-y-auto min-h-screen"
          >
            <div className="flex items-center justify-between border-b border-[#F5C842]/20 pb-4">
              <div className="flex items-center gap-2">
                <DiyaLogo className="w-7 h-7" />
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

            {/* Staggered Numbered oversized links - Top Aligned */}
            <div className="flex flex-col gap-6 pt-8 pb-4 flex-1">
              {siteContent.nav.links.map((link, idx) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * idx, duration: 0.35 }}
                  onClick={() => onNavigate(link.href)}
                  className="flex items-baseline gap-4 text-left group"
                >
                  <span className="font-mono text-xs text-[#F5C842]/80 font-bold tracking-widest">
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
                className="w-full py-3.5 rounded-full bg-gold-gradient text-[#4A0E2E] font-black text-center text-sm shadow-glow flex items-center justify-center gap-2"
              >
                <Store className="w-4 h-4" />
                <span>{siteContent.nav.cta.label}</span>
              </button>
              <p className="text-center text-xs text-[#FDF6E3]/70 font-['Manrope']">
                {siteContent.stall.venue} • {siteContent.stall.date}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
