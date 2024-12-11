import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function GrifoAbierto(props) {
  const { nodes, materials } = useGLTF("quiz-shoratge/grifoAbierto.glb");
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.AGUA}
        position={[0, 1.077, 0.676]}
        scale={0.061}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.AGUA}
        position={[0, 0.324, 0.661]}
        scale={0.185}
      />
    </group>
  );
}

useGLTF.preload("/grifoAbierto.glb");
