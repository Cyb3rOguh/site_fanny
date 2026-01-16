// src/Photo.tsx
import React from 'react';
import './Photo.css';

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
    <section className="photo-section">
      <h1 className="photo-title">Photos</h1>

      <div className="photo-masonry">
        {photos.map((photo, i) => (
          <img
            key={i}
            src={`/Photos/${photo}`}
            alt={photo.replace('.webp', '').replace(/-/g, ' ')}
            className="photo-item"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};

export default Photo;