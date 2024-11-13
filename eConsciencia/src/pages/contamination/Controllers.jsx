import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import "./Controllers.css";


const Controllers = () => {
    const { viewport, size } = useThree();

    // Tamaño del viewport (en unidades del mundo 3D)
    const { width, height } = viewport;
  
    // Tamaño del canvas en píxeles
    const { width: canvasWidth, height: canvasHeight } = size;
    console.log(canvasWidth, canvasHeight, height, canvasHeight -(canvasHeight/2));
    return (
        <>
            <Html
            style={{
                position: "relative",
                right: `${canvasWidth -(canvasWidth/2)-200}px`,
                }}
            >
                <div className="left-arrow"></div> 
            </Html>

            <Html
            style={{
                position: "relative",
                left: `${canvasWidth -(canvasWidth/2)-200}px`,
                }}
            >
                <div className = "right-arrow"></div>
            </Html>
            
        </>
      );
  };
  

export default Controllers;