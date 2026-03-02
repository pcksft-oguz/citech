import { Shield, DollarSign, Truck, Award } from "lucide-react"

const advantages = [
  {
    icon: Shield,
    title: "Yüksek Dayanıklılık",
    description:
      "Her CiTech aleti, en zorlu iş sahalarına dayanacak şekilde tasarlanmıştır. Kapsamlı testlerle uzun ömürlü performans güvencesi sunulur.",
  },
  {
    icon: DollarSign,
    title: "Rekabetçi Toptan Fiyatlar",
    description:
      "Üretici kaynaklı doğrudan fiyatlandırma ile işletmenize rekabet avantajı sağlayın. Bayi ortaklarına hacim indirimleri mevcuttur.",
  },
  {
    icon: Truck,
    title: "Hızlı Global Tedarik",
    description:
      "Optimize edilmiş lojistik altyapısıyla 40+ ülkeye hızlı teslimat. Dedicated depo sistemi bekleme sürelerini minimize eder.",
  },
  {
    icon: Award,
    title: "Smart Energy Management",
    description:
      "CiTech'in akıllı enerji yönetim sistemi, 21V RedLithium-Ion bataryadan maksimum çalışma süresi çıkarır ve aşırı yük koruması sağlar.",
  },
]

export function AdvantagesSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Neden Bayiler CiTech'i Tercih Ediyor?
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Endüstriyel mühendislik kalitesini toptan verimlilikle bir araya
            getirerek dağıtım ortaklarımıza rakipsiz bir değer sunuyoruz.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage) => (
            <div
              key={advantage.title}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                <advantage.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">
                {advantage.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
