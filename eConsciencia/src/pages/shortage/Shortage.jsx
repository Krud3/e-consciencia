//import Header from "../../components/Header/Header";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text3D } from "@react-three/drei";
import LightsShortage from "./lights/LightsShortage";
import React, { useState, useEffect, Suspense, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { Sky, Stars } from "@react-three/drei";
import { PositionalAudio } from "three";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
//utils
import {
  concienciaAguaText,
  concienciaAguaitems,
  solucionesAguaText,
  solutionAguaItems,
} from "@/utils/textos";

//modelos
import { Scene } from "./scene";
import * as THREE from "three";
const AudioComponent = ({ url }) => {
  const { camera, scene } = useThree(); // Accede al contexto de Three.js
  const audioRef = useRef();

  useEffect(() => {
    // Crea el listener y el PositionalAudio
    const listener = new THREE.AudioListener();
    camera.add(listener); // Añade el listener a la cámara

    const sound = new THREE.PositionalAudio(listener);
    const audioLoader = new THREE.AudioLoader();

    audioLoader.load(
      url,
      (buffer) => {
        sound.setBuffer(buffer);
        sound.setLoop(true);
        sound.setVolume(20); // Ajusta el volumen
        audioRef.current = sound; // Guarda la referencia
        sound.play(); // Opcional: inicia reproducción automática
      },
      undefined,
      (error) => console.error("Error al cargar el audio:", error)
    );

    // Añade el PositionalAudio a la escena
    scene.add(sound);

    return () => {
      camera.remove(listener); // Limpia el listener al desmontar
      scene.remove(sound); // Limpia el sonido al desmontar
    };
  }, [camera, scene, url]);

  return null; // Este componente no renderiza nada visible
};

function CameraAnimation({ viewIndex, positions, tarjets }) {
  const { camera } = useThree();

  useEffect(() => {
    gsap.to(camera.position, {
      x: positions[viewIndex][0],
      y: positions[viewIndex][1],
      z: positions[viewIndex][2],
      duration: 1,
      ease: "power0",
      onUpdate: () => camera.updateProjectionMatrix(),
    });

    const target = {
      // Definir un objeto de target para la animación
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z,
    };

    gsap.to(target, {
      x: tarjets[viewIndex][0],
      y: tarjets[viewIndex][1],
      z: tarjets[viewIndex][2],
      duration: 1,
      ease: "power0", // Mantener el mismo easing para la sincronización
      onUpdate: () => {
        camera.lookAt(target.x, target.y, target.z);
      },
    });
  }, [viewIndex]);

  return (
    <OrbitControls
      target={[
        tarjets[viewIndex][0],
        tarjets[viewIndex][1],
        tarjets[viewIndex][2],
      ]}
      enableZoom={true}
      enablePan={false}
      enableRotate={false}
      minDistance={8} // Distancia mínima del zoom
      maxDistance={20} // Distancia máxima del zoom
    />
  );
}

const Shortage = () => {
  const [viewIndex, setViewIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [focusMode, setFocusMode] = useState(false);
  const [showInfo, setShowInfo] = useState(false); // Nuevo estado para mostrar el mensaje

  const [isDamaged, setIsDamaged] = useState(false);
  const [focusDistance, setFocusDistance] = useState(0.02);

  useEffect(() => {
    const animateFocus = () => {
      // Cambiar gradualmente a 2
      gsap.to({ value: focusDistance }, {
        value: 1,
        duration: 1, // Duración de 1 segundo
        onUpdate: function () {
          setFocusDistance(this.targets()[0].value);
        },
        onComplete: () => {
          // Regresar gradualmente a 0.02 después de 1 segundo
          gsap.to({ value: 2 }, {
            value: 0.02,
            duration: 1,
            onUpdate: function () {
              setFocusDistance(this.targets()[0].value);
            }
          });
        }
      });
    };

    const interval = setInterval(() => {
      animateFocus();
    }, 10000); // Ejecuta cada 10 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [focusDistance]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isAnimating) return;
      setIsAnimating(true);

      if (event.key === "ArrowRight") {
        // Si se presiona la tecla derecha, aumentar el índice de vista
        setViewIndex((prev) => (prev + 1) % 4);
      } else if (event.key === "ArrowLeft") {
        // Si se presiona la tecla izquierda, disminuir el índice de vista
        setViewIndex((prev) => (prev - 1 + 4) % 4);
      }

      setTimeout(() => setIsAnimating(false), 1000);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAnimating]);

  useEffect(() => {
    const handleClick = () => {
      setFocusMode((prev) => !prev);
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const positions = [
    [2, 6, 2],
    [0, 5, 0],
    [-2, 5, 3],
    [-2, 5, -2],
  ];

  const focus = [
    [10, 5, -12],
    [10, 6, 11],
    [-10, 6, 14],
    [-15, 6, -3],
  ];

  // Define el contenido según si está "dañado" o  solutionAguaItems
  const currentText = isDamaged ? concienciaAguaText : solucionesAguaText;
  const currentItems = isDamaged ? concienciaAguaitems : solutionAguaItems;

  return (
    <>
      {focusMode && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black bg-opacity-80 p-8 text-2xl text-white">
          <p className="text-3xl text-center mb-4">
            <strong>{currentText[viewIndex].title}</strong>
          </p>
          <p className="text-3xl text-center">{currentText[viewIndex].txt}</p>
        </div>
      )}
      <button
        onClick={() => setShowInfo(!showInfo)}
        className="absolute top-20 left-4 z-30 p-2 bg-blue-500 text-white rounded-full"
      >
        ?
      </button>
      {showInfo && (
        <div className="absolute top-32 left-4 z-30 p-4 bg-white text-black border rounded shadow-lg">
          <p>¡Navega por el mundo y descubre más! 🌍</p>
          <p>
            Usa las flechas ⬅️ ➡️ para moverte y haz click👆 para leer el
            mensaje completo.
          </p>
        </div>
      )}
      <Canvas className="bg-cyan-200" shadows={true}>
        <Suspense fallback={null}>
          <Sky
            distance={4500}
            sunPosition={[200, 20, 100]}
            inclination={0.6}
            azimuth={0.25}
          />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
          />
          <AudioComponent url="/sound/ocean-waves.mp3" />
          <CameraAnimation
            viewIndex={viewIndex}
            positions={positions}
            tarjets={focus}
          />

          <LightsShortage />

          <Scene isDamaged={isDamaged} setIsDamaged={setIsDamaged} />

          {currentItems.map((item, index) => (
            <Text3D
              key={index}
              position={item.position}
              font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
              size={0.4}
              color={item.color}
              rotation={item.rotation}
            >
              {item.text}
              <meshStandardMaterial color={item.color} />
            </Text3D>
          ))}

          <EffectComposer>
            {/* Bloom para resaltar los objetos */}
            <Bloom
              intensity={0.5} // Intensidad del efecto
              luminanceThreshold={0.1} // Nivel de brillo mínimo para aplicar el efecto
              luminanceSmoothing={0.9} // Transición suave
              blendFunction={BlendFunction.ADD} // Combina el efecto
            />
            {/* Depth of Field para un desenfoque sutil */}
            <DepthOfField
              focusDistance={focusDistance} // Ajusta la distancia focal
              focalLength={0.1} // Longitud focal
              bokehScale={5} // Escala del efecto bokeh
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </>
  );
};

export default Shortage;
