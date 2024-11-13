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
                
                <button>
                    causes
                </button>

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
                
                <button>
                    consequences on crabs 
                </button>

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
                
                <button>
                    consequences on starfish    
                </button>

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
                
                <button>
                    consequences on fish    
                </button>

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
                
                <button>
                    consequences on corals    
                </button>

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
                
                <button>
                    solutions   
                </button>

            </Html>
            
        </>
        
    );
};

export default Title;