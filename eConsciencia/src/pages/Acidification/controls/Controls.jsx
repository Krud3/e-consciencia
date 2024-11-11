import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { OrbitControls } from "@react-three/drei";

const Controls = ({ cameraPosition }) => {
  const { camera } = useThree();

  useEffect(() => {
    // Actualiza la posición de la cámara cuando `cameraPosition` cambia
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
  }, [cameraPosition, camera]);

  return <OrbitControls enablePan={false} enableZoom={false} autoRotate={false} />;
};

export default Controls;
