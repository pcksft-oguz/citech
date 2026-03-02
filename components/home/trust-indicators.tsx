const stats = [
  { value: "21V", label: "Güçlü Voltaj Sistemi" },
  { value: "500+", label: "Bayi Ortağı" },
  { value: "40+", label: "Ülkede Dağıtım" },
  { value: "BL", label: "Fırçasız Motor Teknolojisi" },
]

export function TrustIndicators() {
  return (
    <section className="bg-industrial py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-industrial-foreground md:text-4xl">
            Dünya Genelinde Profesyonellerin Güvendiği Marka
          </h2>
          <p className="mt-4 text-pretty text-industrial-foreground/60">
            CiTech Tools, 21V sistemi ve brushless motor teknolojisiyle
            güç aleti distribütörlerinin tercih ettiği küresel toptan ortağıdır.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-primary md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-industrial-foreground/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
