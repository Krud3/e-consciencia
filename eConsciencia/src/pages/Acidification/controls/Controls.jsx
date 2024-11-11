import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { OrbitControls } from "@react-three/drei";

const Controls = ({ cameraPosition }) => {
  const { camera } = useThree();

  useEffect(() => {
    // Actualiza la posición de la cámara cuando `cameraPosition` cambia
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
  }, [cameraPosition, camera]);

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
