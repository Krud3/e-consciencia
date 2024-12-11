import { useGLTF } from "@react-three/drei";
import React, {useState} from "react";

const TrashBin = ({ visible=true, onObjectClick, ...props }) => {
    const {nodes, materials} = useGLTF("/3d-models-quiz/trash_bin.glb");
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
          scale={hovered ? 0.7 : 0.5}
          position={[10, 1, -8]}
          dispose={null}>
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.TinCan4Open_TinCan4Open_0.geometry}
              material={materials.TinCan4Open}
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.TinCan4Top_TinCanOpenTop_0.geometry}
              material={materials.TinCanOpenTop}
              position={[2.042, -0.861, 0]}
              rotation={[-Math.PI / 2, 1.134, 0]}
            />
          </group>
        </group>
    ):null;
};

export default TrashBin;
useGLTF.preload("/3d-models-quiz/trash_bin.glb");
