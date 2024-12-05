import { Html } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import Conscientization from "../texts/Conscientization";
import Solution from "../texts/Solution";
import useControlStore from "../../../store/use-control-store";
import * as THREE from "three";
import "./Controllers.css";

const Controllers = () => {
  const { camera } = useThree();
  const {
    currentIndex,
    data,
    handleNext,
    handlePrev,
    isPlaying,
    setIsPlaying,
  } = useControlStore();

  // Calcula 'isOnSolution' basado en 'currentIndex'
  const isOnSolution = currentIndex >= 7;

  // Define 'colore' basado en 'isOnSolution'
  const colore = isOnSolution ? "green" : "blue";

  // Estado para almacenar las posiciones calculadas
  const [positions, setPositions] = useState({
    leftArrow: new THREE.Vector3(),
    rightArrow: new THREE.Vector3(),
    restartButton: new THREE.Vector3(),
    conscientization: new THREE.Vector3(),
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrev();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handlePrev, handleNext]);

  useFrame(() => {
    // Calcula el FOV vertical en radianes
    const vFOV = THREE.MathUtils.degToRad(camera.fov);
    const dist = 1; 
    const height = 2 * Math.tan(vFOV / 2) * dist;
    const width = height * camera.aspect; 

    // Posiciones en el espacio de la cámara
    const leftArrowPosition = new THREE.Vector3(-width / 2 + 0.4, 0, -dist);
    const rightArrowPosition = new THREE.Vector3(width / 2 - 0.4, 0, -dist);
    const restartButtonPosition = new THREE.Vector3(0, -height / 2 + 0.4, -dist);
    const conscientizationPosition = new THREE.Vector3(0, height / 3, -dist);

    leftArrowPosition.applyMatrix4(camera.matrixWorld);
    rightArrowPosition.applyMatrix4(camera.matrixWorld);
    restartButtonPosition.applyMatrix4(camera.matrixWorld);
    conscientizationPosition.applyMatrix4(camera.matrixWorld);

    setPositions({
      leftArrow: leftArrowPosition,
      rightArrow: rightArrowPosition,
      restartButton: restartButtonPosition,
      conscientization: conscientizationPosition,
    });
  });

  return (
    <>
      {!isPlaying && (
        <Html center>
          <button onClick={setIsPlaying} className="is-playing-button" role="button">
            Start the journey
          </button>
        </Html>
      )}

      {isPlaying && (
        <>
          <Html
            center
            position={positions.leftArrow.toArray()}
            style={{ pointerEvents: "none" }}
          >
            {currentIndex !== 7 && (
              <div style={{ pointerEvents: "auto" }}>
                <button className="arrow-container" role="button" onClick={handlePrev}>
                  <div className="left-arrow"></div>
                </button>
              </div>
            )}
          </Html>

          <Html
            center
            position={positions.rightArrow.toArray()}
            style={{ pointerEvents: "none" }}
          >
            {currentIndex !== 7 && (
              <div style={{ pointerEvents: "auto" }}>
                <button className="arrow-container" role="button" onClick={handleNext}>
                  <div className="right-arrow"></div>
                </button>
              </div>
            )}
          </Html>

          <Html
            center
            position={positions.conscientization.toArray()}
            style={{ pointerEvents: "none" }}
          >
            {currentIndex !== 7 && (
              <div
                style={{
                  pointerEvents: "auto",
                  textAlign: "center",
                  maxWidth: "80vw",
                }}
              >
                <Conscientization
                  title={data[currentIndex].title}
                  text={data[currentIndex].text}
                  color={colore} 
                />
              </div>
            )}
          </Html>

          <Html
            center
            position={positions.restartButton.toArray()}
            style={{ pointerEvents: "none" }}
          >
            <div style={{ pointerEvents: "auto" }}>
              <button onClick={setIsPlaying} className="re-start-button" role="button">
                Re-start
              </button>
            </div>
          </Html>

          {currentIndex === 7 && data[currentIndex]?.title && (
            <Solution onClick={handleNext} tittle={data[currentIndex].title} />
          )}
        </>
      )}
    </>
  );
};

export default Controllers;
