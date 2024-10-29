import { CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import "./World.css";
import Figure from "./Figure";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
const World = () => {
    const cameraSettings = {
      position: [2, 0, 5],
    };
    
    return (
        <React.Fragment>
            <Header/>
                <Canvas camera = {{
                    position: [6, 0, 10],
                }}>
                    <CameraControls
                        dragToLook= {true}
                    />
                    <ambientLight intensity = {1.5}/>
                    <directionalLight position = {[0, 10, 10]}/>
                    <Figure/>
                </Canvas>
            <Footer/>
        </React.Fragment>
    );
};


export default World;