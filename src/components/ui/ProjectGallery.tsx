import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react"
import { cn } from "@/lib/utils"

type ProjectGalleryProps = {
  images: string[]
  title: string
  className?: string
  aspectClass?: string
}

type FullscreenLightboxProps = {
  images: string[]
  title: string
  initialIndex: number
  onClose: () => void
}

function FullscreenLightbox({
  images,
  title,
  initialIndex,
  onClose,
}: FullscreenLightboxProps) {
  const [index, setIndex] = useState(initialIndex)

  const goTo = (next: number) => {
    setIndex((next + images.length) % images.length)
  }

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
      if (event.key === "ArrowLeft") goTo(index - 1)
      if (event.key === "ArrowRight") goTo(index + 1)
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [index, onClose, images.length])

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] flex flex-col bg-base md:hidden"
      data-lenis-prevent
      role="dialog"
      aria-modal="true"
      aria-label={`${title} photos fullscreen`}
    >
      <div className="flex items-center justify-between px-4 pb-2 pt-[max(1rem,env(safe-area-inset-top))]">
        <div className="min-w-0 pr-4">
          <p className="truncate font-display text-sm font-semibold text-ink">
            {title}
          </p>
          {images.length > 1 && (
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
              {index + 1} / {images.length}
            </p>
          )}
        </div>
        <button
          type="button"
          data-cursor="pointer"
          onClick={onClose}
          className="rounded-full bg-white/10 p-2.5 text-ink"
          aria-label="Close fullscreen"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-2">
        {images.length > 1 && (
          <button
            type="button"
            data-cursor="pointer"
            onClick={() => goTo(index - 1)}
            className="absolute left-2 z-10 rounded-full bg-white/10 p-2.5 text-ink backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={index}
            src={images[index]}
            alt={`${title} screenshot ${index + 1}`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            drag={images.length > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x > 80) goTo(index - 1)
              else if (info.offset.x < -80) goTo(index + 1)
            }}
            className="max-h-full max-w-full touch-pan-y object-contain"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <button
            type="button"
            data-cursor="pointer"
            onClick={() => goTo(index + 1)}
            className="absolute right-2 z-10 rounded-full bg-white/10 p-2.5 text-ink backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex justify-center gap-2 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              data-cursor="pointer"
              onClick={() => setIndex(i)}
              aria-label={`View image ${i + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === index ? "w-6 bg-primary" : "w-1.5 bg-white/30"
              )}
            />
          ))}
        </div>
      )}
    </motion.div>,
    document.body
  )
}

export function ProjectGallery({
  images,
  title,
  className,
  aspectClass = "aspect-[16/10]",
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [fullscreenOpen, setFullscreenOpen] = useState(false)
  const safeImages = images.length > 0 ? images : []

  if (safeImages.length === 0) return null

  const goTo = (index: number) => {
    setActiveIndex((index + safeImages.length) % safeImages.length)
  }

  const openFullscreen = () => {
    setFullscreenOpen(true)
  }

  return (
    <>
      <div className={cn("group relative overflow-hidden rounded-2xl", className)}>
        <div className={cn("relative overflow-hidden bg-surface", aspectClass)}>
          <button
            type="button"
            data-cursor="pointer"
            onClick={openFullscreen}
            className="block h-full w-full text-left md:pointer-events-none md:cursor-default"
            aria-label={`View ${title} photo fullscreen`}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={safeImages[activeIndex]}
                alt={`${title} screenshot ${activeIndex + 1}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </AnimatePresence>
          </button>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent" />

          <span className="pointer-events-none absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded-full bg-base/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-ink backdrop-blur-sm md:hidden">
            <Maximize2 className="h-3.5 w-3.5" />
            Tap to expand
          </span>

          {safeImages.length > 1 && (
            <>
              <button
                type="button"
                data-cursor="pointer"
                onClick={() => goTo(activeIndex - 1)}
                className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-base/60 p-2 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-base/80 md:block"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                data-cursor="pointer"
                onClick={() => goTo(activeIndex + 1)}
                className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-base/60 p-2 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-base/80 md:block"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="absolute bottom-3 left-1/2 z-10 hidden -translate-x-1/2 gap-1.5 md:flex">
                {safeImages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    data-cursor="pointer"
                    onClick={() => setActiveIndex(i)}
                    aria-label={`View image ${i + 1}`}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      i === activeIndex
                        ? "w-6 bg-primary"
                        : "w-1.5 bg-white/30 hover:bg-white/50"
                    )}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {safeImages.length > 1 && (
          <div className="mt-3 flex gap-2 overflow-x-auto hide-scrollbar">
            {safeImages.map((img, i) => (
              <button
                key={i}
                type="button"
                data-cursor="pointer"
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "h-14 w-20 flex-shrink-0 overflow-hidden rounded-lg border transition-all",
                  i === activeIndex
                    ? "border-primary ring-1 ring-primary/40"
                    : "border-white/10 opacity-60 hover:opacity-100"
                )}
              >
                <img
                  src={img}
                  alt={`${title} thumbnail ${i + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {fullscreenOpen && (
          <FullscreenLightbox
            images={safeImages}
            title={title}
            initialIndex={activeIndex}
            onClose={() => setFullscreenOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export function getProjectImages(
  images?: Record<string, string>
): string[] {
  if (!images) return []
  const ordered = ["hero", "img1", "img2", "img3", "img4"]
  const result: string[] = []
  const seen = new Set<string>()

  for (const key of ordered) {
    const src = images[key]
    if (src && !seen.has(src)) {
      result.push(src)
      seen.add(src)
    }
  }

  for (const src of Object.values(images)) {
    if (!seen.has(src)) {
      result.push(src)
      seen.add(src)
    }
  }

  return result
}
