//import Header from "../../components/Header/Header";
import "./Acidification.css";
import { Canvas} from "@react-three/fiber";
import SeaBlockWorld from "./models-3d/SeaBlockWorld";
import { OrbitControls } from "@react-three/drei";
import Lights from "./lights/Lights";
import Controls from "./controls/Controls";
import Title from "./models-3d/Html3D";
import { useState} from "react";
import Staging from "./staging/Staging";
import Sensitization from "./Sensitization";
import Footer from "@/components/Footer/Footer";
import MultipleCO2Bottles from "./models-3d/CO2BottleGroup";
import { Physics } from "@react-three/rapier";
const Acidification = () => {
  const [cameraPosition, setCameraPosition]= useState({x:20, y:2, z:0});
 
  return (
    <>
      <div className="h-screen overflow-y-auto"> 
      <Canvas shadows>
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
        </Canvas>
        <Sensitization/>
        <Footer/>
      </div>
   
    </>
  );
};
export default Acidification;
