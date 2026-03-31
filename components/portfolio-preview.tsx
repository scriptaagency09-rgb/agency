"use client"

export function PortfolioPreview() {
  return (
    <div className="relative">
      {/* Gold bezel frame */}
      <div className="relative w-[140px] h-[280px] rounded-[24px] p-[2px] bg-gradient-to-br from-gold via-gold-light to-gold-dark shadow-2xl shadow-gold/10">
        <div className="absolute inset-[2px] rounded-[22px] bg-background overflow-hidden">
          {/* Phone screen content - boutique brand app mockup */}
          <div className="h-full w-full bg-gradient-to-b from-[#0a0a0a] to-[#111111] p-3 flex flex-col">
            {/* Status bar */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-[6px] text-gold-light/60">9:41</span>
              <div className="flex gap-0.5">
                <div className="w-2 h-1 rounded-sm bg-gold/40" />
                <div className="w-2 h-1 rounded-sm bg-gold/40" />
                <div className="w-2 h-1 rounded-sm bg-gold/60" />
              </div>
            </div>

            {/* App header */}
            <div className="text-center mb-3">
              <div className="text-[8px] font-serif tracking-[0.2em] text-gold">MAISON</div>
              <div className="text-[5px] text-gold/50 tracking-widest">ARTISAN</div>
            </div>

            {/* Product image placeholder */}
            <div className="flex-1 relative rounded-lg overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] mb-2">
              {/* Abstract luxury product representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-16 rounded-lg bg-gradient-to-b from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center">
                  <div className="w-8 h-10 rounded bg-gradient-to-br from-gold/30 to-transparent" />
                </div>
              </div>
              {/* Subtle reflection */}
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gold/5 to-transparent" />
            </div>

            {/* Product info */}
            <div className="text-center space-y-1">
              <div className="text-[7px] text-foreground/90 font-light tracking-wide">Signature Collection</div>
              <div className="text-[6px] text-gold">€ 2,450</div>
            </div>

            {/* Bottom nav dots */}
            <div className="flex justify-center gap-1 mt-2">
              <div className="w-1 h-1 rounded-full bg-gold" />
              <div className="w-1 h-1 rounded-full bg-gold/30" />
              <div className="w-1 h-1 rounded-full bg-gold/30" />
            </div>
          </div>
        </div>

        {/* Notch */}
        <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-12 h-4 bg-background rounded-b-xl" />
      </div>

      {/* Ambient glow */}
      <div className="absolute -inset-8 bg-gold/5 blur-3xl rounded-full -z-10" />
    </div>
  )
}
