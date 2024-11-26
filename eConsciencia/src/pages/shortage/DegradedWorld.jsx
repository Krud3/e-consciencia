import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";

export function DegradedWorld(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "3d-models-shortage/degraded.glb"
  );
  const { actions } = useAnimations(animations, group);

  // Si tienes animaciones, puedes configurarlas para que se reproduzcan
  useEffect(() => {
    if (actions) {
      // Si tienes animaciones, inícialas aquí
      actions["ballAction"]?.play(); // Sustituye 'animation_name' con el nombre real de la animación
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

        <RigidBody type="fixed" colliders="trimesh">
          <mesh
            name="big_rocks"
            castShadow
            receiveShadow
            geometry={nodes.big_rocks.geometry}
            material={materials.ROCKS_BIG}
            position={[0, 6.904, 0]}
            scale={[18.581, 10.944, 18.581]}
          />
        </RigidBody>

        <RigidBody type="fixed" colliders="trimesh">
          <mesh
            name="mediaum"
            castShadow
            receiveShadow
            geometry={nodes.mediaum.geometry}
            material={materials.ROCKS_SMALL}
            position={[0, 10.734, 0]}
            scale={17.049}
          />
        </RigidBody>

        <mesh
          name="corales"
          castShadow
          receiveShadow
          geometry={nodes.corales.geometry}
          material={materials.Coral}
          position={[-10.642, -0.951, -4.321]}
        />

        <RigidBody
          name="fishFloat"
          colliders="hull"
          position={[-0.599, 25, 1.712]}
          mass={0.1}
        >
          <mesh
            name="skeletons"
            castShadow
            receiveShadow
            geometry={nodes.skeletons.geometry}
            material={nodes.skeletons.material}
            rotation={[1.56, -0.029, -1.937]}
            scale={5}
          />
        </RigidBody>

        <mesh
          name="ramas"
          castShadow
          receiveShadow
          geometry={nodes.ramas.geometry}
          material={materials["THREE.008"]}
          position={[5.796, 2.234, 2.818]}
          scale={15.148}
        />

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
            material={materials["Dark Wood.005"]}
          />
          <mesh
            name="Sign10004_1"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_1.geometry}
            material={materials["Light Wood.005"]}
          />
          <mesh
            name="Sign10004_2"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_2.geometry}
            material={materials["Rocks.005"]}
          />
          <mesh
            name="Sign10004_3"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_3.geometry}
            material={materials["Herbs.004"]}
          />
          <mesh
            name="Sign10004_4"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_4.geometry}
            material={materials["Dark Wood.006"]}
          />
          <mesh
            name="Sign10004_5"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_5.geometry}
            material={materials["Light Wood.006"]}
          />
          <mesh
            name="Sign10004_6"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_6.geometry}
            material={materials["Rocks.006"]}
          />
          <mesh
            name="Sign10004_7"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_7.geometry}
            material={materials["Herbs.005"]}
          />
          <mesh
            name="Sign10004_8"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_8.geometry}
            material={materials["Dark Wood.007"]}
          />
          <mesh
            name="Sign10004_9"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_9.geometry}
            material={materials["Light Wood.007"]}
          />
          <mesh
            name="Sign10004_10"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_10.geometry}
            material={materials["Rocks.007"]}
          />
          <mesh
            name="Sign10004_11"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_11.geometry}
            material={materials["Herbs.006"]}
          />
          <mesh
            name="Sign10004_12"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_12.geometry}
            material={materials["Dark Wood.008"]}
          />
          <mesh
            name="Sign10004_13"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_13.geometry}
            material={materials["Light Wood.008"]}
          />
          <mesh
            name="Sign10004_14"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_14.geometry}
            material={materials["Rocks.008"]}
          />
          <mesh
            name="Sign10004_15"
            castShadow
            receiveShadow
            geometry={nodes.Sign10004_15.geometry}
            material={materials["Herbs.007"]}
          />
        </group>

        <mesh
          name="ball"
          castShadow
          receiveShadow
          geometry={nodes.ball.geometry}
          material={materials.wire}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.229}
        />

        <RigidBody
          name="fishFloat"
          colliders="hull"
          position={[8.323, 30, -0.402]}
          restitution={0.8}
        >
          <mesh
            name="ball001"
            castShadow
            receiveShadow
            geometry={nodes.ball001.geometry}
            material={materials["wire.001"]}
            rotation={[2.199, 0.519, 0.365]}
            scale={0.229}
          />
        </RigidBody>

        <RigidBody
          name="fishFloat"
          colliders="hull"
          position={[-4.245, 30, -5.837]}
        >
          <mesh
            name="ball002"
            castShadow
            receiveShadow
            geometry={nodes.ball002.geometry}
            material={materials["wire.002"]}
            rotation={[2.199, 0.519, 0.365]}
            scale={0.229}
          />
        </RigidBody>

        <RigidBody
          name="fishFloat"
          colliders="hull"
          position={[2.199, 30, 0.365]}
        >
          <mesh
            name="ball003"
            castShadow
            receiveShadow
            geometry={nodes.ball003.geometry}
            material={materials["wire.003"]}
            position={[-1.84, 1.879, 4.491]}
            rotation={[2.199, 0.519, 0.365]}
            scale={0.229}
          />
        </RigidBody>
      </group>
    </group>
  );
}

useGLTF.preload("/ola.glb");
