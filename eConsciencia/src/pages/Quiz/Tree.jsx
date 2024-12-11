import { useGLTF } from "@react-three/drei";
import React, {useState} from "react";

const Tree = ( {visible=true, ...props}) =>{
    const {nodes, materials} = useGLTF("/3d-models-quiz/tree_maple.glb");
    const [hovered, setHovered] = useState(false);
    const handlePointerOver = (event) => {
      document.body.style.cursor = "pointer";  // Changes the pointer to "hand"
    };
  
    const handlePointerOut = (event) => {
      document.body.style.cursor = "default";  // Restore the pointe to original
    };
    return visible? (
        <group {...props} 
        onPointerOver={(event) => {
        setHovered(true);
        handlePointerOver(event);
        }}
        onPointerOut={(event) => {
        setHovered(false);
        handlePointerOut(event);
        }}
        
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