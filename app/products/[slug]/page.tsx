import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Check } from "lucide-react"
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

  const isDetailedModel = !!product.specs.gearCount

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
            <div className="relative aspect-square overflow-hidden rounded-lg bg-white">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-6"
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

                {isDetailedModel ? (
                  /* Ci-701..706 için detaylı bullet-point spec listesi */
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        <span className="font-medium">Makine gerilimi:</span>{" "}
                        {product.specs.voltage}
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        <span className="font-medium">Vites sayısı:</span>{" "}
                        {product.specs.gearCount}
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        <span className="font-medium">Rölanti hızı Pozisyon I:</span>{" "}
                        {product.specs.idleSpeedPos1}
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        <span className="font-medium">Rölanti hızı Pozisyon II:</span>{" "}
                        {product.specs.idleSpeedPos2}
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        <span className="font-medium">Yüksüz hızı:</span>{" "}
                        {product.specs.noLoadSpeed}
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        <span className="font-medium">Tork:</span>{" "}
                        {product.specs.torque}
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        <span className="font-medium">Tork konumları:</span>{" "}
                        {product.specs.torqueSettings}
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="font-medium">Sağa / sola çevir</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        <span className="font-medium">Matkap mandreni genişliği:</span>{" "}
                        {product.specs.chuckSize}
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="font-medium">LED çalışma lambası</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="font-medium">Yumuşak kavrama</span>
                    </li>
                    {product.specs.battery && (
                      <li className="flex items-start gap-2 text-sm text-foreground">
                        <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>
                          <span className="font-medium">Batarya kapasitesi:</span>{" "}
                          {product.specs.battery}
                        </span>
                      </li>
                    )}
                  </ul>
                ) : (
                  /* Diğer ürünler için genel spec grid */
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {[
                      { label: "Voltaj", value: product.specs.voltage },
                      ...(product.specs.power ? [{ label: "Güç", value: product.specs.power }] : []),
                      ...(product.specs.rpm ? [{ label: "Devir", value: product.specs.rpm + " RPM" }] : []),
                      { label: "Mandren", value: product.specs.chuckSize },
                      ...(product.specs.weight ? [{ label: "Ağırlık", value: product.specs.weight }] : []),
                      ...(product.specs.usageType ? [{ label: "Kullanım", value: product.specs.usageType }] : []),
                    ].map((spec) => (
                      <div
                        key={spec.label}
                        className="rounded-lg border border-border bg-card p-4"
                      >
                        <p className="text-xs text-muted-foreground">{spec.label}</p>
                        <p className="mt-0.5 text-sm font-semibold text-card-foreground">
                          {spec.value}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
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
