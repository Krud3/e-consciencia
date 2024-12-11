import { useGLTF } from "@react-three/drei";
import React, {useState} from "react";

const HealthyCorals = ({ visible=true, onObjectClick, ...props }) => {
    const {nodes, materials} = useGLTF("/3d-models-quiz/coral_yellow.glb");
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
            position={[3, -5.6, 3]}
          />
        </group>
      </group>
    ):null;
};

export default HealthyCorals;
useGLTF.preload("/3d-models-quiz/coral_yellow.glb");
