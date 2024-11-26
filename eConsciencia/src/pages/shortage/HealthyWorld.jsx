import React, { forwardRef, useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export const HealthyWorld = forwardRef((props, ref) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "3d-models-shortage/health.glb"
  );
  const { actions } = useAnimations(animations, group);

  // Si tienes animaciones, puedes configurarlas para que se reproduzcan
  useEffect(() => {
    if (actions) {
      // Si tienes animaciones, inícialas aquí
      actions["pez1Action"]?.play();
      actions["pez2Action"]?.play();
      actions["pez3Action"]?.play();
      actions["pez4Action"]?.play();
      actions["pez5Action"]?.play();
      actions["pez6Action"]?.play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="floor"
          castShadow
          receiveShadow
          geometry={nodes.floor.geometry}
          material={materials.water}
          position={[0, 0.488, 0]}
          scale={0.495}
        />
        <mesh
          name="big_rocks"
          castShadow
          receiveShadow
          geometry={nodes.big_rocks.geometry}
          material={materials.ROCKS_BIG}
          position={[0, 6.904, 0]}
          scale={[18.581, 10.944, 18.581]}
        />
        <mesh
          name="mediaum"
          castShadow
          receiveShadow
          geometry={nodes.mediaum.geometry}
          material={materials.ROCKS_SMALL}
          position={[0, 10.734, 0]}
          scale={17.049}
        />
        <group name="corales" position={[-10.642, -0.951, -4.321]}>
          <mesh
            name="corales_1"
            castShadow
            receiveShadow
            geometry={nodes.corales_1.geometry}
            material={materials.Coral}
          />
          <mesh
            name="corales_2"
            castShadow
            receiveShadow
            geometry={nodes.corales_2.geometry}
            material={materials["Coral.001"]}
          />
          <mesh
            name="corales_3"
            castShadow
            receiveShadow
            geometry={nodes.corales_3.geometry}
            material={materials["Coral.002"]}
          />
          <mesh
            name="corales_4"
            castShadow
            receiveShadow
            geometry={nodes.corales_4.geometry}
            material={materials["Coral.003"]}
          />
          <mesh
            name="corales_5"
            castShadow
            receiveShadow
            geometry={nodes.corales_5.geometry}
            material={materials["Coral.004"]}
          />
        </group>
        <mesh
          name="pez1"
          castShadow
          receiveShadow
          geometry={nodes.pez1.geometry}
          material={materials.pezMaterial}
          position={[1.534, 11.111, -5.349]}
          rotation={[0.02, -0.376, -0.196]}
        />
        <group
          name="Sign"
          position={[7.797, 0.229, -7.046]}
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
          name="pez2"
          castShadow
          receiveShadow
          geometry={nodes.pez2.geometry}
          material={materials["pezMaterial.001"]}
          position={[8.455, 5.106, 1.674]}
          rotation={[3.104, -1.031, 2.906]}
        />
        <mesh
          name="pez3"
          castShadow
          receiveShadow
          geometry={nodes.pez3.geometry}
          material={materials["pezMaterial.002"]}
          position={[-7.89, 4.265, 5.894]}
          rotation={[3.123, -0.272, 2.933]}
        />
        <mesh
          name="pez4"
          castShadow
          receiveShadow
          geometry={nodes.pez4.geometry}
          material={materials["pezMaterial.003"]}
          position={[-3.023, 3.042, 10.715]}
          rotation={[3.123, 0.136, 2.941]}
        />
        <mesh
          name="pez5"
          castShadow
          receiveShadow
          geometry={nodes.pez5.geometry}
          material={materials["pezMaterial.004"]}
          position={[-9.926, 3.632, -5.395]}
          rotation={[3.072, 0.978, 2.871]}
        />
        <mesh
          name="pez6"
          castShadow
          receiveShadow
          geometry={nodes.pez6.geometry}
          material={materials["pezMaterial.005"]}
          position={[7.848, 7.994, 6.676]}
          rotation={[3.102, -0.199, 2.806]}
          scale={0.72}
        />
      </group>
    </group>
  );
});

useGLTF.preload("/healt.glb");
