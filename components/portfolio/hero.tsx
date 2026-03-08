import Image from "next/image"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-[128px]" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:gap-16">
        {/* Photo */}
        <div className="relative shrink-0">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-border sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56">
            <Image
              src="/images/foto.png"
              alt="Foto de Ryan Carlo Negretti Pereira"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative ring */}
          <div className="absolute -inset-3 rounded-full border border-primary/20" />
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <p className="mb-2 font-mono text-sm text-primary">
            {"Ola, eu sou"}
          </p>
          <h1 className="text-balance truncate text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Ryan Carlo
            <span 
              className="block text-muted-foreground"
              style={{
                background: `linear-gradient(
                  90deg,
                  rgba(192, 192, 192, 0.6) 0%,
                  rgba(255, 255, 255, 0.9) 30%,
                  rgba(192, 192, 192, 0.6) 60%,
                  rgba(192, 192, 192, 0.6) 100%
                )`,
                backgroundSize: '200% 100%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                animation: 'textshine 7s infinite ease-out',
              }}
            >
              Negretti Pereira
            </span>
          </h1>
          <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Estudante de <span className="text-primary font-medium">Desenvolvimento de Software Multiplataforma</span>
          </p>

          {/* Social Links */}
          <div className="mt-6 flex items-center justify-center gap-4 md:justify-start">
            <a
              href="https://github.com/RyanCNP"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ryan-carlo-negretti-pereira-8709b1292/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:ryan.cnp234@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
              aria-label="E-mail"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={24} className="animate-bounce" />
      </a>

      <style>{`
        @keyframes textshine {
          0% {
            background-position: -200% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }
      `}</style>
    </section>
  )
}
