import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getFeaturedProducts } from "@/lib/products"

export function FeaturedProducts() {
  const featured = getFeaturedProducts()

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Öne Çıkan Ürünler
            </h2>
            <p className="mt-3 text-muted-foreground">
              Dünya genelinde profesyonellerin güvendiği en popüler CiTech matkap modelleri.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Tüm ürünleri gör
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-primary">
                  {product.category}
                </p>
                <h3 className="mt-1.5 text-base font-semibold text-card-foreground">
                  {product.name}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <span className="rounded bg-secondary px-2 py-0.5">
                    {product.specs.voltage}
                  </span>
                  {product.specs.torque && (
                    <span className="rounded bg-secondary px-2 py-0.5">
                      {product.specs.torque}
                    </span>
                  )}
                  {product.specs.battery && (
                    <span className="rounded bg-secondary px-2 py-0.5">
                      {product.specs.battery}
                    </span>
                  )}
                  {!product.specs.torque && product.specs.rpm && (
                    <span className="rounded bg-secondary px-2 py-0.5">
                      {product.specs.rpm} RPM
                    </span>
                  )}
                </div>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Detayları Gör
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
