// src/pages/contamination/BlockWorldMain.jsx
import React, {useEffect, useCallback, useRef, useState } from 'react';
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
import { PositionalAudio } from '@react-three/drei';

const BlockWorldMain = () => {
  const { isPlaying, dataCamera, currentIndex } = useControlStore();
  const cameraSettings = isPlaying ? dataCamera[currentIndex+1] : dataCamera[0];


  useEffect(() => {
    console.log('currentIndex', currentIndex);
    console.log('cameraSettings', cameraSettings);
  } , [currentIndex]);

  const tractorAudioRef = useRef();
  const seaAudioRef = useRef();
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const handleAudioToggle = useCallback(() => {
    if (tractorAudioRef.current && seaAudioRef.current) {
      if (isAudioPlaying) {
        tractorAudioRef.current.pause();
        seaAudioRef.current.pause();
      } else {
        tractorAudioRef.current.play();
        tractorAudioRef.current.setVolume(2);

        seaAudioRef.current.play();
        seaAudioRef.current.setVolume(10);
      }
      setIsAudioPlaying(!isAudioPlaying);
    }
  }, [isAudioPlaying]);

  return (
    <>
      <button
        onClick={handleAudioToggle}
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          zIndex: 1000,
          padding: '10px 15px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {isAudioPlaying ? 'Apagar Sonido' : 'Activar Sonido'}
      </button>
      <Canvas  
        camera={{
          position: cameraSettings.position,
          fov: cameraSettings.fov,
          near: cameraSettings.near,
          far: cameraSettings.far,
          zoom: cameraSettings.zoom,
          rotation: cameraSettings.rotation,
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
        <group position={[52.055, 0, 10.11]}>
            <PositionalAudio ref={tractorAudioRef} loop url="/sounds/tractor.mp3" distance={2} />
        </group>

        <group position={[0.305, -2.899, 60.539]}>
            <PositionalAudio ref={seaAudioRef} loop url="/sounds/sea.mp3" distance={2} />
        </group>
        <Controllers />
        {!isPlaying && <Bienvenida />}
      </Canvas>
    </>
  );
};

export default BlockWorldMain;
