// src/components/Introduction.jsx
import React from 'react';
//import './Introduction.css';

const Introduction = () => {
  return (
    <section className="introduction-section">
      <h1 className="text-4xl font-bold text-center mt-8">
        Water Challenges: Contamination, Scarcity, and Acidification
      </h1>
      <p className="text-lg text-center mx-auto mt-4 max-w-2xl">
        Water is essential for life, yet our world's water resources are facing unprecedented challenges.
        <strong> Contamination </strong> from pollutants threatens ecosystems and human health.
        <strong> Shortage </strong> due to overuse and climate change affects billions of people worldwide.
        <strong> Acidification</strong>, driven by increased carbon dioxide absorption, impacts marine life and ocean chemistry.
        It is crucial to understand these issues to take action towards a sustainable future.
      </p>
    </section>
  );
};

export default Introduction;
