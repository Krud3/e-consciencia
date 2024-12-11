import { useGLTF } from "@react-three/drei";
import React, {useState} from "react";

const Tree = ({ visible=true, onObjectClick, ...props }) =>{
    const {nodes, materials} = useGLTF("/3d-models-quiz/tree_maple.glb");
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

    return visible? (
      <group {...props}
        onPointerOver={() => {setHovered(true); handlePointerOver();}}
        onPointerOut={() => {setHovered(false); handlePointerOut();}}
        onPointerDown={handlePointerDown}
        scale={hovered ? 0.4 : 0.3}
        position={[2.5, 0, -6]}
        dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree_maple.geometry}
          material={materials['atlas_LPUP.009']}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
      </group>
    ):null;
};

export default Tree;
useGLTF.preload("/3d-models-quiz/tree_maple.glb");
