import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function CleanWaterModel(props) {
  const { nodes, materials } = useGLTF("quiz-shoratge/tuna.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.588, 0]} rotation={[Math.PI / 2, 0, -0.274]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tuna_TunaMesh001_1.geometry}
          material={materials["Fish.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tuna_TunaMesh001_2.geometry}
          material={materials["FishUnderside.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/CleanWaterModel.glb");
