"use client"

import { useEffect, useRef, useState } from "react"
import { GeometricLines } from "./geometric-lines"
import { Button } from "@/components/ui/button"

function AnimatedNumber({
  to,
  suffix = "",
  durationMs = 900,
  useDecimals = false,
}: {
  to: number
  suffix?: string
  durationMs?: number
  useDecimals?: boolean
}) {
  const [value, setValue] = useState(0)
  const [start, setStart] = useState(false)
  const elRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )?.matches
    if (prefersReducedMotion) {
      setValue(to)
      return
    }

    if (!("IntersectionObserver" in window)) {
      setStart(true)
      return
    }

    const el = elRef.current
    if (!el) {
      setStart(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          setStart(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [to])

  useEffect(() => {
    if (!start) return

    const animationStart = performance.now()
    const from = 0

    const tick = (now: number) => {
      const t = Math.min(1, (now - animationStart) / durationMs)
      // Gentle ease-out to feel more "premium"
      const eased = 1 - Math.pow(1 - t, 3)
      const next = from + (to - from) * eased

      setValue(
        useDecimals ? Number(next.toFixed(1)) : Math.round(next),
      )

      if (t < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [durationMs, to, useDecimals, start])

  return (
    <span ref={elRef} aria-label={`${to}${suffix}`} className="font-sans">
      {value}
      {suffix}
    </span>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background pt-20 lg:pt-0">
      {/* Matte obsidian texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0c0c0c] via-background to-[#050505]" />
      
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Geometric constellation lines */}
      <GeometricLines />

      {/* Dramatic gold lighting accents */}
      <div className="absolute top-0 left-1/4 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-gold/5 blur-[80px] lg:blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-gold/3 blur-[60px] lg:blur-[100px] rounded-full" />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-5 sm:px-6 lg:px-12 py-12 lg:py-0">
        <div className="w-full max-w-3xl text-center">
          <p className="text-gold/80 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] font-sans uppercase mb-4">
            SCRIPTA DİJİTAL
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.03em] text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold-light to-gold leading-tight">
            Yapay zeka ile işinizi dönüştürüyoruz.
          </h1>

          <p className="mt-5 text-foreground/85 text-sm sm:text-base md:text-lg lg:text-xl font-sans font-light leading-relaxed sm:leading-loose max-w-2xl mx-auto">
            Özel otomasyonlar ve dönüşüm odaklı dijital çözümlerle büyümenizi hızlandırıyoruz.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="relative group cta-pulse w-full sm:w-auto px-8 py-5 text-sm tracking-[0.02em] font-sans font-semibold bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-background hover:from-gold-light hover:via-[oklch(0.85_0.1_85)] hover:to-gold-light hover:text-[#0a0a0a] transition-all duration-300 border-0 rounded-sm"
            >
              <a href="#contact" className="relative z-10 inline-flex items-center justify-center">
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                  Ücretsiz Strateji Görüşmesi
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                {/* Button shine effect */}
                <div className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="group w-full sm:w-auto rounded-sm border-gold/30 text-gold bg-transparent hover:bg-gold hover:text-[#0a0a0a] transition-all duration-300 py-5"
            >
              <a href="#services" className="relative z-10 inline-flex items-center justify-center gap-2">
                Hizmetler
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="font-sans text-2xl sm:text-3xl text-gold tracking-wide font-semibold">
                <AnimatedNumber to={2026} />
              </p>
              <p className="text-[10px] sm:text-xs text-muted-foreground/65 mt-1.5 tracking-[0.04em] sm:tracking-[0.08em] whitespace-nowrap">
                Kuruluş Yılı
              </p>
            </div>
            <div className="text-center">
              <p className="font-sans text-2xl sm:text-3xl text-gold tracking-wide font-semibold">
                <AnimatedNumber to={30} suffix="+" />
              </p>
              <p className="text-[10px] sm:text-xs text-muted-foreground/65 mt-1.5 tracking-[0.04em] sm:tracking-[0.08em] whitespace-nowrap">
                Müşteriye Hizmet Verildi
              </p>
            </div>
            <div className="text-center">
              <p className="font-sans text-2xl sm:text-3xl text-gold tracking-wide font-semibold">
                <AnimatedNumber to={15} suffix="+" />
              </p>
              <p className="text-[10px] sm:text-xs text-muted-foreground/65 mt-1.5 tracking-[0.04em] sm:tracking-[0.08em] whitespace-nowrap">
                Farklı Sektör
              </p>
            </div>
            <div className="text-center">
              <p className="font-sans text-2xl sm:text-3xl text-gold tracking-wide font-semibold">
                <AnimatedNumber to={100} suffix="%" />
              </p>
              <p className="text-[10px] sm:text-xs text-muted-foreground/65 mt-1.5 tracking-[0.04em] sm:tracking-[0.08em] whitespace-nowrap">
                Müşteri Memnuniyeti
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
