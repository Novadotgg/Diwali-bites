import { useState, useEffect, useRef } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Check,
  GraduationCap,
  Store,
  Users,
  Search,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Gift,
  Download,
} from 'lucide-react'
import confetti from 'canvas-confetti'
import { Professor, professorsList } from '../data/professors'

export const Route = createFileRoute('/invitation')({
  component: InvitationPage,
})

/* ========================================================================
   ORNAMENTAL INLINE SVGS (Bespoke Royal Indian Motifs - No Emojis, No Sparkles)
   ======================================================================== */

/** Hanging Toran / Marigold Garland Motif across the top of the invitation card */
function ToranGarlandMotif({ className = 'w-full' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} pointer-events-none select-none`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M 0 6 Q 75 28 150 6 Q 225 28 300 6 Q 375 28 450 6 Q 525 28 600 6"
        stroke="#D4A017"
        strokeWidth="1.5"
        strokeOpacity="0.8"
      />
      <path
        d="M 0 10 Q 75 32 150 10 Q 225 32 300 10 Q 375 32 450 10 Q 525 32 600 10"
        stroke="#E65100"
        strokeWidth="1"
        strokeOpacity="0.5"
        strokeDasharray="2 4"
      />
      {/* Mango Leaves & Marigold Bells at nodes */}
      {[75, 225, 375, 525].map((x) => (
        <g key={`leaf-${x}`} transform={`translate(${x}, 22)`}>
          {/* Mango leaf */}
          <path
            d="M 0 0 C 6 10 10 18 0 26 C -10 18 -6 10 0 0 Z"
            fill="#D4A017"
            fillOpacity="0.65"
            stroke="#C9822A"
            strokeWidth="0.8"
          />
          {/* Marigold bloom */}
          <circle cx="0" cy="12" r="5" fill="#FFA726" />
          <circle cx="0" cy="12" r="2.5" fill="#FFFDF5" />
        </g>
      ))}
      {[0, 150, 300, 450, 600].map((x) => (
        <g key={`bead-${x}`} transform={`translate(${x}, 6)`}>
          <circle cx="0" cy="0" r="3" fill="#D4A017" />
          <circle cx="0" cy="0" r="1.2" fill="#FFFDF5" />
          <line x1="0" y1="0" x2="0" y2="8" stroke="#D4A017" strokeWidth="1" strokeOpacity="0.7" />
          <circle cx="0" cy="9" r="2" fill="#E65100" />
        </g>
      ))}
    </svg>
  )
}

/** Corner Flourish filigree for royal card framing */
function OrnateCornerFlourish({
  position,
}: {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}) {
  const transformMap = {
    'top-left': 'top-2.5 left-2.5',
    'top-right': 'top-2.5 right-2.5 scale-x-[-1]',
    'bottom-left': 'bottom-2.5 left-2.5 scale-y-[-1]',
    'bottom-right': 'bottom-2.5 right-2.5 scale-[-1]',
  }

  return (
    <div
      className={`absolute ${transformMap[position]} w-10 h-10 pointer-events-none select-none z-10 text-[#C9822A] opacity-90`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <path d="M 2 38 L 2 6 C 2 3.8 3.8 2 6 2 L 38 2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M 6 34 L 6 9 C 6 7.3 7.3 6 9 6 L 34 6" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.7" />
        <circle cx="6" cy="6" r="2.5" fill="currentColor" />
        <path
          d="M 10 10 C 13 8 18 10 16 16 C 14 20 8 16 10 10 Z"
          fill="currentColor"
          fillOpacity="0.45"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <circle cx="22" cy="6" r="1.5" fill="currentColor" />
        <circle cx="6" cy="22" r="1.5" fill="currentColor" />
      </svg>
    </div>
  )
}

