import { User, Target, Zap, Users } from "lucide-react"

const qualities = [
  {
    icon: Users,
    title: "Trabalho em Equipe",
    description: "Boa comunicacao e colaboracao em projetos.",
  },
  {
    icon: Zap,
    title: "Proatividade",
    description: "Senso de responsabilidade e iniciativa.",
  },
  {
    icon: Target,
    title: "Organizacao",
    description: "Comprometimento e foco em resultados.",
  },
  {
    icon: User,
    title: "Aprendizado Rapido",
    description: "Facilidade para absorver novas tecnologias.",
  },
]

export function About() {
  return (
    <section id="sobre" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section Label */}
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-primary">01.</span>
          <h2 className="text-2xl font-bold text-foreground">Sobre mim</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Text */}
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Sou um desenvolvedor em inicio de carreira, com foco em{" "}
              <span className="text-foreground font-medium">desenvolvimento backend</span>,
              utilizando tecnologias como Node.js, Express.js e TypeScript para
              construir APIs REST robustas e eficientes.
            </p>
            <p>
              Atualmente estou cursando o 5o semestre de{" "}
              <span className="text-foreground font-medium">
                Desenvolvimento de Software Multiplataforma
              </span>{" "}
              na Fatec Votorantim, com previsao de conclusao em 2026. Tambem possuo
              formacao tecnica em Automacao Industrial pela Etec Armando Pannunzio.
            </p>
            <p>
              Estou aberto a atuar em funcoes{" "}
              <span className="text-primary font-medium">fullstack</span> ou{" "}
              <span className="text-primary font-medium">frontend</span>, conforme a
              necessidade do time, e busco minha primeira oportunidade profissional
              na area de tecnologia.
            </p>
          </div>

          {/* Qualities Grid */}
          <div className="grid grid-cols-2 gap-4">
            {qualities.map((quality) => (
              <div
                key={quality.title}
                className="group rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30"
              >
                <quality.icon
                  size={20}
                  className="mb-3 text-primary transition-transform group-hover:scale-110"
                />
                <h3 className="text-sm font-semibold text-foreground">
                  {quality.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {quality.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
