import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Search,
  GraduationCap,
  ChevronRight,
  User,
  ChevronUp,
  ChevronDown,
} from 'lucide-react'
import { Professor, professorsList } from '../data/professors'

interface ProfessorSelectModalProps {
  isOpen: boolean
  onClose: () => void
  onSelectProfessor: (prof: Professor) => void
}

export function ProfessorSelectModal({
  isOpen,
  onClose,
  onSelectProfessor,
}: ProfessorSelectModalProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const listRef = useRef<HTMLDivElement>(null)
  const [canScrollUp, setCanScrollUp] = useState(false)
  const [canScrollDown, setCanScrollDown] = useState(false)

  const filteredProfessors = professorsList.filter(
    (prof) =>
      prof.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prof.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prof.designation.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const checkScroll = () => {
    const el = listRef.current
    if (!el) return
    const hasOverflow = el.scrollHeight > el.clientHeight
    setCanScrollUp(el.scrollTop > 10)
    setCanScrollDown(hasOverflow && el.scrollTop + el.clientHeight < el.scrollHeight - 10)
  }

  useEffect(() => {
    if (isOpen) {
      setTimeout(checkScroll, 100)
    }
  }, [isOpen, filteredProfessors])

  const handleScroll = (direction: 'up' | 'down') => {
    const el = listRef.current
    if (!el) return
    const scrollAmount = 140
    el.scrollBy({
      top: direction === 'up' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#2D071B]/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#3B0B24] border-2 border-[#F5C842]/40 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
          >
            {/* Golden corner flourishes */}
            <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#F5C842]/60 rounded-tl-lg pointer-events-none" />
            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#F5C842]/60 rounded-tr-lg pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#F5C842]/60 rounded-bl-lg pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#F5C842]/60 rounded-br-lg pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#4A0E2E] text-[#FDF6E3]/70 hover:text-[#F5C842] hover:bg-[#6B1F4A] transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6B1F4A]/80 border border-[#F5C842]/40 text-[#F5C842] text-xs font-bold uppercase tracking-wider mb-2">
                <GraduationCap className="w-3.5 h-3.5 text-[#F5C842]" />
                <span>Faculty Guest Invitations</span>
              </div>
              <h2 className="font-['Rozha_One'] text-2xl sm:text-3xl text-gold-gradient">
                Select Your Name
              </h2>
              <p className="font-['Manrope'] text-xs sm:text-sm text-[#FDF6E3]/80 mt-1">
                Respected Professors, please select your name to unveil your personalized Diwali Bites invitation.
              </p>
            </div>

            {/* Search & Quick Scroll Header Row */}
            <div className="flex items-center gap-2 mb-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-[#F5C842]/70 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name or department..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#4A0E2E]/90 border border-[#F5C842]/30 text-sm text-[#FDF6E3] placeholder-[#FDF6E3]/40 focus:outline-none focus:border-[#F5C842] focus:ring-1 focus:ring-[#F5C842] transition-all"
                />
              </div>

              {/* Dedicated Scroll Buttons in Search Row */}
              <div className="flex items-center gap-1 bg-[#4A0E2E] p-1 rounded-xl border border-[#F5C842]/30 shrink-0">
                <button
                  type="button"
                  onClick={() => handleScroll('up')}
                  disabled={!canScrollUp}
                  title="Scroll Up"
                  aria-label="Scroll Up"
                  className={`p-2 rounded-lg transition-all flex items-center justify-center ${
                    canScrollUp
                      ? 'bg-[#6B1F4A] text-[#F5C842] hover:bg-[#F5C842] hover:text-[#4A0E2E] shadow-glow-sm'
                      : 'text-[#FDF6E3]/30 cursor-not-allowed'
                  }`}
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleScroll('down')}
                  disabled={!canScrollDown}
                  title="Scroll Down"
                  aria-label="Scroll Down"
                  className={`p-2 rounded-lg transition-all flex items-center justify-center ${
                    canScrollDown
                      ? 'bg-[#6B1F4A] text-[#F5C842] hover:bg-[#F5C842] hover:text-[#4A0E2E] shadow-glow-sm'
                      : 'text-[#FDF6E3]/30 cursor-not-allowed'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Upper Scroll Indicator Button (Appears when scrolled down) */}
            {canScrollUp && (
              <button
                type="button"
                onClick={() => handleScroll('up')}
                className="w-full py-1 mb-2 rounded-xl bg-[#4A0E2E]/90 hover:bg-[#6B1F4A] border border-[#F5C842]/40 text-[#F5C842] text-xs font-bold flex items-center justify-center gap-1 transition-all shadow-glow-sm"
              >
                <ChevronUp className="w-3.5 h-3.5" />
                <span>Scroll Up</span>
              </button>
            )}

            {/* Scrollable Professor List Container */}
            <div
              ref={listRef}
              onScroll={checkScroll}
              className="space-y-2.5 max-h-[300px] overflow-y-auto pr-1.5 custom-scrollbar transition-all"
            >
              {filteredProfessors.length > 0 ? (
                filteredProfessors.map((prof) => (
                  <button
                    key={prof.id}
                    onClick={() => {
                      onSelectProfessor(prof)
                      onClose()
                    }}
                    className="w-full text-left p-3.5 rounded-2xl bg-[#4A0E2E]/60 hover:bg-[#6B1F4A] border border-[#F5C842]/20 hover:border-[#F5C842]/60 transition-all flex items-center justify-between group shadow-sm hover:shadow-glow-sm cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      {/* Image / Avatar Placeholder */}
                      <div className="w-10 h-10 rounded-full bg-[#F5C842]/15 border border-[#F5C842]/40 overflow-hidden flex items-center justify-center shrink-0">
                        {prof.image ? (
                          <img
                            src={prof.image}
                            alt={prof.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User className="w-5 h-5 text-[#F5C842]" />
                        )}
                      </div>

                      <div>
                        <div className="text-sm font-bold text-[#FDF6E3] group-hover:text-[#F5C842] transition-colors">
                          {prof.name}
                        </div>
                        <div className="text-xs text-[#FDF6E3]/70">
                          {prof.designation} • {prof.department}
                        </div>
                      </div>
                    </div>

                    <ChevronRight className="w-4 h-4 text-[#F5C842]/60 group-hover:text-[#F5C842] group-hover:translate-x-1 transition-all" />
                  </button>
                ))
              ) : (
                <div className="p-6 text-center text-sm text-[#FDF6E3]/60">
                  No professor found matching "{searchQuery}".
                </div>
              )}
            </div>

            {/* Lower Scroll Indicator Button (Appears when more items below) */}
            {canScrollDown && (
              <button
                type="button"
                onClick={() => handleScroll('down')}
                className="w-full py-1.5 mt-2 rounded-xl bg-gradient-to-r from-[#4A0E2E] via-[#6B1F4A] to-[#4A0E2E] hover:from-[#6B1F4A] hover:to-[#6B1F4A] border border-[#F5C842]/50 text-[#F5C842] text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-glow-sm"
              >
                <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
                <span>Scroll Down for More Professors</span>
              </button>
            )}

            {/* Note & Count */}
            <div className="mt-3 pt-3 border-t border-[#F5C842]/20 flex items-center justify-between text-[11px] text-[#FDF6E3]/60">
              <span>{filteredProfessors.length} Faculty Members Listed</span>
              <span>Stall No. 4 • PCET Campus</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
