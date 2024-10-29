// src/components/Lights.jsx
import React, { useRef, useEffect } from 'react';

const Lights = () => {
  const dirLightRef = useRef();

  useEffect(() => {
    // Apuntar la luz al centro de la escena
    dirLightRef.current.target.position.set(0, 0, 0);
    dirLightRef.current.target.updateMatrixWorld();
  }, []);

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        ref={dirLightRef}
        position={[50, 100, 50]} // Ajusta la posición según sea necesario
        intensity={4}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={500}
        shadow-camera-left={-200}
        shadow-camera-right={200}
        shadow-camera-top={200}
        shadow-camera-bottom={-200}
      />
    </>
  );
};

export default Lights;