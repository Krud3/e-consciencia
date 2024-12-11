import React, { useRef, useState, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { RigidBody } from "@react-three/rapier";

const RecycleBin = ({ visible=true, onObjectClick, ...props }) =>{ 
  const group = useRef()
  const useRecycleBin = useRef();
  const { nodes, materials, animations } = useGLTF("/3d-models-quiz/RecycleBin.glb");
  const { actions } = useAnimations(animations,useRecycleBin );
  const [hovered, setHovered] = useState(false);

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  const handlePointerDown = () => {
    if (onObjectClick) onObjectClick();
  }

  useEffect(() => {
    if (actions && actions["Cube.001|Scene"]) {
      actions["Cube.001|Scene"].timeScale = 0.5;
      actions["Cube.001|Scene"].play();
    } 
    return () => actions["Cube.001|Scene"]?.stop();
  }, [actions]);

  return visible? (
    <RigidBody  type="fixed" name="bin">
      <group ref={group} {...props}
        dispose={null}
        onPointerOver={() => {setHovered(true); handlePointerOver();}}
        onPointerOut={() => {setHovered(false); handlePointerOut();}}
        onPointerDown={handlePointerDown}
        scale={hovered ? 1 : 0.7}
        position={[7, 0.5, -8]}
        rotation={[0, 2,0]}
      >
        <group name="Scene">
          <mesh
            name="Cube"
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials['Material.001']}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          />
          <mesh
            name="Cube001"
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials['Material.001']}
            position={[-0.19, 1.98, 0.775]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          />
          <mesh
            name="Plane"
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={materials['Material.003']}
            position={[-0.978, 0.075, -0.038]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={0.006}
          />
          <mesh
            name="Plane001"
            castShadow
            receiveShadow
            geometry={nodes.Plane001.geometry}
            material={materials['Material.003']}
            position={[-0.978, 0.006, 0.09]}
            rotation={[0.544, Math.PI / 2, 0]}
            scale={0.006}
          />
          <mesh
            name="Plane002"
            castShadow
            receiveShadow
            geometry={nodes.Plane002.geometry}
            material={materials['Material.003']}
            position={[-0.978, -0.078, -0.059]}
            rotation={[2.632, Math.PI / 2, 0]}
            scale={0.006}
          />
        </group>
      </group>
    </RigidBody>
  ):null;
};

export default RecycleBin;
useGLTF.preload("/3d-models-quiz/RecycleBin.glb");
