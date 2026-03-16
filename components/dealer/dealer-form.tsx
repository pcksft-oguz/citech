"use client"

import { useState } from "react"
import { Send, Loader2 } from "lucide-react"

export function DealerForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch("/api/dealer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: formData.get("company"),
          contact: formData.get("contact"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          country: formData.get("country"),
          currentBrands: formData.get("currentBrands"),
          message: formData.get("message"),
        }),
      })

      if (!res.ok) {
        throw new Error("Başvuru gönderilemedi")
      }

      setSubmitted(true)
    } catch {
      setError("Başvuru gönderilemedi. Lütfen tekrar deneyin.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <Send className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-card-foreground">
          Başvurunuz Alındı
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          İlginiz için teşekkürler. Ortaklık ekibimiz başvurunuzu inceleyip
          en geç 2 iş günü içinde size geri dönecektir.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-border bg-card p-6 md:p-8"
    >
      <div className="grid gap-5">
        <div>
          <label
            htmlFor="company"
            className="mb-1.5 block text-sm font-medium text-card-foreground"
          >
            Firma Adı
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Firma adınız"
          />
        </div>

        <div>
          <label
            htmlFor="contact"
            className="mb-1.5 block text-sm font-medium text-card-foreground"
          >
            Yetkili Kişi
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            required
            className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Ad Soyad"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-card-foreground"
            >
              E-posta
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="email@firma.com"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="mb-1.5 block text-sm font-medium text-card-foreground"
            >
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="+90 5xx xxx xx xx"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="country"
            className="mb-1.5 block text-sm font-medium text-card-foreground"
          >
            Ülke / Şehir
          </label>
          <input
            type="text"
            id="country"
            name="country"
            required
            className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Ülke ve şehriniz"
          />
        </div>

        <div>
          <label
            htmlFor="currentBrands"
            className="mb-1.5 block text-sm font-medium text-card-foreground"
          >
            Mevcut Bayilik Markalarınız
          </label>
          <input
            type="text"
            id="currentBrands"
            name="currentBrands"
            className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Örn: Bosch, Makita, DeWalt"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-medium text-card-foreground"
          >
            Mesaj
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="İşletmeniz ve dağıtım ihtiyaçlarınız hakkında bilgi verin..."
          />
        </div>

        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
        >
          {loading ? (
            <>
              Gönderiliyor...
              <Loader2 className="h-4 w-4 animate-spin" />
            </>
          ) : (
            <>
              Başvuru Gönder
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  )
}
