import React, {useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Lights from '@/pages/contamination/lights/Lights';
import Controls from '@/pages/contamination/controls/Controls';
import useControlStore from '@/store/use-control-store';
import useAuthStore from '@/store/use-auth-store';
import useCoinsStore from '@/store/use-coin-store';

import QuizBlockWorld from '@/pages/Quiz/QuizBlockWorld';
import DialogContext from '@/components/DialogContext';

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
  const { 
    quizDataCamera, 
    indexQuiz, 
    handleNexQuiz, 
    handlePrevQuiz, 
    dataQuiz 
  } = useControlStore();

  const { user } = useAuthStore(); // Para obtener uid
  const { incrementCoins, decrementCoins } = useCoinsStore();

  const cameraSettings = quizDataCamera[indexQuiz];
  const { title, text } = dataQuiz[indexQuiz];

  const [visibilityMap, setVisibilityMap] = useState({
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
    let newVisibility = {
      GarbagePile: false,
      GrassSeaLong: false,
      TrashBin: false,
      RecycleBin: false,
      SickCorals: false,
      HealthyCorals: false,
      Factory: false,
      Tree: false,
    };

    switch (indexQuiz) {
      case 3:
        newVisibility.GarbagePile = true;
        newVisibility.GrassSeaLong = true;
        break;
      case 4:
        newVisibility.TrashBin = true;
        newVisibility.RecycleBin = true;
        break;
      case 5:
        newVisibility.SickCorals = true;
        newVisibility.HealthyCorals = true;
        break;
      case 6:
        newVisibility.Factory = true;
        newVisibility.Tree = true;
        break;
      default:
        break;
    }

    setVisibilityMap(newVisibility);
  }, [indexQuiz]);

  // Funciones para manejar clicks
  const handleIncrementClick = () => {
    if (user?.uid) {
      incrementCoins(user.uid, 10); // Suma 1 moneda
    } else {
      console.log("No user logged in");
    }
    handleNexQuiz(); // Cambiamos de cámara
  };

  const handleDecrementClick = () => {
    if (user?.uid) {
      decrementCoins(user.uid, 10); // Resta 10 monedas
    } else {
      console.log("No user logged in");
    }
    handleNexQuiz(); // Cambiamos de cámara
  };

  useEffect(() => {
    console.log('currentIndex', indexQuiz);
    console.log('cameraSettings', cameraSettings);
  }, [indexQuiz]);

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
      <DialogContext
        title={title}
        text={text}
        onCancel={() => console.log('Cancel pressed')}
        onValidate={() => console.log('Validate pressed')}
      /> 

      <Canvas 
        camera={{
          position: cameraSettings.position,
          fov: cameraSettings.fov,
          near: cameraSettings.near,
          far: cameraSettings.far,
          zoom: cameraSettings.zoom,
        }} 
        shadows
      >
        <Controls cameraSettings={cameraSettings} />
        <Lights />
        <Environment
          files="/hdris/kloofendal_48d_partly_cloudy_puresky_1k.hdr"
          background
        />  
        <QuizBlockWorld />
        
        {/* Incrementan monedas al clicar */}
        <GarbagePile 
          position={[-2, -0.3, 10]}
          scale={[2.5,2.5,2.5]}
          visible={visibilityMap.GarbagePile}
          onObjectClick={handleIncrementClick}
        />    
        <Physics>
        <RecycleBin
          visible={visibilityMap.RecycleBin}
          onObjectClick={handleIncrementClick}
        />
          </Physics> 
        
        <HealthyCorals
          visible={visibilityMap.HealthyCorals}
          onObjectClick={handleIncrementClick}
        />
        <Tree
          visible={visibilityMap.Tree}
          onObjectClick={handleIncrementClick}
        />

        {/* Disminuyen monedas al clicar */}
        <GrassSeaLong 
          visible={visibilityMap.GrassSeaLong}
          onObjectClick={handleDecrementClick}
        />  
        <TrashBin
          visible={visibilityMap.TrashBin}
          onObjectClick={handleDecrementClick}
        />
        <Physics>
          <SickCorals
            visible={visibilityMap.SickCorals}
            onObjectClick={handleDecrementClick}
          />
        </Physics>
        <Factory
          visible={visibilityMap.Factory}
          onObjectClick={handleDecrementClick}
        />
        
      </Canvas>
    </>
  );
};

export default QuizMain;
