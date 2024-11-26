import React from 'react';
import { Canvas } from '@react-three/fiber';
import BlockWorld from './BlockWorld';
import Lights from './lights/Lights';
import { OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/rapier';

const CarouselBlock = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 10, 30], fov: 60 }}
      style={{ pointerEvents: 'none' }}
    >
      <Lights />
      <Physics>
        <BlockWorld />
      </Physics>
      
      <OrbitControls
        autoRotate
        enablePan={false}
        enableRotate={false}
        enableZoom={false}
      />
    </Canvas>
  );
};

export default CarouselBlock;
