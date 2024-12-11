import React from "react";
import { EffectComposer, Bloom, DepthOfField } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import ProblemModel from "./ProblemModel";

// Modelos
import { ContaminationModel } from "./modelsQuizS/ContaminationModel";
import { CleanWaterModel } from "./modelsQuizS/CleanWaterModel";
import { Grifo } from "./modelsQuizS/Grifo";
import { GrifoAbierto } from "./modelsQuizS/GrifoAbierto";

function QuizShortage({ ecosystemState, setEcosystemState, setScore }) {
  const resolveProblem = (problem) => {
    setEcosystemState((prev) => {
      if (!prev[problem]) {
        setScore((prevScore) => prevScore + 10);
      }

      return {
        ...prev,
        [problem]: true,
      };
    });
  };

  return (
    <>
      {/* Iluminación */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} castShadow />

      {/* Modelos interactivos */}
      <ProblemModel
        modelProblem={<ContaminationModel />}
        modelSolution={<CleanWaterModel />}
        isResolved={ecosystemState.pez1}
        onResolve={() => resolveProblem("pez1")}
        position={[-13, 0, -10]}
        rotation={[0, 1, 0]}
      />
      <ProblemModel
        modelProblem={<ContaminationModel />}
        modelSolution={<CleanWaterModel />}
        isResolved={ecosystemState.pez2}
        onResolve={() => resolveProblem("pez2")}
        position={[-8, 0, -12]}
        rotation={[0, 1, 0]}
      />
      <ProblemModel
        modelProblem={<ContaminationModel />}
        modelSolution={<CleanWaterModel />}
        isResolved={ecosystemState.pez3}
        onResolve={() => resolveProblem("pez3")}
        position={[-6, 0, -6]}
        rotation={[0, 1, 0]}
      />
      <ProblemModel
        modelProblem={<ContaminationModel />}
        modelSolution={<CleanWaterModel />}
        isResolved={ecosystemState.pez4}
        onResolve={() => resolveProblem("pez4")}
        position={[-9, 0, -17]}
        rotation={[0, 1, 0]}
      />
      <ProblemModel
        modelProblem={<GrifoAbierto />}
        modelSolution={<Grifo />}
        isResolved={ecosystemState.grifo}
        onResolve={() => resolveProblem("grifo")}
        position={[16.5, 0.57, -13.7]}
        rotation={[0, -0.7, 0]}
        sclaeFactor={1}
      />

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
          focusDistance={0.02} // Ajusta la distancia focal
          focalLength={0.1} // Longitud focal
          bokehScale={5} // Escala del efecto bokeh
        />
      </EffectComposer>
    </>
  );
}

export default QuizShortage;
