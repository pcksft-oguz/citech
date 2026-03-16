"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, X } from "lucide-react"

const WA_NUMBER = "905321665452"
const WA_LINK = `https://wa.me/${WA_NUMBER}`

const footerLinks = {
  products: [
    { href: "/products", label: "Tüm Ürünler" },
    { href: "/products?category=cordless", label: "Akülü Matkaplar" },
    { href: "/products?category=hammer", label: "Darbeli Matkaplar" },
    { href: "/products?category=industrial", label: "Endüstriyel Matkaplar" },
  ],
  company: [
    { href: "/about", label: "Hakkımızda" },
    { href: "/dealer", label: "Bayi Ol" },
    { href: "/contact", label: "İletişim" },
  ],
}

const privacyContent = `
Son Güncelleme: 16 Mart 2026

1. Toplanan Veriler
Web sitemiz üzerinden iletişim ve bayi başvuru formları aracılığıyla ad, soyad, e-posta adresi, telefon numarası, firma bilgisi ve mesaj içeriği gibi kişisel verilerinizi toplayabiliriz.

2. Verilerin Kullanım Amacı
Toplanan kişisel veriler yalnızca aşağıdaki amaçlarla kullanılır:
• İletişim taleplerinize yanıt vermek
• Bayi başvurularınızı değerlendirmek
• Toptan fiyat teklifleri sunmak
• Yasal yükümlülüklerimizi yerine getirmek

3. Verilerin Paylaşımı
Kişisel verileriniz üçüncü taraflarla paylaşılmaz, satılmaz veya kiralanmaz. Yasal zorunluluk halleri saklıdır.

4. Verilerin Saklanması
Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca saklanır. Amacın ortadan kalkması halinde veriler silinir veya anonim hale getirilir.

5. Çerezler (Cookies)
Web sitemiz, kullanıcı deneyimini iyileştirmek amacıyla temel çerezler kullanabilir. Çerezler kişisel veri toplamaz.

6. Veri Güvenliği
Kişisel verilerinizin güvenliği için gerekli teknik ve idari tedbirler alınmaktadır.

7. Haklarınız
6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında kişisel verilerinizle ilgili bilgi alma, düzeltme ve silme haklarına sahipsiniz. Bu haklarınızı kullanmak için info@citechtools.com adresine başvurabilirsiniz.

8. İletişim
Gizlilik politikamız hakkında sorularınız için:
E-posta: info@citechtools.com
Telefon: +90 532 166 54 52
Adres: Maltepe Mah. Askeri Fırın Çıkmazı, Nefin İstanbul C2 Blok No:53, Zeytinburnu / İstanbul 34025
`

const termsContent = `
Son Güncelleme: 16 Mart 2026

1. Genel Hükümler
Bu web sitesi CiTech Tools ("Şirket") tarafından işletilmektedir. Siteyi kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız.

2. Hizmet Kapsamı
Web sitemiz, CiTech Tools ürünleri hakkında bilgi sunmak, toptan fiyat teklifi ve bayi başvurusu almak amacıyla hizmet vermektedir. Sitedeki ürün bilgileri, görseller ve fiyatlar önceden haber vermeksizin değiştirilebilir.

3. Fikri Mülkiyet
Web sitesindeki tüm içerik; logolar, görseller, metinler ve tasarımlar dahil olmak üzere CiTech Tools'a aittir. İzinsiz kopyalanması, çoğaltılması veya dağıtılması yasaktır.

4. Kullanıcı Sorumlulukları
Kullanıcılar, formlar aracılığıyla doğru ve güncel bilgi sağlamakla yükümlüdür. Yanıltıcı veya sahte bilgi sağlanması durumunda Şirket herhangi bir sorumluluk kabul etmez.

5. Sorumluluk Sınırlaması
CiTech Tools, web sitesinin kesintisiz veya hatasız çalışacağını garanti etmez. Sitede yayınlanan bilgilerin doğruluğu konusunda azami özen gösterilmekle birlikte, olası hatalardan dolayı sorumluluk kabul edilmez.

6. Üçüncü Taraf Bağlantılar
Web sitemiz, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin içerik ve gizlilik uygulamalarından CiTech Tools sorumlu değildir.

7. Uygulanacak Hukuk
Bu kullanım koşulları Türkiye Cumhuriyeti kanunlarına tabidir. Uyuşmazlıklarda İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.

8. Değişiklikler
Şirket, bu kullanım koşullarını önceden bildirim yapmaksızın güncelleme hakkını saklı tutar. Güncel koşullar her zaman bu sayfada yayınlanır.

9. İletişim
Kullanım koşullarımız hakkında sorularınız için:
E-posta: info@citechtools.com
Telefon: +90 532 166 54 52
Adres: Maltepe Mah. Askeri Fırın Çıkmazı, Nefin İstanbul C2 Blok No:53, Zeytinburnu / İstanbul 34025
`

