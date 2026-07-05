import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Profile from "@/assets/profile.jpeg"
import { Reveal } from "@/components/ui/Reveal"
import { projects, skillset } from "@/util/consts"

gsap.registerPlugin(ScrollTrigger)

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number
  suffix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obj = { val: 0 }
    const tween = gsap.to(obj, {
      val: value,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
      onUpdate: () => {
        el.textContent = Math.round(obj.val) + suffix
      },
    })

    return () => {
      tween.kill()
    }
  }, [value, suffix])

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-primary md:text-5xl">
      0{suffix}
    </span>
  )
}

export function About() {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!imageRef.current) return

    gsap.to(imageRef.current, {
      y: -30,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    })
  }, [])

  const yearsExperience = new Date().getFullYear() - 2020

  return (
    <section id="about" className="relative section-padding">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal direction="left">
          <div
            ref={imageRef}
            className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 rounded-3xl border border-primary/20" />
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-xl" />
            <img
              src={Profile}
              alt="Sagiv Mishaan"
              className="relative h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="section-label mb-4">About</p>
            <h2 className="heading-xl text-balance">
              Experienced Full-Stack Engineer with a passion for{" "}
              <span className="text-gradient">innovative technology</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-left text-muted leading-relaxed">
              I design, build, and ship full-stack applications — from
              intelligence-grade systems at IDF 8200 to independent game
              development and freelance engineering. I thrive at the intersection
              of performance, architecture, and polished user experience.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-left">
                <AnimatedCounter value={yearsExperience} suffix="+" />
                <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">
                  Years
                </p>
              </div>
              <div className="text-left">
                <AnimatedCounter value={projects.length} suffix="" />
                <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">
                  Projects
                </p>
              </div>
              <div className="text-left">
                <AnimatedCounter value={skillset.length} suffix="+" />
                <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">
                  Technologies
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
