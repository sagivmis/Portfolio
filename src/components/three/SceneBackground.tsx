import { useRef, useMemo, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

type ParticleFieldProps = {
  count?: number
  mouseX?: number
  mouseY?: number
  scrollProgress?: number
}

function Particles({
  count = 3000,
  mouseX = 0,
  mouseY = 0,
  scrollProgress = 0,
}: ParticleFieldProps) {
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 4 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = radius * Math.cos(phi)
    }
    return pos
  }, [count])

  useFrame((state) => {
    if (!ref.current) return
    const time = state.clock.elapsedTime
    ref.current.rotation.x = time * 0.02 + mouseY * 0.3
    ref.current.rotation.y = time * 0.03 + mouseX * 0.3
    ref.current.position.y = scrollProgress * -2
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#7cf6ff"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

function InnerSphere({ mouseX = 0, mouseY = 0 }: { mouseX?: number; mouseY?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.elapsedTime
    meshRef.current.rotation.x = time * 0.1 + mouseY * 0.5
    meshRef.current.rotation.y = time * 0.15 + mouseX * 0.5
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.2, 2]} />
      <meshBasicMaterial
        color="#ff3d81"
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  )
}

type SceneContentProps = {
  mouseX: number
  mouseY: number
  scrollProgress: number
}

function SceneContent({ mouseX, mouseY, scrollProgress }: SceneContentProps) {
  return (
    <>
      <ambientLight intensity={0.2} />
      <Particles mouseX={mouseX} mouseY={mouseY} scrollProgress={scrollProgress} />
      <InnerSphere mouseX={mouseX} mouseY={mouseY} />
    </>
  )
}

type SceneBackgroundProps = {
  mouseX?: number
  mouseY?: number
  scrollProgress?: number
}

export function SceneBackground({
  mouseX = 0,
  mouseY = 0,
  scrollProgress = 0,
}: SceneBackgroundProps) {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <SceneContent
            mouseX={mouseX}
            mouseY={mouseY}
            scrollProgress={scrollProgress}
          />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-base/30 via-transparent to-base/90" />
    </div>
  )
}
