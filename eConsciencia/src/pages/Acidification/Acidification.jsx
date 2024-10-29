//import Header from "../../components/Header/Header";
import "./Acidification.css";
import { Canvas } from "@react-three/fiber";
import SeaBlockWorld from "./models-3d/SeaBlockWorld";
import { OrbitControls } from "@react-three/drei";
import Lights from "./lights/Lights";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
const Acidification = () => {
  return (
    <>
        <Header/>
        <Canvas shadows>
            <Lights/>
            <OrbitControls autorotate/>
            <SeaBlockWorld/>
        </Canvas>
        <Footer/>
        
    </>
  );
};
//            <directionalLight position={[10, 10, 5]} intensity={1} />
//<pointLight position={[0, 10, 0]} intensity={0.5} />
export default Acidification;
