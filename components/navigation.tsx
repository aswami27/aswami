"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.href.slice(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 right-0 z-50 hidden lg:block",
        "transition-all duration-300",
        isScrolled ? "p-4" : "p-8"
      )}
    >
      <ul className="flex flex-col items-end gap-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={cn(
                "group flex items-center gap-4 text-xs font-medium uppercase tracking-widest transition-colors",
                activeSection === item.href.slice(1)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span
                className={cn(
                  "h-px transition-all",
                  activeSection === item.href.slice(1)
                    ? "w-16 bg-primary"
                    : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
                )}
              />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
