import { lazy, Suspense } from "react"
import { LenisProvider } from "@/providers/LenisProvider"
import { CustomCursor } from "@/components/layout/CustomCursor"
import { GlassNav } from "@/components/layout/GlassNav"
import { SectionProgress } from "@/components/layout/SectionProgress"
import { Footer } from "@/components/layout/Footer"
import { StaticBackgroundFallback } from "@/components/three/StaticBackgroundFallback"
import { useMousePosition, useScrollProgress, useReducedMotion } from "@/hooks/useMotion"
import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { Experience } from "@/sections/Experience"
import { Projects } from "@/sections/Projects"
import { Skills } from "@/sections/Skills"
import { Contact } from "@/sections/Contact"

const SceneBackground = lazy(() =>
  import("@/components/three/SceneBackground").then((m) => ({
    default: m.SceneBackground,
  }))
)

function BackgroundLayer() {
  const reducedMotion = useReducedMotion()
  const mouse = useMousePosition()
  const scrollProgress = useScrollProgress()

  if (reducedMotion) {
    return <StaticBackgroundFallback />
  }

  return (
    <Suspense fallback={<StaticBackgroundFallback />}>
      <SceneBackground
        mouseX={mouse.x}
        mouseY={mouse.y}
        scrollProgress={scrollProgress}
      />
    </Suspense>
  )
}

export default function App() {
  return (
    <LenisProvider>
      <BackgroundLayer />
      <div className="noise-overlay" />
      <div className="vignette-overlay" />
      <CustomCursor />
      <GlassNav />
      <SectionProgress />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </LenisProvider>
  )
}
