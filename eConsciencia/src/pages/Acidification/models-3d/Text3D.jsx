import React, { useRef, useEffect } from "react";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber"; // Importar useFrame

const Text3D = ({ message, position }) => {
  const textRef = useRef();

  // Asegurarse de que el texto siempre mire hacia la cámara
  useFrame(({ camera }) => {
    if (textRef.current) {
      textRef.current.lookAt(camera.position); // Hacer que el texto mire hacia la cámara
    }
  });

  useEffect(() => {
    if (textRef.current) {
      textRef.current.text = message; // Actualiza el texto cuando cambia el mensaje
    }
  }, [message]);

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={1}
      color="black"
      anchorX="center"
      anchorY="middle"
      maxWidth={200}
    >
      {message}
    </Text>
  );
};

export default Text3D;

//position={[-2, 8, 0]} // Posición del texto en el espacio 3D
