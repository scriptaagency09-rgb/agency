import { NextResponse } from "next/server"

const TO_EMAIL = "scriptaagency09@gmail.com"
const FROM_EMAIL = "Scripta Iletisim <onboarding@resend.dev>"

type ContactPayload = {
  subject?: string
  body?: string
  firma?: string
  projeAdi?: string
  yetkiliAdiSoyadi?: string
  email?: string
  telefon?: string
  hizmetTuru?: string
  tahminiButce?: string
  hedefSuresi?: string
  not?: string
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY tanimli degil." },
        { status: 500 },
      )
    }

    const payload = (await request.json()) as ContactPayload
    if (!payload?.email || !payload?.projeAdi) {
      return NextResponse.json(
        { error: "Zorunlu alanlar eksik." },
        { status: 400 },
      )
    }

    const emailBody = [
      `Firma: ${payload.firma ?? "-"}`,
      `Proje Adi: ${payload.projeAdi ?? "-"}`,
      `Yetkili Adi Soyadi: ${payload.yetkiliAdiSoyadi ?? "-"}`,
      `E-posta: ${payload.email ?? "-"}`,
      `Telefon: ${payload.telefon ?? "-"}`,
      `Hizmet Turu: ${payload.hizmetTuru ?? "-"}`,
      `Tahmini Butce: ${payload.tahminiButce ?? "-"}`,
      `Hedef Suresi: ${payload.hedefSuresi ?? "-"}`,
      `Not: ${payload.not ?? "-"}`,
      "",
      "----- Ozet -----",
      payload.body ?? "",
    ].join("\n")

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: payload.email,
        subject: payload.subject ?? "Iletisim Talebi",
        text: emailBody,
      }),
    })

    if (!resendResponse.ok) {
      const errText = await resendResponse.text()
      return NextResponse.json(
        { error: `Resend hatasi: ${errText}` },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: "Sunucu hatasi olustu." },
      { status: 500 },
    )
  }
}

