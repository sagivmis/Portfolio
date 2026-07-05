import { useRef, type ReactNode, type MouseEvent } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type MagneticButtonProps = {
  children: ReactNode
  className?: string
  onClick?: () => void
  variant?: "primary" | "ghost"
  type?: "button" | "submit"
}

export function MagneticButton({
  children,
  className,
  onClick,
  variant = "primary",
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)

  const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = "translate(0, 0)"
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      data-cursor="pointer"
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "relative overflow-hidden rounded-full px-8 py-3 font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300",
        variant === "primary" &&
          "bg-primary text-base shadow-[0_0_30px_rgba(124,246,255,0.3)] hover:shadow-[0_0_50px_rgba(124,246,255,0.5)]",
        variant === "ghost" &&
          "glass text-ink hover:border-primary/30 hover:text-primary",
        className
      )}
    >
      {children}
    </motion.button>
  )
}
