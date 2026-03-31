"use client"

export function AboutSection() {
  return (
    <section id="about" className="relative w-full py-16 sm:py-20 lg:py-32 bg-background overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />
      
      {/* Decorative line elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <p className="text-gold/80 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] font-sans uppercase mb-3 sm:mb-4">
            Biz Kimiz?
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[0.08em] sm:tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold-light to-gold mb-4 sm:mb-6 leading-tight">
            Dijital Zanaatkarlar.
          </h2>
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto" />
        </div>
        
        {/* Main content - stacked on mobile */}
        <div className="relative flex flex-col gap-6 sm:gap-8">
          {/* Left decorative accent - hidden on mobile */}
          <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block" />
          
          <div className="lg:pl-8">
            <p className="text-foreground/85 text-sm sm:text-base lg:text-lg xl:text-xl font-sans font-light leading-relaxed sm:leading-loose text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
              <span className="text-gold font-medium">Scripta Dijital</span>, sektöre yeni adım atan bir girişim olarak web tasarımı ve geliştirme alanında kendini sürekli geliştirmeye odaklanır. Her projeyi öğrenme, ürün kalitesini artırma ve gerçek ihtiyaca çözüm üretme fırsatı olarak görüyoruz.
            </p>
            
            <p className="text-foreground/70 text-sm sm:text-base lg:text-lg xl:text-xl font-sans font-light leading-relaxed sm:leading-loose text-center lg:text-left max-w-3xl mx-auto lg:mx-0 mt-4 sm:mt-6">
              Henüz yolun başında olduğumuz için iletişimi güçlü tutuyor, geri bildirimlere hızlı dönüyor ve süreçleri şeffaf yönetiyoruz. Hedefimiz, sade ve kullanışlı arayüzlerle güven veren bir ilk iş birliği deneyimi sunmak.
            </p>
          </div>
          
          {/* Right decorative accent - hidden on mobile */}
          <div className="absolute -right-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block" />
        </div>
        
        {/* Bottom decorative elements */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-12 sm:mt-16">
          <div className="w-6 sm:w-8 h-px bg-gold/30" />
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rotate-45 border border-gold/40" />
          <div className="w-6 sm:w-8 h-px bg-gold/30" />
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  )
}
