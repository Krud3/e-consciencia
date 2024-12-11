import { useGLTF } from "@react-three/drei";
import React, {useState} from "react";

const GrassSeaLong = ({visible=true, ...props}) =>{
    const {nodes, materials} = useGLTF("/3d-models-quiz/grass_sea_long.glb");
    const [hovered, setHovered] = useState(false);
    const handlePointerOver = (event) => {
      document.body.style.cursor = "pointer";  // Changes the pointer to "hand"
    };
  
    const handlePointerOut = (event) => {
      document.body.style.cursor = "default";  // Restore the pointe to original
    };
    return visible? (
        <group {...props} 
        onPointerOver={() => setHovered(true)}  // Cuando el mouse pasa por encima
        onPointerOut={() => setHovered(false)}  // Cuando el mouse sale del objeto
        dispose={null}>
        <group name="Scene">
          <mesh
            name="grass_sea_long"
            castShadow
            receiveShadow
            geometry={nodes.grass_sea_long.geometry}
            material={materials['atlas_LPUP.006']}
            rotation={[Math.PI / 2, 0, 0]}
            scale={hovered ? 0.027 : 0.02}  // Aumenta el tamaño ligeramente al pasar el mouse
            position={[1, -0.5, 10]}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
            
         />
        </group>
      </group>
    ):null;
};


export default GrassSeaLong;

useGLTF.preload("/3d-models-quiz/grass_sea_long.glb");