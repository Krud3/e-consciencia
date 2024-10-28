//import Header from "../../components/Header/Header";
import "./Acidification.css";
import { Canvas } from "@react-three/fiber";
import SeaBlockWorld from "./models-3d/SeaBlockWorld";
import { OrbitControls } from "@react-three/drei";
const Acidification = () => {
  return (
    <>
        <Canvas>
            
            <OrbitControls autorotate/>
            <SeaBlockWorld/>
        </Canvas>
        
    </>
  );
};

export default Acidification;
