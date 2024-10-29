import { SpotLight } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const LightsShortage = ({ position = [5, 5, 5], targetPosition = [0, 0, 0], color = 'white', intensity = 2000, angle = 0.3 }) => {
  const lightRef = useRef();

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.target.position.set(...targetPosition);
      lightRef.current.target.updateMatrixWorld();
    }
  });

  return (
    <SpotLight
      ref={lightRef}
      position={position}
      intensity={intensity}
      angle={angle}
      color={color}
      castShadow
      penumbra={0.5}
    />
  );
};

export default LightsShortage;
