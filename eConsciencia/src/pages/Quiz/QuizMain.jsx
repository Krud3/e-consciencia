import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Lights from '@/pages/contamination/lights/Lights';
import Controls from '@/pages/contamination/controls/Controls';
import useControlStore from '@/store/use-control-store';
import QuizBlockWorld from '@/pages/Quiz/QuizBlockWorld';
import DialogContext from '@/components/DialogContext';

const QuizMain = () => {
  const { 
    quizDataCamera, 
    indexQuiz, 
    handleNexQuiz, 
    handlePrevQuiz, 
    dataQuiz 
  } = useControlStore();

  const cameraSettings = quizDataCamera[indexQuiz];

  const { title, text } = dataQuiz[indexQuiz];

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
      </Canvas>
    </>
  );
};

export default QuizMain;
