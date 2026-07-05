import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn, navLinks } from "@/lib/utils"

const allSections = [
  { id: "hero", label: "Home" },
  ...navLinks,
]

export function SectionProgress() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = allSections.map((s) => s.id)
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2) {
            setActiveIndex(i)
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
    <div className="fixed right-6 top-1/2 z-[90] hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
      {allSections.map((section, index) => (
        <button
          key={section.id}
          type="button"
          data-cursor="pointer"
          aria-label={`Go to ${section.label}`}
          onClick={() => {
            document.getElementById(section.id)?.scrollIntoView({
              behavior: "smooth",
            })
          }}
          className="group relative flex items-center"
        >
          <span
            className={cn(
              "absolute right-6 whitespace-nowrap font-mono text-[10px] uppercase tracking-widest opacity-0 transition-all duration-300 group-hover:opacity-100",
              activeIndex === index ? "text-primary" : "text-muted"
            )}
          >
            {section.label}
          </span>
          <motion.span
            animate={{
              scale: activeIndex === index ? 1.4 : 1,
              opacity: activeIndex === index ? 1 : 0.35,
            }}
            className={cn(
              "block h-2 w-2 rounded-full transition-colors duration-300",
              activeIndex === index ? "bg-primary shadow-[0_0_12px_#7cf6ff]" : "bg-muted"
            )}
          />
        </button>
      ))}
    </div>
  )
}
