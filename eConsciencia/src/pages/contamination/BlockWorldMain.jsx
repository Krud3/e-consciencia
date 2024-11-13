// src/pages/contamination/BlockWorldMain.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import BlockWorld from './BlockWorld';
import Lights from './lights/Lights';
import Controllers from './Controllers';
import Bienvenida from './texts/Bienvenida';
import Controls from './controls/Controls';


const BlockWorldMain = () => {
  
  return (
    <>
      <Canvas  shadows>
        <Controls />
        <Lights />
        <OrbitControls />
        <Environment
          files="/hdris/kloofendal_48d_partly_cloudy_puresky_1k.hdr"
          background
        />
        <BlockWorld />
        <Controllers />
        <Bienvenida />

      </Canvas>

    </>

  );
};

export default BlockWorldMain;
