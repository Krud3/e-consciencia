import { create } from 'zustand';

const useControlStore = create((set) => ({
  currentIndex: 0,
  isPlaying: false,
  data: [
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
