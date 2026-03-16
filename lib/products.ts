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
    torque?: string
    torqueSettings?: string
    battery?: string
    drillingSteel?: string
    drillingWood?: string
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
    name: "CiTech Ci-701 Akülü Darbeli Matkap",
    slug: "citech-ci-701",
    category: "Darbeli Matkaplar",
    shortDescription: "21V güç, 65 Nm tork, 13mm mandren ve 2.0Ah RedLithium-Ion batarya ile profesyonel performans.",
    description: "CiTech Ci-701 Akülü Darbeli Matkap, profesyonel iş sahalarının en zorlu koşullarına göre tasarlanmıştır. Fırçasız (brushless) motoru sayesinde uzun çalışma süresi ve düşük bakım maliyeti sunar. 13mm mandren kapasitesi ve 65 Nm maksimum tork ile ahşap, metal uygulamalarında üstün performans sağlar. RedLithium-Ion 2.0Ah batarya sistemi ile optimum enerji yönetimi. LED çalışma lambası, ileri/geri dönüş ve ergonomik yumuşak kavrama ile operatör konforunu artırır.",
    image: "/images/products/citech-product-1.jpeg",
    specs: {
      voltage: "21V",
      gearCount: "2",
      idleSpeedPos1: "0-450 / dak",
      idleSpeedPos2: "0-2000 / dak",
      torque: "65 Nm",
      torqueSettings: "20 + 1 kademe",
      chuckSize: "13mm",
      battery: "2.0Ah RedLithium-Ion",
      drillingSteel: "Ø13mm",
      drillingWood: "Ø32mm",
    },
    featured: true,
  },
  {
    id: "2",
    name: "CiTech Ci-702 Akülü Darbeli Matkap",
    slug: "citech-ci-702",
    category: "Darbeli Matkaplar",
    shortDescription: "21V, 65 Nm tork, 13mm mandren ve 4.0Ah yüksek kapasiteli batarya ile tam gün performans.",
    description: "CiTech Ci-702 Akülü Darbeli Matkap, yüksek kapasiteli 4.0Ah bataryasıyla tam gün kesintisiz çalışma imkânı sunar. Fırçasız motor teknolojisi, standart fırçalı motorlara kıyasla %50 daha uzun motor ömrü ve daha yüksek verimlilik sağlar. 13mm mandren kapasitesi ve 65 Nm maksimum tork ile geniş uygulama yelpazesinde hassas kontrol imkânı tanır. LED çalışma lambası ve ileri/geri dönüş özelliği standart donanımdır.",
    image: "/images/products/citech-product-4.jpeg",
    specs: {
      voltage: "21V",
      gearCount: "2",
      idleSpeedPos1: "0-450 / dak",
      idleSpeedPos2: "0-2000 / dak",
      torque: "65 Nm",
      torqueSettings: "20 + 1 kademe",
      chuckSize: "13mm",
      battery: "4.0Ah Lithium-Ion",
      drillingSteel: "Ø13mm",
      drillingWood: "Ø32mm",
    },
    featured: true,
  },
  {
    id: "3",
    name: "CiTech Ci-703 Akülü Darbeli Matkap",
    slug: "citech-ci-703",
    category: "Darbeli Matkaplar",
    shortDescription: "21V güç, 65 Nm tork, 13mm mandren ve 2.0Ah batarya – hafif ve güçlü performans.",
    description: "CiTech Ci-703 Akülü Darbeli Matkap, 21V fırçasız motor teknolojisi ve 2.0Ah batarya ile güç ve hafiflik dengesini mükemmel şekilde kurar. 13mm mandren kapasitesi ve 65 Nm maksimum tork ile ahşap ve metal uygulamalarında üstün performans sağlar. Çift hız dişlisi farklı uygulamalar için optimum hız seçimi imkânı tanır. LED çalışma lambası, ileri/geri dönüş ve yumuşak kavrama standart donanımdır.",
    image: "/images/products/citech-product-5.jpeg",
    specs: {
      voltage: "21V",
      gearCount: "2",
      idleSpeedPos1: "0-450 / dak",
      idleSpeedPos2: "0-2000 / dak",
      torque: "65 Nm",
      torqueSettings: "20 + 1 kademe",
      chuckSize: "13mm",
      battery: "2.0Ah Lithium-Ion",
      drillingSteel: "Ø13mm",
      drillingWood: "Ø32mm",
    },
    featured: true,
  },
  {
    id: "4",
    name: "CiTech Ci-704 Akülü Darbeli Matkap",
    slug: "citech-ci-704",
    category: "Darbeli Matkaplar",
    shortDescription: "21V güç, 65 Nm tork, 13mm mandren ve 4.0Ah batarya – ağır iş sahası koşulları için endüstriyel performans.",
    description: "CiTech Ci-704 Akülü Darbeli Matkap, yüksek kapasiteli 4.0Ah bataryası ve güçlü 21V fırçasız motoru sayesinde tam gün kesintisiz çalışma imkânı sunar. 13mm mandren kapasitesi ve 65 Nm yüksek tork ile ağır delme ve vida sıkma işlemlerinde üstün verim sağlar. Smart Energy Management teknolojisi ile pil ömrü optimize edilir. LED çalışma lambası ve ileri/geri dönüş standart donanımdır.",
    image: "/images/products/citech-product-4.jpeg",
    specs: {
      voltage: "21V",
      gearCount: "2",
      idleSpeedPos1: "0-450 / dak",
      idleSpeedPos2: "0-2000 / dak",
      torque: "65 Nm",
      torqueSettings: "20 + 1 kademe",
      chuckSize: "13mm",
      battery: "4.0Ah Lithium-Ion",
      drillingSteel: "Ø13mm",
      drillingWood: "Ø32mm",
    },
    featured: true,
  },
  {
    id: "5",
    name: "CiTech Ci-705 Akülü Darbeli Matkap",
    slug: "citech-ci-705",
    category: "Darbeli Matkaplar",
    shortDescription: "Kompakt 18V sistem, 65 Nm tork, 10mm mandren – hafif ve dengeli performans.",
    description: "CiTech Ci-705 Akülü Darbeli Matkap, kompakt tasarımı ve 18V fırçasız motoru ile denge ve güç arasındaki mükemmel uyumu temsil eder. 10mm mandren kapasitesi ve 65 Nm tork ile optimize edilmiş ağırlık dağılımı uzun süreli çalışmada yorgunluğu azaltır. X2 Lithium-Ion batarya sistemi ile kesintisiz güç sağlar. LED çalışma lambası, ileri/geri dönüş ve yumuşak kavrama standart donanımdır.",
    image: "/images/products/citech-product-3.jpeg",
    specs: {
      voltage: "18V",
      gearCount: "2",
      idleSpeedPos1: "0-450 / dak",
      idleSpeedPos2: "0-2000 / dak",
      torque: "65 Nm",
      torqueSettings: "20 + 1 kademe",
      chuckSize: "10mm",
      drillingSteel: "Ø13mm",
      drillingWood: "Ø32mm",
    },
  },
  {
    id: "6",
    name: "CiTech Ci-706 Akülü Darbeli Matkap",
    slug: "citech-ci-706",
    category: "Darbeli Matkaplar",
    shortDescription: "Kompakt 18V güç, 65 Nm tork, 10mm mandren – en ağır iş sahası koşulları için üstün dayanıklılık.",
    description: "CiTech Ci-706 Akülü Darbeli Matkap, en zorlu endüstriyel uygulamalar gözetilerek tasarlanmıştır. 18V fırçasız motoru ve 65 Nm torku ile uzun çalışma süresi sunarken Smart Energy Management sistemi enerjiyi optimize eder. 10mm mandren kapasitesi ile kompakt gövde, dar alanlarda manevra kolaylığı sağlar. X2 Lithium-Ion batarya, LED çalışma lambası ve ileri/geri dönüş standart donanımdır.",
    image: "/images/products/citech-product-2.jpeg",
    specs: {
      voltage: "18V",
      gearCount: "2",
      idleSpeedPos1: "0-450 / dak",
      idleSpeedPos2: "0-2000 / dak",
      torque: "65 Nm",
      torqueSettings: "20 + 1 kademe",
      chuckSize: "10mm",
      drillingSteel: "Ø13mm",
      drillingWood: "Ø32mm",
    },
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}
