import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, X, ExternalLink } from "lucide-react"
import { projects } from "@/util/consts"
import { Skeleton } from "@/assets"
import type { ProjectType } from "@/types"
import { GlassCard } from "@/components/ui/GlassCard"
import { Reveal } from "@/components/ui/Reveal"
import {
  ProjectGallery,
  getProjectImages,
} from "@/components/ui/ProjectGallery"
import { cn } from "@/lib/utils"

function ProjectTags({ tags }: { tags?: string[] }) {
  if (!tags?.length) return null
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

function ProjectLinks({ links }: { links?: ProjectType["links"] }) {
  if (!links?.length) return null
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="pointer"
          className="group inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 font-mono text-xs uppercase tracking-wider text-primary transition-all hover:border-primary/40 hover:bg-primary/10"
        >
          {link.label}
          <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      ))}
    </div>
  )
}

function ProjectContent({
  project,
  expanded = false,
}: {
  project: ProjectType
  expanded?: boolean
}) {
  return (
    <div className="flex flex-col justify-center text-left">
      <div className="mb-3 flex flex-wrap items-center gap-3">
        {project.category && (
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            {project.category}
          </span>
        )}
        {project.year && (
          <span className="font-mono text-[10px] text-muted">{project.year}</span>
        )}
        {project.featured && (
          <span className="rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
            Featured
          </span>
        )}
      </div>

      <h3 className="font-display text-2xl font-semibold text-ink md:text-3xl lg:text-4xl">
        {project.title}
      </h3>

      {project.subtitle && (
        <p className="mt-2 font-mono text-sm text-primary">{project.subtitle}</p>
      )}

      <p className="mt-4 text-muted leading-relaxed">{project.content}</p>

      {expanded && project.description && (
        <div className="mt-4 space-y-3">
          {project.description.map((paragraph, i) => (
            <p key={i} className="text-sm text-muted leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {project.highlights && (
        <ul className={cn("mt-6 space-y-2", !expanded && "hidden md:block")}>
          {(expanded ? project.highlights : project.highlights.slice(0, 3)).map(
            (item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-muted before:mt-1.5 before:block before:h-1 before:w-1 before:flex-shrink-0 before:rounded-full before:bg-primary"
              >
                {item}
              </li>
            )
          )}
        </ul>
      )}

      <div className="mt-6 space-y-4">
        <ProjectTags tags={project.tags} />
        <ProjectLinks links={project.links} />
      </div>
    </div>
  )
}

function FeaturedProject({ project }: { project: ProjectType }) {
  const images = getProjectImages(project.images)

  return (
    <Reveal>
      <GlassCard className="overflow-hidden p-0">
        <div className="grid lg:grid-cols-2">
          <ProjectGallery
            images={images.length ? images : [Skeleton]}
            title={project.title}
            className="rounded-none lg:rounded-l-2xl"
            aspectClass="aspect-[4/3] lg:aspect-auto lg:min-h-[480px]"
          />
          <div className="p-8 md:p-10 lg:p-12">
            <ProjectContent project={project} expanded />
          </div>
        </div>
      </GlassCard>
    </Reveal>
  )
}

function ProjectRow({
  project,
  index,
  onOpen,
}: {
  project: ProjectType
  index: number
  onOpen: () => void
}) {
  const images = getProjectImages(project.images)
  const reversed = index % 2 === 1

  return (
    <Reveal delay={index * 0.08}>
      <div
        className={cn(
          "grid items-center gap-8 lg:grid-cols-2 lg:gap-16",
          reversed && "lg:[direction:rtl] lg:*:[direction:ltr]"
        )}
      >
        <ProjectGallery
          images={images.length ? images : [Skeleton]}
          title={project.title}
        />

        <div className="flex flex-col">
          <ProjectContent project={project} />
          <button
            type="button"
            data-cursor="pointer"
            onClick={onOpen}
            className="group mt-8 inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:text-ink"
          >
            View case study
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </Reveal>
  )
}

function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectType
  onClose: () => void
}) {
  const images = getProjectImages(project.images)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-end justify-center p-0 sm:items-center sm:p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-base/90 backdrop-blur-xl" />
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }}
        transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
        className="glass-strong relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-t-3xl sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
      >
        <button
          type="button"
          data-cursor="pointer"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
          aria-label="Close project details"
        >
          <X className="h-5 w-5" />
        </button>

        <ProjectGallery
          images={images.length ? images : [Skeleton]}
          title={project.title}
          className="rounded-none sm:rounded-t-3xl"
          aspectClass="aspect-[16/9] sm:aspect-[21/9]"
        />

        <div className="p-8 md:p-10">
          <ProjectContent project={project} expanded />
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Projects() {
  const [selected, setSelected] = useState<ProjectType | null>(null)
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative section-padding">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="section-label mb-4">Projects</p>
          <h2 className="heading-xl text-balance">
            Selected work &{" "}
            <span className="text-gradient">case studies</span>
          </h2>
          <p className="mt-4 max-w-2xl text-left text-muted">
            From privacy-first mobile apps to trading systems and AI platforms —
            a closer look at the products I&apos;ve built.
          </p>
        </Reveal>

        {featured && (
          <div className="mt-16">
            <FeaturedProject project={featured} />
          </div>
        )}

        <div className="mt-24 space-y-24">
          {rest.map((project, index) => (
            <ProjectRow
              key={project.title}
              project={project}
              index={index}
              onOpen={() => setSelected(project)}
            />
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
