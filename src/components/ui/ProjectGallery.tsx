import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type ProjectGalleryProps = {
  images: string[]
  title: string
  className?: string
  aspectClass?: string
}

export function ProjectGallery({
  images,
  title,
  className,
  aspectClass = "aspect-[16/10]",
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const safeImages = images.length > 0 ? images : []

  if (safeImages.length === 0) return null

  const goTo = (index: number) => {
    setActiveIndex((index + safeImages.length) % safeImages.length)
  }

  return (
    <div className={cn("group relative overflow-hidden rounded-2xl", className)}>
      <div className={cn("relative overflow-hidden bg-surface", aspectClass)}>
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
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent" />

        {safeImages.length > 1 && (
          <>
            <button
              type="button"
              data-cursor="pointer"
              onClick={() => goTo(activeIndex - 1)}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-base/60 p-2 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-base/80"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              data-cursor="pointer"
              onClick={() => goTo(activeIndex + 1)}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-base/60 p-2 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-base/80"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
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
