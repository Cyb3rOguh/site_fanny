// src/Colo.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Colo.css'; // Import the CSS file

// Define the type for our items
type ColoItem = {
  id: string;
  image: string; 
};

const Colo: React.FC = () => {
  const items: ColoItem[] = [
    { id: '1', image: '/Stills/CaballeroetJeanJass/CaballeroetJeanJass.webp' },
    { id: '2', image: '/Stills/Mariage/Mariage3.webp' },
    { id: '3', image: '/Stills/MiamiBass/MiamiBass8.webp' },
    { id: '4', image: '/Stills/Rivella/Rivella2.webp' },
    { id: '5', image: '/Stills/HesitOut/HeistOut1.webp' },
    { id: '6', image: '/Stills/AgeNouveau/AgeNouveau9.webp' },
    { id: '7', image: '/Stills/Gagner/GagnerCestBien5.webp' },
  ];

  return (
    <div className="colo-container">
      {/* Label */}
      <h2 className="colo-title">
        Etalonnage
      </h2>

      {/* Grid */}
      <div className="colo-grid">
        {items.map(item => (
          <Link
            key={item.id}
            to={`/colo/${item.id}`}
            className="colo-item"
          >
            <img
              src={item.image}
              alt="Project still"
              loading="lazy" // Improves performance
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Colo;