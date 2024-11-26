import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

export const HealthyWorld = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("3d-models-shortage/health.glb");

  return (
    <group {...props} ref={ref} dispose={null}>
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
      <group position={[-10.642, -0.951, -4.321]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.corales_1.geometry}
          material={materials.Coral}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.corales_2.geometry}
          material={materials["Coral.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.corales_3.geometry}
          material={materials["Coral.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.corales_4.geometry}
          material={materials["Coral.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.corales_5.geometry}
          material={materials["Coral.004"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.peces.geometry}
        material={materials.pezMaterial}
        position={[7.756, 6.089, 8.559]}
        rotation={[0, 0.03, 0]}
        scale={0.185}
      />
      <group position={[7.797, 0.229, -7.046]} rotation={[0, 1.178, 0]} scale={3.628}>
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
  );
});

useGLTF.preload("/healt.glb");
