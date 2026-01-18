import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Hero />
          <div className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </div>
        </div>
      </main>
    </div>
  )
}
