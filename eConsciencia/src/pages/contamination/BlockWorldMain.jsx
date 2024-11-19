// src/pages/contamination/BlockWorldMain.jsx
import React, {useEffect} from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import BlockWorld from './BlockWorld';
import Lights from './lights/Lights';
import Controllers from './controls/Controllers';
import Bienvenida from './texts/Bienvenida';
import Controls from './controls/Controls';
import useControlStore from '@/store/use-control-store';

const BlockWorldMain = () => {
  const { isPlaying, dataCamera, currentIndex } = useControlStore();
  const cameraSettings = isPlaying ? dataCamera[currentIndex] : dataCamera[0];

  return (
    <>
      <Canvas camera={{ position: cameraSettings.position }} shadows>
        <Controls cameraSettings={cameraSettings} />
        <Lights />
        <Environment
          files="/hdris/kloofendal_48d_partly_cloudy_puresky_1k.hdr"
          background
        />
        <BlockWorld />
        <Controllers />
        {!isPlaying && <Bienvenida />}
      </Canvas>
    </>
  );
};

export default BlockWorldMain;
