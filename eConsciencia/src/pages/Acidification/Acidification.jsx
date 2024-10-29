//import Header from "../../components/Header/Header";
import "./Acidification.css";
import { Canvas } from "@react-three/fiber";
import SeaBlockWorld from "./models-3d/SeaBlockWorld";
import { OrbitControls } from "@react-three/drei";
import Lights from "./lights/Lights";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import CO2 from "/CO2.png"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



const Acidification = () => {
  return (
    <>
        <Header/>
          <Card className= "custom-card fixed-card">
              <CardHeader className = "custom-card-header">
                <CardTitle className = "custom-card-title">Introducción</CardTitle>
                <CardDescription className = "custom-card-description">Acidificacíon del agua</CardDescription>
              </CardHeader>
              <CardContent className = "custom-card-content">
                <img src={CO2} alt="CO2" className="co2-image" />
              </CardContent>
              <CardFooter className = "custom-card-footer">
                <p>Este fenómeno ocurre cuando el dióxido de carbono (CO₂) de la atmósfera se disuelve en el agua, disminuyendo su pH. Proviene de actividades humanas como la quema de combustibles fósiles (carros y fábricas) y la deforestación.</p>
              </CardFooter>
          </Card>
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
