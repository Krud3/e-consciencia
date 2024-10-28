//import Header from "../../components/Header/Header";
import "./Acidification.css";
import { Canvas } from "@react-three/fiber";
import SeaBlockWorld from "./models-3d/SeaBlockWorld";
import { OrbitControls } from "@react-three/drei";
const Acidification = () => {
  return (
    <>
        <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[0, 10, 0]} intensity={0.5} />
            <OrbitControls autorotate/>
            <SeaBlockWorld/>
        </Canvas>
        
    </>
  );
};

export default Acidification;
