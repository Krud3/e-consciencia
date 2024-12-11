// Controls.jsx
import { OrbitControls } from "@react-three/drei";
import { useThree, useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const Controls = ({ cameraSettings, enabled = true }) => {
  const controlsRef = useRef();
  const { camera } = useThree();
  const [transitioning, setTransitioning] = useState(false);

  const currentPosition = useRef(new THREE.Vector3().copy(camera.position));
  const currentTarget = useRef(new THREE.Vector3().copy(controlsRef.current?.target || new THREE.Vector3()));

  useEffect(() => {
    if (cameraSettings) {
      setTransitioning(true);
      currentPosition.current.copy(camera.position);
      currentTarget.current.copy(controlsRef.current?.target || new THREE.Vector3());
    }
  }, [cameraSettings]);

  useFrame(() => {
    if (controlsRef.current && cameraSettings && transitioning) {
      const desiredPosition = new THREE.Vector3(...cameraSettings.position);
      const desiredTarget = new THREE.Vector3(...cameraSettings.target);
      currentPosition.current.lerp(desiredPosition, 0.05);
      camera.position.copy(currentPosition.current);

      currentTarget.current.lerp(desiredTarget, 0.05);
      controlsRef.current.target.copy(currentTarget.current);

      camera.fov = THREE.MathUtils.lerp(camera.fov, cameraSettings.fov, 0.05);
      camera.near = THREE.MathUtils.lerp(camera.near, cameraSettings.near, 0.05);
      camera.far = THREE.MathUtils.lerp(camera.far, cameraSettings.far, 0.05);
      camera.zoom = THREE.MathUtils.lerp(camera.zoom, cameraSettings.zoom || 1, 0.05);
      camera.updateProjectionMatrix();

      controlsRef.current.update();
      const positionDiff = currentPosition.current.distanceTo(desiredPosition);
      const targetDiff = currentTarget.current.distanceTo(desiredTarget);

      if (positionDiff < 0.01 && targetDiff < 0.01) {
        setTransitioning(false);
      }
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enabled={enabled && !transitioning}
      maxAzimuthAngle={Math.PI * 0.05}
      minAzimuthAngle={-Math.PI * 0.10}
      maxPolarAngle={Math.PI * 0.45}
      minPolarAngle={Math.PI * 0.35}
      enableZoom={true}
      enablePan={true}
      enableDamping={true}
      dampingFactor={0.02} 
      rotateSpeed={0.2}
    />
  );
};

export default Controls;
