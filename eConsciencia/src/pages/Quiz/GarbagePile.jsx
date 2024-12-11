import { useGLTF } from "@react-three/drei";
import React, {useState} from "react";

const GarbagePile = ({ visible=true, onObjectClick, ...props }) => {
    const {nodes, materials} = useGLTF("/3d-models-quiz/garbage_pile.glb");
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

    return visible ? (
        <group {...props}
          onPointerOver={() => {setHovered(true); handlePointerOver();}}
          onPointerOut={() => {setHovered(false); handlePointerOut();}}
          onPointerDown={handlePointerDown}
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
            />
          </group>
        </group>
    ):null;
};

export default GarbagePile;
useGLTF.preload("/3d-models-quiz/garbage_pile.glb");
