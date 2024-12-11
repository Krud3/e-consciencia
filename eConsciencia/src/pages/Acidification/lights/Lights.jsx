import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { PointLightHelper } from "three";
import { DirectionalLightHelper } from "three";
const Lights = () => {
    const pointLightRef = useRef();
    useHelper(pointLightRef, PointLightHelper);

    const directionalLightRef = useRef();
    useHelper(directionalLightRef, DirectionalLightHelper);

    return (
        <>  
            <ambientLight color = {"#ffe3d6"} intensity={0.5} />
            <directionalLight
                position={[5, 2.2, 10]}
                intensity={12}
                castShadow
            />
                  {/* Lights and shadows in important positions */}
            <pointLight position={[10, -3.5, 6]} intensity={20} color="#66ffcc" />
            <pointLight position={[7.8, -2.5, -4.5]} intensity={10} color="#66ffcc" />
            <pointLight position={[-3, -3, -6]} intensity={10} color="#66ffcc" />
        </>
    );
};
export default Lights;