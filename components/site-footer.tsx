import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

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

export function SiteFooter() {
  return (
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
                  Türkiye
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-industrial-foreground/70">
                  +90 (0) 212 000 0000
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-industrial-foreground/70">
                  info@citech-tools.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-industrial-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-industrial-foreground/50">
            {"© 2026 CiTech Tools. All rights reserved."}
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-industrial-foreground/50 hover:text-primary">
              Gizlilik Politikası
            </Link>
            <Link href="#" className="text-xs text-industrial-foreground/50 hover:text-primary">
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
