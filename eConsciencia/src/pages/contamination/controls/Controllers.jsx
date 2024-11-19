import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import Conscientization from "../texts/Conscientization";
import useControlStore from "../../../store/use-control-store";
import "./Controllers.css";

const Controllers = () => {
  const { viewport, size } = useThree();
  const { width, height } = viewport;
  const { width: canvasWidth, height: canvasHeight } = size;

  const { currentIndex, data, handleNext, handlePrev, isPlaying, setIsPlaying } = useControlStore();

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

  return (
    <>
      {!isPlaying && (<Html center style={{ position: "relative",
        
       }}>
        <button onClick={setIsPlaying} className="is-playing-button" role="button">
          Start the journey
        </button>
      </Html>)}

      {isPlaying && (<Html
        style={{
          position: "absolute",
          right: `${canvasWidth - canvasWidth / 2 - 200}px`,
        }}
      >
        <button className="arrow-container" role="button" onClick={handlePrev}>
          <div className="left-arrow"></div>
        </button>
      </Html>)}

      {isPlaying && (<Html
        style={{
          position: "absolute",
          left: `${canvasWidth - canvasWidth / 2 - 200}px`,
        }}
      >
        <button className="arrow-container" role="button" onClick={handleNext}>
          <div className="right-arrow"></div>
        </button>
      </Html>)}

      {isPlaying && (<Conscientization
        height={height}
        title={data[currentIndex].title}
        text={data[currentIndex].text}
      />)}


      {isPlaying && (<Html  
      style={{ position: "relative",
        left: `${canvasWidth - canvasWidth / 2 - 200}px`,
        top: `${canvasHeight - canvasHeight / 2 - 200}px`,
      }}>
        <button onClick={setIsPlaying} className="re-start-button" role="button">
          re-start
        </button>
      </Html>)}
    </>
  );
};

export default Controllers;


