import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Eye } from 'lucide-react'
import { MenuItem } from '../content'

interface TiltCardProps {
  item: MenuItem
  imageSrc: string
  activeFlavorName?: string
  photoIndex?: number
  totalPhotos?: number
  onPhotoDotClick?: (idx: number) => void
  onCardClick: () => void
}

export function TiltCard({
  item,
  imageSrc,
  activeFlavorName,
  photoIndex = 0,
  totalPhotos = 1,
  onPhotoDotClick,
  onCardClick,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!isFinePointer || !cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Max rotation +/- 10 degrees
    const rX = -((y - centerY) / centerY) * 9
    const rY = ((x - centerX) / centerX) * 9

    setRotateX(rX)
    setRotateY(rY)
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    })
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onCardClick}
      animate={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className="relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-500 border border-[#4A0E2E]/10 flex flex-col group cursor-pointer select-none"
      style={
        {
          '--mouse-x': `${glarePos.x}%`,
          '--mouse-y': `${glarePos.y}%`,
        } as React.CSSProperties
      }
    >
      {/* Glare overlay that follows cursor */}
      <div className="card-glare z-20" />

      {/* 3D Gold Accent Border on hover */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#F5C842]/70 transition-colors duration-300 pointer-events-none z-30 shadow-glow-sm" />

      {/* Photo Container 4:5 Aspect Ratio */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#4A0E2E]/5">
        <img
          src={imageSrc}
          alt={item.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />

        {/* Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25 pointer-events-none" />

        {/* Tag Pill & Veg/Non-Veg Dot Indicator */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-full bg-[#4A0E2E]/92 text-[#F5C842] text-xs font-bold shadow-md backdrop-blur-md border border-[#F5C842]/35">
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

        {/* Price Tag Pill Top-Right */}
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3.5 py-1.5 rounded-full bg-gold-gradient text-[#4A0E2E] font-black text-xs sm:text-sm shadow-md group-hover:scale-105 transition-transform duration-300">
            {item.price || '[PRICE]'}
          </span>
        </div>


        {/* Active Flavor Pill (Bottom Left) if present */}
        {activeFlavorName && (
          <div className="absolute bottom-10 left-4 z-20">
            <span className="px-3 py-1 rounded-full bg-white/95 text-[#4A0E2E] text-xs font-black shadow-md backdrop-blur-sm">
              {activeFlavorName}
            </span>
          </div>
        )}

        {/* Clickable Pagination Dots for items with multiple images */}
        {totalPhotos > 1 && onPhotoDotClick && (
          <div
            className="absolute bottom-3 left-0 right-0 z-20 flex justify-center items-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            {Array.from({ length: totalPhotos }).map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation()
                  onPhotoDotClick(idx)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  photoIndex === idx
                    ? 'w-6 bg-[#F5C842] shadow-glow'
                    : 'w-2 bg-white/70 hover:bg-white'
                }`}
                aria-label={`View photo ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Hover "Quick View" prompt */}
        <div className="absolute inset-0 z-15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md text-[#F5C842] text-xs font-bold border border-[#F5C842]/40 shadow-glow-sm">
            <Eye className="w-3.5 h-3.5" />
            <span>Tap to View Details</span>
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-grow justify-between bg-white">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <h3 className="font-['Rozha_One'] text-2xl text-[#4A0E2E] group-hover:text-[#6B1F4A] transition-colors">
              {item.name}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#4A0E2E]/80 leading-relaxed font-['Manrope'] line-clamp-2">
            {item.description}
          </p>
        </div>

        <div className="pt-4 mt-4 border-t border-[#4A0E2E]/10 flex items-center justify-between text-xs font-bold text-[#4A0E2E]/70 group-hover:text-[#4A0E2E] transition-colors">
          <span className="flex items-center gap-1.5 text-[#D4A017]">
            <span className="w-2 h-2 rounded-full bg-[#F5C842] animate-pulse" />
            {item.highlightBadge || 'Festive Specialty'}
          </span>
          <span className="text-[#4A0E2E]/50 group-hover:text-[#4A0E2E] group-hover:translate-x-1 transition-all">
            Details →
          </span>
        </div>
      </div>
    </motion.div>
  )
}
