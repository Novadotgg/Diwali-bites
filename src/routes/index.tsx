import { useState, useEffect, useRef } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import Lenis from 'lenis'

import { SparkleClick } from '../components/SparkleClick'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { MenuSection } from '../components/MenuSection'
import { GamesSection } from '../components/GamesSection'
import { StallSection } from '../components/StallSection'
import { FooterSection } from '../components/FooterSection'
import { MobileQuickBar } from '../components/MobileQuickBar'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const lenisRef = useRef<Lenis | null>(null)

  // Initialize Lenis smooth scroll (desktop only to prevent mobile touch latency/jank)
  useEffect(() => {
    const isTouch =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768)

    if (isTouch) return

    const lenis = new Lenis({
      duration: 1.1,
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

  // Scroll spy, progress bar, & header styling
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0
      setScrollProgress(progress)

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
    document.body.style.overflow = ''

    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (!element) return

    // Smooth scroll with header offset that works reliably across all mobile browsers
    setTimeout(() => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(element, { offset: -70 })
      } else {
        const headerOffset = 70
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }, 40)
  }

  return (
    <div className="min-h-screen bg-[#4A0E2E] text-[#FDF6E3] font-['Manrope'] relative selection:bg-[#F5C842] selection:text-[#4A0E2E]">

      {/* Subtle Background Click Sparkle Burst */}
      <SparkleClick />

      {/* Top Gold Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gold-gradient shadow-glow-sm transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sticky Glass Navbar */}
      <Navbar
        scrolled={scrolled}
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onNavigate={scrollTo}
      />

      {/* Hero Section with 3D WebGL Diya */}
      <HeroSection onNavigate={scrollTo} />

      {/* Interactive 3D Showcase Menu Section */}
      <MenuSection onVisitStall={() => scrollTo('#stall')} />

      {/* Games & Prizes Section */}
      <GamesSection />

      {/* Find Our Stall / Venue Coordinates */}
      <StallSection />

      {/* Footer with Fireworks Skyline Loop */}
      <FooterSection onNavigate={scrollTo} />

      {/* Floating Quick Navigation Pill on Mobile */}
      <MobileQuickBar activeSection={activeSection} onNavigate={scrollTo} />
    </div>
  )
}
