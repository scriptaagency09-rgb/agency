const processSteps = [
  {
    number: "1",
    title: "Keşif & Analiz",
    description:
      "İşletmenizi, süreçlerinizi ve hedeflerinizi derinlemesine analiz ediyoruz. Yapay zekanın en yüksek değeri yaratacağı alanları belirliyoruz.",
  },
  {
    number: "2",
    title: "Strateji & Yol Haritası",
    description:
      "Size özel AI dönüşüm stratejisi hazırlıyoruz. Öncelikli projeleri, bütçe planını ve beklenen ROI'yi netleştiriyoruz.",
  },
  {
    number: "3",
    title: "Geliştirme & Entegrasyon",
    description:
      "Çözümleri hızla prototipliyor ve sistemlerinize sorunsuz entegre ediyoruz. Çevik metodoloji ile iteratif ilerliyoruz.",
  },
  {
    number: "4",
    title: "Büyüme & Optimizasyon",
    description:
      "Canlıya alınan çözümleri sürekli izliyor, ölçümlüyor ve ölçeklendiriyoruz. Uzun vadeli etki için sürekli iyileştirme yapıyoruz.",
  },
]

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative w-full py-16 sm:py-20 lg:py-32 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.03] to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-gold/80 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] font-sans uppercase mb-3 sm:mb-4">
            Nasıl Çalışıyoruz
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.03em] text-foreground mb-4 sm:mb-6 leading-tight">
            Kanıtlanmış Bir Süreç,
            <br />
            Ölçülebilir Sonuçlar
          </h2>
          <p className="text-foreground/65 text-sm sm:text-base font-sans font-light max-w-3xl mx-auto leading-relaxed">
            Her projede aynı disiplini uygularız: analiz, strateji, uygulama ve optimizasyon.
          </p>
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto" />
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.number} className="relative text-center lg:text-left">
                <div className="mx-auto lg:mx-0 inline-flex items-center justify-center w-12 h-12 rounded-full border border-gold/20 bg-background text-gold font-serif text-lg">
                  {step.number}
                </div>
                <h3 className="mt-5 font-serif text-2xl text-foreground">{step.title}</h3>
                <p className="mt-3 text-foreground/65 text-sm sm:text-base font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

