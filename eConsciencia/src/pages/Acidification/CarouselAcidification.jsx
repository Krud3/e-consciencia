import { Canvas } from "@react-three/fiber";
import SeaBlockWorld from "./models-3d/SeaBlockWorld"
import Lights from "./lights/Lights";
import { OrbitControls } from '@react-three/drei';


const CarouselAcidification = () => {
  return (
    <>
        <Canvas shadows
              camera={{ position: [5, 10, 10], fov: 60 }}
              style={{ pointerEvents: 'none' }}>
            <Lights/>
            <OrbitControls
                autoRotate
                enablePan={false}
                enableRotate={false}
                enableZoom={false}
            />
            <SeaBlockWorld/>
        </Canvas>
        
    </>
  );
};
//            <directionalLight position={[10, 10, 5]} intensity={1} />
//<pointLight position={[0, 10, 0]} intensity={0.5} />
export default CarouselAcidification;
