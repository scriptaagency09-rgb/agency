"use client"

import { useState } from "react"

const navLinks = [
  { label: "Ana Sayfa", href: "#" },
  { label: "Hakkımızda", href: "#about" },
  { label: "Hizmetler", href: "#services" },
  { label: "Portföy", href: "#portfolio" },
  { label: "İletişim", href: "#contact" },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-background/80 backdrop-blur-md border-b border-gold/10">
        {/* Logo */}
        <span className="font-serif text-lg sm:text-xl tracking-[0.15em] text-gold">
          SCRIPTA
        </span>

        {/* Desktop Navigation - Hidden on Mobile */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-[0.15em] text-foreground/70 hover:text-gold transition-colors duration-300 uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hamburger Menu Button - Visible on Mobile */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          aria-label="Menüyü aç"
        >
          <span className="w-6 h-px bg-gold transition-all duration-300" />
          <span className="w-4 h-px bg-gold transition-all duration-300" />
          <span className="w-6 h-px bg-gold transition-all duration-300" />
        </button>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-[#030303] transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center"
          aria-label="Menüyü kapat"
        >
          <span className="relative w-6 h-6">
            <span className="absolute top-1/2 left-0 w-full h-px bg-gold rotate-45" />
            <span className="absolute top-1/2 left-0 w-full h-px bg-gold -rotate-45" />
          </span>
        </button>

        {/* Nav Links */}
        <nav className="h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-serif text-2xl sm:text-3xl md:text-4xl tracking-[0.2em] text-gold hover:text-gold-light transition-all duration-300 transform ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? `${index * 100}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
          
          {/* CTA in Menu */}
          <div 
            className={`mt-8 transform ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? `${navLinks.length * 100}ms` : "0ms" }}
          >
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-block px-8 py-4 text-sm tracking-[0.1em] font-sans font-semibold bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-background rounded-sm cta-pulse"
            >
              ÜCRETSİZ GÖRÜŞME
            </a>
          </div>
        </nav>

        {/* Bottom Decorative Element */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <div className="w-8 h-px bg-gold/30" />
          <div className="w-1.5 h-1.5 rotate-45 bg-gold/50" />
          <div className="w-8 h-px bg-gold/30" />
        </div>
      </div>
    </>
  )
}
