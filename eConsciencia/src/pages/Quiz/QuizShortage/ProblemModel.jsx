import { useSpring, animated } from "@react-spring/three";

function ProblemModel({
  modelProblem,
  modelSolution,
  isResolved,
  onResolve,
  position,
  rotation,
  sclaeFactor = 1,
}) {
  // Animación con escala dinámica
  const props = useSpring({
    scale: isResolved
      ? [1.2 * sclaeFactor, 1.2 * sclaeFactor, 1.2 * sclaeFactor]
      : [1 * sclaeFactor, 1 * sclaeFactor, 1 * sclaeFactor],
    config: { duration: 500 },
    onRest: () => {
      if (isResolved) {
        // Regresar a escala original después de completar la animación
        props.scale.start([1, 1, 1]);
      }
    },
  });

  return (
    <animated.mesh
      scale={props.scale}
      position={position}
      onClick={onResolve}
      rotation={rotation}
    >
      {isResolved ? modelSolution : modelProblem}
    </animated.mesh>
  );
}

export default ProblemModel;
