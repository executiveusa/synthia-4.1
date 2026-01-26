'use client'

import { VRButton, XR, Controllers, Hands } from '@react-three/xr'
import { ReactNode } from 'react'

interface XRSessionProps {
  children?: ReactNode
}

export default function XRSession({ children }: XRSessionProps) {
  return (
    <>
      <XR>
        <Controllers />
        <Hands />
        {children}
      </XR>
    </>
  )
}

export { VRButton }
