// src/pages/contamination/BlockWorldMain.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import BlockWorld from './BlockWorld';
import Lights from './lights/Lights';
import Controllers from './controls/Controllers';
import Bienvenida from './texts/Bienvenida';
import Controls from './controls/Controls';


const BlockWorldMain = () => {

  const cameraSettings = {
    position : [0, 65, 0],
  };
  
  return (
    <>
      <Canvas camera={cameraSettings} shadows>
        <Controls />
        <Lights />
        
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
