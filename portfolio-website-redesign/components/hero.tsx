import Link from "next/link"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/aswami27",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/anirudh-swami-36100625/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:anirudh_swami@outlook.com",
    icon: Mail,
  },
  {
    name: "Resume",
    href: "/aswami/resume.pdf",
    icon: FileText,
  },
]

export function Hero() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          <Link href="/" className="hover:text-primary transition-colors">
            Anirudh Swami
          </Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-primary sm:text-xl">
          Data Scientist & Analytics Professional
        </h2>
        <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
          I transform complex datasets into actionable insights that drive business growth across various domains including Insurance, Healthcare, Retail, and Finance.
        </p>

        <blockquote className="mt-6 max-w-xs border-l-2 border-primary/50 pl-4 text-sm italic text-muted-foreground">
          &ldquo;Any tool or technology is just a means to an end. They matter only if we solve business problems. That&apos;s who I aspire to be &mdash; a problem solver in the realm of data and Business Intelligence.&rdquo;
        </blockquote>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
            MSc Data Science
          </span>
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
            Azure Certified
          </span>
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
            Q4 Superstar Award
          </span>
        </div>

        <div className="mt-12 hidden lg:block">
          <nav className="w-max" aria-label="In-page jump links">
            <ul className="space-y-4">
              {[
                { name: "About", href: "#about" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="group flex items-center py-3"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground motion-reduce:transition-none" />
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground group-focus-visible:text-foreground">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <ul className="mt-8 flex items-center gap-5" aria-label="Social links">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="block text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.name} (opens in new tab)`}
            >
              <link.icon className="h-6 w-6" />
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
