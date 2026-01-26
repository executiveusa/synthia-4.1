'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { ReactNode, Suspense } from 'react'

interface SceneCanvasProps {
  children: ReactNode
  enableControls?: boolean
}

export default function SceneCanvas({ children, enableControls = false }: SceneCanvasProps) {
  return (
    <Canvas
      className="absolute inset-0"
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      dpr={[1, 2]}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />

      <Suspense fallback={null}>
        {children}
      </Suspense>

      {enableControls && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      )}
    </Canvas>
  )
}
