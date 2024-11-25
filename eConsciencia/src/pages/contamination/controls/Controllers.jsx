// Controllers.jsx
import { Html } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import Conscientization from "../texts/Conscientization";
import useControlStore from "../../../store/use-control-store";
import * as THREE from "three";
import "./Controllers.css";

const Controllers = () => {
  const { camera, size } = useThree();

  const { currentIndex, data, handleNext, handlePrev, isPlaying, setIsPlaying } = useControlStore();

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
    const dist = 1; // Distancia frente a la cámara donde colocar los controles
    const height = 2 * Math.tan(vFOV / 2) * dist; // Altura visible a la distancia `dist`
    const width = height * camera.aspect; // Ancho visible a la distancia `dist`

    // Posiciones en el espacio de la cámara
    const leftArrowPosition = new THREE.Vector3(-width / 2 + 0.4, 0, -dist);
    const rightArrowPosition = new THREE.Vector3(width / 2 - 0.4, 0, -dist);
    const restartButtonPosition = new THREE.Vector3(0, -height / 2 + 0.4, -dist);
    const conscientizationPosition = new THREE.Vector3(0, height /8, -dist); 

    // Transforma las posiciones al espacio mundial
    leftArrowPosition.applyMatrix4(camera.matrixWorld);
    rightArrowPosition.applyMatrix4(camera.matrixWorld);
    restartButtonPosition.applyMatrix4(camera.matrixWorld);
    conscientizationPosition.applyMatrix4(camera.matrixWorld);

    // Actualiza el estado con las nuevas posiciones
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
            position={positions.leftArrow.toArray()}
            style={{ pointerEvents: "none" }}
          >
            <div style={{ pointerEvents: "auto" }}>
              <button className="arrow-container" role="button" onClick={handlePrev}>
                <div className="left-arrow"></div>
              </button>
            </div>
          </Html>

          <Html
            position={positions.rightArrow.toArray()}
            style={{ pointerEvents: "none" }}
          >
            <div style={{ pointerEvents: "auto" }}>
              <button className="arrow-container" role="button" onClick={handleNext}>
                <div className="right-arrow"></div>
              </button>
            </div>
          </Html>
          <Html
          center
            position={positions.conscientization.toArray()}
            style={{ pointerEvents: "none" }}
          >
            <div style={{ pointerEvents: "auto", textAlign: "center", maxWidth: "80vw" }}>
              <Conscientization
                title={data[currentIndex].title}
                text={data[currentIndex].text}
              />
            </div>
          </Html>

          <Html
            position={positions.restartButton.toArray()}
            style={{ pointerEvents: "none" }}
          >
            <div style={{ pointerEvents: "auto" }}>
              <button onClick={setIsPlaying} className="re-start-button" role="button">
                Re-start
              </button>
            </div>
          </Html>
        </>
      )}
    </>
  );
};

export default Controllers;
