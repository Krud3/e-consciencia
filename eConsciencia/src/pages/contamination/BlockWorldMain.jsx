// src/pages/contamination/BlockWorldMain.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import BlockWorld from './BlockWorld';
import Lights from './lights/Lights';

const BlockWorldMain = () => {
  return (
    <Canvas  shadows>
      <Lights />
      <OrbitControls />
      <BlockWorld />
    </Canvas>
  );
};

export default BlockWorldMain;
