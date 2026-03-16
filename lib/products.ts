export interface Product {
  id: string
  name: string
  slug: string
  category: string
  shortDescription: string
  description: string
  image: string
  specs: {
    voltage: string
    chuckSize: string
    // Akülü matkap detay özellikleri (Ci-701..706)
    gearCount?: string
    idleSpeedPos1?: string
    idleSpeedPos2?: string
    noLoadSpeed?: string
    torque?: string
    torqueSettings?: string
    battery?: string
    // Diğer ürünler için genel özellikler
    power?: string
    rpm?: string
    weight?: string
    usageType?: string
  }
  featured?: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "CiTech Ci-701 Akülü Matkap Driver",
    slug: "citech-ci-701",
    category: "Akülü Matkaplar",
    shortDescription: "21V güç, 65 Nm tork ve 20+1 kademe tork ayarıyla profesyonel performans.",
    description: "CiTech Ci-701 Akülü Matkap Driver, profesyonel iş sahalarının en zorlu koşullarına göre tasarlanmıştır. Fırçasız (brushless) motoru sayesinde uzun çalışma süresi ve düşük bakım maliyeti sunar. 20+1 tork kademesi ahşap, metal ve beton uygulamalarında hassas kontrol sağlar. RedLithium-Ion 2.0Ah batarya sistemi ile optimum enerji yönetimi. Ergonomik tutuş dizaynı uzun süreli kullanımda yorgunluğu azaltır.",
    image: "/images/products/citech-product-1.jpeg",
    specs: {
      voltage: "21V",
      gearCount: "2",
      idleSpeedPos1: "0-450 / dak",
      idleSpeedPos2: "0-2000 / dak",
      noLoadSpeed: "0-30000 bpm",
      torque: "65 Nm",
      torqueSettings: "20 + 1 kademe",
      chuckSize: "10mm",
      battery: "2.0Ah",
    },
    featured: true,
  },
  {
    id: "2",
    name: "CiTech Ci-702 Akülü Matkap Driver",
    slug: "citech-ci-702",
    category: "Akülü Matkaplar",
    shortDescription: "21V, 65 Nm tork ve 4.0Ah yüksek kapasiteli batarya ile tam gün performans.",
    description: "CiTech Ci-702 Akülü Matkap Driver, Ci-701 ile aynı güçlü teknik altyapıya sahip olup yüksek kapasiteli 4.0Ah bataryasıyla tam gün kesintisiz çalışma imkânı sunar. Fırçasız motor teknolojisi, standart fırçalı motorlara kıyasla %50 daha uzun motor ömrü ve daha yüksek verimlilik sağlar. 20+1 tork kademesi geniş uygulama yelpazesinde hassas kontrol imkânı tanır.",
    image: "/images/products/citech-product-2.jpeg",
    specs: {
      voltage: "21V",
      gearCount: "2",
      idleSpeedPos1: "0-450 / dak",
      idleSpeedPos2: "0-2000 / dak",
      noLoadSpeed: "0-30000 bpm",
      torque: "65 Nm",
      torqueSettings: "20 + 1 kademe",
      chuckSize: "10mm",
      battery: "4.0Ah",
    },
    featured: true,
  },
  {
    id: "3",
    name: "CiTech Ci-703 Akülü Matkap Driver",
    slug: "citech-ci-703",
    category: "Akülü Matkaplar",
    shortDescription: "Kompakt 16V sistem, 65 Nm tork – dar alanlarda eşsiz manevra kabiliyeti.",
    description: "CiTech Ci-703 Akülü Matkap Driver, dar ve kısıtlı çalışma alanları için özel olarak tasarlanmıştır. 16V sistemi ve 65 Nm torku sayesinde kompakt gövdesine rağmen yüksek performans üretir. Çift hız dişlisi farklı uygulamalar için optimum hız seçimi imkânı tanır. Montaj, tesisat ve elektrik işlerinde rakipsiz manevra kabiliyeti sunar.",
    image: "/images/products/citech-product-3.jpeg",
    specs: {
      voltage: "16V",
      gearCount: "2",
      idleSpeedPos1: "0-450 / dak",
      idleSpeedPos2: "0-2000 / dak",
      noLoadSpeed: "0-30000 bpm",
      torque: "65 Nm",
      torqueSettings: "20 + 1 kademe",
      chuckSize: "10mm",
    },
    featured: true,
  },
  {
    id: "4",
    name: "CiTech Ci-704 Akülü Matkap Driver",
    slug: "citech-ci-704",
    category: "Darbeli Matkaplar",
    shortDescription: "21V güç, 65 Nm tork – ağır iş sahası koşulları için endüstriyel performans.",
    description: "CiTech Ci-704 Akülü Matkap Driver, yüksek kapasiteli bataryası ve güçlü 21V sistemi sayesinde tam gün kesintisiz çalışma imkânı sunar. 65 Nm yüksek torku ile ağır delme ve vida sıkma işlemlerinde üstün verim sağlar. Smart Energy Management teknolojisi ile pil ömrü optimize edilir ve aşırı yük koruması devreye girer.",
    image: "/images/products/citech-product-4.jpeg",
    specs: {
      voltage: "21V",
      gearCount: "2",
      idleSpeedPos1: "0-450 / dak",
      idleSpeedPos2: "0-2000 / dak",
      noLoadSpeed: "0-30000 bpm",
      torque: "65 Nm",
      torqueSettings: "20 + 1 kademe",
      chuckSize: "10mm",
    },
    featured: true,
  },
  {
    id: "5",
    name: "CiTech Ci-705 Akülü Matkap Driver",
    slug: "citech-ci-705",
    category: "Akülü Matkaplar",
    shortDescription: "Dengeli 18V sistem, 65 Nm tork – her işte güvenilir ve hafif performans.",
    description: "CiTech Ci-705 Akülü Matkap Driver, denge ve güç arasındaki mükemmel uyumu temsil eder. 18V sistemi ve 65 Nm torku ile optimize edilmiş ağırlık dağılımı uzun süreli çalışmada yorgunluğu azaltır. Çok vitesli dişli sistemi geniş bir uygulama yelpazesine uyum sağlar. Sağlam gövde yapısı iş sahalarının zorlu koşullarına karşı koruma sağlar.",
    image: "/images/products/citech-product-5.jpeg",
    specs: {
      voltage: "18V",
      gearCount: "2",
      idleSpeedPos1: "0-450 / dak",
      idleSpeedPos2: "0-2000 / dak",
      noLoadSpeed: "0-30000 bpm",
      torque: "65 Nm",
      torqueSettings: "20 + 1 kademe",
      chuckSize: "10mm",
    },
  },
  {
    id: "6",
    name: "CiTech Ci-706 Akülü Matkap Driver",
    slug: "citech-ci-706",
    category: "Darbeli Matkaplar",
    shortDescription: "18V güç, 65 Nm tork – en ağır iş sahası koşulları için üstün dayanıklılık.",
    description: "CiTech Ci-706 Akülü Matkap Driver, en zorlu endüstriyel uygulamalar gözetilerek tasarlanmıştır. 18V sistemi ve 65 Nm torku ile uzun çalışma süresi sunarken Smart Energy Management sistemi enerjiyi optimize eder. Güçlendirilmiş gövde ve metal dişli sistemi uzun ömürlü kullanım garantisi verir. Titreşim sönümleme teknolojisi operatör konforunu artırır.",
    image: "/images/products/citech-product-6.jpeg",
    specs: {
      voltage: "18V",
      gearCount: "2",
      idleSpeedPos1: "0-450 / dak",
      idleSpeedPos2: "0-2000 / dak",
      noLoadSpeed: "0-30000 bpm",
      torque: "65 Nm",
      torqueSettings: "20 + 1 kademe",
      chuckSize: "10mm",
    },
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}
