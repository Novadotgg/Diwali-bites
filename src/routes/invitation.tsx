import { useState, useEffect, useRef } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import {
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
  Download,
} from 'lucide-react'
import confetti from 'canvas-confetti'
import { Professor, professorsList } from '../data/professors'

export const Route = createFileRoute('/invitation')({
  component: InvitationPage,
})

/** Generate an .ics calendar invite for download */
function downloadCalendarInvite(professorName: string) {
  const eventDetails = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Diwali Bites 2026//Faculty Special Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:diwali-bites-2026-invitation@diwalibites.in',
    'DTSTAMP:20261026T000000Z',
    'DTSTART:20261027T033000Z', // 9:00 AM IST
    'DTEND:20261027T113000Z',   // 5:00 PM IST
    'SUMMARY:Diwali Bites Special Invitation - Stall No. 4',
    `DESCRIPTION:Respected ${professorName}, you are cordially invited to Diwali Bites Stall No. 4 at PCET S.B. Patil Architecture Campus. Delicious chatpate food and refreshing mojitos await!`,
    'LOCATION:Stall No. 4, PCET S.B. Patil Architecture Building, Diwali Mandi 2026',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  const blob = new Blob([eventDetails], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', `Diwali_Bites_Invitation_${professorName.replace(/\s+/g, '_')}.ics`)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

/* ========================================================================
   INVITATION PAGE COMPONENT
   ======================================================================== */
function InvitationPage() {
  const [selectedProfId, setSelectedProfId] = useState<string | null>(null)
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [dirCanScrollUp, setDirCanScrollUp] = useState(false)
  const [dirCanScrollDown, setDirCanScrollDown] = useState(false)

  const directoryListRef = useRef<HTMLDivElement>(null)

  // Sync with URL query param `?prof=<id>`
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const profParam = params.get('prof')
      if (profParam) {
        setSelectedProfId(profParam)
      } else {
        // Default to Dr. Kirti Dharwadkar (Director)
        setSelectedProfId('dr-kirti-dharwadkar')
      }
    }
  }, [])

  const selectedProfessor = professorsList.find((p) => p.id === selectedProfId) || null

  // Trigger festive golden confetti once on invite load
  useEffect(() => {
    if (selectedProfessor) {
      try {
        confetti({
          particleCount: 45,
          spread: 65,
          origin: { y: 0.5 },
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
      ? `Diwali Bites Invitation — ${selectedProfessor.name}`
      : 'Diwali Bites Faculty Invitation'
    const shareText = selectedProfessor
      ? `Respected ${selectedProfessor.name}, you are cordially invited to Diwali Bites (Stall No. 4, PCET Architecture Campus) for Diwali Mandi 2026!`
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

  const cardImageSrc = selectedProfessor?.cardImage || `/invitation/cards/${selectedProfessor?.id}.jpg`

  return (
    <div className="min-h-screen bg-[#350A20] text-[#FFF4DC] font-['Manrope'] relative overflow-x-hidden selection:bg-[#F2C230] selection:text-[#4A0E2E] flex flex-col justify-between py-4 sm:py-6">
      {/* Ambient Warm Golden Aura */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[680px] h-[450px] bg-gradient-to-b from-[#F2C230]/15 via-[#FF9800]/08 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-8 left-8 w-72 h-72 bg-[#8B2635]/25 rounded-full blur-3xl" />
        <div className="absolute top-20 right-8 w-72 h-72 bg-[#D4A017]/12 rounded-full blur-3xl" />
      </div>

      {/* Top Header Navigation */}
      <header className="relative z-20 max-w-2xl mx-auto w-full px-4 sm:px-6 mb-3 flex items-center justify-between no-print">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A0E2E]/90 border border-[#F2C230]/40 text-xs sm:text-sm font-semibold text-[#FFF4DC] hover:text-[#F2C230] hover:border-[#F2C230] transition-all backdrop-blur-md shadow-sm group whitespace-nowrap shrink-0 min-h-[42px]"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform shrink-0" />
          <span>Home</span>
        </Link>

        <div className="flex items-center gap-2">
          {selectedProfessor && (
            <button
              onClick={handleResetProfessor}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#4A0E2E]/90 border border-[#F2C230]/40 text-xs sm:text-sm font-semibold text-[#FFF4DC] hover:border-[#F2C230] hover:text-[#F2C230] transition-all backdrop-blur-md shadow-sm min-h-[42px]"
            >
              <Users className="w-3.5 h-3.5 text-[#F2C230]" />
              <span>Change Faculty</span>
            </button>
          )}

          <button
            onClick={handleShare}
            aria-label="Share this invitation"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#4A0E2E]/90 border border-[#F2C230]/40 text-xs sm:text-sm font-semibold text-[#FFF4DC] hover:border-[#F2C230] hover:text-[#F2C230] transition-all backdrop-blur-md shadow-sm min-h-[42px]"
          >
            <Share2 className="w-3.5 h-3.5 text-[#F2C230]" />
            <span>Share</span>
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
            className="fixed top-16 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-[#2E0719] border border-[#F2C230] text-[#F2C230] text-xs font-bold shadow-2xl backdrop-blur-xl flex items-center gap-2"
          >
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-2xl mx-auto w-full px-3 sm:px-6 flex flex-col items-center">
        <AnimatePresence mode="wait">
          {selectedProfessor ? (
            /* ========================================================================
               AUTHENTIC INVITATION POSTER CARD
               - Zero Hallucination: 100% Faithful to the Reference Poster
               - Real photograph perfectly framed in the center gold double-ring
               - Caricature positioned in the bottom-right corner
               - Rich marigold garlands, leaf dona chaat bowl, festive calligraphy
               ======================================================================== */
            <div className="w-full flex flex-col items-center">
              <motion.div
                key={selectedProfessor.id}
                initial={{ opacity: 0, scale: 0.96, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -18 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[540px] rounded-[24px] overflow-hidden shadow-[0_22px_60px_rgba(0,0,0,0.55)] border-2 border-[#D4A017]/80 bg-[#FCF5E5] print-card select-none"
              >
                {/* 100% Authentic Hand-Rendered Poster Card */}
                <img
                  src={cardImageSrc}
                  alt={`Diwali Bites Official Invitation for ${selectedProfessor.name}`}
                  className="w-full h-auto block select-none pointer-events-none"
                  loading="eager"
                />
              </motion.div>

              {/* Action Buttons Below the Invitation Card */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3 w-full max-w-md no-print">
                <button
                  type="button"
                  onClick={handleShare}
                  aria-label="Share invitation"
                  className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/95 hover:bg-white border border-[#D4A017] text-xs sm:text-sm font-bold text-[#4A0E2E] shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all min-h-[44px]"
                >
                  <Share2 className="w-4 h-4 text-[#8A5A00]" />
                  <span>Share Invite</span>
                </button>

                <button
                  type="button"
                  onClick={handleCalendar}
                  aria-label="Add to calendar"
                  className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/95 hover:bg-white border border-[#D4A017] text-xs sm:text-sm font-bold text-[#4A0E2E] shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all min-h-[44px]"
                >
                  <Download className="w-4 h-4 text-[#8A5A00]" />
                  <span>Add to Calendar</span>
                </button>

                <Link
                  to="/"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gold-gradient text-[#4A0E2E] font-black text-xs sm:text-sm shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all min-h-[44px]"
                >
                  <Store className="w-4 h-4" />
                  <span>Explore Menu & Games</span>
                </Link>
              </div>
            </div>
          ) : (
            /* ========================================================================
               FACULTY DIRECTORY SELECTOR (Search & Quick Pick)
               ======================================================================== */
            <motion.div
              key="directory"
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -16 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-[540px] rounded-3xl p-6 sm:p-8 bg-[#FCF5E5] text-[#3B0B24] border-2 border-[#D4A017] shadow-2xl overflow-hidden"
            >
              <div className="text-center mb-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5C842]/30 border border-[#D4A017]/60 text-[#8A5A00] text-xs font-bold tracking-widest uppercase mb-2">
                  <GraduationCap className="w-4 h-4 text-[#8A5A00]" />
                  <span>Faculty Directory</span>
                </div>

                <h2 className="font-['Rozha_One'] text-2xl sm:text-4xl text-[#4A0E2E] tracking-tight mb-1">
                  Select Faculty Member
                </h2>

                <p className="font-['Manrope'] text-xs sm:text-sm text-[#4A0E2E]/80 max-w-sm mx-auto leading-relaxed">
                  Choose a faculty member to view their official personalized invitation poster.
                </p>
              </div>

              {/* Search & Scroll Controls */}
              <div className="flex items-center gap-2 mb-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-[#8A5A00] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search name or department..."
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-[#D4A017]/50 text-xs sm:text-sm text-[#3B0B24] placeholder-[#3B0B24]/40 focus:outline-none focus:border-[#D4A017] transition-all shadow-sm"
                  />
                </div>

                <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-[#D4A017]/40 shrink-0 shadow-sm">
                  <button
                    type="button"
                    onClick={() => handleDirScroll('up')}
                    disabled={!dirCanScrollUp}
                    title="Scroll Up"
                    aria-label="Scroll Up"
                    className={`p-1.5 rounded-lg transition-all flex items-center justify-center ${
                      dirCanScrollUp
                        ? 'bg-[#F5C842]/30 text-[#8A5A00] hover:bg-gold-gradient hover:text-[#4A0E2E]'
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
                    className={`p-1.5 rounded-lg transition-all flex items-center justify-center ${
                      dirCanScrollDown
                        ? 'bg-[#F5C842]/30 text-[#8A5A00] hover:bg-gold-gradient hover:text-[#4A0E2E]'
                        : 'text-[#3B0B24]/30 cursor-not-allowed'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Scrollable Professor List */}
              <div
                ref={directoryListRef}
                onScroll={checkDirScroll}
                className="space-y-2.5 max-h-[340px] overflow-y-auto pr-1 custom-scrollbar"
              >
                {filteredProfessors.map((prof) => (
                  <button
                    key={prof.id}
                    onClick={() => handleSelectProfessor(prof.id)}
                    className="w-full text-left p-3 rounded-2xl bg-white hover:bg-[#FFF8E7] border border-[#D4A017]/35 hover:border-[#D4A017] transition-all flex items-center justify-between group shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      {/* Real Photo Avatar */}
                      <div className="w-11 h-11 rounded-full bg-[#F5C842]/20 border border-[#D4A017]/60 overflow-hidden flex items-center justify-center shrink-0">
                        {prof.realImage || prof.image ? (
                          <img
                            src={prof.realImage || prof.image}
                            alt={prof.name}
                            className="w-full h-full object-cover object-center"
                          />
                        ) : (
                          <span className="font-bold text-xs text-[#8A5A00]">
                            {getInitials(prof.name)}
                          </span>
                        )}
                      </div>

                      <div>
                        <h3 className="text-xs sm:text-sm font-bold text-[#4A0E2E] group-hover:text-[#8A5A00] transition-colors leading-snug">
                          {prof.name}
                        </h3>
                        <p className="text-[11px] text-[#4A0E2E]/70 font-medium">
                          {prof.designation} • {prof.department}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-bold text-[#8A5A00] shrink-0">
                      <span className="hidden sm:inline">View</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                ))}
              </div>

              {/* Selector Footer */}
              <div className="mt-5 pt-4 border-t border-[#D4A017]/25 text-center">
                <span className="inline-block text-[10px] uppercase tracking-widest text-[#8A5A00] font-bold">
                  Diwali Bites • Stall No. 4 • PCET Architecture Campus
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-4 text-center text-[11px] text-[#FFF4DC]/60 no-print">
        <p>Diwali Bites • Stall No. 4 • PCET Architecture Campus • Celebrating with Light & Taste</p>
      </footer>
    </div>
  )
}
