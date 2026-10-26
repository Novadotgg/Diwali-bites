import { motion } from 'framer-motion'
import { Coins, Gift, Store } from 'lucide-react'
import { siteContent } from '../content'

export function LuckyBallGame() {
  const luckyBallData = siteContent.games.luckyBall

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden border border-[#F5C842]/45 bg-gradient-to-b from-[#3B0B24]/95 via-[#2A071A]/95 to-[#3B0B24]/95 shadow-card backdrop-blur-md mb-8 p-4 sm:p-5"
    >
      {/* Decorative top gold glow strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F5C842] to-transparent opacity-90 shadow-glow" />

      {/* Tight, compact Header */}
      <div className="text-center mb-3.5">
        <h3 className="font-['Rozha_One'] text-2xl text-gold-gradient leading-tight">
          {luckyBallData?.title || 'Lucky Ball Challenge'}
        </h3>
        <p className="font-['Manrope'] text-xs text-[#FDF6E3]/85 mt-0.5 mb-2">
          {luckyBallData?.tagline || 'Come !! Play !! Test your luck & win a special discount!'}
        </p>

        {/* Compact Token Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 text-[11px] font-bold">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gold-gradient text-[#4A0E2E] font-black shadow-sm">
            <Coins className="w-3 h-3 text-[#4A0E2E]" />
            ENTRY: ₹10
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#6B1F4A] border border-[#F5C842]/40 text-[#F5C842]">
            <Gift className="w-3 h-3 text-[#F5C842]" />
            WIN: BUY 1 GET 1 FREE
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#3B0B24] border border-[#F5C842]/30 text-[#FFF4DC]/80">
            <Store className="w-3 h-3 text-[#F5C842]" />
            Stall No. 11
          </span>
        </div>
      </div>

      {/* Balanced 2-Column Row (40% Video / 60% Bullets) */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        {/* Left: Compact Video Frame */}
        <div className="md:col-span-2 flex justify-center">
          <div className="w-full max-w-[240px] md:max-w-none rounded-xl overflow-hidden border border-[#F5C842]/60 bg-black/60 shadow-md">
            <div className="relative aspect-video w-full bg-[#18040F] flex items-center justify-center overflow-hidden">
              <video
                src={luckyBallData?.videoUrl || '/videos/guess-the-color.mp4'}
                poster={luckyBallData?.videoPoster || '/videos/guess-the-color-poster.jpg'}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right: Snug, Clean Bulleted Rules */}
        <div className="md:col-span-3 flex flex-col justify-center">
          <div className="text-xs font-bold text-[#F5C842] mb-1.5 uppercase tracking-wider font-['Rozha_One']">
            Game Rules:
          </div>

          <ul className="space-y-1.5 text-xs text-[#FDF6E3]/90 font-['Manrope'] leading-snug">
            <li className="flex items-start gap-1.5">
              <span className="font-bold text-[#F5C842] flex-shrink-0">1.</span>
              <span>
                <strong className="text-[#F5C842] font-semibold">Entry Fee:</strong> There is a{' '}
                <strong className="text-white font-bold">₹10 entry fee</strong> required to participate and play.
              </span>
            </li>

            <li className="flex items-start gap-1.5">
              <span className="font-bold text-[#F5C842] flex-shrink-0">2.</span>
              <span>Guess the colour of the ball before it is drawn from the box.</span>
            </li>

            <li className="flex items-start gap-1.5">
              <span className="font-bold text-[#F5C842] flex-shrink-0">3.</span>
              <span>
                If your guess is correct, you get a{' '}
                <strong className="text-[#F5C842] font-bold">BUY 1 GET 1 FREE</strong> offer on your order!
              </span>
            </li>

            <li className="flex items-start gap-1.5">
              <span className="font-bold text-[#F5C842] flex-shrink-0">4.</span>
              <span>Ordering a product is completely up to your preference.</span>
            </li>
          </ul>

          <p className="mt-2 text-[10px] sm:text-[11px] font-bold text-[#F5C842] tracking-wider uppercase">
            THANK YOU FOR PLAYING! HAVE FUN! • STALL NO. 11
          </p>
        </div>
      </div>
    </motion.div>
  )
}
