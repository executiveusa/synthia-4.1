'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface AvatarProps {
  scrollProgress?: number
}

export default function Avatar({ scrollProgress = 0 }: AvatarProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return

    // Rotate based on scroll progress
    meshRef.current.rotation.y = scrollProgress * Math.PI * 2
    meshRef.current.rotation.x = Math.sin(scrollProgress * Math.PI) * 0.3

    // Subtle idle animation
    const time = state.clock.getElapsedTime()
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.1
  })

  return (
    <group>
      {/* Main avatar sphere with distortion */}
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.5}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>

      {/* Inner glow sphere */}
      <Sphere args={[1.3, 32, 32]} scale={1.5}>
        <meshBasicMaterial
          color="#a78bfa"
          transparent
          opacity={0.2}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Outer ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#60a5fa"
          emissive="#60a5fa"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Lighting */}
      <pointLight position={[2, 2, 2]} intensity={1} color="#60a5fa" />
      <pointLight position={[-2, -2, -2]} intensity={0.5} color="#a78bfa" />
      <ambientLight intensity={0.3} />
    </group>
  )
}
