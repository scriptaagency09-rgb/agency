"use client"

const services = [
  {
    number: "01",
    title: "AI Otomasyon",
    description:
      "Tekrarlayan iş süreçlerini yapay zeka ile otomatikleştiriyoruz. Zaman ve maliyet tasarrufu sağlarken ekibinizin gerçek değer üreten işlere odaklanmasını sağlıyoruz.",
    tags: ["AI Ajan", "Süreç Optimizasyonu", "RPA"],
  },
  {
    number: "02",
    title: "AI Strateji & Danışmanlık",
    description:
      "İşletmeniz için özelleştirilmiş yapay zeka yol haritası oluşturuyoruz. Doğru teknoloji, doğru zamanda, doğru şekilde hayata geçiyor.",
    tags: ["Yol Haritası", "Teknoloji Seçimi", "ROI Analizi"],
  },
  {
    number: "03",
    title: "Özel AI Yazılım Geliştirme",
    description:
      "İşletmenize özel LLM entegrasyonları, chatbotlar ve AI destekli uygulamalar geliştiriyoruz. GPT, Claude ve açık kaynak modellerle çalışıyoruz.",
    tags: ["LLM", "Chatbot", "API Entegrasyonu"],
  },
  {
    number: "04",
    title: "Veri Analizi & AI Raporlama",
    description:
      "Verilerinizi anlık içgörülere dönüştüren dashboard ve raporlama sistemleri kuruyoruz. Kararlarınızı veriyle destekleyin.",
    tags: ["Dashboard", "Raporlama", "Tahminleme"],
  },
  {
    number: "05",
    title: "AI Pazarlama Otomasyonu",
    description:
      "İçerik üretimi, kampanya yönetimi ve müşteri segmentasyonu süreçlerini AI ile hızlandırıyoruz. Daha etkili ve ölçülebilir pazarlama akışları kuruyoruz.",
    tags: ["İçerik", "Segmentasyon", "Pazarlama Akışı"],
  },
  {
    number: "06",
    title: "AI Eğitim & Kurumsal Gelişim",
    description:
      "Ekiplerinize yapay zeka araçlarını verimli kullanma eğitimi veriyoruz. Şirket genelinde AI farkındalığı ve uygulama becerisi oluşturuyoruz.",
    tags: ["Atölye", "Kurum İçi Eğitim", "Yetkinlik Gelişimi"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative w-full py-16 sm:py-20 lg:py-32 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3 lg:items-start mb-12 sm:mb-14 lg:mb-16">
          <div className="lg:col-span-2">
            <p className="text-gold/80 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] font-sans uppercase mb-3 sm:mb-4">
            Neler Yapıyoruz?
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.02em] text-foreground leading-tight">
              İşletmenizi Yapay Zeka ile Güçlendiriyoruz
            </h2>
          </div>

          <p className="text-foreground/65 text-sm sm:text-base font-sans leading-relaxed lg:pt-10 max-w-md">
            Yazılım, hizmet ve strateji üçgeninde dijital işletmelere destek olan AI ajansıyız.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-gold/10">
          {services.map((service) => (
            <div
              key={service.number}
              className="group p-6 sm:p-7 border-b border-r border-gold/10 last:border-r-0 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0"
            >
              <p className="font-serif text-4xl sm:text-5xl text-foreground/20 group-hover:text-gold/50 transition-colors duration-300">
                {service.number}
              </p>
              <h3 className="mt-2 font-serif text-xl sm:text-2xl text-foreground">
                {service.title}
              </h3>
              <p className="mt-4 text-foreground/65 text-sm sm:text-base font-sans leading-relaxed">
                {service.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full border border-gold/15 bg-muted/20 text-[11px] text-foreground/60 font-sans"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
