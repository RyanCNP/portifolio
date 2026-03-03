import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react"

const contactLinks = [
  {
    icon: Mail,
    label: "E-mail",
    value: "ryan.cnp234@gmail.com",
    href: "mailto:ryanjobs234@gmail.com",
  },
  {
    icon: Phone,
    label: "Celular",
    value: "+55 (15) 99699-9062",
    href: "tel:+5515996999062",
  },
  {
    icon: MapPin,
    label: "Localizacao",
    value: "Votorantim - SP",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "RyanCNP",
    href: "https://github.com/RyanCNP",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Ryan Carlo Negretti Pereira",
    href: "https://www.linkedin.com/in/ryan-carlo-negretti-pereira-8709b1292/",
  },
]

export function Contact() {
  return (
    <section id="contato" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section Label */}
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-primary">04.</span>
          <h2 className="text-2xl font-bold text-foreground">Contato</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Left: CTA */}
          <div>
            <h3 className="text-xl font-semibold text-foreground text-balance">
              Vamos conversar?
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed text-pretty">
              Estou disponivel para inicio imediato e busco minha primeira
              oportunidade para ingressar no mercado de trabalho. Fique a vontade
              para entrar em contato.
            </p>

            {/* CTA Button */}
            <a
              href="mailto:ryan.cnp234@gmail.com"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
            >
              <Mail size={16} />
              Enviar e-mail
            </a>
          </div>

          {/* Right: Contact info */}
          <div className="space-y-4">
            {contactLinks.map((item) => {
              const Wrapper = item.href ? "a" : "div"
              const wrapperProps = item.href
                ? { href: item.href, target: item.href.startsWith("http") ? "_blank" : undefined, rel: item.href.startsWith("http") ? "noopener noreferrer" : undefined }
                : {}

              return (
                <Wrapper
                  key={item.label}
                  {...wrapperProps}
                  className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                    <item.icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="truncate text-sm font-medium text-foreground">
                      {item.value}
                    </p>
                  </div>
                </Wrapper>
              )
            })}

            {/* Social */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-1 items-center gap-3 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30"
                >
                  <item.icon size={18} className="shrink-0 text-primary" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="truncate text-sm font-medium text-foreground">
                      {item.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto shrink-0 text-muted-foreground transition-transform group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
