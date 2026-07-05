import reactLogo from "@/assets/react.png"
import nodeLogo from "@/assets/nodejs.png"
import jsLogo from "@/assets/javascript.png"
import htmlLogo from "@/assets/html5.png"
import cssLogo from "@/assets/css3.png"
import mongoLogo from "@/assets/mongodb.png"
import pgLogo from "@/assets/postgresql.png"
import webpackLogo from "@/assets/webpack.png"
import herokuLogo from "@/assets/heroku.png"
import { skillset } from "@/util/consts"
import { skillGroups } from "@/lib/utils"
import { TechConstellation } from "@/components/three/TechConstellation"
import { Marquee } from "@/components/ui/Marquee"
import { Reveal } from "@/components/ui/Reveal"
import { GlassCard } from "@/components/ui/GlassCard"

const techLogos = [
  { name: "React", src: reactLogo },
  { name: "Node.js", src: nodeLogo },
  { name: "JavaScript", src: jsLogo },
  { name: "HTML5", src: htmlLogo },
  { name: "CSS3", src: cssLogo },
  { name: "MongoDB", src: mongoLogo },
  { name: "PostgreSQL", src: pgLogo },
  { name: "Webpack", src: webpackLogo },
  { name: "Heroku", src: herokuLogo },
]

export function Skills() {
  return (
    <section id="skills" className="relative section-padding">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="section-label mb-4">Skills</p>
          <h2 className="heading-xl text-balance">
            Tech stack &{" "}
            <span className="text-gradient">expertise</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12">
            <TechConstellation />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skillGroups).map(([group, labels], index) => (
            <Reveal key={group} delay={index * 0.1}>
              <GlassCard className="text-left">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {group}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {labels.map((label) => {
                    const skill = skillset.find((s) => s.label === label)
                    return (
                      <span
                        key={label}
                        className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[11px] text-muted"
                      >
                        {label}
                        {skill && (
                          <span className="ml-1 text-primary/60">
                            {skill.value}%
                          </span>
                        )}
                      </span>
                    )
                  })}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16">
            <Marquee className="py-4">
              {techLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex h-16 w-32 flex-shrink-0 items-center justify-center rounded-xl glass px-4"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-10 max-w-full object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
