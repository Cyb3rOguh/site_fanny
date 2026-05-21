// src/ColoDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './ColoDetail.css';

// Define valid IDs
const VALID_IDS = ['1', '2', '3', '4', '5', '6', '7'] as const;
type ColoId = typeof VALID_IDS[number];

// Define the type for our content
type ProjectData = {
  title: string;
  description: string;
  images: string[]; // Array of image paths
};

const ColoDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Data with specific images for each project
  const content: Record<ColoId, ProjectData> = {
    '1': {
      title: 'ZUSHILEAKS - Caballero et JeanJass feat Chilly Gonzales',
      description: '<strong>Crédits</strong><br/>Réalisation : Augen<br/>Production : Call-me agency<br/>DOP : Valentin Deluy',
      images: [
        '/Stills/CaballeroetJeanJass/CaballeroetJeanJass.webp',
        '/Stills/CaballeroetJeanJass/CaballeroetJeanJass2.webp',
        '/Stills/CaballeroetJeanJass/CaballeroetJeanJass3.webp',
        '/Stills/CaballeroetJeanJass/CaballeroetJeanJass4.webp',
        '/Stills/CaballeroetJeanJass/CaballeroetJeanJass5.webp',
        '/Stills/CaballeroetJeanJass/CaballeroetJeanJass6.webp',
        '/Stills/CaballeroetJeanJass/CaballeroetJeanJass7.webp',
        '/Stills/CaballeroetJeanJass/CaballeroetJeanJass8.webp',
        '/Stills/CaballeroetJeanJass/CaballeroetJeanJass9.webp',
        '/Stills/CaballeroetJeanJass/CaballeroetJeanJass10.webp',
        '/Stills/CaballeroetJeanJass/CaballeroetJeanJass11.webp',
        '/Stills/CaballeroetJeanJass/CaballeroetJeanJass12.webp',
      ]
    },
    '2': {
      title: 'Age Nouveau',
      description: '<strong>Crédits</strong><br/>Réalisation : Simon Bérard<br/>',
      images: [
        '/Stills/AgeNouveau/AgeNouveau1.webp',
        '/Stills/AgeNouveau/AgeNouveau3.webp',
        '/Stills/AgeNouveau/AgeNouveau4.webp',
        '/Stills/AgeNouveau/AgeNouveau5.webp',
        '/Stills/AgeNouveau/AgeNouveau6.webp',
        '/Stills/AgeNouveau/AgeNouveau7.webp',
        '/Stills/AgeNouveau/AgeNouveau8.webp',
        '/Stills/AgeNouveau/AgeNouveau9.webp',
      ]
    },
    
    '3': {
      title: 'Miami Bass',
      description: '<strong>Crédits</strong><br/>Réalisation : Augen<br/>DOP : Loan Stauffer',
      images: [
        '/Stills/Miamibass/Miamibass1.webp',
        '/Stills/Miamibass/Miamibass2.webp',
        '/Stills/Miamibass/Miamibass3.webp',
        '/Stills/Miamibass/Miamibass4.webp',
        '/Stills/Miamibass/Miamibass5.webp',
        '/Stills/Miamibass/Miamibass6.webp',
        '/Stills/Miamibass/Miamibass7.webp',
        '/Stills/Miamibass/Miamibass8.webp',
        '/Stills/Miamibass/Miamibass9.webp',
        '/Stills/Miamibass/Miamibass10.webp',
        '/Stills/Miamibass/Miamibass11.webp',
      ]
    },
    '4': {
      title: 'Rivella',
      description: '<strong>Crédits</strong><br/>Réalisation : Fanny Diêu Vo',
      images: [
        '/Stills/Rivella/Rivella1.webp',
        '/Stills/Rivella/Rivella2.webp',
        '/Stills/Rivella/Rivella3.webp',
        '/Stills/Rivella/Rivella4.webp',
        '/Stills/Rivella/Rivella5.webp',
      ]
    },
    '5': {
      title: 'HesitOut',
      description: '<strong>Crédits</strong><br/>Réalisation : Robin Spycher',
      images: [
        '/Stills/HesitOut/HeistOut1.webp',
        '/Stills/HesitOut/HeistOut2.webp',
        '/Stills/HesitOut/HeistOut3.webp',
        '/Stills/HesitOut/HeistOut4.webp',
        '/Stills/HesitOut/HeistOut5.webp',
        '/Stills/HesitOut/HeistOut6.webp',
        '/Stills/HesitOut/HeistOut7.webp',
        '/Stills/HesitOut/HeistOut8.webp',
        '/Stills/HesitOut/HeistOut9.webp',
      ]
    },
    '6': {
      title: 'Mariage',
      description: '<strong>Crédits</strong><br/>Réalisation : Sylvain Richoz',
      images: [
        '/Stills/Mariage/Mariage1.webp',
        '/Stills/Mariage/Mariage2.webp',
        '/Stills/Mariage/Mariage3.webp',
        '/Stills/Mariage/Mariage4.webp',
        '/Stills/Mariage/Mariage5.webp',
      ]
    },
    
    '7': {
      title: 'Gagner',
      description: '<strong>Crédits</strong><br/>Réalisation : Hugo Borel<br/>DOP : Lucas Geneveys',
      images: [
        '/Stills/Gagner/GagnerCestBien1.webp',
        '/Stills/Gagner/GagnerCestBien7.webp',
        '/Stills/Gagner/GagnerCestBien3.webp',
        '/Stills/Gagner/GagnerCestBien4.webp',
        '/Stills/Gagner/GagnerCestBien5.webp',
        '/Stills/Gagner/GagnerCestBien6.webp',
      ]
    },
  };

  // Safely get item — fallback to first item if invalid ID
  const project = content[id as ColoId] || content['1'];

  const handleBack = () => {
    window.history.back();
  };

  return (
  <div className="detail-container">
    <header className="detail-header">
      <h1 className="detail-title">{project.title}</h1>
      
      {/* Replaced <p> with <div> and dangerouslySetInnerHTML */}
      <div 
        className="detail-description" 
        dangerouslySetInnerHTML={{ __html: project.description }} 
      />

      <button onClick={handleBack} className="detail-back-btn">
        ← Retour
      </button>
    </header>

    <div className="detail-grid">
      {project.images.map((imgSrc, index) => (
        <div key={index} className="detail-grid-item">
          <img 
            src={imgSrc} 
            alt={`${project.title} - Vue ${index + 1}`}
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x450?text=Image+Not+Found';
            }}
          />
        </div>
      ))}
    </div>
  </div>
);
};

export default ColoDetail;