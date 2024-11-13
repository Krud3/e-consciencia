//import Header from "../../components/Header/Header";
import { Canvas } from "@react-three/fiber";
import { Model } from "./World";
import { OrbitControls, Environment, Text, Text3D } from "@react-three/drei";
import BlockWorld from "../contamination/BlockWorld";
import LightsShortage from "./lights/LightsShortage";
import React, { useState, useEffect, Suspense } from "react";
import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { Sky, Stars } from "@react-three/drei";

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
      enableZoom={false}
      enablePan={false}
      enableRotate={false}
    />
  );
}

const Shortage = () => {
  const [viewIndex, setViewIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [focusMode, setFocusMode] = useState(false);
  const [showInfo, setShowInfo] = useState(false); // Nuevo estado para mostrar el mensaje

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

    console.log(viewIndex);

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAnimating]);

  useEffect(() => {
    const handleClick = () => {
      setFocusMode((prev) => !prev);
    };

    // Agregar el evento de clic
    window.addEventListener("click", handleClick);

    // Limpiar el evento al desmontar el componente
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const textos = [
    {
      title: "La Crisis del Agua: Un Problema Global",
      txt: "El agua es vital, pero su escasez es un problema creciente. El cambio climático, la sobrepoblación y la contaminación están afectando su disponibilidad. Es urgente tomar conciencia sobre su uso responsable para asegurar su acceso en el futuro.",
    },
    {
      title: "Cada Gota Cuenta",
      txt: "Cada gota cuenta. Pequeños cambios, como cerrar el grifo al cepillarse o reducir el tiempo en la ducha, ayudan a ahorrar agua.",
    },
    {
      title: "El Agua Potable es Escasa",
      txt: "El agua potable es escasa. Aunque el 70% de la Tierra está cubierta de agua, solo el 1% es accesible para consumo humano.",
    },
    {
      title: "Acción Contra la Escasez de Agua",
      txt: "La escasez de agua impacta a millones. Reducir el desperdicio y apoyar soluciones sostenibles es clave para enfrentar este reto global.",
    },
  ];

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

  return (
    <>
      {focusMode && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black bg-opacity-80 p-8 text-2xl text-white">
          <p className="text-3xl text-center mb-4">
            <strong>{textos[viewIndex].title}</strong>
          </p>
          <p className="text-3xl text-center">{textos[viewIndex].txt}</p>
        </div>
      )}
      {/* Botón de información */}
      <button
        onClick={() => setShowInfo(!showInfo)} // Cambia el estado al hacer clic
        className="absolute top-20 left-4 z-30 p-2 bg-blue-500 text-white rounded-full"
      >
        ?
      </button>

      {/* Mostrar el mensaje solo si showInfo es true */}
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
            distance={4500} // Tamaño del cielo
            sunPosition={[200, 20, 100]} // Posición del sol para sombras
            inclination={0.6} // Ángulo del sol
            azimuth={0.25} // Rotación del cielo
          />
          <Stars
            radius={100} // Radio de las estrellas
            depth={50} // Profundidad de las estrellas
            count={5000} // Cantidad de estrellas
            factor={4} // Tamaño de las estrellas
            saturation={0} // Saturación para blanco puro
            fade // Hace que las estrellas se desvanezcan con la distancia
          />
          <CameraAnimation
            viewIndex={viewIndex}
            positions={positions}
            tarjets={focus}
          />
          <Model />
          <LightsShortage />
          <Text3D
            position={[4.3, 5, -7.5]}
            font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
            size={0.4}
            color="blue"
            rotation={[0, -Math.PI * 0.13, 0]}
          >
            shortage
            <meshStandardMaterial color="blue" />
          </Text3D>

          <Text3D
            position={[8, 5, 6]}
            font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
            size={0.4}
            color="white"
            rotation={[0, -Math.PI * 0.75, 0]}
          >
            drop
            <meshStandardMaterial color="blue" />
          </Text3D>

          <Text3D
            position={[-5.5, 5, 12]}
            font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
            size={0.4}
            color="blue"
            rotation={[0, Math.PI * 0.74, 0]}
          >
            Scanty
            <meshStandardMaterial color="blue" />
          </Text3D>

          <Text3D
            position={[-11.5, 5, -1]}
            font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
            size={0.4}
            color="white"
            rotation={[0, Math.PI * 0.47, 0]}
          >
            impact
            <meshStandardMaterial color="blue" />
          </Text3D>
        </Suspense>
      </Canvas>
    </>
  );
};

export default Shortage;
