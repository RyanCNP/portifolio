"use client"

const skills = [
  {
    name: "Node.js",
    level: 80,
    category: "backend",
  },
  {
    name: "Express.js",
    level: 75,
    category: "backend",
  },
  {
    name: "TypeScript",
    level: 70,
    category: "backend",
  },
  {
    name: "JavaScript",
    level: 85,
    category: "frontend",
  },
  {
    name: "API REST",
    level: 75,
    category: "backend",
  },
  {
    name: "HTML",
    level: 80,
    category: "frontend",
  },
  {
    name: "CSS",
    level: 65,
    category: "frontend",
  },
  {
    name: "Git & GitHub",
    level: 75,
    category: "tools",
  },
  {
    name: "Docker",
    level: 50,
    category: "tools"
  }
]

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="group">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="font-mono text-xs text-muted-foreground">
          {level}%
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-primary transition-all duration-700 ease-out group-hover:brightness-125"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  const backendSkills = skills.filter((s) => s.category === "backend")
  const frontendSkills = skills.filter((s) => s.category === "frontend")
  const toolSkills = skills.filter((s) => s.category === "tools")

  return (
    <section id="habilidades" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section Label */}
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-primary">02.</span>
          <h2 className="text-2xl font-bold text-foreground">
            Competencias Tecnicas
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {/* Backend */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <span className="h-px w-4 bg-primary" />
              Backend
            </h3>
            <div className="space-y-5">
              {backendSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <span className="h-px w-4 bg-primary" />
              Frontend
            </h3>
            <div className="space-y-5">
              {frontendSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          {/* Ferramentas */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <span className="h-px w-4 bg-primary" />
              Ferramentas
            </h3>
            <div className="space-y-5">
              {toolSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
