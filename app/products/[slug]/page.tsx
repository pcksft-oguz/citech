import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Zap, Battery, Gauge, CircleDot, Weight, Wrench } from "lucide-react"
import { getProductBySlug, products } from "@/lib/products"

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}

  return {
    title: product.name,
    description: product.shortDescription,
  }
}

const specIcons = {
  power: Zap,
  voltage: Battery,
  rpm: Gauge,
  chuckSize: CircleDot,
  weight: Weight,
  usageType: Wrench,
}

const specLabels: Record<string, string> = {
  power: "Güç",
  voltage: "Voltaj",
  rpm: "Devir Aralığı",
  chuckSize: "Mandren Boyutu",
  weight: "Ağırlık",
  usageType: "Kullanım Tipi",
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <>
      <section className="bg-background py-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Ürünlere Dön
          </Link>
        </div>
      </section>

      <section className="bg-background pb-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm font-medium uppercase tracking-wider text-primary">
                {product.category}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {product.name}
              </h1>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              <div className="mt-8">
                <h2 className="text-lg font-semibold text-foreground">
                  Teknik Özellikler
                </h2>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {Object.entries(product.specs).map(([key, value]) => {
                    const Icon = specIcons[key as keyof typeof specIcons]
                    return (
                      <div
                        key={key}
                        className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">
                            {specLabels[key]}
                          </p>
                          <p className="text-sm font-semibold text-card-foreground">
                            {value}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Toptan Fiyat Al
                </Link>
                <Link
                  href="/dealer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-medium text-card-foreground transition-colors hover:bg-secondary"
                >
                  Bayi Ol
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
