import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="rounded-xl bg-primary/5 border border-primary/20 px-6 py-16 text-center md:px-12">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            CiTech ile Güçlü Bir Ortaklığa Hazır mısınız?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
            500'den fazla distribütörün güvendiği CiTech'e katılın. Rekabetçi
            toptan fiyatlar ve 21V serisi güç aletleriyle işinizi büyütün.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/dealer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Bayi Ol
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-medium text-card-foreground transition-colors hover:bg-secondary"
            >
              Satış Ekibiyle İletişime Geç
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
