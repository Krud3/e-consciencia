import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('3d-models-shortage/block.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor.geometry}
        material={materials.GROUND}
        position={[0, 0.488, 0]}
        scale={0.495}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.big_rocks.geometry}
        material={materials.ROCKS_BIG}
        position={[0, 6.904, 0]}
        scale={[18.581, 10.944, 18.581]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mediaum.geometry}
        material={materials.ROCKS_SMALL}
        position={[0, 10.734, 0]}
        scale={17.049}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial018.geometry}
        material={materials.THREE}
        position={[0, 8.992, 0]}
        scale={15.148}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.peces.geometry}
        material={nodes.peces.material}
        position={[6.539, 0.733, -5.045]}
        rotation={[1.56, -0.029, -1.937]}
        scale={5}
      />
      <group position={[7.769, -0.047, -6.741]} rotation={[0, 1.178, 0]} scale={3.628}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign10004.geometry}
          material={materials['Dark Wood.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign10004_1.geometry}
          material={materials['Light Wood.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign10004_2.geometry}
          material={materials['Rocks.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign10004_3.geometry}
          material={materials['Herbs.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign10004_4.geometry}
          material={materials['Dark Wood.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign10004_5.geometry}
          material={materials['Light Wood.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign10004_6.geometry}
          material={materials['Rocks.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign10004_7.geometry}
          material={materials.Herbs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign10004_8.geometry}
          material={materials['Dark Wood.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign10004_9.geometry}
          material={materials['Light Wood.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign10004_10.geometry}
          material={materials['Rocks.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign10004_11.geometry}
          material={materials['Herbs.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign10004_12.geometry}
          material={materials['Dark Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign10004_13.geometry}
          material={materials['Light Wood.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign10004_14.geometry}
          material={materials['Rocks.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign10004_15.geometry}
          material={materials['Herbs.002']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('3d-models-shortage/block.glb')