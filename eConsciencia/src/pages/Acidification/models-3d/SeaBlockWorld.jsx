import {useGLTF, useTexture} from "@react-three/drei";
//import { useMemo } from "react";
//import { RepeatWrapping } from "three";

const SeaBlockWorld = (props) => {
    const {nodes, materials} = useGLTF("3d-models-acidification/sea-blockworld.glb");
    //console.log(seaBlockWorldModel);

    // Configuracion de posiciones de la camara segun el objeto
    const cameraPositions = {
      House: {x: 5, y: 8, z: 5},
      SickStarfish: {x: 15, y: -5.5, z: 8},
      HealthyStarfish: {x: 16, y: -3, z: -2},
      HealthyFishGroup : {x: 14, y: -5.3, z: 0},
      SickFishGroup: {x: 7, y: -2, z: 0},
      SickCoralsGroup: {x: 10.28, y: -5.1, z: -3.5},
      HealthyCoralsGroup:{x: 10.2, y: -5.1, z: -5.8},
      HealthyCrab: {x: 11, y: -3, z: -1.2},
      SickCrab: {x: -12, y: -2, z: -3.5},
      SeaweedGroup: {x: 10.3, y: -4.8, z: 1.2}, 
    };

    // Functions that manage the click on the objects  
    const handleObjectClick = (objectName) => {
      
      const newPosition = cameraPositions[objectName];
      if (newPosition) {
        props.setCameraPosition(newPosition);
      }
    };

   
  const handlePointerOver = (event) => {
    document.body.style.cursor = "pointer";  // Changes the pointer to "hand"
  };

  const handlePointerOut = (event) => {
    document.body.style.cursor = "default";  // Restore the pointe to original
  };

    return (
        <group {...props} dispose={null}>
        <group name="Scene">
          <group 
            name="SickCoralsGroup"
            onClick={()=> handleObjectClick("SickCoralsGroup")}// Calls with the name "SickCoralsGroup"
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
          >
            <mesh name="Coral00" geometry={nodes.Coral00.geometry} material={materials.Coral} />
            <mesh name="Coral01" geometry={nodes.Coral01.geometry} material={materials.Coral} />
            <mesh name="Coral02" geometry={nodes.Coral02.geometry} material={materials.Coral} />
            <mesh name="Coral03" geometry={nodes.Coral03.geometry} material={materials.Coral} />
            <mesh name="Coral04" geometry={nodes.Coral04.geometry} material={materials.Coral} />
            <mesh name="Coral05" geometry={nodes.Coral05.geometry} material={materials.Coral} />
            <mesh name="Coral06" geometry={nodes.Coral06.geometry} material={materials.Coral} />
            <mesh name="Coral4" geometry={nodes.Coral4.geometry} material={materials.GreenCoral} />
            <mesh name="Coral5" geometry={nodes.Coral5.geometry} material={materials.RedCoral} />
            <mesh name="Coral6" geometry={nodes.Coral6.geometry} material={materials.YellowCoral} />
          </group>
          <group 
            name="HealthyCoralsGroup"
            onClick={()=> handleObjectClick("HealthyCoralsGroup")}// Calls with the name "HealthyCoralsGroup"
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
          > 
            <mesh name="Coral10" geometry={nodes.Coral10.geometry} material={materials.CoralGreen} />
            <mesh name="Coral11" geometry={nodes.Coral11.geometry} material={materials.CoralGreen} />
            <mesh name="Coral12" geometry={nodes.Coral12.geometry} material={materials.CoralGreen} />
            <mesh name="Coral13" geometry={nodes.Coral13.geometry} material={materials.CoralGreen} />
            <mesh name="Coral14" geometry={nodes.Coral14.geometry} material={materials.CoralGreen} />
            <mesh name="Coral15" geometry={nodes.Coral15.geometry} material={materials.CoralGreen} />
            <mesh name="Coral16" geometry={nodes.Coral16.geometry} material={materials.CoralGreen} />
            <mesh name="Coral2" geometry={nodes.Coral2.geometry} material={materials.AnotherCoral} />
            <mesh name="Coral7" geometry={nodes.Coral7.geometry} material={materials.BlueCoral} />
            <mesh name="Coral3" geometry={nodes.Coral3.geometry} material={materials.OragneCoral} />
          </group>
  
          <mesh
            name="IslandMiddle"
            geometry={nodes.IslandMiddle.geometry}
            material={materials.IslandBottom}
            castShadow
          />
          <mesh
            name="IslandTop"
            geometry={nodes.IslandTop.geometry}
            material={materials.IslandMiddle}
            castShadow
          />
          <mesh 
            name="House" 
            geometry={nodes.House.geometry} 
            material={materials.House} 
            castShadow 
            onClick={()=> handleObjectClick("House")}// Calls with the name "House"
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
          />
          <mesh name="Water" geometry={nodes.Water.geometry} material={materials.Water} castShadow/>
          <group name="Sand" >
            <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials.Sand} receiveShadow />
            <mesh
              name="Cube008_1"
              geometry={nodes.Cube008_1.geometry}
              material={materials.BlackCave}
              receiveShadow
            />
          </group>
          <mesh name="Stone0" geometry={nodes.Stone0.geometry} material={materials.Rock} castShadow/>
          <group name="IslandBottom" castShadow>
            <mesh
              name="Cube009"
              geometry={nodes.Cube009.geometry}
              material={materials.BeneathIsland}
              castShadow
            />
            <mesh
              name="Cube009_1"
              geometry={nodes.Cube009_1.geometry}
              material={materials.BlackCave}
              castShadow
            />
            <mesh
              name="Cube009_2"
              geometry={nodes.Cube009_2.geometry}
              material={materials.LessBlack}
              castShadow
            />
          </group>
          <mesh name="CO21" geometry={nodes.CO21.geometry} material={materials.Smoke} castShadow/>
          <mesh name="CO22" geometry={nodes.CO22.geometry} material={materials.Smoke} castShadow/>
          <mesh name="Stone1" geometry={nodes.Stone1.geometry} material={materials.Rock} castShadow/>
          <mesh 
            name="Starfish1"
            geometry={nodes.Starfish1.geometry} 
            material={materials.Starfish} 
            onClick={()=> handleObjectClick("SickStarfish")} // Calls with the name "SickStarfish"
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
          />
          <group name="HealthyFishGroup"
           onClick={()=> handleObjectClick("HealthyFishGroup")}// Calls with the name "FishGroup1"
           onPointerOver={handlePointerOver}
           onPointerOut={handlePointerOut}
          >
            <mesh name="Fish01" geometry={nodes.Fish01.geometry} material={materials.Fish} />
            <mesh name="Fish02" geometry={nodes.Fish02.geometry} material={materials.Fish} />
            <mesh name="Fish03" geometry={nodes.Fish03.geometry} material={materials.Fish} />
            <mesh name="Fish04" geometry={nodes.Fish04.geometry} material={materials.Fish} />
            <mesh name="Fish05" geometry={nodes.Fish05.geometry} material={materials.Fish} />
            <mesh name="Fish06" geometry={nodes.Fish06.geometry} material={materials.Fish} />
            <mesh name="Fish07" geometry={nodes.Fish07.geometry} material={materials.Fish} />
            <mesh name="Fish00" geometry={nodes.Fish00.geometry} material={materials.Fish} />
          </group>

          <mesh name="Stone2" geometry={nodes.Stone2.geometry} material={materials.Rock} castShadow/>
          <group 
            name="SeaweedGroup"
            onClick={()=> handleObjectClick("SeaweedGroup")}// Calls with the name "SeaweedGroup"
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
          >
            <mesh name="Seaweed0" geometry={nodes.Seaweed0.geometry} material={materials.SeaWeed} castShadow />
            <mesh name="Seaweed11" geometry={nodes.Seaweed11.geometry} material={materials.SeaWeed} castShadow/>
            <mesh name="Seaweed12" geometry={nodes.Seaweed12.geometry} material={materials.SeaWeed} castShadow/>
            <mesh name="Seaweed13" geometry={nodes.Seaweed13.geometry} material={materials.SeaWeed} castShadow/>
            <mesh name="seaweed3" geometry={nodes.seaweed3.geometry} material={materials.SeaWeed} castShadow/>
            <mesh name="seaweed6" geometry={nodes.seaweed6.geometry} material={materials.SeaWeed} castShadow />
            <mesh name="seaweed8" geometry={nodes.seaweed8.geometry} material={materials.SeaWeed} castShadow />
            <mesh name="seaweed9" geometry={nodes.seaweed9.geometry} material={materials.SeaWeed} castShadow/>
            <mesh name="seaweed10" geometry={nodes.seaweed10.geometry} material={materials.SeaWeed} castShadow/>
            <mesh name="Seaweed1" geometry={nodes.Seaweed1.geometry} material={materials.SeaWeed} castShadow/>
            <mesh name="Seaweed2" geometry={nodes.Seaweed2.geometry} material={materials.SeaWeed} castShadow/>
            <mesh name="Seaweed5" geometry={nodes.Seaweed5.geometry} material={materials.SeaWeed} castShadow/>
            <mesh name="Seaweed7" geometry={nodes.Seaweed7.geometry} material={materials.SeaWeed} castShadow/>
            <mesh name="Seaweed4" geometry={nodes.Seaweed4.geometry} material={materials.SeaWeed} castShadow/>
          </group>
          <mesh name="Stone3" geometry={nodes.Stone3.geometry} material={materials.Rock} castShadow/>
          <mesh
            name="Starfish2"
            geometry={nodes.Starfish2.geometry}
            material={materials.RedStarfish}
            onClick={()=> handleObjectClick("HealthyStarfish")} // Calls with the name "HealthyStarfish"
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
          />
          <mesh 
            name="Crab01"
            geometry={nodes.Crab01.geometry} 
            material={materials.Crab}
            onClick={()=> handleObjectClick("HealthyCrab")} // Calls with the name "HealthyCrab"
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
          >
            <mesh name="Plane002" geometry={nodes.Plane002.geometry} material={materials.Crab} />
            <mesh name="Plane003" geometry={nodes.Plane003.geometry} material={materials.Crab} />
            <mesh name="Plane004" geometry={nodes.Plane004.geometry} material={materials.Crab} />
            <mesh name="Plane005" geometry={nodes.Plane005.geometry} material={materials.Crab} />
            <mesh name="Plane006" geometry={nodes.Plane006.geometry} material={materials.Crab} />
            <mesh name="Plane007" geometry={nodes.Plane007.geometry} material={materials.Crab} />
            <mesh name="Plane008" geometry={nodes.Plane008.geometry} material={materials.Crab} />
            <mesh name="Plane009" geometry={nodes.Plane009.geometry} material={materials.Crab} />
            <mesh name="Plane010" geometry={nodes.Plane010.geometry} material={materials.Crab} />
            <mesh name="Plane011" geometry={nodes.Plane011.geometry} material={materials.Crab} />
          </mesh>
          <mesh 
            name="Crab02" 
            geometry={nodes.Crab02.geometry} 
            material={materials.Crab}
            onClick={()=> handleObjectClick("SickCrab")} // Calls with the name "SickCrab"
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
          >
            <mesh name="Plane013" geometry={nodes.Plane013.geometry} material={materials.Crab} />
            <mesh name="Plane014" geometry={nodes.Plane014.geometry} material={materials.Crab} />
            <mesh name="Plane015" geometry={nodes.Plane015.geometry} material={materials.Crab} />
            <mesh name="Plane016" geometry={nodes.Plane016.geometry} material={materials.Crab} />
            <mesh name="Plane017" geometry={nodes.Plane017.geometry} material={materials.Crab} />
            <mesh name="Plane018" geometry={nodes.Plane018.geometry} material={materials.Crab} />
            <mesh name="Plane019" geometry={nodes.Plane019.geometry} material={materials.Crab} />
            <mesh name="Plane020" geometry={nodes.Plane020.geometry} material={materials.Crab} />
            <mesh name="Plane021" geometry={nodes.Plane021.geometry} material={materials.Crab} />
            <mesh name="Plane022" geometry={nodes.Plane022.geometry} material={materials.Crab} />
          </mesh>
          <group 
            name="SickFishGroup"
            onClick={()=> handleObjectClick("SickFishGroup")} // Calls with the name "SickFishGroup"
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
          >
            <mesh name="Fish08" geometry={nodes.Fish08.geometry} material={materials.ANotherFish} />
            <mesh name="Fish09" geometry={nodes.Fish09.geometry} material={materials.ANotherFish} />
            <mesh name="Fish10" geometry={nodes.Fish10.geometry} material={materials.ANotherFish} />
            <mesh name="Fish11" geometry={nodes.Fish11.geometry} material={materials.ANotherFish} />
            <mesh name="Fish12" geometry={nodes.Fish12.geometry} material={materials.ANotherFish} />
            <mesh name="Fish13" geometry={nodes.Fish13.geometry} material={materials.ANotherFish} />
          </group>

        </group>
      </group>
    );
};

export default SeaBlockWorld;

useGLTF.preload("3d-models-acidification/sea-blockworld.glb");