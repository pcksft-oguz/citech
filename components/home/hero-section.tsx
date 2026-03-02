import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-industrial">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-drill.jpg"
          alt="CiTech Tools – Master of Power"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-industrial via-industrial/80 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[600px] max-w-7xl flex-col justify-center px-4 py-20 lg:min-h-[700px] lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-medium uppercase tracking-wider text-primary">
              Master of Power
            </span>
          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-industrial-foreground md:text-5xl lg:text-6xl">
            Güç Artık Elinizde: CiTech 21V Serisi
          </h1>

          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-industrial-foreground/70">
            Fırçasız motor teknolojisi ve RedLithium-Ion batarya sistemiyle
            tasarlanan CiTech aletleri; bayiler, yapı firmaları ve profesyoneller
            için üretilmiştir. Smart Energy Management ile maksimum çalışma süresi.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Ürünleri İncele
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/dealer"
              className="inline-flex items-center gap-2 rounded-md border border-industrial-foreground/20 bg-transparent px-6 py-3 text-sm font-medium text-industrial-foreground transition-colors hover:bg-industrial-foreground/10"
            >
              Bayi Ol
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-industrial-foreground/20 bg-transparent px-6 py-3 text-sm font-medium text-industrial-foreground transition-colors hover:bg-industrial-foreground/10"
            >
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
