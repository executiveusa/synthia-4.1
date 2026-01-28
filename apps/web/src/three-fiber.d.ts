import { Object3DNode, extend } from '@react-three/fiber'
import * as THREE from 'three'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: Object3DNode<THREE.Mesh, typeof THREE.Mesh>
      planeGeometry: Object3DNode<THREE.PlaneGeometry, typeof THREE.PlaneGeometry>
      meshStandardMaterial: Object3DNode<THREE.MeshStandardMaterial, typeof THREE.MeshStandardMaterial>
      group: Object3DNode<THREE.Group, typeof THREE.Group>
      sphereGeometry: Object3DNode<THREE.SphereGeometry, typeof THREE.SphereGeometry>
      pointLight: Object3DNode<THREE.PointLight, typeof THREE.PointLight>
      ambientLight: Object3DNode<THREE.AmbientLight, typeof THREE.AmbientLight>
    }
  }
}
