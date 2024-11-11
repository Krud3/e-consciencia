import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { OrbitControls } from "@react-three/drei";

const Controls = ({ cameraPosition }) => {
  const { camera } = useThree();

    useEffect(() => {
        // Updates the camera position when `cameraPosition` changes
        camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    }, [cameraPosition, camera]);

    // keyboard effects
    useEffect(() => {
        const handleKeyDown = (event) => {
          switch (event.key) {
            case "ArrowUp": // Moves the camera up
              camera.position.y += 0.5;
              break;
            case "ArrowDown": // Moves the camera down
              camera.position.y -= 0.5;
              break;
            case "ArrowLeft": // Moves the camera to the left
              camera.position.z -= 0.5;
              break;
            case "ArrowRight": // Moves the camera to the right 
              camera.position.z += 0.5;
              break;
              case "w": // Moves the camera up
              camera.position.y += 0.5;
              break;
            case "s": // Moves the camera down
              camera.position.y -= 0.5;
              break;
            case "a": // Moves the camera to the left
              camera.position.z -= 0.5;
              break;
            case "d": // Moves the camera to the right 
              camera.position.z += 0.5;
              break;
            case "z": // Zoom in
              camera.position.x -= 0.5;
              break;
            case "x": // Zoom out
              camera.position.x += 0.5;
              break;
            default:
              break;
          }
        };
    
        // Adds the keyboard event 
        window.addEventListener("keydown", handleKeyDown);
    
        // Clears the event when the component is unmounted
        return () => {
          window.removeEventListener("keydown", handleKeyDown);
        };
      }, [camera]);
    
    return (
        <OrbitControls
            enablePan={true}   
            enableZoom={true} 
            autoRotate={false}
            minDistancie={5} //Minimum zoom distance
            maxDistance={15.5} //Maximum zoom distance
            //minPolarAngle={Math.PI / 4}   //Minimum angle (avoids the view from below)
            maxPolarAngle={Math.PI-Math.PI/ 2.65}   // Maximum angle (limits the view from above)
        />
    );
};

export default Controls;
