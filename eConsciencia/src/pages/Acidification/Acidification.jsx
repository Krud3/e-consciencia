//import Header from "../../components/Header/Header";
import "./Acidification.css";
import { Canvas} from "@react-three/fiber";
import SeaBlockWorld from "./models-3d/SeaBlockWorld";
import { OrbitControls } from "@react-three/drei";
import Lights from "./lights/Lights";
import Controls from "./controls/Controls";
import Title from "./models-3d/Html3D";
import { useCallback, useState, useRef} from "react";
import Staging from "./staging/Staging";
import Sensitization from "./Sensitization";
import Footer from "@/components/Footer/Footer";
import MultipleCO2Bottles from "./models-3d/CO2BottleGroup";
import { Physics } from "@react-three/rapier";
import Video from "./videos/Video";
import { PositionalAudio } from "@react-three/drei";
import PostProcessing from "./postprocessing/PostProcessing";

const Acidification = () => {
  const [cameraPosition, setCameraPosition]= useState({x:20, y:2, z:0});
 
  const audioRef = useRef();

  const handleAudio = useCallback(()=>{
    audioRef.current.play();
    audioRef.current.setVolume(1);
  }, []);
  return (
    <>
      <div className="h-screen overflow-y-auto"> 
      <Canvas shadows onClick={handleAudio}>
            <Title/>
            <Lights/>
            <Controls cameraPosition={cameraPosition}/>
            <Staging/>
            <Physics>
              <MultipleCO2Bottles/>
              <SeaBlockWorld
                setCameraPosition={setCameraPosition}
              />
            </Physics>
            <Video 
              name="screen" 
              position-y={0}
              position-x={-5}
              position-z={0} 
              scale={10}/>
              <group position={[0, 5, 0]}>
                <PositionalAudio ref={audioRef} loop url="./sounds/ocean_waves.mp3" distance={2}/>
              </group>
              <PostProcessing/>
        </Canvas>
        <Sensitization/>
        <Footer/>
      </div>
   
    </>
  );
};
export default Acidification;
