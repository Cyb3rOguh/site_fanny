// src/Photo.tsx
import React from 'react';

const Photo: React.FC = () => {
  return (
    <div style={{ marginBottom: '2rem' }}>
      {/* Titre */}
      <h1 style={{
        fontFamily: 'Arial, sans-serif',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        textAlign: 'center',
        color: '#333'
      }}>
        Photo
      </h1>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        padding: '1rem',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px'
      }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            style={{
              backgroundColor: '#eee',
              padding: '1rem',
              textAlign: 'center',
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #ccc',
              borderRadius: '8px'
            }}
          >
            Photo {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photo;