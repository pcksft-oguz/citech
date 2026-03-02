import type { Metadata } from "next"
import { ContactForm } from "@/components/contact/contact-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "CiTech Tools ile iletişime geçin. Toptan fiyat teklifi alın, ürünlerimiz hakkında bilgi edinin veya bayi ortaklığını keşfedin.",
}

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    details: ["+90 (0) 212 000 0000", "+90 (0) 212 000 0001"],
  },
  {
    icon: Mail,
    title: "E-posta",
    details: ["info@citech-tools.com", "sales@citech-tools.com"],
  },
  {
    icon: MapPin,
    title: "Adres",
    details: ["Türkiye"],
  },
  {
    icon: Clock,
    title: "Çalışma Saatleri",
    details: ["Pazartesi - Cuma: 08:00 - 17:00", "Cumartesi: 09:00 - 13:00"],
  },
]

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
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {item.title}
                      </p>
                      {item.details.map((detail) => (
                        <p
                          key={detail}
                          className="text-sm text-muted-foreground"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
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
              title="CiTech Tools Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.8!2d8.6368!3d50.1108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDA2JzM5LjAiTiA4wrAzOCcxMi41IkU!5e0!3m2!1sen!2sde!4v1700000000000"
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
