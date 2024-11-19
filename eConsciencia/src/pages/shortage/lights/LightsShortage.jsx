import { SpotLight } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";

const LightsShortage = () => {
  const dirLightRef = useRef();
  useEffect(() => {
    // Apuntar la luz al centro de la escena
    dirLightRef.current.target.position.set(0, 0, 0);
    dirLightRef.current.target.updateMatrixWorld();
  }, []);

  const lightRef1 = useRef();
  useFrame(() => {
    if (lightRef1.current) {
      lightRef1.current.target.position.set(...[9, 3, 8]);
      lightRef1.current.target.updateMatrixWorld();
    }
  });

  const lightRef2 = useRef();
  useFrame(() => {
    if (lightRef2.current) {
      lightRef2.current.target.position.set(...[-7, 3, 13]);
      lightRef2.current.target.updateMatrixWorld();
    }
  });

  const lightRef3 = useRef();
  useFrame(() => {
    if (lightRef3.current) {
      lightRef3.current.target.position.set(...[-15, 1, -3]);
      lightRef3.current.target.updateMatrixWorld();
    }
  });

  const lightRef4 = useRef();
  useFrame(() => {
    if (lightRef4.current) {
      lightRef4.current.target.position.set(...[7, 1, -8]);
      lightRef4.current.target.updateMatrixWorld();
    }
  });

  return (
    <>
     
      <directionalLight
        ref={dirLightRef}
        position={[50, 100, 50]} // Ajusta la posición según sea necesario
        intensity={0.7}
        castShadow
        shadow-mapSize-width={5048}
        shadow-mapSize-height={5048}
        shadow-camera-near={0.5}
        shadow-camera-far={500}
        shadow-camera-left={-200}
        shadow-camera-right={200}
        shadow-camera-top={200}
        shadow-camera-bottom={-200}
        color={"#fae9ac"}
      />{" "}
      <SpotLight
        ref={lightRef1}
        position={[5, 9, 5]}
        intensity={400}
        angle={0.8}
        color={"yellow"}
        castShadow
        penumbra={1}
        distance={20}
      />
      <SpotLight
        ref={lightRef2}
        position={[-2, 9, 6]}
        intensity={1800}
        angle={0.6}
        color={"blue"}
        castShadow
        penumbra={0.1}
        distance={20}
      />
      <SpotLight
        ref={lightRef3}
        position={[-5, 9, -3]}
        intensity={500}
        angle={0.6}
        color={"orange"}
        castShadow
        penumbra={0.1}
        distance={13}
      />
      <SpotLight
        ref={lightRef4}
        position={[5, 9, -2]}
        intensity={700}
        angle={0.6}
        color={"white"}
        castShadow
        penumbra={0.1}
        distance={13}
      />
    </>
  );
};

export default LightsShortage;
