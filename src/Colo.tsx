// src/Colo.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Colo.css';

type ColoItem = {
  id: string;
  image: string;
  label: string; // Added label property
};

const Colo: React.FC = () => {
  const items: ColoItem[] = [
    { id: '1', image: '/Stills/CaballeroetJeanJass/CaballeroetJeanJass.webp', label: 'ZUSHILEAKS - Caballero & Jean Jass feat. Chilly Gonzales' },
    { id: '2', image: '/Stills/AgeNouveau/AgeNouveau9.webp', label: 'Âge Nouveau' },
    { id: '3', image: '/Stills/MiamiBass/MiamiBass8.webp', label: 'Miami Bass - Di-meh' },
    { id: '4', image: '/Stills/Rivella/Rivella2.webp', label: 'Vidéo pour Rivella' },
    { id: '5', image: '/Stills/HesitOut/HeistOut1.webp', label: 'Heist Out' },
    { id: '6', image: '/Stills/Mariage/Mariage3.webp', label: 'Mariage' },
    { id: '7', image: '/Stills/Gagner/GagnerCestBien5.webp', label: 'Gaajuto - Gagner c\'est bien perdre ça craint' },
  ];

  return (
    <div className="colo-container">
      <h2 className="colo-title">
        Etalonnage
      </h2>

      {/* Grid: Now configured for 1 column via CSS */}
      <div className="colo-grid">
        {items.map(item => (
          <Link
            key={item.id}
            to={`/colo/${item.id}`}
            className="colo-item"
          >
            <div className="colo-item-inner">
              <div className="colo-image-wrapper">
                <img
                  src={item.image}
                  alt={item.label}
                  loading="lazy"
                />
              </div>
              <div className="colo-label">
                {item.label}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Colo;