import type { Metadata } from "next"
import { ProductGrid } from "@/components/products/product-grid"

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "CiTech'in 12 profesyonel matkap modelini keşfedin. 21V akülü matkaplardan endüstriyel kırıcı delicilere kadar her uygulama için doğru aleti bulun.",
}

export default function ProductsPage() {
  return (
    <>
      <section className="bg-industrial py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-industrial-foreground md:text-4xl lg:text-5xl">
            Ürünlerimiz
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-industrial-foreground/60">
            CiTech'in profesyonel güç aleti kataloğunu keşfedin. Her model maksimum
            performans için geliştirilmiş ve en zorlu ortamlarda dayanacak şekilde üretilmiştir.
          </p>
        </div>
      </section>
      <ProductGrid />
    </>
  )
}
