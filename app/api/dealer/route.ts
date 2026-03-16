import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend("re_PQABUxFm_EvdwssM5U2hE7zF6NeDhiw9i")

export async function POST(request: Request) {
  try {
    const { company, contact, email, phone, country, currentBrands, message } =
      await request.json()

    const { data, error } = await resend.emails.send({
      from: "CiTech Dealer <onboarding@resend.dev>",
      to: "info@citechtools.com",
      subject: `Bayi Başvurusu: ${company}`,
      html: `
        <h2>Yeni Bayi Başvurusu</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;font-weight:bold">Firma:</td><td style="padding:8px">${company}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Yetkili:</td><td style="padding:8px">${contact}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">E-posta:</td><td style="padding:8px">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Telefon:</td><td style="padding:8px">${phone || "Belirtilmedi"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Ülke:</td><td style="padding:8px">${country}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Mevcut Bayilik Markaları:</td><td style="padding:8px">${currentBrands || "Belirtilmedi"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Mesaj:</td><td style="padding:8px">${message || "Belirtilmedi"}</td></tr>
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
