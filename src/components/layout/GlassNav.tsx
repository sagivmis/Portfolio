import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn, navLinks, scrollToSection } from "@/lib/utils"

export function GlassNav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ["hero", ...navLinks.map((l) => l.id)]
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
      className={cn(
        "fixed left-0 right-0 top-0 z-[100] transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 md:px-12",
          scrolled && "glass-strong rounded-2xl py-3 shadow-2xl shadow-black/20"
        )}
      >
        <button
          type="button"
          data-cursor="pointer"
          onClick={() => scrollToSection("hero")}
          className="font-display text-lg font-semibold tracking-tight text-ink transition-colors hover:text-primary"
        >
          SM<span className="text-primary">.</span>
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                data-cursor="pointer"
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  "relative font-mono text-xs uppercase tracking-widest transition-colors duration-300",
                  activeSection === link.id
                    ? "text-primary"
                    : "text-muted hover:text-ink"
                )}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          data-cursor="pointer"
          onClick={() => scrollToSection("contact")}
          className="glass rounded-full px-4 py-2 font-mono text-xs uppercase tracking-widest text-primary transition-all hover:border-primary/40 hover:bg-primary/10 md:px-5"
        >
          Hire me
        </button>
      </nav>
    </motion.header>
  )
}
