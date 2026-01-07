// src/Photo.tsx
import React from 'react';

const Photo: React.FC = () => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1rem',
      padding: '2rem',
      backgroundColor: '#fff',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Placeholder photos */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          style={{
            backgroundColor: '#ddd',
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
  );
};

export default Photo;