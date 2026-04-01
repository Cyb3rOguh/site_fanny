// src/Hero.tsx
import React from 'react';
import './Heros.css'; // Ensure filename matches your actual CSS file (Hero.css vs Heros.css)

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      {/* 1. Background Video */}
      <video
        className="hero-video-bg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/herobg.mp4" type="video/mp4" />
        <source src="/herobg.webm" type="video/webm" />
      </video>

      {/* 2. SVG Title (Sits on top of video) */}
      <div className="hero-svg-wrapper">
        <img 
          src="/titrehero.svg" 
          alt="Fanny Vo Title" 
          className="hero-svg"
        />
      </div>
      
      {/* 3. Optional Text Overlay (If you need extra text below/above the SVG) */}
      <div className="hero-content">
        {/* <h1 className="hero-title">Additional Text</h1> */}
      </div>
    </div>
  );
};

export default Hero;