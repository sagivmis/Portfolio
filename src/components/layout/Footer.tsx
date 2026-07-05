import { ArrowUp } from "lucide-react"
import { scrollToSection } from "@/lib/utils"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 bg-base/80 px-6 py-8 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {year} Sagiv Mishaan. Crafted with React & Three.js.
        </p>
        <button
          type="button"
          data-cursor="pointer"
          onClick={() => scrollToSection("hero")}
          className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-primary"
        >
          Back to top
          <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
        </button>
      </div>
    </footer>
  )
}
