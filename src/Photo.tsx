// src/Photo.tsx
import React from 'react';

const photos = [
  'Collab-David-Haefeli.webp',
  'Filipa.webp',
  'Hugo-1.webp',
  'Hugo-2.webp',
  'Laurent.webp',
  'Mais.webp',
  'Moon-Filipa-1.webp',
  'Moon-Filipa-2.webp',
  'Samantha.webp',
  'Tapis.webp',
];

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
        gridAutoRows: 'auto', // 👈 Let rows auto-size
      }}>
        {photos.map((photo, i) => (
          <div
            key={i}
            style={{
              backgroundColor: '#eee',
              padding: '0.5rem',
              border: '1px solid #ccc',
              borderRadius: '8px',
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              // No fixed height/width — let image dictate size
            }}
          >
            <img
              src={`/Photos/${photo}`}
              alt={photo.replace('.webp', '').replace(/-/g, ' ')}
              style={{
                maxWidth: '100%',
                maxHeight: '300px', // 👈 Optional: cap max height for very tall images
                objectFit: 'contain', // 👈 Preserve aspect ratio, no crop
                objectPosition: 'center',
                borderRadius: '4px',
                // Allow image to set its own size
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photo;