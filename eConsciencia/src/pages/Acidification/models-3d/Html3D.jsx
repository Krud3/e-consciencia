import { Html } from "@react-three/drei";
import {useState} from "react";

import "../Acidification.css";

const Title = () => {
    const [visibleContent, setVisibleContent] = useState({});

    // Función para alternar la visibilidad de contenido específico
    const toggleContent = (key) => {
        setVisibleContent((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };
    return(
        <>
            <Html
                occlude
                wrapperClass="title-sensitization"
                center
                distanceFactor={15}
                position = {[-2, 10, 0]}
                style={{
                    color: "#41a38a",
                    fontSize: "80pt"
                }}
            >
                <h1>
                    Sensitization
                </h1>

            </Html>
            <Html
                occlude
                center
                distanceFactor={15}
                position = {[-1, 6.5, 2.5]}
                style={{
                    color: "black",
                    fontSize: "20pt"
                }}
            >
                
                <button onClick={() => toggleContent("causes")}>causes</button>
                {visibleContent["causes"] && (
                    <div style={{ color: "black", fontSize: "12pt", marginTop: "12px" }}>
                        Ocean acidification is primarily caused by excessive CO2 absorption.
                    </div>
                )}
            </Html>
            <Html
                occlude
                center
                distanceFactor={15}
                position = {[-3.5, -3, -9]}
                style={{
                    color: "indianred",
                    fontSize: "25pt"
                }}
            >
                
                <button onClick={() => toggleContent("crabs")}>
                    consequences on crabs 
                </button>
                {visibleContent["crabs"] && (
                    <div style={{ color: "indianred", fontSize: "12pt", marginTop: "10px" }}>
                        Crabs struggle to build strong shells due to reduced calcium carbonate.
                    </div>
                )}
            </Html>
            <Html
                occlude
                center
                distanceFactor={15}
                position = {[7, -3, 9.5]}
                style={{
                    color: "indianred",
                    fontSize: "20pt"
                }}
            >
                
                <button onClick={() => toggleContent("starfish")}>
                    consequences on starfish    
                </button>
                {visibleContent["starfish"] && (
                    <div style={{ color: "indianred", fontSize: "12pt", marginTop: "10px" }}>
                        Starfish reproduction rates decrease under acidic conditions.
                    </div>
                )}

            </Html>
            <Html
                occlude
                center
                distanceFactor={15}
                position = {[2, -2, 3]}
                style={{
                    color: "orange",
                    fontSize: "20pt"
                }}
            >
                
                <button onClick={() => toggleContent("fish")}>
                    consequences on fish    
                </button>
                {visibleContent["fish"] && (
                    <div style={{ color: "orange", fontSize: "12pt", marginTop: "10px" }}>
                        Fish experience altered behavior and survival rates.
                    </div>
                )}

            </Html>
            <Html
                occlude
                center
                distanceFactor={15}
                position = {[8, -2.5, -4]}
                style={{
                    color: "violet",
                    fontSize: "20pt"
                }}
            >
                
                <button onClick={() => toggleContent("corals")}>
                    consequences on corals    
                </button>
                {visibleContent["corals"] && (
                    <div style={{ color: "violet", fontSize: "12pt", marginTop: "10px" }}>
                        Coral reefs face bleaching and structural breakdown.
                    </div>
                )}

            </Html>
            <Html
                occlude
                center
                distanceFactor={15}
                position = {[5, -4.5, 6]}
                style={{
                    color: "green",
                    fontSize: "25pt"
                }}
            >
                
                <button onClick={() => toggleContent("solutions")}>
                    solutions   
                </button>
                {visibleContent["solutions"] && (
                    <div style={{ color: "green", fontSize: "12pt", marginTop: "10px" }}>
                        Reducing CO2 emissions is key to tackling ocean acidification.
                    </div>
                )}

            </Html>
            
        </>
        
    );
};

export default Title;