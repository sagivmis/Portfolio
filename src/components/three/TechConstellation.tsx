import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

type Node = {
  position: [number, number, number]
  label: string
  group: string
}

const nodes: Node[] = [
  { position: [-2, 1.5, 0], label: "React", group: "Frontend" },
  { position: [0, 2, 0], label: "TypeScript", group: "Frontend" },
  { position: [2, 1, 0], label: "CSS", group: "Frontend" },
  { position: [-1.5, -0.5, 0], label: "Node.js", group: "Backend" },
  { position: [1.5, -0.5, 0], label: "Python", group: "Backend" },
  { position: [0, -1.5, 0], label: "MongoDB", group: "Data" },
  { position: [-2.5, -1.5, 0], label: "SQL", group: "Data" },
  { position: [2.5, -1.5, 0], label: "Unity", group: "Game" },
]

const connections: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 3],
  [1, 4],
  [3, 5],
  [4, 5],
  [5, 6],
  [4, 7],
  [3, 6],
]

function ConstellationScene() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.08
  })

  const lineGeometry = useMemo(() => {
    const points: THREE.Vector3[] = []
    connections.forEach(([a, b]) => {
      points.push(new THREE.Vector3(...nodes[a].position))
      points.push(new THREE.Vector3(...nodes[b].position))
    })
    const geometry = new THREE.BufferGeometry().setFromPoints(points)
    return geometry
  }, [])

  return (
    <group ref={groupRef}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#7cf6ff" transparent opacity={0.2} />
      </lineSegments>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color={node.group === "Game" ? "#ff3d81" : "#7cf6ff"} />
        </mesh>
      ))}
    </group>
  )
}

export function TechConstellation() {
  return (
    <div className="h-[400px] w-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <ConstellationScene />
      </Canvas>
    </div>
  )
}
