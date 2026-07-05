import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const checkMotion = () => setReducedMotion(mediaQuery.matches)
    checkMotion()
    mediaQuery.addEventListener("change", checkMotion)

    if (mediaQuery.matches || window.matchMedia("(pointer: coarse)").matches) {
      return () => mediaQuery.removeEventListener("change", checkMotion)
    }

    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleLeave = () => setIsVisible(false)

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setIsHovering(
        !!target.closest("a, button, [data-cursor='pointer'], input, textarea, select")
      )
    }

    window.addEventListener("mousemove", handleMove)
    window.addEventListener("mousemove", handleOver)
    document.body.addEventListener("mouseleave", handleLeave)

    return () => {
      mediaQuery.removeEventListener("change", checkMotion)
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("mousemove", handleOver)
      document.body.removeEventListener("mouseleave", handleLeave)
    }
  }, [])

  if (reducedMotion) return null

  return (
    <>
      <motion.div
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-[9999] hidden mix-blend-difference md:block",
          !isVisible && "opacity-0"
        )}
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div className="h-3 w-3 rounded-full bg-white" />
      </motion.div>
      <motion.div
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-[9998] hidden mix-blend-difference md:block",
          !isVisible && "opacity-0"
        )}
        animate={{
          x: position.x - 20,
          y: position.y - 20,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8 }}
      >
        <div
          className={cn(
            "h-10 w-10 rounded-full border border-white/60 transition-transform duration-300",
            isHovering && "scale-150 border-white"
          )}
        />
      </motion.div>
    </>
  )
}
