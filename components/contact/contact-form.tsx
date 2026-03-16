"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <Send className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-card-foreground">
          Mesajınız İletildi
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Bize ulaştığınız için teşekkürler. Ekibimiz en geç bir iş günü içinde
          size geri dönecektir.
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
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="mb-1.5 block text-sm font-medium text-card-foreground"
            >
              Ad
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Adınız"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="mb-1.5 block text-sm font-medium text-card-foreground"
            >
              Soyad
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Soyadınız"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contactEmail"
              className="mb-1.5 block text-sm font-medium text-card-foreground"
            >
              E-posta
            </label>
            <input
              type="email"
              id="contactEmail"
              name="email"
              required
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="email@firma.com"
            />
          </div>
          <div>
            <label
              htmlFor="contactPhone"
              className="mb-1.5 block text-sm font-medium text-card-foreground"
            >
              Telefon
            </label>
            <input
              type="tel"
              id="contactPhone"
              name="phone"
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="+90 5xx xxx xx xx"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="mb-1.5 block text-sm font-medium text-card-foreground"
          >
            Konu
          </label>
          <select
            id="subject"
            name="subject"
            required
            className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="">Konu seçin</option>
            <option value="wholesale">Toptan Fiyat Talebi</option>
            <option value="product">Ürün Bilgisi</option>
            <option value="dealer">Bayi Ortaklığı</option>
            <option value="support">Teknik Destek</option>
            <option value="other">Diğer</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="contactMessage"
            className="mb-1.5 block text-sm font-medium text-card-foreground"
          >
            Mesaj
          </label>
          <textarea
            id="contactMessage"
            name="message"
            rows={5}
            required
            className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Size nasıl yardımcı olabiliriz?"
          />
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Mesaj Gönder
          <Send className="h-4 w-4" />
        </button>
      </div>
    </form>
  )
}
