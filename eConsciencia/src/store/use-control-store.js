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
    }
  ],

  dataCamera: [
    {
      position: [0, 65, 0],
      target: [0, 0, 0],
    },
    {
      position: [40, 10, 30],
      target: [-53.698, 0, 13.861],
    },
    {
      position: [45, 15, 35],
      target: [36.455, 5.99, -54.691],
    },
    {
      position: [50, 20, 40],
      target: [-27.777, -2.651, 49.918],
    },
    {
      position: [55, 25, 50],
      target: [0, 65, 0],
    },
    {
      position: [60, 30, 65],
      target: [0, 65, 0],
    },
    {
      position: [65, 35, 70],
      target: [0, 65, 0],
    },
    {
      position: [70, 40, 80],
      target: [0, 65, 0],
    },
  ],

  handleNext: () => set((state) => ({
    currentIndex: (state.currentIndex + 1) % state.data.length
  })),

  handlePrev: () => set((state) => ({
    currentIndex: (state.currentIndex - 1 + state.data.length) % state.data.length
  })),

  setIsPlaying: () => set((state) => ({
    isPlaying: !state.isPlaying
  })),
}));

export default useControlStore;
