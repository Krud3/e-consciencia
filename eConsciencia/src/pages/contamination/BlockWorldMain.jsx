// src/pages/contamination/BlockWorldMain.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import BlockWorld from './BlockWorld';
import Lights from './lights/Lights';
import Controllers from './controls/Controllers';
import Bienvenida from './texts/Bienvenida';
import Controls from './controls/Controls';
import useControlStore from '@/store/use-control-store';


const BlockWorldMain = () => {

  const cameraSettings = {
    position : [0, 65, 0],
    
    
  };

  const isPlaying = useControlStore((state) => state.isPlaying);
  
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
        {!isPlaying && (<Bienvenida />)}

      </Canvas>

    </>

  );
};

export default BlockWorldMain;
