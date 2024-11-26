import React, { useEffect, useRef } from "react";
import { HealthyWorld } from "./HealthyWorld";
import { gsap } from "gsap";
import { Physics } from "@react-three/rapier";
import { DegradedWorld } from "./DegradedWorld";

export function Scene({ isDamaged, setIsDamaged }) {
  const healthRef = useRef(); // Referencia para acceder a los peces y corales

  const animateToDamaged = () => {
    setIsDamaged(true);
    if (!healthRef.current) return;
    console.log("animacion");

    // Accede a los corales y peces desde la referencia del componente Health
    const corals = healthRef.current.children[3]; // Índice basado en el orden del render
    const fish = healthRef.current.children[4]; // Índice basado en el orden del render

    // Animar corales hacia arriba
    gsap.to(corals.position, {
      y: "+=100", // Los corales suben 10 unidades
      duration: 2,
      ease: "power2.in",
    });

    // Animar peces hacia arriba
    gsap.to(fish.position, {
      y: "+=100", // Los peces suben 10 unidades
      duration: 2,
      ease: "power2.in",
    });

    // Opcional: Escalar a 0 para hacerlos desaparecer
    gsap.to([corals.scale, fish.scale], {
      x: 0,
      y: 0,
      z: 0,
      duration: 2,
      delay: 1,
      ease: "power2.out",
    });

    // Esperar 3 segundos antes de cambiar el estado
    setTimeout(() => {
      setIsDamaged(true); // Cambia el estado después de 3 segundos
    }, 3000);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === " ") {
        if (!isDamaged) {
          animateToDamaged();
        } else {
          setIsDamaged(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDamaged]);

  return (
    <>
      <Physics>
        {!isDamaged ? <HealthyWorld ref={healthRef} /> : <DegradedWorld />}
      </Physics>
    </>
  );
}
