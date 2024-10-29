import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import LightsShortage from './lights/LightsShortage'

export function ShortageBlock (props) {
  const { nodes, materials } = useGLTF('/3d-models-shortage/worlBlock.gbl')
  return (
    <group {...props} dispose={null}>
      <group position={[0.998, 11.187, -1.447]} rotation={[-Math.PI / 2, 0, 0]} scale={14.715}>
        <group rotation={[Math.PI / 2, 0, 0]}>
        <LightsShortage position={[0, 0, 20]} angle={20}/>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.GROUND}
            scale={1.178}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial002.geometry}
            material={materials.ROCKS_BIG}
            position={[0, -0.345, 0]}
            scale={[1, 0.589, 1]}
                />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial003.geometry}
            material={materials.ROCKS_SMALL}
            position={[0, -0.106, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial008.geometry}
            material={materials.WATER}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial018.geometry}
            material={materials.THREE}
            position={[0, -0.136, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial014.geometry}
            material={materials.GRASS}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial016.geometry}
            material={materials.GRASS}
            position={[0, -0.412, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial017.geometry}
            material={materials.GRASS}
          />
        </group>
      </group>
      <group position={[0, 3.24, -4.511]} rotation={[Math.PI / 2, 0, 0]} scale={0.053}>
        <group scale={100}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_0.geometry}
              material={nodes.Object_0.material}
              position={[0, -0.361, -0.665]}
              rotation={[-1.441, 0.154, -0.02]}
            />
          </group>
        </group>
      </group>
      <group position={[6.527, 3.831, 5.973]} rotation={[Math.PI / 2, 0, 0]} scale={0.053}>
        <group scale={100}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_0001.geometry}
              material={nodes.Object_0001.material}
              position={[0, -0.506, 0]}
              rotation={[1.602, 0, 0]}
            />
          </group>
        </group>
      </group>
      <group position={[7.438, 3.831, -0.729]} rotation={[Math.PI / 2, 0, 0]} scale={0.03}>
        <group scale={100}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_0002.geometry}
              material={nodes.Object_0002.material}
              position={[0, -0.873, 0]}
              rotation={[-1.243, 0, 0]}
            />
          </group>
        </group>
      </group>
      <group position={[-1.314, 2.422, 4.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.023}>
        <group scale={100}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_0003.geometry}
              material={nodes.Object_0003.material}
              position={[-0.353, -0.596, -2.679]}
              rotation={[-1.623, 0.214, 0.011]}
            />
          </group>
        </group>
      </group>
      <group position={[-5.834, 3.831, 5.973]} rotation={[Math.PI / 2, 0, 0.732]} scale={0.053}>
        <group scale={100}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_0004.geometry}
              material={nodes.Object_0004.material}
              position={[-0.014, -0.476, -0.27]}
              rotation={[-1.518, 0.11, -0.953]}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/3d-models-shortage/worlBlock.gbl')