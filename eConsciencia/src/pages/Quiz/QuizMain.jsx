// src/pages/contamination/BlockWorldMain.jsx
import React, {useEffect} from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Lights from '@/pages/contamination/lights/Lights'
import Controls from '@/pages/contamination/controls/Controls';
import useControlStore from '@/store/use-control-store';
import QuizBlockWorld from '@/pages/Quiz/QuizBlockWorld';
import GarbagePile from './GarbagePile';
import GrassSeaLong from './GrassSeaLong';
import TrashBin from './TrashBin';
import RecycleBin from './RecycleBin';
import { Physics } from '@react-three/rapier';
import SickCorals from './SickCorals';
import HealthyCorals from './HealthyCorals';
import Factory from './Factory';
import Tree from './Tree';
const QuizMain = () => {
  const { quizDataCamera, indexQuiz, handleNexQuiz, handlePrevQuiz } = useControlStore();
  const cameraSettings = quizDataCamera[indexQuiz];

  const [visibilityMap, setVisibilityMap] = React.useState({
    GarbagePile: false,
    GrassSeaLong: false,
    TrashBin: false,
    RecycleBin: false,
    SickCorals: false,
    HealthyCorals: false,
    Factory: false,
    Tree: false,
  });

  useEffect(() => {
    const cameraPosition = quizDataCamera[indexQuiz].position;
    console.log(cameraPosition);
    // Determina visibilidad según la posición de la cámara
    if (cameraPosition[0] === 0 && cameraPosition[1] === -20 && cameraPosition[2] === 5) {
      // CONTAMINATION: Activa los objetos
      setVisibilityMap({
        GarbagePile: true,
        GrassSeaLong: true,
      });
    } else {
      // En cualquier otra posición: Desactiva los objetos
      setVisibilityMap({
        GarbagePile: false,
        GrassSeaLong: false,
      });
    }
  }, [indexQuiz, quizDataCamera]);

  useEffect(() => {
    const cameraPosition = quizDataCamera[indexQuiz].position;
    console.log(cameraPosition);
    // Determina visibilidad según la posición de la cámara
    if (cameraPosition[0] === 0 && cameraPosition[1] === 0 && cameraPosition[2] === -10) {
      // CONTAMINATION: Activa los objetos
      setVisibilityMap({
        TrashBin: true,
        RecycleBin: true, 
       
      });
    } else {
      // En cualquier otra posición: Desactiva los objetos
      setVisibilityMap({
        TrashBin: false,
        RecycleBin: false,
      });
    }
  }, [indexQuiz, quizDataCamera]);

  useEffect(() => {
    const cameraPosition = quizDataCamera[indexQuiz].position;
    console.log(cameraPosition);
    // Determina visibilidad según la posición de la cámara
    if (cameraPosition[0] === 0 && cameraPosition[1] === 0 && cameraPosition[2] === 10) {
      // ACIDIFICACION: Activa los objetos
      setVisibilityMap({
        SickCorals: true,
        HealthyCorals: true, 
       
      });
    } else {
      // En cualquier otra posición: Desactiva los objetos
      setVisibilityMap({
        SickCorals: false,
        HealthyCorals: false,
      });
    }
  }, [indexQuiz, quizDataCamera]);

  useEffect(() => {
    const cameraPosition = quizDataCamera[indexQuiz].position;
    console.log(cameraPosition);
    // Determina visibilidad según la posición de la cámara
    if (cameraPosition[0] === 0 && cameraPosition[1] === 0 && cameraPosition[2] === -7) {
      // ACIDIFICACION: Activa los objetos
      setVisibilityMap({
       Factory: true,
       Tree: true,
       
      });
    } else {
      // En cualquier otra posición: Desactiva los objetos
      setVisibilityMap({
        Factory: false,
        Tree: false,
      });
    }
  }, [indexQuiz, quizDataCamera]);
  
  useEffect(() => {
    console.log('currentIndex', indexQuiz);
    console.log('cameraSettings', cameraSettings);
  } , [indexQuiz]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrevQuiz();
      } else if (event.key === "ArrowRight") {
        handleNexQuiz();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handlePrevQuiz, handleNexQuiz]);
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
        <QuizBlockWorld />
        <GarbagePile 
          position={[-2, -0.3, 10]}
          scale={[2.5,2.5,2.5]}
          visible={visibilityMap.GarbagePile}
        />     
        <GrassSeaLong 
          visible={visibilityMap.GrassSeaLong}
        />  
        <TrashBin
        visible={visibilityMap.TrashBin}
        />
        <Physics>
          <RecycleBin
          visible={visibilityMap.RecycleBin}
          />
        </Physics>
        <Physics>
          <SickCorals
          visible={visibilityMap.SickCorals}
          />
        </Physics>
        <HealthyCorals
          visible={visibilityMap.HealthyCorals}
        />
        
        <Factory
        visible={visibilityMap.Factory}
        />
          
        <Tree
        visible={visibilityMap.Tree}
        />
          
    
      </Canvas>
      
    </>
  );
};

export default QuizMain;
