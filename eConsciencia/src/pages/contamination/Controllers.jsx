import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useCallback, useState, useEffect } from "react";
import Conscientization from './texts/Conscientization';
import "./Controllers.css";


const Controllers = () => {
    const { viewport, size } = useThree();

    // Tamaño del viewport (en unidades del mundo 3D)
    const { width, height } = viewport;
  
    // Tamaño del canvas en píxeles
    const { width: canvasWidth, height: canvasHeight } = size;
    console.log(canvasWidth, canvasHeight, height, canvasHeight -(canvasHeight/2));

    const [currentIndex, setCurrentIndex] = useState(0);

    const data = [
        {
          title: "What is Water Contamination?",
          text: "Water contamination occurs when harmful substances—such as chemicals, microorganisms, or waste materials—enter water bodies like rivers, lakes, oceans, or groundwater. This pollution degrades water quality, making it toxic for humans and the environment."
        },
        {
          title: "Causes of Water Contamination",
          text: "Go next ->"
        },
        {
          title: "Industrial Waste",
          text: "Chemical Discharge: Factories release pollutants like heavy metals (lead, mercury) and toxic chemicals directly into water bodies.\nThermal Pollution: Industrial processes often discharge heated water, raising the temperature of natural water bodies and disrupting aquatic ecosystems."
        },
        {
          title: "Plastic Pollution",
          text: "Single-Use Plastics: Items like bags, bottles, and straws end up in oceans, breaking down into microplastics.\nMicroplastics: Tiny plastic particles are ingested by marine life, entering the food chain and affecting biodiversity."
        },
        {
          title: "Agricultural Runoff",
          text: "Pesticides and Fertilizers: Chemicals used in farming wash into waterways during rainfall.\nNutrient Pollution: Excess nutrients cause algal blooms that deplete oxygen in water, leading to dead zones where aquatic life cannot survive."
        },
        {
          title: "Effects of Water Contamination",
          text: "Go next ->"
        },
        {
          title: "On Human Health",
          text: "Waterborne Diseases: Contaminated water spreads illnesses like cholera, dysentery, and typhoid fever, affecting millions globally.\nChronic Health Issues: Long-term exposure to polluted water can lead to cancers, reproductive problems, and neurological disorders."
        },
        {
          title: "On Wildlife",
          text: "Habitat Destruction: Pollutants destroy natural habitats, leading to loss of biodiversity.\nBioaccumulation: Toxins accumulate in the bodies of aquatic organisms, impacting entire food webs and predator species."
        },
        {
          title: "On Ecosystems",
          text: "Ecosystem Imbalance: Altered water chemistry affects plant growth and animal reproduction.\nLoss of Biodiversity: Sensitive species may become extinct, reducing ecosystem resilience."
        }
      ];

      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        console.log("Index after Next:", currentIndex);
      };
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
        console.log("Index after Prev:", currentIndex);
      };
      useEffect(() => {
        console.log("Current Index Updated:", currentIndex);
      }, [currentIndex]);

      useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === 'ArrowLeft') {
            handlePrev();
          } else if (event.key === 'ArrowRight') {
            handleNext();
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        // Cleanup function to remove the event listener
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, [handlePrev, handleNext]);
    return (
        <>
            <Html
            style={{
                position: "relative",
                right: `${canvasWidth -(canvasWidth/2)-200}px`,
                }}
                
            >
                <div onClick={handlePrev} className="left-arrow"></div> 
            </Html>

            <Html
            style={{
                position: "relative",
                left: `${canvasWidth -(canvasWidth/2)-200}px`,
                }}
                
            >
                <div onClick={handleNext} className = "right-arrow"></div>
            </Html>
            <Conscientization height={height} title={data[currentIndex].title} text={data[currentIndex].text}/>
        </>
      );
  };
  

export default Controllers;