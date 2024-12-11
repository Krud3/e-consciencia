import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber'

export function SeaGull({ orbitCenter = [0,0,0], radius = 20, angleOffset = 0, speed = 0.5, ...props }) {
  const group = useRef()
  const angleRef = useRef(0)
  const { nodes, materials, animations } = useGLTF('/3d-models-contamination/seagull3.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const nombreAnimacion = 'ArmatureAction' 
      const action = actions[nombreAnimacion]
      if (action) {
        action.reset()
        action.setLoop(THREE.LoopRepeat, Infinity)
        action.setEffectiveTimeScale(1) 
        action.play()
      } else {
        console.warn(`La animación '${nombreAnimacion}' no se encontró.`)
      }
    }
  }, [actions])

  useFrame((state, delta) => {
    if (!group.current) return;

    angleRef.current += delta * speed
    const theta = angleRef.current + angleOffset

    const cx = orbitCenter[0]
    const cy = orbitCenter[1]
    const cz = orbitCenter[2]

    // Posición circular
    const x = cx + radius * Math.cos(theta)
    const z = cz + radius * Math.sin(theta)
    const y = cy

    group.current.position.set(x, y, z)

    // Dirección hacia la cual mira la gaviota
    const ahead = theta + 0.1
    const xAhead = cx + radius * Math.cos(ahead)
    const zAhead = cz + radius * Math.sin(ahead)
    group.current.lookAt(xAhead, y, zAhead)
  })

  return (
    <RigidBody type='fixed'>
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="Armature">
            <skinnedMesh
              name="seagull"
              geometry={nodes.seagull.geometry}
              material={materials.atlas_LPUP}
              skeleton={nodes.seagull.skeleton}
            />
            <primitive object={nodes.Bone} />
            <primitive object={nodes.Bone004} />
          </group>
        </group>
      </group>
    </RigidBody>
  )
}

export default SeaGull
useGLTF.preload('/3d-models-contamination/seagull3.glb')
