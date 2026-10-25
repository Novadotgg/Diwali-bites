import { useState, useEffect, useRef } from 'react'
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar,
  MapPin,
  Clock,
  ArrowLeft,
  Share2,
  Check,
  User,
  GraduationCap,
  Store,
  Camera,
  Users,
  Search,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Gift,
} from 'lucide-react'
import confetti from 'canvas-confetti'
import { SparkleClick } from '../components/SparkleClick'
import { Professor, professorsList } from '../data/professors'

export const Route = createFileRoute('/invitation')({
  component: InvitationPage,
})

function InvitationPage() {
  const navigate = useNavigate()
  const [selectedProfId, setSelectedProfId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [copied, setCopied] = useState(false)
  const directoryListRef = useRef<HTMLDivElement>(null)
  const [dirCanScrollUp, setDirCanScrollUp] = useState(false)
  const [dirCanScrollDown, setDirCanScrollDown] = useState(false)

  // Sync selected professor from URL query parameter ?prof=id or default to first if requested
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const profId = params.get('prof')
      if (profId && professorsList.some((p) => p.id === profId)) {
        setSelectedProfId(profId)
      }
    }
  }, [])

  // Fire festive gold confetti on load or when selecting a professor
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#F5C842', '#FFD700', '#FF9800', '#FDF6E3'],
      })
    } catch {
      // safe fallback
    }
  }

  useEffect(() => {
    triggerConfetti()
  }, [selectedProfId])

  const selectedProfessor: Professor | undefined = professorsList.find(
    (p) => p.id === selectedProfId
  )

  const handleSelectProfessor = (profId: string) => {
    setSelectedProfId(profId)
    // Update URL query string cleanly without page refresh
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

  const handleShare = async () => {
    if (navigator.clipboard && typeof window !== 'undefined') {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

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
    <div className="min-h-screen bg-[#4A0E2E] text-[#FDF6E3] font-['Manrope'] relative overflow-x-hidden selection:bg-[#F5C842] selection:text-[#4A0E2E] flex flex-col justify-between">
      <SparkleClick />

      {/* Ambient Festive Backdrops */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-radial from-[#F5C842]/20 via-[#FF9800]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#8B2635]/35 rounded-full blur-3xl" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#D4A017]/15 rounded-full blur-3xl" />
      </div>

      {/* Top Header Navigation */}
      <header className="relative z-20 max-w-5xl mx-auto w-full px-6 pt-8 pb-4 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B0B24]/80 border border-[#F5C842]/30 text-sm font-semibold text-[#FDF6E3] hover:text-[#F5C842] hover:border-[#F5C842] transition-all backdrop-blur-md shadow-glow-sm group whitespace-nowrap shrink-0"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform shrink-0" />
          <span>Back</span>
        </Link>

        <div className="flex items-center gap-3">
          {selectedProfessor && (
            <button
              onClick={handleResetProfessor}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#6B1F4A]/80 border border-[#F5C842]/30 text-xs font-semibold text-[#FDF6E3] hover:border-[#F5C842] transition-all"
            >
              <Users className="w-3.5 h-3.5 text-[#F5C842]" />
              <span className="hidden sm:inline">Change Professor</span>
            </button>
          )}

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B0B24]/80 border border-[#F5C842]/30 text-sm font-semibold text-[#FDF6E3] hover:border-[#F5C842] transition-all backdrop-blur-md shadow-glow-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-[#F5C842]" />
                <span>Share Invite</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-3xl mx-auto w-full px-4 sm:px-6 py-8 flex flex-col items-center text-center">
        <AnimatePresence mode="wait">
          {selectedProfessor ? (
            /* ========================================================== */
            /* VIEW A: PERSONALIZED INVITATION FOR SELECTED PROFESSOR   */
            /* ========================================================== */
            <motion.div
              key={selectedProfessor.id}
              initial={{ opacity: 0, scale: 0.94, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -20 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full rounded-3xl p-6 sm:p-10 md:p-12 bg-gradient-to-b from-[#3B0B24]/95 via-[#4A0E2E]/95 to-[#2E071D]/98 border-2 border-[#F5C842]/50 shadow-2xl backdrop-blur-xl overflow-hidden text-center"
            >
              {/* Ornate Corner Accents */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#F5C842]/70 rounded-tl-lg pointer-events-none" />
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#F5C842]/70 rounded-tr-lg pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#F5C842]/70 rounded-bl-lg pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#F5C842]/70 rounded-br-lg pointer-events-none" />

              {/* Royal Badge (icon removed) */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#6B1F4A]/80 border border-[#F5C842]/50 text-[#F5C842] text-xs font-bold tracking-widest uppercase shadow-glow-sm mb-6">
                <span>Special Faculty Invitation</span>
              </div>

              {/* ======================================================= */}
              {/* FACULTY PHOTO PLACEHOLDER AT MIDDLE TOP                */}
              {/* ======================================================= */}
              <div className="mx-auto mb-6 flex flex-col items-center">
                {/* Photo Frame Container with Festive Golden Aura */}
                <div className="relative group">
                  {/* Decorative glowing outer ring */}
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#F5C842] via-[#FFB800] to-[#E65100] blur-sm opacity-80 group-hover:opacity-100 transition duration-500 pointer-events-none" />

                  {/* Photo Frame */}
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#2A0617] border-4 border-[#F5C842] overflow-hidden flex flex-col items-center justify-center shadow-2xl">
                    {selectedProfessor.image ? (
                      <img
                        src={selectedProfessor.image}
                        alt={selectedProfessor.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center p-3 text-center">
                        <User className="w-14 h-14 text-[#F5C842]/80 mb-1" />
                        <span className="text-[10px] text-[#F5C842]/70 font-bold uppercase tracking-wider flex items-center gap-1">
                          <Camera className="w-3 h-3" /> Photo Placeholder
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <span className="mt-2.5 text-[11px] text-[#F5C842]/80 font-medium">
                  Faculty Photograph
                </span>
              </div>

              {/* Salutation & Professor Name */}
              <div className="mb-2">
                <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#F5C842]/90">
                  {selectedProfessor.salutation || 'Respected'}
                </span>
                <h1 className="font-['Rozha_One'] text-3xl sm:text-4xl md:text-5xl text-gold-gradient tracking-tight drop-shadow-lg mt-1">
                  {selectedProfessor.name}
                </h1>
              </div>

              {/* Designation & Department */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B0B24]/90 border border-[#F5C842]/30 text-xs font-semibold text-[#FDF6E3]/90 mb-6">
                <GraduationCap className="w-3.5 h-3.5 text-[#F5C842]" />
                <span>
                  {selectedProfessor.designation} • {selectedProfessor.department}
                </span>
              </div>

              {/* Divider with festive Diya */}
              <div className="flex items-center justify-center gap-4 my-4 opacity-75">
                <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#F5C842]" />
                <span className="text-[#F5C842] text-xl">🪔</span>
                <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#F5C842]" />
              </div>

              {/* Heartfelt Personalized Invitation Letter */}
              <div className="my-6 p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#4A0E2E]/60 to-[#2E071D]/70 border border-[#F5C842]/30 text-left relative overflow-hidden">
                <p className="font-['Rozha_One'] text-lg sm:text-xl text-[#FDF6E3] mb-3 leading-snug">
                  Warm Diwali Greetings from Team Diwali Bites!
                </p>

                <p className="text-sm sm:text-base text-[#FDF6E3]/90 leading-relaxed mb-4">
                  On this joyous festival of lights, we cordially invite you to grace{' '}
                  <strong className="text-[#F5C842] font-semibold">Stall No. 4</strong> with your
                  esteemed presence. Your continuous encouragement and mentorship mean the world to us.
                </p>

                {selectedProfessor.specialMessage && (
                  <div className="p-3.5 rounded-xl bg-[#6B1F4A]/40 border-l-4 border-[#F5C842] text-xs sm:text-sm text-[#FDF6E3]/95 italic mb-4">
                    "{selectedProfessor.specialMessage}"
                  </div>
                )}

                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#F5C842] font-semibold">
                  <Gift className="w-4 h-4 shrink-0" />
                  <span>VIP Privilege: Complimentary Festive Sweet & Mojito reserved for you!</span>
                </div>
              </div>

              {/* Event Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-left">
                <div className="p-3.5 rounded-xl bg-[#3B0B24]/80 border border-[#F5C842]/20 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#F5C842]/15 text-[#F5C842] shrink-0">
                    <Store className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#F5C842] font-semibold uppercase">Location</p>
                    <p className="text-xs sm:text-sm font-bold text-[#FDF6E3]">Stall No. 4</p>
                    <p className="text-[11px] text-[#FDF6E3]/70">PCET Architecture</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#3B0B24]/80 border border-[#F5C842]/20 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#F5C842]/15 text-[#F5C842] shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#F5C842] font-semibold uppercase">Date</p>
                    <p className="text-xs sm:text-sm font-bold text-[#FDF6E3]">27 October 2026</p>
                    <p className="text-[11px] text-[#FDF6E3]/70">Diwali Celebrations</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#3B0B24]/80 border border-[#F5C842]/20 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#F5C842]/15 text-[#F5C842] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#F5C842] font-semibold uppercase">Time</p>
                    <p className="text-xs sm:text-sm font-bold text-[#FDF6E3]">9:00 AM – 5:00 PM</p>
                    <p className="text-[11px] text-[#FDF6E3]/70">All Day Festivities</p>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleResetProfessor}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#6B1F4A]/80 hover:bg-[#6B1F4A] border border-[#F5C842]/40 text-[#FDF6E3] font-semibold text-xs sm:text-sm transition-all shadow-glow-sm"
                >
                  <Users className="w-4 h-4 text-[#F5C842]" />
                  <span>Choose Another Professor</span>
                </button>

                <Link
                  to="/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gold-gradient text-[#4A0E2E] font-bold text-xs sm:text-sm shadow-glow hover:scale-105 active:scale-95 transition-all"
                >
                  <Store className="w-4 h-4" />
                  <span>Explore Menu & Games</span>
                </Link>
              </div>
            </motion.div>
          ) : (
            /* ========================================================== */
            /* VIEW B: PROFESSOR SELECTION DIRECTORY                      */
            /* ========================================================== */
            <motion.div
              key="directory"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.6 }}
              className="relative w-full rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#3B0B24]/95 via-[#4A0E2E]/95 to-[#2E071D]/98 border-2 border-[#F5C842]/40 shadow-2xl backdrop-blur-xl overflow-hidden"
            >
              {/* Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6B1F4A]/80 border border-[#F5C842]/40 text-[#F5C842] text-xs font-bold tracking-widest uppercase shadow-glow-sm mb-4">
                  <GraduationCap className="w-4 h-4 text-[#F5C842]" />
                  <span>Faculty Guest Directory</span>
                </div>

                <h1 className="font-['Rozha_One'] text-3xl sm:text-5xl text-gold-gradient tracking-tight mb-3">
                  Select Your Name
                </h1>

                <p className="font-['Manrope'] text-sm sm:text-base text-[#FDF6E3]/85 max-w-lg mx-auto leading-relaxed">
                  Respected Professors, please select your name below to unveil your personalized
                  invitation to Diwali Bites Stall No. 4.
                </p>
              </div>

              {/* Search & Quick Scroll Header Row */}
              <div className="flex items-center gap-2 mb-4 max-w-xl mx-auto">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-[#F5C842]/70 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search your name or department..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#4A0E2E]/90 border border-[#F5C842]/40 text-sm text-[#FDF6E3] placeholder-[#FDF6E3]/40 focus:outline-none focus:border-[#F5C842] focus:ring-1 focus:ring-[#F5C842] transition-all"
                  />
                </div>

                {/* Dedicated Scroll Buttons in Search Row */}
                <div className="flex items-center gap-1 bg-[#4A0E2E] p-1 rounded-xl border border-[#F5C842]/30 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleDirScroll('up')}
                    disabled={!dirCanScrollUp}
                    title="Scroll Up"
                    aria-label="Scroll Up"
                    className={`p-2 rounded-lg transition-all flex items-center justify-center ${
                      dirCanScrollUp
                        ? 'bg-[#6B1F4A] text-[#F5C842] hover:bg-[#F5C842] hover:text-[#4A0E2E] shadow-glow-sm'
                        : 'text-[#FDF6E3]/30 cursor-not-allowed'
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
                    className={`p-2 rounded-lg transition-all flex items-center justify-center ${
                      dirCanScrollDown
                        ? 'bg-[#6B1F4A] text-[#F5C842] hover:bg-[#F5C842] hover:text-[#4A0E2E] shadow-glow-sm'
                        : 'text-[#FDF6E3]/30 cursor-not-allowed'
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
                  className="max-w-xl mx-auto w-full py-1 mb-2 rounded-xl bg-[#4A0E2E]/90 hover:bg-[#6B1F4A] border border-[#F5C842]/40 text-[#F5C842] text-xs font-bold flex items-center justify-center gap-1 transition-all shadow-glow-sm"
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
                    className="w-full text-left p-4 rounded-2xl bg-[#4A0E2E]/60 hover:bg-[#6B1F4A] border border-[#F5C842]/25 hover:border-[#F5C842] transition-all flex items-center justify-between group shadow-sm hover:shadow-glow-sm cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5">
                      {/* Avatar / Placeholder Frame */}
                      <div className="w-12 h-12 rounded-full bg-[#F5C842]/15 border border-[#F5C842]/50 overflow-hidden flex items-center justify-center shrink-0">
                        {prof.image ? (
                          <img
                            src={prof.image}
                            alt={prof.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User className="w-6 h-6 text-[#F5C842]" />
                        )}
                      </div>

                      <div>
                        <h2 className="text-base font-bold text-[#FDF6E3] group-hover:text-[#F5C842] transition-colors">
                          {prof.name}
                        </h2>
                        <p className="text-xs text-[#FDF6E3]/70">
                          {prof.designation} • {prof.department}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#F5C842] shrink-0">
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
                  className="max-w-xl mx-auto w-full py-1.5 mt-2 rounded-xl bg-gradient-to-r from-[#4A0E2E] via-[#6B1F4A] to-[#4A0E2E] hover:from-[#6B1F4A] hover:to-[#6B1F4A] border border-[#F5C842]/50 text-[#F5C842] text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-glow-sm"
                >
                  <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
                  <span>Scroll Down for More Professors</span>
                </button>
              )}

              {/* Coming Soon note footer */}
              <div className="mt-8 pt-6 border-t border-[#F5C842]/20 text-center">
                <span className="inline-block text-[11px] uppercase tracking-widest text-[#F5C842]/80 font-bold mb-1">
                  Diwali Bites 2026 • PCET Architecture Campus
                </span>
                <p className="text-xs text-[#FDF6E3]/60">
                  More faculty members will be updated as registrations continue.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Note */}
      <footer className="relative z-10 py-6 text-center text-xs text-[#FDF6E3]/60">
        <p>Diwali Bites • Stall No. 4 • PCET Architecture Campus • Celebrating with Light & Taste</p>
      </footer>
    </div>
  )
}
