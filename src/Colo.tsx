// src/Colo.tsx
import React from 'react';
import { Link } from 'react-router-dom';

// Define the type for our items
type ColoItem = {
  id: string;
  label: string;
  image: string; // Path to the image
};

const Colo: React.FC = () => {
  const items: ColoItem[] = [
    { id: '1', label: 'CabaJJ', image: '/Stills/CaballeroetJeanJass/CaballeroetJeanJass.webp' },
    { id: '2', label: 'Mariage', image: '/Stills/Mariage/Mariage1.webp' },
    { id: '3', label: 'Miami Bass', image: '/Stills/MiamiBass/MiamiBass.webp' },
    { id: '4', label: 'Rivella', image: '/Stills/Rivella/Rivella4.webp' },
    { id: '5', label: 'IcedOut', image: '/Colo/cell5.webp' },
    { id: '6', label: 'AgeNouveau', image: '/Colo/cell6.webp' },
    { id: '7', label: 'Gagner', image: '/Colo/cell7.webp' },
  ];

  return (
    <div style={{ marginBottom: '2rem' }}>
      {/* Label */}
      <h2 style={{
        fontFamily: 'Arial, sans-serif',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        textAlign: 'center',
        color: '#333'
      }}>
        Colorimétrie
      </h2>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', // Made responsive
        gap: '1rem',
        padding: '1rem',
        backgroundColor: '#f0f0f0',
        fontFamily: 'Arial, sans-serif',
        borderRadius: '8px'
      }}>
        {items.map(item => (
          <Link
            key={item.id}
            to={`/colo/${item.id}`}
            style={{
              backgroundColor: '#fff',
              padding: '0.5rem',
              textAlign: 'center',
              textDecoration: 'none',
              color: '#000',
              borderRadius: '8px',
              border: '1px solid #ccc',
              overflow: 'hidden',
              transition: 'transform 0.2s, box-shadow 0.2s',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <img
              src={item.image}
              alt={item.label}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '4px',
                marginBottom: '0.5rem'
              }}
            />
            <span style={{
              fontWeight: 'bold',
              fontSize: '1rem',
              color: '#333'
            }}>
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Colo;