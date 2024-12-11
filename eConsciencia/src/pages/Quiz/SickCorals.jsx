import { useGLTF } from "@react-three/drei";
import React, {useState} from "react";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

const SickCorals = ( {visible=true, ...props}) =>{
    const {nodes, materials} = useGLTF("/3d-models-quiz/coral_sick_yellow.glb");
    const [hovered, setHovered] = useState(false);
    const handlePointerOver = (event) => {
      document.body.style.cursor = "pointer";  // Changes the pointer to "hand"
      console.log(materials)
    };
  
    const handlePointerOut = (event) => {
      document.body.style.cursor = "default";  // Restore the pointe to original
    };

    materials.atlas_LPUP.color.set("#ffffff");
    return visible? (
        <group {...props}
       
        dispose={null}>
        <group name="Scene">
          <mesh
            name="coral_big_yellow"
            castShadow
            receiveShadow
            geometry={nodes.coral_big_yellow.geometry}
            material={materials.atlas_LPUP}
            rotation={[Math.PI / 2, 0, 0]}
            scale={hovered ? 0.04: 0.03}
            position={[-5, -5.6, 3]}
            onPointerOver={(event) => {
            setHovered(true);
            handlePointerOver(event);
            }}
            onPointerOut={(event) => {
            setHovered(false);
            handlePointerOut(event);
            }}
              
          />
        </group>
      </group>
       
    ):null;
};


export default SickCorals;

useGLTF.preload("/3d-models-quiz/coral_sick_yellow.glb");
