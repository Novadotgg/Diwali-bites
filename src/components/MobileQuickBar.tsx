import { UtensilsCrossed, MapPin, Trophy } from 'lucide-react'

interface MobileQuickBarProps {
  activeSection: string
  onNavigate: (href: string) => void
}

export function MobileQuickBar({ activeSection, onNavigate }: MobileQuickBarProps) {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden pointer-events-none">
      <div className="max-w-md mx-auto pointer-events-auto bg-[#3B0B24]/90 backdrop-blur-xl border border-[#F5C842]/40 rounded-full px-5 py-2 flex items-center justify-around shadow-2xl shadow-black/80">
        {/* Menu Quick Button */}
        <button
          onClick={() => onNavigate('#menu')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
            activeSection === 'menu'
              ? 'bg-gold-gradient text-[#4A0E2E] shadow-glow-sm'
              : 'text-[#FDF6E3]/80 hover:text-[#F5C842]'
          }`}
        >
          <UtensilsCrossed className="w-3.5 h-3.5" />
          <span>Menu</span>
        </button>

        {/* Stall Quick Button */}
        <button
          onClick={() => onNavigate('#stall')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
            activeSection === 'stall'
              ? 'bg-gold-gradient text-[#4A0E2E] shadow-glow-sm'
              : 'text-[#F5C842] font-black'
          }`}
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>Stall</span>
        </button>

        {/* Games Quick Button */}
        <button
          onClick={() => onNavigate('#games')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
            activeSection === 'games'
              ? 'bg-gold-gradient text-[#4A0E2E] shadow-glow-sm'
              : 'text-[#FDF6E3]/80 hover:text-[#F5C842]'
          }`}
        >
          <Trophy className="w-3.5 h-3.5" />
          <span>Games</span>
        </button>
      </div>
    </div>
  )
}
