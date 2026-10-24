import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Instagram } from 'lucide-react'
import { siteContent } from '../content'

interface FooterSectionProps {
  onNavigate: (href: string) => void
}

export function FooterSection({ onNavigate }: FooterSectionProps) {
  const footer = siteContent.footer
  const [visitorCount, setVisitorCount] = useState<number>(0)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    // Visitor counter
    const KEY = 'diwali_bites_visits'
    const prev = parseInt(localStorage.getItem(KEY) ?? '0', 10)
    const next = prev + 1
    localStorage.setItem(KEY, String(next))
    setVisitorCount(next)
  }, [])

  // Canvas fireworks loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let particles: {
      x: number
      y: number
      vx: number
      vy: number
      alpha: number
      color: string
      size: number
    }[] = []

    const colors = ['#FFE066', '#F5C842', '#D4A017', '#FF9800', '#FF5722']

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth
      canvas.height = 200
    }
    resize()
    window.addEventListener('resize', resize)

    const createBurst = (x: number, y: number) => {
      const count = 28
      const baseColor = colors[Math.floor(Math.random() * colors.length)]
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.3
        const speed = 1.5 + Math.random() * 2.5
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color: baseColor,
          size: 1.5 + Math.random() * 2,
        })
      }
    }

    let lastBurst = 0
    let isVisible = true

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting && !document.hidden
    })
    observer.observe(canvas)

    const loop = (now: number) => {
      animationId = requestAnimationFrame(loop)
      if (!isVisible) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Periodically spawn random firework burst
      if (now - lastBurst > 1800) {
        lastBurst = now
        const burstX = Math.random() * canvas.width * 0.8 + canvas.width * 0.1
        const burstY = Math.random() * 80 + 30
        createBurst(burstX, burstY)
      }

      // Update & draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.03 // slight gravity
        p.alpha -= 0.015

        if (p.alpha <= 0) {
          particles.splice(i, 1)
          continue
        }

        ctx.save()
        ctx.globalAlpha = p.alpha
        ctx.fillStyle = p.color
        ctx.shadowColor = p.color
        ctx.shadowBlur = 6
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    animationId = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      observer.disconnect()
    }
  }, [])

  return (
    <footer className="relative bg-[#2D061A] border-t border-[#F5C842]/20 pt-16 pb-20 px-4 sm:px-6 lg:px-8 text-center text-[#FDF6E3] overflow-hidden">
      {/* Canvas fireworks above skyline */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 right-0 w-full pointer-events-none opacity-70 z-10"
        height={200}
      />

      {/* Skyline Silhouette */}
      <div className="absolute top-8 left-0 right-0 h-28 pointer-events-none opacity-20 flex items-end overflow-hidden z-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-[#F5C842]">
          <path d="M0,120 L0,90 L40,90 L40,65 L70,65 L70,95 L110,95 L110,50 L140,30 L170,50 L170,90 L220,90 L220,70 L260,70 L260,95 L320,95 L320,40 L350,20 L380,40 L380,95 L440,95 L440,60 L490,60 L490,95 L550,95 L550,45 L590,25 L630,45 L630,95 L700,95 L700,70 L750,70 L750,95 L810,95 L810,50 L850,20 L890,50 L890,95 L960,95 L960,65 L1010,65 L1010,95 L1070,95 L1070,40 L1110,20 L1150,40 L1150,90 L1200,90 L1200,120 Z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-20">
        {/* Shubh Deepavali Blessing Pill */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#6B1F4A]/80 border border-[#F5C842]/40 text-[#F5C842] text-xs font-black uppercase tracking-widest mb-6 shadow-glow-sm">
          <span>Shubh Deepavali</span>
        </div>

        {/* Brand Name */}
        <h2 className="font-['Rozha_One'] text-4xl sm:text-5xl text-gold-gradient tracking-wide mb-3">
          {footer.brandName}
        </h2>

        {/* Tagline */}
        <p className="font-['Rozha_One'] text-base sm:text-lg text-[#FDF6E3]/90 mb-6 max-w-lg">
          {footer.tagline}
        </p>

        {/* Quick Nav Anchors */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-xs sm:text-sm font-semibold text-[#FDF6E3]/80">
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

        {/* Instagram Link if present */}
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
        <div className="pt-6 border-t border-[#F5C842]/15 w-full flex flex-col sm:flex-row items-center justify-between text-xs text-[#FDF6E3]/55 font-['Manrope'] gap-3">
          <p>{footer.copyright}</p>
          <p className="flex items-center gap-1.5 font-medium">
            Made with <Heart className="w-3.5 h-3.5 text-[#F5C842] fill-[#F5C842]" /> for Diwali Mandi 2026
          </p>
        </div>

        {/* Visitor counter */}
        <div className="mt-6 text-center">
          <span className="text-[11px] uppercase tracking-widest text-[#FDF6E3]/40 font-mono block mb-1">
            Festive Stall Visitors
          </span>
          <motion.span
            key={visitorCount}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-base tabular-nums text-[#F5C842]/80 font-black tracking-widest bg-[#3B0B24] px-3.5 py-1 rounded-full border border-[#F5C842]/20"
          >
            {visitorCount.toLocaleString()}
          </motion.span>
        </div>
      </div>
    </footer>
  )
}
