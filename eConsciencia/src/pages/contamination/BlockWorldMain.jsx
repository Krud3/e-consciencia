// src/pages/contamination/BlockWorldMain.jsx
import React, {useEffect} from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import BlockWorld from './BlockWorld';
import Shark from './Shark';
import Lights from './lights/Lights';
import Controllers from './controls/Controllers';
import Bienvenida from './texts/Bienvenida';
import Controls from './controls/Controls';
import useControlStore from '@/store/use-control-store';
import { Physics } from '@react-three/rapier';

const BlockWorldMain = () => {
  const { isPlaying, dataCamera, currentIndex } = useControlStore();
  const cameraSettings = isPlaying ? dataCamera[currentIndex+1] : dataCamera[0];


  useEffect(() => {
    console.log('currentIndex', currentIndex);
    console.log('cameraSettings', cameraSettings);
  } , [currentIndex]);

  return (
    <>
      <Canvas  
        camera={{
          position: cameraSettings.position,
          fov: cameraSettings.fov,
          near: cameraSettings.near,
          far: cameraSettings.far,
          zoom: cameraSettings.zoom,
        }}shadows>
        <Controls cameraSettings={cameraSettings} />
        <Lights />
        <Environment
          files="/hdris/kloofendal_48d_partly_cloudy_puresky_1k.hdr"
          background
        />
        <Physics >
          <BlockWorld />
          <Shark  position={[0.305, -2.899, 54.539]}/>
        </Physics>
        
        <Controllers />
        {!isPlaying && <Bienvenida />}
      </Canvas>
    </>
  );
};

export default BlockWorldMain;
