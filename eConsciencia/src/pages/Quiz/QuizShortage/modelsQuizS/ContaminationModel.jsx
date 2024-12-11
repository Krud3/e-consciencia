import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ContaminationModel(props) {
  const { nodes, materials } = useGLTF("quiz-shoratge/skeleton.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4001.geometry}
        material={materials["main.001"]}
        position={[-1.174, 0.822, -0.131]}
        rotation={[1.26, -0.14, -1.785]}
      />
    </group>
  );
}

useGLTF.preload("/ContaminationModel.glb");
