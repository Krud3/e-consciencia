import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";

export function DegradedWorld(props) {
  console.log("pladfadf");
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "3d-models-shortage/degraded.glb"
  );
  console.log(animations);
  const { actions } = useAnimations(animations, group);

  // Si tienes animaciones, puedes configurarlas para que se reproduzcan
  useEffect(() => {
    if (actions) {
      // Si tienes animaciones, inícialas aquí
      actions["defaultMaterial.001Action"]?.play(); // Sustituye 'animation_name' con el nombre real de la animación
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <RigidBody type="fixed" colliders="trimesh">
          <mesh
            name="floor"
            castShadow
            receiveShadow
            geometry={nodes.floor.geometry}
            material={materials.GROUND}
            position={[0, 0.488, 0]}
            scale={0.495}
          />
        </RigidBody>

        <group
          name="big_rocks"
          position={[0, 6.904, 0]}
          scale={[18.581, 10.944, 18.581]}
        >
          <mesh
            name="defaultMaterial002"
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial002.geometry}
            material={materials.ROCKS_BIG}
          />
          <mesh
            name="defaultMaterial002_1"
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial002_1.geometry}
            material={materials.ROCKS_SMALL}
          />
        </group>

        <RigidBody
          name="rocksFloat"
          colliders="hull"
          position={[0, 35, 0]}
          restitution={0.5}
        >
          <mesh
            name="mediaum"
            castShadow
            receiveShadow
            geometry={nodes.mediaum.geometry}
            material={materials.ROCKS_SMALL}
            scale={17.049}
          />
        </RigidBody>

        <mesh
          name="defaultMaterial018"
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial018.geometry}
          material={materials.THREE}
          position={[0, 8.992, 0]}
          rotation={[0, Math.PI / 0.2, 0]}
          scale={15.148}
        />

        <RigidBody
          name="fishFloat"
          colliders="hull"
          position={[6.539, 25, -5.045]}
        >
          <mesh
            name="peces"
            castShadow
            receiveShadow
            geometry={nodes.peces.geometry}
            material={nodes.peces.material}
            rotation={[1.56, -0.029, -1.937]}
            scale={5}
          />
        </RigidBody>

        <group
          name="Sign"
          position={[7.769, -0.047, -6.741]}
          rotation={[0, 1.178, 0]}
          scale={3.628}
        >
          <mesh
            name="Sign10004"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004.geometry}
            material={materials["Dark Wood.004"]}
          />
          <mesh
            name="Sign10004_1"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_1.geometry}
            material={materials["Light Wood.004"]}
          />
          <mesh
            name="Sign10004_2"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_2.geometry}
            material={materials["Rocks.004"]}
          />
          <mesh
            name="Sign10004_3"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_3.geometry}
            material={materials["Herbs.003"]}
          />
          <mesh
            name="Sign10004_4"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_4.geometry}
            material={materials["Dark Wood.001"]}
          />
          <mesh
            name="Sign10004_5"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_5.geometry}
            material={materials["Light Wood.001"]}
          />
          <mesh
            name="Sign10004_6"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_6.geometry}
            material={materials["Rocks.001"]}
          />
          <mesh
            name="Sign10004_7"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_7.geometry}
            material={materials.Herbs}
          />
          <mesh
            name="Sign10004_8"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_8.geometry}
            material={materials["Dark Wood.002"]}
          />
          <mesh
            name="Sign10004_9"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_9.geometry}
            material={materials["Light Wood.002"]}
          />
          <mesh
            name="Sign10004_10"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_10.geometry}
            material={materials["Rocks.002"]}
          />
          <mesh
            name="Sign10004_11"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_11.geometry}
            material={materials["Herbs.001"]}
          />
          <mesh
            name="Sign10004_12"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_12.geometry}
            material={materials["Dark Wood.003"]}
          />
          <mesh
            name="Sign10004_13"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_13.geometry}
            material={materials["Light Wood.003"]}
          />
          <mesh
            name="Sign10004_14"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_14.geometry}
            material={materials["Rocks.003"]}
          />
          <mesh
            name="Sign10004_15"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_15.geometry}
            material={materials["Herbs.002"]}
          />
        </group>

        <mesh
          name="ball"
          castShadow
          receiveShadow
          geometry={nodes.ball.geometry}
          material={materials.THREE}
          position={[2.805, 9.286, 1.197]}
          rotation={[0.118, -0.434, -0.308]}
          scale={15.148}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/ola.glb");
