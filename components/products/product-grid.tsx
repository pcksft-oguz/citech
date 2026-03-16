import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { products } from "@/lib/products"

export function ProductGrid() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-primary">
                  {product.category}
                </p>
                <h3 className="mt-1.5 text-base font-semibold text-card-foreground">
                  {product.name}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                  {product.shortDescription}
                </p>
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
