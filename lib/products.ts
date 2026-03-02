export interface Product {
  id: string
  name: string
  slug: string
  category: string
  shortDescription: string
  description: string
  image: string
  specs: {
    power: string
    voltage: string
    rpm: string
    chuckSize: string
    weight: string
    usageType: string
  }
  featured?: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "CiTech Pro 21V Darbeli Matkap – 2.0Ah",
    slug: "citech-pro-21v-darbeli-matkap-2ah",
    category: "Akülü Matkaplar",
    shortDescription: "21V güç, 23 tork kademesi ve RedLithium-Ion 2.0Ah batarya ile profesyonel performans.",
    description: "CiTech Pro 21V Darbeli Matkap, profesyonel iş sahalarının en zorlu koşullarına göre tasarlanmıştır. Fırçasız (brushless) motoru sayesinde uzun çalışma süresi ve düşük bakım maliyeti sunar. 23 tork kademesi ahşap, metal ve beton uygulamalarında hassas kontrol sağlar. RedLithium-Ion 2.0Ah batarya sistemi ile optimum enerji yönetimi. Ergonomik tutuş dizaynı uzun süreli kullanımda yorgunluğu azaltır.",
    image: "/images/products/citech-product-1.jpeg",
    specs: {
      power: "800W",
      voltage: "21V",
      rpm: "0-2000",
      chuckSize: "13mm",
      weight: "1.8 kg",
      usageType: "Profesyonel",
    },
    featured: true,
  },
  {
    id: "2",
    name: "CiTech BL Kompakt Matkap Driver",
    slug: "citech-bl-kompakt-matkap-driver",
    category: "Akülü Matkaplar",
    shortDescription: "Dar alanlarda maksimum performans için kompakt gövde ve fırçasız motor teknolojisi.",
    description: "CiTech BL Kompakt Matkap Driver, dar ve kısıtlı çalışma alanları için özel olarak tasarlanmıştır. Fırçasız (BL) motor teknolojisi, standart fırçalı motorlara kıyasla %50 daha uzun motor ömrü ve daha yüksek verimlilik sağlar. Kompakt gövde yapısı montaj, tesisat ve elektrik işlerinde rakipsiz manevra kabiliyeti sunar. Çift hız dişlisi farklı uygulamalar için optimum hız seçimi imkânı tanır.",
    image: "/images/products/citech-product-2.jpeg",
    specs: {
      power: "600W",
      voltage: "21V",
      rpm: "0-1800",
      chuckSize: "10mm",
      weight: "1.3 kg",
      usageType: "Profesyonel",
    },
    featured: true,
  },
  {
    id: "3",
    name: "CiTech BL Mini Matkap Driver",
    slug: "citech-bl-mini-matkap-driver",
    category: "Akülü Matkaplar",
    shortDescription: "Ultra kompakt tasarım, fırçasız motor – ağır işler için hafif çözüm.",
    description: "CiTech BL Mini Matkap Driver, en sıkışık alanlarda bile güvenle kullanılabilen ultra kompakt yapısıyla öne çıkar. Fırçasız motor teknolojisi sayesinde küçük gövdesine rağmen yüksek tork üretir. İnce profil, duvara yakın delme ve vida işlemlerinde eşsiz avantaj sağlar. LED çalışma ışığı karanlık ortamlarda görünürlüğü artırır. Hafif yapısı günlük yoğun kullanımda yorgunluğu minimize eder.",
    image: "/images/products/citech-product-3.jpeg",
    specs: {
      power: "500W",
      voltage: "21V",
      rpm: "0-1500",
      chuckSize: "10mm",
      weight: "1.1 kg",
      usageType: "Profesyonel",
    },
    featured: true,
  },
  {
    id: "4",
    name: "CiTech Power 21V Darbeli Matkap – 4.0Ah",
    slug: "citech-power-21v-darbeli-matkap-4ah",
    category: "Darbeli Matkaplar",
    shortDescription: "4.0Ah büyük kapasiteli batarya, tam gün kesintisiz performans için.",
    description: "CiTech Power 21V Darbeli Matkap, yüksek kapasiteli 4.0Ah RedLithium-Ion bataryası sayesinde tam gün kesintisiz çalışma imkânı sunar. Güçlü darbeli mekanizması beton ve yığma duvar delme işlemlerinde yüksek verimlilik sağlar. Çift hız dişli sistemi farklı malzemelere uyum sağlar. Smart Energy Management teknolojisi ile pil ömrü optimize edilir ve aşırı yük koruması devreye girer.",
    image: "/images/products/citech-product-4.jpeg",
    specs: {
      power: "900W",
      voltage: "21V",
      rpm: "0-2200",
      chuckSize: "13mm",
      weight: "2.2 kg",
      usageType: "Endüstriyel",
    },
    featured: true,
  },
  {
    id: "5",
    name: "CiTech Master 21V Matkap – 2.0Ah",
    slug: "citech-master-21v-matkap-2ah",
    category: "Akülü Matkaplar",
    shortDescription: "Dengeli ağırlık dağılımı ve 21V sistem gücü ile her işte güvenilir performans.",
    description: "CiTech Master 21V Matkap, denge ve güç arasındaki mükemmel uyumu temsil eder. Hafif 2.0Ah batarya ile optimize edilmiş ağırlık dağılımı, uzun süreli çalışmada yorgunluğu azaltır. Çok vitesli dişli sistemi geniş bir uygulama yelpazesine uyum sağlar. Sağlam plastik gövde darbeye dayanıklı olup iş sahalarının zorlu koşullarına karşı koruma sağlar.",
    image: "/images/products/citech-product-5.jpeg",
    specs: {
      power: "750W",
      voltage: "21V",
      rpm: "0-1900",
      chuckSize: "13mm",
      weight: "1.7 kg",
      usageType: "Profesyonel",
    },
  },
  {
    id: "6",
    name: "CiTech Ultra 21V Ağır Hizmet Matkabı – 4.0Ah",
    slug: "citech-ultra-21v-agir-hizmet-matkabi-4ah",
    category: "Darbeli Matkaplar",
    shortDescription: "En ağır iş sahası koşulları için geliştirilmiş 4.0Ah yüksek kapasiteli akülü matkap.",
    description: "CiTech Ultra 21V Ağır Hizmet Matkabı, en zorlu endüstriyel uygulamalar gözetilerek tasarlanmıştır. 4.0Ah kapasiteli RedLithium-Ion bataryası ile uzun çalışma süresi sunarken Smart Energy Management sistemi enerjiyi optimize eder. Güçlendirilmiş gövde ve metal dişli sistemi uzun ömürlü kullanım garantisi verir. Titreşim sönümleme teknolojisi operatör konforunu artırır. Her tür ahşap, metal ve beton uygulaması için ideal.",
    image: "/images/products/citech-product-6.jpeg",
    specs: {
      power: "1000W",
      voltage: "21V",
      rpm: "0-2400",
      chuckSize: "13mm",
      weight: "2.4 kg",
      usageType: "Endüstriyel",
    },
  },
  {
    id: "7",
    name: "CiTech B12 Tezgah Matkabı",
    slug: "citech-b12-tezgah-matkabi",
    category: "Tezgah Matkapları",
    shortDescription: "Atölye hassasiyetinde delme işlemleri için profesyonel tezgah matkabı.",
    description: "CiTech B12 Tezgah Matkabı, hassasiyet gerektiren delme operasyonları için atölye kalitesi sunar. Dökme demir gövde titreşimi elimine ederken beş hızlı kasnak sistemi her malzeme için optimum devir ayarı sağlar. Ayarlanabilir derinlik durdurucu tutarlı delik derinlikleri güvence altına alır, eğilebilir iş tablası açılı delmeye olanak tanır. Profesyonel atölyeler ve üretim ortamları için tasarlanmıştır.",
    image: "/images/products/drill-7.jpg",
    specs: {
      power: "550W",
      voltage: "230V",
      rpm: "580-2650",
      chuckSize: "16mm",
      weight: "25 kg",
      usageType: "Endüstriyel",
    },
  },
  {
    id: "8",
    name: "CiTech S4 SDS-Max Kırıcı Delici",
    slug: "citech-s4-sds-max-kirici-delici",
    category: "SDS Matkaplar",
    shortDescription: "En zorlu yıkım ve delme uygulamaları için maksimum güçlü SDS-Max matkap.",
    description: "CiTech S4 SDS-Max Kırıcı Delici, en ağır yıkım ve delme uygulamaları için tasarlanmış en güçlü rotary hammer modelimizdir. SDS-Max kovanı betonarme beton içinde geniş çaplı delikler açmak için büyük uçları güvenle tutar. Sabit hız elektroniği yük altında tutarlı devir sayısı sağlarken yumuşak başlangıç uç kaymasını önler. Titreşim sönümleme teknolojisi ve D-tipi tutacak uzun süreli kullanımda operatör konforunu korur.",
    image: "/images/products/drill-8.jpg",
    specs: {
      power: "1700W",
      voltage: "230V",
      rpm: "0-500",
      chuckSize: "SDS-Max",
      weight: "8.5 kg",
      usageType: "Endüstriyel",
    },
  },
  {
    id: "9",
    name: "CiTech C3 Kompakt Matkap Driver",
    slug: "citech-c3-kompakt-matkap-driver",
    category: "Matkap Driverlar",
    shortDescription: "Günlük profesyonel kullanım için hafif fırçasız matkap driver.",
    description: "CiTech C3 Kompakt Matkap Driver, profesyoneller için ideal günlük alet seçimidir. Fırçasız motoru verimli güç sunarken batarya ömrünü uzatır; ultra kompakt tasarımı dar alanlara sığar. 20 tork kademesi artı delme modu sayesinde hassas elektronik montajından ağır ahşap işlerine kadar her şeyi halleder. Tam metal kovan güvenli uç tutma sağlar, LED çalışma ışığı görünürlüğü artırır.",
    image: "/images/products/drill-9.jpg",
    specs: {
      power: "600W",
      voltage: "18V",
      rpm: "0-1800",
      chuckSize: "13mm",
      weight: "1.4 kg",
      usageType: "Profesyonel",
    },
  },
  {
    id: "10",
    name: "CiTech K1 Elmas Karot Matkabı",
    slug: "citech-k1-elmas-karot-matkabi",
    category: "Karot Matkapları",
    shortDescription: "Büyük çaplı hassas delikler için profesyonel elmas karot matkabı.",
    description: "CiTech K1 Elmas Karot Matkabı, beton, yığma duvar ve taşta temiz ve hassas delikler açmak için geliştirilmiştir. Üç hızlı dişli kutusu farklı karot uç çapları için performansı optimize ederken aşırı yük kavraması operatörü ve aleti korur. Islak ve kuru elmas karot uçlarıyla uyumludur, 200mm'ye kadar çaplarda çalışır. Sağlam yapı ve endüstriyel motor her işte güvenilir performans garantisi verir.",
    image: "/images/products/drill-10.jpg",
    specs: {
      power: "2000W",
      voltage: "230V",
      rpm: "700-2300",
      chuckSize: "1/2 BSP",
      weight: "6.8 kg",
      usageType: "Endüstriyel",
    },
  },
  {
    id: "11",
    name: "CiTech T6 Darbeli Matkap Driver",
    slug: "citech-t6-darbeli-matkap-driver",
    category: "Darbeli Matkaplar",
    shortDescription: "Çok malzemeli işler için çok yönlü akülü darbeli matkap driver.",
    description: "CiTech T6 Darbeli Matkap Driver, modern iş sahalarında profesyonellerin ihtiyaç duyduğu çok yönlülüğü sunar. Delme, darbeli delme ve vida sıkma modlarıyla malzemeler ve uygulamalar arasında sorunsuz geçiş yapar. Yüksek kapasiteli 5.0Ah batarya tam gün çalışma süresi sağlarken fırçasız motor verimliliği maksimize eder. Yardımcı kol ağır görevlerde ekstra kontrol imkânı tanır, kemer klipsi aleti her an erişilebilir tutar.",
    image: "/images/products/drill-11.jpg",
    specs: {
      power: "900W",
      voltage: "20V",
      rpm: "0-2200",
      chuckSize: "13mm",
      weight: "2.1 kg",
      usageType: "Profesyonel",
    },
  },
  {
    id: "12",
    name: "CiTech E8 Karıştırıcı Matkap",
    slug: "citech-e8-karistirici-matkap",
    category: "Karıştırıcı Matkaplar",
    shortDescription: "İnşaat malzemeleri için ağır hizmet tipi elektrikli karıştırıcı matkap.",
    description: "CiTech E8 Karıştırıcı Matkap, büyük miktarlarda inşaat malzemesi düzenli olarak karıştıran profesyoneller için tasarlanmıştır. Yüksek torklu, düşük hızlı motor çimento, harç, alçı ve boyayı kolaylıkla karıştırır. Elektronik hız kontrolü malzeme kıvamından bağımsız olarak tutarlı karıştırma hızını korur. İki hızlı dişli kutusu farklı malzeme türlerine uyum sağlar; ergonomik tutacak sistemi konforlu ve yorgunluk vermeyen çalışma deneyimi sunar.",
    image: "/images/products/drill-12.jpg",
    specs: {
      power: "1400W",
      voltage: "230V",
      rpm: "0-650",
      chuckSize: "M14",
      weight: "4.2 kg",
      usageType: "Endüstriyel",
    },
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}
