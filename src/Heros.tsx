// src/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section style={{
      padding: '4rem 2rem',
      textAlign: 'center',
      backgroundColor: '#f8f9fa',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Fanny</h1>
      <p>This is the hero section — your first component!</p>
    </section>
  );
};

export default Hero;