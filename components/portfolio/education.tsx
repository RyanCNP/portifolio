import { GraduationCap } from "lucide-react"

const educationItems = [
  {
    degree: "Tecnologo em Desenvolvimento de Software Multiplataforma",
    institution: "Fatec Votorantim",
    period: "2024 - 2026 (previsto)",
    status: "Cursando 5o semestre",
    isCurrent: true,
  },
  {
    degree: "Ensino Medio + Tecnico em Automacao Industrial",
    institution: "Etec Armando Pannunzio",
    period: "2021 - 2023",
    status: "Concluido",
    isCurrent: false,
  },
]

export function Education() {
  return (
    <section id="formacao" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section Label */}
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-primary">03.</span>
          <h2 className="text-2xl font-bold text-foreground">Formacao</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {educationItems.map((item, index) => (
              <div
                key={item.degree}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-5 top-0 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-background md:left-1/2">
                  <GraduationCap size={16} className="text-primary" />
                </div>

                {/* Card */}
                <div
                  className={`ml-14 w-full md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30">
                    {item.isCurrent && (
                      <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                        Atual
                      </span>
                    )}
                    <h3 className="text-base font-semibold text-foreground leading-snug">
                      {item.degree}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-primary">
                      {item.institution}
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <span className="font-mono text-xs text-muted-foreground">
                        {item.period}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
