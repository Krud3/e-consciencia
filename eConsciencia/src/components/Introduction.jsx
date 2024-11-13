// src/components/Introduction.jsx
import React from 'react';
//import './Introduction.css';

const Introduction = () => {
  return (
    <section className="introduction-section">
      <h1 className="text-4xl font-bold text-center mt-8">
        Water Challenges: Contamination, Shortage and Acidification
      </h1>
      <p className="text-lg text-center mx-auto mt-4 max-w-2xl">
        Water is essential for life, yet our world's water resources are facing serious threats. Explore our immersive 3D web experience to understand these critical issues:
        <strong> Contamination </strong> from pollutants disrupts ecosystems and endangers human health.
        <strong> Shortage </strong> due to overuse and climate change impacts billions of people worldwide.
        <strong> Acidification</strong>, caused by increased carbon dioxide absorption, affects marine life and ocean chemistry.
        Join us on this interactive journey to learn, engage, and inspire action toward a sustainable future.
      </p>
    </section>
  );
};

export default Introduction;
