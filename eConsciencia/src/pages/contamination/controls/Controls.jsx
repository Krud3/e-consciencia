// Controls.jsx
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Controls = ({ cameraSettings, enabled = true }) => {
  const controlsRef = useRef();

  useEffect(() => {
    if (controlsRef.current && cameraSettings.target) {
      controlsRef.current.target = new THREE.Vector3(...cameraSettings.target);
      controlsRef.current.update();
    }
  }, [cameraSettings]);

  return (
    <OrbitControls
      ref={controlsRef}
      enabled={enabled}
      // Configuración de ángulos y habilitaciones
      maxAzimuthAngle={Math.PI * 0.05}
      minAzimuthAngle={-Math.PI * 0.10}
      maxPolarAngle={Math.PI * 0.45}
      minPolarAngle={Math.PI * 0.35}
      enableZoom={false}
      enablePan={true}
      enableDamping={true}
    />
  );
};

export default Controls;
