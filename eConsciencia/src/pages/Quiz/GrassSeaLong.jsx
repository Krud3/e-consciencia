import { useGLTF } from "@react-three/drei";
import React, {useState} from "react";

const GrassSeaLong = ({ visible=true, onObjectClick, ...props }) => {
    const {nodes, materials} = useGLTF("/3d-models-quiz/grass_sea_long.glb");
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
              name="grass_sea_long"
              castShadow
              receiveShadow
              geometry={nodes.grass_sea_long.geometry}
              material={materials['atlas_LPUP.006']}
              rotation={[Math.PI / 2, 0, 0]}
              scale={hovered ? 0.027 : 0.02}
              position={[1, -0.5, 10]}
            />
          </group>
        </group>
    ):null;
};

export default GrassSeaLong;
useGLTF.preload("/3d-models-quiz/grass_sea_long.glb");
