import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Grifo(props) {
  const { nodes, materials } = useGLTF("quiz-shoratge/grifo.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.蛇口.geometry}
        material={materials["Material.001"]}
        position={[0, 1.424, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={10.103}
      />
    </group>
  );
}

useGLTF.preload("/grifo.glb");
