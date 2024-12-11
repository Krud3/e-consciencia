// src/pages/contamination/BlockWorldMain.jsx
import React, { useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Lights from "@/pages/contamination/lights/Lights";
import Controls from "@/pages/contamination/controls/Controls";
import useControlStore from "@/store/use-control-store";
import QuizBlockWorld from "@/pages/Quiz/QuizBlockWorld";

// estras
import { db } from "../../../firebase.config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import QuizShortage from "./QuizShortage/QuizShortage";

const QuizMain = () => {
  const { quizDataCamera, indexQuiz, handleNexQuiz, handlePrevQuiz } =
    useControlStore();
  const cameraSettings = quizDataCamera[indexQuiz];

  const [score, setScore] = useState(0);
  const [hasMedalShortage, setHasMedalShortage] = useState(false);
  const [ecosystemState, setEcosystemState] = useState({
    pez1: false,
    pez2: false,
    pez3: false,
    pez4: false,
    grifo: false,
  });
  const [currentWaterQuestion, setCurrentWaterQuestion] = useState(0);

  const cantidadObjetos = Object.keys(ecosystemState).length;
  const [showMedalMessage, setShowMedalMessage] = useState(false); // Estado para mensaje de medalla

  const handleMedalClick = () => {
    setShowMedalMessage(true); // Mostrar el mensaje
    setTimeout(() => {
      setShowMedalMessage(false); // Ocultar después de 5 segundos
    }, 5000);
  };

  useEffect(() => {
    const allTrue = Object.values(ecosystemState).every((value) => value);
    if (allTrue) {
      setHasMedalShortage(true);
    }
  }, [ecosystemState]);

  // Cargar estado desde Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "quizState", "state"); // Documento único
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setScore(data.score || 0);
          setHasMedalShortage(data.hasMedalShortage || false);
          setEcosystemState(
            data.ecosystemState || {
              pez1: false,
              pez2: false,
              pez3: false,
              pez4: false,
              grifo: false,
            }
          );
          setCurrentWaterQuestion(data.currentWaterQuestion || 0);
        }
      } catch (error) {
        console.log(); //console.error("Error loading data from Firestore:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      try {
        const docRef = doc(db, "quizState", "state");
        await setDoc(docRef, {
          score,
          hasMedalShortage,
          ecosystemState,
          currentWaterQuestion,
        });
      } catch (error) {
        console.log(); //console.error("Error saving data to Firestore:", error);
      }
    };
    saveData();
  }, [score, hasMedalShortage, ecosystemState, currentWaterQuestion]);

  const handleResetQuiz = () => {
    setScore(0);
    setEcosystemState({
      pez1: false,
      pez2: false,
      pez3: false,
      pez4: false,
      grifo: false,
    });
    setCurrentWaterQuestion(0);
  };

  useEffect(() => {
    // Verificar si todos los valores en ecosystemState son verdaderos
    const allTrue = Object.values(ecosystemState).every((value) => value);

    // Actualizar hasMedalShortage si la condición cambia
    if (allTrue) {
      setHasMedalShortage(true);
    }
  }, [ecosystemState]); // Ejecutar cuando ecosystemState cambie

  useEffect(() => {
    console.log("currentIndex", indexQuiz);
    console.log("cameraSettings", cameraSettings);
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
      {" "}
      {!Object.values(ecosystemState).every((value) => value === true) ? (
        <div className="absolute left-6 top-20 z-10 rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 p-8 shadow-lg transform transition-all hover:scale-105">
          <h1 className="text-4xl font-extrabold text-white mb-4 animate__animated animate__fadeIn">
            ESCASEZ DE AGUA
          </h1>
          <p className="text-lg text-white font-medium">
            Selecciona la escena que esté relacionada con:{" "}
            <span className="text-yellow-300 font-semibold">
              escasez del agua
            </span>
          </p>
        </div>
      ) : (
        <div className="absolute left-6 top-20 z-10 rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 p-8 shadow-lg transform transition-all hover:scale-105">
          <h2 className="text-3xl font-extrabold text-white mb-4 animate__animated animate__fadeIn">
            ¡Felicidades! 🎉
          </h2>
          <p className="text-xl text-white font-medium">
            Has completado encontrado todos los objetivos. Tu puntuación:{" "}
            <span className="font-semibold text-yellow-300">{score}</span>
          </p>
          <p className="text-xl text-white font-medium">
            Cierra las llaves, salva el agua y protege la vida de los peces.
          </p>
          <button
            onClick={handleResetQuiz}
            className="mt-6 rounded bg-yellow-500 px-6 py-3 text-white font-semibold hover:bg-yellow-400 transition-colors hover:text-slate-600"
          >
            Reiniciar Quiz
          </button>
        </div>
      )}
      <div className="absolute left-1/2 z-40 top-20 -translate-x-1/2 transform rounded-lg bg-black/50 px-4 py-2 text-white">
        Puntuación: {score}
      </div>
      {hasMedalShortage && (
        <div
          onClick={handleMedalClick}
          className="absolute bottom-6 right-6 z-10 transform cursor-pointer rounded-full bg-blue-500 p-6 text-white shadow-lg transition-transform hover:scale-110"
        >
          <div className="flex flex-col items-center">
            <span className="mb-1 text-5xl">🏅</span>
            <span className="text-sm font-bold">¡Medalla de Honor!</span>
            <span className="text-sm font-bold">¡Escasez!</span>
          </div>
        </div>
      )}
      {showMedalMessage && (
        <div className="absolute bottom-44 right-6 z-20 transform rounded-lg bg-yellow-500 bg-opacity-90 px-6 py-3 text-white shadow-lg transition-opacity">
          Medalla por pasar la parte de shortage
        </div>
      )}
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

        <QuizShortage
          ecosystemState={ecosystemState}
          setEcosystemState={setEcosystemState}
          setScore={setScore}
        ></QuizShortage>
      </Canvas>
    </>
  );
};

export default QuizMain;
