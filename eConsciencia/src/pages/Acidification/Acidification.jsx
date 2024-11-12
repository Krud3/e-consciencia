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

const Acidification = () => {
  const [cameraPosition, setCameraPosition]= useState({x:20, y:2, z:0});
 
  return (
    <>
        <Canvas shadows>
            <Title/>
            <Lights/>
            <Controls cameraPosition={cameraPosition}/>
            <Staging/>
            <SeaBlockWorld
              setCameraPosition={setCameraPosition}
            />
        </Canvas>
        
    </>
  );
};
//            <directionalLight position={[10, 10, 5]} intensity={1} />
//<pointLight position={[0, 10, 0]} intensity={0.5} />
export default Acidification;
