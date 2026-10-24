import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { MenuItem } from '../content'

interface ItemModalProps {
  item: MenuItem | null
  onClose: () => void
  onVisitStall: () => void
}

export function ItemModal({ item, onClose, onVisitStall }: ItemModalProps) {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0)

  useEffect(() => {
    setSelectedImgIndex(0)
  }, [item])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [item])

  if (!item) return null

  const images = item.images && item.images.length > 0 ? item.images : item.image ? [item.image] : []

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1D0310]/85 backdrop-blur-md"
        />

        {/* Modal Container: Max-height capped to viewport so it never cuts off */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          className="relative w-full max-w-xl md:max-w-2xl bg-[#3B0B24] border border-[#F5C842]/45 rounded-3xl overflow-hidden shadow-2xl shadow-black/80 text-[#FDF6E3] z-10 flex flex-col max-h-[calc(100dvh-2rem)] sm:max-h-[88vh]"
        >
          {/* Close Button: Always safely positioned within modal container */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#3B0B24]/90 border border-[#F5C842]/50 flex items-center justify-center text-[#F5C842] hover:bg-gold-gradient hover:text-[#4A0E2E] transition-all duration-300 shadow-lg backdrop-blur-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Hero Image Showcase (Height-constrained so modal stays compact) */}
          <div className="relative h-44 sm:h-52 md:h-60 w-full shrink-0 overflow-hidden bg-black/50">
            {images.length > 0 && (
              <img
                src={images[selectedImgIndex]}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3B0B24] via-transparent to-black/40 pointer-events-none" />

            {/* Tag & Veg/Non-Veg Dot Indicator */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2 z-20 pr-12">
              <span className="px-3 py-1 rounded-full bg-[#4A0E2E]/95 text-[#F5C842] text-xs font-bold shadow-md border border-[#F5C842]/40 backdrop-blur-md">
                {item.tag}
              </span>
              <div
                className={`w-5 h-5 rounded-[4px] border flex items-center justify-center bg-white/95 shadow-md ${
                  item.isVeg !== false ? 'border-emerald-600' : 'border-red-600'
                }`}
                title={item.isVeg !== false ? 'Vegetarian' : 'Non-Vegetarian'}
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    item.isVeg !== false ? 'bg-emerald-600' : 'bg-red-600'
                  }`}
                />
              </div>
            </div>

            {/* Multi-photo navigation arrows if item has multiple photos */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setSelectedImgIndex((prev) => (prev - 1 + images.length) % images.length)
                  }
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 text-[#F5C842] flex items-center justify-center hover:bg-black/90 transition-colors z-20 border border-[#F5C842]/30"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedImgIndex((prev) => (prev + 1) % images.length)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 text-[#F5C842] flex items-center justify-center hover:bg-black/90 transition-colors z-20 border border-[#F5C842]/30"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Photo indicator dots */}
                <div className="absolute bottom-2.5 left-0 right-0 flex justify-center gap-1.5 z-20">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImgIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        selectedImgIndex === idx
                          ? 'w-5 bg-[#F5C842] shadow-glow'
                          : 'w-1.5 bg-white/60 hover:bg-white'
                      }`}
                      aria-label={`Show photo ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-5 sm:p-6 md:p-7 overflow-y-auto overscroll-contain flex-grow flex flex-col gap-4">
            {/* Title & Price Row */}
            <div className="flex flex-wrap items-center justify-between gap-2.5">
              <h3 className="font-['Rozha_One'] text-2xl sm:text-3xl md:text-4xl text-gold-gradient leading-tight">
                {item.name}
              </h3>
              {item.price && (
                <span className="px-3.5 py-1 rounded-full bg-gold-gradient text-[#4A0E2E] font-black text-sm sm:text-base shadow-glow-sm">
                  {item.price}
                </span>
              )}
            </div>

            {/* Flavor Switcher Pills */}
            {item.flavors && item.flavors.length > 0 && (
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#F5C842]/85 font-black block mb-2">
                  Choose Flavor:
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.flavors.map((flavor, idx) => (
                    <button
                      key={flavor}
                      onClick={() => setSelectedImgIndex(idx % images.length)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                        selectedImgIndex === idx
                          ? 'bg-[#F5C842] text-[#4A0E2E] shadow-glow-sm scale-105'
                          : 'bg-[#4A0E2E]/70 text-[#FDF6E3]/85 border border-[#F5C842]/30 hover:border-[#F5C842]'
                      }`}
                    >
                      {flavor}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#FDF6E3]/90 leading-relaxed font-['Manrope']">
              {item.description || item.detailedStory}
            </p>

            {/* Handcrafted Ingredients */}
            {item.ingredients && item.ingredients.length > 0 && (
              <div className="bg-[#4A0E2E]/60 rounded-2xl p-3.5 sm:p-4 border border-[#F5C842]/20">
                <span className="text-[11px] uppercase tracking-wider text-[#F5C842] font-black block mb-2">
                  Handcrafted Ingredients
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {item.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#6B1F4A]/80 text-[#FDF6E3]/90 text-[11px] sm:text-xs font-medium border border-[#F5C842]/20"
                    >
                      <CheckCircle className="w-3 h-3 text-[#F5C842]" />
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Bottom Action Bar */}
          <div className="shrink-0 p-4 sm:p-5 bg-[#31071D] border-t border-[#F5C842]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-[#F5C842] font-semibold text-center sm:text-left">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Available live at Stall No. 4, PCET Architecture</span>
            </div>
            <button
              onClick={() => {
                onClose()
                onVisitStall()
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gold-gradient text-[#4A0E2E] font-black text-xs sm:text-sm shadow-glow hover:scale-105 active:scale-95 transition-all shrink-0"
            >
              Find Our Stall
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

