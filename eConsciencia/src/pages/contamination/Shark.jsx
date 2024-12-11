import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'; 
import { useFrame } from '@react-three/fiber'
import { RigidBody } from "@react-three/rapier";

export function Shark(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/3d-models-contamination/shark-animated.glb')
  const { actions } = useAnimations(animations, group)

  // Focos:
  const F1 = new THREE.Vector3(1, -2.899, 54.539)
  const F2 = new THREE.Vector3(40, -2.899, 54.539)

  // Centro de la elipse:
  const M = F1.clone().add(F2).multiplyScalar(0.5) 

  const c = F1.distanceTo(F2) / 2 
  const a = 20 
  const b = Math.sqrt(a*a - c*c) 


  const [theta, setTheta] = useState(0)
  const angularSpeed = 0.4

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
    if (!group.current) return

    const newTheta = theta + delta * angularSpeed
    setTheta(newTheta)

    // Posición en la elipse
    const x = M.x + a * Math.cos(newTheta)
    const z = M.z + b * Math.sin(newTheta)
    group.current.position.set(x, M.y, z)


    const aheadTheta = newTheta + 0.01
    const xAhead = M.x + a * Math.cos(aheadTheta)
    const zAhead = M.z + b * Math.sin(aheadTheta)

    const lookTarget = new THREE.Vector3(xAhead, M.y, zAhead)
    group.current.lookAt(lookTarget)
  })

  return (
    <RigidBody type='fixed'>
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="Armature">
            <skinnedMesh
              name="shark"
              geometry={nodes.shark.geometry}
              material={materials.atlas_LPUP}
              skeleton={nodes.shark.skeleton}
              castShadow
            />
            <primitive object={nodes.Bone} />
            <primitive object={nodes.Bone001} />
          </group>
          <group name="BézierCircle" scale={9.627} />
          <group name="Empty" position={[0, 65, 0]} scale={1.543} />
        </group>
      </group>
    </RigidBody>
  )
}

export default Shark;
useGLTF.preload('/3d-models-contamination/shark-animated.glb')
