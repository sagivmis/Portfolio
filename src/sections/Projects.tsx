import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink } from "lucide-react"
import { projects } from "@/util/consts"
import { Skeleton } from "@/assets"
import type { ProjectType } from "@/types"
import { GlassCard } from "@/components/ui/GlassCard"
import { Reveal } from "@/components/ui/Reveal"
import { cn } from "@/lib/utils"

function getProjectImage(project: ProjectType): string {
  if (project.images) {
    const firstKey = Object.keys(project.images)[0]
    return project.images[firstKey]
  }
  return Skeleton
}

function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: ProjectType
  index: number
  onSelect: () => void
}) {
  const image = getProjectImage(project)
  const isLarge = index === 0

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={cn(isLarge && "md:col-span-2 md:row-span-2")}
      style={{ perspective: "1000px" }}
    >
      <button
        type="button"
        data-cursor="pointer"
        onClick={onSelect}
        className="group h-full w-full text-left"
      >
        <GlassCard className="relative h-full overflow-hidden p-0">
          <div
            className="relative overflow-hidden"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base via-base/20 to-transparent opacity-80" />
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-primary">
              {project.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-muted">
              {project.content}
            </p>
          </div>
          <div className="absolute right-4 top-4 rounded-full bg-primary/10 p-2 opacity-0 transition-opacity group-hover:opacity-100">
            <ExternalLink className="h-4 w-4 text-primary" />
          </div>
        </GlassCard>
      </button>
    </motion.div>
  )
}

function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectType
  onClose: () => void
}) {
  const images = project.images
    ? Object.values(project.images)
    : [Skeleton]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-base/90 backdrop-blur-xl" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
        className="glass-strong relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
      >
        <button
          type="button"
          data-cursor="pointer"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
          aria-label="Close project details"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid gap-0 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden md:aspect-auto">
            <img
              src={images[0]}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            {images.length > 1 && (
              <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto hide-scrollbar">
                {images.slice(0, 4).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="h-16 w-24 flex-shrink-0 rounded-lg object-cover opacity-70"
                  />
                ))}
              </div>
            )}
          </div>
          <div className="p-8 text-left">
            <h3 className="font-display text-2xl font-bold text-ink">
              {project.title}
            </h3>
            <p className="mt-4 text-muted leading-relaxed whitespace-pre-line">
              {project.content}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Projects() {
  const [selected, setSelected] = useState<ProjectType | null>(null)

  return (
    <section id="projects" className="relative section-padding">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="section-label mb-4">Projects</p>
          <h2 className="heading-xl text-balance">
            Selected work &{" "}
            <span className="text-gradient">experiments</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.1}>
              <ProjectCard
                project={project}
                index={index}
                onSelect={() => setSelected(project)}
              />
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