function LegalModal({
  open,
  onClose,
  title,
  content,
}: {
  open: boolean
  onClose: () => void
  title: string
  content: string
}) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-card p-6 shadow-xl md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-card-foreground">{title}</h2>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
          {content.trim()}
        </div>
      </div>
    </div>
  )
}

export function SiteFooter() {
  const [modal, setModal] = useState<"privacy" | "terms" | null>(null)

  return (
    <>
      <footer className="border-t border-border bg-industrial text-industrial-foreground">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <Link href="/" className="mb-4 flex items-center">
                <Image
                  src="/logo.png"
                  alt="CiTech Tools – Master of Power"
                  width={130}
                  height={44}
                  className="h-9 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-industrial-foreground/70">
                Master of Power. CiTech, 21V fırçasız motor teknolojisi ve RedLithium-Ion
                batarya sistemleriyle profesyonellere güç sunan global bir marka.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-industrial-foreground/50">
                Ürünler
              </h3>
              <ul className="flex flex-col gap-2.5">
                {footerLinks.products.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-industrial-foreground/70 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-industrial-foreground/50">
                Kurumsal
              </h3>
              <ul className="flex flex-col gap-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-industrial-foreground/70 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-industrial-foreground/50">
                İletişim
              </h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-industrial-foreground/70">
                    Maltepe Mah. Askeri Fırın Çıkmazı, Nefin İstanbul C2 Blok No:53, Zeytinburnu / İstanbul 34025
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <a
                    href="tel:+905321665452"
                    className="text-sm text-industrial-foreground/70 transition-colors hover:text-primary"
                  >
                    +90 532 166 54 52
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-industrial-foreground/70 transition-colors hover:text-primary"
                  >
                    WhatsApp ile Yaz
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <a
                    href="mailto:info@citechtools.com"
                    className="text-sm text-industrial-foreground/70 transition-colors hover:text-primary"
                  >
                    info@citechtools.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-industrial-foreground/10 pt-8 md:flex-row">
            <p className="text-xs text-industrial-foreground/50">
              {"© 2026 CiTech Tools. Tüm hakları saklıdır."}
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => setModal("privacy")}
                className="text-xs text-industrial-foreground/50 transition-colors hover:text-primary"
              >
                Gizlilik Politikası
              </button>
              <button
                onClick={() => setModal("terms")}
                className="text-xs text-industrial-foreground/50 transition-colors hover:text-primary"
              >
                Kullanım Koşulları
              </button>
            </div>
          </div>
        </div>
      </footer>

      <LegalModal
        open={modal === "privacy"}
        onClose={() => setModal(null)}
        title="Gizlilik Politikası"
        content={privacyContent}
      />
      <LegalModal
        open={modal === "terms"}
        onClose={() => setModal(null)}
        title="Kullanım Koşulları"
        content={termsContent}
      />
    </>
  )
}
