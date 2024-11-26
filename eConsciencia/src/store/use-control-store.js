import { ZoomIn } from 'lucide-react';
import { create } from 'zustand';

const useControlStore = create((set) => ({
  currentIndex: 0,
  isPlaying: false,
  data: [
    {
      title: "What is Water Contamination?",
      text: "Water contamination occurs when harmful substances—such as chemicals, microorganisms, or waste materials—enter water bodies like rivers, lakes, oceans, or groundwater. This pollution degrades water quality, making it toxic for humans and the environment."
    },
    // {
    //   title: "Causes of Water Contamination",
    //   text: "Go next ->"
    // },
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
    // {
    //   title: "Effects of Water Contamination",
    //   text: "Go next ->"
    // },
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
    },
    {
      title: "Learn about solutions",
      text: ""
    },


    {
      title: "Industrial Regulations",
      text: "Enforcing strict regulations on industrial discharges to limit the release of toxic substances into the environment."
    },
    {
      title: "Waste Management",
      text: "Proper disposal and recycling of waste to prevent pollutants from entering waterways."
    },
    {
      title: "Water Treatment",
      text: "Installing water treatment plants to purify contaminated water, making it safe for human consumption and the environment."
    },
    {
      title: "Community Education",
      text: "Raising public awareness about the importance of water conservation and how to reduce pollution at the individual level."
    },
  ],
  dataCamera: [
    {
      position: [0, 25, 0],
      target: [0, 20, 20],
      fov: 75,
      near: 0.1,
      far: 1000,
      //zoom: 0,
      //zoom: adjustZoom(calculateDistance([0, 65, 0], [0, 20, 20])),
    },
    {
      position: [0, 0, 50],
      target: [0.305, -2.899, 60.539],
      fov: 75,
      near: 0.1,
      far: 1000,
      zoom: 1,
    },
    {
      position: [0, 0, -30],
      target: [36.455, 5.99, -54.691],
      fov: 75,
      near: 0.1,
      far: 1000,
      zoom: 1,
    },
    {
      position: [40, 0, 22],
      target: [42.671, 0.32, 22.151],
      fov: 75,
      near: 0.1,
      far: 1000,
      zoom: 1,
    },
    {
      position: [48, 3, 10],
      target: [52.055, 0, 10.11],
      fov: 75,
      near: 0.1,
      far: 1000,
      zoom: 1,
    },
    {
      position: [24, 3, 18],
      target: [27.047, 2.46, 18.061],
      fov: 75,
      near: 0.1,
      far: 1000,
      zoom: 1,
    },
    {
      position: [25.893, -3.562, 65.187],
      target: [25.893, -3.562, 65.187],
      fov: 75,
      near: 0.1,
      far: 1000,
      zoom: 1,
    },
    {
      position: [-57.698, 10, 13.861],
      target: [-53.698, 15, 13.861],
      fov: 75,
      near: 0.1,
      far: 1000,
      zoom: 1,
    },
    {
      position: [1, 10, 2],
      target: [0.7, 7, 0],
      fov: 75,
      near: 0.1,
      far: 1000,
      zoom: 1,
    },


    {
      position: [38, 7.99, -44.691],
      target: [36.455, 5.99, -54.691],
      fov: 75,
      near: 0.1,
      far: 1000,
      zoom: 1,
    },
    {
      position: [42.671, 3, 22.151],
      target: [42.671, 0.32, 22.151],
      fov: 75,
      near: 0.1,
      far: 1000,
      zoom: 1,
    },

    {
      position: [0, 65, 0],
      target: [0, 0, 0],
      fov: 75,
      near: 0.1,
      far: 1000,
      zoom: 1,
    },

    {
      position: [40.455, 4, 17.445],
      target: [40.455, 1, 17.445],
      fov: 75,
      near: 0.1,
      far: 1000,
      zoom: 1,
    },
  ],

  handleNext: () => set((state) => ({
    currentIndex: (state.currentIndex + 1) % state.data.length
  })),

  handlePrev: () => set((state) => ({
    currentIndex: (state.currentIndex - 1 + state.data.length) % state.data.length
  })),

  setIsPlaying: () => set((state) => {
    const newIsPlaying = !state.isPlaying;
    return {
      isPlaying: newIsPlaying,
      currentIndex: newIsPlaying ? state.currentIndex : 0,
    };
  }),

}));

export default useControlStore;