/** Traditional Paisley / Diya Divider (Central motif with gold rules) */
function PaisleyDiyaDivider({ className = 'my-4' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 w-full max-w-sm mx-auto ${className}`} aria-hidden="true">
      <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#D4A017]/70 to-[#D4A017]" />
      <svg viewBox="0 0 64 24" className="w-14 h-5 text-[#C9822A] shrink-0" fill="none">
        <path
          d="M 12 14 C 18 10 22 13 24 16 C 20 18 14 16 12 14 Z"
          fill="currentColor"
          fillOpacity="0.6"
        />
        <path
          d="M 24 13 C 24 18 40 18 40 13 C 36 14.5 28 14.5 24 13 Z"
          fill="#D4A017"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M 32 4 C 34 8 36 10.5 32 13 C 28 10.5 30 8 32 4 Z"
          fill="#FFFDF5"
          stroke="#E65100"
          strokeWidth="0.8"
        />
        <path
          d="M 52 14 C 46 10 42 13 40 16 C 44 18 50 16 52 14 Z"
          fill="currentColor"
          fillOpacity="0.6"
        />
        <circle cx="6" cy="14" r="1.5" fill="currentColor" />
        <circle cx="58" cy="14" r="1.5" fill="currentColor" />
      </svg>
      <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-[#D4A017]/70 to-[#D4A017]" />
    </div>
  )
}

/** Diya Badge attached to faculty photo */
function PhotoDiyaBadge() {
  return (
    <div
      className="absolute bottom-1 right-1 w-9 h-9 rounded-full bg-[#FFFDF5] border-2 border-[#D4A017] p-1.5 flex items-center justify-center shadow-lg shadow-black/20 z-20"
      title="Honored Guest"
    >
      <svg viewBox="0 0 32 32" className="w-full h-full text-[#C9822A]" fill="none" aria-hidden="true">
        <path
          d="M 16 4 C 18 9 21 13 16 18 C 11 13 14 9 16 4 Z"
          fill="#FFA726"
          stroke="#E65100"
          strokeWidth="1"
        />
        <path
          d="M 6 17 C 6 25 26 25 26 17 C 21 19.5 11 19.5 6 17 Z"
          fill="#D4A017"
          stroke="#C9822A"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  )
}

/** Subtle ambient background mandala watermark inside the cream card */
function AmbientMandalaPattern() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full opacity-[0.045] text-[#8A5A00] pointer-events-none select-none"
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
      <circle cx="200" cy="200" r="60" fill="none" stroke="currentColor" strokeWidth="1" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <g key={deg} transform={`rotate(${deg} 200 200)`}>
          <path d="M 200 60 C 208 90 214 110 200 130 C 186 110 192 90 200 60 Z" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="45" r="3" fill="currentColor" />
        </g>
      ))}
    </svg>
  )
}

/* ========================================================================
   CALENDAR INVITE GENERATOR (.ics helper)
   ======================================================================== */
function downloadCalendarInvite(profName: string) {
  const title = `Diwali Bites — Faculty Visit (Stall No. 4)`
  const description = `Special Faculty Invitation for ${profName} at Diwali Bites Stall No. 4. Complimentary festive sweet & fresh mojito reserved for you!`
  const location = `Stall No. 4, PCET S.B. Patil Architecture Building, Pune`

  const icsLines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Diwali Bites//Faculty Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    'DTSTART:20261027T033000Z', // 9:00 AM IST
    'DTEND:20261027T113000Z',   // 5:00 PM IST
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'BEGIN:VALARM',
    'TRIGGER:-PT30M',
    'ACTION:DISPLAY',
    'DESCRIPTION:Reminder: Visit Stall No. 4 at Diwali Mandi',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ]

  const blob = new Blob([icsLines.join('\r\n')], { type: 'text/calendar;charset=utf-8' })
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.setAttribute(
    'download',
    `diwali-bites-invitation-${profName.toLowerCase().replace(/[^a-z0-9]/g, '-')}.ics`
  )
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  window.URL.revokeObjectURL(url)
}

/* ========================================================================
   MAIN COMPONENT
   ======================================================================== */
function InvitationPage() {
  const [selectedProfId, setSelectedProfId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [photoError, setPhotoError] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const directoryListRef = useRef<HTMLDivElement>(null)
  const [dirCanScrollUp, setDirCanScrollUp] = useState(false)
  const [dirCanScrollDown, setDirCanScrollDown] = useState(false)

  // Sync selected professor from URL query parameter ?prof=id
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const profId = params.get('prof')
      if (profId && professorsList.some((p) => p.id === profId)) {
        setSelectedProfId(profId)
      }
    }
  }, [])

  const selectedProfessor: Professor | undefined = professorsList.find(
    (p) => p.id === selectedProfId
  )

  // Set document title and preview metadata dynamically for WhatsApp / social sharing
  useEffect(() => {
    if (selectedProfessor) {
      document.title = `You're invited, ${selectedProfessor.name} | Diwali Bites`
    } else {
      document.title = 'Special Faculty Invitations | Diwali Bites'
    }
  }, [selectedProfessor])

  // Reset photo error when selected professor changes
  useEffect(() => {
    setPhotoError(false)
  }, [selectedProfId])

  // Fire celebratory gold confetti when a professor card loads
  useEffect(() => {
    if (selectedProfessor) {
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.55 },
          colors: ['#D4A017', '#F5C842', '#FFA726', '#4A0E2E'],
        })
      } catch {
        // safe fallback
      }
    }
  }, [selectedProfId, selectedProfessor])

  const handleSelectProfessor = (profId: string) => {
    setSelectedProfId(profId)
    if (typeof window !== 'undefined') {
      const newUrl = `${window.location.pathname}?prof=${profId}`
      window.history.pushState({ path: newUrl }, '', newUrl)
    }
  }

  const handleResetProfessor = () => {
    setSelectedProfId(null)
    if (typeof window !== 'undefined') {
      window.history.pushState({ path: window.location.pathname }, '', window.location.pathname)
    }
  }

  // Web Share API with clipboard fallback
  const handleShare = async () => {
    const shareTitle = selectedProfessor
      ? `Diwali Faculty Invitation — ${selectedProfessor.name}`
      : 'Diwali Bites Faculty Invitations'
    const shareText = selectedProfessor
      ? `Respected ${selectedProfessor.name}, Team Diwali Bites cordially invites you to Stall No. 4, PCET Architecture Campus for Diwali Mandi 2026!`
      : 'Special Faculty Invitation to Diwali Bites Stall No. 4!'

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: window.location.href,
        })
        return
      } catch {
        // user cancelled or share failed, fallback to clipboard
      }
    }

    if (navigator.clipboard && typeof window !== 'undefined') {
      await navigator.clipboard.writeText(window.location.href)
      setToastMessage('Invitation link copied to clipboard!')
      setTimeout(() => setToastMessage(null), 3000)
    }
  }

  const handleCalendar = () => {
    if (selectedProfessor) {
      downloadCalendarInvite(selectedProfessor.name)
      setToastMessage('Calendar invite (.ics) downloaded!')
      setTimeout(() => setToastMessage(null), 3000)
    }
  }

  // Initials generator for fallback monogram
  const getInitials = (name: string) => {
    const clean = name.replace(/^(Dr\.|Prof\.|Mr\.|Ms\.|Mrs\.)\s+/i, '').trim()
    const parts = clean.split(' ').filter(Boolean)
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  }

  // Filtered professors for directory search
  const filteredProfessors = professorsList.filter(
    (prof) =>
      prof.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prof.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prof.designation.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const checkDirScroll = () => {
    const el = directoryListRef.current
    if (!el) return
    const hasOverflow = el.scrollHeight > el.clientHeight
    setDirCanScrollUp(el.scrollTop > 10)
    setDirCanScrollDown(hasOverflow && el.scrollTop + el.clientHeight < el.scrollHeight - 10)
  }

  useEffect(() => {
    if (!selectedProfessor) {
      setTimeout(checkDirScroll, 120)
    }
  }, [selectedProfessor, filteredProfessors])

  const handleDirScroll = (direction: 'up' | 'down') => {
    const el = directoryListRef.current
    if (!el) return
    const scrollAmount = 160
    el.scrollBy({
      top: direction === 'up' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4A0E2E] via-[#350A20] to-[#2E0719] text-[#FFF4DC] font-['Manrope'] relative overflow-x-hidden selection:bg-[#F2C230] selection:text-[#4A0E2E] flex flex-col justify-between">
      {/* Ambient Warm Golden Aura and Floating Bokeh (Low opacity, non-distracting) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-gradient-to-b from-[#F2C230]/15 via-[#FF9800]/08 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-12 left-8 w-80 h-80 bg-[#8B2635]/25 rounded-full blur-3xl" />
        <div className="absolute top-24 right-8 w-80 h-80 bg-[#D4A017]/12 rounded-full blur-3xl" />
        {/* Soft slow-floating festive bokeh */}
        <div className="absolute top-1/3 left-1/4 w-3.5 h-3.5 rounded-full bg-[#F2C230]/30 blur-sm animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-[#FFA726]/25 blur-sm animate-pulse" style={{ animationDelay: '1.2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 rounded-full bg-[#FFF4DC]/20 blur-sm animate-pulse" style={{ animationDelay: '2.1s' }} />
      </div>

      {/* Top Header Navigation (Hidden on print) */}
      <header className="relative z-20 max-w-5xl mx-auto w-full px-4 sm:px-6 pt-6 pb-3 flex items-center justify-between no-print">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B0B24]/90 border border-[#F2C230]/35 text-xs sm:text-sm font-semibold text-[#FFF4DC] hover:text-[#F2C230] hover:border-[#F2C230] transition-all backdrop-blur-md shadow-glow-sm group whitespace-nowrap shrink-0 min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform shrink-0" />
          <span>Back</span>
        </Link>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleShare}
            aria-label="Share this invitation"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B0B24]/90 border border-[#F2C230]/35 text-xs sm:text-sm font-semibold text-[#FFF4DC] hover:border-[#F2C230] transition-all backdrop-blur-md shadow-glow-sm min-h-[44px]"
          >
            <Share2 className="w-3.5 h-3.5 text-[#F2C230]" />
            <span>Share Invite</span>
          </button>
        </div>
      </header>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-[#2E0719] border border-[#F2C230] text-[#F2C230] text-xs font-bold shadow-2xl backdrop-blur-xl flex items-center gap-2"
          >
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-3xl mx-auto w-full px-4 sm:px-6 py-4 sm:py-8 flex flex-col items-center text-center">
        <AnimatePresence mode="wait">
          {selectedProfessor ? (
            /* ========================================================================
               VIEW A: ROYAL CREAM PARCHMENT INVITATION CARD (Luxury Hand-Delivered Feel)
               ======================================================================== */
            <motion.div
              key={selectedProfessor.id}
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[680px] rounded-3xl p-6 sm:p-10 md:p-12 bg-gradient-to-b from-[#FFFDF8] via-[#FDF6E3] to-[#F7ECD2] text-[#3B0B24] border-2 border-[#D4A017] outline outline-1 outline-offset-4 outline-[#D4A017]/40 shadow-2xl overflow-hidden text-center print-card"
            >
              {/* Background Mandala Watermark Texture */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <AmbientMandalaPattern />
              </div>

              {/* 4 Ornate Corner Flourishes in Rich Brass Gold */}
              <OrnateCornerFlourish position="top-left" />
              <OrnateCornerFlourish position="top-right" />
              <OrnateCornerFlourish position="bottom-left" />
              <OrnateCornerFlourish position="bottom-right" />

              {/* Hanging Toran / Marigold Garland across top */}
              <div className="absolute top-0 left-0 right-0 h-10 overflow-hidden pointer-events-none">
                <ToranGarlandMotif />
              </div>

              {/* 1. Header: Team Diwali Bites Presents */}
              <div className="pt-4 sm:pt-5 mb-1">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] font-extrabold text-[#8A5A00]">
                  Team Diwali Bites Presents
                </p>
                <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4A017] to-transparent mx-auto mt-1 mb-2" />
              </div>

              {/* 2. Title: Diwali Faculty Invitation + Cordially Invited */}
              <div className="mb-6">
                <h2 className="font-['Cinzel_Decorative'] text-xl sm:text-2xl lg:text-3xl font-bold text-[#4A0E2E] tracking-wide uppercase drop-shadow-sm">
                  Diwali Faculty Invitation
                </h2>
                <p className="text-xs sm:text-sm font-['Cinzel_Decorative'] italic text-[#6B1F4A] tracking-widest mt-0.5">
                  You are cordially invited
                </p>
              </div>

              {/* 3. Faculty Photo (Correctly Cropped, Face-Centered, Double Gold Ring + Diya Badge) */}
              <div className="mx-auto mb-6 flex flex-col items-center">
                <div className="relative group">
                  {/* Glowing Aura Ring */}
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#F2C230] via-[#FFA726] to-[#E65100] blur-sm opacity-60 group-hover:opacity-100 transition duration-500 pointer-events-none" />

                  {/* Outer Gold Border Ring */}
                  <div className="relative p-1 rounded-full border-2 border-[#D4A017] bg-[#FFF8E7] shadow-xl">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden bg-[#FDF6E3] border-2 border-[#F2C230] flex items-center justify-center relative">
                      {!photoError && selectedProfessor.image ? (
                        <img
                          src={selectedProfessor.image}
                          alt={`Official photograph of ${selectedProfessor.name}`}
                          loading="lazy"
                          onError={() => setPhotoError(true)}
                          className="w-full h-full object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        /* Graceful Monogram Initials Fallback */
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#FFF4DC] via-[#F8EED1] to-[#F1DFC0] text-[#4A0E2E]">
                          <span className="font-['Rozha_One'] text-2xl sm:text-3xl tracking-wider text-[#4A0E2E]">
                            {getInitials(selectedProfessor.name)}
                          </span>
                          <span className="text-[9px] uppercase tracking-widest text-[#8A5A00] font-bold mt-0.5">
                            SBPIM Faculty
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Ceremonial Diya Badge Pinned at bottom right */}
                    <PhotoDiyaBadge />
                  </div>
                </div>
              </div>

              {/* 4. Name Block: Refined Script/Small-Caps 'Respected' + Large Royal Plum Name + Clean Title Line */}
              <div className="mb-4">
                <p className="text-[11px] sm:text-xs font-bold tracking-[0.3em] uppercase text-[#8A5A00] mb-1">
                  {selectedProfessor.salutation || 'Respected'}
                </p>
                <h1 className="font-['Rozha_One'] text-3xl sm:text-4xl md:text-5xl text-[#4A0E2E] tracking-tight leading-tight my-1 drop-shadow-sm">
                  {selectedProfessor.name}
                </h1>

                {/* Clean, refined single line for designation & department */}
                <div className="mt-2 text-xs sm:text-sm text-[#4A0E2E]/90 font-semibold flex items-center justify-center gap-2 flex-wrap max-w-md mx-auto">
                  <span className="text-[#8A5A00] font-bold">{selectedProfessor.designation}</span>
                  <span className="text-[#D4A017] font-bold">•</span>
                  <span className="text-[#4A0E2E]/80">{selectedProfessor.department}</span>
                </div>
              </div>

              {/* Ornamental Paisley / Diya Divider */}
              <PaisleyDiyaDivider className="my-5" />

              {/* 5. Formal Invitation Letter in Warm Ivory Paper Panel */}
              <div className="my-5 p-5 sm:p-7 rounded-2xl bg-white/75 border border-[#D4A017]/40 text-left sm:text-center backdrop-blur-sm shadow-sm relative overflow-hidden">
                <p className="text-sm sm:text-[15px] text-[#3B0B24] leading-relaxed font-['Manrope'] mb-4">
                  Warm Diwali greetings from <strong className="text-[#8A5A00] font-bold">Team Diwali Bites</strong>.
                  It would be our utmost honour to welcome you at <strong className="text-[#8A5A00] font-bold">Stall No. 4</strong> this
                  Diwali Mandi. Your continuous guidance and encouragement have shaped our journey, and your presence
                  would make our celebration truly special.
                </p>

                {/* Personal highlighted pull-quote */}
                {selectedProfessor.specialMessage && (
                  <div className="mt-3 p-3.5 sm:p-4 rounded-xl bg-[#FFF8E7] border-l-4 border-[#D4A017] text-xs sm:text-sm text-[#4A0E2E] italic leading-snug shadow-sm">
                    "{selectedProfessor.specialMessage}"
                  </div>
                )}
              </div>

              {/* 6. VIP Privilege Ribbon / Gold Coupon Ticket with Perforated Edges */}
              <div className="relative my-6 bg-gradient-to-r from-[#F5C842]/20 via-[#F5C842]/35 to-[#F5C842]/20 border border-[#D4A017] rounded-xl p-3.5 sm:p-4 flex items-center justify-between gap-3 overflow-hidden shadow-sm">
                {/* Left & Right Perforation Cut-outs matching card background */}
                <div className="absolute -left-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#FDF6E3] border-r border-[#D4A017]" />
                <div className="absolute -right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#FDF6E3] border-l border-[#D4A017]" />

                <div className="flex items-center gap-3 pl-2 sm:pl-3">
                  <div className="w-8 h-8 rounded-full bg-gold-gradient text-[#4A0E2E] flex items-center justify-center shrink-0 shadow-md">
                    <Gift className="w-4 h-4 text-[#4A0E2E]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-black uppercase tracking-wider text-[#8A5A00]">
                      VIP Faculty Pass
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-[#3B0B24]">
                      Complimentary festive sweet & fresh mojito reserved for you
                    </p>
                  </div>
                </div>

                <div className="hidden sm:block border-l border-dashed border-[#D4A017]/70 h-8 pr-2" />
              </div>

              {/* 7. Event Details: 3 Balanced Tiles with Line Icons (No text wrapping on time/date) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6 text-left">
                {/* Tile 1: Venue */}
                <div className="p-3.5 rounded-xl bg-white/70 border border-[#D4A017]/35 flex items-center sm:flex-col sm:items-center sm:text-center gap-2.5 shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-[#F5C842]/20 border border-[#D4A017]/40 text-[#8A5A00] flex items-center justify-center shrink-0">
                    <Store className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#8A5A00] font-bold uppercase tracking-wider">Venue</p>
                    <p className="text-xs sm:text-sm font-bold text-[#3B0B24] whitespace-nowrap">Stall No. 4</p>
                    <p className="text-[11px] text-[#3B0B24]/75 whitespace-nowrap">PCET Architecture</p>
                  </div>
                </div>

                {/* Tile 2: Date */}
                <div className="p-3.5 rounded-xl bg-white/70 border border-[#D4A017]/35 flex items-center sm:flex-col sm:items-center sm:text-center gap-2.5 shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-[#F5C842]/20 border border-[#D4A017]/40 text-[#8A5A00] flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#8A5A00] font-bold uppercase tracking-wider">Date</p>
                    <p className="text-xs sm:text-sm font-bold text-[#3B0B24] whitespace-nowrap">27 October 2026</p>
                    <p className="text-[11px] text-[#3B0B24]/75 whitespace-nowrap">Diwali Mandi Day</p>
                  </div>
                </div>

                {/* Tile 3: Time (whitespace-nowrap prevents '5:00 / PM' breaking) */}
                <div className="p-3.5 rounded-xl bg-white/70 border border-[#D4A017]/35 flex items-center sm:flex-col sm:items-center sm:text-center gap-2.5 shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-[#F5C842]/20 border border-[#D4A017]/40 text-[#8A5A00] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#8A5A00] font-bold uppercase tracking-wider">Time</p>
                    <p className="text-xs sm:text-sm font-bold text-[#3B0B24] whitespace-nowrap">9:00 AM – 5:00 PM</p>
                    <p className="text-[11px] text-[#3B0B24]/75 whitespace-nowrap">All Day Festivities</p>
                  </div>
                </div>
              </div>

              {/* 8. Utility Actions: Add to Calendar & Share Invite */}
              <div className="flex flex-wrap items-center justify-center gap-3 my-4 no-print">
                <button
                  type="button"
                  onClick={handleCalendar}
                  aria-label="Add invitation to your calendar"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 hover:bg-white border border-[#D4A017]/60 text-xs font-bold text-[#4A0E2E] transition-all min-h-[44px] shadow-sm hover:border-[#D4A017]"
                >
                  <Download className="w-3.5 h-3.5 text-[#8A5A00]" />
                  <span>Add to Calendar (.ics)</span>
                </button>

                <button
                  type="button"
                  onClick={handleShare}
                  aria-label="Share this invitation link"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 hover:bg-white border border-[#D4A017]/60 text-xs font-bold text-[#4A0E2E] transition-all min-h-[44px] shadow-sm hover:border-[#D4A017]"
                >
                  <Share2 className="w-3.5 h-3.5 text-[#8A5A00]" />
                  <span>Share on WhatsApp</span>
                </button>
              </div>

              {/* 9. Primary CTA Button */}
              <div className="flex items-center justify-center pt-3 no-print">
                <Link
                  to="/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gold-gradient text-[#4A0E2E] font-black text-xs sm:text-sm shadow-glow hover:scale-105 active:scale-95 transition-all min-h-[44px]"
                >
                  <Store className="w-4 h-4" />
                  <span>Explore Menu & Games</span>
                </Link>
              </div>

              {/* 10. Signature Footer */}
              <div className="mt-8 pt-6 border-t border-[#D4A017]/30 text-center">
                <p className="font-['Cinzel_Decorative'] text-sm sm:text-base text-[#4A0E2E] font-bold tracking-wide">
                  With warm regards, Team Diwali Bites
                </p>
                <p className="text-xs text-[#6B1F4A] font-semibold font-['Manrope'] mt-1">
                  Wishing you and your family a Joyous, Healthy & Prosperous Diwali
                </p>
              </div>
            </motion.div>
          ) : (
            /* ========================================================================
               VIEW B: PROFESSOR SELECTION DIRECTORY (Clean, Royal Searchable View)
               ======================================================================== */
            <motion.div
              key="directory"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[680px] rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#FFFDF8] via-[#FDF6E3] to-[#F7ECD2] text-[#3B0B24] border-2 border-[#D4A017] outline outline-1 outline-offset-4 outline-[#D4A017]/40 shadow-2xl overflow-hidden"
            >
              {/* Background Mandala Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <AmbientMandalaPattern />
              </div>

              <OrnateCornerFlourish position="top-left" />
              <OrnateCornerFlourish position="top-right" />
              <OrnateCornerFlourish position="bottom-left" />
              <OrnateCornerFlourish position="bottom-right" />

              <div className="text-center mb-6 pt-2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5C842]/25 border border-[#D4A017]/60 text-[#8A5A00] text-xs font-bold tracking-widest uppercase shadow-sm mb-3">
                  <GraduationCap className="w-4 h-4 text-[#8A5A00]" />
                  <span>Faculty Guest Directory</span>
                </div>

                <h1 className="font-['Rozha_One'] text-3xl sm:text-5xl text-[#4A0E2E] tracking-tight mb-2">
                  Select Your Name
                </h1>

                <p className="font-['Manrope'] text-xs sm:text-sm text-[#4A0E2E]/80 max-w-lg mx-auto leading-relaxed font-medium">
                  Respected Professors, please select your name below to unveil your royal personalized
                  invitation to Diwali Bites Stall No. 4.
                </p>
              </div>

              {/* Search & Quick Scroll Header Row */}
              <div className="flex items-center gap-2 mb-4 max-w-xl mx-auto">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-[#8A5A00] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search your name or department..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#D4A017]/50 text-sm text-[#3B0B24] placeholder-[#3B0B24]/40 focus:outline-none focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017] transition-all shadow-sm"
                  />
                </div>

                {/* Dedicated Scroll Buttons in Search Row */}
                <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-[#D4A017]/40 shrink-0 shadow-sm">
                  <button
                    type="button"
                    onClick={() => handleDirScroll('up')}
                    disabled={!dirCanScrollUp}
                    title="Scroll Up"
                    aria-label="Scroll Up"
                    className={`p-2 rounded-lg transition-all flex items-center justify-center min-h-[38px] ${
                      dirCanScrollUp
                        ? 'bg-[#F5C842]/30 text-[#8A5A00] hover:bg-gold-gradient hover:text-[#4A0E2E] shadow-sm'
                        : 'text-[#3B0B24]/30 cursor-not-allowed'
                    }`}
                  >
                    <ChevronUp className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDirScroll('down')}
                    disabled={!dirCanScrollDown}
                    title="Scroll Down"
                    aria-label="Scroll Down"
                    className={`p-2 rounded-lg transition-all flex items-center justify-center min-h-[38px] ${
                      dirCanScrollDown
                        ? 'bg-[#F5C842]/30 text-[#8A5A00] hover:bg-gold-gradient hover:text-[#4A0E2E] shadow-sm'
                        : 'text-[#3B0B24]/30 cursor-not-allowed'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Upper Scroll Indicator Button (Appears when scrolled down) */}
              {dirCanScrollUp && (
                <button
                  type="button"
                  onClick={() => handleDirScroll('up')}
                  className="max-w-xl mx-auto w-full py-1 mb-2 rounded-xl bg-white hover:bg-[#FFF8E7] border border-[#D4A017]/50 text-[#8A5A00] text-xs font-bold flex items-center justify-center gap-1 transition-all shadow-sm"
                >
                  <ChevronUp className="w-3.5 h-3.5" />
                  <span>Scroll Up</span>
                </button>
              )}

              {/* Professor Directory List (Scrollable Container) */}
              <div
                ref={directoryListRef}
                onScroll={checkDirScroll}
                className="space-y-3 max-h-[340px] sm:max-h-[380px] overflow-y-auto pr-1.5 custom-scrollbar max-w-xl mx-auto"
              >
                {filteredProfessors.map((prof) => (
                  <button
                    key={prof.id}
                    onClick={() => handleSelectProfessor(prof.id)}
                    className="w-full text-left p-3.5 sm:p-4 rounded-2xl bg-white hover:bg-[#FFF8E7] border border-[#D4A017]/35 hover:border-[#D4A017] transition-all flex items-center justify-between group shadow-sm hover:shadow-md cursor-pointer min-h-[56px]"
                  >
                    <div className="flex items-center gap-3.5">
                      {/* Avatar / Placeholder Frame */}
                      <div className="w-12 h-12 rounded-full bg-[#F5C842]/20 border border-[#D4A017]/60 overflow-hidden flex items-center justify-center shrink-0">
                        {prof.image ? (
                          <img
                            src={prof.image}
                            alt={prof.name}
                            loading="lazy"
                            className="w-full h-full object-cover object-[center_20%]"
                          />
                        ) : (
                          <span className="font-bold text-sm text-[#8A5A00]">
                            {getInitials(prof.name)}
                          </span>
                        )}
                      </div>

                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-[#4A0E2E] group-hover:text-[#8A5A00] transition-colors leading-snug">
                          {prof.name}
                        </h3>
                        <p className="text-xs text-[#4A0E2E]/70 font-medium">
                          {prof.designation} • {prof.department}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#8A5A00] shrink-0">
                      <span className="hidden sm:inline">View Invite</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                ))}
              </div>

              {/* Lower Scroll Indicator Button (Appears when more items below) */}
              {dirCanScrollDown && (
                <button
                  type="button"
                  onClick={() => handleDirScroll('down')}
                  className="max-w-xl mx-auto w-full py-1.5 mt-2 rounded-xl bg-gradient-to-r from-white via-[#FFF8E7] to-white hover:from-[#FFF8E7] hover:to-[#FFF8E7] border border-[#D4A017]/60 text-[#8A5A00] text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm"
                >
                  <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
                  <span>Scroll Down for More Professors</span>
                </button>
              )}

              {/* Directory Footer */}
              <div className="mt-8 pt-6 border-t border-[#D4A017]/25 text-center">
                <span className="inline-block text-[11px] uppercase tracking-widest text-[#8A5A00] font-bold mb-1">
                  Diwali Bites 2026 • PCET Architecture Campus
                </span>
                <p className="text-xs text-[#4A0E2E]/70 font-medium">
                  Select your name to view and download your invitation pass.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Note (Hidden on print) */}
      <footer className="relative z-10 py-6 text-center text-xs text-[#FFF4DC]/60 no-print">
        <p>Diwali Bites • Stall No. 4 • PCET Architecture Campus • Celebrating with Light & Taste</p>
      </footer>
    </div>
  )
}
