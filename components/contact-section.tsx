"use client"

import { Mail, Phone, Send } from "lucide-react"
import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const CONTACT_EMAIL = "scriptaagency09@gmail.com"
const CONTACT_PHONE = "+90 551 118 75 80"

const teklifSchema = z.object({
  firma: z.string().min(2, "Firma adı gerekli"),
  projeAdi: z.string().min(2, "Proje adı gerekli"),
  yetkiliAdiSoyadi: z.string().min(2, "Yetkili adı gerekli"),
  email: z.string().email("Geçerli bir e-posta girin"),
  telefon: z
    .string()
    .min(7, "Telefon gerekli")
    .regex(/^[0-9+()\s-]+$/, "Telefon formatı geçersiz"),
  hizmetTuru: z.string().min(1, "Hizmet türü gerekli"),
  tahminiButce: z
    .number({ invalid_type_error: "Bütçe gerekli" })
    .min(0, "Bütçe 0'dan küçük olamaz"),
  hedefSuresi: z.string().min(1, "Hedef süresi gerekli"),
  not: z.string().optional(),
})

type TeklifFormData = z.infer<typeof teklifSchema>

export function ContactSection() {
  const [submitting, setSubmitting] = useState(false)
  const [sentHint, setSentHint] = useState<string | null>(null)

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TeklifFormData>({
    resolver: zodResolver(teklifSchema),
    defaultValues: {
      firma: "",
      projeAdi: "",
      yetkiliAdiSoyadi: "",
      email: "",
      telefon: "",
      hizmetTuru: "Web Sitesi Tasarımı",
      tahminiButce: undefined,
      hedefSuresi: "1-2 Ay",
      not: "",
    },
    mode: "onTouched",
  })

  const onSubmit = handleSubmit(async (data) => {
    if (submitting) return
    setSubmitting(true)

    const subject = `İletişim Talebi - ${data.projeAdi}`
    const body = [
      `Firma: ${data.firma}`,
      `Proje Adı: ${data.projeAdi}`,
      `Yetkili Adı Soyadı: ${data.yetkiliAdiSoyadi}`,
      `E-posta: ${data.email}`,
      `Telefon: ${data.telefon}`,
      `Hizmet Türü: ${data.hizmetTuru}`,
      `Tahmini Bütçe: ${data.tahminiButce.toLocaleString("tr-TR")} TL`,
      `Hedef Süresi: ${data.hedefSuresi}`,
      data.not?.trim() ? `Not: ${data.not}` : "",
    ]
      .filter(Boolean)
      .join("\n")

    setSentHint("Mesajınız gönderiliyor...")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject,
          body,
          firma: data.firma,
          projeAdi: data.projeAdi,
          yetkiliAdiSoyadi: data.yetkiliAdiSoyadi,
          email: data.email,
          telefon: data.telefon,
          hizmetTuru: data.hizmetTuru,
          tahminiButce: `${data.tahminiButce.toLocaleString("tr-TR")} TL`,
          hedefSuresi: data.hedefSuresi,
          not: data.not?.trim() || "-",
        }),
      })

      if (!response.ok) {
        let apiMessage = "Form servisi hatası"
        try {
          const err = (await response.json()) as { error?: string }
          if (err?.error) apiMessage = err.error
        } catch {
          // no-op
        }
        throw new Error(apiMessage)
      }

      setSentHint("Mesajınız alındı. En kısa sürede dönüş yapacağız.")
      reset()
    } catch (error) {
      const message =
        error instanceof Error && error.message
          ? error.message
          : "Gönderim başarısız. Lütfen daha sonra tekrar deneyin."
      setSentHint(message)
    } finally {
      setSubmitting(false)
    }
  })

  return (
    <section
      id="contact"
      className="relative w-full py-16 sm:py-20 lg:py-32 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.03] to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-gold/80 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] font-sans uppercase mb-3 sm:mb-4">
            Proje Teklif Formu
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[0.08em] sm:tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold-light to-gold mb-4 sm:mb-6 leading-tight">
            Hızlıca Teklif Alın
          </h2>
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto" />
        </div>

        <div className="grid gap-8 lg:gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 border border-gold/30 bg-background rounded-sm flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold" strokeWidth={1.6} />
                </div>
                <div>
                  <p className="text-foreground/80 text-sm font-sans">E-posta</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-gold hover:text-gold-light transition-colors duration-300 text-sm font-medium"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 border border-gold/30 bg-background rounded-sm flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gold" strokeWidth={1.6} />
                </div>
                <div>
                  <p className="text-foreground/80 text-sm font-sans">Telefon</p>
                  <a
                    href={`tel:${CONTACT_PHONE.split(" ").join("")}`}
                    className="text-gold hover:text-gold-light transition-colors duration-300 text-sm font-medium"
                  >
                    {CONTACT_PHONE}
                  </a>
                </div>
              </div>

              <p className="text-foreground/70 text-sm leading-relaxed">
                Aşağıdaki alanları doldurun. Talebiniz doğrudan e-posta adresimize iletilir.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="rounded-sm p-0 border-gold/10">
              <div className="p-6 sm:p-7">
                <form onSubmit={onSubmit} className="grid gap-5">
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="firma">Firma</Label>
                      <Input
                        id="firma"
                        placeholder="Örn. ABC Teknoloji"
                        {...register("firma")}
                      />
                      {errors.firma ? (
                        <p className="text-destructive text-xs">
                          {errors.firma.message}
                        </p>
                      ) : null}
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="projeAdi">Proje Adı</Label>
                      <Input
                        id="projeAdi"
                        placeholder="Örn. Yeni Ajans Web Sitesi"
                        {...register("projeAdi")}
                      />
                      {errors.projeAdi ? (
                        <p className="text-destructive text-xs">
                          {errors.projeAdi.message}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="yetkiliAdiSoyadi">Yetkili Adı Soyadı</Label>
                      <Input
                        id="yetkiliAdiSoyadi"
                        placeholder="Örn. Ayşe Yılmaz"
                        {...register("yetkiliAdiSoyadi")}
                      />
                      {errors.yetkiliAdiSoyadi ? (
                        <p className="text-destructive text-xs">
                          {errors.yetkiliAdiSoyadi.message}
                        </p>
                      ) : null}
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="email">E-posta</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ornek@firma.com"
                        {...register("email")}
                      />
                      {errors.email ? (
                        <p className="text-destructive text-xs">
                          {errors.email.message}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="telefon">Telefon</Label>
                      <Input
                        id="telefon"
                        type="tel"
                        placeholder="Örn. +90 5XX XXX XX XX"
                        {...register("telefon")}
                      />
                      {errors.telefon ? (
                        <p className="text-destructive text-xs">
                          {errors.telefon.message}
                        </p>
                      ) : null}
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="hizmetTuru">Hizmet Türü</Label>
                      <Controller
                        control={control}
                        name="hizmetTuru"
                        render={({ field }) => (
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Seçin" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Web Sitesi Tasarımı">
                                Web Sitesi Tasarımı
                              </SelectItem>
                              <SelectItem value="Marka Kimliği ve Logo">
                                Marka Kimliği ve Logo
                              </SelectItem>
                              <SelectItem value="Özel Yazılım Geliştirme">
                                Özel Yazılım Geliştirme
                              </SelectItem>
                              <SelectItem value="Otomasyon / CRM Entegrasyon">
                                Otomasyon / CRM Entegrasyon
                              </SelectItem>
                              <SelectItem value="Dijital Danışmanlık">
                                Dijital Danışmanlık
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.hizmetTuru ? (
                        <p className="text-destructive text-xs">
                          {errors.hizmetTuru.message}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="tahminiButce">Tahmini Bütçe (TL)</Label>
                      <Input
                        id="tahminiButce"
                        type="number"
                        inputMode="numeric"
                        placeholder="Örn. 150000"
                        {...register("tahminiButce", {
                          valueAsNumber: true,
                        })}
                      />
                      {errors.tahminiButce ? (
                        <p className="text-destructive text-xs">
                          {errors.tahminiButce.message}
                        </p>
                      ) : null}
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="hedefSuresi">Hedef Süresi</Label>
                      <Controller
                        control={control}
                        name="hedefSuresi"
                        render={({ field }) => (
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Seçin" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="2-4 Hafta">
                                2-4 Hafta
                              </SelectItem>
                              <SelectItem value="1-2 Ay">1-2 Ay</SelectItem>
                              <SelectItem value="2-3 Ay">2-3 Ay</SelectItem>
                              <SelectItem value="3+ Ay">3+ Ay</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.hedefSuresi ? (
                        <p className="text-destructive text-xs">
                          {errors.hedefSuresi.message}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="not">
                      Ek Not (Opsiyonel)
                    </Label>
                    <Textarea
                      id="not"
                      placeholder="Hedefleriniz, referans siteleriniz veya mevcut durum hakkında kısaca yazın..."
                      className="min-h-28"
                      {...register("not")}
                    />
                  </div>

                  {sentHint ? (
                    <p className="text-gold/90 text-sm font-medium" aria-live="polite">
                      {sentHint}
                    </p>
                  ) : null}

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-sm bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-background hover:text-[#0a0a0a] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <span className="inline-flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      {submitting ? "Gönderiliyor..." : "Teklif Talebi Gönder"}
                    </span>
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

