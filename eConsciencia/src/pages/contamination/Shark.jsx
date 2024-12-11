import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { RigidBody } from "@react-three/rapier";
import * as THREE from 'three'; 

export function Shark(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/3d-models-contamination/shark-animated.glb')

  const { actions } = animations ? useAnimations(animations, group) : {}

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      console.log('Acciones de animación disponibles:', actions)
    } else {
      console.log('No se encontraron acciones de animación.')
    }
  }, [actions])

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
        console.warn(`La animación '${nombreAnimacion}' no se encontró en las acciones disponibles.`)
      }
    }
  }, [actions])

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
