import Link from "next/link"
import { ArrowUpRight, Mail, Linkedin, Github, MapPin, Phone } from "lucide-react"

export function Contact() {
  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Contact information"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Contact
        </h2>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Let&apos;s Connect
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-lg">
            I&apos;m currently based in the U.K. and open to relocation. Whether you&apos;re 
            looking for a data professional to solve complex analytics challenges or want 
            to discuss potential collaborations, I&apos;d love to hear from you.
          </p>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="text-sm">Manchester, U.K. (Willing to Relocate)</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="mailto:anirudh_swami@outlook.com"
            className="group flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                Email Me
              </p>
              <p className="text-xs text-muted-foreground truncate">
                anirudh_swami@outlook.com
              </p>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>

          <Link
            href="tel:+447747086602"
            className="group flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Phone className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                Call Me
              </p>
              <p className="text-xs text-muted-foreground truncate">
                +44 7747 086602
              </p>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/anirudh-swami-36100625/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Linkedin className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                LinkedIn
              </p>
              <p className="text-xs text-muted-foreground truncate">
                /in/anirudh-swami-36100625
              </p>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>

          <Link
            href="https://github.com/aswami27"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Github className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                GitHub
              </p>
              <p className="text-xs text-muted-foreground truncate">
                @aswami27
              </p>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Built with Next.js and Tailwind CSS. Design inspired by{" "}
            <Link
              href="https://brittanychiang.com"
              className="text-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brittany Chiang
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
