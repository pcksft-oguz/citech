import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend("re_PQABUxFm_EvdwssM5U2hE7zF6NeDhiw9i")

export async function POST(request: Request) {
  try {
    const { firstName, lastName, company, email, phone, subject, currentBrands, message } =
      await request.json()

    const subjectMap: Record<string, string> = {
      wholesale: "Toptan Fiyat Talebi",
      product: "Ürün Bilgisi",
      dealer: "Bayi Ortaklığı",
      support: "Teknik Destek",
      other: "Diğer",
    }

    const { data, error } = await resend.emails.send({
      from: "CiTech İletişim <onboarding@resend.dev>",
      to: "info@citechtools.com",
      subject: `İletişim Formu: ${subjectMap[subject] || subject}`,
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;font-weight:bold">Ad Soyad:</td><td style="padding:8px">${firstName} ${lastName}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Firma:</td><td style="padding:8px">${company || "Belirtilmedi"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">E-posta:</td><td style="padding:8px">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Telefon:</td><td style="padding:8px">${phone || "Belirtilmedi"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Konu:</td><td style="padding:8px">${subjectMap[subject] || subject}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Mevcut Bayilik Markaları:</td><td style="padding:8px">${currentBrands || "Belirtilmedi"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Mesaj:</td><td style="padding:8px">${message}</td></tr>
        </table>
      `,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch {
    return NextResponse.json(
      { error: "Mail gönderilemedi" },
      { status: 500 }
    )
  }
}
