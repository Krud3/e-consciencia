/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect, useCallback } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { useSpring, animated } from '@react-spring/three';

const BlockWorld = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('3d-models-contamination/blockworld-plus.glb')

  useEffect(() => {
    Object.values(materials).forEach(material => {
      material.roughness = 0.5;  // Aplica roughness
      material.metalness = 0.0;  // Aplica metalness
    });
  }, [materials]);

  const { position } = useSpring({
    from: { position: [52.055, 0, 10.11] },
    to: { position: [52.055, 0.05, 10.11] },
    loop: { reverse: true },
    config: { duration: 50 }, // Ajusta la duración para velocidad más rápida/lenta
  });

  const trash1 = useRef();
  const trash2 = useRef();
  const trash3 = useRef();
  const trash4 = useRef();



  const handleTrashClick = useCallback(() =>{
    trash1.current.applyImpulse({x:0, y:20,z:-5}, true);
    trash2.current.applyImpulse({x:0, y:20,z:-5}, true);
    trash3.current.applyImpulse({x:0, y:20,z:-5}, true);
    trash4.current.applyImpulse({x:0, y:20,z:-5}, true);
  }, [])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="terrain_plane_water001"
          geometry={nodes.terrain_plane_water001.geometry}
          material={materials['atlas_LPUP.012']}
          position={[-44.567, 0, -29.701]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.01, 0.02, 0.01]}
          receiveShadow
        />
        
        <group
          name="terrain_plane_slope2001"
          position={[45.411, 0, -44.283]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}>
            <RigidBody type='fixed' colliders = "trimesh">
          <mesh
            name="Scene019"
            geometry={nodes.Scene019.geometry}
            material={materials['atlas_LPUP.006']}

            receiveShadow
          />
          </RigidBody>
          <RigidBody type='fixed' colliders = "trimesh">
          <mesh
            name="Scene019_1"
            geometry={nodes.Scene019_1.geometry}
            material={materials.atlas_LPUP}

            receiveShadow
          />
          </RigidBody>
          <RigidBody type='fixed' colliders = "trimesh">
          <mesh
            name="Scene019_2"
            geometry={nodes.Scene019_2.geometry}
            material={materials['atlas_LPUP.001']}
            receiveShadow
          />
          </RigidBody>
          <RigidBody type='fixed' colliders = "trimesh">
          <mesh
            name="Scene019_3"
            geometry={nodes.Scene019_3.geometry}
            material={materials['atlas_LPUP.003']}
            receiveShadow
          />
          </RigidBody>
          <RigidBody type='fixed' colliders = "trimesh">
          <mesh
            name="Scene019_4"
            geometry={nodes.Scene019_4.geometry}
            material={materials['atlas_LPUP.010']}

            receiveShadow
          />
          </RigidBody>
          <RigidBody type='fixed' colliders = "trimesh">
          <mesh
            name="Scene019_5"
            geometry={nodes.Scene019_5.geometry}
            material={materials['atlas_LPUP.011']}
            receiveShadow
          /></RigidBody>
          <RigidBody type='fixed' colliders="trimesh">
          <mesh
            name="Scene019_6"
            geometry={nodes.Scene019_6.geometry}
            material={materials['atlas_LPUP.004']}

            receiveShadow
          />
          </RigidBody>
          
          <RigidBody type='fixed' colliders="trimesh">
          <mesh
            name="Scene019_7"
            geometry={nodes.Scene019_7.geometry}
            material={materials['atlas_LPUP.002']}

            receiveShadow
          />
          </RigidBody>
          

          <RigidBody type='fixed' colliders="trimesh">
          <mesh
            name="Scene019_8"
            geometry={nodes.Scene019_8.geometry}
            material={materials['atlas_LPUP.005']}

            receiveShadow
          />

          </RigidBody>
        </group>
        

        <mesh
          name="terrain_plane_water005"
          geometry={nodes.terrain_plane_water005.geometry}
          material={materials['atlas_LPUP.012']}
          position={[-44.567, 0, 45.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="terrain_plane_water006"
          geometry={nodes.terrain_plane_water006.geometry}
          material={materials['atlas_LPUP.012']}
          position={[-14.599, 0, 45.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="terrain_plane_water007"
          geometry={nodes.terrain_plane_water007.geometry}
          material={materials['atlas_LPUP.012']}
          position={[15.413, 0, 45.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="terrain_plane_water008"
          geometry={nodes.terrain_plane_water008.geometry}
          material={materials['atlas_LPUP.012']}
          position={[45.411, 0, 45.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="tile_water"
          geometry={nodes.tile_water.geometry}
          material={materials['atlas_LPUP.007']}
          position={[0.305, -2.899, 60.539]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[0.04, 0.002, 0.01]}
        />
        <mesh
          name="tile_water001"
          geometry={nodes.tile_water001.geometry}
          material={materials['atlas_LPUP.007']}
          position={[60.212, -2.899, 45.609]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.01, 0.002, 0.01]}
        />
        <mesh
          name="tile_water002"
          geometry={nodes.tile_water002.geometry}
          material={materials['atlas_LPUP.007']}
          position={[-59.808, -2.933, -29.686]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.02, 0.002, 0.01]}
        />
        <mesh
          name="tile_plain_dirt"
          geometry={nodes.tile_plain_dirt.geometry}
          material={materials['atlas_LPUP.008']}
          position={[45.192, 0.09, 15.589]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="tile_plain_dirt001"
          geometry={nodes.tile_plain_dirt001.geometry}
          material={materials['atlas_LPUP.008']}
          position={[45.232, 0.09, 45.589]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="tile_plain_dirt002"
          geometry={nodes.tile_plain_dirt002.geometry}
          material={materials['atlas_LPUP.008']}
          position={[45.192, 0.09, -14.411]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="tile_plain_dirt003"
          geometry={nodes.tile_plain_dirt003.geometry}
          material={materials['atlas_LPUP.008']}
          position={[45.192, 6.09, -44.411]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.01, 0.01, 0.02]}
        />
        <mesh
          name="tile_plain_dirt004"
          geometry={nodes.tile_plain_dirt004.geometry}
          material={materials['atlas_LPUP.008']}
          position={[45.192, 6.09, -44.261]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.01, 0.01, 0.02]}
        />
        <mesh
          name="tile_plain_dirt005"
          geometry={nodes.tile_plain_dirt005.geometry}
          material={materials['atlas_LPUP.008']}
          position={[15.192, 6.09, -44.261]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.01, 0.01, 0.02]}
        />
        <mesh
          name="tile_plain_dirt006"
          geometry={nodes.tile_plain_dirt006.geometry}
          material={materials['atlas_LPUP.008']}
          position={[-14.808, 6.09, -44.261]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.01, 0.01, 0.02]}
        />
        <mesh
          name="tile_plain_dirt007"
          geometry={nodes.tile_plain_dirt007.geometry}
          material={materials['atlas_LPUP.008']}
          position={[-44.808, 0.09, -44.261]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.01}
        />
        <mesh
          name="tile_plain_dirt008"
          geometry={nodes.tile_plain_dirt008.geometry}
          material={materials['atlas_LPUP.008']}
          position={[-44.648, 0.09, -44.231]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="tile_plain_dirt009"
          geometry={nodes.tile_plain_dirt009.geometry}
          material={materials['atlas_LPUP.008']}
          position={[-44.648, 0.09, -14.231]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="tile_plain_dirt010"
          geometry={nodes.tile_plain_dirt010.geometry}
          material={materials['atlas_LPUP.008']}
          position={[-44.648, 0.09, 15.769]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="tile_plain_dirt011"
          geometry={nodes.tile_plain_dirt011.geometry}
          material={materials['atlas_LPUP.008']}
          position={[-44.648, 0.09, 45.769]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="tile_plain_dirt012"
          geometry={nodes.tile_plain_dirt012.geometry}
          material={materials['atlas_LPUP.008']}
          position={[-44.648, 0.09, 45.579]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.01}
        />
        <mesh
          name="building_cabin_small"
          geometry={nodes.building_cabin_small.geometry}
          material={materials['atlas_LPUP.009']}
          position={[45.555, 0, 12.839]}
          rotation={[Math.PI / 2, 0, 0.925]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="building_cabin_small001"
          geometry={nodes.building_cabin_small001.geometry}
          material={materials['atlas_LPUP.009']}
          position={[25.586, 0, 12.908]}
          rotation={[Math.PI / 2, 0, -0.838]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="industry_factory_old"
          geometry={nodes.industry_factory_old.geometry}
          material={materials['atlas_LPUP.013']}
          position={[36.455, 5.99, -54.691]}
          rotation={[Math.PI / 2, 0, 1.588]}
          scale={0.005}
          castShadow
        />
        <mesh
          name="lighthouse"
          geometry={nodes.lighthouse.geometry}
          material={materials['atlas_LPUP.014']}
          position={[-53.698, 0, 13.861]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
          receiveShadow
        />
        <group
          name="tractor"
          position={[38.197, 0, 6.818]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="terrain_plane_water003"
          geometry={nodes.terrain_plane_water003.geometry}
          material={materials['atlas_LPUP.012']}
          position={[45.411, 0, 15.597]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="terrain_plane_water004"
          geometry={nodes.terrain_plane_water004.geometry}
          material={materials['atlas_LPUP.012']}
          position={[21.389, 0, -20.333]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.01}
        />
        <mesh
          name="terrain_plane_water009"
          geometry={nodes.terrain_plane_water009.geometry}
          material={materials['atlas_LPUP.012']}
          position={[51.456, 0, -2.304]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="terrain_plane_water010"
          geometry={nodes.terrain_plane_water010.geometry}
          material={materials['atlas_LPUP.012']}
          position={[-14.553, 0, -38.293]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.01}
        />
        <mesh
          name="terrain_plane_water011"
          geometry={nodes.terrain_plane_water011.geometry}
          material={materials['atlas_LPUP.012']}
          position={[-26.629, 0, -32.263]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.01}
        />
        <mesh
          name="terrain_plane_water012"
          geometry={nodes.terrain_plane_water012.geometry}
          material={materials['atlas_LPUP.012']}
          position={[45.552, 0, -26.368]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="terrain_plane_water013"
          geometry={nodes.terrain_plane_water013.geometry}
          material={materials['atlas_LPUP.012']}
          position={[45.411, 0, 3.461]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.01}
        />
        <mesh
          name="terrain_plane_water014"
          geometry={nodes.terrain_plane_water014.geometry}
          material={materials['atlas_LPUP.012']}
          position={[45.571, 0, -43.819]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.01}
        />
        <mesh
          name="terrain_plane_water015"
          geometry={nodes.terrain_plane_water015.geometry}
          material={materials['atlas_LPUP.012']}
          position={[9.502, 0, -32.306]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={-0.01}
        />
        <mesh
          name="terrain_plane_water016"
          geometry={nodes.terrain_plane_water016.geometry}
          material={materials['atlas_LPUP.012']}
          position={[33.502, 0, -38.266]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="terrain_plane_water017"
          geometry={nodes.terrain_plane_water017.geometry}
          material={materials['atlas_LPUP.012']}
          position={[45.552, 0, -26.085]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="terrain_plane_water018"
          geometry={nodes.terrain_plane_water018.geometry}
          material={materials['atlas_LPUP.012']}
          position={[27.107, 0, -44.381]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="tree"
          geometry={nodes.tree.geometry}
          material={materials['atlas_LPUP.016']}
          position={[-3.921, 3.57, 8.291]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}

          castShadow
        />
        <mesh
          name="tree001"
          geometry={nodes.tree001.geometry}
          material={materials['atlas_LPUP.016']}
          position={[1.872, 4.93, 4.462]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow

        />
        <mesh
          name="tree002"
          geometry={nodes.tree002.geometry}
          material={materials['atlas_LPUP.016']}
          position={[9.726, 3.9, 0.437]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree003"
          geometry={nodes.tree003.geometry}
          material={materials['atlas_LPUP.016']}
          position={[8.057, 3.04, -7.417]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree004"
          geometry={nodes.tree004.geometry}
          material={materials['atlas_LPUP.016']}
          position={[-11.676, 2.96, 3.677]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree005"
          geometry={nodes.tree005.geometry}
          material={materials['atlas_LPUP.016']}
          position={[-5.884, 4.81, -0.152]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree006"
          geometry={nodes.tree006.geometry}
          material={materials['atlas_LPUP.016']}
          position={[1.97, 4.51, -4.178]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree007"
          geometry={nodes.tree007.geometry}
          material={materials['atlas_LPUP.016']}
          position={[0.301, 2.42, -12.032]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree008"
          geometry={nodes.tree008.geometry}
          material={materials['atlas_LPUP.016']}
          position={[-13.051, 1.89, -9.283]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree009"
          geometry={nodes.tree009.geometry}
          material={materials['atlas_LPUP.016']}
          position={[-6.473, 3.86, -6.436]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree010"
          geometry={nodes.tree010.geometry}
          material={materials['atlas_LPUP.016']}
          position={[-5.884, 0.97, -16.646]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree011"
          geometry={nodes.tree011.geometry}
          material={materials['atlas_LPUP.016']}
          position={[3.541, 0, -17.53]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree012"
          geometry={nodes.tree012.geometry}
          material={materials['atlas_LPUP.016']}
          position={[27.01, 5.35, -56.846]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree013"
          geometry={nodes.tree013.geometry}
          material={materials['atlas_LPUP.016']}
          position={[7.277, 3.63, -45.752]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree014"
          geometry={nodes.tree014.geometry}
          material={materials['atlas_LPUP.016']}
          position={[13.069, 4.81, -49.581]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree015"
          geometry={nodes.tree015.geometry}
          material={materials['atlas_LPUP.016']}
          position={[20.924, 5.22, -53.607]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree016"
          geometry={nodes.tree016.geometry}
          material={materials['atlas_LPUP.016']}
          position={[5.903, 5.58, -58.712]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_tall"
          geometry={nodes.tree_tall.geometry}
          material={materials['atlas_LPUP.017']}
          position={[35.435, 0, -9.381]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_tall001"
          geometry={nodes.tree_tall001.geometry}
          material={materials['atlas_LPUP.017']}
          position={[37.259, 0, -7.171]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_tall002"
          geometry={nodes.tree_tall002.geometry}
          material={materials['atlas_LPUP.017']}
          position={[34.695, 0, -10.131]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_tall003"
          geometry={nodes.tree_tall003.geometry}
          material={materials['atlas_LPUP.017']}
          position={[6.682, 4.36, -2.24]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_tall004"
          geometry={nodes.tree_tall004.geometry}
          material={materials['atlas_LPUP.017']}
          position={[2.342, 4.77, -1.293]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_tall005"
          geometry={nodes.tree_tall005.geometry}
          material={materials['atlas_LPUP.017']}
          position={[-0.854, 0, 0.917]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_tall006"
          geometry={nodes.tree_tall006.geometry}
          material={materials['atlas_LPUP.017']}
          position={[-3.419, 4.63, -2.042]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_tall007"
          geometry={nodes.tree_tall007.geometry}
          material={materials['atlas_LPUP.017']}
          position={[4.275, 2.32, -12.892]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_tall008"
          geometry={nodes.tree_tall008.geometry}
          material={materials['atlas_LPUP.017']}
          position={[2.539, 3.87, -8.631]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_tall009"
          geometry={nodes.tree_tall009.geometry}
          material={materials['atlas_LPUP.017']}
          position={[-10.954, 3.35, -2.24]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_tall010"
          geometry={nodes.tree_tall010.geometry}
          material={materials['atlas_LPUP.017']}
          position={[-5.391, 2.94, -11.63]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_torn_b"
          geometry={nodes.tree_torn_b.geometry}
          material={materials['atlas_LPUP.018']}
          position={[40.946, 0, 5.738]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_torn_b001"
          geometry={nodes.tree_torn_b001.geometry}
          material={materials['atlas_LPUP.018']}
          position={[50.665, 0, 2.4]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_torn_b002"
          geometry={nodes.tree_torn_b002.geometry}
          material={materials['atlas_LPUP.018']}
          position={[28.183, 0, -19.002]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_torn_b003"
          geometry={nodes.tree_torn_b003.geometry}
          material={materials['atlas_LPUP.018']}
          position={[3.835, 0, -32.354]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_torn_b004"
          geometry={nodes.tree_torn_b004.geometry}
          material={materials['atlas_LPUP.018']}
          position={[-20.414, 0, -28.918]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_torn_b005"
          geometry={nodes.tree_torn_b005.geometry}
          material={materials['atlas_LPUP.018']}
          position={[-23.85, 0, -16.646]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_torn_b006"
          geometry={nodes.tree_torn_b006.geometry}
          material={materials['atlas_LPUP.018']}
          position={[-30.232, 0, -0.251]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_torn_b007"
          geometry={nodes.tree_torn_b007.geometry}
          material={materials['atlas_LPUP.018']}
          position={[-8.535, 2.18, -12.032]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_torn_b008"
          geometry={nodes.tree_torn_b008.geometry}
          material={materials['atlas_LPUP.018']}
          position={[-13.64, 2.11, -3.981]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_torn_b009"
          geometry={nodes.tree_torn_b009.geometry}
          material={materials['atlas_LPUP.018']}
          position={[-2.546, 4.71, 3.382]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_torn_b010"
          geometry={nodes.tree_torn_b010.geometry}
          material={materials['atlas_LPUP.018']}
          position={[3.148, 4.45, 8.585]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_torn_b011"
          geometry={nodes.tree_torn_b011.geometry}
          material={materials['atlas_LPUP.018']}
          position={[10.021, 3.83, 6.818]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_torn_b012"
          geometry={nodes.tree_torn_b012.geometry}
          material={materials['atlas_LPUP.018']}
          position={[-0.975, 0, -7.221]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_torn_b013"
          geometry={nodes.tree_torn_b013.geometry}
          material={materials['atlas_LPUP.018']}
          position={[12.082, 2.99, -2.803]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_torn_b014"
          geometry={nodes.tree_torn_b014.geometry}
          material={materials['atlas_LPUP.018']}
          position={[14.144, 1.12, -9.675]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_tall011"
          geometry={nodes.tree_tall011.geometry}
          material={materials['atlas_LPUP.017']}
          position={[49.948, 0, -0.41]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_tall012"
          geometry={nodes.tree_tall012.geometry}
          material={materials['atlas_LPUP.017']}
          position={[45.516, 0, 4.135]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_tall013"
          geometry={nodes.tree_tall013.geometry}
          material={materials['atlas_LPUP.017']}
          position={[38.698, 0, 2.714]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_tall014"
          geometry={nodes.tree_tall014.geometry}
          material={materials['atlas_LPUP.017']}
          position={[27.563, 0, -15.694]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_tall015"
          geometry={nodes.tree_tall015.geometry}
          material={materials['atlas_LPUP.017']}
          position={[-23.855, 0, -13.023]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="tree_tall016"
          geometry={nodes.tree_tall016.geometry}
          material={materials['atlas_LPUP.017']}
          position={[-29.65, 0, -3.138]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="woman_ginger"
          geometry={nodes.woman_ginger.geometry}
          material={materials['atlas_LPUP.019']}
          position={[27.047, 0.46, 18.061]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="man_guy"
          geometry={nodes.man_guy.geometry}
          material={materials['atlas_LPUP.020']}
          position={[40.455, 0.14, 17.445]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <animated.group
          name="tractor001"
          position={position}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <mesh
            name="tractor_base"
            geometry={nodes.tractor_base.geometry}
            material={materials['atlas_LPUP.021']}
            castShadow
          />
          <mesh
            name="tractor_wheel"
            geometry={nodes.tractor_wheel.geometry}
            material={materials['atlas_LPUP.021']}
            position={[-53.213, 99.633, -39.168]}
            castShadow
          />
          <mesh
            name="tractor_wheel_BL"
            geometry={nodes.tractor_wheel_BL.geometry}
            material={materials['atlas_LPUP.021']}
            position={[60.105, -100.626, -68.442]}
          />
          <mesh
            name="tractor_wheel_BR"
            geometry={nodes.tractor_wheel_BR.geometry}
            material={materials['atlas_LPUP.021']}
            position={[-60.104, -100.626, -68.442]}
            castShadow
          />
          <mesh
            name="tractor_wheel_FL"
            geometry={nodes.tractor_wheel_FL.geometry}
            material={materials['atlas_LPUP.021']}
            position={[53.214, 99.633, -39.168]}
            castShadow
          />
        </animated.group>
        <mesh
          name="barrel_empty"
          geometry={nodes.barrel_empty.geometry}
          material={materials['atlas_LPUP.022']}
          position={[35.27, -2.817, 47.587]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="barrel_old"
          geometry={nodes.barrel_old.geometry}
          material={materials['atlas_LPUP.023']}
          position={[54.055, 0, 13.11]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <group
          name="bin_wheelie"
          position={[44.153, 0.079, 17.661]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}>
          <mesh
            name="bin_wheelie_base"
            geometry={nodes.bin_wheelie_base.geometry}
            material={materials['atlas_LPUP.024']}
            position={[0, 0, 0]}
          />
          <mesh
            name="bin_wheelie_top"
            geometry={nodes.bin_wheelie_top.geometry}
            material={materials['atlas_LPUP.024']}
            position={[-40, 0, -99.509]}
          />
        </group>
        <mesh
          name="body_bag"
          geometry={nodes.body_bag.geometry}
          material={materials['atlas_LPUP.025']}
          position={[27.946, -2.522, 46.327]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="bridge_medieval_stone"
          geometry={nodes.bridge_medieval_stone.geometry}
          material={materials['atlas_LPUP.026']}
          position={[33.364, -1.821, 9.368]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        <mesh
          name="bridge_medieval_stone001"
          geometry={nodes.bridge_medieval_stone001.geometry}
          material={materials['atlas_LPUP.026']}
          position={[-22.593, -1.764, -37.54]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.01}
          castShadow
        />
        <group name="chest" scale={0}>
          <mesh
            name="chest_base"
            geometry={nodes.chest_base.geometry}
            material={materials['atlas_LPUP.027']}
            scale={0}
          />
          <mesh
            name="chest_top"
            geometry={nodes.chest_top.geometry}
            material={materials['atlas_LPUP.027']}
            scale={0}
          />
        </group>
        <mesh
          name="coral_big_yellow"
          geometry={nodes.coral_big_yellow.geometry}
          material={materials['atlas_LPUP.028']}
          position={[9.304, -4.657, 53.429]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="coral_small_blue"
          geometry={nodes.coral_small_blue.geometry}
          material={materials['atlas_LPUP.029']}
          position={[11.984, -4.222, 53.452]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="coral_small_orange"
          geometry={nodes.coral_small_orange.geometry}
          material={materials['atlas_LPUP.030']}
          position={[13.702, -4.172, 49.034]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="coral_small_red"
          geometry={nodes.coral_small_red.geometry}
          material={materials['atlas_LPUP.031']}
          position={[5.116, -3.567, 51.491]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <group
          name="fish"
          position={[30.152, -2.548, 51.456]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}>
          <mesh
            name="Scene107"
            geometry={nodes.Scene107.geometry}
            material={materials._28_ORANGE_LPUP}
          />
          <mesh
            name="Scene107_1"
            geometry={nodes.Scene107_1.geometry}
            material={materials._17_GREY_DARKEST_LPUP}
          />
        </group>
        <mesh
          name="fish_swarm"
          geometry={nodes.fish_swarm.geometry}
          material={materials['atlas_LPUP.032']}
          position={[25.893, -3.562, 55.187]}
          rotation={[Math.PI / 2, 0, 0.908]}
          scale={0.01}
        />
        <RigidBody ref={trash2} type='dynamic'>
        <mesh
        onClick={handleTrashClick}
          name="garbage_bag"
          geometry={nodes.garbage_bag.geometry}
          material={materials['atlas_LPUP.033']}
          position={[43.239, 0.2, 19.197]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        /></RigidBody>
        <RigidBody ref={trash3} type='dynamic'> 
        <mesh
        onClick={handleTrashClick}
          name="garbage_open_a"
          geometry={nodes.garbage_open_a.geometry}
          material={materials['atlas_LPUP.034']}
          position={[46.023, 0.4, 23.231]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        /></RigidBody>
        <RigidBody ref={trash4} type='dynamic'> 
        <mesh
        onClick={handleTrashClick}
          name="garbage_open_b"
          geometry={nodes.garbage_open_b.geometry}
          material={materials['atlas_LPUP.035']}
          position={[44.887, 0.36, 21.583]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        /></RigidBody>
        <RigidBody ref={trash1} type='dynamic'>
          <mesh
            onClick={handleTrashClick}
            name="garbage_pile"
            geometry={nodes.garbage_pile.geometry}
            material={materials['atlas_LPUP.036']}
            position={[42.671, 0.32, 24.151]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
            castShadow
          />
        </RigidBody>

        <mesh
          name="grass_basic"
          geometry={nodes.grass_basic.geometry}
          material={materials['atlas_LPUP.037']}
          position={[45.592, 0.109, 18.975]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="grass_sea"
          geometry={nodes.grass_sea.geometry}
          material={materials['atlas_LPUP.038']}
          position={[-14.513, -2.462, 48.902]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="grass_sea_long"
          geometry={nodes.grass_sea_long.geometry}
          material={materials['atlas_LPUP.039']}
          position={[46.849, -1.369, 41.734]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="grass_tall"
          geometry={nodes.grass_tall.geometry}
          material={materials['atlas_LPUP.040']}
          position={[46.705, 0, 16.697]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="rock_pillar"
          geometry={nodes.rock_pillar.geometry}
          material={materials['atlas_LPUP.041']}
          position={[-10.336, -5.207, 51.985]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="rock_sharp"
          geometry={nodes.rock_sharp.geometry}
          material={materials['atlas_LPUP.042']}
          position={[5.766, 0, 26.617]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          castShadow
        />
        
        
        <group
          name="trash_can"
          position={[40.455, 0, -9.381]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="tires"
          geometry={nodes.tires.geometry}
          material={materials['atlas_LPUP.046']}
          position={[49.386, 0, 15.572]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="starfish"
          geometry={nodes.starfish.geometry}
          material={materials['atlas_LPUP.047']}
          position={[39.698, -0.222, 34.177]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
      </group>
    </group>
  )
}

export default BlockWorld;
useGLTF.preload('3d-models-contamination/blockworld-plus.glb')