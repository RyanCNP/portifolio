'use client'

import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "SiTec",
    description: "O Sitec é uma plataforma que visa trazer mais visibilidade para as empresas com certificações de meio-ambiente.",
    technologies: ["Angular", "TypeScript", "CSS",],
    github: "https://github.com/GLFspedine/Sitecproject",
    demo: "",
  },
  {
    title: "SaneaSP",
    description: "O SaneaSP é uma plataforma que visa trazer mais visibilidade para os problemas de saneamento nas cidades do Estado de São Paulo",
    technologies: ["Express.js", "Node.js", "PostgreSQL", "Angular", "TypeScript", "CSS"],
    github: "https://github.com/MathGueff/SaneaSP",
    demo: "",
  },
  {
    title: "FaculRide",
    description: "A FaculRide é uma plataforma de caronas para estudantes universitários, facilitando a conexão entre aqueles que buscam ou oferecem caronas para suas instituições de ensino.",
    technologies: ["Angular", "CSS", "TypeScript", "PostgreSQL", "Express.js", "Node.js"],
    github: "https://github.com/devDavyRibeiro/FaculRide-Mobile",
    demo: "",
  },
]

export function Projects() {
  return (
    <section id="projetos" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section Label */}
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-primary">02.</span>
          <h2 className="text-2xl font-bold text-foreground">Meus Projetos</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <h3 className="mb-2 text-xl font-semibold">
                {project.title}
              </h3>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">
                {project.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Github className="h-4 w-4" />
                  Código
                </Link>
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-medium transition-colors hover:bg-accent"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
