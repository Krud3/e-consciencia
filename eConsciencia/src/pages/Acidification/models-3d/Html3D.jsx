import { Html } from "@react-three/drei";

import "../Acidification.css";

const Title = () => {
    return(
        <>
            <Html
                occlude
                wrapperClass="title-sensitization"
                center
                distanceFactor={15}
                position = {[-2, 12, 0]}
                style={{
                    color: "#41a38a",
                    fontSize: "70pt"
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
                
                <button>
                    causes
                </button>

            </Html>
            <Html
                occlude
                center
                distanceFactor={15}
                position = {[-4, 0, -7]}
                style={{
                    color: "indianred",
                    fontSize: "20pt"
                }}
            >
                
                <button>
                    consequences on crabs 
                </button>

            </Html>
            <Html
                
                center
                distanceFactor={15}
                position = {[9, -4, 6]}
                style={{
                    color: "indianred",
                    fontSize: "20pt"
                }}
            >
                
                <button>
                    consequences on starfish    
                </button>

            </Html>
            <Html
                
                center
                distanceFactor={15}
                position = {[2, -2, 3]}
                style={{
                    color: "darkblue",
                    fontSize: "20pt"
                }}
            >
                
                <button>
                    consequences on fish    
                </button>

            </Html>
            <Html
                
                center
                distanceFactor={15}
                position = {[7, -2.5, -4]}
                style={{
                    color: "orange",
                    fontSize: "20pt"
                }}
            >
                
                <button>
                    consequences on corals    
                </button>

            </Html>
            <Html
                
                center
                distanceFactor={15}
                position = {[2.5, -4, 2]}
                style={{
                    color: "white",
                    fontSize: "20pt"
                }}
            >
                
                <button>
                    solutions   
                </button>

            </Html>
            
        </>
        
    );
};

export default Title;