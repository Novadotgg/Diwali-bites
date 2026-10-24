import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Check } from 'lucide-react'
import { siteContent, MenuItem } from '../content'
import { TiltCard } from './TiltCard'
import { ItemModal } from './ItemModal'

import mojito1 from '../assets/mojito.jpeg'
import mojito2 from '../assets/mojito2.jpeg'
import mojito3 from '../assets/mojito3.jpeg'
import chaatImg from '../assets/chaat.jpeg'
import kharwasImg from '../assets/kharbas.jpeg'

interface MenuSectionProps {
  onVisitStall: () => void
}

type CategoryType = 'all' | 'mojitos' | 'chaat' | 'kharwas'

export function MenuSection({ onVisitStall }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all')
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const [mojitoIndex, setMojitoIndex] = useState(0)
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  const mojitoImages = [mojito1, mojito2, mojito3]
  const mojitoItem = siteContent.menu.items.find((item) => item.id === 'fresh-mojitos')
  const chaatItem = siteContent.menu.items.find((item) => item.id === 'loaded-chips-chaat')
  const kharwasItem = siteContent.menu.items.find((item) => item.id === 'traditional-kharwas')

  const flavorNames = mojitoItem?.flavors || ['Crisp Mint', 'Watermelon', 'Kala Khatta']

  // Auto-cycle mojito images every 3s
  useEffect(() => {
    const timer = setInterval(() => {
      setMojitoIndex((prev) => (prev + 1) % mojitoImages.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [mojitoImages.length])

  const categories: { id: CategoryType; label: string }[] = [
    { id: 'all', label: 'All Delights (3)' },
    { id: 'mojitos', label: 'Fresh Mojitos' },
    { id: 'chaat', label: 'Loaded Chips Chaat' },
    { id: 'kharwas', label: 'Traditional Kharwas' },
  ]

  const shouldShow = (cat: CategoryType) => {
    if (activeCategory === 'all') return true
    return activeCategory === cat
  }

  return (
    <section id="menu" className="relative bg-[#FDF6E3] text-[#4A0E2E] py-24 px-4 sm:px-6 lg:px-8 rangoli-bg-cream">
      {/* Jaali lattice border on top */}
      <div className="jaali-border-t absolute top-0 left-0 right-0 opacity-40" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#4A0E2E]/10 border border-[#4A0E2E]/20 text-[#4A0E2E] text-xs font-black uppercase tracking-widest mb-3"
          >
            <span>Handcrafted Feast</span>
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

        {/* 1. MOBILE VIEW: Elegant Dropdown Selector (Zero Cutoff) */}
        <div className="relative sm:hidden w-full max-w-xs mx-auto mb-10 z-20">
          <button
            type="button"
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            className="w-full flex items-center justify-between px-5 py-3 rounded-full bg-[#4A0E2E]/10 border border-[#4A0E2E]/25 text-[#4A0E2E] font-extrabold text-sm shadow-sm backdrop-blur-sm active:scale-98 transition-all"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4A017]" />
              <span>{categories.find((c) => c.id === activeCategory)?.label || 'All Delights'}</span>
            </span>
            <ChevronDown
              className={`w-4 h-4 text-[#4A0E2E] transition-transform duration-200 ${
                mobileDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          <AnimatePresence>
            {mobileDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.97 }}
                transition={{ duration: 0.18 }}
                className="absolute top-full left-0 right-0 mt-2 bg-[#FDF6E3] border border-[#4A0E2E]/25 rounded-2xl shadow-xl overflow-hidden py-1.5 z-30"
              >
                {categories.map((cat) => {
                  const isSelected = activeCategory === cat.id
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        setActiveCategory(cat.id)
                        setMobileDropdownOpen(false)
                      }}
                      className={`w-full flex items-center justify-between px-4 py-2.5 text-xs font-bold text-left transition-colors ${
                        isSelected
                          ? 'bg-gold-gradient text-[#4A0E2E]'
                          : 'text-[#4A0E2E]/80 hover:bg-[#4A0E2E]/5'
                      }`}
                    >
                      <span>{cat.label}</span>
                      {isSelected && <Check className="w-4 h-4 text-[#4A0E2E]" />}
                    </button>
                  )
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 2. TABLET / DESKTOP VIEW: Sliding Gold Underline Pill Tabs */}
        <div className="hidden sm:flex justify-center mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#4A0E2E]/10 p-1.5 rounded-full border border-[#4A0E2E]/15 backdrop-blur-sm">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-5 py-2 text-xs sm:text-sm font-black rounded-full transition-colors duration-200 whitespace-nowrap focus:outline-none ${
                    isActive ? 'text-[#4A0E2E]' : 'text-[#4A0E2E]/75 hover:text-[#4A0E2E]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 rounded-full bg-gold-gradient shadow-glow-sm"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* 3D Tilt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Fresh Mojitos (Bubbles badge + Carousel) */}
          {mojitoItem && shouldShow('mojitos') && (
            <TiltCard
              item={mojitoItem}
              imageSrc={mojitoImages[mojitoIndex]}
              activeFlavorName={flavorNames[mojitoIndex]}
              photoIndex={mojitoIndex}
              totalPhotos={mojitoImages.length}
              onPhotoDotClick={setMojitoIndex}
              onCardClick={() => setSelectedItem(mojitoItem)}
            />
          )}

          {/* Card 2: Loaded Chips Chaat */}
          {chaatItem && shouldShow('chaat') && (
            <TiltCard
              item={chaatItem}
              imageSrc={chaatImg}
              onCardClick={() => setSelectedItem(chaatItem)}
            />
          )}

          {/* Card 3: Traditional Kharwas */}
          {kharwasItem && shouldShow('kharwas') && (
            <TiltCard
              item={kharwasItem}
              imageSrc={kharwasImg}
              onCardClick={() => setSelectedItem(kharwasItem)}
            />
          )}
        </div>

        {/* Footer reassurance note */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm text-[#4A0E2E]/65 font-['Manrope'] font-semibold flex items-center justify-center gap-2">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block shadow-sm" />
              Pure Vegetarian Stall
            </span>
            <span>•</span>
            <span>Freshly Prepared on Campus</span>
            <span>•</span>
            <span>Stall No. 4</span>
          </p>
        </div>
      </div>

      {/* Expanded Food Details Modal */}
      <ItemModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onVisitStall={onVisitStall}
      />
    </section>
  )
}
