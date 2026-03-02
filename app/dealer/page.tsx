import type { Metadata } from "next"
import { DealerForm } from "@/components/dealer/dealer-form"
import { Package, TrendingUp, Headphones, Truck, BadgePercent, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Become a Dealer",
  description:
    "CiTech Tools yetkili bayisi olun. Rekabetçi toptan fiyatlar, özel destek ve premium güç aletleri ile işinizi büyütün.",
}

const benefits = [
  {
    icon: BadgePercent,
    title: "Rekabetçi Toptan Fiyatlar",
    description:
      "Marjlarınızı maksimize eden kademeli hacim indirimleriyle üreticiden doğrudan fiyatlandırmaya erişin.",
  },
  {
    icon: Package,
    title: "Tam Ürün Kataloğu",
    description:
      "Müşterilerinize 12 profesyonel matkap modelinin tamamını tam pazarlama desteğiyle sunun.",
  },
  {
    icon: Truck,
    title: "Öncelikli Kargo",
    description:
      "Bayi ortakları tüm siparişlerinde hızlandırılmış işlem ve öncelikli kargo hizmetinden yararlanır.",
  },
  {
    icon: Headphones,
    title: "Özel Hesap Yöneticisi",
    description:
      "Her bayiye kişiselleştirilmiş destek ve sipariş yönetimi için özel bir hesap yöneticisi atanır.",
  },
  {
    icon: TrendingUp,
    title: "Pazarlama Materyalleri",
    description:
      "Profesyonel ürün katalogları, görsel varlıklar ve dijital pazarlama kaynaklarına erişin.",
  },
  {
    icon: Globe,
    title: "Bölge Koruma",
    description:
      "Nitelikli bayiler, belirlenmiş coğrafi bölgelerde pazar münhasırlığı avantajından yararlanır.",
  },
]

export default function DealerPage() {
  return (
    <>
      <section className="bg-industrial py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-industrial-foreground md:text-4xl lg:text-5xl">
            CiTech Bayisi Olun
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-industrial-foreground/60">
            Yetkili bayiler ve satıcılardan oluşan küresel ağımıza katılın. Rekabetçi
            toptan fiyatlar, premium ürünler ve özel ortak desteğine erişin.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Ortak Avantajları
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              CiTech bayileri, işletmenizin büyümesine yönelik tasarlanmış
              kapsamlı bir avantaj paketinden yararlanır.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <benefit.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Bayi Başvurusu Yapın
              </h2>
              <p className="mt-4 text-muted-foreground">
                Aşağıdaki formu doldurun; ortaklık ekibimiz başvurunuzu
                değerlendirsin. Genellikle 2 iş günü içinde geri dönüyoruz.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    1
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Başvuru Gönderin</p>
                    <p className="text-sm text-muted-foreground">Şirket bilgilerinizle bayi başvuru formunu eksiksiz doldurun.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    2
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Değerlendirme Süreci</p>
                    <p className="text-sm text-muted-foreground">Ekibimiz başvurunuzu inceler ve pazar potansiyelini değerlendirir.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    3
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Aramıza Hoş Geldiniz</p>
                    <p className="text-sm text-muted-foreground">Bayi sözleşmenizi, fiyat kataloğunuzu ve hesap yöneticinizi alın.</p>
                  </div>
                </div>
              </div>
            </div>

            <DealerForm />
          </div>
        </div>
      </section>
    </>
  )
}
