import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Target, Eye, Shield, Zap, Users, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "CiTech Tools hakkında – Master of Power. 21V brushless teknolojisi ve RedLithium-Ion batarya sistemiyle profesyonellere güç sunan global marka.",
}

const values = [
  {
    icon: Shield,
    title: "Uzlaşmasız Kalite",
    description:
      "Her ürün, ortaklarımıza ulaşmadan önce kapsamlı testlerden geçer ve uluslararası ISO standartlarını karşılar.",
  },
  {
    icon: Zap,
    title: "İnovasyon Odaklı",
    description:
      "Ürün yelpazemize en yeni motor teknolojileri ve ergonomik tasarımları katmak için Ar-Ge'ye sürekli yatırım yapıyoruz.",
  },
  {
    icon: Users,
    title: "Ortak Odaklı",
    description:
      "Başarımız, dağıtım ortaklarımızın başarısı üzerine inşa edilmiştir. Her adımda özel destek sunuyoruz.",
  },
  {
    icon: Globe,
    title: "Küresel Erişim",
    description:
      "40'tan fazla ülkeye yayılan lojistik altyapımızla dünya genelindeki pazarlara güvenilir ve hızlı teslimat yapıyoruz.",
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-industrial py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-industrial-foreground md:text-4xl lg:text-5xl">
            CiTech Tools Hakkında
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-industrial-foreground/60">
            Master of Power. Profesyonel güç aletleri alanında önde gelen toptan üretici
            ve tedarikçi olarak 21V brushless teknolojisinin öncüsüyüz.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/about-factory.jpg"
                alt="CiTech manufacturing facility"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Dünyayı İnşa Eden Profesyoneller İçin Üretildi
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                CiTech Tools, tek bir misyonla kuruldu: endüstriyel kullanımın
                en yüksek taleplerini karşılayan profesyonel düzeyde güç aleti
                çözümleri sunmak. 21V fırçasız motor teknolojisi ve RedLithium-Ion
                batarya sistemiyle donatılmış 12 özel matkap modelimizin her biri,
                belirli bir profesyonel uygulama seti için mühendislenmiştir.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                40'tan fazla ülkede 500'ü aşkın distribütör, donanım zinciri ve
                inşaat firması tarafından tercih edilen küresel bir toptan tedarik
                ortağına dönüştük. Kalite, rekabetçi fiyatlandırma ve güvenilir
                tedarike olan bağlılığımız; performanstan ödün vermeyen işletmelerin
                tercih ettiği marka olmamızı sağladı.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex items-start gap-6 rounded-lg border border-border bg-card p-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-card-foreground">
                  Misyonumuz
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Dünya genelindeki profesyonelleri ve işletmeleri rekabetçi toptan
                  fiyatlarla sunulan güvenilir, yüksek performanslı güç aletleriyle
                  güçlendirmek. Performanstan ödün vermeyen her distribütör ve
                  müteahhit için endüstriyel kaliteyi erişilebilir kılmak için varız.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 rounded-lg border border-border bg-card p-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-card-foreground">
                  Vizyonumuz
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Toptan profesyonel güç aleti çözümlerinde küresel standart olmak;
                  mühendislik mükemmeliyeti, tedarik zinciri güvenilirliği ve hizmet
                  ettiğimiz her distribütörle gerçek ortaklık anlayışıyla tanınmak.
                  Her profesyonelin güvendiği aletlere erişebildiği bir dünya hayal ediyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Bizi Harekete Geçiren Değerler
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Temel değerlerimiz her kararı, her ürünü ve her ortaklığı şekillendirir.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-industrial py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-industrial-foreground md:text-4xl">
            Güvenebileceğiniz Bir Marka ile Ortaklık
          </h2>
          <p className="mt-4 text-pretty text-industrial-foreground/60">
            İster donanım zinciri, ister bölgesel distribütör, ister inşaat firması
            olun — CiTech'in ürün yelpazesi ve tedarik altyapısı büyümenizi desteklemeye hazır.
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
              className="inline-flex items-center gap-2 rounded-md border border-industrial-foreground/20 bg-transparent px-6 py-3 text-sm font-medium text-industrial-foreground transition-colors hover:bg-industrial-foreground/10"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
