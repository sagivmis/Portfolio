import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { experiences, workLocationsMapping } from "@/util/consts"
import { GlassCard } from "@/components/ui/GlassCard"
import { Reveal } from "@/components/ui/Reveal"

gsap.registerPlugin(ScrollTrigger)

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!lineRef.current || !timelineRef.current) return

    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 70%",
          end: "bottom 60%",
          scrub: 1,
        },
      }
    )

    const cards = timelineRef.current.querySelectorAll(".experience-card")
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      )
    })
  }, [])

  return (
    <section id="experience" className="relative section-padding">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="section-label mb-4">Experience</p>
          <h2 className="heading-xl text-balance">
            Building systems that{" "}
            <span className="text-gradient">scale & perform</span>
          </h2>
        </Reveal>

        <div ref={timelineRef} className="relative mt-16">
          <div
            ref={lineRef}
            className="absolute left-4 top-0 hidden h-full w-px origin-top bg-gradient-to-b from-primary via-primary/40 to-transparent md:left-8 md:block"
          />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="experience-card relative grid gap-6 md:grid-cols-[120px_1fr] md:gap-12"
              >
                <div className="hidden md:block">
                  <span className="sticky top-32 font-display text-3xl font-bold text-primary/60">
                    {exp.start}
                  </span>
                </div>

                <GlassCard className="text-left">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink">
                        {exp.title}
                      </h3>
                      {exp.location && (
                        <p className="mt-1 font-mono text-xs text-primary">
                          {workLocationsMapping[exp.location]}
                        </p>
                      )}
                    </div>
                    <span className="font-mono text-xs text-muted md:hidden">
                      {exp.start}
                      {exp.end ? ` – ${exp.end}` : " – Present"}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-3">
                    {exp.content.map((paragraph, i) => (
                      <li
                        key={i}
                        className="text-sm leading-relaxed text-muted before:mr-2 before:text-primary before:content-['▸']"
                      >
                        {paragraph.trim()}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted transition-colors hover:border-primary/30 hover:text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
