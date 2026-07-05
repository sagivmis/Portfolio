import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Sagiv from "@/assets/Sagiv.png"
import { MagneticButton } from "@/components/ui/MagneticButton"
import { heroRoles, scrollToSection } from "@/lib/utils"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (nameRef.current) {
        const chars = nameRef.current.querySelectorAll(".char")
        gsap.fromTo(
          chars,
          { opacity: 0, y: 80, rotateX: -90 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            stagger: 0.04,
            ease: "power3.out",
            delay: 0.5,
          }
        )
      }

      gsap.fromTo(
        ".hero-sub",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1.2, ease: "power2.out" }
      )

      gsap.fromTo(
        ".hero-cta",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          delay: 1.5,
          ease: "power2.out",
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % heroRoles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const name = "SAGIV MISHAAN"

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative flex min-h-screen flex-col items-center justify-center section-padding"
    >
      <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 opacity-10 lg:block">
        <img
          src={Sagiv}
          alt=""
          aria-hidden
          className="max-h-[70vh] object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="hero-sub section-label mb-6">Portfolio 2026</p>

        <h1
          ref={nameRef}
          className="font-display text-[clamp(2.5rem,10vw,7rem)] font-bold leading-[0.95] tracking-tighter"
          style={{ perspective: "1000px" }}
        >
          {name.split("").map((char, i) => (
            <span
              key={i}
              className="char inline-block"
              style={{ transformStyle: "preserve-3d" }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <div className="hero-sub mt-8 flex h-8 items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-sm text-muted md:text-base"
            >
              {heroRoles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="hero-cta mt-12 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton onClick={() => scrollToSection("projects")}>
            View work
          </MagneticButton>
          <MagneticButton
            variant="ghost"
            onClick={() => scrollToSection("contact")}
          >
            Get in touch
          </MagneticButton>
        </div>
      </div>

      <motion.button
        type="button"
        data-cursor="pointer"
        onClick={() => scrollToSection("about")}
        className="hero-sub absolute bottom-12 left-1/2 -translate-x-1/2 text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.button>
    </section>
  )
}
