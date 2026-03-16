import type { Metadata } from "next"
import { ContactForm } from "@/components/contact/contact-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "CiTech Tools ile iletişime geçin. Toptan fiyat teklifi alın, ürünlerimiz hakkında bilgi edinin veya bayi ortaklığını keşfedin.",
}

const WA_NUMBER = "905321665452"
const WA_LINK = `https://wa.me/${WA_NUMBER}`

export default function ContactPage() {
  return (
    <>
      <section className="bg-industrial py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-industrial-foreground md:text-4xl lg:text-5xl">
            İletişim
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-industrial-foreground/60">
            Ürünlerimiz hakkında sorularınız mı var veya toptan fiyat teklifi almak
            mı istiyorsunuz? Ekibimiz size yardımcı olmaya hazır. Yazın, en geç
            bir iş günü içinde dönelim.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Bize Ulaşın
              </h2>
              <p className="mt-3 text-muted-foreground">
                Ürün bilgisi almak, toplu sipariş görüşmek veya bayi ortaklığını
                keşfetmek için buradayız.
              </p>

              <div className="mt-8 flex flex-col gap-6">
                {/* Telefon */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Telefon</p>
                    <a
                      href="tel:+905321665452"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      +90 532 166 54 52
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#25D366]/10">
                    <svg className="h-5 w-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">WhatsApp</p>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-[#25D366]"
                    >
                      +90 532 166 54 52
                    </a>
                    <p className="text-xs text-muted-foreground/70">Hızlı yanıt için WhatsApp'tan yazın</p>
                  </div>
                </div>

                {/* E-posta */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">E-posta</p>
                    <a
                      href="mailto:info@citechtools.com"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      info@citechtools.com
                    </a>
                  </div>
                </div>

                {/* Adres */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Adres</p>
                    <p className="text-sm text-muted-foreground">
                      Maltepe Mah. Askeri Fırın Çıkmazı<br />
                      Nefin İstanbul, C2 Blok No:53<br />
                      Zeytinburnu / İstanbul 34025
                    </p>
                  </div>
                </div>

                {/* Çalışma Saatleri */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Çalışma Saatleri</p>
                    <p className="text-sm text-muted-foreground">Pazartesi – Cuma: 08:00 – 17:00</p>
                    <p className="text-sm text-muted-foreground">Cumartesi: 09:00 – 13:00</p>
                  </div>
                </div>

                {/* WhatsApp CTA butonu */}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2.5 rounded-md bg-[#25D366] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#20b858]"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp ile Hemen Yaz
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <h2 className="mb-6 text-xl font-bold text-foreground">Konumumuz</h2>
          <div className="aspect-[2/1] overflow-hidden rounded-lg border border-border bg-muted">
            <iframe
              title="CiTech Tools Konumu"
              src="https://maps.google.com/maps?q=Nefin+%C4%B0stanbul+C2+Blok,+Maltepe+Mah.+Askeri+F%C4%B1r%C4%B1n+%C3%87%C4%B1kmaz%C4%B1,+Zeytinburnu+%C4%B0stanbul+34025&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
        </div>
      </section>
    </>
  )
}
