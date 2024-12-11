import React from 'react'
import { animated, useSpring } from '@react-spring/three';

export function CoralRed({ nodes, materials }) {
  // Definimos una animación que hace "correr" una fase de 0 a 2π continuamente
  const { phase } = useSpring({
    from: { phase: 0 },
    to: { phase: 2 * Math.PI },
    loop: true,
    config: { duration: 2000 } // Ajusta la duración para cambiar la velocidad de la oscilación
  });

  // mapeamos la fase a un valor senoidal
  // Por ejemplo, la rotación base del coral es Math.PI / 2 en Z,
  // y le sumamos una pequeña variación senoidal.
  const amplitude = 0.05; // Ajusta la amplitud para más o menos inclinación

  return (
    <animated.group>
      <animated.mesh
        name="coral_small_red"
        geometry={nodes.coral_small_red.geometry}
        material={materials['atlas_LPUP.031']}
        position={[5.116, -3.567, 51.491]}
        rotation={[
          Math.PI / 2, 
          0, 
          // Usamos la prop "phase" para calcular la rotación en Z
          phase.to((val) => Math.PI / 2 + Math.sin(val) * amplitude)
        ]}
        scale={0.01}
      />
    </animated.group>
  )
}

export default CoralRed;
useGLTF.preload('/3d-models-contamination/shark-animated.glb')