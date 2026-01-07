// src/Colo.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Colo: React.FC = () => {
  const items = [
    { id: '1', label: 'salut' },
    { id: '2', label: 'Cell 2' },
    { id: '3', label: 'Cell 3' },
    { id: '4', label: 'Cell 4' },
    { id: '5', label: 'Cell 5' },
    { id: '6', label: 'Cell 6' },
    { id: '7', label: 'Cell 7' },
  ];

  return (
    <div style={{
      marginBottom: '2rem'
    }}>
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
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
        padding: '2rem',
        backgroundColor: '#f0f0f0',
        fontFamily: 'Arial, sans-serif'
      }}>
        {items.map(item => (
          <Link
            key={item.id}
            to={`/colo/${item.id}`}
            style={{
              backgroundColor: '#ddd',
              padding: '1rem',
              textAlign: 'center',
              textDecoration: 'none',
              color: '#000',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontWeight: 'bold',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ccc'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ddd'}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Colo;