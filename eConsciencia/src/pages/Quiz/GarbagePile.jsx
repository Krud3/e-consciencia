import { useGLTF } from "@react-three/drei";
import React, {useState} from "react";

const GarbagePile = (props) => {
    const {nodes, materials} = useGLTF("/3d-models-quiz/garbage_pile.glb");
    const [hovered, setHovered] = useState(false);
    const handlePointerOver = (event) => {
      document.body.style.cursor = "pointer";  // Changes the pointer to "hand"
    };
  
    const handlePointerOut = (event) => {
      document.body.style.cursor = "default";  // Restore the pointe to original
    };

    return (
        <group {...props}
        onPointerOver={() => setHovered(true)}  // Cuando el mouse pasa por encima
        onPointerOut={() => setHovered(false)}  // Cuando el mouse sale del objeto
        dispose={null}>
        <group name="Scene">
          <mesh
            name="garbage_pile"
            castShadow
            receiveShadow
            geometry={nodes.garbage_pile.geometry}
            material={materials['atlas_LPUP.004']}
            rotation={[Math.PI / 2, 0, 0]}
            scale={hovered ? 0.015 : 0.01} 
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
          />
        </group>
      </group>
    );
};

export default GarbagePile;

useGLTF.preload("/3d-models-quiz/garbage_pile.glb");