// src/pages/contamination/BlockWorldMain.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import BlockWorld from './BlockWorld';
import Lights from './lights/Lights';
import Controllers from './Controllers';

const BlockWorldMain = () => {
  return (
    <>
      <Canvas  shadows>
        <Lights />
        <OrbitControls />
        <Environment
          files="/hdris/kloofendal_48d_partly_cloudy_puresky_1k.hdr"
          background
        />
        <BlockWorld />
        <Controllers />
      </Canvas>

    </>

  );
};

export default BlockWorldMain;
