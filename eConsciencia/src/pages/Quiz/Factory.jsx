import { useGLTF } from "@react-three/drei";
import React, {useState} from "react";

const Factory = ( {visible=true, ...props}) =>{
    const {nodes, materials} = useGLTF("/3d-models-quiz/factory.glb");
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
      
    scale={hovered ? 0.12 : 0.1}
    position={[0.1, 0, -8]}
    rotation={[0,3.9,0]}
    dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials.Material}
        position={[-7.046, 4.062, 10.734]}
        rotation={[-3.115, -0.83, 3.051]}
        scale={0.407}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials.Material}
        position={[-0.929, 4.062, 10.734]}
        rotation={[-3.115, -0.83, 3.051]}
        scale={0.407}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials.Material}
        position={[6.946, 4.062, 10.734]}
        rotation={[-3.115, -0.83, 3.051]}
        scale={0.407}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials.Material}
        position={[10.38, 4.271, -11.717]}
        rotation={[-0.026, 0.801, -0.091]}
        scale={0.46}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={materials.Material}
        position={[1.797, 4.271, -11.874]}
        rotation={[-0.026, 0.801, -0.091]}
        scale={0.46}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={materials.Material}
        position={[-5.472, 4.271, -12.05]}
        rotation={[-0.026, 0.801, -0.091]}
        scale={0.46}
      />
      <group position={[4.694, 6.351, 3.899]} scale={[1.872, 0.755, 2.059]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_1.geometry}
          material={materials['Material.006']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube038.geometry}
        material={nodes.Cube038.material}
        position={[0.075, 18.005, -7.637]}
        rotation={[Math.PI, -0.671, Math.PI]}
        scale={[0.183, 0.127, 0.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={nodes.Cube032.material}
        position={[5.687, 18.01, -7.637]}
        rotation={[0, 0.496, 0]}
        scale={[0.201, 0.139, 0.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033.geometry}
        material={nodes.Cube033.material}
        position={[8.051, 18.15, -6.923]}
        rotation={[0, 0.496, 0]}
        scale={[0.19, 0.131, 0.208]}
      />
    </group>

    ):null;
};


export default Factory;

useGLTF.preload("/3d-models-quiz/factory.glb");